<script setup lang="ts">
import { site } from '~/config/site'
import { collections } from '~/data/collections'
import { products } from '~/data/products'

const featured = products.filter(p => p.featured)
const tr = useLocalized()

usePageSeo({ title: site.name })
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <p class="eyebrow">{{ $t('home.eyebrow') }}</p>
        <h1>{{ $t('home.heroTitle') }}</h1>
        <p class="lead">{{ $t('home.heroText') }}</p>
        <div class="actions">
          <NuxtLinkLocale to="/collections/all" class="btn">{{ $t('home.shopNow') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/pages/wholesale" class="btn btn-outline">{{ $t('home.wholesaleCta') }}</NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section class="usp">
      <div class="container grid grid-4">
        <div>
          <strong>{{ $t('usp.material') }}</strong><span>{{ $t('usp.materialText') }}</span>
        </div>
        <div>
          <strong>{{ $t('usp.nickel') }}</strong><span>{{ $t('usp.nickelText') }}</span>
        </div>
        <div>
          <strong>{{ $t('usp.shipping') }}</strong><span>{{ $t('usp.shippingText') }}</span>
        </div>
        <div>
          <strong>{{ $t('usp.warranty') }}</strong><span>{{ $t('usp.warrantyText') }}</span>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <h2>{{ $t('home.shopByCategory') }}</h2>
      </div>
      <div class="grid grid-4">
        <NuxtLinkLocale v-for="c in collections" :key="c.handle" :to="`/collections/${c.handle}`" class="cat">
          <div class="cat-media">
            <img :src="c.image" :alt="tr(c).title" loading="lazy" width="800" height="800" />
          </div>
          <span>{{ tr(c).title }}</span>
        </NuxtLinkLocale>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <h2>{{ $t('home.featured') }}</h2>
        <NuxtLinkLocale to="/collections/all" class="link-underline">{{ $t('home.viewAll') }}</NuxtLinkLocale>
      </div>
      <div class="grid grid-4">
        <ProductCard v-for="p in featured" :key="p.handle" :product="p" />
      </div>
    </section>

    <section class="section wholesale">
      <div class="container wholesale-inner">
        <div>
          <p class="eyebrow">{{ $t('home.wholesaleEyebrow') }}</p>
          <h2>{{ $t('home.wholesaleTitle') }}</h2>
          <p>{{ $t('home.wholesaleText') }}</p>
          <ul>
            <li>{{ $t('home.wholesaleMoq', { moq: site.wholesale.moq }) }}</li>
            <li>{{ $t('home.wholesalePrivate') }}</li>
            <li>{{ $t('home.wholesaleLead', { days: site.wholesale.leadTimeDays }) }}</li>
          </ul>
          <NuxtLinkLocale to="/pages/wholesale" class="btn">{{ $t('home.learnMore') }}</NuxtLinkLocale>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: url('/images/hero.svg') center / cover no-repeat;
  min-height: 560px;
  display: flex;
  align-items: center;
}

.hero-inner { padding-top: 80px; padding-bottom: 80px; }
.hero h1 { max-width: 620px; }
.lead { max-width: 520px; font-size: 17px; }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

.usp {
  border-bottom: 1px solid var(--c-line);
  padding: 28px 0;
}

.usp .grid > div {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 13px;
}

.usp strong {
  font-weight: 500;
  color: var(--c-ink);
  letter-spacing: 0.04em;
}

.usp span { color: var(--c-muted); }

/* 分类名放在图片下方，不遮挡产品图 */
.cat { display: block; }
.cat img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: transform 0.6s; }
.cat-media { overflow: hidden; background: var(--c-soft); }
.cat:hover img { transform: scale(1.04); }

.cat span {
  display: block;
  margin-top: 12px;
  text-align: center;
  font-family: var(--f-serif);
  font-size: 1.5rem;
  color: var(--c-ink);
}

@media (max-width: 600px) {
  .cat span { font-size: 1.15rem; margin-top: 8px; }
}

.wholesale { background: var(--c-soft); }
.wholesale-inner > div { max-width: 640px; }
.wholesale ul { padding-left: 1.2em; margin: 0 0 28px; }

@media (max-width: 600px) {
  .hero { min-height: 460px; background-position: 70% center; }
}
</style>
