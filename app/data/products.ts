import type { Product } from './types'
import { collections } from './collections'

// 示例商品，替换成真实商品时保持字段结构不变即可。
// i18n.zh 里写中文版本，没写的字段会显示英文。
const metal = { name: 'Metal', values: ['925 Sterling Silver', '18K Gold Vermeil', 'Rose Gold Vermeil'] }
const metalZh = { name: '材质', values: ['925 纯银', '18K 金包银', '玫瑰金包银'] }
const ringSize = { name: 'Ring Size (US)', values: ['5', '6', '7', '8', '9'] }
const ringSizeZh = { name: '戒指尺码（美码）', values: ringSize.values }

export const products: Product[] = [
  {
    handle: 'tahitian-sunflower-halo-studs',
    sku: 'TYCP000561',
    title: 'Tahitian Pearl Sunflower Halo Studs',
    collections: [
    'earrings',
    'tahitian'],
    images: [
    '/images/products/tahitian-sunflower-halo-studs-1.jpg',
    '/images/products/tahitian-sunflower-halo-studs-2.jpg',
    '/images/products/tahitian-sunflower-halo-studs-3.jpg',
    '/images/products/tahitian-sunflower-halo-studs-4.jpg',
    '/images/products/tahitian-sunflower-halo-studs-5.jpg',
    '/images/products/tahitian-sunflower-halo-studs-6.jpg'],
    summary: '8–8.5 mm Tahitian black pearls with a diamond sunflower halo, set in 18K gold.',
    description: ['Tahitian black pearls framed by a sunflower halo of diamonds, in 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Tahitian black, 8–8.5 mm' },
    ],
    options: [],
    custom: true,
    featured: true,
    i18n: {
      zh: {
        title: '18K金大溪地黑珍珠耳钉(围镶太阳花款)',
        summary: '8–8.5 毫米大溪地黑珍珠，太阳花钻石围镶，18K 金镶嵌。',
description: [
        '8–8.5 毫米大溪地黑珍珠，太阳花钻石围镶，18K 金镶嵌。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '大溪地黑珍珠，8–8.5 毫米' },
        ],

      },
    },
  },
  {
    handle: 'topaz-moissanite-earrings',
    sku: 'ES-002',
    title: 'Topaz & Moissanite Earrings, 18K Gold',
    collections: [
    'earrings'],
    images: [
    '/images/products/topaz-moissanite-earrings-1.jpg',
    '/images/products/topaz-moissanite-earrings-2.jpg',
    '/images/products/topaz-moissanite-earrings-3.jpg',
    '/images/products/topaz-moissanite-earrings-4.jpg',
    '/images/products/topaz-moissanite-earrings-5.jpg'],
    summary: 'Topaz centres with moissanite accents, hand-set in 18K gold.',
    description: ['Sparkling topaz centres framed by moissanite accents, hand-set in 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold' },
    { label: 'Stone', value: 'Topaz 6.3 mm, moissanite 1.1 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金托帕石耳饰',
        summary: '托帕石主石配莫桑石副石，18K 金手工镶嵌。',
description: [
        '托帕石主石配莫桑石副石，18K 金手工镶嵌。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金' },
          { label: '主石', value: '托帕石 6.3 毫米，莫桑石 1.1 毫米' },
        ],

      },
    },
  },
  {
    handle: 'emerald-diamond-studs',
    sku: 'TYCP000306',
    title: 'Emerald & Diamond Stud Earrings',
    collections: [
    'earrings'],
    images: [
    '/images/products/emerald-diamond-studs-1.jpg',
    '/images/products/emerald-diamond-studs-2.jpg',
    '/images/products/emerald-diamond-studs-3.jpg',
    '/images/products/emerald-diamond-studs-4.jpg',
    '/images/products/emerald-diamond-studs-5.jpg'],
    summary: 'Emeralds paired with brilliant diamonds, set in 18K gold.',
    description: ['Deep green emeralds paired with brilliant diamonds in 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold' },
    { label: 'Stone', value: 'Emerald with diamonds' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石耳钉',
        summary: '祖母绿配钻石，18K 金镶嵌。',
description: [
        '祖母绿配钻石，18K 金镶嵌。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金' },
          { label: '主石', value: '祖母绿配钻石' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-hoop-earrings',
    sku: 'TYCP000090',
    title: 'White South Sea Pearl Hoop Earrings',
    collections: [
    'earrings',
    'south-sea-white'],
    images: [
    '/images/products/south-sea-hoop-earrings-1.jpg',
    '/images/products/south-sea-hoop-earrings-2.jpg',
    '/images/products/south-sea-hoop-earrings-3.jpg'],
    summary: '12 mm white South Sea pearls on sleek 18K gold hoops.',
    description: ['A single 12 mm white South Sea pearl floats on each sleek 18K gold hoop.'],
    details: [
    { label: 'Material', value: '18K gold' },
    { label: 'Pearl', value: 'White South Sea, 12 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金澳白珍珠耳圈(光圈款)',
        summary: '12 毫米南洋澳白珍珠，光圈款 18K 金耳圈。',
description: [
        '12 毫米南洋澳白珍珠，光圈款 18K 金耳圈。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金' },
          { label: '珍珠', value: '南洋澳白珍珠，12 毫米' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-pearl-diamond-studs',
    sku: 'TYCP000502',
    title: 'South Sea Pearl & Diamond Studs',
    collections: [
    'earrings',
    'south-sea-white'],
    images: [
    '/images/products/south-sea-pearl-diamond-studs-1.jpg',
    '/images/products/south-sea-pearl-diamond-studs-2.jpg',
    '/images/products/south-sea-pearl-diamond-studs-3.jpg',
    '/images/products/south-sea-pearl-diamond-studs-4.jpg'],
    summary: '11.75 mm South Sea pearls accented with diamonds, in 18K gold.',
    description: ['11.75 mm white South Sea pearls crowned with diamond accents in 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'White South Sea, 11.75 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石珍珠耳钉',
        summary: '11.75 毫米澳白珍珠配钻石，18K 金耳钉。',
description: [
        '11.75 毫米澳白珍珠配钻石，18K 金耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋澳白珍珠，11.75 毫米' },
        ],

      },
    },
  },
  {
    handle: 'tahitian-agate-halo-studs',
    sku: 'TYCP000127',
    title: 'Tahitian Pearl & Agate Halo Studs',
    collections: [
    'earrings',
    'tahitian'],
    images: [
    '/images/products/tahitian-agate-halo-studs-1.jpg',
    '/images/products/tahitian-agate-halo-studs-2.jpg',
    '/images/products/tahitian-agate-halo-studs-3.jpg',
    '/images/products/tahitian-agate-halo-studs-4.jpg'],
    summary: '9–9.5 mm Tahitian black pearls with agate half-halo, in 18K gold.',
    description: ['Tahitian black pearls half-framed by agate and diamonds — a modern, asymmetric take.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds, agate' },
    { label: 'Pearl', value: 'Tahitian black, 9–9.5 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金大溪地黑珍珠耳钉(半镶玛瑙)',
        summary: '9–9.5 毫米大溪地黑珍珠，半镶玛瑙钻石，18K 金耳钉。',
description: [
        '9–9.5 毫米大溪地黑珍珠，半镶玛瑙钻石，18K 金耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石、玛瑙' },
          { label: '珍珠', value: '大溪地黑珍珠，9–9.5 毫米' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-diamond-studs',
    sku: 'TYCP000541',
    title: 'South Sea Pearl Diamond Studs',
    collections: [
    'earrings',
    'south-sea-white'],
    images: [
    '/images/products/south-sea-diamond-studs-1.jpg',
    '/images/products/south-sea-diamond-studs-2.jpg',
    '/images/products/south-sea-diamond-studs-3.jpg',
    '/images/products/south-sea-diamond-studs-4.jpg'],
    summary: '10–11 mm white South Sea pearls with diamond accents, in 18K gold.',
    description: ['Classic 10–11 mm white South Sea pearls topped with a line of diamonds.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'White South Sea, 10–11 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石澳白珍珠耳钉',
        summary: '10–11 毫米澳白珍珠配钻石，18K 金耳钉。',
description: [
        '10–11 毫米澳白珍珠配钻石，18K 金耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋澳白珍珠，10–11 毫米' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-diamond-pendant',
    sku: 'TYCP000507',
    title: 'South Sea Pearl & Diamond Pendant',
    collections: [
    'necklaces',
    'south-sea-white'],
    images: [
    '/images/products/south-sea-diamond-pendant-1.jpg',
    '/images/products/south-sea-diamond-pendant-2.jpg'],
    summary: '11–12 mm white South Sea pearl with diamond-set bail, in 18K gold.',
    description: ['An 11–12 mm white South Sea pearl suspended beneath a diamond-set bail.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'White South Sea, 11–12 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石珍珠吊坠',
        summary: '11–12 毫米澳白珍珠，钻石扣头，18K 金吊坠。',
description: [
        '11–12 毫米澳白珍珠，钻石扣头，18K 金吊坠。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋澳白珍珠，11–12 毫米' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-pendant-chain',
    sku: 'TYCP000060',
    title: 'South Sea Pearl Chain Necklace',
    collections: [
    'necklaces',
    'south-sea-white'],
    images: [
    '/images/products/south-sea-pendant-chain-1.jpg',
    '/images/products/south-sea-pendant-chain-2.jpg',
    '/images/products/south-sea-pendant-chain-3.jpg',
    '/images/products/south-sea-pendant-chain-4.jpg'],
    summary: 'Through-drilled 10 mm South Sea pearl on an 18K gold chain.',
    description: ['A through-drilled 10 mm South Sea pearl fixed on a fluid 18K gold chain.'],
    details: [
    { label: 'Material', value: '18K gold' },
    { label: 'Pearl', value: 'White South Sea, 10 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金通孔澳白珍珠套链',
        summary: '10 毫米通孔澳白珍珠套链，18K 金。',
description: [
        '10 毫米通孔澳白珍珠套链，18K 金。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金' },
          { label: '珍珠', value: '南洋澳白珍珠，10 毫米' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-openwork-drop-pendant',
    sku: 'TYCP000092',
    title: 'South Sea Pearl Openwork Drop Pendant',
    collections: [
    'necklaces',
    'south-sea-white'],
    images: [
    '/images/products/south-sea-openwork-drop-pendant-1.jpg',
    '/images/products/south-sea-openwork-drop-pendant-2.jpg',
    '/images/products/south-sea-openwork-drop-pendant-3.jpg',
    '/images/products/south-sea-openwork-drop-pendant-4.jpg'],
    summary: '11 mm South Sea pearl in an openwork teardrop of gold and diamonds.',
    description: ['An 11 mm white South Sea pearl held in an openwork teardrop of 18K gold and diamonds.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'White South Sea, 11 mm' },
    ],
    options: [],
    custom: true,
    featured: true,
    i18n: {
      zh: {
        title: '18K金澳白吊坠(镂空水滴)',
        summary: '11 毫米澳白珍珠，镂空水滴造型，18K 金配钻石。',
description: [
        '11 毫米澳白珍珠，镂空水滴造型，18K 金配钻石。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋澳白珍珠，11 毫米' },
        ],

      },
    },
  },
  {
    handle: 'golden-south-sea-diamond-pendant',
    sku: 'TYCP000562',
    title: 'Golden South Sea Pearl & Diamond Pendant',
    collections: [
    'necklaces',
    'golden-south-sea'],
    images: [
    '/images/products/golden-south-sea-diamond-pendant-1.jpg',
    '/images/products/golden-south-sea-diamond-pendant-2.jpg'],
    summary: '10.96 mm golden South Sea pearl with diamond accents, in 18K gold.',
    description: ['A 10.96 mm golden South Sea pearl, its honey glow framed by diamonds.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Golden South Sea, 10.96 mm' },
    ],
    options: [],
    custom: true,
    featured: true,
    i18n: {
      zh: {
        title: '18K金钻石珍珠吊坠',
        summary: '10.96 毫米南洋金珍珠配钻石，18K 金吊坠。',
description: [
        '10.96 毫米南洋金珍珠配钻石，18K 金吊坠。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋金珍珠，10.96 毫米' },
        ],

      },
    },
  },
  {
    handle: 'golden-south-sea-diamond-pendant-large',
    sku: 'TYCP000529',
    title: 'Golden South Sea Pearl & Diamond Pendant — Large',
    collections: [
    'necklaces',
    'golden-south-sea'],
    images: [
    '/images/products/golden-south-sea-diamond-pendant-large-1.jpg',
    '/images/products/golden-south-sea-diamond-pendant-large-2.jpg'],
    summary: '12.1 mm golden South Sea pearl with diamond accents, in 18K gold.',
    description: ['The large 12.1 mm edition of our golden South Sea pendant.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Golden South Sea, 12.1 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石珍珠吊坠（大）',
        summary: '12.1 毫米南洋金珍珠配钻石，18K 金吊坠（大）。',
description: [
        '12.1 毫米南洋金珍珠配钻石，18K 金吊坠（大）。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋金珍珠，12.1 毫米' },
        ],

      },
    },
  },
  {
    handle: 'topaz-moissanite-ring',
    sku: 'TY000804',
    title: 'Topaz & Moissanite Ring, 18K Gold',
    collections: [
    'rings'],
    images: [
    '/images/products/topaz-moissanite-ring-1.jpg',
    '/images/products/topaz-moissanite-ring-2.jpg',
    '/images/products/topaz-moissanite-ring-3.jpg'],
    summary: 'Topaz centre with moissanite accents, hand-set in 18K gold.',
    description: ['A 12.5 mm topaz centre stone flanked by moissanite, hand-set in 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold' },
    { label: 'Stone', value: 'Topaz 12.5 mm, moissanite 1.7 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金托帕石戒指',
        summary: '托帕石主石 12.5 毫米配莫桑石，18K 金戒指。',
description: [
        '托帕石主石 12.5 毫米配莫桑石，18K 金戒指。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金' },
          { label: '主石', value: '托帕石 12.5 毫米，莫桑石 1.7 毫米' },
        ],

      },
    },
  },
  {
    handle: 'diamond-ring-18k',
    sku: 'TYCP000308',
    title: 'Diamond Ring, 18K Gold',
    collections: [
    'rings'],
    images: [
    '/images/products/diamond-ring-18k-1.jpg',
    '/images/products/diamond-ring-18k-2.jpg',
    '/images/products/diamond-ring-18k-3.jpg'],
    summary: 'Brilliant diamonds on a clean 18K gold band.',
    description: ['A clean 18K gold band crowned with brilliant diamonds.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石戒指',
        summary: '钻石配 18K 金戒指。',
description: [
        '钻石配 18K 金戒指。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
        ],

      },
    },
  },
  {
    handle: 'baroque-bezel-pendant-01',
    sku: 'TY88800003',
    title: 'Baroque Pearl Bezel Pendant 01',
    collections: [
    'necklaces',
    'keshi'],
    images: [
    '/images/products/baroque-bezel-pendant-01-1.jpg',
    '/images/products/baroque-bezel-pendant-01-2.jpg'],
    summary: 'One-of-a-kind baroque pearl in a diamond-dusted gold bezel, with paperclip chain.',
    description: ['A one-of-a-kind baroque pearl cupped in a diamond-dusted 18K gold bezel, on a paperclip chain.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Baroque, one of a kind' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '',
        summary: '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
description: [
        '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '巴洛克珍珠，独一款' },
        ],

      },
    },
  },
  {
    handle: 'baroque-bezel-pendant-02',
    sku: 'TY88800004',
    title: 'Baroque Pearl Bezel Pendant 02',
    collections: [
    'necklaces',
    'keshi'],
    images: [
    '/images/products/baroque-bezel-pendant-02-1.jpg',
    '/images/products/baroque-bezel-pendant-02-2.jpg'],
    summary: 'One-of-a-kind baroque pearl in a diamond-dusted gold bezel, with paperclip chain.',
    description: ['A one-of-a-kind baroque pearl cupped in a diamond-dusted 18K gold bezel, on a paperclip chain.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Baroque, one of a kind' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '',
        summary: '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
description: [
        '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '巴洛克珍珠，独一款' },
        ],

      },
    },
  },
  {
    handle: 'baroque-bezel-pendant-03',
    sku: 'TY88800005',
    title: 'Baroque Pearl Bezel Pendant 03',
    collections: [
    'necklaces',
    'keshi'],
    images: [
    '/images/products/baroque-bezel-pendant-03-1.jpg',
    '/images/products/baroque-bezel-pendant-03-2.jpg'],
    summary: 'One-of-a-kind baroque pearl in a diamond-dusted gold bezel, with paperclip chain.',
    description: ['A one-of-a-kind baroque pearl cupped in a diamond-dusted 18K gold bezel, on a paperclip chain.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Baroque, one of a kind' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '',
        summary: '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
description: [
        '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '巴洛克珍珠，独一款' },
        ],

      },
    },
  },
  {
    handle: 'baroque-bezel-pendant-04',
    sku: 'TY88800006',
    title: 'Baroque Pearl Bezel Pendant 04',
    collections: [
    'necklaces',
    'keshi'],
    images: [
    '/images/products/baroque-bezel-pendant-04-1.jpg',
    '/images/products/baroque-bezel-pendant-04-2.jpg'],
    summary: 'One-of-a-kind baroque pearl in a diamond-dusted gold bezel, with paperclip chain.',
    description: ['A one-of-a-kind baroque pearl cupped in a diamond-dusted 18K gold bezel, on a paperclip chain.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Baroque, one of a kind' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '',
        summary: '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
description: [
        '巴洛克珍珠金边包镶，配 18K 金链，独一无二。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '巴洛克珍珠，独一款' },
        ],

      },
    },
  },
  {
    handle: 'tahitian-pearl-bracelet-925',
    sku: 'TYCP000735',
    title: 'Tahitian Pearl Bracelet, 925 Silver',
    collections: [
    'bracelets',
    'tahitian'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: '8–10 mm Tahitian black pearls strung on 925 silver.',
    description: ['8–10 mm Tahitian black pearls strung on 925 silver.'],
    details: [
    { label: 'Material', value: '925 silver' },
    { label: 'Pearl', value: 'Tahitian black, 8–10 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '925银大溪地黑珍珠手串',
        summary: '8–10 毫米大溪地黑珍珠手串，925 银。',
description: [
        '8–10 毫米大溪地黑珍珠手串，925 银。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '925 银' },
          { label: '珍珠', value: '大溪地黑珍珠，8–10 毫米' },
        ],

      },
    },
  },
  {
    handle: 'tahitian-diamond-pendant-18k',
    sku: 'TYCP000400',
    title: 'Tahitian Pearl & Diamond Pendant',
    collections: [
    'necklaces',
    'tahitian'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'An 11 mm Tahitian black pearl beneath diamond-set 18K gold.',
    description: ['An 11 mm Tahitian black pearl beneath diamond-set 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'Tahitian black, 11 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石大溪地黑珍珠吊坠',
        summary: '11 毫米大溪地黑珍珠配钻石，18K 金吊坠。',
description: [
        '11 毫米大溪地黑珍珠配钻石，18K 金吊坠。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '大溪地黑珍珠，11 毫米' },
        ],

      },
    },
  },
  {
    handle: 'south-sea-diamond-ring',
    sku: 'TYJZAR000477',
    title: 'South Sea Pearl & Diamond Ring',
    collections: [
    'rings',
    'pearls'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A 9.4 mm South Sea pearl crowned with diamonds, in 18K gold.',
    description: ['A 9.4 mm South Sea pearl crowned with diamonds, in 18K gold.'],
    details: [
    { label: 'Material', value: '18K gold, diamonds' },
    { label: 'Pearl', value: 'South Sea, 9.4 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '18K金钻石南洋珍珠戒指',
        summary: '9.4 毫米南洋珍珠配钻石，18K 金戒指。',
description: [
        '9.4 毫米南洋珍珠配钻石，18K 金戒指。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '18K 金、钻石' },
          { label: '珍珠', value: '南洋珍珠，9.4 毫米' },
        ],

      },
    },
  },
  {
    handle: 'pearl-brooch-01',
    sku: 'TYXZDJ00001',
    title: 'Pearl Brooch 01',
    collections: [
    'brooches'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A hand-finished pearl brooch, one of a kind.',
    description: ['A hand-finished pearl brooch, one of a kind.'],
    details: [
    { label: 'Material', value: 'Pearl, base metal' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '胸针',
        summary: '珍珠胸针，手工精修，独一款。',
description: [
        '珍珠胸针，手工精修，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '珍珠、金属底托' },
        ],

      },
    },
  },
  {
    handle: 'pearl-brooch-02',
    sku: 'TYXZDJ00002',
    title: 'Pearl Brooch 02',
    collections: [
    'brooches'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A hand-finished pearl brooch, one of a kind.',
    description: ['A hand-finished pearl brooch, one of a kind.'],
    details: [
    { label: 'Material', value: 'Pearl, base metal' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '胸针',
        summary: '珍珠胸针，手工精修，独一款。',
description: [
        '珍珠胸针，手工精修，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '珍珠、金属底托' },
        ],

      },
    },
  },
  {
    handle: 'pearl-brooch-03',
    sku: 'TYXZDJ00003',
    title: 'Pearl Brooch 03',
    collections: [
    'brooches'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A hand-finished pearl brooch, one of a kind.',
    description: ['A hand-finished pearl brooch, one of a kind.'],
    details: [
    { label: 'Material', value: 'Pearl, base metal' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '胸针',
        summary: '珍珠胸针，手工精修，独一款。',
description: [
        '珍珠胸针，手工精修，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '珍珠、金属底托' },
        ],

      },
    },
  },
  {
    handle: 'pearl-brooch-04',
    sku: 'TYXZDJ00004',
    title: 'Pearl Brooch 04',
    collections: [
    'brooches'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A hand-finished pearl brooch, one of a kind.',
    description: ['A hand-finished pearl brooch, one of a kind.'],
    details: [
    { label: 'Material', value: 'Pearl, base metal' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '胸针',
        summary: '珍珠胸针，手工精修，独一款。',
description: [
        '珍珠胸针，手工精修，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '珍珠、金属底托' },
        ],

      },
    },
  },
  {
    handle: 'pearl-brooch-05',
    sku: 'TYXZDJ00005',
    title: 'Pearl Brooch 05',
    collections: [
    'brooches'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A hand-finished pearl brooch, one of a kind.',
    description: ['A hand-finished pearl brooch, one of a kind.'],
    details: [
    { label: 'Material', value: 'Pearl, base metal' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '胸针',
        summary: '珍珠胸针，手工精修，独一款。',
description: [
        '珍珠胸针，手工精修，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '珍珠、金属底托' },
        ],

      },
    },
  },
  {
    handle: 'silver-pearl-studs-7',
    sku: 'TYED00001',
    title: 'Silver Pearl Stud Earrings, 7–8 mm',
    collections: [
    'earrings',
    'pearls'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: '7–8 mm cultured pearls on 925 silver studs.',
    description: ['7–8 mm cultured pearls on 925 silver studs.'],
    details: [
    { label: 'Material', value: '925 silver' },
    { label: 'Pearl', value: 'Cultured, 7–8 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: 'S925银珍珠耳钉',
        summary: '7–8 毫米养殖珍珠，925 银耳钉。',
description: [
        '7–8 毫米养殖珍珠，925 银耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '925 银' },
          { label: '珍珠', value: '养殖珍珠，7–8 毫米' },
        ],

      },
    },
  },
  {
    handle: 'silver-pearl-studs-9',
    sku: 'TYED00002',
    title: 'Silver Pearl Stud Earrings, 9–10 mm',
    collections: [
    'earrings',
    'pearls'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: '9–10 mm cultured pearls on silver studs.',
    description: ['9–10 mm cultured pearls on silver studs.'],
    details: [
    { label: 'Material', value: 'Silver' },
    { label: 'Pearl', value: 'Cultured, 9–10 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: 'S926银珍珠耳钉',
        summary: '9–10 毫米养殖珍珠，银耳钉。',
description: [
        '9–10 毫米养殖珍珠，银耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '银' },
          { label: '珍珠', value: '养殖珍珠，9–10 毫米' },
        ],

      },
    },
  },
  {
    handle: 'silver-pearl-studs-10',
    sku: 'TYED00003',
    title: 'Silver Pearl Stud Earrings, 10–11 mm',
    collections: [
    'earrings',
    'pearls'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: '10–11 mm cultured pearls on silver studs.',
    description: ['10–11 mm cultured pearls on silver studs.'],
    details: [
    { label: 'Material', value: 'Silver' },
    { label: 'Pearl', value: 'Cultured, 10–11 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: 'S927银珍珠耳钉',
        summary: '10–11 毫米养殖珍珠，银耳钉。',
description: [
        '10–11 毫米养殖珍珠，银耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '银' },
          { label: '珍珠', value: '养殖珍珠，10–11 毫米' },
        ],

      },
    },
  },
  {
    handle: 'silver-pearl-studs-11',
    sku: 'TYED00004',
    title: 'Silver Pearl Stud Earrings, 11–12 mm',
    collections: [
    'earrings',
    'pearls'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: '11–12 mm cultured pearls on silver studs.',
    description: ['11–12 mm cultured pearls on silver studs.'],
    details: [
    { label: 'Material', value: 'Silver' },
    { label: 'Pearl', value: 'Cultured, 11–12 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: 'S928银珍珠耳钉',
        summary: '11–12 毫米养殖珍珠，银耳钉。',
description: [
        '11–12 毫米养殖珍珠，银耳钉。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '银' },
          { label: '珍珠', value: '养殖珍珠，11–12 毫米' },
        ],

      },
    },
  },
  {
    handle: 'madama-baroque-akoya-strand',
    sku: 'TYAK000862',
    title: 'Madama Baroque Akoya Strand',
    collections: [
    'necklaces',
    'akoya'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'Silvery-blue baroque akoya pearls, 8–9 mm, strung into a strand.',
    description: ['Silvery-blue baroque akoya pearls, 8–9 mm, strung into a strand.'],
    details: [
    { label: 'Material', value: 'Akoya pearls' },
    { label: 'Pearl', value: 'Madama baroque, 8–9 mm' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '真多麻巴洛克珠链',
        summary: '8–9 毫米真多麻巴洛克珠链。',
description: [
        '8–9 毫米真多麻巴洛克珠链。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: 'Akoya 珍珠' },
          { label: '珍珠', value: '真多麻巴洛克珍珠，8–9 毫米' },
        ],

      },
    },
  },
  {
    handle: 'baroque-keshi-pendant-01',
    sku: 'TY88800001',
    title: 'Baroque Pearl Pendant 01 (Silver Chain)',
    collections: [
    'necklaces',
    'keshi'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A baroque pearl pendant on a fine silver chain, one of a kind.',
    description: ['A baroque pearl pendant on a fine silver chain, one of a kind.'],
    details: [
    { label: 'Material', value: 'Silver' },
    { label: 'Pearl', value: 'Baroque, one of a kind' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '巴洛克吊坠(含银项链)',
        summary: '巴洛克吊坠，含银项链，独一款。',
description: [
        '巴洛克吊坠，含银项链，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '银' },
          { label: '珍珠', value: '巴洛克珍珠，独一款' },
        ],

      },
    },
  },
  {
    handle: 'baroque-keshi-pendant-02',
    sku: 'TY88800002',
    title: 'Baroque Pearl Pendant 02 (Silver Chain)',
    collections: [
    'necklaces',
    'keshi'],
    images: [
    '/images/products/pending.svg?v=2'],
    summary: 'A baroque pearl pendant on a fine silver chain, one of a kind.',
    description: ['A baroque pearl pendant on a fine silver chain, one of a kind.'],
    details: [
    { label: 'Material', value: 'Silver' },
    { label: 'Pearl', value: 'Baroque, one of a kind' },
    ],
    options: [],
    custom: true,
    i18n: {
      zh: {
        title: '巴洛克吊坠(含银项链)',
        summary: '巴洛克吊坠，含银项链，独一款。',
description: [
        '巴洛克吊坠，含银项链，独一款。',
        '每一件均为真实库存单品，支持同款定制，欢迎询价。',
      ],
        details: [
          { label: '材质', value: '银' },
          { label: '珍珠', value: '巴洛克珍珠，独一款' },
        ],

      },
    },
  }
]

export const findProduct = (handle: string) => products.find(p => p.handle === handle)
export const productsIn = (collection: string) => {
  if (collection === 'all') return products
  // 父分类（如 pearls）自动包含所有子分类的商品
  const handles = [collection, ...collections.filter(c => c.parent === collection).map(c => c.handle)]
  return products.filter(p => p.collections.some(h => handles.includes(h)))
}
