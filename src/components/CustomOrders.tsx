import React from 'react';
import { ArrowRight, Sparkles, User, Briefcase, ShoppingBag, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { AdirePattern } from './AdirePattern';

interface CustomOrdersProps {
  onMakeEnquiry: () => void;
}

export const CustomOrders: React.FC<CustomOrdersProps> = ({ onMakeEnquiry }) => {
  const useCases = [
    {
      title: 'Personal Outfits & Aso-Ebi',
      description: 'Exclusive custom colorways and coordinated sets for grand weddings, royal anniversaries, and personal milestones.',
      icon: User,
      color: '#B8860B',
    },
    {
      title: 'Fashion Designers & Couturiers',
      description: 'Collaborate directly with our master dyers to engineer exclusive runway textiles for your upcoming seasonal collection.',
      icon: Briefcase,
      color: '#800020',
    },
    {
      title: 'Boutiques & Concept Stores',
      description: 'Curated wholesale bundles of premium ready-to-sew Nigerian Adire fabrics with prompt worldwide shipping.',
      icon: ShoppingBag,
      color: '#008080',
    },
    {
      title: 'Events & Corporate Gifts',
      description: 'Custom-branded motif yardage, authentic African textile souvenirs, and high-volume event orders executed flawlessly.',
      icon: Users,
      color: '#0B132B',
    },
  ];

  return (
    <section id="custom-orders" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-gray-200/80">
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 translate-x-1/4 text-[#D4AF37]/[0.05] pointer-events-none">
        <AdirePattern variant="sunburst" className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#FAF8F5] border-2 border-[#D4AF37] shadow-xl p-5 sm:p-10 lg:p-14 text-[#0B132B] relative overflow-hidden card-luxury-hover"
        >
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#800020]/5 blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 text-[#B8860B] text-xs font-bold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Bespoke Dyeing & Wholesale Service</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B132B]">
              Dreaming of a <span className="text-[#B8860B]">One-of-a-Kind</span> Fabric?
            </h2>

            <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#800020] font-semibold">
              “Your Vision. Our Generational Yoruba Craftsmanship.”
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto">
              Whether you need bespoke yardage for red-carpet ensembles, family wedding aso-ebi, luxury designer runways, or global boutique wholesale, we dye to your exact specifications.
            </p>

            <div className="pt-2 sm:pt-3">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(184,134,11,0.3)' }}
                whileTap={{ scale: 0.98 }}
                id="custom-orders-make-enquiry-btn"
                onClick={onMakeEnquiry}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B132B] hover:bg-[#B8860B] shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Book Custom Fabric Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.button>
            </div>

          </div>

          {/* 4 Audience Segments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}
                  className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#D4AF37] transition-all duration-200 space-y-2.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B8860B] border border-[#D4AF37]/30 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-normal leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
