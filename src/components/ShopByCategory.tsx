import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CLIENT_PRODUCTS } from '../data/perfumes';

export const ShopByCategory: React.FC = () => {
  const { addToCart } = useCart();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = [
    {
      id: 'royal-oud',
      title: 'ROYAL OUD & NOIR',
      arabic: 'العود الملكي الفاخر',
      tagline: 'Deep, smoky, and commanding royal authority.',
      notes: 'Cambodian Agarwood · Saffron · Smoked Leather · Ambergris',
      featured: 'Featuring Legacy 709 & Majestic Oud',
      product: CLIENT_PRODUCTS[1], // Legacy 709
      image: '/cat_oud_noir.png',
      count: '2 Extraits'
    },
    {
      id: 'floral-musk',
      title: 'VELVET FLORAL & MUSK',
      arabic: 'المسك والزهور المخملية',
      tagline: 'Velvety romance kissed by cool Taif desert morning breezes.',
      notes: 'Taif Damask Rose · Pure White Musk · Florentine Iris',
      featured: 'Featuring Majnoon',
      product: CLIENT_PRODUCTS[4], // Majnoon
      image: '/cat_floral_musk.png',
      count: '2 Extraits'
    },
    {
      id: 'amber-gourmand',
      title: 'WARM AMBER & GOURMAND',
      arabic: 'العنبر الدافئ والفانيليا',
      tagline: 'Sun-drenched golden warmth with intoxicating vanilla nectar.',
      notes: 'Bourbon Vanilla · Sweet Red Fruits · Molten Amber · Bergamot',
      featured: 'Featuring Hubb & Paradise Oud',
      product: CLIENT_PRODUCTS[0], // Hubb
      image: '/cat_amber_gourmand.png',
      count: '2 Extraits'
    }
  ];

  const handleCategoryAction = (product: typeof CLIENT_PRODUCTS[0]) => {
    addToCart(product as any, '100ml', 1);
  };

  return (
    <section
      id="categories-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '6rem',
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
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#C5A059',
              textTransform: 'uppercase',
              margin: '0 0 0.6rem 0'
            }}
          >
            CURATED SCENT FAMILIES
          </p>

          <h2
            className="font-catilde"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#111111',
              margin: '0 0 0.85rem 0',
              letterSpacing: '0.04em'
            }}
          >
            SHOP BY CATEGORY
          </h2>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.86rem',
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Immerse yourself into distinct olfactory realms, handcrafted in micro-batches with pure agarwood oud, velvet Taif roses, and molten amber.
          </p>
        </div>

        {/* 3 Large Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            width: '100%'
          }}
        >
          {categories.map((cat, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={cat.id}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '520px',
                  cursor: 'pointer',
                  boxShadow: isHovered
                    ? '0 20px 45px rgba(0, 0, 0, 0.14)'
                    : '0 10px 30px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleCategoryAction(cat.product)}
              >
                {/* Background Artwork Photography */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1.0)'
                  }}
                />

                {/* Dark Luxury Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 45%, rgba(10,10,10,0.92) 100%)',
                    transition: 'background 0.3s ease'
                  }}
                />

                {/* Top Badge (Arabic Monogram & Count) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 2
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.15rem',
                      fontStyle: 'italic',
                      color: '#F7E7C4',
                      fontWeight: 600,
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                    }}
                  >
                    {cat.arabic}
                  </span>

                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.18)',
                      backdropFilter: 'blur(10px)',
                      color: '#FFFFFF',
                      fontSize: '0.68rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    {cat.count}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '1.75rem',
                    right: '1.75rem',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <h3
                    className="font-catilde"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: '0 0 0.4rem 0',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.78rem',
                      color: '#D4CFC9',
                      margin: '0 0 0.8rem 0',
                      lineHeight: 1.4
                    }}
                  >
                    {cat.tagline}
                  </p>

                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: '#C5A059',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {cat.notes}
                  </div>

                  {/* Interactive Button */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1.4rem',
                      borderRadius: '999px',
                      backgroundColor: isHovered ? '#C5A059' : 'rgba(255, 255, 255, 0.95)',
                      color: isHovered ? '#FFFFFF' : '#111111',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span>Explore Category</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
