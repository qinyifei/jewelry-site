<script setup lang="ts">
import { site } from '~/config/site'

const props = defineProps<{
  product?: string
  sku?: string
  defaultType?: 'retail' | 'wholesale' | 'oem'
  options?: string
}>()

const form = reactive({
  name: '',
  email: '',
  company: '',
  country: '',
  type: props.defaultType ?? 'retail',
  product: props.product ? `${props.product}${props.sku ? ` (${props.sku})` : ''}` : '',
  options: props.options ?? '',
  quantity: '',
  message: '',
  consent: false,
  // 防垃圾提交的隐藏字段，真人不会填写
  website: '',
})

watch(() => props.options, v => (form.options = v ?? ''))

const { locale } = useI18n()
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const turnstileEl = ref<HTMLElement>()
let turnstileToken = ''

onMounted(() => {
  if (!site.turnstileSiteKey) return
  const render = () =>
    (window as any).turnstile.render(turnstileEl.value, {
      sitekey: site.turnstileSiteKey,
      callback: (t: string) => (turnstileToken = t),
    })
  if ((window as any).turnstile) return render()
  const s = document.createElement('script')
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
  s.async = true
  s.onload = render
  document.head.appendChild(s)
})

async function submit() {
  status.value = 'sending'
  try {
    // 本地 nuxt dev 没有 Cloudflare Functions，直接模拟成功
    if (import.meta.dev) {
      console.info('[dev] inquiry payload', { ...form })
      await new Promise(r => setTimeout(r, 600))
    } else {
      await $fetch('/api/inquiry', {
        method: 'POST',
        body: { ...form, turnstileToken, page: location.href, lang: locale.value },
      })
    }
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div v-if="status === 'success'" class="notice success" role="status">{{ $t('form.success') }}</div>

  <form v-else class="form" @submit.prevent="submit">
    <div class="row">
      <div class="field">
        <label for="f-name">{{ $t('form.name') }} *</label>
        <input id="f-name" v-model="form.name" required autocomplete="name" maxlength="100" />
      </div>
      <div class="field">
        <label for="f-email">{{ $t('form.email') }} *</label>
        <input id="f-email" v-model="form.email" type="email" required autocomplete="email" maxlength="200" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <label for="f-company">{{ $t('form.company') }}</label>
        <input id="f-company" v-model="form.company" autocomplete="organization" maxlength="200" />
      </div>
      <div class="field">
        <label for="f-country">{{ $t('form.country') }} *</label>
        <input id="f-country" v-model="form.country" required autocomplete="country-name" maxlength="100" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <label for="f-type">{{ $t('form.type') }}</label>
        <select id="f-type" v-model="form.type">
          <option value="retail">{{ $t('form.typeRetail') }}</option>
          <option value="wholesale">{{ $t('form.typeWholesale') }}</option>
          <option value="oem">{{ $t('form.typeOem') }}</option>
        </select>
      </div>
      <div class="field">
        <label for="f-qty">{{ $t('form.quantity') }}</label>
        <input id="f-qty" v-model="form.quantity" inputmode="numeric" maxlength="20" />
      </div>
    </div>

    <div v-if="product" class="row">
      <div class="field">
        <label for="f-product">{{ $t('form.product') }}</label>
        <input id="f-product" v-model="form.product" readonly />
      </div>
      <div class="field">
        <label for="f-options">{{ $t('form.options') }}</label>
        <input id="f-options" v-model="form.options" maxlength="200" />
      </div>
    </div>

    <div class="field">
      <label for="f-message">{{ $t('form.message') }} *</label>
      <textarea id="f-message" v-model="form.message" rows="5" required maxlength="3000" />
    </div>

    <div class="hp" aria-hidden="true">
      <label>Website <input v-model="form.website" tabindex="-1" autocomplete="off" /></label>
    </div>

    <label class="consent">
      <input v-model="form.consent" type="checkbox" required />
      <i18n-t keypath="form.consent" tag="span">
        <template #link>
          <NuxtLinkLocale to="/policies/privacy-policy" target="_blank">{{ $t('form.privacyPolicy') }}</NuxtLinkLocale>
        </template>
      </i18n-t>
    </label>

    <div v-if="site.turnstileSiteKey" ref="turnstileEl" />

    <div v-if="status === 'error'" class="notice error" role="alert">
      {{ $t('form.error', { email: site.email }) }}
    </div>

    <button class="btn btn-block" type="submit" :disabled="status === 'sending'">
      {{ status === 'sending' ? $t('form.sending') : $t('form.submit') }}
    </button>
  </form>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 18px; }

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

@media (max-width: 600px) {
  .row { grid-template-columns: 1fr; }
}

.consent {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 13px;
  color: var(--c-muted);
}

.consent input { margin-top: 3px; }
.consent a { border-bottom: 1px solid var(--c-gold); }

.hp {
  position: absolute;
  left: -9999px;
}

.notice {
  padding: 16px 18px;
  font-size: 14px;
  border: 1px solid;
}

.success { color: var(--c-success); background: #eef6ef; }
.error { color: var(--c-error); background: #fbefec; }
</style>
