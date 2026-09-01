import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AdirePattern } from './AdirePattern';

interface NavbarProps {
  onOpenEnquiry: (fabricName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on scroll
      const sections = ['home', 'about', 'fabrics', 'why-us', 'heritage', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Fabrics', href: '#fabrics', id: 'fabrics' },
    { name: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { name: 'Adire Heritage', href: '#heritage', id: 'heritage' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    setActiveSection(targetId);

    // Smooth scroll with proper delay so mobile drawer dismiss doesn't skew document coordinates
    setTimeout(() => {
      const targetElement = document.getElementById(targetId) || document.querySelector(href);
      if (targetElement) {
        const navHeight = window.innerWidth < 640 ? 68 : 80;
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - navHeight;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth',
        });
      }
    }, 60);
  };

  return (
    <>
      <motion.header
        id="main-navbar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#008080]/98 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-xl py-2'
            : 'bg-[#008080] border-b border-[#006666] py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Name */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-xl p-1 max-w-[calc(100%-54px)] sm:max-w-none"
            >
              <motion.div
                whileHover={{ scale: 1.06, rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.3 }}
                className="w-11 h-11 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F3E7C4] to-[#D4AF37] p-[1.5px] sm:p-[2px] shadow-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] group-hover:scale-105 transition-all duration-300 overflow-hidden flex-shrink-0"
              >
                <img
                  src="https://i.imgur.com/vnTwcr0.png"
                  alt="ToUnik Textiles Official Logo"
                  className="w-full h-full object-cover rounded-full bg-white transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-base sm:text-2xl md:text-3xl font-bold tracking-wider sm:tracking-widest text-white leading-tight group-hover:text-[#D4AF37] transition-colors truncate">
                  TOUNIK <span className="text-[#D4AF37] font-semibold">TEXTILES</span>
                </span>
                <span className="font-serif-luxury italic text-[10px] sm:text-xs md:text-sm text-[#F3E7C4] font-medium tracking-wide sm:tracking-wider mt-0.5 truncate">
                  Rooted in Tradition, Made for You
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-xs uppercase tracking-widest font-semibold rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'text-[#D4AF37] bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#D4AF37] transition-transform duration-200 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                id="header-phone-link"
                href="tel:08039841783"
                className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#D4AF37] transition-colors px-3 py-1.5 rounded-lg border border-white/25 hover:border-[#D4AF37] bg-white/10 backdrop-blur-xs shadow-xs"
                title="Call ToUnik Textiles"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>08039841783</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(212,175,55,0.6)' }}
                whileTap={{ scale: 0.97 }}
                id="nav-enquire-now-btn"
                onClick={() => onOpenEnquiry()}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#0B132B] bg-[#D4AF37] hover:bg-white hover:text-[#008080] transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Shop / Enquire</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B]" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-xl text-white hover:text-[#D4AF37] hover:bg-white/15 active:bg-white/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-transform cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="lg:hidden bg-[#006b6b] border-b border-[#D4AF37]/35 shadow-2xl px-4 sm:px-6 pt-3 pb-6 space-y-3 overflow-y-auto max-h-[calc(100vh-68px)]"
            >
              {/* Navigation Links List */}
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.035, duration: 0.2 }}
                      id={`mobile-nav-${link.id}`}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`min-h-[48px] px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-bold flex items-center justify-between transition-all active:scale-[0.98] cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#0B132B] shadow-md border-l-4 border-[#D4AF37]'
                          : 'text-white hover:text-[#D4AF37] hover:bg-white/10 active:bg-white/20'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                        <span>{link.name}</span>
                      </span>
                      <AdirePattern
                        variant="spiral"
                        color={isActive ? '#0B132B' : '#D4AF37'}
                        className="w-4 h-4 opacity-90"
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Direct Action Controls */}
              <div className="pt-3 border-t border-white/15 flex flex-col gap-2.5">
                <a
                  id="mobile-phone-call-btn"
                  href="tel:08039841783"
                  className="min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 active:bg-white/30 border border-white/20 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Direct Call: 08039841783</span>
                </a>

                <button
                  id="mobile-enquire-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="min-h-[48px] w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0B132B] bg-[#D4AF37] hover:bg-white active:scale-[0.98] transition-all shadow-lg cursor-pointer"
                >
                  <span>Shop / Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#0B132B]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop overlay on mobile when menu is open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
