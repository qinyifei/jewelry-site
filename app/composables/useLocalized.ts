import { localize } from '~/data/types'

// 页面里用：const tr = useLocalized(); tr(product).title
export function useLocalized() {
  const { locale } = useI18n()
  return <T extends Parameters<typeof localize>[0]>(item: T) => localize(item, locale.value)
}

// 页面内长文案：按当前语言取对应版本，没有就用英文
export function useLocaleContent<T>(content: { en: T } & Partial<Record<string, T>>) {
  const { locale } = useI18n()
  return computed(() => content[locale.value] ?? content.en)
}
