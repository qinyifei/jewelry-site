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

    <!-- ─── Pearl Collections（杂志编辑风：大图 + 编号 + 名称 + 一句气质描述）─── -->
    <section class="pearl-section">
      <div class="pearl-head">
        <p class="section-eyebrow">{{ $t("home.pearlEyebrow") }}</p>
        <h2 class="section-title">{{ $t("home.pearlTitle") }}</h2>
        <p class="pearl-intro">{{ $t("home.pearlIntro") }}</p>
      </div>
      <div class="pearl-grid">
        <NuxtLinkLocale
          v-for="(c, i) in pearlTypes"
          :key="c.handle"
          :to="`/collections/${c.handle}`"
          class="pearl-card"
        >
          <div class="pearl-media">
            <img
              :src="c.image"
              :alt="tr(c).title"
              loading="lazy"
              width="800"
              height="1067"
            />
          </div>
          <div class="pearl-caption">
            <span class="pearl-index" aria-hidden="true">{{
              String(i + 1).padStart(2, "0")
            }}</span>
            <div class="pearl-meta">
              <h3 class="pearl-name">{{ tr(c).title }}</h3>
              <p v-if="tr(c).tagline" class="pearl-tagline">
                {{ tr(c).tagline }}
              </p>
            </div>
          </div>
        </NuxtLinkLocale>
      </div>
      <div class="pearl-foot">
        <NuxtLinkLocale to="/collections/pearls" class="pearl-cta">
          {{ $t("home.pearlCta") }}
          <span aria-hidden="true">→</span>
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

/* 中下部：金色小字 slogan（桌面端字号更大、位置更高；移动端在下方媒体查询单独调） */
.hero-lower {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: 0 24px 11vh;
}

.hero-slogan {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 15px;
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
  margin: 0 auto 48px;
  padding: 0 24px;
  text-align: center;
}

/* 编辑导语：衬线斜体，窄栏居中 */
.pearl-intro {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--c-muted);
  max-width: 620px;
  margin: 20px auto 0;
}

/* 杂志编辑网格：两列、留白充足，图片下方是编号 + 名称 + 气质描述 */
.pearl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px 48px;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
}

.pearl-card {
  display: block;
  text-decoration: none;
}

.pearl-media {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f8f5f2;
  margin-bottom: 18px;
}

.pearl-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: block;
}

.pearl-card:hover .pearl-media img {
  transform: scale(1.03);
}

.pearl-caption {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 0 4px;
}

/* 编号：衬线金色小字，杂志页码感 */
.pearl-index {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.05rem;
  color: var(--c-gold, #b8925a);
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.pearl-name {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 1.55rem;
  letter-spacing: 0.04em;
  color: var(--c-ink, #554537);
  margin: 0 0 4px;
  line-height: 1.2;
}

.pearl-card:hover .pearl-name {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.pearl-tagline {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--c-muted);
  margin: 0;
}

/* 板块尾部：Read more → 跳转选购-珍珠 */
.pearl-foot {
  text-align: center;
  margin: 64px 0 0;
}

.pearl-cta {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink, #554537);
  text-decoration: none;
  border-bottom: 1px solid rgba(85, 69, 55, 0.45);
  padding-bottom: 4px;
  transition: border-color 0.2s;
}

.pearl-cta:hover {
  border-color: #554537;
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

/* ─── Responsive ─── */
/* 中屏：杂志网格降为紧凑双列 */
@media (max-width: 900px) {
  .pearl-grid {
    gap: 40px 24px;
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
}

@media (max-width: 640px) {
  /* 移动端：单列杂志卡片 */
  .pearl-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .pearl-name {
    font-size: 1.35rem;
  }
}

@media (max-width: 480px) {
  .hero-bg {
    /* 更小的屏幕上锚定点再抬高一些，避免主体被裁 */
    object-position: 65% 30%;
  }
}
</style>
