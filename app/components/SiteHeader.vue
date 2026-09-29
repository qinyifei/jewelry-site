<script setup lang="ts">
import { site } from '~/config/site'
import { collections } from '~/data/collections'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))

const tr = useLocalized()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <header class="header">
    <div class="announcement">{{ $t('header.announcement', { moq: site.wholesale.moq }) }}</div>
    <div class="container bar">
      <button class="menu-btn" :aria-expanded="open" aria-controls="site-nav" @click="open = !open">
        <span class="sr-only">{{ open ? $t('nav.close') : $t('nav.menu') }}</span>
        <span class="burger" :class="{ open }" />
      </button>

      <NuxtLinkLocale to="/" class="logo">{{ site.name }}</NuxtLinkLocale>

      <nav id="site-nav" class="nav" :class="{ open }">
        <NuxtLinkLocale to="/collections/all">{{ $t('nav.all') }}</NuxtLinkLocale>
        <NuxtLinkLocale v-for="c in collections" :key="c.handle" :to="`/collections/${c.handle}`">
          {{ tr(c).title }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/wholesale">{{ $t('nav.wholesale') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/about">{{ $t('nav.about') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/contact">{{ $t('nav.contact') }}</NuxtLinkLocale>
      </nav>

      <div class="lang" role="group" :aria-label="$t('header.language')">
        <NuxtLink
          v-for="l in locales"
          :key="l.code"
          :to="switchLocalePath(l.code)"
          :hreflang="l.language"
          :lang="l.language"
          :class="{ active: l.code === locale }"
          :aria-current="l.code === locale ? 'true' : undefined"
        >
          {{ l.code === 'en' ? 'EN' : l.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 253, 249, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--c-line);
}

.announcement {
  background: var(--c-ink);
  color: #efe6da;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.08em;
  padding: 8px 16px;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 24px;
}

.logo {
  font-family: var(--f-serif);
  font-size: 28px;
  letter-spacing: 0.06em;
  color: var(--c-ink);
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 28px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav a {
  padding: 6px 0;
  border-bottom: 1px solid transparent;
  white-space: nowrap;
}

.nav a:hover,
.nav a.router-link-active {
  border-bottom-color: var(--c-gold);
}

.lang {
  display: flex;
  gap: 4px;
  font-size: 12px;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

.lang a {
  padding: 4px 8px;
  color: var(--c-muted);
  border: 1px solid transparent;
}

.lang a:hover { color: var(--c-ink); }
.lang a.active { color: var(--c-ink); border-color: var(--c-line); }

.menu-btn {
  display: none;
  background: none;
  border: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
}

.burger,
.burger::before,
.burger::after {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--c-ink);
  position: relative;
  transition: transform 0.2s;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
}

.burger::before { top: -7px; }
.burger::after { top: 7px; }
.burger.open { background: transparent; }
.burger.open::before { transform: translateY(7px) rotate(45deg); }
.burger.open::after { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 1180px) {
  .menu-btn { display: block; }
  .logo { flex: 1; text-align: center; }

  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--c-bg);
    border-bottom: 1px solid var(--c-line);
    padding: 8px 24px 16px;
  }

  .nav.open { display: flex; }
  .nav a { padding: 14px 0; border-bottom: 1px solid var(--c-line); }
}

@media (max-width: 480px) {
  .bar { gap: 8px; }
  .logo { font-size: 22px; }
  .lang a { padding: 4px 5px; }
}
</style>
