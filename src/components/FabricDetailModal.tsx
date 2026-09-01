import React, { useState, useEffect } from 'react';
import { X, Sparkles, MapPin, Check, MessageSquare, Phone, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FabricItem } from '../types';
import { AdirePattern } from './AdirePattern';

interface FabricDetailModalProps {
  fabric: FabricItem | null;
  onClose: () => void;
  onEnquire: (fabric: FabricItem) => void;
}

export const FabricDetailModal: React.FC<FabricDetailModalProps> = ({
  fabric,
  onClose,
  onEnquire,
}) => {
  const images = fabric?.detailImages && fabric.detailImages.length > 0
    ? fabric.detailImages
    : fabric?.imageUrl ? [fabric.imageUrl] : [];

  const [activeSlide, setActiveSlide] = useState(0);

  // Reset active slide when fabric changes
  useEffect(() => {
    setActiveSlide(0);
  }, [fabric?.id]);

  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {fabric && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0B132B]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#111B38] w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-[#D4AF37]/50 gold-glow overflow-hidden text-white my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="bg-[#0B132B] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#D4AF37]/30 text-white">
              <div className="flex items-center gap-2.5 sm:gap-3 pr-2 min-w-0">
                <AdirePattern variant="sunburst" color="#D4AF37" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-wider block truncate">
                    {fabric.categoryLabel}
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold text-white truncate">
                    {fabric.name}
                  </h3>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Image Showcase / Picture Frame */}
                <div className="md:col-span-6 space-y-3 sm:space-y-4">
                  <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-xl overflow-hidden shadow-lg border-2 border-[#D4AF37]/40 bg-[#0B132B] group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={images[activeSlide] || fabric.imageUrl}
                        src={images[activeSlide] || fabric.imageUrl}
                        alt={`${fabric.name} - View ${activeSlide + 1}`}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>

                    {/* Navigation Buttons for modal slideshow */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={handlePrev}
                          aria-label="Previous image"
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B132B]/80 hover:bg-[#D4AF37] text-white hover:text-[#0B132B] border border-white/30 flex items-center justify-center transition-all cursor-pointer shadow-lg z-20"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          aria-label="Next image"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B132B]/80 hover:bg-[#D4AF37] text-white hover:text-[#0B132B] border border-white/30 flex items-center justify-center transition-all cursor-pointer shadow-lg z-20"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-[#0B132B]/90 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-[11px] text-[#F3E7C4] border border-[#D4AF37]/40 flex items-center gap-1.5 z-10">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>Authentic Yoruba Resist Textile</span>
                    </div>

                    {hasMultipleImages && (
                      <div className="absolute top-3 right-3 bg-[#0B132B]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/40 flex items-center gap-1 z-10">
                        <Layers className="w-3 h-3" />
                        <span>{activeSlide + 1} / {images.length}</span>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Selector Strip if multiple images */}
                  {hasMultipleImages && (
                    <div className={`grid gap-2 ${images.length >= 5 ? 'grid-cols-5' : images.length === 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                      {images.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlide(idx)}
                          className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            idx === activeSlide
                              ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-102'
                              : 'border-white/20 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Color Swatches */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0B132B] border border-white/10 space-y-2">
                    <div className="text-[11px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                      Color Palette & Pigments:
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center -space-x-1.5">
                        {fabric.primaryColors.map((color, index) => (
                          <span
                            key={index}
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#111B38] shadow-sm"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-white/80 font-medium">
                        {fabric.colorTheme}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fabric Details & Specification */}
                <div className="md:col-span-6 space-y-4 sm:space-y-5">
                  
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">Fabric Description</h4>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                      {fabric.fullDescription}
                    </p>
                  </div>

                  {/* Technique & Composition Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                    <div className="p-3 sm:p-3.5 rounded-lg bg-[#0B132B] border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-white/50 block">Craft Technique</span>
                      <span className="text-xs font-bold text-[#D4AF37] mt-0.5 block">{fabric.technique}</span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-lg bg-[#0B132B] border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-white/50 block">Origin</span>
                      <span className="text-xs font-bold text-[#2DD4BF] mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{fabric.origin}</span>
                      </span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-lg bg-[#0B132B] border border-white/10 sm:col-span-2">
                      <span className="text-[10px] uppercase font-bold text-white/50 block">Base Material & Weave</span>
                      <span className="text-xs font-medium text-white/90 mt-0.5 block">{fabric.baseMaterial}</span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-lg bg-[#0B132B] border border-white/10 sm:col-span-2">
                      <span className="text-[10px] uppercase font-bold text-white/50 block">Ideal Garment Styles</span>
                      <span className="text-xs font-medium text-white/90 mt-0.5 block">{fabric.idealFor}</span>
                    </div>
                  </div>

                  {/* Artisan Quality Highlights */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>Colorfast natural dye processes ensure longevity</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>Available in single yardage, bundles, or bulk bridal/event orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>Worldwide shipping directly from Nigeria</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onClose();
                        onEnquire(fabric);
                      }}
                      className="min-h-[48px] flex-1 py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0B132B] bg-[#D4AF37] hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enquire About This Fabric</span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:08039841783"
                      className="min-h-[48px] py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B132B] border border-white/20 hover:border-[#D4AF37] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span>Call 08039841783</span>
                    </motion.a>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
