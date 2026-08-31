import React from 'react';
import { Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { HERITAGE_TECHNIQUES } from '../data/fabrics';
import { AdirePattern } from './AdirePattern';

export const AdireHeritage: React.FC = () => {
  return (
    <section id="heritage" className="py-20 lg:py-28 bg-white adire-pattern-subtle text-[#0B132B] relative overflow-hidden border-b border-gray-200/80">
      
      {/* Decorative Light Background Gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#800020]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#008080]/5 blur-3xl pointer-events-none" />

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
            <AdirePattern variant="sunburst" color="#B8860B" className="w-3.5 h-3.5" />
            <span>Yoruba Textile Legacy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B132B]">
            Where Ancestral Tradition Meets <br /><span className="text-[#B8860B]">Red-Carpet Runway Style</span>
          </h2>

          <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#800020] font-semibold">
            Every motif has a proverb. Every dip tells a sacred story.
          </p>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-2xl mx-auto leading-relaxed">
            Adire (meaning “tie and dye” in Yoruba) is an ancient Nigerian textile tradition where pure fabric is treated with natural wax or starch resists before soaking in organic indigo vats.
          </p>
        </motion.div>

        {/* Triple Showcase: Close-up Texture, Traditional Technique, Modern Fashion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Adire Fabric Close-Up */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -6, boxShadow: '0 20px 30px rgba(0,0,0,0.08)' }}
            className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md group flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop"
                alt="Close-up detail of authentic Nigerian Adire tie-dye fabric"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0B132B] border border-[#D4AF37] shadow-sm">
                01 • Sacred Resist Art
              </div>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="font-display text-lg font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors">
                Intricate Texture & Soul
              </h3>
              <p className="text-xs text-gray-600 font-normal leading-relaxed">
                Micro-knots, raffia ties, and cassava starch strokes create organic crackles and celestial sunbursts that mass-market factory machines can never replicate.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Traditional Dyeing Techniques */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -6, boxShadow: '0 20px 30px rgba(0,0,0,0.08)' }}
            className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md group flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop"
                alt="Traditional Yoruba dye pots and authentic textile crafting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0B132B] border border-[#D4AF37] shadow-sm">
                02 • Master Artisans
              </div>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="font-display text-lg font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors">
                Traditional Indigo Alchemy
              </h3>
              <p className="text-xs text-gray-600 font-normal leading-relaxed">
                Fermented indigo leaves (elu) in traditional earthen clay pots oxidize to reveal rich shades from luminous electric cobalt to deep cosmic midnight blue.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Modern Fashion using Adire */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -6, boxShadow: '0 20px 30px rgba(0,0,0,0.08)' }}
            className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md group flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop"
                alt="Modern African fashion model wearing elegant Adire gown"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#008080] border border-[#008080]/40 shadow-sm">
                03 • Haute Couture
              </div>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="font-display text-lg font-bold text-[#0B132B] group-hover:text-[#B8860B] transition-colors">
                Contemporary Runways
              </h3>
              <p className="text-xs text-gray-600 font-normal leading-relaxed">
                From structured red-carpet agbadas and gala gowns to chic resort wear, ToUnik turns ancient Yoruba symbols into modern luxury statements.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Detailed 4 Traditional Technique Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border-2 border-[#D4AF37] shadow-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-[#B8860B]" />
            <h3 className="font-display text-xl font-bold text-[#0B132B]">The Four Sacred Yoruba Adire Disciplines</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HERITAGE_TECHNIQUES.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="space-y-2 p-5 rounded-xl bg-white border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold text-[#B8860B] uppercase tracking-wider">{tech.name}</div>
                <div className="text-xs font-semibold text-[#0B132B]">{tech.subtitle}</div>
                <p className="text-xs text-gray-600 font-normal leading-relaxed">{tech.description}</p>
                <div className="pt-2 text-[11px] font-serif-luxury italic text-[#008080] font-medium border-t border-gray-100">
                  ✦ {tech.patternTrait}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
