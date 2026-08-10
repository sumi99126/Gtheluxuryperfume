import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Check, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CLIENT_PRODUCTS } from '../data/perfumes';

export const ProductCollection: React.FC = () => {
  const { addToCart, formatPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [inspectProduct, setInspectProduct] = useState<typeof CLIENT_PRODUCTS[0] | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = ['ALL', 'PRIVATE RESERVE', 'ROYAL OUD', 'FLORAL & MUSK'];

  const filteredProducts = selectedCategory === 'ALL'
    ? CLIENT_PRODUCTS
    : CLIENT_PRODUCTS.filter(p => p.category.toUpperCase() === selectedCategory);

  const handleAddToCart = (product: typeof CLIENT_PRODUCTS[0]) => {
    addToCart(product as any, '100ml', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="collection-section"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '4.5rem',
        paddingBottom: '6rem',
        width: '100%',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2.5rem)'
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.2rem',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#C5A059',
              letterSpacing: '0.06em',
              marginBottom: '0.75rem'
            }}
          >
            Curated Haute Parfumerie • Dubai
          </p>

          <h2
            className="font-catilde"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              color: '#111111',
              margin: '0 0 1rem 0'
            }}
          >
            THE PRIVATE COLLECTION
          </h2>

          <p
            style={{
              maxWidth: '650px',
              margin: '0 auto 2.5rem auto',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.88rem',
              color: '#666666',
              lineHeight: 1.6
            }}
          >
            Mastercrafted extraits de parfum formulated in Dubai. Distilled in micro-batches with pure agarwood oud, Taif damask roses, and rare ambergris.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}
          >
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isActive ? '#111111' : '#FAF8F5',
                    color: isActive ? '#FFFFFF' : '#333333',
                    border: '1px solid',
                    borderColor: isActive ? '#111111' : '#EAE6DF',
                    borderRadius: '999px',
                    padding: '0.55rem 1.4rem',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#C5A059';
                      e.currentTarget.style.color = '#C5A059';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#EAE6DF';
                      e.currentTarget.style.color = '#333333';
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            width: '100%'
          }}
        >
          {filteredProducts.map(product => {
            const isJustAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#FAF8F5',
                  borderRadius: '12px',
                  border: '1px solid #EFECE6',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 35px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#C5A059';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#EFECE6';
                }}
              >
                {/* Arabic Name Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#8E6516',
                    zIndex: 2
                  }}
                >
                  {product.arabicName}
                </div>

                {/* Bestseller Badge */}
                {product.isBestseller && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#111111',
                      color: '#F7E7C4',
                      fontSize: '0.65rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      zIndex: 2
                    }}
                  >
                    <Sparkles size={11} color="#C5A059" />
                    <span>BESTSELLER</span>
                  </div>
                )}

                {/* Bottle Packshot Image Container */}
                <div
                  style={{
                    width: '100%',
                    height: '320px',
                    padding: '2rem 1.5rem 1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    borderBottom: '1px solid #EFECE6',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onClick={() => setInspectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />
                </div>

                {/* Card Details Body */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Scent Notes Summary Tag */}
                    <div
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: '#A87D25',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem'
                      }}
                    >
                      {product.notesSummary}
                    </div>

                    {/* Product Name */}
                    <h3
                      className="font-catilde"
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#111111',
                        margin: '0 0 0.25rem 0',
                        cursor: 'pointer'
                      }}
                      onClick={() => setInspectProduct(product)}
                    >
                      {product.name}
                    </h3>

                    {/* Volume & Concentration */}
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: '#777777',
                        fontFamily: "'Montserrat', sans-serif",
                        margin: '0 0 1rem 0'
                      }}
                    >
                      {product.volume}
                    </p>
                  </div>

                  {/* Price & Action Buttons */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginBottom: '1rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: '#111111'
                        }}
                      >
                        {formatPrice(product.priceAED)}
                      </span>

                      <button
                        onClick={() => setInspectProduct(product)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#666666',
                          fontSize: '0.72rem',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          padding: 0
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
                      >
                        Discover Notes
                      </button>
                    </div>

                    {/* Quick Add Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      style={{
                        width: '100%',
                        backgroundColor: isJustAdded ? '#2E7D32' : '#111111',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '999px',
                        padding: '0.75rem 1rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={e => {
                        if (!isJustAdded) {
                          e.currentTarget.style.backgroundColor = '#C5A059';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isJustAdded) {
                          e.currentTarget.style.backgroundColor = '#111111';
                        }
                      }}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={15} />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fragrance Notes Inspector Modal */}
      {inspectProduct && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 9999
          }}
          onClick={() => setInspectProduct(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              maxWidth: '650px',
              width: '100%',
              borderRadius: '14px',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setInspectProduct(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#FAF8F5',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#111'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.2rem',
                  color: '#C5A059',
                  fontStyle: 'italic',
                  fontWeight: 600
                }}
              >
                {inspectProduct.arabicName}
              </span>

              <h2
                className="font-catilde"
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#111',
                  margin: '0.25rem 0'
                }}
              >
                {inspectProduct.name}
              </h2>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.8rem',
                  color: '#666'
                }}
              >
                {inspectProduct.subtitle}
              </p>
            </div>

            {/* Olfactory Pyramid */}
            <div
              style={{
                backgroundColor: '#FAF8F5',
                padding: '1.5rem',
                borderRadius: '10px',
                marginBottom: '1.75rem'
              }}
            >
              <h4
                style={{
                  fontSize: '0.78rem',
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#8E6516',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}
              >
                Olfactory Pyramid Notes
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111' }}>TOP NOTES: </span>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    {inspectProduct.notes.top.join(' • ')}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111' }}>HEART NOTES: </span>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    {inspectProduct.notes.heart.join(' • ')}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111' }}>BASE NOTES: </span>
                  <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    {inspectProduct.notes.base.join(' • ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote / Tagline */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#444',
                textAlign: 'center',
                marginBottom: '1.75rem',
                lineHeight: 1.5
              }}
            >
              "{inspectProduct.quote}"
            </p>

            {/* Action Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                borderTop: '1px solid #EFECE6',
                paddingTop: '1.25rem'
              }}
            >
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#111'
                }}
              >
                {formatPrice(inspectProduct.priceAED)}
              </span>

              <button
                className="btn-pill-dark"
                onClick={() => {
                  handleAddToCart(inspectProduct);
                  setInspectProduct(null);
                }}
              >
                <ShoppingBag size={15} style={{ marginRight: '0.5rem' }} />
                <span>Add to Bag</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
