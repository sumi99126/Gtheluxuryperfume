import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Perfume, PerfumeProduct, CurrencyCode } from '../types';
import { CURRENCIES, COMPLIMENTARY_SAMPLES, FREE_SHIPPING_THRESHOLD_AED } from '../data/perfumes';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (perfume: Perfume | PerfumeProduct, size?: '50ml' | '100ml' | '200ml Flacon' | 'sample', quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, deltaOrExact: number, isDirectSet?: boolean) => void;
  clearCart: () => void;
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (priceAED: number) => string;
  totalItems: number;
  subtotalAED: number;
  isFreeShipping: boolean;
  freeShippingRemainingAED: number;
  complimentarySample: string;
  setComplimentarySample: (sample: string) => void;
  isGiftWrapping: boolean;
  setIsGiftWrapping: (wrap: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Initial sample items to immediately showcase luxury cart state
    return [
      {
        cartItemId: 'g-signature-royal-dubai-100ml',
        perfume: {
          id: 'g-signature-royal-dubai',
          name: 'G Signature Royal Dubai',
          arabicName: 'توقيع دبي الملكي',
          subtitle: 'Grand Reserve Extrait de Parfum',
          tagline: 'The ultimate olfactory crowning of Arabian majesty.',
          category: 'Private Reserve',
          priceAED: 1450,
          originalPriceAED: 1750,
          volume: '100ml / 3.4 FL. OZ.',
          concentration: 'Extrait de Parfum (38% Pure Oil)',
          longevity: '24+ Hours Royal Sillage',
          description: 'Distilled in micro-batches in Dubai with aged Cambodian agarwood and Taif roses.',
          notes: {
            top: ['Imperial Saffron', 'Bergamot'],
            heart: ['Taif Rose', 'Golden Honeycomb'],
            base: ['Cambodian Oud', 'Black Ambergris']
          },
          image: '/hero_perfume.png',
          rating: 5.0,
          reviewsCount: 142,
          intensity: 5
        },
        quantity: 1,
        selectedSize: '100ml',
        priceMultiplier: 1.0
      }
    ];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('AED');
  const [complimentarySample, setComplimentarySample] = useState(COMPLIMENTARY_SAMPLES[0]);
  const [isGiftWrapping, setIsGiftWrapping] = useState(true);

  // Prevent background scroll when cart drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  const addToCart = (
    perfume: Perfume | PerfumeProduct,
    size: '50ml' | '100ml' | '200ml Flacon' | 'sample' = '100ml',
    quantity: number = 1
  ) => {
    const sizeMultiplier = size === '50ml' ? 0.7 : size === 'sample' ? 0.15 : size === '200ml Flacon' ? 1.75 : 1.0;
    const cartItemId = `${perfume.id}-${size}`;

    setItems(prevItems => {
      const existing = prevItems.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prevItems.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevItems,
        {
          cartItemId,
          perfume,
          quantity,
          selectedSize: size,
          priceMultiplier: sizeMultiplier
        }
      ];
    });

    // Automatically slide open the right cart panel as requested by user
    setIsOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, deltaOrExact: number, isDirectSet: boolean = false) => {
    setItems(prev =>
      prev
        .map(item => {
          if (item.cartItemId === cartItemId) {
            const newQty = isDirectSet ? deltaOrExact : item.quantity + deltaOrExact;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotalAED = items.reduce((acc, item) => {
    const itemPrice = item.perfume.priceAED * item.priceMultiplier;
    return acc + itemPrice * item.quantity;
  }, 0);

  const isFreeShipping = subtotalAED >= FREE_SHIPPING_THRESHOLD_AED;
  const freeShippingRemainingAED = Math.max(0, FREE_SHIPPING_THRESHOLD_AED - subtotalAED);

  const formatPrice = (priceAED: number): string => {
    const curr = CURRENCIES[currency];
    const converted = priceAED * curr.rate;
    const formatted = Math.round(converted).toLocaleString('en-US');
    return `${curr.symbol}${formatted}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        currency,
        setCurrency,
        formatPrice,
        totalItems,
        subtotalAED,
        isFreeShipping,
        freeShippingRemainingAED,
        complimentarySample,
        setComplimentarySample,
        isGiftWrapping,
        setIsGiftWrapping
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
