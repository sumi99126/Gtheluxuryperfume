import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryIconsBar } from './components/CategoryIconsBar';
import { RecommendationSection } from './components/RecommendationSection';
import { FeatureBanner } from './components/FeatureBanner';
import { SpotlightShowcase } from './components/SpotlightShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { PerfumeProduct, CLIENT_PRODUCTS } from './data/perfumes';

export const AppContent: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'product' | 'contact'>('home');
  const [selectedProduct, setSelectedProduct] = useState<PerfumeProduct>(CLIENT_PRODUCTS[0]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const navigateToView = (view: 'home' | 'shop' | 'product' | 'contact') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: PerfumeProduct) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#111111', display: 'flex', flexDirection: 'column' }}>
      {/* Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Full-width Sticky Navbar with Navigation Routing */}
      <Navbar
        currentView={currentView}
        onNavigateView={navigateToView}
      />

      {/* Main Experience */}
      <main style={{ flexGrow: 1 }}>
        {currentView === 'shop' ? (
          /* Dedicated Filterable Haute Parfumerie Shop Page */
          <ShopPage
            onBackToHome={() => navigateToView('home')}
            onSelectProduct={handleOpenProduct}
          />
        ) : currentView === 'product' ? (
          /* Dedicated Single Product Detail Page */
          <ProductDetailPage
            product={selectedProduct}
            onBackToShop={() => navigateToView('shop')}
            onSelectProduct={handleOpenProduct}
          />
        ) : currentView === 'contact' ? (
          /* Dedicated VIP Concierge & Contact Page */
          <ContactPage
            onBackToHome={() => navigateToView('home')}
          />
        ) : (
          /* Grand Editorial Home Page */
          <>
            {/* 1. Hero Section with Connected Shop Button */}
            <Hero onNavigateShop={() => navigateToView('shop')} />

            {/* 2. Category Icons Boxes Bar (Directly after Hero) */}
            <CategoryIconsBar onSelectCategory={() => navigateToView('shop')} />

            {/* 3. Our recommendation for your personality */}
            <RecommendationSection
              onNavigateShop={() => navigateToView('shop')}
              onSelectProduct={handleOpenProduct}
            />

            {/* 4. The softness of iris, the depth of noir Feature Banner */}
            <FeatureBanner onNavigateShop={() => navigateToView('shop')} />

            {/* 5. Signature Dubai Masterpieces Spotlight Showcase */}
            <SpotlightShowcase
              onNavigateShop={() => navigateToView('shop')}
              onSelectProduct={handleOpenProduct}
            />

            {/* 6. Infinite Marquee Testimonials Section */}
            <TestimonialsSection />

            {/* 7. Frequently Asked Questions Section */}
            <FaqSection />

            {/* 8. Dedicated Luxury CTA Banner above Footer */}
            <CtaBanner onNavigateShop={() => navigateToView('shop')} />
          </>
        )}
      </main>

      {/* Grand Pure Black Footer with Header Logo & Instagram/WhatsApp */}
      <Footer
        onNavigateView={navigateToView}
      />

      {/* Slide-over Right Cart Drawer */}
      <CartDrawer onOpenCheckoutModal={() => setIsCheckoutOpen(true)} />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
