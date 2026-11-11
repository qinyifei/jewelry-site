<script setup lang="ts">
import { site } from "~/config/site";

const c = useLocaleContent({
  en: {
    seoTitle: "About Us",
    seoDescription: `The story behind ${site.name}: a decade of sourcing pearls across Asia, from our own farm to your hands.`,
    eyebrow: "Our Story",
    title: "About Panthea Jewelry",
    letterLead:
      'It began with a single black pearl pendant — "its iridescent glow, round and full of magic." That is how our love for pearls started, and how Panthea Jewelry was born in 2015.',
    letterParas: [
      "In 2013 our founder attended her first pearl auction. She became a professional pearl buyer, and for years she was never not on the road — Indonesia, the Philippines, Japan, Myanmar, Dubai. She flew through earthquakes and typhoons, and watched the most beautiful sunsets over pearl farms.",
      "In 2018 we built our own farm in Indonesia and became pearl growers ourselves. Seeding, tending, harvesting — every step by hand, so that every pearl we sell can be traced back to the water it came from.",
      "Along the way we earned NGTC certification, were invited to the Taiwan Gemological Association as a guest, and were recognized at Shenzhen Craftsman Week. From our first counter in Shenzhen to a Hong Kong branch and a second boutique — ten years, one pearl at a time.",
    ],
    letterEnd: "The journey continues.",
    letterPs: "(Actually, it has only just begun.)",
    workTitle: "Work with us",
    workIntro:
      "We partner with boutiques, online stores and brands around the world.",
    workCustom: "Learn about bespoke collaborations",
    workOr: "or",
    workContact: "get in touch",
    galleryFarm: "At our pearl farm — seeding, tending and harvesting by hand",
    galleryStore: "Hong Kong office",
    ctaText:
      "Born of the sea, we craft jewellery with soul — cultured pearls, recycled metals and natural gemstones. Transparent sourcing, hand-finished, and every bespoke piece carries a story that is yours alone.",
    ctaLink: "Let us create your one-of-a-kind piece",
  },
  zh: {
    seoTitle: "关于我们",
    seoDescription:
      "潘蒂娅珠宝品牌故事：十年寻珠之旅，从自建养殖场到你的手中。",
    eyebrow: "品牌故事",
    title: "关于潘蒂娅珠宝",
    letterLead:
      '一切始于一条黑珍珠吊坠——"黑珍珠伴着迷人的晕彩，浑圆而充满魔幻"。爱从那一刻开始，潘蒂娅珠宝也从那一刻诞生。',
    letterParas: [
      "2013 年，创始人第一次参加珍珠拍卖会，从此成为专业珍珠买手。不是在寻珠，就是在寻珠的路上——印尼、菲律宾、日本、缅甸、迪拜。途中经历过地震和台风，也见过养殖场上空最美的晚霞。",
      "2018 年，我们在印尼建起自己的养殖基地，从买珠人变成了养珠人。选贝、插核、培育、采收，每一道工序都亲力亲为——只为让每一粒珍珠，都能追溯到它生长的那片海。",
      "十年间，我们拿下 NGTC 认证，受邀出席台湾宝石学协会年会，在深圳工匠活动周获得表彰；从深圳金展的第一家店，到香港分公司，再到第二家门店。十年，一粒珍珠一步。",
    ],
    letterEnd: "——故事未完。",
    letterPs: "（其实，这才是开始。）",
    workTitle: "与我们合作",
    workIntro:
      "我们为全球精品店、珠宝品牌和每一位珍珠爱好者提供首饰定制与零售服务——从单件专属定制到品牌联名合作，也诚邀你走进潘蒂娅，一起感受珍珠的美好。",
    workCustom: "了解定制合作",
    workOr: "，或",
    workContact: "联系我们",
    galleryFarm: "珍珠养殖现场——插核、培育、采收均亲力亲为",
    galleryStore: "香港办公室",
    ctaText:
      "源于深海，我们以养殖珍珠、再生金属与天然宝石打造有温度的珠宝。坚持透明溯源与手工精修，我们的定制作品，承载你的独一份故事。",
    ctaLink: "让我们打造专属于你的信物 >>",
  },
});

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription });

// 参考稿排版：第一段全宽，其余段落与养殖小图并排
const parasLead = computed(() => c.value.letterParas[0]);
const parasRest = computed(() => c.value.letterParas.slice(1));
</script>

