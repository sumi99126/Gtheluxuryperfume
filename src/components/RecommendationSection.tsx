import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CLIENT_PRODUCTS } from '../data/perfumes';

interface RecommendationSectionProps {
  onNavigateShop?: () => void;
  onSelectProduct?: (product: any) => void;
}

export const RecommendationSection: React.FC<RecommendationSectionProps> = ({ onNavigateShop, onSelectProduct }) => {
  const { addToCart, formatPrice } = useCart();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  // 4 curated products mapped to the portrait editorial photoshoot matching reference
  const recommendations = [
    {
      product: CLIENT_PRODUCTS[0], // Hubb
      name: 'Hubb (حُبّ)',
      notes: 'Fruity · Warm · Vanilla · Sweet',
      image: '/rec_hubb.png',
      price: CLIENT_PRODUCTS[0].priceAED
    },
    {
      product: CLIENT_PRODUCTS[3], // Paradise Oud
      name: 'Paradise Oud',
      notes: 'Amber · Warm Spicy · Balsamic · Musky',
      image: '/rec_paradise_oud.png',
      price: CLIENT_PRODUCTS[3].priceAED
    },
    {
      product: CLIENT_PRODUCTS[1], // Legacy 709
      name: 'Legacy 709',
      notes: 'Smoky Leather · Saffron · Aged Oud',
      image: '/rec_legacy709.png',
      price: CLIENT_PRODUCTS[1].priceAED
    },
    {
      product: CLIENT_PRODUCTS[4], // Majnoon
      name: 'Majnoon (مجنون)',
      notes: 'Taif Rose · Fresh Musk · Floral Velvet',
      image: '/rec_majnoon.png',
      price: CLIENT_PRODUCTS[4].priceAED
    }
  ];

  const handleQuickAdd = (product: typeof CLIENT_PRODUCTS[0]) => {
    addToCart(product as any, '100ml', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleScrollToCollection = () => {
    if (onNavigateShop) {
      onNavigateShop();
    } else {
      const el = document.getElementById('collection-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="recommendation-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 3.5vw, 3rem)'
        }}
      >
        {/* Top Header Row (Vertically Centered Alignment) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Left Text Block */}
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#8A7A68',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem 0'
              }}
            >
              CURATED FOR ROYALTY
            </p>

            <h2
              style={{
                fontFamily: "'Italiana', 'Cormorant Garamond', 'Prata', 'Playfair Display', serif",
                fontSize: 'clamp(1.9rem, 3.8vw, 3.1rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#1A1A1A',
                margin: 0,
                letterSpacing: '0.01em'
              }}
            >
              Our recommendation for<br />your personality
            </h2>
          </div>

          {/* Right Action Button (Gold Pill -> Hover Black) */}
          <button
            onClick={handleScrollToCollection}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#C5A059',
              color: '#FFFFFF',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.75rem 1.6rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(197, 160, 89, 0.35)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#C5A059';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>All Products</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 4-Column Portrait Product Grid (Matching Reference) */}
        <div
          className="home-recommendation-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.8rem)',
            width: '100%'
          }}
        >
          {recommendations.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const isJustAdded = addedId === item.product.id;

            return (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (onSelectProduct) onSelectProduct(item.product);
                }}
              >
                {/* Portrait Photography Card Container (3:4 ratio) */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '3 / 4',
                    overflow: 'hidden',
                    backgroundColor: '#F5F2EC',
                    position: 'relative',
                    marginBottom: '1rem',
                    borderRadius: '2px'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isHovered ? 'scale(1.04)' : 'scale(1.0)'
                    }}
                  />

                  {/* Floating Quick Add Button on Hover (Black/Gold, No Green) */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      opacity: isHovered || isJustAdded ? 1 : 0,
                      transform: isHovered || isJustAdded ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'all 0.3s ease',
                      zIndex: 3
                    }}
                  >
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handleQuickAdd(item.product);
                      }}
                      style={{
                        width: '100%',
                        backgroundColor: isJustAdded ? '#111111' : '#C5A059',
                        color: isJustAdded ? '#C5A059' : '#FFFFFF',
                        border: isJustAdded ? '1px solid #C5A059' : 'none',
                        borderRadius: '999px',
                        padding: '0.65rem 1rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        boxShadow: isJustAdded ? '0 4px 15px rgba(0, 0, 0, 0.35)' : '0 4px 15px rgba(197, 160, 89, 0.35)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => {
                        if (!isJustAdded) e.currentTarget.style.backgroundColor = '#111111';
                      }}
                      onMouseLeave={e => {
                        if (!isJustAdded) e.currentTarget.style.backgroundColor = '#C5A059';
                      }}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={14} color="#C5A059" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Details (Line 1: Name & Price | Line 2: Scent Notes) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {/* Line 1: Title (Left) + Price (Right) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.5rem'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#111111',
                        margin: 0,
                        letterSpacing: '0.01em'
                      }}
                    >
                      {item.name}
                    </h3>

                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#222222'
                      }}
                    >
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  {/* Line 2: Scent Notes Character Subtitle */}
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.76rem',
                      color: '#777777',
                      margin: 0,
                      lineHeight: 1.4
                    }}
                  >
                    {item.notes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
