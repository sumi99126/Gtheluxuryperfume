import { Perfume, PerfumeProduct, CurrencyInfo, CurrencyCode } from '../types';
export type { PerfumeProduct };

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  AED: { code: 'AED', symbol: 'AED ', rate: 1.0, label: 'UAE Dirham (AED)' },
  USD: { code: 'USD', symbol: '$', rate: 0.272, label: 'US Dollar ($)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.252, label: 'Euro (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.215, label: 'British Pound (£)' },
};

export const BRAND_PHONE = '+971 56 570 5449';
export const BRAND_WHATSAPP = '971565705449';
export const BRAND_INSTAGRAM = 'https://www.instagram.com/gtheluxuryfragrance/';

export const CLIENT_PRODUCTS: PerfumeProduct[] = [
  {
    id: 'hubb-love-bottled',
    name: 'Hubb',
    arabicName: 'حُبّ',
    subtitle: 'Extrait de Parfum • 100 ML',
    tagline: 'Love, Bottled. Timeless, Like You.',
    quote: 'Some scents speak to the world. This one speaks to the heart.',
    category: 'Private Reserve',
    priceAED: 850,
    volume: '100 ML Extrait de Parfum',
    flaconType: 'Royal Crimson Red & Gold Dome with Dubai Skyline Plate',
    notes: {
      top: ['Sparkling Bergamot', 'Luscious Red Fruits'],
      heart: ['Sweet Floral Nectar', 'Bourbon Vanilla Infusion'],
      base: ['Rich Golden Patchouli', 'Warm Velvet Musk']
    },
    notesSummary: 'Fruity | Sweet | Bergamot | Vanilla | Patchouli',
    image: '/packshot_hubb.png',
    rating: 5.0,
    reviewsCount: 124,
    isBestseller: true
  },
  {
    id: 'legacy-709',
    name: 'Legacy 709',
    arabicName: 'ليجاسي 709',
    subtitle: 'Extrait de Parfum • 100 ML',
    tagline: 'Legacy Beyond Time',
    quote: 'Crafted with passion. Worn with distinction.',
    category: 'Private Reserve',
    priceAED: 920,
    volume: '100 ML Extrait de Parfum',
    flaconType: 'Matte Obsidian Black & Gold Dome with Dubai Skyline 709 Plate',
    notes: {
      top: ['Imperial Saffron', 'Smoky Bergamot', 'Black Pepper'],
      heart: ['Royal Agarwood Resin', 'Smoked Leather', 'Amber Crystals'],
      base: ['Aged Cambodian Oud', 'Dark Musk', 'Cedarwood']
    },
    notesSummary: 'Smoky Leather | Royal Saffron | Aged Oud | Ambergris',
    image: '/packshot_legacy709.png',
    rating: 4.9,
    reviewsCount: 98,
    isBestseller: true
  },
  {
    id: 'majestic-oud',
    name: 'Majestic Oud',
    arabicName: 'ماجستيك عود',
    subtitle: 'Extrait de Parfum • 100 ML',
    tagline: 'The Crown of Arabian Perfumery',
    quote: 'A regal declaration of power, heritage, and timeless sillage.',
    category: 'Royal Oud',
    priceAED: 890,
    volume: '100 ML Extrait de Parfum',
    flaconType: 'Royal Crimson Red & Gold Dome with Dubai Skyline Plate',
    notes: {
      top: ['Incense Smoke', 'Pink Peppercorn', 'Cardamom'],
      heart: ['Wild Assam Agarwood', 'Guaiacwood', 'Moroccan Amber'],
      base: ['Cambodian Dark Oud', 'Tonka Bean', 'Precious Sandalwood']
    },
    notesSummary: 'Smoky Incense | Wild Assam Oud | Amber Resin | Tonka',
    image: '/packshot_majestic_oud.png',
    rating: 4.9,
    reviewsCount: 86
  },
  {
    id: 'paradise-oud',
    name: 'Paradise Oud',
    arabicName: 'بارادايس عود',
    subtitle: 'Extrait de Parfum • 50 ML',
    tagline: "Some scents don't follow you. They define you.",
    quote: 'An emerald jewel capturing the deep balsamic warmth of mythical Arabian gardens.',
    category: 'Royal Oud',
    priceAED: 650,
    volume: '50 ML Extrait de Parfum',
    flaconType: 'Heavy Emerald Green Glass with 24K Gold Faceted Cap',
    notes: {
      top: ['Warm Spices', 'Amber Crystals', 'Golden Frankincense'],
      heart: ['Balsamic Resins', 'Rich Agarwood Agar', 'Honeyed Woods'],
      base: ['Velvet Musk', 'Smoky Ambergris', 'Dark Sandalwood']
    },
    notesSummary: 'Amber • Oud • Warm Spicy • Balsamic • Musky',
    image: '/packshot_paradise_oud.png',
    rating: 5.0,
    reviewsCount: 110,
    isBestseller: true
  },
  {
    id: 'majnoon',
    name: 'Majnoon',
    arabicName: 'مجنون',
    subtitle: 'Extrait de Parfum • 50 ML',
    tagline: 'حيث يلتقي الشرق بالفخامة (Where the East Meets Luxury)',
    quote: 'وردٌ يهمس بالجمال • عودٌ يكتب الحضور • انتعاشٌ يدوم • زهورٌ تروي الذكريات',
    category: 'Floral & Musk',
    priceAED: 590,
    volume: '50 ML Extrait de Parfum',
    flaconType: 'Heavy Crystal Clear Glass with 24K Gold Faceted Cap',
    notes: {
      top: ['Taif Damask Rose Absolute', 'Sparkling Morning Dew', 'Neroli'],
      heart: ['Whispering Floral Bouquet', 'Aromatic Agarwood', 'Iris'],
      base: ['Enduring White Musk', 'Cashmere Woods', 'Precious Amber']
    },
    notesSummary: 'Taif Damask Rose • Rare Agarwood • Enduring Fresh Musk • Floral Memory',
    image: '/packshot_majnoon.png',
    rating: 4.8,
    reviewsCount: 75,
    isNewArrival: true
  },
  {
    id: 'flora-extrait',
    name: 'Flora',
    arabicName: 'فلورا',
    subtitle: 'Extrait de Parfum • 50 ML',
    tagline: "A fragrance that captures the essence of nature's beauty.",
    quote: "A luminous ruby elixir radiating fresh citrus, delicate morning blossoms, and succulent nectar.",
    category: 'Floral & Musk',
    priceAED: 590,
    volume: '50 ML Extrait de Parfum',
    flaconType: 'Radiant Ruby Red Glass with 24K Gold Faceted Square Cap',
    notes: {
      top: ['Sparkling Italian Citrus', 'Dewy Morning Petals'],
      heart: ['Succulent Red Fruits', 'Luminous Jasmine', 'Magnolia'],
      base: ['Soft White Amber', 'Sheer Velvet Musk']
    },
    notesSummary: 'Fresh • Citrus • Fruity • Floral',
    image: '/spotlight_flora.png',
    rating: 5.0,
    reviewsCount: 68,
    isNewArrival: true
  }
];

export const PERFUMES: Perfume[] = CLIENT_PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  arabicName: p.arabicName,
  subtitle: p.subtitle,
  tagline: p.tagline,
  category: p.category as any,
  priceAED: p.priceAED,
  volume: p.volume,
  concentration: 'Extrait de Parfum (35% Pure Oil Concentration)',
  longevity: '18+ Hours Royal Sillage',
  description: p.quote || p.tagline,
  notes: {
    top: p.notes.top,
    heart: p.notes.heart,
    base: p.notes.base
  },
  image: p.image,
  rating: p.rating,
  reviewsCount: p.reviewsCount,
  isBestseller: p.isBestseller,
  intensity: p.intensity || 5
}));

export const COMPLIMENTARY_SAMPLES = [
  'Hubb (5ml Discovery Vial)',
  'Legacy 709 (5ml Discovery Vial)',
  'Majestic Oud (5ml Discovery Vial)',
  'Paradise Oud (5ml Discovery Vial)',
  'Majnoon (5ml Discovery Vial)'
];

export const FREE_SHIPPING_THRESHOLD_AED = 500;
