import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PERFUMES } from '../data/perfumes';
import { ProductCard } from './ProductCard';

export const FeaturedCollection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Extraits');

  const categories = [
    'All Extraits',
    'Private Reserve',
    'Royal Oud',
    'Amber & Spices',
    'Floral & Musk'
  ];

  const filteredPerfumes = selectedCategory === 'All Extraits'
    ? PERFUMES
    : PERFUMES.filter(p => p.category === selectedCategory);

  return (
    <section
      id="collection-section"
      style={{
        padding: '6rem 0',
        background: '#070709',
        position: 'relative'
      }}
    >
      {/* Background Decorative Gold Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />

      <div className="container-luxury" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#D4AF37',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}
          >
            <Sparkles size={13} />
            <span>THE CURATED VAULT</span>
            <Sparkles size={13} />
          </div>

          <h2
            className="font-cinzel"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.08em',
              marginBottom: '1rem'
            }}
          >
            ROYAL DUBAI <span className="gold-text-shimmer">EXTRAITS</span>
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#A3A3A8', lineHeight: 1.6 }}>
            Each master flacon is hand-filled, numbered, and formulated with rare botanical absolutes and pure Arabian agarwood oils for eternal sillage.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  background: isActive ? 'linear-gradient(135deg, #D4AF37 0%, #996515 100%)' : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? '1px solid #FFDF78' : '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '2px',
                  color: isActive ? '#080808' : '#D0D0D5',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredPerfumes.map(perfume => (
            <ProductCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
};
