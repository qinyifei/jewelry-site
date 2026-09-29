import { site } from '~/config/site'

interface PageSeo {
  title: string
  description?: string
  image?: string
  type?: 'website' | 'article' | 'product'
}

// 统一设置标题、描述和社交分享卡片；canonical 和 hreflang 由布局里的 useLocaleHead 生成
export function usePageSeo(opts: PageSeo) {
  const { t } = useI18n()
  const route = useRoute()
  const url = site.url + (route.path === '/' ? '' : route.path)
  const image = site.url + (opts.image ?? '/images/hero.svg')
  const description = opts.description ?? t('seo.description')
  const title = opts.title === site.name ? site.name : `${opts.title} | ${site.name}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogImage: image,
    ogType: opts.type === 'article' ? 'article' : 'website',
    ogSiteName: site.name,
    twitterCard: 'summary_large_image',
  })
}
