import type { Collection } from './types'

export const collections: Collection[] = [
  // ── 顶级：珍珠大类（品牌核心，排在通用品类前面）──
  {
    handle: 'pearls',
    title: 'Pearls',
    description: 'High-quality saltwater pearls sourced directly from farms — South Sea, Tahitian, Akoya and more.',
    image: '/images/collections/south-sea-pendant.jpg',
    i18n: {
      zh: {
        title: '珍珠',
        description: '直接源自养殖场的高品质海水珍珠——南洋珠、大溪地、Akoya 等。',
      },
    },
  },
  // ── 顶级：珠宝通用品类（顺序与官网布局文档一致）──
  {
    handle: 'necklaces',
    title: 'Necklaces',
    description: 'Necklaces and pendants in delicate chains and bold silhouettes — layerable, lasting, made for everyday.',
    image: '/images/collections/necklaces.svg',
    i18n: {
      zh: {
        title: '项链',
        description: '从纤细链条到大胆造型的项链与吊坠——适合叠戴、经久耐看，为日常而生。',
      },
    },
  },
  {
    handle: 'earrings',
    title: 'Earrings',
    description: 'Earrings for every occasion — everyday studs and huggies to sculptural statement drops.',
    image: '/images/collections/earrings.svg',
    i18n: {
      zh: {
        title: '耳环',
        description: '适合各种场合的耳饰——从日常耳钉、贴耳圈到雕塑感垂坠耳环。',
      },
    },
  },
  {
    handle: 'rings',
    title: 'Rings',
    description: 'Rings to stack, gift and wear every day — slim bands, solitaires and statement pieces.',
    image: '/images/collections/rings.svg',
    i18n: {
      zh: {
        title: '戒指',
        description: '适合叠戴、送礼与日常佩戴的戒指——纤细指环、单珠款与造型款。',
      },
    },
  },
  {
    handle: 'bracelets',
    title: 'Bracelets',
    description: 'Bracelets and bangles from fine chains to bold links — finished by hand, made to be layered.',
    image: '/images/collections/bracelets.svg',
    i18n: {
      zh: {
        title: '手链',
        description: '从细链到粗链的手链与手镯——手工精修，为叠戴而生。',
      },
    },
  },
  // ── 珍珠子类：品种 ──
  {
    handle: 'south-sea-white',
    parent: 'pearls',
    title: 'White South Sea Pearls',
    tagline: 'Silvery, luminous glow',
    description: 'Lustrous white and silver South Sea pearls harvested from Australian waters. Among the largest and finest pearls in the world, celebrated for their deep mirror-like lustre.',
    image: '/images/collections/south-sea-pendant.jpg',
    i18n: {
      zh: {
        title: '澳白南洋珠',
        tagline: '银白莹润的光辉',
        description: '产自澳大利亚海域的白色与银白色南洋珠。珠径大、光泽深邃如镜，是全球品质最高的珍珠品类之一。',
      },
      sv: {
        title: 'Vita Sydhavsperlor',
        tagline: 'Silvrigt, lysande skimmer',
        description: 'Lysterrika vita och silvriga sydhavsperlor från australiensiska vatten. Bland de största och finaste perlorna i världen, kända för sin djupa spegelliknande lyster.',
      },
      da: {
        title: 'Hvide Sydhavsperler',
        tagline: 'Sølvagtig, lysende glans',
        description: 'Skinnende hvide og sølvfarvede sydhavsperler fra australske farvande. Blandt de største og fineste perler i verden, fejret for deres dybe spejlagtige glans.',
      },
      no: {
        title: 'Hvite Sydhavsperler',
        tagline: 'Sølvaktig, lysende glans',
        description: 'Glinsende hvite og sølvfargede sydhavsperler fra australske farvann. Blant de største og fineste perlene i verden, kjent for sin dype speillignende glans.',
      },
    },
  },
  {
    handle: 'golden-south-sea',
    parent: 'pearls',
    title: 'Golden South Sea Pearls',
    tagline: 'Warm honey-gold sheen',
    description: 'Rare golden South Sea pearls from the Philippine and Indonesian archipelago. Their warm champagne-to-deep-gold colour is entirely natural — never treated or dyed.',
    image: '/images/collections/south-sea-pendant.jpg',
    i18n: {
      zh: {
        title: '金色南洋珠',
        tagline: '温润的蜜金色泽',
        description: '产自菲律宾和印度尼西亚群岛的稀有金色南洋珠。从浅香槟色到深金色，颜色完全天然，从不染色或优化处理。',
      },
      sv: {
        title: 'Gyllene Sydhavsperlor',
        tagline: 'Varm honungsgyllene glans',
        description: 'Sällsynta gyllene sydhavsperlor från det filippinska och indonesiska arkipelagen. Deras varma champagne-till-djupguldiga färg är helt naturlig — aldrig behandlad eller färgad.',
      },
      da: {
        title: 'Gyldne Sydhavsperler',
        tagline: 'Varm honninggylden skær',
        description: 'Sjældne gyldne sydhavsperler fra det filippinske og indonesiske archipelag. Deres varme champagne-til-dybguld-farve er helt naturlig — aldrig behandlet eller farvet.',
      },
      no: {
        title: 'Gylne Sydhavsperler',
        tagline: 'Varm honninggylden glans',
        description: 'Sjeldne gylne sydhavsperler fra det filippinske og indonesiske øyhavet. Deres varme champagne-til-dypgull-farge er helt naturlig — aldri behandlet eller farget.',
      },
    },
  },
  {
    handle: 'tahitian',
    parent: 'pearls',
    title: 'Tahitian Pearls',
    tagline: 'Deep iridescent dark tones',
    description: 'Exotic dark pearls from the black-lipped oyster of French Polynesia. Each pearl is unique, ranging from jet black and peacock green to deep aubergine and silver-grey.',
    image: '/images/collections/tahitian.svg',
    i18n: {
      zh: {
        title: '大溪地珍珠',
        tagline: '深邃变幻的晕彩暗调',
        description: '产自法属波利尼西亚黑唇贝的深色异域珍珠。每颗颜色独一无二，从墨黑、孔雀绿到深茄紫与银灰，变幻多端。',
      },
      sv: {
        title: 'Tahitiperlor',
        tagline: 'Djupa, skiftande mörka toner',
        description: 'Exotiska mörka perlor från svartläppade ostron i Franska Polynesien. Varje perla är unik och spänner från kolsvart och påfågelsgrönt till djup aubergine och silvergrått.',
      },
      da: {
        title: 'Tahitiperler',
        tagline: 'Dybe, skiftende mørke toner',
        description: 'Eksotiske mørke perler fra den sortlæbede østers i Fransk Polynesien. Hver perle er unik og spænder fra kulsorte og påfuglegrønne til dybe aubergine- og sølvgrå nuancer.',
      },
      no: {
        title: 'Tahitiperler',
        tagline: 'Dype, skiftende mørke toner',
        description: 'Eksotiske mørke perler fra den svartleppede østers i Fransk Polynesia. Hver perle er unik og varierer fra kullsort og påfuglegrønn til dyp aubergine og sølvgrå.',
      },
    },
  },
  {
    handle: 'akoya',
    parent: 'pearls',
    title: 'Akoya Pearls',
    tagline: 'Delicate rose-pink overtones',
    description: 'The classic saltwater pearl. Akoya pearls from Pinctada fucata oysters are prized for their exceptional roundness, bright white body colour and sharp, reflective lustre.',
    image: '/images/collections/akoya.svg',
    i18n: {
      zh: {
        title: 'Akoya 珍珠',
        tagline: '细腻的玫瑰粉伴彩',
        description: '阿古屋珍珠是最经典的海水珍珠品种，以极高的正圆率、明亮白色体色和锋利如镜的强光著称，是珍珠中的标准美人。',
      },
      sv: {
        title: 'Akoyaperlor',
        tagline: 'Delikata rosenrosa övertoner',
        description: 'Den klassiska saltvattenperlan. Akoyaperlor från Pinctada fucata-ostron är eftertraktade för sin exceptionella rundhet, lysande vit grundfärg och skarp, reflekterande lyster.',
      },
      da: {
        title: 'Akoyaperler',
        tagline: 'Delikate rosenrøde overtoner',
        description: 'Den klassiske saltvandperle. Akoyaperler fra Pinctada fucata-østers er værdsat for deres enestående rundethed, klar hvid grundfarve og skarp, reflekterende glans.',
      },
      no: {
        title: 'Akoyaperler',
        tagline: 'Delikate rosenrosa overtoner',
        description: 'Den klassiske saltvannsperlene. Akoyaperler fra Pinctada fucata-østers er verdsatt for sin eksepsjonelle rundhet, klar hvit grunnfarge og skarp, reflekterende glans.',
      },
    },
  },
  {
    handle: 'keshi',
    parent: 'pearls',
    title: 'Keshi Pearls',
    tagline: 'Natural free-form luster',
    description: 'Keshi pearls form without a nucleus as a by-product of culturing. Entirely nacre, they display extraordinary lustre in organic baroque shapes — no two are alike.',
    image: '/images/collections/keshi.svg',
    i18n: {
      zh: {
        title: 'Keshi 珍珠',
        tagline: '随形天成的自然光泽',
        description: 'Keshi 珍珠在养殖过程中自然脱核形成，全部由珍珠层构成，光泽极强。每颗形态各异，天然巴洛克造型，绝无重复。',
      },
      sv: {
        title: 'Keshiperlor',
        tagline: 'Naturlig lyster i fri form',
        description: 'Keshiperlan bildas utan kärna som en biprodukt av pärlaodling. De består helt av pärlemor och visar extraordinär lyster i organiska barockformer — inga två är lika.',
      },
      da: {
        title: 'Keshiperler',
        tagline: 'Naturlig glans i fri form',
        description: 'Keshiperler dannes uden kerne som et biprodukt af perledyrkning. Helt fremstillet af perlemor viser de en ekstraordinær glans i organiske barokformer — ingen to er ens.',
      },
      no: {
        title: 'Keshiperler',
        tagline: 'Naturlig glans i fri form',
        description: 'Keshiperler dannes uten kjerne som et biprodukt av perledyrking. Helt laget av perlemor viser de ekstraordinær glans i organiske barokkformer — ingen to er like.',
      },
    },
  },
  {
    handle: 'mabe',
    parent: 'pearls',
    title: 'Mabé Pearls',
    tagline: 'Bold dome-shaped pearl',
    description: 'Mabé pearls grow against the inner shell of the oyster, producing a flat-backed dome of solid nacre. Their large surface and vivid overtones make them ideal for rings and earrings.',
    image: '/images/collections/mabe.svg',
    i18n: {
      zh: {
        title: '马贝珍珠',
        tagline: '饱满大气的穹形珍珠',
        description: '马贝珍珠紧贴贝壳内壁生长，形成平底半圆形纯珍珠层结构。宽大的表面面积和鲜明的伴色让它非常适合镶嵌戒指和耳饰。',
      },
      sv: {
        title: 'Mabéperlor',
        tagline: 'Uttrycksfull kupolformad pärla',
        description: 'Mabéperlan växer mot ostronets inre skal och bildar en plattsidigt välvd kupol av massivt pärlemor. Deras stora yta och livliga övertoner gör dem idealiska för ringar och örhängen.',
      },
      da: {
        title: 'Mabéperler',
        tagline: 'Udtalt kuppelformet perle',
        description: 'Mabéperler vokser mod østersens indre skal og danner en fladbundet kuppel af massivt perlemor. Deres store overflade og levende overtoner gør dem ideelle til ringe og øreringe.',
      },
      no: {
        title: 'Mabéperler',
        tagline: 'Uttrykksfull kuppelformet perle',
        description: 'Mabéperler vokser mot innsiden av østerskallet og danner en flatbunnet kuppel av massivt perlemor. Deres store overflate og livlige overtoner gjør dem ideelle for ringer og øredobber.',
      },
    },
  },
]

export const findCollection = (handle: string) => collections.find(c => c.handle === handle)
// 顶级分类（无 parent）
export const topCollections = collections.filter(c => !c.parent)
// 某个分类的子分类
export const childCollections = (parent: string) => collections.filter(c => c.parent === parent)
