import React, { useState, useEffect } from 'react';
import { CheckCircle2, Award, Flame, Scissors, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AdirePattern } from './AdirePattern';

interface AboutProps {
  onLearnMore?: () => void;
  onEnquire?: () => void;
}

export const About: React.FC<AboutProps> = ({ onEnquire }) => {
  const slideshowImages = [
    {
      url: 'https://i.imgur.com/4MKnFAR.png',
      caption: 'Sacred Resist Artistry & Intricate Wax Detail',
      tag: 'Handcrafted Heritage',
    },
    {
      url: 'https://i.imgur.com/Lh32iMK.png',
      caption: 'Vibrant Nigerian Batik Swirls & Royal Indigo',
      tag: 'Indigo Vat Dyeing',
    },
    {
      url: 'https://i.imgur.com/7DgMAxl.png',
      caption: 'Mastercrafted Eleko Cassava Resist Motifs',
      tag: 'Yoruba Symbolism',
    },
    {
      url: 'https://i.imgur.com/PbhrVOC.png',
      caption: 'Contemporary Palette on Premium Pure Cotton',
      tag: 'Modern Runways',
    },
    {
      url: 'https://i.imgur.com/9VolFMu.png',
      caption: 'Traditional Oniko Tie & Knot Techniques',
      tag: 'Artisanal Craft',
    },
    {
      url: 'https://i.imgur.com/jRpWRBt.png',
      caption: 'High-Fashion African Haute Couture Yardage',
      tag: 'Bespoke Yardage',
    },
    {
      url: 'https://i.imgur.com/I9Uv1XS.png',
      caption: 'Authentic Abeokuta Heritage Dye Tradition',
      tag: 'Living Masterpiece',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, slideshowImages.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slideshowImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  };

  const coreValues = [
    {
      title: 'Ancestral Soul, Modern Edge',
      description: 'Century-old Oniko knots and Eleko cassava resists fused with striking, contemporary high-fashion aesthetics.',
      icon: Award,
      accent: 'text-[#B8860B] bg-[#FAF8F5] border-[#D4AF37]/40',
    },
    {
      title: 'Vibrant All-Day Pigments',
      description: 'Deep organic indigo and rich color baths treated to maintain deep luster and longevity wash after wash.',
      icon: Flame,
      accent: 'text-[#800020] bg-[#800020]/10 border-[#800020]/30',
    },
    {
      title: 'Zero Fast Fashion. Pure Craft.',
      description: 'Each piece is hand-tied, hand-painted, and vat-dipped in Nigeria by generational master artisans.',
      icon: Sparkles,
      accent: 'text-[#008080] bg-[#008080]/10 border-[#008080]/30',
    },
    {
      title: 'Runway-Ready Custom Yardage',
      description: 'Tailored for red-carpet statements, bespoke bridal aso-ebi, luxury menswear, and global design houses.',
      icon: Scissors,
      accent: 'text-[#0B132B] bg-gray-100 border-gray-200',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-gray-200/80">
      
      {/* Background Decorative Subtle Resist Pattern Watermarks */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 text-[#D4AF37]/[0.06] pointer-events-none">
        <AdirePattern variant="sunburst" className="w-[600px] h-[600px]" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 text-[#008080]/[0.04] pointer-events-none">
        <AdirePattern variant="eleko-grid" className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#B8860B] text-xs font-bold uppercase tracking-widest shadow-xs">
            <AdirePattern variant="spiral" color="#B8860B" className="w-3.5 h-3.5" />
            <span>The ToUnik Story & Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight">
            Not Just Fabric. <br /><span className="text-[#B8860B]">A Living Yoruba Masterpiece.</span>
          </h2>
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#800020] font-semibold">
            Handcrafted with sacred tradition. Styled for modern high fashion.
          </p>
        </motion.div>

        {/* Two-Column Story and Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Left Column on large screens) - Interactive Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div
              className="relative mx-auto max-w-md lg:max-w-none group/slideshow"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Decorative background shape */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#D4AF37]/30 via-[#800020]/15 to-[#008080]/20 -rotate-2 -z-10 blur-md" />

              {/* Main Slideshow Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-white relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0B132B]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="absolute inset-0"
                    >
                      <img
                        src={slideshowImages[currentIndex].url}
                        alt={`Authentic Nigerian Adire creation ${currentIndex + 1} - ${slideshowImages[currentIndex].caption}`}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Top Slide Counter & Tag Badge */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37] shadow-md flex items-center gap-1.5 pointer-events-auto">
                      <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
                      <span className="text-[11px] font-bold text-[#0B132B] uppercase tracking-wider">
                        {slideshowImages[currentIndex].tag}
                      </span>
                    </div>

                    <div className="bg-[#0B132B]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[11px] font-bold text-[#D4AF37] shadow-md">
                      0{currentIndex + 1} / 0{slideshowImages.length}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    id="slideshow-prev-btn"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-[#0B132B]/85 hover:bg-[#D4AF37] text-white hover:text-[#0B132B] active:bg-[#D4AF37] active:text-[#0B132B] border border-white/30 flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer active:scale-90"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    id="slideshow-next-btn"
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-[#0B132B]/85 hover:bg-[#D4AF37] text-white hover:text-[#0B132B] active:bg-[#D4AF37] active:text-[#0B132B] border border-white/30 flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer active:scale-90"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 text-white space-y-1 pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block">
                      Authentic Textile Showcase
                    </span>
                    <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold text-white leading-snug drop-shadow-md">
                      {slideshowImages[currentIndex].caption}
                    </h3>

                    {/* Pagination Dots */}
                    <div className="flex items-center gap-1.5 pt-1 pointer-events-auto">
                      {slideshowImages.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentIndex(dotIdx)}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                          className={`h-2 sm:h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            dotIdx === currentIndex
                              ? 'w-6 sm:w-6 bg-[#D4AF37]'
                              : 'w-2.5 sm:w-2 bg-white/50 hover:bg-white/90'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Swatch Box */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-2xl border-2 border-[#D4AF37] max-w-[190px] sm:max-w-[220px] space-y-1.5 sm:space-y-2 z-30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0B132B] border border-gray-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#800020]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#008080]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#D4AF37]" />
                </div>
                <div className="text-xs font-bold text-[#0B132B] uppercase tracking-wider">Natural Pigments</div>
                <div className="text-[11px] text-gray-600 leading-tight font-medium">
                  Rich, fade-resistant traditional & modern dye baths.
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Narrative Content (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 order-1 lg:order-2"
          >
            
            {/* The Main Brand Statement Quote */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#B8860B] border-y border-r border-[#D4AF37]/30 shadow-md space-y-3"
            >
              <p className="font-serif-luxury text-lg sm:text-xl text-[#0B132B] leading-relaxed font-semibold italic">
                “At ToUnik Textiles, we celebrate the beauty of Nigerian heritage through authentic Adire fabrics. Our designs combine generational craftsmanship with contemporary creativity, giving you fabrics that are bold, distinctive, and made for unforgettable expression.”
              </p>
            </motion.div>

            <p className="text-base text-gray-700 leading-relaxed font-normal">
              Every single yard of cloth we produce carries an authentic heartbeat. From sacred tie-dye knots tied by skilled hands in Abeokuta to intricate cassava-starch stencils painted with generational mastery, our artisans preserve ancestral Yoruba secrets while creating stunning palettes for today’s fashion icons.
            </p>

            {/* Core Values / Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coreValues.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}
                    className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#D4AF37] transition-all duration-200 space-y-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${item.accent} group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-12 font-normal">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(184,134,11,0.3)' }}
                whileTap={{ scale: 0.98 }}
                id="about-enquire-btn"
                onClick={onEnquire}
                className="px-7 py-3.5 rounded-xl bg-[#0B132B] hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Request Fabric Consultation</span>
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </motion.button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#800020]">
                <AdirePattern variant="spiral" color="#800020" className="w-4 h-4" />
                <span>Hand-Dyed in Nigeria • Shipped Worldwide</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
