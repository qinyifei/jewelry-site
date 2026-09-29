<script setup lang="ts">
import { site } from '~/config/site'

// <html lang>、hreflang 备用语言链接、og:locale
const i18nHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))

useSchemaOrg()

function useSchemaOrg() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          logo: `${site.url}/favicon.svg`,
          email: site.email,
          sameAs: Object.values(site.social),
        }),
      },
    ],
  })
}
</script>

<template>
  <div class="layout">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
    <WhatsAppButton />
    <CookieBanner />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main { flex: 1; }
</style>
