<script setup lang="ts">
import { site } from '~/config/site'
import { cases } from '~/data/cases'

// 功能关闭时按 404 处理，防止直接输入网址访问
if (!site.features.custom) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { moq, leadTimeDays } = site.custom
const tr = useLocalized()
const showcase = cases[0] && tr(cases[0])

const c = useLocaleContent({
  en: {
    seoTitle: 'Custom & OEM Jewelry',
    seoDescription: `Bespoke and OEM jewelry from ${site.name} — from a single custom piece to production runs of ${moq}+ pieces, with logo engraving, private-label packaging and worldwide shipping.`,
    eyebrow: 'For Brands & Individuals',
    title: 'Custom & OEM Jewelry',
    intro: 'A one-off bespoke gift or a full collection for your brand — either way we handle design, production and quality control by hand, and keep you updated at every step.',
    highlights: [
      { title: 'Bespoke One-offs', text: 'From a single piece' },
      { title: 'OEM / ODM', text: 'From sketch to production' },
      { title: 'Private Label', text: 'Logo engraving & packaging' },
      { title: 'Quality Checked', text: 'Every piece inspected by hand' },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Share your idea', text: 'Send a sketch, reference images or just a wish — we help you refine it.' },
      { title: 'Design & quote', text: 'We reply within 1 business day with design drawings, stone options and pricing.' },
      { title: 'Sample & confirm', text: 'Samples in 7–10 days. Tweak stones, sizes or engraving until it is exactly right.' },
      { title: 'Production & delivery', text: `Production in ${leadTimeDays} business days, shipped worldwide by DHL / FedEx / UPS.` },
    ],
    faqTitle: 'Custom FAQ',
    faqs: [
      { q: 'Is there a minimum order?', a: `One-off bespoke pieces start from a single piece. For OEM production runs, minimums start at ${moq} pieces per design.` },
      { q: 'Can I customize an existing design?', a: 'Yes — stones, metals, sizes and finish can all be changed, and most styles support engraving. Send us the style you like and what you want to change.' },
      { q: 'Do you offer private label?', a: 'Yes. We engrave your logo and supply branded packaging for stores and brands.' },
      { q: 'What about payment & shipping?', a: 'Bank transfer (T/T), PayPal and credit card. Finished orders ship worldwide by DHL, FedEx or UPS.' },
    ],
    formTitle: 'Start your custom project',
    formText: "Tell us about your idea and we'll reply with a design proposal and quote within 1 business day.",
  },
  zh: {
    seoTitle: '首饰定制与 OEM 代工',
    seoDescription: `${site.name} 提供首饰定制与 OEM 代工：单件专属定制或每款 ${moq} 件起量产，支持 Logo 刻字、贴牌包装，全球发货。`,
    eyebrow: '面向品牌与个人',
    title: '首饰定制与 OEM 合作',
    intro: '无论是一件专属定制的礼物，还是为你的品牌打造整个系列，设计、生产和质检我们都亲力亲为，每个环节都会跟你同步进展。',
    highlights: [
      { title: '单件定制', text: '一件起做' },
      { title: 'OEM / ODM', text: '从设计稿到量产' },
      { title: '贴牌服务', text: 'Logo 刻字与品牌包装' },
      { title: '逐件质检', text: '每件首饰人工检验' },
    ],
    stepsTitle: '合作流程',
    steps: [
      { title: '提出你的想法', text: '发来草图、参考图或只是一个愿望，我们帮你把它完善成型。' },
      { title: '设计与报价', text: '1 个工作日内回复设计图、宝石方案和报价。' },
      { title: '打样与确认', text: '7–10 天出样，宝石、尺寸、刻字都可以反复调整到满意。' },
      { title: '生产与发货', text: `量产 ${leadTimeDays} 个工作日，DHL / FedEx / UPS 全球直发。` },
    ],
    faqTitle: '定制常见问题',
    faqs: [
      { q: '有起订量吗？', a: `单件定制一件起做；OEM 批量生产每款 ${moq} 件起。` },
      { q: '可以修改现有款式吗？', a: '可以——宝石、材质、尺寸、表面处理都能调整，大部分款式还支持刻字。把你喜欢的款式和想改的地方发给我们即可。' },
      { q: '支持贴牌吗？', a: '支持。我们为门店和品牌提供 Logo 刻字和品牌化包装。' },
      { q: '付款和发货方式？', a: '支持银行电汇（T/T）、PayPal 和信用卡，成品通过 DHL、FedEx 或 UPS 全球发货。' },
    ],
    formTitle: '开启你的定制项目',
    formText: '告诉我们你的想法，我们会在 1 个工作日内回复设计方案和报价。',
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
