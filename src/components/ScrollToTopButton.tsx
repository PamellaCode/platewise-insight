
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour détecter quand afficher le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton quand on a défilé de 300px ou plus
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Nettoyage de l'event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed right-6 bottom-6 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={scrollToTop}
            className={cn(
              "flex items-center justify-center p-3 rounded-full",
              "bg-gradient-to-r from-argus-blue-500 to-argus-blue-600",
              "text-white shadow-lg hover:shadow-xl",
              "transition-all duration-300"
            )}
            aria-label="Remonter en haut"
          >
            <div className="relative">
              <Car className="h-6 w-6" />
              <motion.div 
                className="absolute -bottom-2 h-[2px] w-full bg-white rounded"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
