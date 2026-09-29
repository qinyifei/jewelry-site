<script setup lang="ts">
import { site } from '~/config/site'
import { findCollection } from '~/data/collections'
import { findProduct, products } from '~/data/products'

const { t } = useI18n()
const tr = useLocalized()
const route = useRoute()
const product = findProduct(route.params.handle as string)

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

// 切换语言会进入新路由、页面重新创建，所以这里取一次当前语言版本即可
const p = tr(product)
const foundCollection = findCollection(p.collections[0] ?? '')
const collection = foundCollection && tr(foundCollection)
const related = products.filter(x => x.handle !== p.handle && x.collections.some(c => p.collections.includes(c))).slice(0, 4)

const activeImage = ref(0)
const selected = reactive<Record<string, string>>(
  Object.fromEntries(p.options.map(o => [o.name, o.values[0] ?? ''])),
)
const selectedText = computed(() =>
  p.options.map(o => `${o.name}: ${selected[o.name]}`).join(', '),
)

const waText = computed(() =>
  encodeURIComponent(
    t('whatsapp.product', { brand: site.shortName, product: p.title, sku: p.sku, options: selectedText.value }),
  ),
)

function scrollToForm() {
  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })
}

usePageSeo({ title: p.title, description: p.summary, image: p.images[0], type: 'product' })

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.title,
        sku: p.sku,
        description: p.summary,
        image: p.images.map(i => site.url + i),
        brand: { '@type': 'Brand', name: site.name },
        ...(p.price
          ? {
              offers: {
                '@type': 'Offer',
                price: p.price,
                priceCurrency: site.currency,
                availability: 'https://schema.org/InStock',
                url: site.url + route.path,
              },
            }
          : {}),
      }),
    },
  ],
})
</script>

<template>
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb">
      <NuxtLinkLocale to="/">{{ $t('nav.home') }}</NuxtLinkLocale>
      <span>/</span>
      <NuxtLinkLocale v-if="collection" :to="`/collections/${collection.handle}`">{{ collection.title }}</NuxtLinkLocale>
      <span v-if="collection">/</span>
      <span class="current">{{ p.title }}</span>
    </nav>

    <div class="pdp">
      <div class="gallery">
        <div class="main">
          <img :src="p.images[activeImage]" :alt="p.title" width="800" height="800" />
        </div>
        <div v-if="p.images.length > 1" class="thumbs">
          <button
            v-for="(img, i) in p.images"
            :key="img + i"
            :class="{ active: i === activeImage }"
            :aria-label="$t('product.viewImage', { n: i + 1 })"
            @click="activeImage = i"
          >
            <img :src="img" alt="" width="120" height="120" loading="lazy" />
          </button>
        </div>
      </div>

      <div class="info">
        <h1>{{ p.title }}</h1>
        <div v-if="p.price" class="price">{{ $t('product.from') }} ${{ p.price }} {{ site.currency }}</div>
        <p class="sku">{{ $t('product.sku') }}: {{ p.sku }}</p>
        <p>{{ p.summary }}</p>

        <div v-for="o in p.options" :key="o.name" class="option">
          <div class="option-name">
            {{ o.name }}: <strong>{{ selected[o.name] }}</strong>
          </div>
          <div class="values">
            <button
              v-for="v in o.values"
              :key="v"
              :class="{ active: selected[o.name] === v }"
              :aria-pressed="selected[o.name] === v"
              @click="selected[o.name] = v"
            >
              {{ v }}
            </button>
          </div>
        </div>

        <div class="cta">
          <button class="btn btn-block" @click="scrollToForm">{{ $t('product.requestQuote') }}</button>
          <a
            v-if="site.whatsapp"
            class="btn btn-outline btn-block"
            :href="`https://wa.me/${site.whatsapp}?text=${waText}`"
            target="_blank"
            rel="noopener"
          >
            {{ $t('product.askWhatsapp') }}
          </a>
        </div>

        <p v-if="p.wholesale" class="wholesale-note">{{ $t('product.wholesaleAvailable', { moq: site.wholesale.moq }) }}</p>

        <div class="desc">
          <p v-for="(para, i) in p.description" :key="i">{{ para }}</p>
        </div>

        <h3>{{ $t('product.details') }}</h3>
        <dl class="details">
          <template v-for="d in p.details" :key="d.label">
            <dt>{{ d.label }}</dt>
            <dd>{{ d.value }}</dd>
          </template>
        </dl>
      </div>
    </div>

    <section v-if="p.designImage" class="section story">
      <div class="story-text">
        <p class="eyebrow">{{ $t('design.story') }}</p>
        <h2>{{ $t('design.title') }}</h2>
        <p v-if="p.designStory">{{ p.designStory }}</p>
      </div>
      <DesignCompare :sketch="p.designImage" :finished="p.images[0]!" :alt="p.title" />
    </section>

    <section id="inquiry" class="section inquiry">
      <h2>{{ $t('product.inquiryTitle') }}</h2>
      <p class="muted">{{ $t('product.inquiryText') }}</p>
      <InquiryForm :product="p.title" :sku="p.sku" :options="selectedText" />
    </section>

    <section v-if="related.length" class="section">
      <div class="section-head">
        <h2>{{ $t('product.related') }}</h2>
      </div>
      <div class="grid grid-4">
        <ProductCard v-for="r in related" :key="r.handle" :product="r" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px 0;
  font-size: 13px;
  color: var(--c-muted);
}

.crumbs a:hover { color: var(--c-ink); }
.crumbs .current { color: var(--c-ink); }

.pdp {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: start;
}

.gallery { position: sticky; top: 130px; }
.main { background: var(--c-soft); aspect-ratio: 1; overflow: hidden; }
.main img { width: 100%; height: 100%; object-fit: cover; }

.thumbs { display: flex; gap: 10px; margin-top: 10px; }

.thumbs button {
  width: 84px;
  padding: 0;
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
}

.thumbs button.active { border-color: var(--c-ink); }

.price { font-size: 20px; color: var(--c-ink); margin-bottom: 4px; }
.sku { font-size: 12px; letter-spacing: 0.08em; color: var(--c-muted); }

.option { margin: 22px 0; }
.option-name { font-size: 13px; margin-bottom: 10px; }
.option-name strong { font-weight: 500; color: var(--c-ink); }
.values { display: flex; flex-wrap: wrap; gap: 8px; }

.values button {
  min-width: 48px;
  padding: 10px 14px;
  border: 1px solid var(--c-line);
  background: #fff;
  font: 13px var(--f-sans);
  color: var(--c-text);
  cursor: pointer;
}

.values button:hover { border-color: var(--c-muted); }
.values button.active { border-color: var(--c-ink); color: var(--c-ink); box-shadow: inset 0 0 0 1px var(--c-ink); }

.cta { display: flex; flex-direction: column; gap: 10px; margin: 28px 0 12px; }

.wholesale-note {
  font-size: 13px;
  color: var(--c-gold-dark);
}

.desc { margin: 28px 0; border-top: 1px solid var(--c-line); padding-top: 28px; }

.details {
  display: grid;
  grid-template-columns: 140px 1fr;
  margin: 0;
  font-size: 14px;
}

.details dt,
.details dd {
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid var(--c-line);
}

.details dt { color: var(--c-muted); }

.inquiry { max-width: 760px; }

.story {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: center;
  border-top: 1px solid var(--c-line);
  margin-top: 56px;
}

@media (max-width: 860px) {
  .story { grid-template-columns: 1fr; gap: 24px; }
}

@media (max-width: 860px) {
  .pdp { grid-template-columns: 1fr; gap: 32px; }
  .gallery { position: static; }
}
</style>
