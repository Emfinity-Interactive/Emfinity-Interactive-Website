import { useState, useEffect } from 'react';

export type Language = 'en';

export interface LanguageContent {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    viewProject: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
    location: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
}

const translations: Record<Language, LanguageContent> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Just getting started.',
      subtitle: "We're a creative software studio crafting innovative digital experiences that push the boundaries of what's possible.",
      viewWork: 'View Our Work',
      getInTouch: 'Get In Touch',
    },
    about: {
      title: 'About Us',
      description: 'We are a passionate team of developers and designers.',
    },
    projects: {
      title: 'Our Projects',
      viewProject: 'View Project',
      description: 'Explore our latest work and see how we bring ideas to life.',
    },
    contact: {
      title: 'Get In Touch',
      description: 'Let\'s create something amazing together.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      location: 'Based in Turkey, Working Worldwide',
      ctaTitle: 'Ready to Start Your Project?',
      ctaDescription: 'Let\'s discuss your ideas and bring them to life.',
      ctaButton: 'Start a Conversation',
    },
  },
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = translations[language];

  return {
    language,
    changeLanguage,
    t,
  };
};
