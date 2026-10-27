<script setup lang="ts">
import { site } from "~/config/site";
import { findCollection, topCollections } from "~/data/collections";

const tr = useLocalized();
const { t } = useI18n();

// 珍珠品种卡片顺序与官网布局文档一致：
// Keshi · White South Sea · Golden South Sea · Tahitian · Akoya · Mabé
const pearlHandles = [
  "keshi",
  "south-sea-white",
  "golden-south-sea",
  "tahitian",
  "akoya",
  "mabe",
];
const pearlTypes = pearlHandles
  .map(h => findCollection(h))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

// Shop 板块：通用品类（珍珠系列有独立板块，不在这里重复出现）
const shopCollections = topCollections.filter(c => c.handle !== "pearls");

const bespokeSteps = computed(() => [
  { title: t("home.bespokeSteps.idea.title"), text: t("home.bespokeSteps.idea.text") },
  { title: t("home.bespokeSteps.design.title"), text: t("home.bespokeSteps.design.text") },
  { title: t("home.bespokeSteps.sample.title"), text: t("home.bespokeSteps.sample.text") },
  { title: t("home.bespokeSteps.production.title"), text: t("home.bespokeSteps.production.text") },
]);

const bespokeFaqs = computed(() => [
  { q: t("home.bespokeFaqs.time.q"), a: t("home.bespokeFaqs.time.a") },
  { q: t("home.bespokeFaqs.brands.q"), a: t("home.bespokeFaqs.brands.a") },
  { q: t("home.bespokeFaqs.materials.q"), a: t("home.bespokeFaqs.materials.a") },
  { q: t("home.bespokeFaqs.sample.q"), a: t("home.bespokeFaqs.sample.a") },
  { q: t("home.bespokeFaqs.pricing.q"), a: t("home.bespokeFaqs.pricing.a") },
  { q: t("home.bespokeFaqs.shipping.q"), a: t("home.bespokeFaqs.shipping.a") },
]);

usePageSeo({ title: site.name });
</script>

