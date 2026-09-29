<script setup lang="ts">
import { site } from '~/config/site'

// 只有配置了 Google Analytics 才需要征求同意；没有统计 Cookie 时不显示横幅
const { consent, setConsent } = useConsent()
const show = computed(() => !!site.gaId && consent.value === null)
</script>

<template>
  <ClientOnly>
    <div v-if="show" class="cookie" role="dialog" aria-live="polite">
      <p>
        {{ $t('cookie.text') }}
        <NuxtLinkLocale to="/policies/privacy-policy" class="link">{{ $t('cookie.learnMore') }}</NuxtLinkLocale>
      </p>
      <div class="actions">
        <button class="btn btn-outline" @click="setConsent(false)">{{ $t('cookie.decline') }}</button>
        <button class="btn" @click="setConsent(true)">{{ $t('cookie.accept') }}</button>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.cookie {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 70;
  max-width: 420px;
  padding: 20px;
  background: #fff;
  border: 1px solid var(--c-line);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  font-size: 14px;
}

.link { border-bottom: 1px solid var(--c-gold); }

.actions { display: flex; gap: 10px; }
.actions .btn { flex: 1; padding: 12px; }

@media (max-width: 600px) {
  .cookie { left: 12px; right: 12px; bottom: 88px; max-width: none; }
}
</style>
