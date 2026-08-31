import React from 'react';
import { ShieldCheck, Sparkles, Palette, Crown, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS } from '../data/fabrics';
import { AdirePattern } from './AdirePattern';

interface WhyChooseUsProps {
  onEnquire?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onEnquire }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Crown':
        return <Crown className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-gray-200/80">
      
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 text-[#D4AF37]/[0.06] pointer-events-none">
        <AdirePattern variant="spiral" className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#B8860B] text-xs font-bold uppercase tracking-widest shadow-xs">
            <AdirePattern variant="sunburst" color="#B8860B" className="w-3.5 h-3.5" />
            <span>The ToUnik Distinction</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight">
            Why Fashion Icons & Connoisseurs <br /><span className="text-[#B8860B]">Choose ToUnik Textiles</span>
          </h2>

          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#800020] font-semibold">
            Authentic Yoruba Heritage. Masterful Execution. Uncompromising Luxury.
          </p>
          <p className="text-base text-gray-700 font-normal max-w-2xl mx-auto">
            We bridge centuries of indigenous Nigerian textile artistry with contemporary haute couture standards to deliver fabrics of unmatched soul, luster, and character.
          </p>
        </motion.div>

        {/* Five Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 30px rgba(0,0,0,0.08)' }}
              id={`why-card-${item.id}`}
              className={`p-7 rounded-2xl bg-white border border-gray-200 shadow-md hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Subtle background motif on hover */}
              <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-10 transition-opacity duration-300 text-[#B8860B] pointer-events-none">
                <AdirePattern variant="eleko-grid" className="w-32 h-32" />
              </div>

              <div className="space-y-4 relative z-10">
                
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xs bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#B8860B] group-hover:scale-105 transition-transform"
                  >
                    {getIcon(item.iconName)}
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded bg-[#FAF8F5] text-gray-700 border border-gray-200">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#0B132B] tracking-wide group-hover:text-[#B8860B] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-[#B8860B] transition-colors relative z-10">
                <span className="flex items-center gap-1.5">
                  <AdirePattern variant="spiral" color="#B8860B" className="w-3.5 h-3.5" />
                  <span>Certified Abeokuta Origin</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Call to Action Card in Deep Indigo Accent */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.45, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="p-7 rounded-2xl bg-[#0B132B] border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 text-[#D4AF37]/15 pointer-events-none">
              <AdirePattern variant="sunburst" className="w-48 h-48" />
            </div>

            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Ready to Stand Out?</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white leading-snug">
                Experience Wearable Royalty
              </h3>
              <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                Connect directly with us to discuss yardage, custom color combinations, bridal aso-ebi, or wholesale boutique orders.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(212,175,55,0.5)' }}
                whileTap={{ scale: 0.98 }}
                id="why-choose-enquire-btn"
                onClick={onEnquire}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-bold text-[#0B132B] bg-white hover:bg-[#D4AF37] shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Order Your Fabric Now</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B]" />
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
