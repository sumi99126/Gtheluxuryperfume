import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Check, X, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PerfumeProduct, CLIENT_PRODUCTS } from '../data/perfumes';

interface ShopPageProps {
  onBackToHome: () => void;
  onSelectProduct?: (product: PerfumeProduct) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onBackToHome, onSelectProduct }) => {
  const { addToCart, formatPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedNote, setSelectedNote] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // All catalog products with rich portrait cards matching homepage
  const allProducts = useMemo(() => {
    return [
      {
        id: 'hubb-love-bottled',
        name: 'Hubb (حُبّ)',
        arabicName: 'حُبّ',
        category: 'Gourmand & Fruit',
        priceAED: 850,
        notesSummary: 'Fruity | Sweet | Bergamot | Vanilla | Patchouli',
        image: '/rec_hubb.png',
        product: CLIENT_PRODUCTS.find(p => p.id === 'hubb-love-bottled') || CLIENT_PRODUCTS[0]
      },
      {
        id: 'legacy-709',
        name: 'Legacy 709',
        arabicName: 'الإرث ٧٠٩',
        category: 'Oud & Amber',
        priceAED: 920,
        notesSummary: 'Smoky Leather | Royal Saffron | Aged Oud | Ambergris',
        image: '/rec_legacy709.png',
        product: CLIENT_PRODUCTS.find(p => p.id === 'legacy-709') || CLIENT_PRODUCTS[1]
      },
      {
        id: 'majestic-oud',
        name: 'Majestic Oud',
        arabicName: 'العود المهيب',
        category: 'Oud & Amber',
        priceAED: 890,
        notesSummary: 'Smoky Incense | Wild Assam Oud | Amber Resin | Tonka',
        image: '/packshot_hubb.png',
        product: CLIENT_PRODUCTS.find(p => p.id === 'majestic-oud') || CLIENT_PRODUCTS[2]
      },
      {
        id: 'paradise-oud',
        name: 'Paradise Oud',
        arabicName: 'عود الجنة',
        category: 'Oud & Amber',
        priceAED: 650,
        notesSummary: 'Amber • Oud • Warm Spicy • Balsamic • Musky',
        image: '/rec_paradise_oud.png',
        product: CLIENT_PRODUCTS.find(p => p.id === 'paradise-oud') || CLIENT_PRODUCTS[3]
      },
      {
        id: 'flora-extrait',
        name: 'Flora (50 ML)',
        arabicName: 'فلورا',
        category: 'Floral & Musk',
        priceAED: 590,
        notesSummary: 'Fresh • Citrus • Fruity • Floral Extrait',
        image: '/spotlight_flora.png',
        product: CLIENT_PRODUCTS.find(p => p.id === 'flora-extrait') || CLIENT_PRODUCTS[5]
      },
      {
        id: 'majnoon',
        name: 'Majnoon (50 ML)',
        arabicName: 'مجنون',
        category: 'Floral & Musk',
        priceAED: 590,
        notesSummary: 'Taif Damask Rose • Rare Agarwood • Fresh Musk',
        image: '/rec_majnoon.png',
        product: CLIENT_PRODUCTS.find(p => p.id === 'majnoon') || CLIENT_PRODUCTS[4]
      },
      {
        id: 'dubai-discovery-set',
        name: 'Discovery Set (5x 5ML)',
        arabicName: 'مجموعة الاكتشاف',
        category: 'Discovery Sets',
        priceAED: 290,
        notesSummary: 'Hubb • Legacy 709 • Majestic Oud • Paradise • Flora',
        image: '/packshot_hubb.png',
        product: CLIENT_PRODUCTS[0]
      },
      {
        id: 'private-reserve-oud',
        name: 'Royal Ambergris Reserve',
        arabicName: 'احتياطي العنبر الملكي',
        category: 'Oud & Amber',
        priceAED: 980,
        notesSummary: 'White Ambergris • Molten Benzoin • Wild Cambodi',
        image: '/rec_legacy709.png',
        product: CLIENT_PRODUCTS[1]
      }
    ];
  }, []);

  const categories = [
    { id: 'all', label: 'All Fragrances', count: 8 },
    { id: 'Oud & Amber', label: 'Royal Oud & Amber', count: 4 },
    { id: 'Floral & Musk', label: 'Velvet Floral & Musk', count: 2 },
    { id: 'Gourmand & Fruit', label: 'Warm Gourmand', count: 1 },
    { id: 'Discovery Sets', label: 'Discovery Sets', count: 1 }
  ];

  const priceRanges = [
    { id: 'all', label: 'All Price Ranges' },
    { id: 'under-600', label: 'Under AED 600' },
    { id: '600-800', label: 'AED 600 – AED 800' },
    { id: '800-plus', label: 'AED 800+' }
  ];

  const notesList = ['all', 'Oud', 'Rose', 'Vanilla', 'Amber', 'Saffron', 'Leather', 'Patchouli'];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter(item => {
        // Category
        if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

        // Price
        if (priceRange === 'under-600' && item.priceAED >= 600) return false;
        if (priceRange === '600-800' && (item.priceAED < 600 || item.priceAED > 800)) return false;
        if (priceRange === '800-plus' && item.priceAED < 800) return false;

        // Note
        if (selectedNote !== 'all' && !item.notesSummary.toLowerCase().includes(selectedNote.toLowerCase())) return false;

        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesName = item.name.toLowerCase().includes(q);
          const matchesNotes = item.notesSummary.toLowerCase().includes(q);
          if (!matchesName && !matchesNotes) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.priceAED - b.priceAED;
        if (sortBy === 'price-high') return b.priceAED - a.priceAED;
        return 0;
      });
  }, [allProducts, selectedCategory, priceRange, selectedNote, searchQuery, sortBy]);

  const handleQuickAdd = (product: any) => {
    addToCart(product, '100ml', 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSelectedNote('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0) + (selectedNote !== 'all' ? 1 : 0) + (searchQuery ? 1 : 0);

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#111111', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Centered Hero Header */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: '2.25rem',
          paddingBottom: '1.75rem',
          width: '100%',
          borderBottom: '1px solid #F4F0E8'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Top Editorial Italic Quote (Gold #C5A059) */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#C5A059',
              letterSpacing: '0.03em',
              margin: '0 0 0.75rem 0'
            }}
          >
            The private archive of royal Arabian haute parfumerie.
          </p>

          {/* Grand Centered Luxury Title (Explicit 2 Lines on Mobile) */}
          <div style={{ width: '100%', overflow: 'hidden', marginBottom: '1rem' }}>
            <h1
              style={{
                fontFamily: "'Cinzel', 'Italiana', 'Marcellus', 'Cormorant Garamond', serif",
                fontSize: 'clamp(1.75rem, 4.4vw, 3.8rem)',
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: '0.08em',
                color: '#111111',
                textTransform: 'uppercase',
                margin: 0,
                display: 'block',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <span className="desktop-shop-heading">HAUTE PARFUMERIE DUBAI</span>
              <span className="mobile-shop-heading">HAUTE PARFUMERIE<br />DUBAI</span>
            </h1>
          </div>

          {/* Breadcrumb Navigation Centered */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.74rem',
              color: '#888888',
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            <button
              onClick={onBackToHome}
              style={{ background: 'transparent', border: 'none', color: '#888888', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C5A059')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: '#111111', fontWeight: 600 }}>Haute Parfumerie Collection</span>
          </div>
        </div>
      </section>

      {/* 2. Main Body with Left Sidebar + Product Grid */}
      <section
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1.75rem clamp(0.75rem, 3vw, 3rem) 5rem clamp(0.75rem, 3vw, 3rem)'
        }}
      >
        {/* Mobile Horizontal Filter Pill Bar */}
        <div
          className="shop-mobile-filter-bar no-scrollbar"
          style={{
            display: 'none',
            overflowX: 'auto',
            gap: '0.5rem',
            paddingBottom: '1rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid #EFECE6',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                backgroundColor: selectedCategory === cat.id ? '#111111' : '#FAF8F5',
                color: selectedCategory === cat.id ? '#FFFFFF' : '#333333',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? '#111111' : '#EAE6DF',
                borderRadius: '999px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.72rem',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className="shop-layout-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 270px) 1fr',
            gap: 'clamp(1.5rem, 3vw, 3.5rem)',
            alignItems: 'start'
          }}
        >
          {/* ================= LEFT DESKTOP SIDEBAR ================= */}
          <aside
            className="shop-sidebar-desktop"
            style={{
              backgroundColor: '#FAF8F5',
              borderRadius: '12px',
              border: '1px solid #EFECE6',
              padding: '1.75rem 1.5rem',
              position: 'sticky',
              top: '100px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            {/* Search Input */}
            <div>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  margin: '0 0 0.75rem 0'
                }}
              >
                Search Fragrance
              </h4>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAE6DF',
                  borderRadius: '999px',
                  padding: '0.45rem 0.85rem',
                  gap: '0.45rem'
                }}
              >
                <Search size={14} color="#888888" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search name or notes..."
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.78rem',
                    fontFamily: "'Montserrat', sans-serif",
                    width: '100%',
                    color: '#111111'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#999999', padding: 0 }}
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Categories Filter */}
            <div>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  margin: '0 0 0.85rem 0'
                }}
              >
                Categories
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {categories.map(cat => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: '0.35rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        color: isSelected ? '#C5A059' : '#555555',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: isSelected ? 600 : 400,
                        textAlign: 'left',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: isSelected ? '#C5A059' : 'transparent',
                            border: isSelected ? 'none' : '1px solid #CCCCCC'
                          }}
                        />
                        {cat.label}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: isSelected ? '#C5A059' : '#999999' }}>
                        ({cat.count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  margin: '0 0 0.85rem 0'
                }}
              >
                Price Range
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {priceRanges.map(p => {
                  const isSelected = priceRange === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPriceRange(p.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: '0.35rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        color: isSelected ? '#C5A059' : '#555555',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: isSelected ? 600 : 400,
                        textAlign: 'left',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: isSelected ? '#C5A059' : 'transparent',
                          border: isSelected ? 'none' : '1px solid #CCCCCC'
                        }}
                      />
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scent Notes Quick Pills */}
            <div>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  margin: '0 0 0.75rem 0'
                }}
              >
                Scent Notes
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {notesList.map(note => {
                  const isSelected = selectedNote === note;
                  return (
                    <button
                      key={note}
                      onClick={() => setSelectedNote(note)}
                      style={{
                        backgroundColor: isSelected ? '#111111' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : '#444444',
                        border: '1px solid',
                        borderColor: isSelected ? '#111111' : '#EAE6DF',
                        borderRadius: '999px',
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.7rem',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: isSelected ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {note === 'all' ? 'All Notes' : note}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111111',
                  border: '1px solid #E0DAD0',
                  borderRadius: '999px',
                  padding: '0.55rem 1rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: "'Montserrat', sans-serif",
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#111111';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#111111';
                }}
              >
                Reset All Filters
              </button>
            )}
          </aside>

          {/* ================= RIGHT PRODUCTS AREA ================= */}
          <div style={{ width: '100%' }}>
            {/* Top Sort & Filter Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid #F0ECE4',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              {/* Mobile Filter Drawer Trigger Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="mobile-menu-toggle"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EAE6DF',
                  borderRadius: '999px',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.74rem',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  color: '#111111',
                  cursor: 'pointer'
                }}
              >
                <Filter size={14} color="#C5A059" />
                <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
              </button>

              <div style={{ fontSize: '0.78rem', color: '#666666', fontFamily: "'Montserrat', sans-serif" }}>
                Showing <strong>{filteredProducts.length}</strong> creations
              </div>

              {/* Sort Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.74rem', color: '#777777', fontWeight: 500, fontFamily: "'Montserrat', sans-serif" }}>
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  style={{
                    backgroundColor: '#FAF8F5',
                    border: '1px solid #EAE6DF',
                    borderRadius: '8px',
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.74rem',
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#111111',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid (4 cols Desktop, 2 cols Mobile) */}
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#FAF8F5', borderRadius: '12px', border: '1px solid #EFECE6' }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', color: '#111111', marginBottom: '0.5rem' }}>
                  No Fragrances Found
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#777777', marginBottom: '1.25rem' }}>
                  Try resetting your category or price range filters.
                </p>
                <button onClick={handleResetFilters} className="btn-pill-dark">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className="home-recommendation-grid shop-products-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: 'clamp(1rem, 2vw, 1.8rem)',
                  width: '100%'
                }}
              >
                {filteredProducts.map((item, idx) => {
                  const isHovered = hoveredIndex === idx;
                  const isJustAdded = addedId === item.id;

                  return (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => {
                        if (onSelectProduct) onSelectProduct(item.product);
                        else handleQuickAdd(item.product);
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

                        {/* Floating Quick Add Button on Hover */}
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
                            {formatPrice(item.priceAED)}
                          </span>
                        </div>

                        {/* Line 2: Scent Notes Sub-label */}
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '0.74rem',
                            color: '#7A7570',
                            margin: 0,
                            lineHeight: 1.3
                          }}
                        >
                          {item.notesSummary}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Slide-in Drawer Modal */}
      {isMobileFilterOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(6px)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            style={{
              width: 'min(360px, 90vw)',
              height: '100%',
              backgroundColor: '#FFFFFF',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              overflowY: 'auto'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EFECE6', paddingBottom: '1rem' }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', margin: 0, color: '#111111' }}>
                FILTERS &amp; SEARCH
              </h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#111111' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#111111' }}>
                Search Fragrance
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid #EAE6DF',
                  borderRadius: '999px',
                  padding: '0.5rem 0.85rem',
                  gap: '0.5rem'
                }}
              >
                <Search size={14} color="#888888" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search name or notes..."
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.8rem',
                    fontFamily: "'Montserrat', sans-serif",
                    width: '100%',
                    color: '#111111'
                  }}
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#111111' }}>
                Categories
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      background: selectedCategory === cat.id ? '#FAF8F5' : 'transparent',
                      color: selectedCategory === cat.id ? '#C5A059' : '#333333',
                      border: '1px solid',
                      borderColor: selectedCategory === cat.id ? '#C5A059' : '#EFECE6',
                      borderRadius: '8px',
                      padding: '0.5rem 0.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.78rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: selectedCategory === cat.id ? 600 : 400,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{cat.label}</span>
                    <span>({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#111111' }}>
                Price Range
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {priceRanges.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPriceRange(p.id)}
                    style={{
                      background: priceRange === p.id ? '#FAF8F5' : 'transparent',
                      color: priceRange === p.id ? '#C5A059' : '#333333',
                      border: '1px solid',
                      borderColor: priceRange === p.id ? '#C5A059' : '#EFECE6',
                      borderRadius: '8px',
                      padding: '0.5rem 0.75rem',
                      textAlign: 'left',
                      fontSize: '0.78rem',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: priceRange === p.id ? 600 : 400,
                      cursor: 'pointer'
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply & Close Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #EFECE6' }}>
              <button
                onClick={handleResetFilters}
                style={{
                  flex: 1,
                  backgroundColor: '#FAF8F5',
                  color: '#111111',
                  border: '1px solid #EAE6DF',
                  borderRadius: '999px',
                  padding: '0.75rem',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Reset
              </button>

              <button
                onClick={() => setIsMobileFilterOpen(false)}
                style={{
                  flex: 1,
                  backgroundColor: '#C5A059',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.75rem',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
