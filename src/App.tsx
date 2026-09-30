import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { WhatYouReceive } from './components/WhatYouReceive';
import { MaterialSample } from './components/MaterialSample';
import { ExclusiveBonuses } from './components/ExclusiveBonuses';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DiscountModal } from './components/DiscountModal';

export default function App() {
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);

  const handleHeroCtaClick = () => {
    const pricingElement = document.getElementById('planos');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Plano Básico') {
      setIsDiscountOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] font-sans text-[#2c221e] antialiased selection:bg-amber-200">
      {/* 1. Top Urgent Bar */}
      <TopBanner />

      {/* 2. Hero Section */}
      <HeroSection onCtaClick={handleHeroCtaClick} />

      {/* 3. O QUE VOCÊ VAI RECEBER */}
      <WhatYouReceive />

      {/* 4. VEJA UMA PEQUENA AMOSTRA DO MATERIAL */}
      <MaterialSample />

      {/* 5. BÔNUS EXCLUSIVOS */}
      <ExclusiveBonuses />

      {/* 6. ESCOLHA O PLANO IDEAL */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* 7. Garantia Incondicional de 14 Dias */}
      <GuaranteeSection />

      {/* 8. O QUE DIZEM DO MATERIAL */}
      <Testimonials />

      {/* 9. PERGUNTAS FREQUENTES */}
      <FaqSection />

      {/* 10. Footer */}
      <Footer />

      {/* Discount Offer Modal */}
      <DiscountModal
        isOpen={isDiscountOpen}
        onClose={() => setIsDiscountOpen(false)}
      />
    </div>
  );
}
