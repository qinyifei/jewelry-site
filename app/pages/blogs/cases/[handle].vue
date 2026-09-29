<script setup lang="ts">
import { cases, findCase } from '~/data/cases'

const route = useRoute()
const found = findCase(route.params.handle as string)

if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const tr = useLocalized()
const c = tr(found)
const others = cases.filter(x => x.handle !== c.handle).slice(0, 3)

usePageSeo({ title: c.title, description: c.summary, image: c.finished, type: 'article' })
</script>

<template>
  <article class="container">
    <header class="page-hero">
      <p class="eyebrow">{{ c.service }}</p>
      <h1>{{ c.title }}</h1>
      <p>{{ c.summary }}</p>
    </header>

    <div class="compare-wrap">
      <DesignCompare :sketch="c.sketch" :finished="c.finished" :alt="c.title" />
    </div>

    <dl class="facts">
      <div>
        <dt>{{ $t('cases.client') }}</dt>
        <dd>{{ c.client }}</dd>
      </div>
      <div>
        <dt>{{ $t('cases.quantity') }}</dt>
        <dd>{{ c.quantity }}</dd>
      </div>
      <div>
        <dt>{{ $t('cases.leadTime') }}</dt>
        <dd>{{ c.leadTime }}</dd>
      </div>
    </dl>

    <div class="prose body">
      <h2>{{ $t('cases.challenge') }}</h2>
      <p>{{ c.challenge }}</p>

      <h2>{{ $t('cases.solution') }}</h2>
      <p>{{ c.solution }}</p>

      <h2>{{ $t('cases.results') }}</h2>
      <ul>
        <li v-for="r in c.results" :key="r">{{ r }}</li>
      </ul>

      <blockquote v-if="c.quote">
        <p>“{{ c.quote }}”</p>
        <cite v-if="c.quoteAuthor">— {{ c.quoteAuthor }}</cite>
      </blockquote>

      <p v-if="c.product" style="margin-top: 32px">
        <NuxtLinkLocale :to="`/products/${c.product}`" class="link-underline">{{ $t('cases.seeProduct') }} →</NuxtLinkLocale>
      </p>
    </div>

    <section class="section cta">
      <h2>{{ $t('cases.ctaTitle') }}</h2>
      <p class="muted">{{ $t('cases.ctaText') }}</p>
      <NuxtLinkLocale to="/pages/wholesale" class="btn">{{ $t('cases.cta') }}</NuxtLinkLocale>
    </section>

    <section v-if="others.length" class="section">
      <div class="section-head">
        <h2>{{ $t('cases.title') }}</h2>
        <NuxtLinkLocale to="/blogs/cases" class="link-underline">{{ $t('cases.viewAll') }}</NuxtLinkLocale>
      </div>
      <div class="grid grid-3">
        <CaseCard v-for="o in others" :key="o.handle" :item="o" />
      </div>
    </section>
  </article>
</template>

<style scoped>
.compare-wrap { max-width: 860px; margin: 0 auto; }

.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 860px;
  margin: 40px auto;
  border-top: 1px solid var(--c-line);
  border-bottom: 1px solid var(--c-line);
}

.facts div { padding: 18px 12px; text-align: center; }
.facts div + div { border-left: 1px solid var(--c-line); }
.facts dt { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--c-muted); }
.facts dd { margin: 4px 0 0; color: var(--c-ink); }

.body { margin: 0 auto; font-size: 16px; }

blockquote {
  margin: 32px 0 0;
  padding: 20px 24px;
  border-left: 2px solid var(--c-gold);
  background: var(--c-soft);
  font-family: var(--f-serif);
  font-size: 1.3rem;
}

blockquote p { margin: 0 0 8px; }
cite { font-family: var(--f-sans); font-size: 13px; font-style: normal; color: var(--c-muted); }

.cta { text-align: center; max-width: 620px; margin: 0 auto; }
.cta .btn { margin-top: 12px; }

@media (max-width: 600px) {
  .facts { grid-template-columns: 1fr; }
  .facts div + div { border-left: 0; border-top: 1px solid var(--c-line); }
}
</style>
