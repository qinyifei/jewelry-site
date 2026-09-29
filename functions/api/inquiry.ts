// Cloudflare Pages Function：POST /api/inquiry
// 接收询盘表单，通过 Resend 发邮件到你的邮箱。
//
// 需要在 Cloudflare Pages → Settings → Variables and Secrets 里配置：
//   RESEND_API_KEY        Resend 的 API Key（设为 Secret）
//   INQUIRY_TO            收询盘的邮箱，例如 sales@yourbrand.com，多个用逗号分隔
//   INQUIRY_FROM          发件人，必须是 Resend 里验证过的域名，例如 "Website <noreply@yourbrand.com>"
//   TURNSTILE_SECRET_KEY  （可选）Cloudflare Turnstile 人机验证密钥

interface Env {
  RESEND_API_KEY: string
  INQUIRY_TO: string
  INQUIRY_FROM: string
  TURNSTILE_SECRET_KEY?: string
}

interface Context {
  request: Request
  env: Env
}

interface Inquiry {
  name?: string
  email?: string
  company?: string
  country?: string
  type?: string
  product?: string
  options?: string
  quantity?: string
  message?: string
  consent?: boolean
  website?: string
  turnstileToken?: string
  page?: string
  lang?: string
}

const TYPES: Record<string, string> = { retail: 'Retail', wholesale: 'Wholesale', oem: 'Custom / OEM' }

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } })

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

const escape = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  let body: Inquiry
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid request' }, 400)
  }

  // 隐藏字段被填写，说明是机器人：假装成功，不发邮件
  if (body.website) return json({ ok: true })

  const data = {
    name: clean(body.name, 100),
    email: clean(body.email, 200),
    company: clean(body.company, 200),
    country: clean(body.country, 100),
    type: TYPES[clean(body.type, 20)] ?? 'Retail',
    product: clean(body.product, 200),
    options: clean(body.options, 200),
    quantity: clean(body.quantity, 20),
    message: clean(body.message, 3000),
    page: clean(body.page, 500),
    lang: clean(body.lang, 10),
  }

  if (!data.name || !data.country || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return json({ error: 'Please fill in all required fields.' }, 422)
  }
  if (body.consent !== true) {
    return json({ error: 'Consent is required.' }, 422)
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const form = new FormData()
    form.append('secret', env.TURNSTILE_SECRET_KEY)
    form.append('response', clean(body.turnstileToken, 2048))
    form.append('remoteip', request.headers.get('CF-Connecting-IP') ?? '')
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form })
    const result = (await verify.json()) as { success: boolean }
    if (!result.success) return json({ error: 'Verification failed.' }, 403)
  }

  const rows: [string, string][] = [
    ['Type', data.type],
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Country', data.country],
    ['Product', data.product],
    ['Options', data.options],
    ['Quantity', data.quantity],
    ['Page', data.page],
    ['Site language', data.lang],
  ]

  const html = `
    <h2>New ${escape(data.type)} enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="color:#777">${k}</td><td>${escape(v)}</td></tr>`)
        .join('')}
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escape(data.message)}</p>`

  const text = `${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')}\n\n${data.message}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.INQUIRY_FROM,
      to: env.INQUIRY_TO.split(',').map(s => s.trim()),
      reply_to: data.email,
      subject: `[${data.type}] Enquiry from ${data.name}${data.product ? ` – ${data.product}` : ''}`,
      html,
      text,
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    return json({ error: 'Failed to send.' }, 502)
  }

  return json({ ok: true })
}
