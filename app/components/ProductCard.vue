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
    <div class="info">
      <p class="title">{{ p.title }}</p>
      <p v-if="p.price" class="price">${{ p.price }}</p>
    </div>
  </NuxtLinkLocale>
</template>

<style scoped>
.card { display: block; text-decoration: none; }

.media {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  margin-bottom: 10px;
}

.media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.7s ease;
  pointer-events: none;
}

.card:hover .media::after {
  background: rgba(0, 0, 0, 0.08);
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease, transform 0.7s ease;
}

.media .alt {
  position: absolute;
  inset: 0;
  opacity: 0;
}

.card:hover .alt { opacity: 1; }
.card:hover .media img:first-child { transform: scale(1.03); }

.info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 0 2px;
}

.title {
  margin: 0;
  font-family: 'Inter', var(--f-sans);
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #554537;
  line-height: 1.4;
}

.price {
  margin: 0;
  font-family: 'Inter', var(--f-sans);
  font-size: 11px;
  font-weight: 300;
  color: #554537;
  opacity: 0.7;
  white-space: nowrap;
  flex-shrink: 0;
}
</style>
