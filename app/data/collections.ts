import type { Collection } from './types'

export const collections: Collection[] = [
  {
    handle: 'rings',
    title: 'Rings',
    description: 'Stackable bands, statement signets and everyday solitaires in sterling silver and gold vermeil.',
    image: '/images/collections/rings.svg',
    i18n: {
      zh: { title: '戒指', description: '925 银与 18K 包金材质的叠戴指环、印章戒和日常单钻戒。' },
    },
  },
  {
    handle: 'necklaces',
    title: 'Necklaces',
    description: 'Delicate chains and meaningful pendants designed for layering.',
    image: '/images/collections/necklaces.svg',
    i18n: {
      zh: { title: '项链', description: '纤细链条与寓意吊坠，适合叠戴搭配。' },
    },
  },
  {
    handle: 'earrings',
    title: 'Earrings',
    description: 'Hypoallergenic studs, huggies and drops for every occasion.',
    image: '/images/collections/earrings.svg',
    i18n: {
      zh: { title: '耳饰', description: '防过敏耳钉、贴耳圈和耳坠，适合各种场合。' },
    },
  },
  {
    handle: 'bracelets',
    title: 'Bracelets',
    description: 'Tennis bracelets, bangles and fine chains made to be worn every day.',
    image: '/images/collections/bracelets.svg',
    i18n: {
      zh: { title: '手链', description: '满钻手链、手镯和细手链，适合日常佩戴。' },
    },
  },
]

export const findCollection = (handle: string) => collections.find(c => c.handle === handle)
