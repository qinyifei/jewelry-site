<script setup lang="ts">
import { findCollection } from "~/data/collections";
import { productsIn } from "~/data/products";

const { t } = useI18n();
const tr = useLocalized();
const route = useRoute();
const handle = route.params.handle as string;

const found = findCollection(handle);
if (handle !== "all" && !found) {
  throw createError({
    statusCode: 404,
    statusMessage: "Collection not found",
    fatal: true,
  });
}

const collection = computed(() =>
  found
    ? tr(found)
    : {
        handle: "all",
        title: t("collection.all"),
        description: t("collection.allDescription"),
        image: "/images/hero.svg",
      },
);

const items = productsIn(handle);

// 大溪地用深色冷调背景，其余用默认暖色
const heroBg = computed(() => {
  if (handle === "tahitian") return "hero--dark";
  if (handle === "golden-south-sea") return "hero--gold";
  return "hero--default";
});

usePageSeo({
  title: collection.value.title,
  description: collection.value.description,
  image: collection.value.image,
});
</script>

<template>
  <div>
    <section class="page-hero collection-hero" :class="heroBg">
      <div class="container">
        <h1>{{ collection.title }}</h1>
        <p class="collection-desc">{{ collection.description }}</p>
        <p class="count">{{ $t("collection.count", items.length) }}</p>
        <NuxtLinkLocale to="/pages/materials" class="guide-link">
          {{ $t("materials.nav") }} →
        </NuxtLinkLocale>
      </div>
    </section>

    <div class="container section">
      <div v-if="items.length" class="grid grid-4">
        <ProductCard v-for="p in items" :key="p.handle" :product="p" />
      </div>
      <p v-else class="muted" style="text-align: center">
        {{ $t("collection.empty") }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.collection-hero {
  padding-block: 96px 64px;
  text-align: center;
  transition: background 0.3s;
}

/* 默认：暖白 */
.hero--default {
  background: #f1efed;
  color: #554537;
}

/* 大溪地：深色背景 */
.hero--dark {
  background: #191515;
  color: #ffffff;
}

.hero--dark h1 {
  color: #ffffff;
}

.hero--dark .collection-desc,
.hero--dark .count,
.hero--dark .guide-link {
  color: rgba(255, 255, 255, 0.7);
}

/* 金珠：深暖棕底 */
.hero--gold {
  background: #3b2b2e;
  color: #f5ead8;
}

.hero--gold h1 {
  color: #f5ead8;
}

.hero--gold .collection-desc,
.hero--gold .count,
.hero--gold .guide-link {
  color: rgba(245, 234, 216, 0.75);
}

.collection-hero h1 {
  font-family: "Cormorant", Georgia, serif;
  font-weight: 400;
  font-size: clamp(3rem, 7.2vw, 4.5rem);
  letter-spacing: 0.03em;
  line-height: 1.1;
  margin: 0 0 16px;
}

.collection-desc {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto;
}

.hero--default .collection-desc {
  color: #554537;
}

.count {
  margin-top: 16px !important;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.hero--default .count {
  color: #554537;
}

.guide-link {
  display: inline-block;
  margin-top: 20px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.guide-link:hover {
  opacity: 0.75;
}
</style>
