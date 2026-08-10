import React, { useState } from 'react';
import { ShoppingBag, Star, Droplets, Check } from 'lucide-react';
import { Perfume } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  perfume: Perfume;
}

export const ProductCard: React.FC<ProductCardProps> = ({ perfume }) => {
  const { addToCart, formatPrice } = useCart();
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml' | '200ml Flacon'>('100ml');
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  // Price calculations based on size
  const multiplier = selectedSize === '50ml' ? 0.7 : selectedSize === '200ml Flacon' ? 1.75 : 1.0;
  const currentPriceAED = perfume.priceAED * multiplier;

  const handleAddToCart = () => {
    addToCart(perfume, selectedSize, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1600);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #131217 0%, #0a0a0c 100%)',
        border: '1px solid rgba(212, 175, 55, 0.22)',
        borderRadius: '6px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.35s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.22)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top Badges */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          right: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            background: 'rgba(10, 10, 12, 0.85)',
            border: '1px solid #D4AF37',
            padding: '0.25rem 0.65rem',
            borderRadius: '2px',
            fontSize: '0.68rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.1em',
            color: '#FFDF78',
            backdropFilter: 'blur(8px)'
          }}
        >
          {perfume.category}
        </span>

        {perfume.isBestseller && (
          <span
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #996515)',
              color: '#000',
              padding: '0.25rem 0.65rem',
              borderRadius: '2px',
              fontSize: '0.68rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            BESTSELLER
          </span>
        )}
      </div>

      {/* Fragrance Flacon Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '320px',
          background: '#09090C',
          overflow: 'hidden'
        }}
      >
        <img
          src={perfume.image}
          alt={perfume.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 65%, #0a0a0c 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Product Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Rating & Longevity */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem',
            fontSize: '0.75rem',
            color: '#A0A0A5'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#D4AF37' }}>
            <Star size={13} fill="#D4AF37" />
            <span style={{ fontWeight: 700, color: '#FFF' }}>{perfume.rating.toFixed(1)}</span>
            <span style={{ color: '#888' }}>({perfume.reviewsCount})</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#C5A059' }}>
            <Droplets size={12} />
            <span>{perfume.longevity}</span>
          </div>
        </div>

        {/* Perfume Arabic & English Title */}
        {perfume.arabicName && (
          <p
            style={{
              fontFamily: 'serif',
              fontSize: '1rem',
              color: '#D4AF37',
              letterSpacing: '0.08em',
              marginBottom: '0.2rem',
              direction: 'rtl'
            }}
          >
            {perfume.arabicName}
          </p>
        )}

        <h3
          className="font-cinzel"
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '0.25rem'
          }}
        >
          {perfume.name}
        </h3>

        <p style={{ fontSize: '0.8rem', color: '#8E8E93', marginBottom: '0.85rem' }}>
          {perfume.subtitle}
        </p>

        {/* Scent Notes Key Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          <span className="note-badge">Top: {perfume.notes.top[0]}</span>
          <span className="note-badge">Heart: {perfume.notes.heart[0]}</span>
          <span className="note-badge">Base: {perfume.notes.base[0]}</span>
        </div>

        {/* Size Selection Pills */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              color: '#8E8E93',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.4rem'
            }}
          >
            Select Flacon Size:
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
            {(['50ml', '100ml', '200ml Flacon'] as const).map(size => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '0.4rem 0.2rem',
                    background: isSelected ? 'rgba(212, 175, 55, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected ? '1px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.2)',
                    color: isSelected ? '#FFDF78' : '#A0A0A5',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Add to Cart Trigger */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div>
            <span style={{ fontSize: '0.68rem', color: '#888', display: 'block' }}>Price</span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#F5E6B8'
              }}
            >
              {formatPrice(currentPriceAED)}
            </span>
          </div>

          {/* Add to Cart Button (Slides Open Right Panel) */}
          <button
            onClick={handleAddToCart}
            style={{
              flex: 1,
              padding: '0.75rem',
              background: isAddedRecently
                ? '#22C55E'
                : 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              border: 'none',
              borderRadius: '2px',
              color: '#080808',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
            }}
            onMouseEnter={e => {
              if (!isAddedRecently) {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.45)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={e => {
              if (!isAddedRecently) {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isAddedRecently ? (
              <>
                <Check size={15} color="#000" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} color="#000" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
