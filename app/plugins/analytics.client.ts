import { site } from '~/config/site'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

// 访客同意 Cookie 后才加载 Google Analytics（GDPR 要求）
export default defineNuxtPlugin(() => {
  if (!site.gaId) return

  const { consent } = useConsent()
  let loaded = false

  const load = () => {
    if (loaded) return
    loaded = true
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${site.gaId}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', site.gaId)
  }

  watch(consent, v => v && load(), { immediate: true })
})
