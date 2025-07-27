import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedBackground } from '../AnimatedBackground';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [logoSrc, setLogoSrc] = useState(isDark ? "/logo_light.svg" : "/logo_dark.svg");

  // Logo src'ini theme değişikliğinde güncelle
  useEffect(() => {
    const newLogoSrc = isDark ? "/logo_light.svg" : "/logo_dark.svg";
    console.log('HeroSection: Theme changed, isDark:', isDark, 'newLogoSrc:', newLogoSrc);
    // Force re-render with a slight delay to ensure theme change is processed
    setTimeout(() => {
      setLogoSrc(newLogoSrc);
    }, 50);
  }, [isDark]);
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-turquoise rounded-full blur-2xl opacity-40 animate-pulse scale-110" />
              <div className="relative p-2 rounded-full">
                <img 
                  key={`hero-logo-${isDark ? 'dark' : 'light'}-${Date.now()}`}
                  src={`${logoSrc}?t=${Date.now()}`}
                  alt="Emfinity Interactive" 
                  className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 object-contain transition-all duration-500"
                  onLoad={() => console.log('Hero logo loaded:', logoSrc, 'isDark:', isDark)}
                  onError={() => console.log('Hero logo failed to load:', logoSrc)}
                />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-blue via-primary-gradient to-primary-turquoise bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(27, 60, 143, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t.hero.viewWork}
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-blue dark:border-primary-turquoise text-primary-blue dark:text-primary-turquoise font-semibold rounded-full hover:bg-primary-blue hover:text-white dark:hover:bg-primary-turquoise dark:hover:text-primary-dark transition-all duration-300"
            >
              {t.hero.getInTouch}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};