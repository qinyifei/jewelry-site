import { site } from '../config/site'
import type { Policy } from './types'

// 内容来自《Panthea合规政策文档》（2026-10）。
// 法律上以英文版为准，中文版仅供参考（中文页面顶部会显示这句提示）。
export const policies: Policy[] = [
  {
    handle: 'shipping-policy',
    title: 'Shipping Policy',
    updated: '2026-10-27',
    sections: [
      {
        heading: 'Delivery Coverage',
        paragraphs: [
          'We ship across mainland Sweden, all EU countries, Norway and Iceland. Norway and Iceland are non-EU territories; any local import taxes and duties are the recipient\u2019s responsibility.',
        ],
      },
      {
        heading: 'Delivery Times',
        paragraphs: [
          'Standard shipping: approximately 3\u20137 working days within the Nordic region. Express shipping cuts the transit time by 1\u20132 working days.',
        ],
      },
      {
        heading: 'Shipping Rates',
        list: [
          'Orders under 499 SEK: standard shipping 49 SEK',
          'Orders 499 SEK and above: free standard shipping within Sweden',
          'Optional express upgrade: 99 SEK, reducing delivery time by 1\u20132 working days',
        ],
      },
      {
        heading: 'Dispatch Schedule',
        paragraphs: [
          'On working days, orders paid before 16:00 are handed over to the courier the same day; orders paid after 16:00 are processed on the next working day. No dispatches on weekends and Swedish public holidays. Multiple items are packed in one parcel with no extra split shipping fees.',
        ],
      },
      {
        heading: 'Shipping Liability',
        paragraphs: [
          'Seller\u2019s fault (wrong item, missing item, manufacturing defect): we cover both-way shipping costs for reshipment or a full refund.',
          'Customer-initiated return under the cooling-off period: return shipping is at the customer\u2019s expense. For orders that qualified for free shipping, the original outbound shipping cost will be deducted from the refund.',
          'Lost or damaged parcels: we handle insurance claims with the carrier directly to protect your interests.',
        ],
      },
      {
        heading: 'Remote Areas',
        paragraphs: [
          'No remote surcharge applies to remote northern areas of Sweden \u2014 standard shipping rates are the same as the rest of mainland Sweden.',
        ],
      },
    ],
    i18n: {
      zh: {
        title: '运费政策',
        sections: [
          {
            heading: '配送范围',
            paragraphs: [
              '支持瑞典本土、欧盟全境以及挪威、冰岛配送；挪威、冰岛属于非欧盟地区，收件人需要自行承担当地进口税费。',
            ],
          },
          {
            heading: '配送时间',
            paragraphs: ['标准配送：北欧境内约 3\u20137 个工作日；加急可缩短 1\u20132 个工作日。'],
          },
          {
            heading: '运费标准',
            list: [
              '订单金额低于 499 SEK：标准运费 49 SEK',
              '订单金额满 499 SEK：瑞典境内可享标准免邮',
              '可选加急配送：99 SEK，配送时效缩短 1\u20132 个工作日',
            ],
          },
          {
            heading: '发货规则',
            paragraphs: [
              '工作日 16:00 前付款的订单当日安排揽收，16:00 之后的订单顺延至下一个工作日。周末及瑞典公共假期不发货。多件商品统一打包，不拆分收取运费。',
            ],
          },
          {
            heading: '物流责任',
            paragraphs: [
              '商家责任（错发、漏发、质量问题）：往返运费由我方承担，免费重发或全额退款。',
              '买家发起无理由退货：退回运费由买家承担；若包邮订单退货，将扣除原订单实际发货运费。',
              '包裹丢失、破损：我方直接对接物流保险理赔，保障买家权益。',
            ],
          },
          {
            heading: '偏远地区',
            paragraphs: ['瑞典北部偏远地区不额外加收偏远附加费，运费标准与瑞典本土统一。'],
          },
        ],
      },
    },
  },
  {
    handle: 'refund-policy',
    title: 'Return & Refund Policy',
    updated: '2026-10-27',
    sections: [
      {
        heading: 'Statutory Consumer Rights',
        paragraphs: [
          'Cooling-off period: under applicable Nordic consumer legislation, you have the right to return items without giving a reason within 14 calendar days after receiving your order.',
          'Warranty: we offer free repair or replacement for manufacturing defects reported within 30 days of delivery. This is an additional shop benefit and does not replace your statutory warranty rights granted by law.',
        ],
      },
      {
        heading: 'Return Conditions',
        paragraphs: [
          'Returned items must be unused and free of scratches, stains or signs of wear. All original packaging, tags, certificates and accessories must be returned complete. We reserve the right to reject returns for goods damaged by improper handling, chemical exposure, self-modification or missing components. Natural variations in pearl texture, lustre and colour are inherent characteristics and not manufacturing defects.',
        ],
      },
      {
        heading: 'Items Excluded from Free Returns',
        list: [
          'Earrings (hygiene reasons)',
          'Engraved and bespoke custom jewellery',
          'Opened jewellery care kits',
          'Products marked Final Sale',
        ],
      },
      {
        heading: 'Refund Rules',
        paragraphs: [
          'Full refund: applicable to items with manufacturing defects. If your original order qualified for free shipping, the outbound shipping cost will be deducted from the refund amount.',
          'Partial return: only the value of the returned items will be refunded; the original shipping fee is non-refundable.',
          'Refund method: funds will be returned to your original payment method within 14 working days after successful warehouse inspection. No additional refund processing fees apply.',
        ],
      },
      {
        heading: 'Return Procedure',
        list: [
          'Contact customer service to submit your return request.',
          'Once approved, we will provide you with the return address and packing guidelines.',
          'Please securely pack and send the parcel, and keep your tracking number for reference.',
          'Our warehouse inspects the returned goods and proceeds with refund, exchange or repair accordingly.',
        ],
      },
      {
        heading: 'Legal Statement',
        paragraphs: [
          'This return policy does not restrict or remove any statutory rights you hold under Nordic consumer laws. If there is a conflict between these terms and applicable legislation, the local consumer law shall prevail.',
        ],
      },
    ],
    i18n: {
      zh: {
        title: '退换货政策',
        sections: [
          {
            heading: '法定退换权益',
            paragraphs: [
              '冷静期：依据北欧适用的消费者法规，您在签收商品后的 14 个自然日内，享有无理由退货权利。',
              '质保：收货 30 天内如出现制造工艺缺陷，我们提供免费维修或更换服务。本服务为店铺增值保障，不替代您依法享有的法定消费者质保权益。',
            ],
          },
          {
            heading: '退货条件',
            paragraphs: [
              '退回商品须保持全新未使用状态，无划痕、污渍、磨损痕迹；原装包装盒、吊牌、证书及全部配套配件需完整一并寄回。因人为使用损伤、接触化学品腐蚀、自行改造、配件缺失而受损的商品，我们有权拒绝退货。珍珠天然纹理、光泽与色泽差异属于材质本身固有特征，不属于工艺质量瑕疵。',
            ],
          },
          {
            heading: '不支持无理由退货的商品',
            list: [
              '耳饰（卫生原因）',
              '刻字定制、专属定制珠宝',
              '已开封的珠宝养护套装',
              '标注为最终特惠（Final Sale）的商品',
            ],
          },
          {
            heading: '退款规则',
            paragraphs: [
              '全额退款：适用于存在制造质量瑕疵的商品。若原订单享有免邮权益，发货运费将从退款金额中扣除。',
              '部分退货：仅按退回商品金额退款，原订单发货运费不予返还。',
              '退款路径：仓库验收核验无误后，款项将在 14 个工作日内原路退回至原支付账户，无额外退款手续费。',
            ],
          },
          {
            heading: '退货流程',
            list: [
              '联系客服提交退货申请；',
              '申请审核通过后，我们提供退货地址以及打包注意事项；',
              '请您妥善打包商品寄出，并自行留存物流单号备查；',
              '仓库完成商品验收核验，随后安排退款、换货或维修。',
            ],
          },
          {
            heading: '法律声明',
            paragraphs: [
              '本退换货政策不会减损您依据北欧消费者相关法律所享有的全部法定权利。若本政策条款与适用法律存在冲突，以当地现行消费者法律为准。',
            ],
          },
        ],
      },
    },
  },
  {
    handle: 'privacy-policy',
    title: 'Privacy Policy',
    updated: '2026-10-27',
    sections: [
      {
        paragraphs: [
          `${site.name} (\u201cwe\u201d, \u201cus\u201d) respects your privacy. This Privacy Policy applies to all visitors, users and customers of the Panthea official website, covering the European Economic Area (EEA), the Nordic countries (Sweden, Denmark, Norway, Finland, Iceland) and all EU jurisdictions.`,
          'This policy aligns with the EU General Data Protection Regulation (GDPR 2016/679) and applicable national data protection legislation across the Nordic region. It describes how we collect, use, store, safeguard and process your personal data when you browse our site, create an account, make a purchase or engage with our after-sales support.',
        ],
      },
      {
        heading: '1. Data Controller',
        paragraphs: [
          'Panthea acts as the data controller for all personal data collected via this website. We are responsible for ensuring all data processing is lawful, fair and transparent under EU and Nordic privacy rules.',
        ],
      },
      {
        heading: '2. Personal Data We Collect',
        paragraphs: ['We collect only the minimum data necessary to operate our business.'],
      },
      {
        heading: '2.1 Voluntarily Provided Personal Data',
        paragraphs: ['You supply the following information when placing an order, registering an account or contacting support:'],
        list: [
          'Full name',
          'Email address',
          'Phone number',
          'Shipping and billing address',
          'Order records and purchase history',
          'Payment verification and reconciliation data',
        ],
      },
      {
        heading: '2.2 Automatically Collected Technical Data',
        paragraphs: [
          'When you visit our site, we automatically collect non-sensitive technical data to enhance user experience and website security:',
        ],
        list: [
          'Device type, operating system and browser details',
          'IP address and general geographic region',
          'Browsing behaviour, page visits and interaction records',
        ],
      },
      {
        heading: '2.3 Data We Do NOT Collect',
        paragraphs: ['We never collect or store sensitive personal data, including but not limited to:'],
        list: [
          'Race, religion, political opinions or philosophical beliefs',
          'Biometric data',
          'Full card details, passwords or payment credentials',
          'Other special-category personal data as defined by the GDPR',
        ],
      },
      {
        heading: '3. Legal Basis & Purposes of Processing',
        paragraphs: [
          'We process your personal data solely on the legal bases of contract performance, legitimate interests and your explicit consent, for the purposes below:',
        ],
        list: [
          'Order & Contract Fulfilment: process orders, arrange delivery, manage payments, aftercare, refunds and customer communications.',
          'Website Optimisation & Security: analyse user behaviour to improve site functionality, product presentation, browsing experience and platform stability.',
          'Service Notifications: send order updates, delivery status, after-sales reminders and official service announcements.',
          'Marketing Communications: newsletters, new-launch notices and promotional content are sent only with your explicit opt-in consent. You may unsubscribe at any time, free of charge.',
        ],
      },
      {
        heading: '4. Data Storage & Security',
        paragraphs: [
          'All personal data is retained in line with EU data retention standards. Transaction and tax-related records will be securely stored for 5 years to satisfy Nordic and EU fiscal compliance requirements.',
          'Non-essential user data will be anonymised or deleted once no longer required.',
          'We use end-to-end encryption, secure hosted servers, regular backups and other technical safeguards to protect your data against leakage, tampering, loss and unauthorised access.',
          'We will never sell, rent or trade your personal data to third parties for marketing purposes.',
        ],
      },
      {
        heading: '5. Third-Party Data Sharing',
        paragraphs: [
          'We share only limited necessary data with vetted third-party service providers to fulfil our services. All processors are GDPR-compliant. Authorised third-party processors include:',
        ],
        list: [
          'Logistics and shipping providers (access only to delivery address and shipping information)',
          'Approved payment service providers (for transaction reconciliation and payment verification only)',
          'Website technical vendors responsible for system maintenance',
        ],
      },
      {
        heading: '6. Your GDPR & Nordic Data Subject Rights',
        paragraphs: ['As an EEA / Nordic user, you hold the following rights under the GDPR:'],
        list: [
          'Right to access your stored personal data',
          'Right to rectify inaccurate or incomplete personal information',
          'Right to erasure (\u201cright to be forgotten\u201d)',
          'Right to restriction of processing',
          'Right to data portability',
          'Right to withdraw marketing consent at any time',
          'Right to submit a complaint to your local data protection authority in your EU or Nordic country of residence',
        ],
      },
      {
        heading: '7. Cookies',
        paragraphs: [
          'Our website uses essential cookies to enable core browsing and shopping functions. Essential cookies are required for the site to operate.',
          'You may disable non-essential cookies via your browser settings. Disabling cookies will not disrupt core purchasing, checkout and order workflows.',
        ],
      },
      {
        heading: '8. Cross-Border Data Transfer',
        paragraphs: [
          'Where cross-border data transfer takes place, we ensure transfers comply with GDPR rules through adequate protection measures, including Standard Contractual Clauses (SCCs) and end-to-end encryption.',
        ],
      },
      {
        heading: '9. Policy Updates',
        paragraphs: [
          'We may revise this Privacy Policy to reflect changes in EU regulations, Nordic local legislation or site operations. Updated versions will be published on our website. Your continued use of the site after publication signifies acceptance of the revised Privacy Policy.',
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [
          `If you have questions, requests or concerns relating to our data handling and privacy practices, please contact our official support team at ${site.email}.`,
        ],
      },
    ],
    i18n: {
      zh: {
        title: '隐私政策',
        sections: [
          {
            paragraphs: [
              `${site.name}（下称\u201c我们\u201d）尊重您的隐私。本隐私政策适用于 Panthea 官网的所有访客、用户及客户，覆盖欧洲经济区（EEA）、北欧国家（瑞典、丹麦、挪威、芬兰、冰岛）以及所有欧盟司法辖区。`,
              '本政策遵循《欧盟通用数据保护条例》（GDPR 2016/679）以及北欧地区适用的各国数据保护法律，说明在您浏览网站、注册账号、下单购买以及售后沟通期间，我们如何收集、使用、存储、保护和处理您的个人数据。',
            ],
          },
          {
            heading: '1. 数据控制者',
            paragraphs: [
              'Panthea 为本网站收集到的全部个人数据的数据控制者。我们有义务按照欧盟与北欧隐私法规，保证所有数据处理行为合法、公平、透明。',
            ],
          },
          { heading: '2. 我们收集的个人数据', paragraphs: ['我们仅收集业务运营所需的最少必要数据。'] },
          {
            heading: '2.1 您主动提供的个人数据',
            paragraphs: ['当您下单、注册账号或联系客服时，主动提交以下信息：'],
            list: [
              '全名',
              '电子邮箱',
              '联系电话',
              '收货地址与账单地址',
              '订单记录、购买历史',
              '支付核验与对账相关数据',
            ],
          },
          {
            heading: '2.2 自动采集的技术数据',
            paragraphs: ['您访问网站时，我们会自动收集非敏感技术信息，用于优化使用体验与网站安全：'],
            list: [
              '设备类型、操作系统、浏览器信息',
              'IP 地址及大致地理区域',
              '浏览行为、页面访问记录与交互数据',
            ],
          },
          {
            heading: '2.3 我们不会收集的数据',
            paragraphs: ['我们绝不收集、存储敏感个人数据，包括但不限于：'],
            list: [
              '种族、宗教、政治观点、哲学信仰',
              '生物识别信息',
              '完整银行卡信息、密码、支付凭证',
              'GDPR 定义下其他特殊类别个人数据',
            ],
          },
          {
            heading: '3. 数据处理的法律依据与用途',
            paragraphs: ['我们仅基于履行合同、合法利益以及您明确同意这几项法律依据处理个人数据，用于以下合法目的：'],
            list: [
              '订单与合同履约：处理订单、安排发货、管理支付、售后支持、退款以及客户沟通。',
              '网站优化与安全：分析用户行为，改善网站功能、产品展示、浏览体验与平台稳定性。',
              '服务通知：发送订单进度、物流状态、售后提醒以及官方服务公告。',
              '营销推送：仅在您明确选择订阅后，发送邮件通讯、新品通知与推广内容。您可以随时免费取消订阅。',
            ],
          },
          {
            heading: '4. 数据存储与安全',
            paragraphs: [
              '所有个人数据的存储均符合欧盟数据留存标准；交易及税务相关记录将安全保存 5 年，满足北欧及欧盟财税合规要求。',
              '不再需要的非必要用户数据，将做匿名化处理或直接删除。',
              '网站采用端到端加密、服务器安全防护、定期备份等技术防护手段，防止数据泄露、篡改、丢失以及未授权访问。',
              '我们绝不会为营销目的向第三方出售、出租或交易您的个人数据。',
            ],
          },
          {
            heading: '5. 第三方数据共享',
            paragraphs: [
              '我们仅向经过筛选、可信的第三方服务商共享有限的必要数据以提供服务，所有服务商均符合 GDPR 合规要求。授权第三方处理方包括：',
            ],
            list: [
              '物流承运商（仅可查看收货地址及发货信息）',
              '合规支付服务商（仅用于交易对账与支付核验）',
              '负责系统维护的网站技术服务商',
            ],
          },
          {
            heading: '6. 您在 GDPR 及北欧法规下的权利',
            paragraphs: ['作为欧洲经济区 / 北欧地区用户，您依法享有以下数据主体权利：'],
            list: [
              '查阅我们存储的您的个人数据',
              '修改不准确、不完整的个人信息',
              '删除您的个人数据（被遗忘权）',
              '限制数据处理',
              '数据可携带权',
              '随时撤回营销许可',
              '向您居住的欧盟 / 北欧国家当地数据保护监管机构提出投诉',
            ],
          },
          {
            heading: '7. Cookie 说明',
            paragraphs: [
              '本站使用必要 Cookie 保障基础浏览和购物功能，必要 Cookie 是网站正常运行所必需的。',
              '您可以随时通过浏览器设置关闭非必要 Cookie；关闭 Cookie 不会影响下单、结算、订单查询等核心购物流程。',
            ],
          },
          {
            heading: '8. 跨境数据传输',
            paragraphs: [
              '如发生跨境数据传输，我们会按照 GDPR 跨境传输规则落实充分保护措施，包含标准合同条款（SCCs）与端到端加密机制。',
            ],
          },
          {
            heading: '9. 政策更新与修订',
            paragraphs: [
              '我们保留修订本隐私政策的权利，以适配欧盟法规更新、北欧当地法律变动以及网站运营调整。修订后的版本将在官网发布。政策更新后，您继续使用本网站，即代表您接受新版隐私政策。',
            ],
          },
          {
            heading: '10. 联系我们',
            paragraphs: [`如果您对我们的数据处理方式、隐私规则有任何咨询、申请或疑问，请联系官方客服：${site.email}`],
          },
        ],
      },
    },
  },
  {
    handle: 'terms-of-service',
    title: 'Terms of Service',
    updated: '2026-10-27',
    sections: [
      {
        heading: '1. Scope',
        paragraphs: [
          `These Terms of Service constitute the agreement between you and ${site.name}. By browsing, registering an account or placing an order on our website, you accept and agree to abide by these terms, alongside applicable EU legislation.`,
        ],
      },
      {
        heading: '2. Pricing & Products',
        paragraphs: [
          'All prices shown include VAT, in line with applicable tax rules. We reserve the right to cancel orders containing obvious pricing errors arising from system faults. Product descriptions and imagery are provided in good faith. Natural variations in pearls are inherent characteristics and not considered defects.',
        ],
      },
      {
        heading: '3. User Account',
        paragraphs: [
          'You agree to submit accurate information and keep your login details secure. We may suspend or restrict your account in cases of misuse, fraudulent returns or other fraudulent activity.',
        ],
      },
      {
        heading: '4. Order & Payment',
        paragraphs: [
          'Unpaid orders will be automatically cancelled. Abuse of chargebacks or false payment disputes may result in purchasing restrictions. All transactions are recorded for tax compliance and dispute verification purposes.',
        ],
      },
      {
        heading: '5. Intellectual Property',
        paragraphs: [
          `All photographs, copy, logos and product designs are the intellectual property of ${site.name}. Unauthorized reproduction or commercial use is strictly prohibited.`,
        ],
      },
      {
        heading: '6. Limitation of Liability',
        paragraphs: [
          'We are not liable for delivery delays caused by force majeure events, including strikes, customs adjustments, natural disasters or public holidays. Losses resulting from an incorrect delivery address, missed delivery or refusal to accept the parcel are your responsibility. Damage arising from improper use of jewellery is not covered by warranty.',
        ],
      },
      {
        heading: '7. Dispute Resolution & Governing Law',
        paragraphs: [
          'These terms are governed by the law of Sweden. Disputes will first be resolved amicably through negotiation. If a resolution cannot be reached, you may escalate the matter to the Swedish consumer dispute resolution body. In the event of inconsistency, the Swedish language version of these terms shall prevail.',
        ],
      },
      {
        heading: '8. Revision',
        paragraphs: [
          'We reserve the right to amend these Terms of Service. Revised terms take effect upon publication on our website. Your continued use of the website after publication indicates acceptance of the updated terms.',
        ],
      },
    ],
    i18n: {
      zh: {
        title: '服务条款',
        sections: [
          {
            heading: '1. 适用范围',
            paragraphs: [
              `本服务条款构成您与 ${site.name} 之间的协议。当您浏览网站、注册账号或下单购买，即表示您接受本条款，并同意遵守适用的欧盟法规。`,
            ],
          },
          {
            heading: '2. 价格与商品',
            paragraphs: [
              '所有标价均已包含增值税，符合相关税务规定。对于系统故障造成的明显标价错误，我们保留取消订单的权利。商品描述与图片如实展示。珍珠天然纹理与色差属于天然特质，不视作瑕疵。',
            ],
          },
          {
            heading: '3. 用户账号',
            paragraphs: [
              '您需提供真实准确的信息，并妥善保管登录信息。如存在滥用账号、恶意退货或欺诈行为，我们可暂停或限制您的账户。',
            ],
          },
          {
            heading: '4. 订单与支付',
            paragraphs: [
              '未支付订单会自动超时取消。禁止恶意拒付、虚假纠纷，违规用户会被限制购买。所有交易保留凭证，用于税务和维权核查。',
            ],
          },
          {
            heading: '5. 知识产权',
            paragraphs: ['本站图片、文案、LOGO、产品设计版权归属 Panthea。禁止未经授权复制、转载、商用，侵权行为将依法追责。'],
          },
          {
            heading: '6. 免责说明',
            paragraphs: [
              '因罢工、海关政策变动、自然灾害、法定节假日等不可抗力造成的配送延误，我方不承担责任。因地址填写错误、无法签收、拒收包裹带来的损失，由您自行承担。珠宝不当使用造成的损坏，不在保修范围内。',
            ],
          },
          {
            heading: '7. 纠纷解决与适用法律',
            paragraphs: [
              '本条款受瑞典法律管辖。发生纠纷优先友好协商；协商不成，您可提交至瑞典消费者纠纷调解机构处理。条文如有歧义，以瑞典法律为准。',
            ],
          },
          {
            heading: '8. 条款修订',
            paragraphs: [
              '我们保留修订本服务条款的权利。修订后的条款在网站发布即刻生效，您继续使用网站即视为接受新版条款。',
            ],
          },
        ],
      },
    },
  },
]

export const findPolicy = (handle: string) => policies.find(p => p.handle === handle)
