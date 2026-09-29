<script setup lang="ts">
import { site } from '~/config/site'
import { collections } from '~/data/collections'

const year = new Date().getFullYear()
const tr = useLocalized()
</script>

<template>
  <footer class="footer">
    <div class="container cols">
      <div class="brand">
        <div class="logo">{{ site.name }}</div>
        <p>{{ $t('footer.tagline') }}</p>
        <p>
          <a :href="`mailto:${site.email}`">{{ site.email }}</a><br />
          {{ site.address }}
        </p>
        <div class="social">
          <a :href="site.social.instagram" target="_blank" rel="noopener">Instagram</a>
          <a :href="site.social.pinterest" target="_blank" rel="noopener">Pinterest</a>
          <a :href="site.social.facebook" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>

      <div>
        <h4>{{ $t('footer.shop') }}</h4>
        <NuxtLinkLocale to="/collections/all">{{ $t('nav.all') }}</NuxtLinkLocale>
        <NuxtLinkLocale v-for="c in collections" :key="c.handle" :to="`/collections/${c.handle}`">
          {{ tr(c).title }}
        </NuxtLinkLocale>
      </div>

      <div>
        <h4>{{ $t('footer.company') }}</h4>
        <NuxtLinkLocale to="/pages/about">{{ $t('nav.about') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/wholesale">{{ $t('nav.wholesale') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/blogs/cases">{{ $t('footer.cases') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/blogs/news">{{ $t('nav.journal') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/contact">{{ $t('nav.contact') }}</NuxtLinkLocale>
      </div>

      <div>
        <h4>{{ $t('footer.help') }}</h4>
        <NuxtLinkLocale to="/pages/faq">{{ $t('footer.faq') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/policies/shipping-policy">{{ $t('footer.shipping') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/policies/refund-policy">{{ $t('footer.refund') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/policies/privacy-policy">{{ $t('footer.privacy') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/policies/terms-of-service">{{ $t('footer.terms') }}</NuxtLinkLocale>
      </div>
    </div>
    <div class="container bottom">© {{ year }} {{ site.name }}. {{ $t('footer.rights') }}</div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--c-ink);
  color: #cfc5b8;
  padding-top: 64px;
  margin-top: 48px;
  font-size: 14px;
}

.cols {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.cols > div:not(.brand) {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cols a:hover { color: #fff; }

h4 {
  color: #fff;
  font-family: var(--f-sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.logo {
  font-family: var(--f-serif);
  font-size: 28px;
  color: #fff;
  margin-bottom: 12px;
}

.social { display: flex; gap: 18px; }

.bottom {
  border-top: 1px solid #3a342c;
  margin-top: 48px;
  padding: 20px 24px;
  font-size: 12px;
  color: #8f857a;
}

@media (max-width: 800px) {
  .cols { grid-template-columns: 1fr 1fr; }
  .brand { grid-column: 1 / -1; }
}
</style>
