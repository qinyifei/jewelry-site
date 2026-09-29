<script setup lang="ts">
import { site } from '~/config/site'
import { findPost } from '~/data/posts'

const route = useRoute()
const found = findPost(route.params.handle as string)

if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const post = useLocalized()(found)

usePageSeo({ title: post.title, description: post.excerpt, image: post.image, type: 'article' })
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.date,
        image: site.url + post.image,
        author: { '@type': 'Organization', name: site.name },
      }),
    },
  ],
})
</script>

<template>
  <article class="container">
    <header class="page-hero">
      <time :datetime="post.date" class="eyebrow">{{ post.date }}</time>
      <h1>{{ post.title }}</h1>
      <p>{{ post.excerpt }}</p>
    </header>
    <div class="prose body">
      <p v-for="(para, i) in post.body" :key="i">{{ para }}</p>
      <p style="margin-top: 40px">
        <NuxtLinkLocale to="/blogs/news" class="link-underline">← {{ $t('blog.back') }}</NuxtLinkLocale>
      </p>
    </div>
  </article>
</template>

<style scoped>
.body { margin: 0 auto; font-size: 16px; }
</style>
