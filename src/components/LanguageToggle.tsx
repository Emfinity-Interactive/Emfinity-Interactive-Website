
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Language } from '../hooks/useLanguage';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Dışarı tıklanınca menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-200"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'TR'}</span>
      </motion.button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-24 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <motion.button
            onClick={() => { onLanguageChange('en'); setOpen(false); }}
            className={`w-full px-3 py-2 text-left text-sm rounded-t-lg transition-colors duration-200 ${
              language === 'en'
                ? 'bg-primary-blue text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            🇺🇸 EN
          </motion.button>
          <motion.button
            onClick={() => { onLanguageChange('tr'); setOpen(false); }}
            className={`w-full px-3 py-2 text-left text-sm rounded-b-lg transition-colors duration-200 ${
              language === 'tr'
                ? 'bg-primary-blue text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            🇹🇷 TR
          </motion.button>
        </div>
      )}
    </div>
  );
};
