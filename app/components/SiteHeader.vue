<script setup lang="ts">
import { site } from '~/config/site'
import { collections } from '~/data/collections'
import { products } from '~/data/products'

const route = useRoute()

const open = ref(false)
const shopOpen = ref(false)
const langOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)
const scrolled = ref(false)

const tr = useLocalized()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isHome = computed(() => route.path === '/' || /^\/(zh|sv|da|no)\/?$/.test(route.path))
const transparent = computed(() => isHome.value && !scrolled.value && !shopOpen.value)

const flags: Record<string, string> = {
  en: '🇺🇸', zh: '🇨🇳', sv: '🇸🇪', da: '🇩🇰', no: '🇳🇴',
}

const menuProducts = products.filter(p => p.featured).slice(0, 3)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

function onDocClick(e: MouseEvent) {
  if (langRef.value && !langRef.value.contains(e.target as Node)) langOpen.value = false
}

onMounted(() => {
  document.addEventListener('mousedown', onDocClick)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  document.removeEventListener('mousedown', onDocClick)
  window.removeEventListener('scroll', onScroll)
})

watch(() => route.fullPath, () => {
  langOpen.value = false
  shopOpen.value = false
  open.value = false
})
</script>

<template>
  <header class="header" :class="{ scrolled: !transparent }">
    <div class="bar">
      <!-- Mobile burger -->
      <button class="menu-btn" :aria-expanded="open" aria-controls="site-nav" @click="open = !open">
        <span class="sr-only">{{ open ? $t('nav.close') : $t('nav.menu') }}</span>
        <span class="burger" :class="{ open }" />
      </button>

      <!-- Left nav -->
      <nav id="site-nav" class="nav nav-left" :class="{ open }">
        <NuxtLinkLocale to="/">{{ $t('nav.home') }}</NuxtLinkLocale>

        <button
          class="shop-trigger"
          :aria-expanded="shopOpen"
          aria-haspopup="true"
          @mouseenter="shopOpen = true"
          @click="shopOpen = !shopOpen"
        >
          {{ $t('nav.shop') }}
          <span class="nav-chevron" :class="{ flipped: shopOpen }" aria-hidden="true" />
        </button>

        <NuxtLinkLocale to="/pages/wholesale">{{ $t('nav.wholesale') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/materials">{{ $t('materials.nav') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/about">{{ $t('nav.about') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/pages/contact">{{ $t('nav.contact') }}</NuxtLinkLocale>
      </nav>

      <!-- Right controls -->
      <div class="nav-right">
        <!-- Language switcher — hover dropdown -->
        <div ref="langRef" class="lang" :class="{ open: langOpen }">
          <button
            class="lang-trigger"
            :aria-expanded="langOpen"
            :aria-haspopup="true"
            :aria-label="$t('header.language')"
            @mouseenter="langOpen = true"
            @click="langOpen = !langOpen"
          >
            <span class="lang-flag">{{ flags[locale] }}</span>
            <span class="lang-code">{{ locale.toUpperCase() }}</span>
            <span class="lang-chevron" :class="{ flipped: langOpen }" aria-hidden="true" />
          </button>
          <ul class="lang-menu" role="menu" @mouseleave="langOpen = false">
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
                <span class="lang-name">{{ l.name }}</span>
                <span v-if="l.code === locale" class="lang-check" aria-hidden="true">✓</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Mega menu -->
    <div
      v-if="shopOpen"
      class="mega"
      role="dialog"
      aria-label="Shop navigation"
      @mouseleave="shopOpen = false"
    >
      <div class="mega-inner">
        <div class="mega-cats">
          <NuxtLinkLocale to="/collections/all" class="mega-cat-link mega-cat-all" @click="shopOpen = false">
            {{ $t('nav.all') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            v-for="c in collections"
            :key="c.handle"
            :to="`/collections/${c.handle}`"
            class="mega-cat-link"
            @click="shopOpen = false"
          >
            {{ tr(c).title }}
          </NuxtLinkLocale>
        </div>
        <div class="mega-products">
          <NuxtLinkLocale
            v-for="p in menuProducts"
            :key="p.handle"
            :to="`/products/${p.handle}`"
            class="mega-product"
            @click="shopOpen = false"
          >
            <div class="mega-product-img">
              <img :src="p.images[0]" :alt="tr(p).title" loading="eager" width="300" height="300" />
            </div>
            <p class="mega-product-name">{{ tr(p).title }}</p>
            <p v-if="p.price" class="mega-product-price">${{ p.price }}</p>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  border-bottom: none;
  transition: background 0.3s, border-color 0.3s;
}

.header.scrolled {
  background: rgba(241, 239, 237, 0.97);
  border-bottom: 1px solid #e9dcd0;
  backdrop-filter: blur(8px);
}

/* ── Bar layout: left nav | right controls ── */
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  /* 不用 container 居中，直接贴边，和 Hargreaves Stockholm 一致 */
  max-width: none;
  width: 100%;
  gap: 0;
}

/* ── Nav (left) ── */
.nav-left {
  display: flex;
  align-items: center;
  gap: 28px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.nav-left > a {
  padding: 4px 0;
  color: #554537;
  border-bottom: 1px solid transparent;
  white-space: nowrap;
  transition: color 0.15s;
}

.header:not(.scrolled) .nav-left > a { color: rgba(255,255,255,0.85); }
.nav-left > a:hover { color: #170C02; }
.header:not(.scrolled) .nav-left > a:hover { color: #fff; }
.nav-left > a.router-link-active { border-bottom-color: #554537; color: #170C02; }
.header:not(.scrolled) .nav-left > a.router-link-active { border-bottom-color: rgba(255,255,255,0.6); color: #fff; }

/* ── Shop trigger ── */
.shop-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #554537;
  transition: color 0.15s;
  white-space: nowrap;
}

.header:not(.scrolled) .shop-trigger { color: rgba(255,255,255,0.85); }
.shop-trigger:hover { color: #170C02; }
.header:not(.scrolled) .shop-trigger:hover { color: #fff; }

.nav-chevron {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg) translateY(-2px);
  transition: transform 0.2s;
  flex-shrink: 0;
}

.nav-chevron.flipped { transform: rotate(-135deg) translateY(1px); }

/* ── Right controls ── */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* ── Language switcher ── */
.lang {
  position: relative;
}

.lang-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #554537;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.15s;
  white-space: nowrap;
}

.header:not(.scrolled) .lang-trigger { color: rgba(255,255,255,0.85); }
.lang-trigger:hover,
.lang.open .lang-trigger { color: #170C02; }
.header:not(.scrolled) .lang-trigger:hover,
.header:not(.scrolled) .lang.open .lang-trigger { color: #fff; }

.lang-flag { font-size: 14px; line-height: 1; }
.lang-code { font-weight: 300; }

.lang-chevron {
  display: block;
  width: 6px;
  height: 6px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg) translateY(-2px);
  transition: transform 0.15s;
  flex-shrink: 0;
}

.lang-chevron.flipped { transform: rotate(-135deg) translateY(1px); }

/* Dropdown panel */
.lang-menu {
  display: none;
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 160px;
  background: #ffffff;
  border: 1px solid #e9dcd0;
  list-style: none;
  margin: 0;
  padding: 6px;
  z-index: 100;
}

.lang.open .lang-menu { display: block; }

.lang-menu a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  color: #554537;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.04em;
  transition: background 0.12s, color 0.12s;
  border-radius: 0;
}

.lang-menu a:hover { background: #f8f5f2; color: #170C02; }
.lang-menu a.active { color: #170C02; background: #f1efed; }

.lang-name { flex: 1; }

.lang-check {
  font-size: 11px;
  color: #554537;
  opacity: 0.7;
}


/* ── Mobile ── */
.menu-btn {
  display: none;
  background: none;
  border: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.burger,
.burger::before,
.burger::after {
  display: block;
  width: 20px;
  height: 1px;
  background: #170C02;
  position: relative;
  transition: transform 0.2s;
}

.header:not(.scrolled) .burger,
.header:not(.scrolled) .burger::before,
.header:not(.scrolled) .burger::after { background: rgba(255,255,255,0.9); }

.burger::before, .burger::after { content: ''; position: absolute; }
.burger::before { top: -6px; }
.burger::after { top: 6px; }
.burger.open { background: transparent; }
.burger.open::before { transform: translateY(6px) rotate(45deg); }
.burger.open::after { transform: translateY(-6px) rotate(-45deg); }

/* ── Mega menu ── */
.mega {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: #ffffff;
  border-top: 1px solid #e9dcd0;
  border-bottom: 1px solid #e9dcd0;
  z-index: 49;
}

.mega-inner {
  display: grid;
  grid-template-columns: 260px 1fr;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 360px;
}

.mega-cats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 40px 40px 40px 0;
  border-right: 1px solid #e9dcd0;
}

.mega-cat-link {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #554537;
  padding: 6px 0;
  border-bottom: 1px solid transparent;
  transition: color 0.15s;
  white-space: nowrap;
}

.mega-cat-link:hover { color: #170C02; }
.mega-cat-link.router-link-active { color: #170C02; border-bottom-color: #554537; }

.mega-cat-all {
  font-weight: 400;
  color: #170C02;
  margin-bottom: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e9dcd0 !important;
}

.mega-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #e9dcd0;
  margin: 0 0 0 1px;
  align-self: stretch;
}

.mega-product {
  display: block;
  background: #ffffff;
  padding: 32px 24px 24px;
  transition: background 0.15s;
}

.mega-product:hover { background: #faf8f6; }

.mega-product-img {
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f5f2;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mega-product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.mega-product:hover .mega-product-img img { transform: scale(1.03); }

.mega-product-name {
  margin: 0 0 4px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #554537;
  line-height: 1.4;
}

.mega-product-price {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 300;
  color: #554537;
  opacity: 0.6;
}

/* ── Responsive ── */
@media (max-width: 1080px) {
  .mega { display: none; }
  .menu-btn { display: flex; }

  .nav-left {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: #f1efed;
    border-bottom: 1px solid #e9dcd0;
    padding: 0 24px 16px;
  }

  .nav-left.open { display: flex; }
  .nav-left > a { padding: 16px 0; border-bottom: 1px solid #e9dcd0; color: #554537 !important; }

  .shop-trigger {
    width: 100%;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid #e9dcd0;
    color: #554537 !important;
  }
}

@media (max-width: 480px) {
  .bar { height: 52px; }
  .nav-right { gap: 12px; }
}
</style>
