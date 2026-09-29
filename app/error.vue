<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
useHead({ title: 'Page not found', meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <NuxtLayout>
    <section class="container page-hero">
      <p class="eyebrow">{{ error.statusCode }}</p>
      <h1>{{ $t('notFound.title') }}</h1>
      <p>{{ $t('notFound.text') }}</p>
      <p style="margin-top: 32px">
        <button class="btn" @click="clearError({ redirect: '/' })">{{ $t('notFound.back') }}</button>
      </p>
    </section>
  </NuxtLayout>
</template>
