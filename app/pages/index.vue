<script setup lang="ts">
import { site } from "~/config/site";
import { topCollections as collections } from "~/data/collections";
import { products } from "~/data/products";

const featured = products.filter((p) => p.featured);
const tr = useLocalized();

usePageSeo({ title: site.name });
</script>

<template>
  <div>
    <!-- ─── Hero ─── -->
    <section class="hero">
      <picture>
        <source media="(max-width: 768px)" srcset="/images/home-phone.png" />
        <img
          src="/images/home.png"
          alt=""
          aria-hidden="true"
          class="hero-bg"
          loading="eager"
          fetchpriority="high"
        />
      </picture>
      <div class="hero-overlay" aria-hidden="true" />
      <!-- 居中品牌 logo 图片 -->
      <div class="hero-center">
        <NuxtLinkLocale
          to="/collections/all"
          class="hero-logo-link"
          :aria-label="site.name"
        >
          <img
            src="/images/logo-en.png"
            :alt="site.name"
            class="hero-logo-img"
          />
        </NuxtLinkLocale>
      </div>
    </section>

    <!-- ─── USP Strip ─── -->
    <div class="usp-strip">
      <span>{{ $t("usp.material") }}</span>
      <span class="usp-dot" aria-hidden="true">·</span>
      <span>{{ $t("usp.nickel") }}</span>
      <span class="usp-dot" aria-hidden="true">·</span>
      <span>{{ $t("usp.shipping") }}</span>
      <span class="usp-dot" aria-hidden="true">·</span>
      <span>{{ $t("usp.warranty") }}</span>
    </div>

    <!-- ─── Categories ─── -->
    <section class="cat-grid">
      <NuxtLinkLocale
        v-for="c in collections"
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
    </section>

    <!-- ─── Featured Products ─── -->
    <section class="featured-section">
      <div class="container">
        <h2 class="featured-heading">{{ $t("home.featured") }}</h2>
        <div class="product-grid">
          <ProductCard v-for="p in featured" :key="p.handle" :product="p" />
        </div>
      </div>
    </section>

    <!-- ─── Editorial Break ─── -->
    <section class="dark-section">
      <div class="editorial-inner">
        <div class="editorial-left">
          <p class="editorial-eyebrow">{{ $t("home.wholesaleEyebrow") }}</p>
          <h2 class="editorial-title">{{ $t("home.wholesaleTitle") }}</h2>
        </div>
        <div class="editorial-right">
          <p class="editorial-text">{{ $t("home.wholesaleText") }}</p>
          <ul class="editorial-list">
            <li>{{ $t("home.wholesaleMoq", { moq: site.wholesale.moq }) }}</li>
            <li>{{ $t("home.wholesalePrivate") }}</li>
            <li>
              {{
                $t("home.wholesaleLead", { days: site.wholesale.leadTimeDays })
              }}
            </li>
          </ul>
          <div class="editorial-actions">
            <NuxtLinkLocale to="/pages/wholesale" class="btn-dark-primary">{{
              $t("home.learnMore")
            }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/blogs/cases" class="btn-dark-outline">{{
              $t("home.viewCases")
            }}</NuxtLinkLocale>
          </div>
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

/* ─── USP Strip ─── */
.usp-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
  padding: 14px 0;
  border-top: 1px solid #e9dcd0;
  border-bottom: 1px solid #e9dcd0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #554537;
}

.usp-strip span {
  padding: 0 18px;
}

.usp-dot {
  color: #e9dcd0;
  padding: 0 !important;
  flex-shrink: 0;
  font-size: 14px;
  line-height: 1;
}

/* ─── Categories ─── */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.cat-item {
  position: relative;
  display: block;
  overflow: hidden;
}

.cat-media {
  aspect-ratio: 3 / 4;
  overflow: hidden;
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

/* ─── Featured Products ─── */
.featured-section {
  padding: 80px 0;
  background: #ffffff;
}

.featured-heading {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: clamp(3rem, 7.2vw, 4.5rem);
  color: #554537;
  margin: 0 0 48px;
  line-height: 1;
  letter-spacing: 0.01em;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* ─── Dark Section (Editorial) ─── */
.dark-section {
  background: #191515;
  min-height: 480px;
  display: flex;
  align-items: center;
}

.editorial-inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 88px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.editorial-eyebrow {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #e9dcd0;
  margin: 0 0 24px;
}

.editorial-title {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: clamp(3rem, 7.2vw, 4.5rem);
  color: #fff;
  margin: 0;
  line-height: 1.05;
  letter-spacing: 0.01em;
}

.editorial-text {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.8;
  margin: 0 0 24px;
}

.editorial-list {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 2.2;
  margin: 0 0 40px;
  padding-left: 1.2em;
}

.editorial-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn-dark-primary {
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #554537;
  color: #fff;
  padding: 12px 28px;
  border: none;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-dark-primary:hover {
  background: #6b5747;
}

.btn-dark-outline {
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  padding: 12px 28px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
  transition:
    border-color 0.2s,
    color 0.2s;
}

.btn-dark-outline:hover {
  border-color: rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 768px) {
  .hero-bg {
    object-position: 65% center;
  }
  .hero-logo-img {
    width: clamp(120px, 40vw, 200px);
  }
  .featured-section {
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
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .editorial-inner {
    padding: 56px 24px;
  }
}
</style>
