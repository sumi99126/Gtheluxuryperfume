import React from 'react';

interface CategoryItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface CategoryIconsBarProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoryIconsBar: React.FC<CategoryIconsBarProps> = ({ onSelectCategory }) => {
  const categories: CategoryItem[] = [
    {
      id: 'womens',
      title: "WOMEN'S PERFUMES",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2h4v3h-4z" />
          <path d="M9 5h6v3H9z" />
          <path d="M6 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-9z" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
      )
    },
    {
      id: 'mens',
      title: "MEN'S PERFUMES",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="2" width="6" height="4" rx="1" />
          <path d="M7 8h10l1 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l1-3z" />
          <line x1="12" y1="13" x2="12" y2="17" />
        </svg>
      )
    },
    {
      id: 'unisex',
      title: "UNISEX FRAGRANCES",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="8" height="13" rx="1.5" />
          <path d="M5 4h4v4H5z" />
          <rect x="13" y="6" width="8" height="15" rx="1.5" />
          <path d="M15 2h4v4h-4z" />
        </svg>
      )
    },
    {
      id: 'gift-sets',
      title: "GIFT SETS & COLLECTIONS",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="13" rx="2" />
          <path d="M12 8v13" />
          <path d="M19 12H5" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
      )
    },
    {
      id: 'perfume-oils',
      title: "PERFUME OILS & ROLLERS",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="5" rx="1" />
          <rect x="7" y="7" width="10" height="15" rx="2" />
          <line x1="12" y1="11" x2="12" y2="17" />
        </svg>
      )
    },
    {
      id: 'discovery-sets',
      title: "DISCOVERY SETS",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="15" rx="2" />
          <rect x="5" y="8" width="3" height="9" rx="0.5" />
          <rect x="10.5" y="8" width="3" height="9" rx="0.5" />
          <rect x="16" y="8" width="3" height="9" rx="0.5" />
        </svg>
      )
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    } else {
      const el = document.getElementById('collection-section') || document.querySelector('section:nth-of-type(3)');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '0rem',
        paddingBottom: '2rem',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3.5vw, 3rem)'
        }}
      >
        {/* Pristine Clean Minimalist Card Container (6 Cols Desktop, 2 Cols Mobile) */}
        <div
          className="category-icons-container no-scrollbar"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '10px',
            border: '1px solid #EFEBE4',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
            overflow: 'hidden'
          }}
        >
          {categories.map((item, index) => {
            const isLast = index === categories.length - 1;
            return (
              <button
                key={item.id}
                className="category-icon-btn"
                onClick={() => handleCategoryClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderRight: isLast ? 'none' : '1px solid #F4F0E8',
                  padding: '1.4rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  flex: '1 0 135px',
                  minWidth: '135px',
                  transition: 'all 0.25s ease',
                  color: '#333333'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#FCFAF7';
                  e.currentTarget.style.color = '#C5A059';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#333333';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Thin Elegant Line Icon */}
                <div
                  style={{
                    marginBottom: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.85,
                    transition: 'transform 0.25s ease, opacity 0.25s ease'
                  }}
                >
                  {item.icon}
                </div>

                {/* Refined Clean Title */}
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    lineHeight: 1.35
                  }}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
