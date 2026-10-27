<script setup lang="ts">
import { site } from '~/config/site'
import { cases } from '~/data/cases'

// 功能关闭时按 404 处理，防止直接输入网址访问
if (!site.features.custom) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const tr = useLocalized()
const showcase = cases[0] && tr(cases[0])

const c = useLocaleContent({
  en: {
    seoTitle: 'Bespoke & Collaborations',
    seoDescription: `Bespoke jewellery and brand collaborations from ${site.name} — one-of-a-kind pieces made with cultured pearls, gemstones and recycled precious metals, from sketch to finished piece.`,
    eyebrow: 'Bespoke & Collaborations',
    title: 'Jewellery crafted for your story and vision.',
    intro: 'For individuals and brands — from keepsakes to collaborations.',
    highlights: [
      { title: 'One-of-a-kind pieces', text: 'Made for private clients' },
      { title: 'Brand collaborations', text: 'Limited editions & gifting programmes' },
      { title: 'Cultured pearls & gemstones', text: 'Recycled metals on request' },
      { title: 'Small-batch handmade', text: 'Transparent sourcing, hand-finishing' },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Share your idea', text: 'A sketch, a photo, a memory — any starting point works.' },
      { title: 'Design & quote', text: 'We shape your idea into a design and agree a clear quote.' },
      { title: 'Sample & confirm', text: 'A handmade sample is crafted for your approval.' },
      { title: 'Production & delivery', text: 'Your piece is hand-finished and delivered.' },
    ],
    faqTitle: 'Custom FAQ',
    faqs: [
      { q: 'How long does a bespoke piece take?', a: 'Typically 3–6 weeks from design confirmation.' },
      { q: 'Do you work with brands?', a: 'Yes — collaborations, limited editions and gifting programmes.' },
      { q: 'What materials can I choose?', a: 'Cultured pearls, gemstones, sterling silver and gold vermeil; recycled metals on request.' },
      { q: 'Can I see a sample before production?', a: 'Yes, a sample is made and approved first.' },
      { q: 'How does pricing work?', a: 'A fixed quote after the design stage, no hidden costs.' },
      { q: 'Do you ship internationally?', a: 'Yes, we ship from Sweden with tracked delivery.' },
    ],
    formTitle: 'Start your enquiry',
    formText: 'Tell us about your idea — we usually reply within 2 business days.',
  },
  zh: {
    seoTitle: '定制与合作',
    seoDescription: `${site.name} 定制与合作：面向个人与品牌，以养殖珍珠、宝石与再生贵金属打造独一无二的首饰，从草图到成品。`,
    eyebrow: '定制与合作',
    title: '为你的故事与愿景，量身打造首饰。',
    intro: '面向个人与品牌——从纪念之作到跨界合作。',
    highlights: [
      { title: '独一无二', text: '为私人客户单件打造' },
      { title: '品牌合作', text: '联名系列、限量版与礼赠项目' },
      { title: '养殖珍珠与宝石', text: '可选再生金属' },
      { title: '小批量手工', text: '选材透明，手工精修' },
    ],
    stepsTitle: '合作流程',
    steps: [
      { title: '分享你的想法', text: '草图、照片或一段回忆——任何起点都可以。' },
      { title: '设计与报价', text: '我们把你的想法塑造成设计，并确定清晰报价。' },
      { title: '打样与确认', text: '为你手工制作样品，经你确认。' },
      { title: '生产与交付', text: '你的首饰经手工精修后交付。' },
    ],
    faqTitle: '定制常见问题',
    faqs: [
      { q: '定制一件需要多久？', a: '通常自设计确认起 3–6 周。' },
      { q: '与品牌合作吗？', a: '合作——联名系列、限量版与礼赠项目。' },
      { q: '可以选择哪些材质？', a: '养殖珍珠、宝石、925 纯银与 Gold Vermeil 镀金；可选再生金属。' },
      { q: '生产前能看到样品吗？', a: '可以，先制作样品并经你确认。' },
      { q: '价格如何计算？', a: '设计阶段后一口报价，无隐藏费用。' },
      { q: '支持国际配送吗？', a: '支持，从瑞典发货，全程物流跟踪。' },
    ],
    formTitle: '开始咨询',
    formText: '告诉我们你的想法——我们通常在 2 个工作日内回复。',
  },
})

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })
</script>

<template>
  <div>
    <section class="container page-hero">
      <p class="eyebrow">{{ c.eyebrow }}</p>
      <h1>{{ c.title }}</h1>
      <p>{{ c.intro }}</p>
    </section>

    <section class="container grid grid-4 highlights">
      <div v-for="h in c.highlights" :key="h.title">
        <strong>{{ h.title }}</strong><span>{{ h.text }}</span>
      </div>
    </section>

    <section class="section container">
      <h2>{{ c.stepsTitle }}</h2>
      <ol class="steps grid grid-4">
        <li v-for="(s, i) in c.steps" :key="s.title">
          <span class="num">0{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </li>
      </ol>
    </section>

    <section v-if="showcase" class="section container design">
      <div class="design-inner">
        <div>
          <p class="eyebrow">{{ showcase.service }}</p>
          <h2>{{ $t('design.title') }}</h2>
          <p class="muted">{{ showcase.summary }}</p>
          <NuxtLinkLocale :to="`/blogs/cases/${showcase.handle}`" class="link-underline">{{ $t('cases.view') }}</NuxtLinkLocale>
        </div>
        <DesignCompare :sketch="showcase.sketch" :finished="showcase.finished" :alt="showcase.title" />
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <h2>{{ $t('cases.title') }}</h2>
        <NuxtLinkLocale to="/blogs/cases" class="link-underline">{{ $t('cases.viewAll') }}</NuxtLinkLocale>
      </div>
      <div class="grid grid-3">
        <CaseCard v-for="item in cases.slice(0, 3)" :key="item.handle" :item="item" />
      </div>
    </section>

    <section class="section soft">
      <div class="container two">
        <div>
          <h2>{{ c.faqTitle }}</h2>
          <details v-for="f in c.faqs" :key="f.q">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
        <div>
          <h2>{{ c.formTitle }}</h2>
          <p class="muted">{{ c.formText }}</p>
          <InquiryForm default-type="custom" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.highlights > div {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 28px 16px;
  border: 1px solid var(--c-line);
}

.highlights strong { font-family: var(--f-serif); font-size: 1.4rem; font-weight: 400; color: var(--c-ink); }
.highlights span { font-size: 13px; color: var(--c-muted); }

.steps { list-style: none; padding: 0; margin: 32px 0 0; }
.num { font-family: var(--f-serif); font-size: 2rem; color: var(--c-gold); }

.soft { background: var(--c-soft); }

.design-inner {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 56px;
  align-items: center;
}

@media (max-width: 860px) {
  .design-inner { grid-template-columns: 1fr; gap: 28px; }
}

.two {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
}

details {
  border-bottom: 1px solid var(--c-line);
  padding: 16px 0;
}

summary {
  cursor: pointer;
  font-weight: 500;
  color: var(--c-ink);
}

details p { margin: 10px 0 0; color: var(--c-muted); }

@media (max-width: 860px) {
  .two { grid-template-columns: 1fr; gap: 40px; }
}
</style>
