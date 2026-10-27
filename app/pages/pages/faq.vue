<script setup lang="ts">
const c = useLocaleContent({
  en: {
    seoTitle: 'FAQ',
    seoDescription: 'Answers to common questions about orders, payment, pearls, materials and jewellery care.',
    title: 'Frequently Asked Questions',
    groups: [
      {
        heading: 'Orders & Payment',
        faqs: [
          { q: 'Are the prices on the website tax-inclusive?', a: 'For orders within the EU, the listed price includes the applicable VAT in the region. Sweden\u2019s standard rate is 25%. Orders sent to Norway and Iceland do not include Swedish VAT, and local import taxes may apply upon delivery, which the recipient is responsible for. There are no other hidden fees.' },
          { q: 'What payment methods are supported?', a: 'Visa, Mastercard, PayPal, Klarna and Swish. All payment channels comply with EU financial security regulations, and transaction data is encrypted for protection.' },
          { q: 'Can I modify my order after placing it?', a: 'If the order hasn\u2019t shipped yet: within 2 hours after payment, you can freely modify the shipping address or product specifications. Once the order is shipped, shipping information cannot be changed; you can request returns or exchanges according to the after-sales policy after receiving it. Custom designs cannot be altered once production has started.' },
          { q: 'I have completed payment but not received the order confirmation email.', a: 'Confirmation emails are usually sent automatically within 5 minutes of payment. Please check your spam or promotions folder first. If you still haven\u2019t received it, contact customer service and provide your email or payment details, and we\u2019ll resend the order confirmation.' },
          { q: 'What happens if my order shows unpaid for a long time?', a: 'Unpaid orders will automatically time out and be cancelled, and the stock will be released. If you want to keep the style, you can place a new order and complete the payment.' },
        ],
      },
      {
        heading: 'Products & Quality',
        faqs: [
          { q: 'Are these wild natural pearls?', a: 'All pearls we sell are cultured pearls, including South Sea, Tahitian and Keshi cultured pearls. They are not wild natural pearls. The pearl type is stated on each product page.' },
          { q: 'Will pearls fade?', a: 'Pearls do not fade quickly by themselves, yet they are organic material. Extended exposure to perfume, makeup, sweat, chemicals or strong sunlight can dull their lustre and damage the surface. Proper maintenance helps preserve their shine for a long time.' },
          { q: 'Is colour variation normal for pearls?', a: 'Pearls are natural organic materials. Variations in overtone, texture, size and lustre are inherent and not considered defects. We photograph products to match the real item, though minor colour differences may appear on different device screens.' },
          { q: 'Do items come with material certificates?', a: 'Material certificates are available for high-value pearl pieces and bespoke jewellery. If you require a third-party appraisal certificate, please contact us before ordering. Additional fees and longer lead times may apply.' },
          { q: 'How do I care for my jewellery?', a: 'Put on pearl jewellery last and take it off first. Keep it away from perfume, toiletries, hot springs and seawater. Store it separately in a soft pouch to avoid scratches from harder jewellery. Clean only with a soft dry cloth; ultrasonic cleaning is not permitted. Gold vermeil pieces should be kept away from heavy, prolonged sweat exposure.' },
          { q: 'What is Gold Vermeil?', a: 'Gold vermeil refers to thick gold plating over a sterling silver base. Unlike thin gold plating, it offers better durability with proper wear.' },
          { q: 'Can the jewellery cause allergic reactions?', a: 'Our main materials are sterling silver and gold vermeil. We cannot guarantee they are completely hypoallergenic. Those with metal sensitivities are advised to wear them with caution.' },
        ],
      },
    ],
  },
  zh: {
    seoTitle: '常见问题',
    seoDescription: '关于订单支付、珍珠品质与首饰保养的常见问题解答。',
    title: '常见问题',
    groups: [
      {
        heading: '订单与支付',
        faqs: [
          { q: '网站标价是否含税？', a: '欧盟境内订单标价已包含对应地区增值税，瑞典适用标准税率 25%。发往挪威、冰岛的订单不含瑞典增值税，包裹抵达当地后可能产生进口税费，由收件人自行承担，无其他隐形费用。' },
          { q: '支持哪些付款方式？', a: 'Visa、Mastercard 信用卡、PayPal、Klarna、Swish。所有支付通道符合欧盟金融安全规范，交易数据加密保护。' },
          { q: '下单后能否修改订单信息？', a: '订单未发货：付款后 2 小时内，可免费修改收货地址、商品规格；订单发出后无法修改物流信息，可收货后依照售后政策申请退换。定制款式一旦开工，设计内容不可更改。' },
          { q: '支付成功，未收到订单确认邮件？', a: '确认邮件通常在付款完成 5 分钟内自动发出，请优先检查垃圾邮件、广告邮件文件夹。如仍未收到，请联系客服并提供邮箱或付款信息，我们为您补发订单凭证。' },
          { q: '订单长时间显示未付款会怎样？', a: '未支付订单将自动超时取消，库存同步释放。如果希望保留款式，可重新下单完成支付。' },
        ],
      },
      {
        heading: '商品与品质',
        faqs: [
          { q: '珍珠是天然野生珍珠吗？', a: '本店出售全部为养殖珍珠（Cultured Pearls），包含南洋珠、大溪地珍珠、Keshi 无核养殖珍珠等，并非野生天然珍珠，珍珠品类会在商品详情页标注说明。' },
          { q: '珍珠是否会褪色？', a: '珍珠本身不会快速褪色，但属于有机材质。长期接触香水、彩妆、汗液、化学试剂或强光暴晒，会导致光泽变暗、表层受损，做好日常保养可以长期维持珍珠光泽。' },
          { q: '珍珠是否有色差？', a: '珍珠是天然有机材质，每一颗的晕彩、纹路、大小、光泽都会存在天然差异，不属于质量瑕疵。我们的商品图尽力还原实物，但不同设备屏幕会带来轻微色差。' },
          { q: '商品是否配有材质证书？', a: '高价值珍珠单品、定制首饰可提供材质说明证书。如需第三方鉴定证书，请在下单前咨询客服，该服务可能产生额外费用与更长交付周期。' },
          { q: '首饰应该如何保养？', a: '珍珠建议最后佩戴、最先摘取，远离香水、洗护用品、温泉与海水；单独收纳在软布袋内，避免和硬质首饰摩擦；仅用干净软布轻轻擦拭，禁止超声波清洗。镀金款请避免长期大量出汗侵蚀镀层。' },
          { q: 'Gold Vermeil 镀金是什么工艺？', a: 'Gold Vermeil 是厚金镀金工艺，基底为 925 纯银，覆盖厚层黄金镀层，和普通薄镀金不同，妥善佩戴的情况下耐磨性更佳。' },
          { q: '首饰材质是否会引发过敏？', a: '主力材质为 925 纯银、Gold Vermeil 镀金。我们无法保证完全零过敏，金属敏感人群建议谨慎佩戴。' },
        ],
      },
    ],
  },
})

const allFaqs = computed(() => c.value.groups.flatMap(g => g.faqs))

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqs.value.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
    <div class="prose faq-body">
      <section v-for="g in c.groups" :key="g.heading" class="faq-group">
        <h2>{{ g.heading }}</h2>
        <details v-for="f in g.faqs" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </section>
    </div>
  </div>
</template>

<style scoped>
.faq-body {
  max-width: 760px;
}

.faq-group { margin-bottom: 40px; }
.faq-group h2 { font-size: 1.5rem; }
.faq-group h2::after {
  content: "";
  display: block;
  width: 40px;
  height: 1px;
  background: var(--c-line);
  margin-top: 12px;
}

details { border-bottom: 1px solid var(--c-line); padding: 18px 0; }
summary { cursor: pointer; font-weight: 500; color: var(--c-ink); }
details p { margin: 10px 0 0; color: var(--c-muted); }
</style>
