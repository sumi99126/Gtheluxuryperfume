import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CLIENT_PRODUCTS, PerfumeProduct } from '../data/perfumes';

interface SpotlightShowcaseProps {
  onNavigateShop?: () => void;
  onSelectProduct?: (product: PerfumeProduct) => void;
}

export const SpotlightShowcase: React.FC<SpotlightShowcaseProps> = ({ onSelectProduct }) => {
  const { addToCart, formatPrice } = useCart();
  const [selectedProductId, setSelectedProductId] = useState<string>(CLIENT_PRODUCTS[0].id);
  const [addedId, setAddedId] = useState<string | null>(null);

  // Right side 4 products matching the client lineup
  const rightProducts = [
    CLIENT_PRODUCTS[0], // Hubb
    CLIENT_PRODUCTS[1], // Legacy 709
    CLIENT_PRODUCTS[2], // Majestic Oud
    CLIENT_PRODUCTS[3]  // Paradise Oud
  ];

  const handleAddToCart = (product: PerfumeProduct, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    addToCart(product, '100ml', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="spotlight-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '3.5rem',
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
        {/* Left-Aligned Section Header (Matching Recommendation Style) */}
        <div style={{ marginBottom: '2.5rem' }}>
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
            DUBAI HAUTE PARFUMERIE
          </p>

          <h2
            style={{
              fontFamily: "'Italiana', 'Cormorant Garamond', 'Prata', 'Playfair Display', serif",
              fontSize: 'clamp(1.9rem, 3.8vw, 3.1rem)',
              fontWeight: 400,
              lineHeight: 1.18,
              color: '#1A1A1A',
              margin: 0,
              letterSpacing: '0.01em'
            }}
          >
            Signature masterpieces for<br />your royal presence
          </h2>
        </div>

        {/* 2-Column Split Layout */}
        <div
          className="spotlight-showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 2rem)',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Big Pure Flora Spotlight Image (Clean - NO Text Overlay) */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#0F0E14',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
              height: '100%',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/spotlight_flora.png"
              alt="Flora Extrait de Parfum"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>

          {/* Right Column: 4 Sleek Product Rows with Compact Spacing */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              justifyContent: 'space-between'
            }}
          >
            {rightProducts.map(item => {
              const isSelected = selectedProductId === item.id;
              const isJustAdded = addedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedProductId(item.id);
                    onSelectProduct?.(item);
                  }}
                  style={{
                    backgroundColor: isSelected ? '#FFFFFF' : '#FAF8F5',
                    border: '1px solid',
                    borderColor: isSelected ? '#C5A059' : '#EFECE6',
                    borderRadius: '10px',
                    padding: '0.85rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 8px 25px rgba(197, 160, 89, 0.12)'
                      : '0 2px 8px rgba(0, 0, 0, 0.02)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={e => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#C5A059';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#EFECE6';
                      e.currentTarget.style.backgroundColor = '#FAF8F5';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {/* Left Info: Name & Price */}
                  <div style={{ flexGrow: 1 }}>
                    <div
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: '#A87D25',
                        textTransform: 'uppercase',
                        marginBottom: '0.15rem'
                      }}
                    >
                      {item.arabicName}
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: '#111111',
                        margin: '0 0 0.25rem 0',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {item.name}
                    </h4>

                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#777777',
                        fontFamily: "'Montserrat', sans-serif",
                        marginBottom: '0.5rem'
                      }}
                    >
                      {item.notesSummary}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: '0.98rem',
                          fontWeight: 700,
                          color: '#111111'
                        }}
                      >
                        {formatPrice(item.priceAED)}
                      </span>

                      <button
                        onClick={e => handleAddToCart(item, e)}
                        style={{
                          backgroundColor: isJustAdded ? '#2E7D32' : '#111111',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '999px',
                          padding: '0.35rem 0.95rem',
                          fontSize: '0.66rem',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => {
                          if (!isJustAdded) e.currentTarget.style.backgroundColor = '#C5A059';
                        }}
                        onMouseLeave={e => {
                          if (!isJustAdded) e.currentTarget.style.backgroundColor = '#111111';
                        }}
                      >
                        {isJustAdded ? <Check size={11} /> : <ShoppingBag size={11} />}
                        <span>{isJustAdded ? 'Added' : 'Add to Bag'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Thumbnail Packshot (Neat Rounded Card Box) */}
                  <div
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '8px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EAE6DF',
                      padding: '0.3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
