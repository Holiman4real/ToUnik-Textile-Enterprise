import React from 'react';
import { Instagram, MessageCircle, Phone, ArrowUpRight, Mail, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { AdirePattern } from './AdirePattern';

export const SocialConnect: React.FC = () => {
  return (
    <section id="social-connect" className="py-14 bg-white border-t border-b border-gray-200 relative overflow-hidden">
      
      {/* Subtle Pattern Backdrops */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <AdirePattern variant="chevron" className="w-full h-full text-[#B8860B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          
          {/* Headline */}
          <div className="text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <AdirePattern variant="sunburst" color="#B8860B" className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">Instant VIP Access</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B132B]">
              Connect with ToUnik Textiles Today
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-normal">
              Follow our fresh seasonal drops on Instagram & Facebook, message our master dyers on WhatsApp, or email us directly.
            </p>
          </div>

          {/* Social and Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full lg:w-auto">
            
            {/* Email Button */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              id="social-email-btn"
              href="mailto:sowandeadepeju@gmail.com"
              className="min-h-[48px] inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 rounded-xl bg-[#008080] hover:bg-[#006666] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>sowandeadepeju@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </motion.a>

            {/* Instagram Button */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              id="social-instagram-btn"
              href="https://instagram.com/touniktextiles"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 rounded-xl bg-[#800020] hover:bg-[#5e0017] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>@touniktextiles</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </motion.a>

            {/* Facebook Button */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              id="social-facebook-btn"
              href="https://facebook.com/sowande.adepeju"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#0d65d9] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Facebook className="w-4 h-4 text-white" />
              <span>@sowande.adepeju</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              id="social-whatsapp-btn"
              href="https://wa.me/2348039841783?text=Hello%20ToUnik%20Textiles,%20I%20would%20like%20to%20enquire%20about%20Adire%20fabrics."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp: 08039841783</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </motion.a>

            {/* Direct Call Button */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              id="social-phone-btn"
              href="tel:08039841783"
              className="min-h-[48px] inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 rounded-xl bg-[#0B132B] hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200 cursor-pointer group"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
              <span>Call 08039841783</span>
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