<template>
  <div>
    <!-- ─── Hero：logo 居中，图面中下部留白处放金色 slogan 与双 CTA ─── -->
    <section class="hero">
      <picture>
        <source media="(max-width: 768px)" srcset="/images/home-phone.webp" />
        <img
          src="/images/home.webp"
          alt=""
          aria-hidden="true"
          class="hero-bg"
          loading="eager"
          fetchpriority="high"
        />
      </picture>
      <!-- 首页 h1：视觉上由 slogan 呈现，文字版供搜索引擎与读屏软件 -->
      <h1 class="sr-only">{{ $t("home.slogan") }}</h1>
      <div class="hero-overlay" aria-hidden="true" />
      <!-- 居中品牌 logo 图片 -->
      <div class="hero-center">
        <NuxtLinkLocale
          to="/collections/all"
          class="hero-logo-link"
          :aria-label="site.name"
        >
          <img
            src="/images/logo-en.webp"
            :alt="site.name"
            class="hero-logo-img"
          />
        </NuxtLinkLocale>
      </div>
      <!-- 中下部：金色小字 slogan + 双 CTA（与导航逻辑一致：主按钮珍珠系列，次按钮全部首饰） -->
      <div class="hero-lower">
        <p class="hero-slogan">{{ $t("home.slogan") }}</p>
        <div class="hero-ctas">
          <NuxtLinkLocale to="/collections/pearls" class="hero-btn primary">{{
            $t("home.shopPearl")
          }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/collections/all" class="hero-btn ghost">{{
            $t("home.exploreAll")
          }}</NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- ─── Pearl Collection ─── -->
    <section class="pearl-section">
      <div class="pearl-head">
        <p class="section-eyebrow">{{ $t("home.pearlEyebrow") }}</p>
        <h2 class="section-title">{{ $t("home.pearlTitle") }}</h2>
      </div>
      <div class="cat-grid">
        <NuxtLinkLocale
          v-for="c in pearlTypes"
          :key="c.handle"
          :to="`/collections/${c.handle}`"
          class="cat-item"
        >
          <div class="cat-media">
            <img
              :src="c.image"
              :alt="tr(c).title"
              loading="lazy"
              width="800"
              height="1067"
            />
          </div>
          <div class="cat-label">
            <span>{{ tr(c).title }}</span>
          </div>
        </NuxtLinkLocale>
      </div>
      <p class="pearl-note">{{ $t("home.pearlNote") }}</p>
    </section>

    <!-- ─── Shop ─── -->
    <section class="shop-section">
      <div class="container">
        <h2 class="section-title">{{ $t("nav.shop") }}</h2>
        <div class="shop-grid">
          <NuxtLinkLocale to="/collections/all" class="shop-item shop-item-all">
            <div class="shop-media">
              <img
                src="/images/collections/south-sea-pendant.jpg"
                :alt="$t('nav.all')"
                loading="lazy"
                width="800"
                height="534"
              />
            </div>
            <div class="shop-text">
              <h3>{{ $t("nav.all") }}</h3>
              <p>{{ $t("collection.allDescription") }}</p>
            </div>
          </NuxtLinkLocale>
          <NuxtLinkLocale
            v-for="c in shopCollections"
            :key="c.handle"
            :to="`/collections/${c.handle}`"
            class="shop-item"
          >
            <div class="shop-media">
              <img
                :src="c.image"
                :alt="tr(c).title"
                loading="lazy"
                width="800"
                height="1067"
              />
            </div>
            <div class="shop-text">
              <h3>{{ tr(c).title }}</h3>
              <p>{{ tr(c).description }}</p>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- ─── Bespoke & Collaborations ─── -->
    <section v-if="site.features.custom" class="bespoke-section">
      <div class="container">
        <p class="section-eyebrow">{{ $t("home.bespokeEyebrow") }}</p>
        <h2 class="section-title">{{ $t("home.bespokeTitle") }}</h2>
        <p class="bespoke-sub">{{ $t("home.bespokeSub") }}</p>

        <div class="bespoke-block">
          <h3 class="bespoke-heading">{{ $t("home.bespokeStepsTitle") }}</h3>
          <ol class="bespoke-steps">
            <li v-for="(s, i) in bespokeSteps" :key="s.title">
              <span class="num">0{{ i + 1 }}</span>
              <h4>{{ s.title }}</h4>
              <p>{{ s.text }}</p>
            </li>
          </ol>
        </div>

        <div class="bespoke-block bespoke-story">
          <h3 class="bespoke-heading">{{ $t("design.title") }}</h3>
          <p>{{ $t("home.bespokeStory1") }}</p>
          <p>{{ $t("home.bespokeStory2") }}</p>
          <div class="bespoke-actions">
            <NuxtLinkLocale to="/pages/custom" class="bespoke-btn">{{
              $t("home.bespokeCta")
            }}</NuxtLinkLocale>
            <span class="bespoke-reply">{{ $t("home.bespokeReply") }}</span>
          </div>
        </div>

        <div class="bespoke-block">
          <h3 class="bespoke-heading">{{ $t("home.bespokeFaqTitle") }}</h3>
          <div class="bespoke-faq">
            <details v-for="f in bespokeFaqs" :key="f.q">
              <summary>{{ f.q }}</summary>
              <p>{{ f.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── About & Contact ─── -->
    <section class="end-section">
      <div class="container end-grid">
        <div class="end-about">
          <h2>{{ $t("home.aboutTitle") }}</h2>
          <p>{{ $t("home.aboutTeaser") }}</p>
          <NuxtLinkLocale to="/pages/about" class="link-underline">{{
            $t("home.aboutLink")
          }}</NuxtLinkLocale>
        </div>
        <div class="end-contact">
          <h2>{{ $t("home.contactTitle") }}</h2>
          <dl>
            <div>
              <dt>{{ $t("home.contactEmail") }}</dt>
              <dd><a :href="`mailto:${site.email}`">{{ site.email }}</a></dd>
            </div>
            <div>
              <dt>{{ $t("home.contactStudio") }}</dt>
              <dd>{{ site.address }}</dd>
            </div>
            <div>
              <dt>{{ $t("home.contactHours") }}</dt>
              <dd>{{ $t("home.hoursValue") }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ─── Hero ─── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

/* 背景图用 img 标签，object-position 可在不同断点精确锚定焦点 */
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(25, 21, 21, 0.52) 0%,
    rgba(25, 21, 21, 0.08) 50%,
    transparent 100%
  );
  pointer-events: none;
}

/* 居中品牌 logo 图片，叠在图片正中 */
.hero-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
}

