import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NavItem } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDark, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(isDark ? "/logo_light.svg" : "/logo_dark.svg");
  const { t } = useLanguage();

  // Logo src'ini theme değişikliğinde güncelle
  useEffect(() => {
    const newLogoSrc = isDark ? "/logo_light.svg" : "/logo_dark.svg";
    console.log('Navigation: Theme changed, isDark:', isDark, 'newLogoSrc:', newLogoSrc);
    setLogoSrc(newLogoSrc);
  }, [isDark]);

  // Dynamic nav items based on language
  const navItems: NavItem[] = [
    { id: 'home', label: t.navigation.home, href: '#home' },
    { id: 'about', label: t.navigation.about, href: '#about' },
    { id: 'projects', label: t.navigation.projects, href: '#projects' },
    { id: 'contact', label: t.navigation.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              key={`nav-logo-${isDark ? 'dark' : 'light'}`}
              src={logoSrc}
              alt="Emfinity Interactive" 
              className="h-14 w-14 object-contain transition-all duration-500"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
              Emfinity Interactive
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-blue dark:text-primary-turquoise'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-turquoise'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-turquoise"
                  />
                )}
              </motion.button>
            ))}
            <div className="flex items-center space-x-3">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-blue dark:text-primary-turquoise bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-turquoise hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};