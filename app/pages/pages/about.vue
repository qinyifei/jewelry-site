<script setup lang="ts">
import { site } from '~/config/site'

const c = useLocaleContent({
  en: {
    seoTitle: 'About Us',
    seoDescription: `The story behind ${site.name}: handcrafted fine jewelry made with care, from our studio to you.`,
    eyebrow: 'Our Story',
    title: 'Made with care, worn with meaning',
    intro: `${site.name} began with a simple idea: fine jewelry should be beautiful, honest and made to last. Since 2015, we have focused exclusively on high-quality saltwater pearls — sourcing, grading and delivering them to boutiques and brands around the world.`,
    craftTitle: 'A Decade of Sourcing',
    craft:
      'Our founder has spent over a decade travelling to pearl-producing regions across Indonesia, the Philippines, Japan, Myanmar and beyond — attending auctions, visiting farms and building direct relationships with growers. In 2018 we established our own pearl farm in Indonesia, giving us first-hand knowledge of every stage from seeding to harvest.',
    pearlsTitle: 'Our Pearls',
    pearls:
      'We carry the major saltwater pearl categories: South Sea white, Tahitian black, Japanese Akoya, South Sea golden, Keshi, and freshwater cultured. Every batch is hand-selected against strict grading criteria for luster, surface quality, shape and size — meeting the standards required by wholesale buyers and high-end retail brands.',
    materialsTitle: 'Key Milestones',
    materials: [
      '2015 — Founded in Shenzhen; first boutique opens at Jin Zhan Jewelry Plaza',
      '2018 — Pearl farm established in Indonesia',
      '2020 — Pioneered online order-based pearl procurement; adopted by international partners',
      '2021 — Recognized at Shenzhen Craftsman Week, Gold & Jewelry Industry Talent Awards',
      '2023 — Hong Kong branch opens, expanding international services',
      '2024 — Second retail store opens; "Pearl +" cross-category concept launched',
    ],
    expertiseTitle: 'Professional Credentials',
    expertise:
      'NGTC (National Gemstone Testing Centre) certified alumna. Invited guest at the TGA Taiwan Gemological Association Annual General Meeting. Winner of the Shenzhen Craftsman Week "Gold & Jewelry Industry Skills Talent" award. We stay current with industry developments because the best guarantee we can offer clients is deep, up-to-date expertise.',
    spiritTitle: 'What Drives Us',
    spirit:
      'Ten years of auctions in unfamiliar ports, overnight flights, and farms reached only by small boats — none of it was a shortcut. Every step left a mark, the way a nacre layer builds around a grain of sand. The result is a pearl worth wearing, and a company worth trusting.',
    workTitle: 'Work with us',
    workIntro: 'We partner with boutiques, online stores and brands around the world.',
    workWholesale: 'Learn about wholesale and OEM',
    workOr: 'or',
    workContact: 'get in touch',
  },
  zh: {
    seoTitle: '关于我们',
    seoDescription: '提亚珠宝品牌故事：十年溯源之旅，从印尼到日本，深入珍珠产地，只为将真正有来源保障的高品质海水珍珠带给每一位客人。',
    eyebrow: '品牌故事',
    title: '从一粒珍珠，到一段故事',
    intro:
      '提亚珠宝的起点，是一条黑珍珠吊坠——"黑珍珠伴着迷人的晕彩，浑圆而充满魔幻"。这份爱从那一刻延续，也让提亚珠宝在 2015 年正式诞生，专注于高品质海水珍珠的批发、零售与行业一体化服务。珍珠是温和的，也是多样的——多样的珍珠如咖啡般，一眼看透却琢磨不透。',
    craftTitle: '溯源之旅',
    craft:
      '创始人自 2013 年起便走遍印尼、菲律宾、日本、缅甸、迪拜等主要珍珠产地，亲赴拍卖会、养殖场和珠商深入考察，飞行里程早已数不清。2018 年，提亚在印尼自建养殖基地，成为真正意义上的"养珠人"——从选贝、养殖到采珠、加工，每一道工序亲历其中，确保每一粒珍珠都有清晰可追溯的来源。出差途中曾遇印尼地震、台风"山竹"、波音坠海，条件艰苦，却从未停下寻珠的脚步。',
    pearlsTitle: '我们的珍珠',
    pearls:
      '提亚覆盖海水珍珠主要品类：南洋白珠、大溪地黑珍珠、日本 Akoya 珠、南洋金珠、Keshi 珠及淡水珍珠。每一批货均来自有长期合作关系的养殖场，经过严格人工挑选，光泽、形态、瑕疵等级均符合批发商与高端零售品牌的采购标准。店内设有珍珠打孔机，可随时为客人定制加工珍珠首饰，满足个性化需求。',
    materialsTitle: '十年里程碑',
    materials: [
      '2015年：提亚珠宝正式成立，首家门店入驻深圳金展珠宝广场',
      '2018年：印尼海水珍珠养殖基地建成，深度参与珍珠养殖全流程',
      '2020年：首创线上订单式采购模式，获国际合作伙伴认可',
      '2021年：荣获深圳工匠活动周"黄金珠宝产业技能人才表彰"优秀学员殊荣',
      '2023年：香港分公司落成，联合举办珍珠拍卖会，拓展国际珠宝行业服务',
      '2024年：第二家门店于特力金钻大厦开业，开启"珍珠+"跨界联动',
    ],
    expertiseTitle: '专业背景',
    expertise:
      'NGTC（国家珠宝玉石质量监督检验中心）认证校友；曾受邀以嘉宾身份出席 TGA 台湾宝石学协会第二届年度大会暨颁奖典礼；荣获深圳工匠活动周"黄金珠宝产业技能人才表彰"优秀学员殊荣。入行以来从未停下学习的脚步，深知每一粒珍珠背后的专业积累，是给每位客人最真实的承诺。',
    spiritTitle: '初心与坚持',
    spirit:
      '十年篇章，风雨兼程，阳光彩虹。无论是激动人心的突破，还是刻骨铭心的挫折，这些点滴如同历经沧海沙砾散落的真珠，最终串成一条有意义的珍珠项链——每一颗都独特，每一颗都唯一，在我们身上闪烁着莹润的珠光。路漫漫其修远兮，慢行稳走，终见心中美好。',
    workTitle: '与我们合作',
    workIntro:
      '我们专注高品质海水珍珠批发与零售，服务全球精品店、珠宝品牌及零售商，也诚邀每一位珍珠爱好者走进提亚，一起感受珍珠的美好。',
    workWholesale: '了解批发与 OEM 合作',
    workOr: '，或',
    workContact: '联系我们',
  },
})

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <p class="eyebrow">{{ c.eyebrow }}</p>
      <h1>{{ c.title }}</h1>
      <p>{{ c.intro }}</p>
    </section>

    <div class="prose" style="margin: 0 auto">
      <h2>{{ c.craftTitle }}</h2>
      <p>{{ c.craft }}</p>

      <h2>{{ c.pearlsTitle }}</h2>
      <p>{{ c.pearls }}</p>

      <h2>{{ c.materialsTitle }}</h2>
      <ul>
        <li v-for="m in c.materials" :key="m">{{ m }}</li>
      </ul>

      <h2>{{ c.expertiseTitle }}</h2>
      <p>{{ c.expertise }}</p>

      <h2>{{ c.spiritTitle }}</h2>
      <p>{{ c.spirit }}</p>

      <h2>{{ c.workTitle }}</h2>
      <p>
        {{ c.workIntro }}
        <NuxtLinkLocale to="/pages/wholesale">{{ c.workWholesale }}</NuxtLinkLocale>
        {{ c.workOr }}
        <NuxtLinkLocale to="/pages/contact">{{ c.workContact }}</NuxtLinkLocale>.
      </p>
    </div>
  </div>
</template>
