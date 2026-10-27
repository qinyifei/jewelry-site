<script setup lang="ts">
import { site } from '~/config/site'

const props = defineProps<{
  product?: string
  sku?: string
  defaultType?: 'retail' | 'custom'
  options?: string
}>()

const form = reactive({
  name: '',
  email: '',
  company: '',
  country: '',
  // 咨询类型不再展示：联系页默认零售，定制合作页由 default-type 指定
  type: props.defaultType ?? 'retail',
  product: props.product ? `${props.product}${props.sku ? ` (${props.sku})` : ''}` : '',
  options: props.options ?? '',
  message: '',
  consent: false,
  // 防垃圾提交的隐藏字段，真人不会填写
  website: '',
})

// 国家/地区下拉：存 ISO 代码 + 英文规范名（提交值统一英文），
// 显示名走 i18n 的 countries.* 键，常用市场排最前，其余按当前语言排序
const countries = [
  { code: 'CN', value: 'China' },
  { code: 'HK', value: 'Hong Kong SAR' },
  { code: 'TW', value: 'Taiwan' },
  { code: 'JP', value: 'Japan' },
  { code: 'KR', value: 'South Korea' },
  { code: 'SG', value: 'Singapore' },
  { code: 'US', value: 'United States' },
  { code: 'GB', value: 'United Kingdom' },
  { code: 'AU', value: 'Australia' },
  { code: 'CA', value: 'Canada' },
  { code: 'FR', value: 'France' },
  { code: 'DE', value: 'Germany' },
  { code: 'IT', value: 'Italy' },
  { code: 'ES', value: 'Spain' },
  { code: 'NL', value: 'Netherlands' },
  { code: 'SE', value: 'Sweden' },
  { code: 'DK', value: 'Denmark' },
  { code: 'NO', value: 'Norway' },
  { code: 'FI', value: 'Finland' },
  { code: 'CH', value: 'Switzerland' },
  { code: 'AT', value: 'Austria' },
  { code: 'BE', value: 'Belgium' },
  { code: 'IE', value: 'Ireland' },
  { code: 'AE', value: 'United Arab Emirates' },
  { code: 'SA', value: 'Saudi Arabia' },
  { code: 'QA', value: 'Qatar' },
  { code: 'KW', value: 'Kuwait' },
  { code: 'MY', value: 'Malaysia' },
  { code: 'TH', value: 'Thailand' },
  { code: 'VN', value: 'Vietnam' },
  { code: 'ID', value: 'Indonesia' },
  { code: 'PH', value: 'Philippines' },
  { code: 'IN', value: 'India' },
  { code: 'AR', value: 'Argentina' },
  { code: 'BR', value: 'Brazil' },
  { code: 'CL', value: 'Chile' },
  { code: 'CO', value: 'Colombia' },
  { code: 'CZ', value: 'Czechia' },
  { code: 'GR', value: 'Greece' },
  { code: 'HU', value: 'Hungary' },
  { code: 'IL', value: 'Israel' },
  { code: 'LU', value: 'Luxembourg' },
  { code: 'MX', value: 'Mexico' },
  { code: 'NZ', value: 'New Zealand' },
  { code: 'PL', value: 'Poland' },
  { code: 'PT', value: 'Portugal' },
  { code: 'RO', value: 'Romania' },
  { code: 'ZA', value: 'South Africa' },
  { code: 'TR', value: 'Turkey' },
  { code: 'UA', value: 'Ukraine' },
  { code: 'OTHER', value: 'Other' },
]

const PRIORITY = ['CN', 'HK', 'TW', 'JP', 'KR', 'SG']
const { t, locale } = useI18n()

const countryOptions = computed(() => {
  const labeled = countries.map(c => ({ ...c, label: t(`countries.${c.code}`) }))
  const pri = labeled.filter(c => PRIORITY.includes(c.code))
  const rest = labeled
    .filter(c => !PRIORITY.includes(c.code))
    .sort((a, b) => a.label.localeCompare(b.label, locale.value))
  return [...pri, ...rest]
})

