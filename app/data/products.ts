import type { Product } from './types'

// 示例商品，替换成真实商品时保持字段结构不变即可。
// i18n.zh 里写中文版本，没写的字段会显示英文。
const metal = { name: 'Metal', values: ['925 Sterling Silver', '18K Gold Vermeil', 'Rose Gold Vermeil'] }
const metalZh = { name: '材质', values: ['925 纯银', '18K 金包银', '玫瑰金包银'] }
const ringSize = { name: 'Ring Size (US)', values: ['5', '6', '7', '8', '9'] }
const ringSizeZh = { name: '戒指尺码（美码）', values: ringSize.values }

export const products: Product[] = [
  {
    handle: 'classic-solitaire-ring',
    sku: 'AR-R001',
    title: 'Classic Solitaire Ring',
    price: 89,
    collections: ['rings'],
    images: ['/images/products/ring-1.svg', '/images/products/ring-2.svg'],
    summary: 'A timeless 6-prong solitaire set with a brilliant-cut cubic zirconia.',
    description: [
      'Our Classic Solitaire is the ring you will reach for every day. A 1 ct brilliant-cut stone sits in a low-profile six-prong setting that catches the light without snagging.',
      'Handcrafted in solid 925 sterling silver and finished with a tarnish-resistant rhodium plating.',
    ],
    details: [
      { label: 'Material', value: '925 sterling silver, rhodium plated' },
      { label: 'Stone', value: '1 ct AAAAA cubic zirconia, 6.5 mm' },
      { label: 'Band width', value: '1.8 mm' },
      { label: 'Nickel free', value: 'Yes, EU REACH compliant' },
    ],
    options: [metal, ringSize],
    wholesale: true,
    featured: true,
    designImage: '/images/cases/sketch-ring.svg',
    designStory:
      'We wanted a solitaire that sits low enough for everyday wear. Early sketches explored four, six and eight prongs; six gave the best balance of security and sparkle.',
    i18n: {
      zh: {
        designStory: '我们想做一枚镶口足够低、适合日常佩戴的单钻戒。早期草图试过四爪、六爪和八爪，最终选择了在牢固和闪耀之间最平衡的六爪。',
        title: '经典单钻戒指',
        summary: '经典六爪镶嵌，配圆形明亮式切工锆石。',
        description: [
          '经典单钻戒是适合每天佩戴的百搭款。1 克拉明亮式切工主石采用低矮六爪镶嵌，闪耀的同时不易勾挂衣物。',
          '采用 925 纯银手工制作，表面镀铑，防氧化变色。',
        ],
        details: [
          { label: '材质', value: '925 纯银，镀铑' },
          { label: '主石', value: '1 克拉 5A 锆石，6.5 毫米' },
          { label: '戒臂宽度', value: '1.8 毫米' },
          { label: '无镍', value: '是，符合欧盟 REACH 标准' },
        ],
        options: [metalZh, ringSizeZh],
      },
    },
  },
  {
    handle: 'twisted-stacking-band',
    sku: 'AR-R002',
    title: 'Twisted Stacking Band',
    price: 49,
    collections: ['rings'],
    images: ['/images/products/ring-2.svg', '/images/products/ring-1.svg'],
    summary: 'A slim twisted rope band made for stacking.',
    description: [
      'Wear it alone or stack three for a layered look. The rope texture adds subtle shine from every angle.',
    ],
    details: [
      { label: 'Material', value: '925 sterling silver' },
      { label: 'Band width', value: '1.5 mm' },
      { label: 'Nickel free', value: 'Yes' },
    ],
    options: [metal, ringSize],
    wholesale: true,
    i18n: {
      zh: {
        title: '麻花叠戴指环',
        summary: '纤细麻花纹指环，适合叠戴。',
        description: ['单戴或三枚叠戴都好看，麻花纹理从各个角度都能反射细腻光泽。'],
        details: [
          { label: '材质', value: '925 纯银' },
          { label: '戒臂宽度', value: '1.5 毫米' },
          { label: '无镍', value: '是' },
        ],
        options: [metalZh, ringSizeZh],
      },
    },
  },
  {
    handle: 'heart-pendant-necklace',
    sku: 'AR-N001',
    title: 'Heart Pendant Necklace',
    price: 69,
    collections: ['necklaces'],
    images: ['/images/products/necklace-1.svg', '/images/products/necklace-2.svg'],
    summary: 'A puffed heart pendant on an adjustable cable chain.',
    description: [
      'A modern take on a classic keepsake. The polished puffed heart hangs from a fine cable chain adjustable from 16" to 18".',
      'Can be engraved with up to 3 initials on the back.',
    ],
    details: [
      { label: 'Material', value: '925 sterling silver' },
      { label: 'Chain length', value: '16" + 2" extender' },
      { label: 'Pendant size', value: '12 x 11 mm' },
      { label: 'Engraving', value: 'Up to 3 characters' },
    ],
    options: [metal],
    wholesale: true,
    featured: true,
    designImage: '/images/cases/sketch-necklace.svg',
    designStory:
      'The puffed heart started as a flat outline. We added volume so it catches light from every angle, and kept the back flat for engraving.',
    i18n: {
      zh: {
        designStory: '立体爱心最初只是一个平面轮廓。我们加了饱满的弧度，让它从各个角度都能反光，同时保留平整的背面方便刻字。',
        title: '爱心吊坠项链',
        summary: '立体爱心吊坠，搭配可调节细链。',
        description: [
          '经典信物的现代演绎。抛光立体爱心吊坠配细款链条，长度可在 16 至 18 英寸之间调节。',
          '吊坠背面可刻最多 3 个字母。',
        ],
        details: [
          { label: '材质', value: '925 纯银' },
          { label: '链长', value: '16 英寸 + 2 英寸延长链' },
          { label: '吊坠尺寸', value: '12 x 11 毫米' },
          { label: '刻字', value: '最多 3 个字符' },
        ],
        options: [metalZh],
      },
    },
  },
  {
    handle: 'initial-bar-necklace',
    sku: 'AR-N002',
    title: 'Initial Bar Necklace',
    price: 59,
    collections: ['necklaces'],
    images: ['/images/products/necklace-2.svg', '/images/products/necklace-1.svg'],
    summary: 'A minimalist horizontal bar, personalised with your initials.',
    description: ['A slim bar pendant that can be engraved on both sides. A perfect personalised gift.'],
    details: [
      { label: 'Material', value: '925 sterling silver' },
      { label: 'Bar size', value: '25 x 5 mm' },
      { label: 'Chain length', value: '18"' },
    ],
    options: [metal],
    wholesale: true,
    i18n: {
      zh: {
        title: '字母横条项链',
        summary: '极简横条吊坠，可刻上你的姓名缩写。',
        description: ['纤细横条吊坠，正反两面都可以刻字，是理想的定制礼物。'],
        details: [
          { label: '材质', value: '925 纯银' },
          { label: '横条尺寸', value: '25 x 5 毫米' },
          { label: '链长', value: '18 英寸' },
        ],
        options: [metalZh],
      },
    },
  },
  {
    handle: 'pearl-drop-earrings',
    sku: 'AR-E001',
    title: 'Pearl Drop Earrings',
    price: 79,
    collections: ['earrings'],
    images: ['/images/products/earrings-1.svg', '/images/products/earrings-2.svg'],
    summary: 'Freshwater pearls suspended from polished huggie hoops.',
    description: [
      'Genuine 7–8 mm freshwater pearls hang from detachable huggie hoops, so you can wear them two ways.',
    ],
    details: [
      { label: 'Material', value: '925 sterling silver, 18K gold vermeil option' },
      { label: 'Pearl', value: 'Freshwater, 7–8 mm' },
      { label: 'Hypoallergenic', value: 'Yes' },
    ],
    options: [metal],
    wholesale: true,
    featured: true,
    i18n: {
      zh: {
        title: '珍珠耳坠',
        summary: '天然淡水珍珠，悬挂于抛光贴耳圈下。',
        description: ['7–8 毫米天然淡水珍珠搭配可拆卸贴耳圈，一款两戴。'],
        details: [
          { label: '材质', value: '925 纯银，可选 18K 金包银' },
          { label: '珍珠', value: '淡水珍珠，7–8 毫米' },
          { label: '防过敏', value: '是' },
        ],
        options: [metalZh],
      },
    },
  },
  {
    handle: 'mini-huggie-hoops',
    sku: 'AR-E002',
    title: 'Mini Huggie Hoops',
    price: 45,
    collections: ['earrings'],
    images: ['/images/products/earrings-2.svg', '/images/products/earrings-1.svg'],
    summary: 'Everyday 10 mm hoops with a secure hinged closure.',
    description: ['Comfortable enough to sleep in, polished enough to wear anywhere.'],
    details: [
      { label: 'Material', value: '925 sterling silver' },
      { label: 'Diameter', value: '10 mm' },
    ],
    options: [metal],
    wholesale: true,
    i18n: {
      zh: {
        title: '迷你贴耳圈',
        summary: '10 毫米日常耳圈，铰链扣牢固不易掉。',
        description: ['舒适到睡觉也不用摘，精致到任何场合都能戴。'],
        details: [
          { label: '材质', value: '925 纯银' },
          { label: '直径', value: '10 毫米' },
        ],
        options: [metalZh],
      },
    },
  },
  {
    handle: 'tennis-bracelet',
    sku: 'AR-B001',
    title: 'Tennis Bracelet',
    price: 129,
    collections: ['bracelets'],
    images: ['/images/products/bracelet-1.svg', '/images/products/bracelet-2.svg'],
    summary: 'A continuous line of 3 mm stones with a secure box clasp.',
    description: [
      'Each stone is individually hand-set in a four-prong basket. Finished with a double-locking box clasp.',
    ],
    details: [
      { label: 'Material', value: '925 sterling silver, rhodium plated' },
      { label: 'Stones', value: '3 mm AAAAA cubic zirconia' },
      { label: 'Length', value: '6.5" / 7" / 7.5"' },
    ],
    options: [metal, { name: 'Length', values: ['6.5"', '7"', '7.5"'] }],
    wholesale: true,
    featured: true,
    i18n: {
      zh: {
        title: '满钻网球手链',
        summary: '3 毫米锆石连排镶嵌，配牢固盒式扣。',
        description: ['每颗锆石都以四爪手工单独镶嵌，搭配双重保险盒式扣。'],
        details: [
          { label: '材质', value: '925 纯银，镀铑' },
          { label: '镶石', value: '3 毫米 5A 锆石' },
          { label: '长度', value: '6.5 / 7 / 7.5 英寸' },
        ],
        options: [metalZh, { name: '长度', values: ['6.5 英寸', '7 英寸', '7.5 英寸'] }],
      },
    },
  },
  {
    handle: 'paperclip-chain-bracelet',
    sku: 'AR-B002',
    title: 'Paperclip Chain Bracelet',
    price: 55,
    collections: ['bracelets'],
    images: ['/images/products/bracelet-2.svg', '/images/products/bracelet-1.svg'],
    summary: 'A modern paperclip link bracelet with a lobster clasp.',
    description: ['Bold elongated links that layer beautifully with fine chains and bangles.'],
    details: [
      { label: 'Material', value: '925 sterling silver' },
      { label: 'Link size', value: '4 x 12 mm' },
      { label: 'Length', value: '7" adjustable' },
    ],
    options: [metal],
    wholesale: true,
    i18n: {
      zh: {
        title: '回形针链手链',
        summary: '时尚回形针链节手链，配龙虾扣。',
        description: ['加长链节造型大方，和细链、手镯叠戴都很出彩。'],
        details: [
          { label: '材质', value: '925 纯银' },
          { label: '链节尺寸', value: '4 x 12 毫米' },
          { label: '长度', value: '7 英寸，可调节' },
        ],
        options: [metalZh],
      },
    },
  },
]

export const findProduct = (handle: string) => products.find(p => p.handle === handle)
export const productsIn = (collection: string) =>
  collection === 'all' ? products : products.filter(p => p.collections.includes(collection))
