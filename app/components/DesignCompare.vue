<script setup lang="ts">
// 设计稿与成品并排对比
defineProps<{ sketch: string; finished: string; alt: string }>()
</script>

<template>
  <div class="compare">
    <figure>
      <div class="media sketch">
        <img :src="sketch" :alt="`${alt} – ${$t('design.sketch')}`" loading="lazy" width="800" height="800" draggable="false" />
      </div>
      <figcaption>{{ $t('design.sketch') }}</figcaption>
    </figure>
    <span class="arrow" aria-hidden="true">→</span>
    <figure>
      <div class="media">
        <img :src="finished" :alt="`${alt} – ${$t('design.final')}`" loading="lazy" width="800" height="800" />
      </div>
      <figcaption>{{ $t('design.final') }}</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.compare {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}

figure { margin: 0; }

.media {
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--c-soft);
}

.media img { width: 100%; height: 100%; object-fit: cover; }
.sketch img { user-select: none; }

figcaption {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-muted);
}

.arrow {
  font-family: var(--f-serif);
  font-size: 28px;
  color: var(--c-gold);
}

@media (max-width: 600px) {
  .compare { gap: 8px; }
  .arrow { font-size: 20px; }
}
</style>
