<script setup lang="ts">
import { site } from "~/config/site";
import { findCollection, topCollections } from "~/data/collections";

const tr = useLocalized();

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
  .map((h) => findCollection(h))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

// Shop 板块：通用品类（珍珠系列有独立板块，不在这里重复出现）
const shopCollections = topCollections.filter((c) => c.handle !== "pearls");

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
      <!-- 中下部：金色小字 slogan -->
      <div class="hero-lower">
        <p class="hero-slogan">{{ $t("home.slogan") }}</p>
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

/* 中下部：金色小字 slogan */
.hero-lower {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: 0 24px 7vh;
}

.hero-slogan {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--c-gold-light, #d8b98a);
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

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .shop-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px 20px;
  }
  .shop-item-all {
    grid-column: span 2;
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
  }
  .pearl-section {
    padding: 52px 0 48px;
  }
  .shop-section {
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
}
</style>
