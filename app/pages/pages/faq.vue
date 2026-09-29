<script setup lang="ts">
const c = useLocaleContent({
  en: {
    seoTitle: 'FAQ',
    seoDescription: 'Answers to common questions about materials, sizing, shipping and returns.',
    title: 'Frequently Asked Questions',
    faqs: [
      { q: 'Is your jewelry real sterling silver?', a: 'Yes. Every piece is made from solid 925 sterling silver and stamped with a 925 hallmark. Our gold pieces are 18K gold vermeil: a thick layer of gold over sterling silver.' },
      { q: 'Is it safe for sensitive skin?', a: 'Our jewelry is nickel free and hypoallergenic, and complies with EU REACH nickel release limits.' },
      { q: 'Will it tarnish?', a: 'Sterling silver can tarnish naturally over time. Our pieces are rhodium or e-coated to slow this down. See our care guide in the Journal.' },
      { q: 'How do I find my ring size?', a: 'Our rings follow standard US sizing. Measure a ring you already own or contact us and we will send a printable ring sizer.' },
      { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide with tracking. See our Shipping Policy for delivery times and costs.' },
      { q: 'Can I return an item?', a: 'Unworn items in original packaging can be returned within 30 days. Personalised items are final sale. See Returns & Refunds for details.' },
    ],
  },
  zh: {
    seoTitle: '常见问题',
    seoDescription: '关于材质、尺码、配送和退换货的常见问题解答。',
    title: '常见问题',
    faqs: [
      { q: '你们的首饰是真 925 银吗？', a: '是的。每件首饰都用 925 纯银制作，并刻有 925 印记。金色款为 18K 金包银，即在纯银表面镀上厚金层。' },
      { q: '敏感肌可以戴吗？', a: '我们的首饰无镍、防过敏，符合欧盟 REACH 镍释放限值。' },
      { q: '会氧化变色吗？', a: '纯银时间久了会自然氧化。我们的首饰表面镀铑或电泳保护层，可以延缓氧化。保养方法见博客里的保养指南。' },
      { q: '怎么确定戒指尺码？', a: '我们的戒指采用标准美码。可以量一下你现有的戒指，或联系我们获取可打印的量戒尺。' },
      { q: '支持国际配送吗？', a: '支持，全球配送并提供物流跟踪。配送时效和运费见运费政策。' },
      { q: '可以退货吗？', a: '未佩戴且包装完好的商品可在 30 天内退货，定制商品不支持退货。详情见退换货政策。' },
    ],
  },
})

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.value.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }),
    },
  ],
})
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <h1>{{ c.title }}</h1>
    </section>
    <div class="prose" style="margin: 0 auto">
      <details v-for="f in c.faqs" :key="f.q">
        <summary>{{ f.q }}</summary>
        <p>{{ f.a }}</p>
      </details>
    </div>
  </div>
</template>

<style scoped>
details { border-bottom: 1px solid var(--c-line); padding: 18px 0; }
summary { cursor: pointer; font-weight: 500; color: var(--c-ink); }
details p { margin: 10px 0 0; color: var(--c-muted); }
</style>
