// 除英文外的语言，新增语言时在这里加
export type ExtraLocale = 'zh'

// 各语言的翻译覆盖：只写需要翻译的字段，没写的字段自动用英文
type Translations<T> = { i18n?: Partial<Record<ExtraLocale, Partial<T>>> }

export interface ProductOption {
  name: string // e.g. "Metal", "Ring Size"
  values: string[]
}

export interface ProductText {
  title: string
  summary: string
  description: string[]
  details: { label: string; value: string }[]
  options: ProductOption[]
  // 设计故事（可选）：配合 designImage 显示在商品页底部
  designStory?: string
}

export interface Product extends ProductText, Translations<ProductText> {
  // 网址里的名字，对应 /products/{handle}，一旦上线不要再改
  handle: string
  sku: string
  // 参考零售价（美元）；不想显示价格就删掉这一项
  price?: number
  collections: string[]
  images: string[]
  wholesale: boolean
  featured?: boolean
  // 设计稿（可选）：低分辨率、加水印、去掉尺寸标注；不填就不显示「设计故事」板块
  designImage?: string
}

export interface CaseText {
  title: string
  client: string // 客户类型和所在地，例如 "Online boutique · California, USA"
  service: string // 服务类型，例如 "Private label / OEM"
  summary: string
  challenge: string
  solution: string
  results: string[]
  // 客户评价（可选）：必须是客户真实说过、并同意公开的话
  quote?: string
  quoteAuthor?: string
}

export interface CaseStudy extends CaseText, Translations<CaseText> {
  handle: string
  sketch: string // 设计稿
  finished: string // 成品实物图
  quantity: string
  leadTime: string
  // 案例里用到的现有商品（可选），会显示「查看同款」链接
  product?: string
}

export interface CollectionText {
  title: string
  description: string
}

export interface Collection extends CollectionText, Translations<CollectionText> {
  // 对应 /collections/{handle}
  handle: string
  image: string
}

export interface PostText {
  title: string
  excerpt: string
  body: string[]
}

export interface Post extends PostText, Translations<PostText> {
  // 对应 /blogs/news/{handle}
  handle: string
  date: string
  image: string
}

export interface PolicyText {
  title: string
  sections: { heading?: string; paragraphs?: string[]; list?: string[] }[]
}

export interface Policy extends PolicyText, Translations<PolicyText> {
  handle: string
  updated: string
}

// 取某条数据在指定语言下的版本
export function localize<T extends Translations<object>>(item: T, locale: string): T {
  const override = item.i18n?.[locale as ExtraLocale]
  return override ? { ...item, ...override } : item
}
