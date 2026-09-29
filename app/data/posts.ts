import type { Post } from './types'

export const posts: Post[] = [
  {
    handle: 'how-to-care-for-sterling-silver',
    title: 'How to Care for Your Sterling Silver Jewelry',
    date: '2026-09-01',
    excerpt: 'Simple habits that keep your silver bright for years.',
    image: '/images/products/necklace-1.svg',
    body: [
      'Sterling silver naturally reacts with sulphur in the air, which causes tarnish over time. The good news: a few simple habits keep your pieces looking new.',
      'Store each piece separately in an airtight pouch, take jewelry off before swimming or showering, and polish gently with a soft cloth once a month.',
      'For heavier tarnish, a mild solution of warm water and a drop of dish soap works well. Avoid toothpaste and baking soda, which can scratch the surface.',
    ],
    i18n: {
      zh: {
        title: '925 银饰保养指南',
        excerpt: '几个简单习惯，让你的银饰多年如新。',
        body: [
          '925 银会和空气中的硫发生反应，时间久了会氧化发黑。好在只要养成几个简单习惯，就能让首饰一直保持光亮。',
          '每件首饰分开装进密封袋保存；游泳、洗澡前摘下首饰；每月用软布轻轻擦拭一次。',
          '如果氧化比较严重，可以用温水加一滴洗洁精轻轻清洗。不要用牙膏或小苏打，它们会刮花表面。',
        ],
      },
    },
  },
]

export const findPost = (handle: string) => posts.find(p => p.handle === handle)
