<script setup lang="ts">
import { site } from '~/config/site'

const c = useLocaleContent({
  en: {
    seoTitle: 'About Us',
    seoDescription: `The story behind ${site.name}: handcrafted fine jewelry made with care, from our studio to you.`,
    eyebrow: 'Our Story',
    title: 'Made with care, worn with meaning',
    intro: `${site.name} began in a small workshop with a simple idea: fine jewelry should be beautiful, honest and made to last.`,
    craftTitle: 'Craftsmanship',
    craft:
      'Every piece is cast, set and polished by skilled artisans with more than 15 years of experience. We work only with solid 925 sterling silver and thick 18K gold vermeil, and every batch is quality-checked by hand before it leaves our studio.',
    materialsTitle: 'Materials you can trust',
    materials: [
      'Genuine 925 sterling silver, stamped on every piece',
      'Nickel free and compliant with EU REACH regulations',
      'Lead and cadmium free, meeting California Prop 65 requirements',
      'Conflict-free, lab-tested stones',
    ],
    workTitle: 'Work with us',
    workIntro: 'We partner with boutiques, online stores and brands around the world.',
    workWholesale: 'Learn about wholesale and OEM',
    workOr: 'or',
    workContact: 'get in touch',
  },
  zh: {
    seoTitle: '关于我们',
    seoDescription: `${site.name} 的品牌故事：从工作室到你手中，每件首饰都用心手工打造。`,
    eyebrow: '品牌故事',
    title: '用心打造，佩戴有意义',
    intro: `${site.name} 起步于一间小工坊，初心很简单：精致首饰应该美观、真材实料、经久耐戴。`,
    craftTitle: '匠心工艺',
    craft:
      '每件首饰都由拥有 15 年以上经验的工匠完成铸造、镶嵌和抛光。我们只使用 925 纯银和厚镀层 18K 金包银，每批货出厂前都经过人工质检。',
    materialsTitle: '放心的材质',
    materials: [
      '真 925 纯银，每件都有 925 印记',
      '无镍，符合欧盟 REACH 法规',
      '无铅无镉，符合美国加州 Prop 65 要求',
      '无冲突来源、经实验室检测的宝石',
    ],
    workTitle: '与我们合作',
    workIntro: '我们与全球的精品店、网店和首饰品牌合作。',
    workWholesale: '了解批发与 OEM 合作',
    workOr: '，或',
    workContact: '联系我们',
  },
})

usePageSeo({ title: c.value.seoTitle, description: c.value.seoDescription })
</script>

<template>
  <div class="container">
    <section class="page-hero">
      <p class="eyebrow">{{ c.eyebrow }}</p>
      <h1>{{ c.title }}</h1>
      <p>{{ c.intro }}</p>
    </section>

    <div class="prose" style="margin: 0 auto">
      <h2>{{ c.craftTitle }}</h2>
      <p>{{ c.craft }}</p>

      <h2>{{ c.materialsTitle }}</h2>
      <ul>
        <li v-for="m in c.materials" :key="m">{{ m }}</li>
      </ul>

      <h2>{{ c.workTitle }}</h2>
      <p>
        {{ c.workIntro }}
        <NuxtLinkLocale to="/pages/wholesale">{{ c.workWholesale }}</NuxtLinkLocale>
        {{ c.workOr }}
        <NuxtLinkLocale to="/pages/contact">{{ c.workContact }}</NuxtLinkLocale>.
      </p>
    </div>
  </div>
</template>
