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
