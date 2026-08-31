import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FabricCollection } from './components/FabricCollection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AdireHeritage } from './components/AdireHeritage';
import { CustomOrders } from './components/CustomOrders';
import { ContactSection } from './components/ContactSection';
import { SocialConnect } from './components/SocialConnect';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [selectedFabricForInquiry, setSelectedFabricForInquiry] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenEnquiry = (fabricName?: string) => {
    if (fabricName) {
      setSelectedFabricForInquiry(fabricName);
    }
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#0B132B] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#0B132B]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreFabrics={() => scrollToSection('#fabrics')}
          onContactUs={() => scrollToSection('#contact')}
        />

        {/* 3. About ToUnik Textiles */}
        <About
          onEnquire={() => handleOpenEnquiry('Bespoke Fabric Consultation')}
        />

        {/* 4. Fabric Collection Portfolio */}
        <FabricCollection
          onEnquireNow={(fabricName) => handleOpenEnquiry(fabricName)}
        />

        {/* 5. Why Choose ToUnik Textiles */}
        <WhyChooseUs
          onEnquire={() => handleOpenEnquiry('General Fabric Inquiry')}
        />

        {/* 6. Adire Heritage Storytelling */}
        <AdireHeritage />

        {/* 7. Custom Orders & Bulk Wholesale */}
        <CustomOrders
          onMakeEnquiry={() => handleOpenEnquiry('Custom / Bulk Order Enquiry')}
        />

        {/* 8. Contact Section & Interactive Validated Form */}
        <ContactSection
          initialFabricSelection={selectedFabricForInquiry}
        />

        {/* 9. Social Media & Instant Channels */}
        <SocialConnect />
      </main>

      {/* 10. Dark Indigo Footer */}
      <Footer
        onNavClick={(href) => scrollToSection(href)}
      />

      {/* 11. Back to Top Button */}
      <BackToTop />
    </div>
  );
}
