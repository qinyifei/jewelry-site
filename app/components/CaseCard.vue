<script setup lang="ts">
import type { CaseStudy } from '~/data/types'

const props = defineProps<{ item: CaseStudy }>()
const tr = useLocalized()
const c = computed(() => tr(props.item))
</script>

<template>
  <NuxtLinkLocale :to="`/blogs/cases/${c.handle}`" class="card">
    <div class="pair">
      <img :src="c.sketch" :alt="$t('design.sketch')" loading="lazy" width="800" height="800" draggable="false" />
      <img :src="c.finished" :alt="$t('design.final')" loading="lazy" width="800" height="800" />
    </div>
    <p class="service">{{ c.service }}</p>
    <h3>{{ c.title }}</h3>
    <p class="muted client">{{ c.client }}</p>
    <span class="link-underline">{{ $t('cases.view') }}</span>
  </NuxtLinkLocale>
</template>

<style scoped>
.card { display: block; }

.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  margin-bottom: 14px;
  background: var(--c-soft);
}

.pair img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: opacity 0.3s; }
.card:hover .pair img { opacity: 0.9; }

.service {
  margin: 0 0 6px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-gold-dark);
}

h3 { margin-bottom: 6px; }
.client { font-size: 14px; margin-bottom: 12px; }
</style>
