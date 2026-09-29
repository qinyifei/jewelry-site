<script setup lang="ts">
import { site } from '~/config/site'

const { moq, leadTimeDays } = site.wholesale

const c = useLocaleContent({
  en: {
    seoTitle: 'Wholesale & Custom OEM Jewelry',
    seoDescription: `Wholesale sterling silver jewelry from ${site.name}. Low MOQ from ${moq} pcs, private label packaging, custom engraving and OEM design services.`,
    eyebrow: 'For Retailers & Brands',
    title: 'Wholesale & Custom OEM',
    intro: 'Reliable quality, low minimums and private-label service for boutiques, online stores and jewelry brands.',
    highlights: [
      { title: `MOQ ${moq} pcs`, text: 'Mix colours & sizes' },
      { title: 'Private Label', text: 'Logo engraving & packaging' },
      { title: 'OEM / ODM', text: 'From sketch to production' },
      { title: 'Quality Checked', text: 'Every piece inspected by hand' },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Send an enquiry', text: 'Tell us about your store, target styles and quantities.' },
      { title: 'Receive a quote & samples', text: 'We reply within 1 business day with pricing and sample options.' },
      { title: 'Confirm your order', text: 'Approve samples, packaging and a production schedule.' },
      { title: 'Production & delivery', text: `Lead time ${leadTimeDays} business days, shipped by DHL / FedEx / UPS.` },
    ],
    faqTitle: 'Wholesale FAQ',
    faqs: [
      { q: 'What is your minimum order quantity?', a: `Our MOQ is ${moq} pieces per design, and you can mix metal colours and sizes.` },
      { q: 'Can I get samples before ordering?', a: 'Yes. Sample fees are credited back against your first bulk order.' },
      { q: 'Do you offer private label and custom designs?', a: 'Yes. We can engrave your logo, supply branded packaging, and develop new designs from your sketches or references.' },
      { q: 'What payment methods do you accept?', a: 'Bank transfer (T/T), PayPal and credit card. Terms are typically 30% deposit and 70% before shipping.' },
    ],
    formTitle: 'Request wholesale pricing',
    formText: "Share a few details and we'll send our latest catalog and price list.",
  },
  zh: {
    seoTitle: '批发与 OEM 定制首饰',
    seoDescription: `${site.name} 纯银首饰批发：每款起订量 ${moq} 件，支持贴牌包装、定制刻字和 OEM 设计开发。`,
    eyebrow: '面向零售商与品牌',
    title: '批发与 OEM 定制',
    intro: '为精品店、网店和首饰品牌提供稳定品质、低起订量和贴牌服务。',
    highlights: [
      { title: `起订 ${moq} 件`, text: '可混搭颜色和尺码' },
      { title: '贴牌服务', text: 'Logo 刻字与品牌包装' },
      { title: 'OEM / ODM', text: '从设计稿到量产' },
      { title: '逐件质检', text: '每件首饰人工检验' },
    ],
    stepsTitle: '合作流程',
    steps: [
      { title: '提交询盘', text: '告诉我们你的店铺情况、意向款式和数量。' },
      { title: '获取报价和样品', text: '我们会在 1 个工作日内回复报价和样品方案。' },
      { title: '确认订单', text: '确认样品、包装和生产排期。' },
      { title: '生产与发货', text: `生产周期 ${leadTimeDays} 个工作日，通过 DHL / FedEx / UPS 发货。` },
    ],
    faqTitle: '批发常见问题',
    faqs: [
      { q: '起订量是多少？', a: `每款起订量 ${moq} 件，可以混搭不同材质颜色和尺码。` },
      { q: '下单前可以先拿样品吗？', a: '可以。样品费可在首次批量订单中抵扣。' },
      { q: '支持贴牌和定制设计吗？', a: '支持。可以刻你的 Logo、提供品牌包装，也可以根据你的设计稿或参考图开发新款。' },
      { q: '支持哪些付款方式？', a: '银行电汇（T/T）、PayPal 和信用卡。一般为 30% 定金，发货前付清 70% 尾款。' },
    ],
    formTitle: '获取批发报价',
    formText: '留下基本信息，我们会把最新的产品目录和价格表发给你。',
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
          <InquiryForm default-type="wholesale" />
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
