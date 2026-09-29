<script setup lang="ts">
import { cases } from '~/data/cases'

const { t } = useI18n()
usePageSeo({ title: t('cases.title'), description: t('cases.description'), image: cases[0]?.finished })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <p class="eyebrow">{{ $t('cases.eyebrow') }}</p>
      <h1>{{ $t('cases.title') }}</h1>
      <p>{{ $t('cases.description') }}</p>
    </section>

    <div class="grid grid-3">
      <CaseCard v-for="c in cases" :key="c.handle" :item="c" />
    </div>

    <section class="section cta">
      <h2>{{ $t('cases.ctaTitle') }}</h2>
      <p class="muted">{{ $t('cases.ctaText') }}</p>
      <NuxtLinkLocale to="/pages/wholesale" class="btn">{{ $t('cases.cta') }}</NuxtLinkLocale>
    </section>
  </div>
</template>

<style scoped>
.cta { text-align: center; max-width: 620px; margin: 0 auto; }
.cta .btn { margin-top: 12px; }
</style>
