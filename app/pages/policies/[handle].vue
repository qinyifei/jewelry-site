<script setup lang="ts">
import { findPolicy } from '~/data/policies'

const route = useRoute()
const found = findPolicy(route.params.handle as string)

if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Policy not found', fatal: true })
}

const policy = useLocalized()(found)
usePageSeo({ title: policy.title })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <h1>{{ policy.title }}</h1>
      <p>{{ $t('policy.updated', { date: policy.updated }) }}</p>
    </section>
    <div class="prose" style="margin: 0 auto">
      <p v-if="$t('policy.translationNotice')" class="notice">{{ $t('policy.translationNotice') }}</p>
      <template v-for="(s, i) in policy.sections" :key="i">
        <h2 v-if="s.heading">{{ s.heading }}</h2>
        <p v-for="(para, j) in s.paragraphs ?? []" :key="j">{{ para }}</p>
        <ul v-if="s.list">
          <li v-for="(li, k) in s.list" :key="k">{{ li }}</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style scoped>
.notice {
  padding: 12px 16px;
  background: var(--c-soft);
  font-size: 13px;
  color: var(--c-muted);
}
</style>
