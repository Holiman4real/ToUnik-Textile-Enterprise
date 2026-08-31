import React, { useRef, useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, ChevronDown, Play, Pause, Volume2, VolumeX, Film } from 'lucide-react';
import { motion } from 'motion/react';
import { AdirePattern } from './AdirePattern';

interface HeroProps {
  onExploreFabrics: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFabrics, onContactUs }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback for autoplay policy
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white adire-pattern border-b border-gray-200/80"
    >
      {/* Light Luxury Ambient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        
        {/* Soft atmospheric luxury glows */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#008080]/5 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-[-5%] w-[550px] h-[550px] rounded-full bg-[#800020]/5 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none"
        />
      </div>

      {/* Decorative Traditional Adire Motif Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] overflow-hidden">
        <div className="absolute top-12 left-10 text-[#0B132B]">
          <AdirePattern variant="sunburst" className="w-64 h-64" />
        </div>
        <div className="absolute bottom-16 left-1/4 text-[#008080]">
          <AdirePattern variant="eleko-grid" className="w-72 h-72" />
        </div>
        <div className="absolute top-20 right-16 text-[#800020]">
          <AdirePattern variant="cowrie" className="w-56 h-56" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]">
          <AdirePattern variant="spiral" className="w-64 h-64" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            
            {/* Cultural Badge with catchy text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#B8860B] text-[11px] sm:text-xs uppercase tracking-widest font-bold shadow-xs max-w-full"
            >
              <AdirePattern variant="sunburst" color="#B8860B" className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate sm:whitespace-normal">100% Authentic Yoruba Heritage • Abeokuta</span>
            </motion.div>

            {/* Brand Title - Super Catchy & Bold */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#0B132B] leading-[1.15] sm:leading-[1.1]"
              >
                Wear Your Royalty. <br />
                <span className="italic text-[#B8860B] font-serif-luxury">Untamed Luxury,</span> Pure Yoruba Soul.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif-luxury italic text-lg sm:text-2xl lg:text-3xl text-[#800020] font-semibold tracking-wide"
              >
                “Rooted in Tradition. Crafted for the Bold. Made for You.”
              </motion.p>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Turn heads in one-of-a-kind Nigerian Adire textiles hand-dyed with sacred wax resists, rich organic indigo, and contemporary haute-couture energy. <strong className="text-[#0B132B] font-semibold">Zero mass production. 100% wearable art.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(184,134,11,0.35)' }}
                whileTap={{ scale: 0.98 }}
                id="hero-explore-fabrics-btn"
                onClick={onExploreFabrics}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#0B132B] hover:bg-[#B8860B] shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="hero-contact-us-btn"
                onClick={onContactUs}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0B132B] bg-white hover:bg-gray-50 active:bg-gray-100 border-2 border-gray-200 hover:border-[#D4AF37] shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Custom Orders & Aso-Ebi</span>
              </motion.button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 sm:pt-8 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6 text-left"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200/90 shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#D4AF37]/40 flex items-center justify-center text-[#B8860B] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B]">100% Genuine</div>
                  <div className="text-[11px] text-gray-500 font-medium">Abeokuta Mastercraft</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200/90 shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#008080]/10 border border-[#008080]/30 flex items-center justify-center text-[#008080] flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B]">Colorfast Dye</div>
                  <div className="text-[11px] text-gray-500 font-medium">Organic Deep Luster</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200/90 shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#800020]/10 border border-[#800020]/30 flex items-center justify-center text-[#800020] flex-shrink-0">
                  <AdirePattern variant="spiral" className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B132B]">Custom Orders</div>
                  <div className="text-[11px] text-gray-500 font-medium">Bespoke & Bridal</div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Hero Visual Card / Showcase (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame border */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/30 via-[#800020]/15 to-[#008080]/20 blur-md -z-10" />

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 bg-white shadow-2xl card-luxury-hover"
              >
                {/* Hero Showcase Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                  <img
                    src="https://i.imgur.com/1c0Mo1U.png"
                    alt="CEO, ToUnik Textile"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-transparent to-black/20" />

                  {/* Floating Cultural Tag */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37] flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping" />
                    <span className="text-[11px] font-bold text-[#0B132B]">Brand Leadership</span>
                  </div>

                  {/* Bottom Image Caption Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0B132B]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/20 space-y-1 shadow-xl text-white"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
                        CEO, ToUnik Textile
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#0B132B] uppercase tracking-wider">
                        Founder
                      </span>
                    </div>
                    <p className="font-serif-luxury italic text-[11px] sm:text-xs text-[#F3E7C4] font-medium">
                      “Championing authentic Yoruba textile artistry and royal elegance for the world.”
                    </p>
                  </motion.div>
                </div>

              </motion.div>

              {/* Floating Accent Badge with Teal & Gold border */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-2 sm:-left-4 sm:-bottom-5 bg-white text-[#0B132B] p-2.5 sm:p-3.5 rounded-xl border-2 border-[#D4AF37] shadow-xl flex items-center gap-2.5 sm:gap-3 rotate-[-1deg] max-w-[90%] sm:max-w-none z-20"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0B132B] flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <AdirePattern variant="cowrie" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0B132B]">Classic Batik Art</div>
                  <div className="text-[10px] sm:text-[11px] text-gray-600 font-medium">100% Combed Cotton Weave</div>
                </div>
              </motion.div>

            </div>

            {/* Video Showcase Card - Placed Directly Below the CEO Picture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 sm:mt-10 relative"
            >
              {/* Decorative background glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#D4AF37]/25 via-[#800020]/15 to-[#008080]/20 blur-md -z-10" />

              <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#0B132B] shadow-2xl text-white">
                {/* Video Header Bar */}
                <div className="bg-[#0B132B] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FAF8F5]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                      <Film className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                        <span>ToUnik Textiles in Motion</span>
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      </h3>
                      <p className="text-[10px] text-white/60 font-serif-luxury italic">
                        Experience the Living Craftsmanship & Dynamic Flow
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Volume2 className="w-3.5 h-3.5 text-[#2DD4BF]" />}
                      <span className="text-[10px] hidden sm:inline">{isMuted ? "Unmute" : "Muted"}</span>
                    </button>
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="p-1.5 rounded-lg bg-[#D4AF37] hover:bg-white text-[#0B132B] transition-colors cursor-pointer font-bold flex items-center gap-1 text-[10px] uppercase tracking-wider"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span className="hidden sm:inline">{isPlaying ? "Pause" : "Play"}</span>
                    </button>
                  </div>
                </div>

                {/* Video Player Container */}
                <div className="relative aspect-video bg-black overflow-hidden group">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    poster="https://i.imgur.com/1c0Mo1U.png"
                  >
                    <source src="https://i.imgur.com/XjO4saQ.mp4" type="video/mp4" />
                    <source src="https://imgur.com/XjO4saQ.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Play prompt when paused and not interacted */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 hover:bg-black/20 flex flex-col items-center justify-center transition-all cursor-pointer group-hover:scale-100"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37] text-[#0B132B] flex items-center justify-center shadow-2xl pl-1"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                      </motion.div>
                      <span className="mt-2.5 text-xs font-bold text-white uppercase tracking-widest bg-[#0B132B]/80 px-3 py-1 rounded-full border border-white/20">
                        Watch Textile Showcase
                      </span>
                    </div>
                  )}
                </div>

                {/* Video Footer Caption */}
                <div className="px-4 py-2.5 bg-[#0B132B]/90 border-t border-white/10 flex items-center justify-between text-[11px] text-white/75">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Pure Organic Indigo & Traditional Batik Movement</span>
                  </div>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[10px]">
                    HD Showcase
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-gray-500 hover:text-[#B8860B] transition-colors cursor-pointer" onClick={onExploreFabrics}>
        <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Discover Fabrics</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#B8860B]" />
      </div>
    </section>
  );
};
