<script setup lang="ts">
import type { Product } from '~/data/types'

const props = defineProps<{ product: Product }>()
const tr = useLocalized()
const p = computed(() => tr(props.product))
</script>

<template>
  <NuxtLinkLocale :to="`/products/${p.handle}`" class="card">
    <div class="media">
      <img :src="p.images[0]" :alt="p.title" loading="lazy" width="800" height="800" />
      <img v-if="p.images[1]" :src="p.images[1]" alt="" class="alt" loading="lazy" width="800" height="800" />
    </div>
    <h3 class="title">{{ p.title }}</h3>
    <div v-if="p.price" class="price">{{ $t('product.from') }} ${{ p.price }}</div>
  </NuxtLinkLocale>
</template>

<style scoped>
.card { display: block; }

.media {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--c-soft);
  margin-bottom: 14px;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s, transform 0.6s;
}

.media .alt {
  position: absolute;
  inset: 0;
  opacity: 0;
}

.card:hover .alt { opacity: 1; }
.card:hover .media img { transform: scale(1.03); }

.title {
  font-size: 1.25rem;
  margin: 0 0 4px;
}

.price {
  font-size: 14px;
  color: var(--c-muted);
}
</style>
