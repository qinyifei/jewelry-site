<script setup lang="ts">
import { site } from '~/config/site'

const c = useLocaleContent({
  en: {
    seoTitle: 'About Us',
    seoDescription: `The story behind ${site.name}: a decade of sourcing pearls across Asia, from our own farm to your hands.`,
    eyebrow: 'Our Story',
    title: 'About Pantone Jewelry',
    letterLead:
      'It began with a single black pearl pendant — "its iridescent glow, round and full of magic." That is how our love for pearls started, and how Pantone Jewelry was born in 2015.',
    letterParas: [
      'In 2013 our founder attended her first pearl auction. She became a professional pearl buyer, and for years she was never not on the road — Indonesia, the Philippines, Japan, Myanmar, Dubai. She flew through earthquakes and typhoons, and watched the most beautiful sunsets over pearl farms.',
      'In 2018 we built our own farm in Indonesia and became pearl growers ourselves. Seeding, tending, harvesting — every step by hand, so that every pearl we sell can be traced back to the water it came from.',
      'Along the way we earned NGTC certification, were invited to the Taiwan Gemological Association as a guest, and were recognized at Shenzhen Craftsman Week. From our first counter in Shenzhen to a Hong Kong branch and a second boutique — ten years, one pearl at a time.',
    ],
    letterEnd: 'The journey continues.',
    letterPs: '(Actually, it has only just begun.)',
    workTitle: 'Work with us',
    workIntro: 'We partner with boutiques, online stores and brands around the world.',
    workWholesale: 'Learn about wholesale and OEM',
    workOr: 'or',
    workContact: 'get in touch',
    galleryFarm: 'At our pearl farm — seeding, tending and harvesting by hand',
    galleryStore: `${site.name} boutique`,
  },
  zh: {
    seoTitle: '关于我们',
    seoDescription: '潘通珠宝品牌故事：十年寻珠之旅，从自建养殖场到你的手中。',
    eyebrow: '品牌故事',
    title: '关于潘通珠宝',
    letterLead:
      '一切始于一条黑珍珠吊坠——"黑珍珠伴着迷人的晕彩，浑圆而充满魔幻"。爱从那一刻开始，潘通珠宝也从那一刻诞生。',
    letterParas: [
      '2013 年，创始人第一次参加珍珠拍卖会，从此成为专业珍珠买手。不是在寻珠，就是在寻珠的路上——印尼、菲律宾、日本、缅甸、迪拜。途中经历过地震和台风，也见过养殖场上空最美的晚霞。',
      '2018 年，我们在印尼建起自己的养殖基地，从买珠人变成了养珠人。选贝、插核、培育、采收，每一道工序都亲力亲为——只为让每一粒珍珠，都能追溯到它生长的那片海。',
      '十年间，我们拿下 NGTC 认证，受邀出席台湾宝石学协会年会，在深圳工匠活动周获得表彰；从深圳金展的第一家店，到香港分公司，再到第二家门店。十年，一粒珍珠一步。',
    ],
    letterEnd: '——故事未完。',
    letterPs: '（其实，这才是开始。）',
    workTitle: '与我们合作',
    workIntro:
      '我们专注高品质海水珍珠批发与零售，服务全球精品店、珠宝品牌及零售商，也诚邀每一位珍珠爱好者走进潘通，一起感受珍珠的美好。',
    workWholesale: '了解批发与 OEM 合作',
    workOr: '，或',
    workContact: '联系我们',
    galleryFarm: '珍珠养殖现场——插核、培育、采收均亲力亲为',
    galleryStore: `${site.name} 门店`,
  },
})

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })
</script>

<template>
  <div class="container">
    <!-- 信件式品牌故事 -->
    <article class="letter">
      <h1 class="letter-title">{{ c.title }}</h1>
      <p class="letter-lead">{{ c.letterLead }}</p>
      <div class="letter-body">
        <p v-for="(para, i) in c.letterParas" :key="i">{{ para }}</p>
      </div>
      <p class="letter-end">{{ c.letterEnd }}</p>
      <p class="letter-ps">{{ c.letterPs }}</p>
    </article>

    <!-- 品牌图片：养殖场 / 门店 -->
    <div class="about-gallery">
      <figure class="about-shot">
        <img
          src="/images/about/farm.png"
          :alt="c.galleryFarm"
          loading="lazy"
          width="1316"
          height="1195"
        />
        <figcaption>{{ c.galleryFarm }}</figcaption>
      </figure>
      <figure class="about-shot">
        <img
          src="/images/about/store.jpg"
          :alt="c.galleryStore"
          loading="lazy"
          width="1628"
          height="1383"
        />
        <figcaption>{{ c.galleryStore }}</figcaption>
      </figure>
    </div>

    <div class="prose" style="margin: 0 auto">
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

<style scoped>
/* 信件式排版：左对齐、大标题、斜体引言、正文窄栏 */
.letter {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 0 24px;
}

.letter-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 500;
  font-size: clamp(2.6rem, 6vw, 4rem);
  color: #170C02;
  margin: 0 0 40px;
  line-height: 1.1;
}

.letter-lead {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: 1.35rem;
  line-height: 1.8;
  color: #554537;
  margin: 0 0 32px;
}

.letter-body p {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 2.1;
  color: #6b5d51;
  margin: 0 0 24px;
}

.letter-end {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: #170C02;
  margin: 40px 0 0;
}

.letter-ps {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #9a8d81;
  margin: 8px 0 0;
}

/* 品牌图片：双列网格，移动端单列 */
.about-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 1000px;
  margin: 56px auto;
}

.about-shot {
  margin: 0;
}

.about-shot img {
  width: 100%;
  height: auto;
  display: block;
}

.about-shot figcaption {
  margin-top: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #b3a89e;
  text-align: center;
}

@media (max-width: 640px) {
  .about-gallery {
    grid-template-columns: 1fr;
    margin: 40px auto;
  }
}
</style>
