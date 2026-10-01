import { site } from './app/config/site'
import { products } from './app/data/products'
import { collections } from './app/data/collections'
import { posts } from './app/data/posts'
import { policies } from './app/data/policies'
import { cases } from './app/data/cases'

const routes = [
  '/',
  '/collections/all',
  ...collections.map(c => `/collections/${c.handle}`),
  ...products.map(p => `/products/${p.handle}`),
  '/pages/about',
  '/pages/wholesale',
  '/pages/materials',
  '/pages/contact',
  '/pages/faq',
  '/blogs/news',
  ...posts.map(p => `/blogs/news/${p.handle}`),
  '/blogs/cases',
  ...cases.map(c => `/blogs/cases/${c.handle}`),
  ...policies.map(p => `/policies/${p.handle}`),
]

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],

  css: [
    '@fontsource/cormorant-garamond/400.css',
    '@fontsource/cormorant-garamond/600.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#1f1b16' }],
    },
  },

  site: {
    url: site.url,
    name: site.name,
  },

  // 英文网址不带前缀（/products/xxx），其他语言带前缀（/zh/products/xxx）。
  // 加新语言：在 locales 里加一项、新建 i18n/locales/xx.json，并在 app/data/types.ts 的 ExtraLocale 里加上
  i18n: {
    baseUrl: site.url,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.json' },
      { code: 'sv', language: 'sv-SE', name: 'Svenska', file: 'sv.json' },
      { code: 'da', language: 'da-DK', name: 'Dansk', file: 'da.json' },
      { code: 'no', language: 'nb-NO', name: 'Norsk', file: 'no.json' },
    ],
    // 不按浏览器语言自动跳转：搜索引擎和欧美客户默认都看英文，想看中文的访客自己切换
    detectBrowserLanguage: false,
  },

  sitemap: {
    exclude: ['/404', '/200'],
  },

  nitro: {
    // 固定为纯静态输出。否则在 Cloudflare 构建时会自动切到 cloudflare-pages-static，
    // 输出目录变成 dist，和 Cloudflare 里设置的 .output/public 对不上
    preset: 'static',
    prerender: {
      // 生成 products/xxx.html 而不是 products/xxx/index.html，
      // 这样 Cloudflare Pages 上的网址不带结尾斜杠，和 Shopify 格式一致
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: [
        ...routes,
        ...routes.map(r => `/zh${r === '/' ? '' : r}`),
        ...routes.map(r => `/sv${r === '/' ? '' : r}`),
        ...routes.map(r => `/da${r === '/' ? '' : r}`),
        ...routes.map(r => `/no${r === '/' ? '' : r}`),
      ],
    },
  },
})
