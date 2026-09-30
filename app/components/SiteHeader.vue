<script setup lang="ts">
import { site } from '~/config/site'
import { collections } from '~/data/collections'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))

const tr = useLocalized()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const langOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)

const flags: Record<string, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  sv: '🇸🇪',
  da: '🇩🇰',
  no: '🇳🇴',
}

const currentLocale = computed(() => locales.value.find(l => l.code === locale.value))

function onDocClick(e: MouseEvent) {
  if (langRef.value && !langRef.value.contains(e.target as Node)) {
    langOpen.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', onDocClick))
onUnmounted(() => document.removeEventListener('mousedown', onDocClick))

watch(() => route.fullPath, () => { langOpen.value = false })
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

      <div ref="langRef" class="lang" :class="{ open: langOpen }">
        <button
          class="lang-trigger"
          :aria-expanded="langOpen"
          :aria-haspopup="true"
          :aria-label="$t('header.language')"
          @click="langOpen = !langOpen"
        >
          <span class="lang-flag">{{ flags[locale] }}</span>
          <span class="lang-code">{{ locale.toUpperCase() }}</span>
          <span class="lang-chevron" aria-hidden="true" />
        </button>
        <ul class="lang-menu" role="menu">
          <li v-for="l in locales" :key="l.code" role="none">
            <NuxtLink
              :to="switchLocalePath(l.code)"
              :hreflang="l.language"
              :lang="l.language"
              :class="{ active: l.code === locale }"
              :aria-current="l.code === locale ? 'true' : undefined"
              role="menuitem"
              @click="langOpen = false"
            >
              <span class="lang-flag">{{ flags[l.code] }}</span>
              <span>{{ l.name }}</span>
            </NuxtLink>
          </li>
        </ul>
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
  position: relative;
  font-size: 12px;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

.lang-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  background: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  color: var(--c-muted);
  font-size: 12px;
  letter-spacing: 0.06em;
  transition: color 0.15s, border-color 0.15s;
}

.lang-trigger:hover,
.lang.open .lang-trigger {
  color: var(--c-ink);
  border-color: var(--c-line);
}

.lang-flag {
  font-size: 14px;
  line-height: 1;
}

.lang-code {
  font-weight: 500;
}

.lang-chevron {
  display: block;
  width: 8px;
  height: 8px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg) translateY(-2px);
  transition: transform 0.15s;
}

.lang.open .lang-chevron {
  transform: rotate(-135deg) translateY(-2px);
}

.lang-menu {
  display: none;
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 140px;
  background: var(--c-bg);
  border: 1px solid var(--c-line);
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  list-style: none;
  margin: 0;
  padding: 4px;
  z-index: 100;
}

.lang.open .lang-menu {
  display: block;
}

.lang-menu a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 4px;
  color: var(--c-muted);
  font-size: 12px;
  letter-spacing: 0.06em;
  transition: background 0.12s, color 0.12s;
}

.lang-menu a:hover {
  background: var(--c-line);
  color: var(--c-ink);
}

.lang-menu a.active {
  color: var(--c-ink);
  font-weight: 500;
}

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

/* 英文菜单较长，中等宽度下收紧间距 */
@media (max-width: 1440px) {
  .nav { gap: 20px; }
  .bar { gap: 16px; }
}

@media (max-width: 1280px) {
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
  .bar { gap: 8px; height: 60px; }
  .logo { font-size: 22px; }
}

/* 320px 小屏（iPhone SE 一代等） */
@media (max-width: 374px) {
  .logo { font-size: 18px; letter-spacing: 0.02em; }
  .menu-btn { width: 32px; }
  .lang-trigger { padding: 3px 6px; font-size: 11px; }
  .announcement { font-size: 11px; letter-spacing: 0.02em; }
}
</style>
