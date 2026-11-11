export default defineI18nConfig(() => ({
  // 缺翻译的键回退英文（与数据文件"没写就显示英文"的约定一致），避免键名裸露在页面上
  fallbackLocale: 'en',
}))
