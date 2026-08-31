import React from 'react';
import { Phone, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AdirePattern } from './AdirePattern';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Fabrics', href: '#fabrics' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Adire Heritage', href: '#heritage' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#FAF8F5] text-[#0B132B] border-t-2 border-[#D4AF37] relative overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 text-[#D4AF37]/[0.08] pointer-events-none">
        <AdirePattern variant="sunburst" className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200"
        >
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#800020] p-[2px] shadow-md flex items-center justify-center overflow-hidden flex-shrink-0"
              >
                <img
                  src="https://i.imgur.com/vnTwcr0.png"
                  alt="ToUnik Textiles Official Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-wider text-[#0B132B]">
                  TOUNIK <span className="text-[#B8860B]">TEXTILES</span>
                </h3>
                <p className="font-serif-luxury italic text-sm text-[#800020] font-semibold">
                  “Rooted in Tradition, Made for You”
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed max-w-sm">
              Dedicated to celebrating Nigerian cultural heritage through authentic, mastercrafted Adire fabrics. Combining generational Yoruba artistry with contemporary luxury expression.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs text-[#0B132B] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#008080]" />
              <span className="font-medium">100% Authentic Hand-Dyed Yoruba Textiles</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base font-bold text-[#0B132B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavClick(link.href)}
                    className="text-xs sm:text-sm text-gray-700 hover:text-[#B8860B] font-medium hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B8860B]" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-base font-bold text-[#0B132B] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#800020]" />
              <span>Direct Inquiries</span>
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:08053383107"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-[#D4AF37] text-gray-800 hover:text-[#0B132B] shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#D4AF37]/40 flex items-center justify-center text-[#B8860B] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">Call / WhatsApp</span>
                  <span className="font-bold text-[#0B132B]">08053383107</span>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://instagram.com/graceful_adirefabrics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-[#800020] text-gray-800 hover:text-[#0B132B] shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#800020]/10 border border-[#800020]/30 flex items-center justify-center text-[#800020] flex-shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">Official Instagram</span>
                  <span className="font-bold text-[#0B132B]">@graceful_adirefabrics</span>
                </div>
              </motion.a>
            </div>
          </div>

        </motion.div>

        {/* Bottom Copyright & Heritage Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-normal">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© 2026 ToUnik Textiles. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[#B8860B]">
            <AdirePattern variant="spiral" color="#B8860B" className="w-3.5 h-3.5" />
            <span className="font-serif-luxury italic text-xs font-semibold text-[#800020]">Rooted in Tradition, Made for You</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
