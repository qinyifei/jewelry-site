<script setup lang="ts">
import { collections } from '~/data/collections'

const { t } = useI18n()
const tr = useLocalized()

usePageSeo({ title: t('materials.title'), description: t('materials.description') })

const pearlHandles = ['south-sea-white', 'golden-south-sea', 'tahitian', 'akoya', 'keshi', 'mabe']
const pearls = pearlHandles.map(handle => ({
  handle,
  collection: collections.find(c => c.handle === handle)!,
}))
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <p class="eyebrow">{{ $t('materials.eyebrow') }}</p>
      <h1>{{ $t('materials.heroTitle') }}</h1>
      <p class="lead">{{ $t('materials.heroText') }}</p>
    </section>

    <section class="section">
      <div class="pearl-grid">
        <article v-for="pearl in pearls" :key="pearl.handle" class="pearl-card">
          <h2 class="pearl-card__name">{{ tr(pearl.collection).title }}</h2>
          <p class="pearl-card__what">{{ $t(`materials.${pearl.handle}.what`) }}</p>
          <div class="pearl-card__traits">
            <span class="pearl-card__traits-label">{{ $t('materials.traits') }}</span>
            <p>{{ $t(`materials.${pearl.handle}.traits`) }}</p>
          </div>
          <NuxtLinkLocale :to="`/collections/${pearl.handle}`" class="btn btn-outline">
            {{ $t('materials.shopCollection') }}
          </NuxtLinkLocale>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lead {
  font-size: 1.125rem;
  color: var(--c-muted);
  max-width: 600px;
}

.pearl-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 640px) {
  .pearl-grid {
    grid-template-columns: 1fr;
  }
}

.pearl-card {
  background: var(--c-soft);
  border-top: 3px solid var(--c-gold);
  border-radius: 4px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pearl-card__name {
  font-family: var(--f-serif);
  font-size: 1.25rem;
  color: var(--c-ink);
  margin: 0;
}

.pearl-card__what {
  font-family: var(--f-sans);
  color: var(--c-muted);
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

.pearl-card__traits {
  border-top: 1px solid var(--c-line);
  padding-top: 1rem;
  font-family: var(--f-sans);
  font-size: 0.875rem;
}

.pearl-card__traits-label {
  display: block;
  font-weight: 600;
  color: var(--c-ink);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.75rem;
}

.pearl-card__traits p {
  color: var(--c-muted);
  margin: 0;
  line-height: 1.6;
}

.btn-outline {
  align-self: flex-start;
  margin-top: auto;
}
</style>
