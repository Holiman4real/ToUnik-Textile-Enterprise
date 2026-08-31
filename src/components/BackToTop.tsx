import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { AdirePattern } from './AdirePattern';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0A1128] text-[#D4AF37] border-2 border-[#D4AF37]/50 shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-[#162544] active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center group"
      aria-label="Back to Top"
      title="Back to Top"
    >
      <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
