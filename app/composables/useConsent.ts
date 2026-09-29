const KEY = 'cookie-consent'

// null = 还没选择；true/false = 同意/拒绝统计 Cookie
export function useConsent() {
  const consent = useState<boolean | null>('cookie-consent', () => null)

  if (import.meta.client && consent.value === null) {
    const saved = localStorage.getItem(KEY)
    if (saved !== null) consent.value = saved === 'granted'
  }

  function setConsent(value: boolean) {
    consent.value = value
    localStorage.setItem(KEY, value ? 'granted' : 'denied')
  }

  return { consent, setConsent }
}
