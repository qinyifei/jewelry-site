// 品牌信息集中在这里，正式品牌名、域名、联系方式定下来后只改这一个文件。
export const site = {
  name: 'Aurelia Jewelry',
  shortName: 'Aurelia',
  url: 'https://www.aureliajewelry.com',
  // 网站描述、标语等文案在 i18n/locales/*.json 里，按语言分别维护
  email: 'hello@aureliajewelry.com',
  // WhatsApp 号码：国际格式，不带 + 和空格
  whatsapp: '85200000000',
  address: 'Hong Kong',
  social: {
    instagram: 'https://www.instagram.com/',
    pinterest: 'https://www.pinterest.com/',
    facebook: 'https://www.facebook.com/',
  },
  currency: 'USD',
  wholesale: {
    moq: 30,
    // 生产周期（工作日）
    leadTimeDays: '15–25',
  },
  // Cloudflare Turnstile 站点密钥（公开的），留空则不启用人机验证
  turnstileSiteKey: '',
  // Google Analytics 4 衡量 ID，例如 G-XXXXXXX；留空则不加载。只有访客同意 Cookie 后才会加载
  gaId: '',
}

export type Site = typeof site