.hero-logo-link {
  display: block;
  pointer-events: auto;
  /* logo 区域整体上移，给下方 slogan 与 CTA 留出中下部留白 */
  transform: translateY(-9vh);
}

.hero-logo-img {
  width: clamp(240px, 33vw, 480px);
  height: auto;
  display: block;
  filter: drop-shadow(0 2px 24px rgba(25, 21, 21, 0.35));
  transition: opacity 0.2s;
}

.hero-logo-link:hover .hero-logo-img {
  opacity: 0.88;
}

/* 中下部：金色小字 slogan + 双 CTA */
.hero-lower {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: 0 24px 7vh;
}

.hero-slogan {
  margin: 0 0 22px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--c-gold-light, #d8b98a);
}

.hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-btn {
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 14px 32px;
  text-decoration: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;
}

.hero-btn.primary {
  background: rgba(85, 69, 55, 0.94);
  color: #fff;
}

.hero-btn.primary:hover {
  background: #6b5747;
}

.hero-btn.ghost {
  background: rgba(25, 21, 21, 0.2);
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.hero-btn.ghost:hover {
  border-color: #fff;
  color: #fff;
}

/* ─── 通用板块标题 ─── */
.section-eyebrow {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--c-muted);
  margin: 0 0 14px;
}

.section-title {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: clamp(2.1rem, 4.6vw, 3.2rem);
  color: var(--c-ink);
  margin: 0;
  line-height: 1.12;
  letter-spacing: 0.01em;
}

/* ─── Pearl Collection（低饱和冷调背景）─── */
.pearl-section {
  padding: 72px 0 64px;
  background: linear-gradient(180deg, #f2f4f6 0%, #ffffff 220px);
}

.pearl-head {
  max-width: 1400px;
  margin: 0 auto 40px;
  padding: 0 24px;
  text-align: center;
}

.pearl-note {
  max-width: 1400px;
  margin: 28px auto 0;
  padding: 0 24px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--c-muted);
  text-align: center;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  max-width: 1400px;
  margin: 0 auto;
}

.cat-item {
  position: relative;
  display: block;
  overflow: hidden;
}

.cat-media {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f8f5f2;
}

.cat-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: block;
}

.cat-item:hover .cat-media img {
  transform: scale(1.03);
}

.cat-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 20px 20px;
  background: linear-gradient(
    to top,
    rgba(25, 21, 21, 0.55) 0%,
    transparent 100%
  );
}

.cat-label span {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  color: #fff;
  display: block;
}

/* ─── Shop ─── */
.shop-section {
  padding: 88px 0;
  background: #ffffff;
}

.shop-section .section-title {
  margin-bottom: 40px;
}

.shop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 32px;
}

.shop-item {
  display: flex;
  flex-direction: column;
}

.shop-item-all {
  grid-column: span 2;
}

.shop-media {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f8f5f2;
  margin-bottom: 18px;
}

.shop-item-all .shop-media {
  aspect-ratio: 16 / 10;
}

.shop-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: block;
}

.shop-item:hover .shop-media img {
  transform: scale(1.03);
}

.shop-text h3 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 1.45rem;
  letter-spacing: 0.06em;
  color: var(--c-ink);
  margin: 0 0 6px;
}

