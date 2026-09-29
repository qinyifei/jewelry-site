import type { CaseStudy } from './types'

// ⚠️ 以下 3 个是示例案例，上线前必须替换成真实合作案例（或删掉），不能把虚构案例公开发布：
//    在欧美这属于虚假宣传，FTC（美国）和欧盟消费者保护法都有明确规定。
//    - 客户名称可以匿名（"一家德国精品连锁店"），但项目本身必须真实
//    - 发布前征得客户同意；quote 只能写客户真实说过的话
//    - 设计稿用低分辨率、加水印、去掉尺寸标注
export const cases: CaseStudy[] = [
  {
    handle: 'birthstone-collection-oem',
    sketch: '/images/cases/sketch-ring.svg',
    finished: '/images/products/ring-1.svg',
    quantity: '12 SKUs · 600 pcs',
    leadTime: '22 days',
    product: 'classic-solitaire-ring',
    title: 'A 12-piece birthstone ring collection, from sketch to launch',
    client: 'Online jewelry brand · California, USA',
    service: 'OEM · New design development',
    summary: 'We turned a founder’s hand-drawn sketches into a production-ready birthstone ring line in under a month.',
    challenge:
      'The client had strong design ideas but no manufacturing partner. They needed 12 birthstone variations with consistent sizing, a nickel-free finish for US customers, and stock ready before the holiday season.',
    solution:
      'Our design team converted the sketches into 3D models, produced wax samples for approval in 5 days, and matched each birthstone colour against the client’s reference chart. All pieces were rhodium plated and tested for Prop 65 compliance.',
    results: [
      'Samples approved in the first round',
      'Full order delivered 22 days after sign-off',
      'Re-ordered twice within the first six months',
    ],
    i18n: {
      zh: {
        title: '12 款生日石戒指系列，从手绘稿到上市',
        client: '首饰网店品牌 · 美国加州',
        service: 'OEM · 新款开发',
        summary: '不到一个月，我们把创始人的手绘草图变成了可量产的生日石戒指系列。',
        challenge: '客户有很好的设计想法，但没有生产合作方。需要 12 款不同生日石、尺码统一、符合美国市场的无镍工艺，并且要赶在节日季前备好货。',
        solution: '我们的设计团队把草图转成 3D 模型，5 天内出蜡版样品供确认，并按客户的色卡逐一匹配每款生日石颜色。全部镀铑，并通过 Prop 65 检测。',
        results: ['样品一次确认通过', '确认后 22 天全部交货', '前六个月内返单两次'],
      },
    },
  },
  {
    handle: 'private-label-necklaces-germany',
    sketch: '/images/cases/sketch-necklace.svg',
    finished: '/images/products/necklace-1.svg',
    quantity: '4 SKUs · 400 pcs',
    leadTime: '18 days',
    product: 'heart-pendant-necklace',
    title: 'Private-label pendant necklaces with branded packaging',
    client: 'Boutique chain · Germany',
    service: 'Private label · Logo engraving & packaging',
    summary: 'A boutique chain launched its own-brand necklace line with logo engraving and custom gift boxes.',
    challenge:
      'The client wanted to move from third-party brands to its own label, with EU REACH-compliant materials, a discreet logo on every piece and packaging that matched their store design.',
    solution:
      'We adapted four of our bestselling pendants, laser-engraved the client’s logo on each clasp tag, and produced printed gift boxes and pouches in their brand colours. REACH nickel-release test reports were supplied with the shipment.',
    results: [
      'Own-brand line launched across 6 stores',
      'Full REACH documentation for EU import',
      'Packaging and engraving reused for later collections',
    ],
    i18n: {
      zh: {
        title: '贴牌吊坠项链，配品牌包装',
        client: '精品连锁店 · 德国',
        service: '贴牌 · Logo 刻字与包装',
        summary: '一家精品连锁店推出了自有品牌项链系列，带 Logo 刻字和定制礼盒。',
        challenge: '客户希望从销售其他品牌转向自有品牌，要求材质符合欧盟 REACH 标准，每件首饰都有低调的 Logo，包装风格要和门店设计一致。',
        solution: '我们在四款热销吊坠的基础上调整设计，在每件的尾牌上激光刻客户 Logo，并按品牌色制作印刷礼盒和绒布袋。随货提供 REACH 镍释放检测报告。',
        results: ['自有品牌系列在 6 家门店同步上市', '提供完整 REACH 文件，顺利进口欧盟', '包装和刻字方案沿用到后续新系列'],
      },
    },
  },
  {
    handle: 'bridal-pearl-earrings-uk',
    sketch: '/images/cases/sketch-earrings.svg',
    finished: '/images/products/earrings-1.svg',
    quantity: '2 SKUs · 250 pairs',
    leadTime: '20 days',
    product: 'pearl-drop-earrings',
    title: 'A bridal pearl earring design for a wedding retailer',
    client: 'Bridal retailer · United Kingdom',
    service: 'ODM · Design adaptation',
    summary: 'We reworked a classic pearl drop into a lighter, more comfortable bridal design.',
    challenge:
      'The client’s brides found existing pearl drops too heavy for a full wedding day. They wanted the same look, lighter weight and a matching bridesmaid version at a lower price point.',
    solution:
      'We reduced the setting weight by switching to a hollow hoop, selected matched freshwater pearl pairs, and created a smaller bridesmaid version in the same style.',
    results: [
      'Around 30% lighter than the original design',
      'Bridal and bridesmaid versions sold as a set',
      'Now a permanent line in the client’s store',
    ],
    i18n: {
      zh: {
        title: '为婚庆零售商设计的新娘珍珠耳坠',
        client: '婚庆零售商 · 英国',
        service: 'ODM · 设计改良',
        summary: '我们把经典珍珠耳坠改良成更轻、更舒适的新娘款。',
        challenge: '客户反馈新娘觉得现有珍珠耳坠太重，戴一整天不舒服。希望外观不变、重量更轻，同时再出一款价格更低的伴娘款。',
        solution: '我们把实心耳圈改成空心结构来减轻重量，挑选配对的淡水珍珠，并按同一风格做了尺寸更小的伴娘款。',
        results: ['比原设计轻约 30%', '新娘款和伴娘款成套销售', '已成为客户门店的常驻款'],
      },
    },
  },
]

export const findCase = (handle: string) => cases.find(c => c.handle === handle)
