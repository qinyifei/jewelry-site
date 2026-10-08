<script setup lang="ts">
import { findCollection, topCollections, childCollections } from "~/data/collections";
import { products } from "~/data/products";

// 切换不同分类时强制重建组件，筛选状态跟着入口分类重新初始化
definePageMeta({
  key: (route) => route.fullPath,
});

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

const parent = found?.parent ? findCollection(found.parent) : undefined;

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

// ── 筛选：品类（耳环/项链…）× 珍珠材质（金珠/澳白…），复选可叠加 ──
const typeCats = topCollections.filter((c) => c.handle !== "pearls");
const pearlCats = childCollections("pearls");

const typeFilter = ref<string[]>([]);
const pearlFilter = ref<string[]>([]);
const openFilter = ref<"type" | "pearl" | "">("");

// 按入口分类预选：品类页选中品类，珍珠品种页选中对应材质
if (typeCats.some((c) => c.handle === handle)) {
  typeFilter.value = [handle];
} else if (found?.parent === "pearls") {
  pearlFilter.value = [handle];
}

const items = computed(() =>
  products.filter((p) => {
    if (typeFilter.value.length && !p.collections.some((h) => typeFilter.value.includes(h)))
      return false;
    if (pearlFilter.value.length && !p.collections.some((h) => pearlFilter.value.includes(h)))
      return false;
    return true;
  }),
);

function toggleType(h: string) {
  const i = typeFilter.value.indexOf(h);
  if (i >= 0) typeFilter.value.splice(i, 1);
  else typeFilter.value.push(h);
}

function togglePearl(h: string) {
  const i = pearlFilter.value.indexOf(h);
  if (i >= 0) pearlFilter.value.splice(i, 1);
  else pearlFilter.value.push(h);
}

// 点击面板外收起
const typeRef = ref<HTMLElement | null>(null);
const pearlRef = ref<HTMLElement | null>(null);

function onDocClick(e: MouseEvent) {
  const t = e.target as Node;
  if (typeRef.value?.contains(t) || pearlRef.value?.contains(t)) return;
  openFilter.value = "";
}

onMounted(() => document.addEventListener("mousedown", onDocClick));
onUnmounted(() => document.removeEventListener("mousedown", onDocClick));

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
        <NuxtLinkLocale v-if="parent" :to="`/collections/${parent.handle}`" class="parent-link">
          ← {{ tr(parent).title }}
        </NuxtLinkLocale>
        <h1>{{ collection.title }}</h1>
        <p class="collection-desc">{{ collection.description }}</p>
        <p class="count">{{ $t("collection.count", items.length) }}</p>
        <NuxtLinkLocale to="/pages/materials" class="guide-link">
          {{ $t("materials.nav") }} →
        </NuxtLinkLocale>
      </div>
    </section>

    <!-- 筛选：品类 × 珍珠材质，下拉复选 -->
    <div class="container filter-bar">
      <div ref="typeRef" class="filter-dd">
        <button
          class="filter-trigger"
          :class="{ open: openFilter === 'type' || typeFilter.length }"
          @click="openFilter = openFilter === 'type' ? '' : 'type'"
        >
          {{ $t("collection.filterType") }}
          <span v-if="typeFilter.length" class="filter-count">({{ typeFilter.length }})</span>
          <span class="filter-chevron" :class="{ flipped: openFilter === 'type' }" aria-hidden="true" />
        </button>
        <div v-if="openFilter === 'type'" class="filter-panel">
          <label v-for="c in typeCats" :key="c.handle" class="filter-option">
            <input
              type="checkbox"
              :checked="typeFilter.includes(c.handle)"
              @change="toggleType(c.handle)"
            />
            <span class="filter-box" aria-hidden="true" />
            <span class="filter-option-text">{{ tr(c).title }}</span>
          </label>
        </div>
      </div>

      <div ref="pearlRef" class="filter-dd">
        <button
          class="filter-trigger"
          :class="{ open: openFilter === 'pearl' || pearlFilter.length }"
          @click="openFilter = openFilter === 'pearl' ? '' : 'pearl'"
        >
          {{ $t("collection.filterPearl") }}
          <span v-if="pearlFilter.length" class="filter-count">({{ pearlFilter.length }})</span>
          <span class="filter-chevron" :class="{ flipped: openFilter === 'pearl' }" aria-hidden="true" />
        </button>
        <div v-if="openFilter === 'pearl'" class="filter-panel">
          <label v-for="c in pearlCats" :key="c.handle" class="filter-option">
            <input
              type="checkbox"
              :checked="pearlFilter.includes(c.handle)"
              @change="togglePearl(c.handle)"
            />
            <span class="filter-box" aria-hidden="true" />
            <span class="filter-option-text">{{ tr(c).title }}</span>
          </label>
        </div>
      </div>

      <!-- 清除筛选 -->
      <button
        v-if="typeFilter.length || pearlFilter.length"
        class="filter-clear"
        @click="typeFilter = []; pearlFilter = []"
      >
        {{ $t("collection.filterClear") }}
      </button>
    </div>

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

/* 子分类页返回父级的链接 */
.parent-link {
  display: inline-block;
  margin-bottom: 18px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: inherit;
  opacity: 0.75;
  text-decoration: none;
}

.parent-link:hover {
  opacity: 1;
}

/* 筛选：下拉复选 */
.filter-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 32px;
  padding: 24px 0;
}

.filter-dd {
  position: relative;
}

.filter-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9a8d81;
  background: none;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  transition: color 0.15s;
}

.filter-trigger:hover,
.filter-trigger.open {
  color: #170C02;
}

.filter-count {
  font-weight: 300;
  opacity: 0.8;
}

.filter-chevron {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg) translateY(-2px);
  transition: transform 0.2s;
}

.filter-chevron.flipped {
  transform: rotate(-135deg) translateY(1px);
}

/* 浮层 */
.filter-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 190px;
  background: #ffffff;
  border: 1px solid #f1efed;
  box-shadow: 0 8px 24px rgba(25, 21, 21, 0.08);
  padding: 10px;
  z-index: 20;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #554537;
  transition: background 0.12s;
  user-select: none;
}

.filter-option:hover {
  background: #f8f5f2;
}

.filter-option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* 自定义复选框 */
.filter-box {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  border: 1px solid #d8cfc5;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  transition: border-color 0.15s, background 0.15s;
}

.filter-option input:checked + .filter-box {
  background: #554537;
  border-color: #554537;
}

.filter-option input:checked + .filter-box::after {
  content: "";
  position: absolute;
  left: 4.5px;
  top: 1.5px;
  width: 4px;
  height: 8px;
  border-right: 1.5px solid #fff;
  border-bottom: 1.5px solid #fff;
  transform: rotate(45deg);
}

.filter-option input:checked ~ .filter-option-text {
  color: #170C02;
}

/* 清除筛选 */
.filter-clear {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9a8d81;
  background: none;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s;
}

.filter-clear:hover {
  color: #170C02;
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
