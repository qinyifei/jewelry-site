<script setup lang="ts">
import { site } from '~/config/site'

const { t } = useI18n()
const text = computed(() => encodeURIComponent(t('whatsapp.greeting', { brand: site.shortName })))
</script>

<template>
  <a
    v-if="site.whatsapp"
    class="wa"
    :href="`https://wa.me/${site.whatsapp}?text=${text}`"
    target="_blank"
    rel="noopener"
    :aria-label="$t('whatsapp.aria')"
  >
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 2 6.8L3 29l6.8-2.2c1.9 1.1 4.1 1.7 6.3 1.7 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-2 0-3.9-.5-5.6-1.6l-.4-.2-4 1.3 1.3-3.9-.3-.4a10.5 10.5 0 1 1 9 4.8zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"
      />
    </svg>
  </a>
</template>

<style scoped>
.wa {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 60;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s;
}

.wa:hover { transform: scale(1.06); }
</style>