<template>
  <div class="container">
    <!-- 信件式品牌故事：标题 + 分隔线 + 引言 + 首段全宽，其余段落与养殖小图并排 -->
    <article class="letter">
      <header class="letter-head">
        <h1 class="letter-title">{{ c.title }}</h1>
      </header>
      <p class="letter-lead">{{ c.letterLead }}</p>
      <div class="letter-body">
        <p>{{ parasLead }}</p>
      </div>
      <div class="letter-split">
        <figure class="letter-figure">
          <img
            src="/images/about/farm.png"
            :alt="c.galleryFarm"
            loading="lazy"
            width="1316"
            height="1195"
          />
          <figcaption>{{ c.galleryFarm }}</figcaption>
        </figure>
        <div class="letter-body letter-body-side">
          <p v-for="(para, i) in parasRest" :key="i">{{ para }}</p>
          <p class="letter-end">{{ c.letterEnd }}</p>
          <p class="letter-ps">{{ c.letterPs }}</p>
        </div>
      </div>
    </article>

    <!-- 香港办公室：双图并排，共享说明文字 -->
    <figure class="about-gallery">
      <div class="about-gallery-imgs">
        <img
          src="/images/about/office-1.jpg"
          :alt="c.galleryStore"
          loading="lazy"
        />
        <img
          src="/images/about/office-2.jpg"
          :alt="c.galleryStore"
          loading="lazy"
        />
      </div>
      <figcaption>{{ c.galleryStore }}</figcaption>
    </figure>

    <!-- 定制合作 CTA：浅灰底色块、左对齐，跳转定制页 -->
    <section class="about-cta">
      <p class="cta-text">{{ c.ctaText }}</p>
      <NuxtLinkLocale to="/pages/custom" class="cta-link">{{
        c.ctaLink
      }}</NuxtLinkLocale>
    </section>
  </div>
</template>

<style scoped>
/* 信件式排版：左对齐、大标题带分隔细线、斜体引言 */
.letter {
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 0 8px;
}

.letter-head {
  border-bottom: 1px solid #e3d9cf;
  padding-bottom: 28px;
  margin-bottom: 36px;
}

.letter-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-weight: 500;
  font-size: clamp(2.6rem, 6vw, 4rem);
  color: #170c02;
  margin: 0;
  line-height: 1.1;
}

.letter-lead {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-style: italic;
  font-size: 1.35rem;
  line-height: 1.8;
  color: #554537;
  margin: 0 0 32px;
}

.letter-body p {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 2.1;
  color: #6b5d51;
  margin: 0;
}

/* 图文混排：左养殖小图、右剩余段落与结尾 */
.letter-split {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 36px;
  align-items: start;
  margin-top: 8px;
}

.letter-figure {
  margin: 0;
}

.letter-figure img {
  width: 100%;
  display: block;
}

.letter-figure figcaption {
  margin-top: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #b3a89e;
  text-align: center;
}

.letter-body-side p {
  margin: 0 0 22px;
}

.letter-end {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: #170c02;
  margin: 32px 0 0;
}

.letter-ps {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #9a8d81;
  margin: 8px 0 0;
}

/* 香港办公室：双图并排，共享说明 */
.about-gallery {
  max-width: 760px;
  margin: 56px auto 0;
}

.about-gallery-imgs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.about-gallery-imgs img {
  width: 100%;
  /* 统一裁成 4:3，两张等宽等高 */
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.about-gallery figcaption {
  margin-top: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #b3a89e;
  text-align: center;
}

/* 定制合作 CTA：浅灰底色块、左对齐，边框式链接 */
.about-cta {
  max-width: 760px;
  margin: 48px auto 0;
  padding: 36px 40px 40px;
  background: var(--c-soft, #f5f2ee);
}

.cta-text {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 2;
  color: #554537;
  margin: 0 0 20px;
}

.cta-link {
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #170c02;
  border: 1px solid #c3b6aa;
  padding: 10px 18px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.cta-link:hover {
  border-color: #170c02;
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .letter {
    padding-top: 56px;
  }

  /* 图文混排转单列 */
  .letter-split {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .letter-figure {
    max-width: 340px;
  }

  /* 双图在窄屏仍保持并排，等高小图 */
  .about-gallery {
    margin-top: 40px;
  }
}
</style>
