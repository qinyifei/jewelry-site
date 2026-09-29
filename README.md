# Aurelia Jewelry 外贸官网

面向欧美客户的珠宝展示 + 询盘网站。Nuxt 4 静态生成，部署在 Cloudflare Pages，询盘通过 Cloudflare Pages Functions + Resend 发到邮箱。

> 品牌名 "Aurelia Jewelry"、域名、邮箱、WhatsApp、商品和图片都是占位内容，上线前需要替换。

## 本地开发

需要 Node 22.12+（推荐 24，见 `.nvmrc`）。

```bash
npm install
npm run dev          # http://localhost:3000，询盘表单在开发模式下只会模拟提交
npm run generate     # 生成静态站点到 .output/public
npm run preview      # 本地预览生成结果
npm run preview:cf   # 用 wrangler 模拟 Cloudflare，连同 /api/inquiry 一起测试（需先复制 .dev.vars.example 为 .dev.vars）
```

## 目录结构

```
app/
  config/site.ts       品牌信息：名称、域名、邮箱、WhatsApp、起订量、GA、Turnstile
  data/products.ts     商品
  data/collections.ts  分类
  data/posts.ts        博客文章
  data/policies.ts     政策页（运费、退换货、隐私、条款）⚠️ 模板文字，需按实际修改
  pages/               页面，路径与 Shopify 保持一致（见下）
  components/          页头、页脚、商品卡片、询盘表单、WhatsApp 按钮、Cookie 横幅
i18n/locales/en.json   界面文案（以后加语言在这里加文件）
functions/api/inquiry.ts  询盘接口（Cloudflare Pages Function）
public/                图片、_headers、_redirects、robots.txt
```

## 网址规划（与 Shopify 一致，方便以后迁移）

| 页面 | 网址 |
|---|---|
| 商品 | `/products/{handle}` |
| 分类 | `/collections/{handle}`，全部商品 `/collections/all` |
| 普通页面 | `/pages/about`、`/pages/wholesale`、`/pages/contact`、`/pages/faq` |
| 博客 | `/blogs/news/{handle}` |
| 政策 | `/policies/shipping-policy`、`refund-policy`、`privacy-policy`、`terms-of-service` |

网址不带结尾斜杠（`nuxt.config.ts` 中 `autoSubfolderIndex: false`）。**商品的 `handle` 上线后不要再改**；确实要改时，在 `public/_redirects` 里加一条 301。

## 上新商品

1. 把图片放到 `public/images/products/`（建议 1600×1600 的 JPG/WebP，单张 300KB 以内）
2. 在 `app/data/products.ts` 里复制一条商品，修改 `handle`、`sku`、标题、价格、图片等
3. 提交并推送到 GitHub，Cloudflare 会自动重新部署（1–3 分钟）

## 部署到 Cloudflare Pages

1. 把项目推送到 GitHub（私有仓库即可）
2. Cloudflare 控制台 → Workers & Pages → Create → Pages → 连接 GitHub 仓库
3. 构建设置：
   - Framework preset：`Nuxt.js`（或 None）
   - Build command：`npm run generate`
   - Build output directory：`.output/public`
   - 环境变量：`NODE_VERSION = 24`
4. 部署完成后，在 Custom domains 里绑定你的域名

### 配置询盘邮件（Resend）

1. 注册 [Resend](https://resend.com)（免费版每月 3000 封），在 Domains 里添加并验证你的域名（按提示在 DNS 里加几条记录）
2. 在 Cloudflare Pages → Settings → Variables and Secrets 里添加：

| 变量 | 示例 | 说明 |
|---|---|---|
| `RESEND_API_KEY` | `re_xxx` | 设为 Secret |
| `INQUIRY_TO` | `sales@yourbrand.com` | 收询盘的邮箱，多个用逗号分隔 |
| `INQUIRY_FROM` | `Website <noreply@yourbrand.com>` | 必须是 Resend 验证过的域名 |
| `TURNSTILE_SECRET_KEY` | 可选 | 开启人机验证时填写，同时在 `site.ts` 里填 `turnstileSiteKey` |

3. 重新部署一次让变量生效，然后在网站上提交一条测试询盘

询盘邮件的"回复"会直接回给客户邮箱（`reply_to`）。

## 上线前检查清单

- [ ] `app/config/site.ts`：品牌名、域名、邮箱、WhatsApp、地址、社交账号
- [ ] `public/robots.txt`：把域名改成正式域名
- [ ] 替换 `public/images/` 下的占位图（社交分享图请用 JPG/PNG，Facebook 等不支持 SVG）
- [ ] 替换 `public/favicon.svg`
- [ ] 商品、分类、关于我们、批发页面的文案
- [ ] `app/data/policies.ts` 政策页按实际业务修改，建议请律师审核
- [ ] 配好 Resend 并测试询盘能收到
- [ ] 在 Google Search Console 提交 `https://你的域名/sitemap_index.xml`
- [ ] 需要统计时在 `site.ts` 里填 `gaId`（填了之后会自动显示 Cookie 同意横幅）

## 多语言（英文 + 中文）

英文网址不带前缀（`/products/xxx`），中文带 `/zh` 前缀（`/zh/products/xxx`）。页头右上角可以切换语言；不会按浏览器语言自动跳转，默认都显示英文。

翻译分三处维护：

| 内容 | 位置 | 写法 |
|---|---|---|
| 按钮、菜单等界面文案 | `i18n/locales/en.json`、`zh.json` | 两个文件的键名保持一致 |
| 商品、分类、博客、政策页 | `app/data/*.ts` | 每条数据的 `i18n.zh` 里写中文，**没写的字段自动显示英文** |
| 首页、关于、批发、联系、FAQ 的长文案 | 对应的 `app/pages/**.vue` | 页面顶部 `useLocaleContent({ en: {...}, zh: {...} })` |

商品示例：

```ts
{
  handle: 'tennis-bracelet',
  title: 'Tennis Bracelet',
  summary: '...',
  // ...
  i18n: {
    zh: { title: '满钻网球手链', summary: '...' },
  },
}
```

SEO 已自动处理：每个页面都有 `hreflang` 备用语言链接、各自的 canonical、`<html lang>`，网站地图分为 `en-US.xml` 和 `zh-CN.xml`。

**再加一种语言**（如德语）：
1. `nuxt.config.ts` 的 `i18n.locales` 里加 `{ code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' }`，`routes` 那里也加上 `/de` 前缀的路由
2. 新建 `i18n/locales/de.json`
3. `app/data/types.ts` 的 `ExtraLocale` 改成 `'zh' | 'de'`，然后在数据和页面里补 `de` 的内容
