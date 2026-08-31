import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, Sparkles, Filter, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FabricCategory, FabricItem } from '../types';
import { FABRICS } from '../data/fabrics';
import { AdirePattern } from './AdirePattern';
import { FabricDetailModal } from './FabricDetailModal';

interface FabricCollectionProps {
  onEnquireNow: (fabricName: string) => void;
}

interface FabricCardImageFrameProps {
  fabric: FabricItem;
  onQuickView: (fabric: FabricItem) => void;
}

const FabricCardImageFrame: React.FC<FabricCardImageFrameProps> = ({ fabric, onQuickView }) => {
  const images = (fabric.detailImages && fabric.detailImages.length > 0)
    ? fabric.detailImages
    : [fabric.imageUrl];

  const hasMultipleImages = images.length > 1;
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slideshow for cards with multiple images
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [hasMultipleImages, isHovered, images.length]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setSlideIndex(idx);
  };

  return (
    <div
      className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gray-900 group/frame"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slideshow Image with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[slideIndex]}
          src={images[slideIndex]}
          alt={`${fabric.name} - View ${slideIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full h-full object-cover group-hover/frame:scale-108 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Gradient Shade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

      {/* Category Pill & Multi-Photo Badge */}
      <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-white/95 text-[#0B132B] border border-[#D4AF37] backdrop-blur-sm shadow-md">
          {fabric.categoryLabel}
        </span>
        {hasMultipleImages && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold bg-[#0B132B]/85 text-[#D4AF37] border border-[#D4AF37]/50 backdrop-blur-sm shadow-sm">
            <Layers className="w-2.5 h-2.5" />
            <span>Slideshow ({images.length} Views)</span>
          </span>
        )}
      </div>

      {/* Quick View Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          onQuickView(fabric);
        }}
        className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 text-[#0B132B] hover:bg-[#0B132B] hover:text-[#D4AF37] border border-gray-200 flex items-center justify-center transition-colors shadow-md cursor-pointer z-10"
        title="View fabric details"
        aria-label={`View details for ${fabric.name}`}
      >
        <Eye className="w-4 h-4" />
      </motion.button>

      {/* Navigation Arrows for Slideshow */}
      {hasMultipleImages && (
        <>
          <button
            onClick={handlePrevSlide}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0B132B]/80 hover:bg-[#D4AF37] text-white hover:text-[#0B132B] border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover/frame:opacity-100 z-10 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextSlide}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0B132B]/80 hover:bg-[#D4AF37] text-white hover:text-[#0B132B] border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover/frame:opacity-100 z-10 cursor-pointer shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Technique Tag & Pagination Dots at Bottom */}
      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white z-10">
        <span className="text-xs font-serif-luxury italic text-[#F3E7C4] flex items-center gap-1.5 font-medium drop-shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{fabric.technique}</span>
        </span>

        {hasMultipleImages && (
          <div className="flex items-center gap-1 bg-[#0B132B]/70 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-xs">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={(e) => handleDotClick(e, dotIdx)}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  dotIdx === slideIndex ? 'w-4 bg-[#D4AF37]' : 'w-1.5 bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const FabricCollection: React.FC<FabricCollectionProps> = ({ onEnquireNow }) => {
  const [selectedCategory, setSelectedCategory] = useState<FabricCategory>('all');
  const [activeModalFabric, setActiveModalFabric] = useState<FabricItem | null>(null);

  const categories: { id: FabricCategory; label: string }[] = [
    { id: 'all', label: 'All Collections' },
    { id: 'adire-batik', label: 'Adire Batik' },
    { id: 'classic-adire', label: 'Classic Adire' },
    { id: 'contemporary-adire', label: 'Contemporary Adire' },
    { id: 'premium-adire', label: 'Premium Adire' },
    { id: 'custom-designs', label: 'Custom Adire' },
    { id: 'african-print', label: 'African Prints' },
  ];

  const filteredFabrics = selectedCategory === 'all'
    ? FABRICS
    : FABRICS.filter((fabric) => fabric.category === selectedCategory);

  return (
    <section id="fabrics" className="py-20 lg:py-28 bg-white adire-pattern relative overflow-hidden border-b border-gray-200/80">
      
      {/* Decorative patterns */}
      <div className="absolute top-10 left-[-5%] text-[#008080]/[0.04] pointer-events-none">
        <AdirePattern variant="eleko-grid" className="w-96 h-96" />
      </div>
      <div className="absolute bottom-10 right-[-5%] text-[#800020]/[0.04] pointer-events-none">
        <AdirePattern variant="sunburst" className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#B8860B] text-xs font-bold uppercase tracking-widest shadow-xs">
            <AdirePattern variant="spiral" color="#B8860B" className="w-3.5 h-3.5" />
            <span>Handpicked Artisan Drops</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight">
            Signature Adire <br /><span className="text-[#B8860B]">Fabrics That Command The Room</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-2xl mx-auto">
            Every single yard carries its own distinct heartbeat. Explore our latest mastercrafted Nigerian Adire collections or commission an exclusive custom colorway.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14"
        >
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer uppercase tracking-wider ${
                  isActive
                    ? 'bg-[#0B132B] text-white shadow-md border border-[#D4AF37]'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-[#0B132B] border border-gray-200'
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Product Cards Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFabrics.map((fabric) => (
              <motion.div
                key={fabric.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                id={`fabric-card-${fabric.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Slideshow, Badges, and Hover Actions */}
                  <FabricCardImageFrame fabric={fabric} onQuickView={setActiveModalFabric} />

                  {/* Fabric Information */}
                  <div className="p-6 space-y-3">
                    
                    {/* Swatches & Origin */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center -space-x-1">
                        {fabric.primaryColors.map((col, idx) => (
                          <span
                            key={idx}
                            className="w-4 h-4 rounded-full border border-white shadow-xs"
                            style={{ backgroundColor: col }}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-600">{fabric.origin}</span>
                    </div>

                    {/* Fabric Title */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors leading-snug">
                      {fabric.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3">
                      {fabric.shortDescription}
                    </p>

                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                  <div className="pt-4 flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      id={`enquire-btn-${fabric.id}`}
                      onClick={() => onEnquireNow(fabric.name)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0B132B] hover:bg-[#B8860B] hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <span>Enquire For This Piece</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveModalFabric(fabric)}
                      className="p-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#0B132B] hover:border-[#D4AF37] transition-colors cursor-pointer"
                      title="Read full story"
                      aria-label="Read full story"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border-2 border-[#D4AF37] text-[#0B132B] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl card-luxury-hover"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <AdirePattern variant="sunburst" color="#B8860B" className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Bespoke Yardage & Sampling</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0B132B]">
              Got a Dream Colorway, Wedding Aso-Ebi, or Bulk Order in Mind?
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 font-normal max-w-xl">
              We work directly with couture houses, wedding parties, boutiques, and textile lovers worldwide to craft signature Adire fabrics.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(184,134,11,0.3)' }}
            whileTap={{ scale: 0.98 }}
            id="custom-enquiry-banner-btn"
            onClick={() => onEnquireNow('Custom Bespoke Adire Commission')}
            className="flex-shrink-0 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B132B] hover:bg-[#B8860B] transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Start Custom Consultation
          </motion.button>
        </motion.div>

      </div>

      {/* Detail Modal */}
      <FabricDetailModal
        fabric={activeModalFabric}
        onClose={() => setActiveModalFabric(null)}
        onEnquire={(fab) => {
          setActiveModalFabric(null);
          onEnquireNow(fab.name);
        }}
      />
    </section>
  );
};
