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
  background: #191515;
  color: rgba(255, 255, 255, 0.55);
  padding-top: 80px;
  margin-top: 48px;
  font-family: 'Inter', var(--f-sans);
  font-size: 12px;
  font-weight: 300;
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

.cols a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-family: 'Inter', var(--f-sans);
  font-size: 12px;
  font-weight: 300;
  transition: color 0.3s ease;
}

.cols a:hover { color: rgba(255, 255, 255, 0.9); }

h4 {
  color: #fff;
  font-family: 'Inter', var(--f-sans);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.logo {
  font-family: 'Cormorant', var(--f-serif);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 12px;
}

.brand p {
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 8px;
}

.brand a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color 0.3s ease;
}

.brand a:hover { color: rgba(255, 255, 255, 0.9); }

.social {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.bottom {
  border-top: 1px solid #3a2f2a;
  margin-top: 48px;
  padding: 20px 24px;
  font-family: 'Inter', var(--f-sans);
  font-size: 10px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.35);
}

@media (max-width: 800px) {
  .cols { grid-template-columns: 1fr 1fr; }
  .brand { grid-column: 1 / -1; }
}
</style>
