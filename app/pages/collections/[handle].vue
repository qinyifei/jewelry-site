<script setup lang="ts">
import { findCollection } from '~/data/collections'
import { productsIn } from '~/data/products'

const { t } = useI18n()
const tr = useLocalized()
const route = useRoute()
const handle = route.params.handle as string

const found = findCollection(handle)
if (handle !== 'all' && !found) {
  throw createError({ statusCode: 404, statusMessage: 'Collection not found', fatal: true })
}

const collection = computed(() =>
  found
    ? tr(found)
    : { handle: 'all', title: t('collection.all'), description: t('collection.allDescription'), image: '/images/hero.svg' },
)

const items = productsIn(handle)

usePageSeo({ title: collection.value.title, description: collection.value.description, image: collection.value.image })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <h1>{{ collection.title }}</h1>
      <p>{{ collection.description }}</p>
      <p class="count">{{ $t('collection.count', items.length) }}</p>
    </section>

    <div v-if="items.length" class="grid grid-4">
      <ProductCard v-for="p in items" :key="p.handle" :product="p" />
    </div>
    <p v-else class="muted" style="text-align: center">{{ $t('collection.empty') }}</p>
  </div>
</template>

<style scoped>
.count {
  margin-top: 12px !important;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
</style>
