<script setup lang="ts">
import { posts } from '~/data/posts'

const { t } = useI18n()
const tr = useLocalized()
usePageSeo({ title: t('blog.title'), description: t('blog.description') })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <h1>{{ $t('blog.title') }}</h1>
      <p>{{ $t('blog.description') }}</p>
    </section>

    <div class="grid grid-3">
      <NuxtLinkLocale v-for="post in posts.map(tr)" :key="post.handle" :to="`/blogs/news/${post.handle}`" class="post">
        <img :src="post.image" :alt="post.title" loading="lazy" width="1200" height="900" />
        <time :datetime="post.date" class="muted">{{ post.date }}</time>
        <h3>{{ post.title }}</h3>
        <p class="muted">{{ post.excerpt }}</p>
        <span class="link-underline">{{ $t('blog.readMore') }}</span>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style scoped>
.post img { aspect-ratio: 4 / 3; object-fit: cover; margin-bottom: 14px; }
.post time { font-size: 12px; letter-spacing: 0.08em; }
.post h3 { margin-top: 6px; }
</style>
