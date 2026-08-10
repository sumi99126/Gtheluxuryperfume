export type CurrencyCode = 'AED' | 'USD' | 'EUR' | 'GBP';

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to AED (1 AED = 1)
  label: string;
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface PerfumeProduct {
  id: string;
  name: string;
  arabicName?: string;
  subtitle: string;
  tagline: string;
  quote?: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  volume: string;
  flaconType?: string;
  notes: FragranceNotes;
  notesSummary?: string;
  image: string;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isLimitedEdition?: boolean;
  intensity?: number;
}

export interface Perfume {
  id: string;
  name: string;
  arabicName?: string;
  subtitle: string;
  tagline: string;
  category: 'Royal Oud' | 'Amber & Spices' | 'Floral & Musk' | 'Private Reserve' | string;
  priceAED: number;
  originalPriceAED?: number;
  volume: string;
  concentration?: string; // e.g. "Extrait de Parfum (35% Oil Concentration)"
  longevity?: string; // e.g. "18+ Hours Royal Sillage"
  description?: string;
  notes: FragranceNotes;
  image: string;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isLimitedEdition?: boolean;
  intensity?: number; // 1 to 5
}

export interface CartItem {
  cartItemId: string; // unique combination of id + size
  perfume: Perfume | PerfumeProduct;
  quantity: number;
  selectedSize: '50ml' | '100ml' | '200ml Flacon' | 'sample';
  priceMultiplier: number; // 50ml = 0.65, 100ml = 1.0, 200ml = 1.8, sample = 0.15
}

export interface ComplimentaryOption {
  giftWrapping: boolean;
  selectedSample: string | null;
  giftCardMessage: string;
}

