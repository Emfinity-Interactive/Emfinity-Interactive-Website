import { useState, useEffect } from 'react';

export type Language = 'en' | 'tr';

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
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
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
    },
    contact: {
      title: 'Get In Touch',
      description: 'Let\'s create something amazing together.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
  },
  tr: {
    navigation: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      projects: 'Projeler',
      contact: 'İletişim',
    },
    hero: {
      title: 'Yolculuğa başlıyoruz.',
      subtitle: 'Mümkün olanın sınırlarını zorlayan yenilikçi dijital deneyimler yaratan yaratıcı bir yazılım stüdyosuyuz.',
      viewWork: 'Çalışmalarımızı İnceleyin',
      getInTouch: 'İletişime Geçin',
    },
    about: {
      title: 'Hakkımızda',
      description: 'Tutkulu geliştiriciler ve tasarımcılardan oluşan bir ekibiz.',
    },
    projects: {
      title: 'Projelerimiz',
      viewProject: 'Projeyi Görüntüle',
    },
    contact: {
      title: 'İletişime Geçin',
      description: 'Birlikte harika bir şeyler yaratın.',
      name: 'İsim',
      email: 'E-posta',
      message: 'Mesaj',
      send: 'Mesaj Gönder',
    },
  },
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
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