watch(() => props.options, v => (form.options = v ?? ''))

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const turnstileEl = ref<HTMLElement>()
let turnstileToken = ''

onMounted(() => {
  if (!site.turnstileSiteKey) return
  const render = () =>
    (window as any).turnstile.render(turnstileEl.value, {
      sitekey: site.turnstileSiteKey,
      callback: (t: string) => (turnstileToken = t),
    })
  if ((window as any).turnstile) return render()
  const s = document.createElement('script')
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
  s.async = true
  s.onload = render
  document.head.appendChild(s)
})

async function submit() {
  status.value = 'sending'
  try {
    // 本地 nuxt dev 没有 Cloudflare Functions，直接模拟成功
    if (import.meta.dev) {
      console.info('[dev] inquiry payload', { ...form })
      await new Promise(r => setTimeout(r, 600))
    } else {
      await $fetch('/api/inquiry', {
        method: 'POST',
        body: { ...form, turnstileToken, page: location.href, lang: locale.value },
      })
    }
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div v-if="status === 'success'" class="notice success" role="status">{{ $t('form.success') }}</div>

  <form v-else class="form" @submit.prevent="submit">
    <div class="row">
      <div class="field">
        <label for="f-name">{{ $t('form.name') }} *</label>
        <input id="f-name" v-model="form.name" required autocomplete="name" maxlength="100" />
      </div>
      <div class="field">
        <label for="f-email">{{ $t('form.email') }} *</label>
        <input id="f-email" v-model="form.email" type="email" required autocomplete="email" maxlength="200" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <label for="f-company">{{ $t('form.company') }}</label>
        <input id="f-company" v-model="form.company" autocomplete="organization" maxlength="200" />
      </div>
      <div class="field">
        <label for="f-country">{{ $t('form.country') }} *</label>
        <select id="f-country" v-model="form.country" required autocomplete="country-name">
          <option value="" disabled>{{ $t('form.countryPlaceholder') }}</option>
          <option v-for="c in countryOptions" :key="c.code" :value="c.value">{{ c.label }}</option>
        </select>
      </div>
    </div>

    <div v-if="product" class="row">
      <div class="field">
        <label for="f-product">{{ $t('form.product') }}</label>
        <input id="f-product" v-model="form.product" readonly />
      </div>
      <div class="field">
        <label for="f-options">{{ $t('form.options') }}</label>
        <input id="f-options" v-model="form.options" maxlength="200" />
      </div>
    </div>

    <div class="field">
      <label for="f-message">{{ $t('form.message') }} *</label>
      <textarea id="f-message" v-model="form.message" rows="5" required maxlength="3000" />
    </div>

    <div class="hp" aria-hidden="true">
      <label>Website <input v-model="form.website" tabindex="-1" autocomplete="off" /></label>
    </div>

    <label class="consent">
      <input v-model="form.consent" type="checkbox" required />
      <i18n-t keypath="form.consent" tag="span">
        <template #link>
          <NuxtLinkLocale to="/policies/privacy-policy" target="_blank">{{ $t('form.privacyPolicy') }}</NuxtLinkLocale>
        </template>
      </i18n-t>
    </label>

    <div v-if="site.turnstileSiteKey" ref="turnstileEl" />

    <div v-if="status === 'error'" class="notice error" role="alert">
      {{ $t('form.error', { email: site.email }) }}
    </div>

    <button class="btn btn-block" type="submit" :disabled="status === 'sending'">
      {{ status === 'sending' ? $t('form.sending') : $t('form.submit') }}
    </button>
  </form>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 18px; }

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

@media (max-width: 600px) {
  .row { grid-template-columns: 1fr; }
}

.consent {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 13px;
  color: var(--c-muted);
}

.consent input { margin-top: 3px; }
.consent a { border-bottom: 1px solid var(--c-gold); }

.hp {
  position: absolute;
  left: -9999px;
}

.notice {
  padding: 16px 18px;
  font-size: 14px;
  border: 1px solid;
}

.success { color: var(--c-success); background: #eef6ef; }
.error { color: var(--c-error); background: #fbefec; }
</style>
