<script setup lang="ts">
import { site } from '~/config/site'

const c = useLocaleContent({
  en: {
    seoTitle: 'Contact Us',
    seoDescription: `Get in touch with ${site.name} for orders, wholesale and custom jewelry enquiries.`,
    title: 'Contact Us',
    intro: 'Questions about a piece, an order or wholesale? We reply within 1 business day.',
    email: 'Email',
    studio: 'Studio',
    hoursTitle: 'Hours',
    hours: 'Monday – Friday, 9:00 – 18:00 (GMT+8)',
  },
  zh: {
    seoTitle: '联系我们',
    seoDescription: `联系 ${site.name}，咨询订单、批发和定制首饰。`,
    title: '联系我们',
    intro: '对商品、订单或批发有任何疑问？我们会在 1 个工作日内回复。',
    email: '邮箱',
    studio: '工作室',
    hoursTitle: '工作时间',
    hours: '周一至周五 9:00 – 18:00（北京时间）',
  },
})

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <h1>{{ c.title }}</h1>
      <p>{{ c.intro }}</p>
    </section>

    <div class="two">
      <aside>
        <h3>{{ c.email }}</h3>
        <p><a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
        <template v-if="site.whatsapp">
          <h3>WhatsApp</h3>
          <p><a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener">+{{ site.whatsapp }}</a></p>
        </template>
        <h3>{{ c.studio }}</h3>
        <p>{{ site.address }}</p>
        <h3>{{ c.hoursTitle }}</h3>
        <p>{{ c.hours }}</p>
      </aside>
      <InquiryForm />
    </div>
  </div>
</template>

<style scoped>
.two {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
  max-width: 1000px;
  margin: 0 auto;
}

aside h3 { font-size: 1.2rem; margin-bottom: 4px; }
aside a { border-bottom: 1px solid var(--c-gold); }

@media (max-width: 760px) {
  .two { grid-template-columns: 1fr; gap: 32px; }
}
</style>
