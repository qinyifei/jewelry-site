import { site } from '../config/site'
import type { Policy } from './types'

// ⚠️ 以下是模板文字，上线前请根据实际业务修改，并建议请律师审核。
// 法律上以英文版为准，中文版仅供参考（中文页面顶部会显示这句提示）。
export const policies: Policy[] = [
  {
    handle: 'shipping-policy',
    title: 'Shipping Policy',
    updated: '2026-09-01',
    sections: [
      { paragraphs: ['All orders are shipped with tracking. Orders are processed within 1–3 business days.'] },
      {
        heading: 'Delivery times',
        list: [
          'United States & Canada: 5–10 business days',
          'United Kingdom & European Union: 6–12 business days',
          'Australia & rest of world: 8–15 business days',
        ],
      },
      {
        heading: 'Duties & taxes',
        paragraphs: [
          'For EU orders, VAT is collected at checkout where applicable. For other destinations, import duties or taxes may be charged by your local customs office and are the responsibility of the recipient.',
        ],
      },
      { heading: 'Wholesale shipments', paragraphs: ['Wholesale orders ship by DHL, FedEx or UPS. Freight is quoted with each order.'] },
    ],
    i18n: {
      zh: {
        title: '运费政策',
        sections: [
          { paragraphs: ['所有订单均提供物流跟踪，下单后 1–3 个工作日内发货。'] },
          {
            heading: '配送时效',
            list: ['美国、加拿大：5–10 个工作日', '英国、欧盟：6–12 个工作日', '澳大利亚及其他地区：8–15 个工作日'],
          },
          {
            heading: '关税与税费',
            paragraphs: ['欧盟订单在适用情况下于结账时代收增值税（VAT）。其他地区可能由当地海关征收进口关税或税费，由收件人承担。'],
          },
          { heading: '批发订单发货', paragraphs: ['批发订单通过 DHL、FedEx 或 UPS 发货，运费随订单单独报价。'] },
        ],
      },
    },
  },
  {
    handle: 'refund-policy',
    title: 'Returns & Refunds',
    updated: '2026-09-01',
    sections: [
      {
        paragraphs: [
          'We want you to love your jewelry. If you are not completely satisfied, you may return unworn items in their original packaging within 30 days of delivery.',
        ],
      },
      {
        heading: 'Conditions',
        list: [
          'Items must be unworn, undamaged and in original packaging',
          'Personalised or engraved items are final sale',
          'Earrings cannot be returned for hygiene reasons unless faulty',
        ],
      },
      {
        heading: 'How to return',
        paragraphs: [
          `Email ${site.email} with your order number. Once we receive and inspect your return, your refund will be issued to the original payment method within 5–10 business days.`,
        ],
      },
      {
        heading: 'EU & UK customers',
        paragraphs: ['You have the statutory right to withdraw from your purchase within 14 days of delivery without giving a reason.'],
      },
    ],
    i18n: {
      zh: {
        title: '退换货政策',
        sections: [
          { paragraphs: ['希望你喜欢我们的首饰。如果不完全满意，可以在签收后 30 天内退回未佩戴、包装完好的商品。'] },
          {
            heading: '退货条件',
            list: ['商品未佩戴、无损坏，且保留原包装', '定制或刻字商品不支持退货', '出于卫生原因，耳饰除质量问题外不支持退货'],
          },
          {
            heading: '如何退货',
            paragraphs: [`请发邮件至 ${site.email} 并注明订单号。我们收到并检查退货后，会在 5–10 个工作日内原路退款。`],
          },
          { heading: '欧盟和英国客户', paragraphs: ['依法享有签收后 14 天内无理由退货的权利。'] },
        ],
      },
    },
  },
  {
    handle: 'privacy-policy',
    title: 'Privacy Policy',
    updated: '2026-09-01',
    sections: [
      {
        paragraphs: [
          `${site.name} ("we", "us") respects your privacy. This policy explains what personal data we collect, why, and your rights under the GDPR, UK GDPR and applicable US state privacy laws.`,
        ],
      },
      {
        heading: 'What we collect',
        list: [
          'Information you submit through our enquiry forms: name, email, company, country and message',
          'Technical data such as browser type and pages visited, only if you accept analytics cookies',
        ],
      },
      {
        heading: 'How we use it',
        list: [
          'To respond to your enquiries and provide quotes',
          'To process and deliver orders',
          'To improve our website (analytics, with your consent)',
        ],
      },
      {
        heading: 'Service providers',
        paragraphs: [
          'We use Cloudflare (hosting and security) and an email delivery provider to operate this website. They process data on our behalf under appropriate data protection agreements.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          `You may request access to, correction of, or deletion of your personal data at any time by emailing ${site.email}. You may also withdraw cookie consent by clearing your browser storage.`,
        ],
      },
      { heading: 'Retention', paragraphs: ['We keep enquiry data for up to 24 months unless it becomes part of an ongoing business relationship.'] },
    ],
    i18n: {
      zh: {
        title: '隐私政策',
        sections: [
          {
            paragraphs: [
              `${site.name}（"我们"）尊重你的隐私。本政策说明我们收集哪些个人数据、用途，以及你依据 GDPR、英国 GDPR 和美国各州隐私法享有的权利。`,
            ],
          },
          {
            heading: '我们收集的信息',
            list: ['你通过询盘表单提交的信息：姓名、邮箱、公司、国家和留言', '浏览器类型、访问页面等技术数据（仅在你同意统计 Cookie 后收集）'],
          },
          {
            heading: '信息用途',
            list: ['回复你的询盘并提供报价', '处理和配送订单', '改进网站（经你同意后进行访问统计）'],
          },
          {
            heading: '服务提供商',
            paragraphs: ['我们使用 Cloudflare（托管与安全）和邮件发送服务商运营本网站，它们依据相应的数据保护协议代表我们处理数据。'],
          },
          {
            heading: '你的权利',
            paragraphs: [`你可以随时发邮件至 ${site.email}，要求查看、更正或删除你的个人数据。清除浏览器存储即可撤回 Cookie 同意。`],
          },
          { heading: '保存期限', paragraphs: ['询盘数据最多保存 24 个月，形成持续业务往来的除外。'] },
        ],
      },
    },
  },
  {
    handle: 'terms-of-service',
    title: 'Terms of Service',
    updated: '2026-09-01',
    sections: [
      { paragraphs: [`By using this website you agree to these terms. The website is operated by ${site.name}.`] },
      {
        heading: 'Products & pricing',
        paragraphs: [
          'Product images are for illustration; slight variations in colour and finish may occur. Prices shown are reference retail prices in USD and may change without notice. Wholesale prices are provided on request.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: ['All designs, images and text on this website are owned by us and may not be used without permission.'],
      },
      { heading: 'Contact', paragraphs: [`Questions about these terms can be sent to ${site.email}.`] },
    ],
    i18n: {
      zh: {
        title: '服务条款',
        sections: [
          { paragraphs: [`使用本网站即表示你同意以下条款。本网站由 ${site.name} 运营。`] },
          {
            heading: '商品与价格',
            paragraphs: ['商品图片仅供参考，颜色和表面效果可能略有差异。页面显示的是美元参考零售价，可能随时调整，恕不另行通知。批发价格请询价获取。'],
          },
          { heading: '知识产权', paragraphs: ['本网站所有设计、图片和文字归我们所有，未经许可不得使用。'] },
          { heading: '联系方式', paragraphs: [`对本条款有任何疑问，请发邮件至 ${site.email}。`] },
        ],
      },
    },
  },
]

export const findPolicy = (handle: string) => policies.find(p => p.handle === handle)