.shop-text p {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.7;
  color: var(--c-muted);
  margin: 0;
}

/* ─── Bespoke & Collaborations（暖色浅景深基调）─── */
.bespoke-section {
  padding: 88px 0;
  background: var(--c-soft, #f6f1ec);
}

.bespoke-sub {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.03em;
  color: var(--c-muted);
  margin: 14px 0 0;
}

.bespoke-block {
  margin-top: 64px;
}

.bespoke-heading {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--c-text);
  margin: 0 0 28px;
}

.bespoke-steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 0;
  margin: 0;
}

.bespoke-steps .num {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.9rem;
  color: var(--c-gold, #b08d57);
  display: block;
  margin-bottom: 10px;
}

.bespoke-steps h4 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: 0.04em;
  color: var(--c-ink);
  margin: 0 0 8px;
}

.bespoke-steps p {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.75;
  color: var(--c-muted);
  margin: 0;
}

.bespoke-story {
  max-width: 760px;
}

.bespoke-story p {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.9;
  color: var(--c-text);
  margin: 0 0 16px;
}

.bespoke-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 28px;
}

.bespoke-btn {
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: var(--c-filled-bg);
  color: #fff;
  padding: 14px 32px;
  text-decoration: none;
  transition: background 0.2s;
}

.bespoke-btn:hover {
  background: #6b5747;
}

.bespoke-reply {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: var(--c-muted);
}

.bespoke-faq {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
}

.bespoke-faq details {
  border-bottom: 1px solid var(--c-line);
  padding: 16px 0;
}

.bespoke-faq summary {
  cursor: pointer;
  font-weight: 500;
  color: var(--c-ink);
  font-size: 13px;
}

.bespoke-faq details p {
  margin: 10px 0 0;
  color: var(--c-muted);
  font-size: 12px;
  line-height: 1.75;
}

/* ─── About & Contact ─── */
.end-section {
  padding: 88px 0;
  background: #ffffff;
}

.end-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 80px;
  align-items: start;
}

.end-grid h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
  margin-bottom: 20px;
}

.end-about > p {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.85;
  color: var(--c-muted);
  margin: 0 0 20px;
}

.end-contact dl {
  margin: 0;
}

.end-contact dl > div {
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 14px 0;
  border-bottom: 1px solid var(--c-line);
}

.end-contact dl > div:last-child {
  border-bottom: none;
}

.end-contact dt {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-muted);
  flex-shrink: 0;
  width: 88px;
}

.end-contact dd {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: var(--c-ink);
}

.end-contact dd a {
  border-bottom: 1px solid var(--c-gold, #b08d57);
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .bespoke-steps {
    grid-template-columns: 1fr 1fr;
  }
  .shop-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px 20px;
  }
  .shop-item-all {
    grid-column: span 2;
  }
  .bespoke-faq {
    grid-template-columns: 1fr;
  }
  .end-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .hero-bg {
    object-position: 65% center;
  }
  .hero-logo-img {
    width: clamp(120px, 40vw, 200px);
  }
  .hero-logo-link {
    transform: translateY(-11vh);
  }
  .hero-lower {
    padding-bottom: 10vh;
  }
  .hero-slogan {
    font-size: 11px;
    letter-spacing: 0.2em;
    margin-bottom: 18px;
  }
  .hero-btn {
    padding: 12px 24px;
  }
  .pearl-section {
    padding: 52px 0 48px;
  }
  .shop-section,
  .bespoke-section,
  .end-section {
    padding: 56px 0;
  }
}

@media (max-width: 480px) {
  .hero-bg {
    object-position: 65% 30%;
  }
  .cat-grid {
    grid-template-columns: 1fr;
  }
  .shop-grid {
    grid-template-columns: 1fr;
  }
  .shop-item-all {
    grid-column: auto;
  }
  .shop-item-all .shop-media {
    aspect-ratio: 3 / 4;
  }
  .bespoke-steps {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
