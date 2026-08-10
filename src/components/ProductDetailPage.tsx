import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, ShoppingBag, MessageSquare, ArrowLeft, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PerfumeProduct, BRAND_WHATSAPP, CLIENT_PRODUCTS } from '../data/perfumes';

interface ProductDetailPageProps {
  product?: PerfumeProduct | null;
  onBackToShop: () => void;
  onSelectProduct: (product: PerfumeProduct) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product: rawProduct,
  onBackToShop,
  onSelectProduct
}) => {
  const { addToCart, formatPrice } = useCart();

  // Safe Fallback Product
  const product = rawProduct || CLIENT_PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml' | 'sample'>('100ml');
  const [quantity, setQuantity] = useState<number>(1);
  const [isJustAdded, setIsJustAdded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<'story' | 'notes' | 'shipping' | null>('story');
  const [activeImage, setActiveImage] = useState<string>(product.image || '/packshot_hubb.png');
  const [hoveredRelatedIndex, setHoveredRelatedIndex] = useState<number | null>(null);

  // Dynamic price based on size
  const basePrice = product.priceAED || 850;
  const calculatedPrice = selectedSize === '50ml'
    ? Math.round(basePrice * 0.72)
    : selectedSize === 'sample'
      ? 120
      : basePrice;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 2000);
  };

  // Safe Notes
  const topNotes = product.notes?.top || ['Sparkling Bergamot', 'Luscious Red Fruits'];
  const heartNotes = product.notes?.heart || ['Sweet Floral Nectar', 'Bourbon Vanilla Infusion'];
  const baseNotes = product.notes?.base || ['Rich Golden Patchouli', 'Warm Velvet Musk'];
  const productDescription = product.tagline || product.quote || (product as any).description || 'Crafted in the distinguished tradition of Arabian haute parfumerie, capturing the essence of royal opulence.';

  // Related products
  const relatedProducts = CLIENT_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key: 'story' | 'notes' | 'shipping') => {
    setActiveAccordion(prev => (prev === key ? null : key));
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* 1. Sleek Breadcrumb Bar */}
      <div
        style={{
          borderBottom: '1px solid #F0ECE4',
          backgroundColor: '#FAF8F5',
          padding: '1rem clamp(1rem, 3.5vw, 3rem)'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.74rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          {/* Back Button & Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button
              onClick={onBackToShop}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#111111',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: 600,
                padding: 0,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
              onMouseLeave={e => (e.currentTarget.style.color = '#111111')}
            >
              <ArrowLeft size={14} />
              <span>Collection</span>
            </button>
            <span style={{ color: '#CCCCCC' }}>/</span>
            <span style={{ color: '#888888' }}>Haute Parfumerie</span>
            <span style={{ color: '#CCCCCC' }}>/</span>
            <span style={{ color: '#C5A059', fontWeight: 600 }}>{product.name}</span>
          </div>

          <div style={{ color: '#888888', fontSize: '0.7rem' }}>
            Handcrafted in Dubai • 100% Extrait de Parfum
          </div>
        </div>
      </div>

      {/* 2. Main Product Showcase */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '2.5rem clamp(1rem, 3.5vw, 3rem) 4rem clamp(1rem, 3.5vw, 3rem)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4.5rem)',
            alignItems: 'start'
          }}
        >
          {/* LEFT COLUMN: Gallery Stage */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            {/* Main Stage Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                maxHeight: '480px',
                backgroundColor: '#FAF8F5',
                borderRadius: '12px',
                border: '1px solid #EFECE6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.03)'
              }}
            >
              <img
                src={activeImage || product.image}
                alt={product.name}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.12))',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Arabic Monogram Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid #EAE6DF',
                  fontSize: '0.88rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  color: '#A87D25',
                  fontWeight: 600
                }}
              >
                {product.arabicName || 'عطر'}
              </div>

              {/* Concentration Tag */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  fontSize: '0.64rem',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '999px',
                  textTransform: 'uppercase'
                }}
              >
                Extrait de Parfum
              </div>
            </div>

            {/* Micro Thumbnail Selector */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              {[product.image, '/packshot_hubb.png', '/rec_legacy709.png'].filter(Boolean).map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(imgUrl)}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    backgroundColor: '#FAF8F5',
                    border: '2px solid',
                    borderColor: activeImage === imgUrl ? '#C5A059' : '#EFECE6',
                    padding: '0.35rem',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img
                    src={imgUrl}
                    alt="Thumbnail view"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </button>
              ))}
            </div>

            {/* VIP Client Guarantees Box */}
            <div
              style={{
                backgroundColor: '#FAF8F5',
                borderRadius: '10px',
                border: '1px solid #EFECE6',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                fontSize: '0.74rem',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Truck size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: '#111111', marginBottom: '0.15rem' }}>Express Delivery</strong>
                  <span style={{ color: '#777777', fontSize: '0.68rem' }}>Complimentary across UAE</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <ShieldCheck size={16} color="#C5A059" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: '#111111', marginBottom: '0.15rem' }}>100% Authentic</strong>
                  <span style={{ color: '#777777', fontSize: '0.68rem' }}>Dubai Haute Parfumerie</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Fragrance Details & Purchase Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
            {/* Header Kicker & Rating */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#8A7A68'
                  }}
                >
                  HAUTE PARFUMERIE DUBAI
                </span>

                {/* 5-Star Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#C5A059" color="#C5A059" />
                  ))}
                  <span style={{ fontSize: '0.7rem', color: '#666666', marginLeft: '0.25rem', fontFamily: "'Montserrat', sans-serif" }}>
                    (4.9)
                  </span>
                </div>
              </div>

              {/* Perfume Name (Refined Size & Medium Weight) */}
              <h1
                style={{
                  fontFamily: "'Cinzel', 'Italiana', 'Marcellus', serif",
                  fontSize: 'clamp(1.35rem, 2.6vw, 1.85rem)',
                  fontWeight: 550,
                  color: '#111111',
                  margin: '0 0 0.4rem 0',
                  lineHeight: 1.2,
                  letterSpacing: '0.04em'
                }}
              >
                {product.name}
              </h1>

              {/* Price Banner (Refined Small Size) */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.25rem' }}>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                    fontWeight: 650,
                    color: '#C5A059'
                  }}
                >
                  {formatPrice(calculatedPrice)}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#888888', fontFamily: "'Montserrat', sans-serif" }}>
                  Inclusive of luxury presentation box &amp; taxes
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.84rem',
                color: '#555555',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              {productDescription}
            </p>

            {/* Olfactory Architecture Notes 3-Column / Grid */}
            <div
              style={{
                backgroundColor: '#FAF8F5',
                borderRadius: '10px',
                border: '1px solid #EFECE6',
                padding: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '0.66rem', fontWeight: 700, color: '#C5A059', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  TOP NOTES
                </span>
                <p style={{ margin: 0, fontSize: '0.72rem', color: '#444444', fontFamily: "'Montserrat', sans-serif" }}>
                  {topNotes.join(' • ')}
                </p>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid #EAE6DF', borderRight: '1px solid #EAE6DF', padding: '0 0.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.66rem', fontWeight: 700, color: '#C5A059', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  HEART NOTES
                </span>
                <p style={{ margin: 0, fontSize: '0.72rem', color: '#444444', fontFamily: "'Montserrat', sans-serif" }}>
                  {heartNotes.join(' • ')}
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '0.66rem', fontWeight: 700, color: '#C5A059', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  BASE NOTES
                </span>
                <p style={{ margin: 0, fontSize: '0.72rem', color: '#444444', fontFamily: "'Montserrat', sans-serif" }}>
                  {baseNotes.join(' • ')}
                </p>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  marginBottom: '0.6rem'
                }}
              >
                SELECT FLACON SIZE
              </label>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {[
                  { id: '100ml', label: '100 ML Extrait', priceDesc: formatPrice(basePrice) },
                  { id: '50ml', label: '50 ML Travel', priceDesc: formatPrice(Math.round(basePrice * 0.72)) },
                  { id: 'sample', label: '5 ML Discovery', priceDesc: formatPrice(120) }
                ].map(sizeOpt => {
                  const isSelected = selectedSize === sizeOpt.id;
                  return (
                    <button
                      key={sizeOpt.id}
                      onClick={() => setSelectedSize(sizeOpt.id as any)}
                      style={{
                        flex: '1 0 100px',
                        backgroundColor: isSelected ? '#111111' : '#FAF8F5',
                        color: isSelected ? '#FFFFFF' : '#333333',
                        border: '1px solid',
                        borderColor: isSelected ? '#111111' : '#EAE6DF',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.15rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.74rem', fontWeight: 600 }}>
                        {sizeOpt.label}
                      </span>
                      <span style={{ fontSize: '0.68rem', color: isSelected ? '#C5A059' : '#777777' }}>
                        {sizeOpt.priceDesc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity + Add to Bag CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* Counter */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EAE6DF',
                  borderRadius: '999px',
                  padding: '0.3rem 0.5rem',
                  gap: '0.75rem'
                }}
              >
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: '#111111',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  -
                </button>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: '#111111',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                style={{
                  flex: '1 0 200px',
                  backgroundColor: isJustAdded ? '#111111' : '#C5A059',
                  color: isJustAdded ? '#C5A059' : '#FFFFFF',
                  border: isJustAdded ? '1px solid #C5A059' : 'none',
                  borderRadius: '999px',
                  padding: '0.85rem 1.5rem',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: isJustAdded ? '0 4px 18px rgba(0, 0, 0, 0.35)' : '0 4px 18px rgba(197, 160, 89, 0.35)',
                  transition: 'all 0.25s ease'
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
                    <Check size={16} color="#C5A059" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Concierge Order Button */}
            <a
              href={`https://wa.me/${BRAND_WHATSAPP}?text=${encodeURIComponent(`Hello G The Luxury Fragrance Concierge, I would like to order ${product.name} (${selectedSize}) - Price: AED ${calculatedPrice}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#FAF8F5',
                color: '#25D366',
                border: '1px solid #25D366',
                borderRadius: '999px',
                padding: '0.75rem 1.25rem',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#25D366';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FAF8F5';
                e.currentTarget.style.color = '#25D366';
              }}
            >
              <MessageSquare size={16} />
              <span>Order via WhatsApp VIP Concierge</span>
            </a>

            {/* Accordion Tabs (Story / Notes / Shipping) */}
            <div style={{ borderTop: '1px solid #EFECE6', marginTop: '0.5rem' }}>
              {/* Accordion 1: The Olfactory Story */}
              <div style={{ borderBottom: '1px solid #EFECE6' }}>
                <button
                  onClick={() => toggleAccordion('story')}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#111111'
                  }}
                >
                  <span>The Olfactory Story &amp; Heritage</span>
                  {activeAccordion === 'story' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === 'story' && (
                  <div style={{ paddingBottom: '1rem', fontSize: '0.8rem', color: '#666666', lineHeight: 1.6, fontFamily: "'Montserrat', sans-serif" }}>
                    Crafted in the distinguished tradition of Arabian haute parfumerie, {product.name} captures the essence of royal opulence. Blended with rare extrait concentrations to ensure a lingering, magnetic presence.
                  </div>
                )}
              </div>

              {/* Accordion 2: Notes & Pyramid */}
              <div style={{ borderBottom: '1px solid #EFECE6' }}>
                <button
                  onClick={() => toggleAccordion('notes')}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#111111'
                  }}
                >
                  <span>Concentration &amp; Ingredients</span>
                  {activeAccordion === 'notes' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === 'notes' && (
                  <div style={{ paddingBottom: '1rem', fontSize: '0.8rem', color: '#666666', lineHeight: 1.6, fontFamily: "'Montserrat', sans-serif" }}>
                    <p style={{ margin: '0 0 0.5rem 0' }}><strong>Concentration:</strong> Extrait de Parfum (35%+ oil concentration)</p>
                    <p style={{ margin: '0 0 0.5rem 0' }}><strong>Sillage:</strong> Strong, aristocratic, enduring for 18+ hours</p>
                    <p style={{ margin: 0 }}><strong>Origins:</strong> Taif Rose, Aged Assam Oud, Royal Ambergris, French Vanilla</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Shipping */}
              <div style={{ borderBottom: '1px solid #EFECE6' }}>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#111111'
                  }}
                >
                  <span>Complimentary VIP Courier Delivery</span>
                  {activeAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeAccordion === 'shipping' && (
                  <div style={{ paddingBottom: '1rem', fontSize: '0.8rem', color: '#666666', lineHeight: 1.6, fontFamily: "'Montserrat', sans-serif" }}>
                    Same-day courier dispatch across Dubai, next-day across Abu Dhabi &amp; UAE. All shipments include G Luxury signature presentation box and complimentary samples.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Products Section ("You May Also Desire") */}
      <section
        style={{
          backgroundColor: '#FAF8F5',
          borderTop: '1px solid #EFECE6',
          padding: '4rem clamp(1rem, 3.5vw, 3rem)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#C5A059',
                margin: '0 0 0.5rem 0'
              }}
            >
              Curated by our Master Perfumers
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                fontWeight: 700,
                color: '#111111',
                margin: 0,
                letterSpacing: '0.06em'
              }}
            >
              YOU MAY ALSO DESIRE
            </h2>
          </div>

          {/* 4 Cards Desktop, 2 Cards Mobile (Identical to Homepage) */}
          <div
            className="home-recommendation-grid shop-products-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'clamp(1rem, 2vw, 1.8rem)',
              width: '100%'
            }}
          >
            {relatedProducts.map((relProduct, idx) => {
              const isHovered = hoveredRelatedIndex === idx;
              const relTopNotes = relProduct.notes?.top || ['Bergamot', 'Saffron'];
              const relHeartNotes = relProduct.notes?.heart || ['Taif Rose', 'Amber'];

              return (
                <div
                  key={relProduct.id}
                  style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredRelatedIndex(idx)}
                  onMouseLeave={() => setHoveredRelatedIndex(null)}
                  onClick={() => {
                    onSelectProduct(relProduct);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {/* Portrait Card */}
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '3 / 4',
                      overflow: 'hidden',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '2px',
                      position: 'relative',
                      marginBottom: '1rem',
                      border: '1px solid #EFECE6'
                    }}
                  >
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
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
                  </div>

                  {/* Title & Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#111111',
                        margin: 0
                      }}
                    >
                      {relProduct.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#222222'
                      }}
                    >
                      {formatPrice(relProduct.priceAED)}
                    </span>
                  </div>

                  {/* Scent Notes */}
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.74rem',
                      color: '#7A7570',
                      margin: '0.2rem 0 0 0',
                      lineHeight: 1.3
                    }}
                  >
                    {relTopNotes.slice(0, 2).join(' • ')} • {relHeartNotes.slice(0, 2).join(' • ')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
