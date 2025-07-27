import React, { createContext, useContext, useState, useEffect } from 'react';

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
    intro: string;
    description: string;
    skills: {
      fullStack: {
        title: string;
        description: string;
      };
      uiux: {
        title: string;
        description: string;
      };
      performance: {
        title: string;
        description: string;
      };
      collaboration: {
        title: string;
        description: string;
      };
    };
  };
  projects: {
    title: string;
    viewProject: string;
    description: string;
    filters: {
      all: string;
      web: string;
      mobile: string;
      ai: string;
      blockchain: string;
    };
    items: {
      neuralNetwork: {
        title: string;
        description: string;
      };
      cloudInfra: {
        title: string;
        description: string;
      };
      realTimeCollab: {
        title: string;
        description: string;
      };
      aiCodeAssist: {
        title: string;
        description: string;
      };
      blockchainAnalytics: {
        title: string;
        description: string;
      };
      mobileFitness: {
        title: string;
        description: string;
      };
    };
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
    social: {
      connectWith: string;
      github: string;
      linkedin: string;
      email: string;
    };
  };
  footer: {
    company: {
      name: string;
      description: string;
    };
    quickLinks: {
      title: string;
      home: string;
      about: string;
      projects: string;
      contact: string;
    };
    services: {
      title: string;
      webDev: string;
      mobileDev: string;
      uiDesign: string;
      consulting: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
    social: {
      title: string;
    };
    bottom: {
      copyright: string;
      privacy: string;
      terms: string;
    };
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
      description: 'From mini productivity tools to experiments with AI, I\'m always exploring what technology can do — not just what it is. I enjoy crafting experiences, solving problems, and pushing the boundaries of what a solo dev can create.\n\nMy long-term goal? Build something that helps thousands of people. Maybe millions.',
    },
    projects: {
      title: 'Our Projects',
      viewProject: 'View Project',
      description: 'Discover our latest work and see how we transform ideas into stunning digital experiences.',
      filters: {
        all: 'All Projects',
        web: 'Web Development',
        mobile: 'Mobile Apps',
        ai: 'AI/ML',
        blockchain: 'Blockchain'
      },
      items: {
    },
    contact: {
      title: 'Get In Touch',
      description: 'Ready to bring your vision to life? Let\'s create something amazing together.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      location: 'Based in Ankara, Turkey - Working Worldwide',
      ctaTitle: 'Ready to Start Your Project?',
      ctaDescription: 'We\'d love to hear about your ideas and discuss how we can help bring them to life.',
      ctaButton: 'Start a Conversation',
      social: {
        connectWith: 'Connect with us via',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      }
    },
    footer: {
      company: {
        name: 'Emfinity Interactive',
        description: 'Creating innovative digital experiences that push the boundaries of what\'s possible. From concept to deployment, we craft solutions that make a difference.',
      },
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
      services: {
        title: 'Services',
        webDev: 'Web Development',
        mobileDev: 'Mobile Apps',
        uiDesign: 'UI/UX Design',
        consulting: 'Tech Consulting',
      },
      contact: {
        title: 'Contact Info',
        email: 'hello@emfinity.com',
        phone: '+90 (312) 123-4567',
        address: 'Ankara, Turkey',
      },
      social: {
        title: 'Follow Us',
      },
      bottom: {
        copyright: '© 2025 Emfinity Interactive. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
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
      title: 'Yeni başlıyoruz.',
      subtitle: "Mümkün olanın sınırlarını zorlayan yenilikçi dijital deneyimler yaratan kreatif bir yazılım stüdyosuyuz.",
      viewWork: 'Çalışmalarımızı Gör',
      getInTouch: 'İletişime Geç',
    },
    about: {
      title: 'Hakkımızda',
      description: 'Mini verimlilik araçlarından AI deneylerine kadar, teknolojinin ne yapabileceğini - sadece ne olduğunu değil - sürekli keşfediyorum. Deneyimler yaratmayı, problemleri çözmeyi ve solo bir geliştiricinin ne yaratabileceginin sınırlarını zorlamayı seviyorum.\n\nUzun vadeli hedefim? Binlerce insana yardımcı olan bir şey inşa etmek. Belki milyonlarca.',
    },
    projects: {
      title: 'Projelerimiz',
      viewProject: 'Projeyi Gör',
      description: 'En son çalışmalarımızı keşfedin ve fikirleri çarpıcı dijital deneyimlere nasıl dönüştürdüğümüzü görün.',
      filters: {
        all: 'Tüm Projeler',
        web: 'Web Geliştirme',
        mobile: 'Mobil Uygulamalar',
        ai: 'AI/ML',
        blockchain: 'Blockchain'
      },
      items: {
    },
    contact: {
      title: 'İletişime Geçin',
      description: 'Vizyonunuzu hayata geçirmeye hazır mısınız? Birlikte harika bir şey yaratalım.',
      name: 'İsim',
      email: 'E-posta',
      message: 'Mesaj',
      send: 'Mesaj Gönder',
      location: 'Ankara, Türkiye merkezli - Dünya çapında çalışıyoruz',
      ctaTitle: 'Projenizi Başlatmaya Hazır mısınız?',
      ctaDescription: 'Fikirlerinizi duymayı ve onları hayata geçirmenize nasıl yardımcı olabileceğimizi tartışmayı çok isteriz.',
      ctaButton: 'Sohbete Başla',
      social: {
        connectWith: 'Bizimle iletişim kurun',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'E-posta'
      }
    },
    footer: {
      company: {
        name: 'Emfinity Interactive',
        description: 'Mümkün olanın sınırlarını zorlayan yenilikçi dijital deneyimler yaratıyoruz. Konseptten dağıtıma, fark yaratan çözümler üretiyoruz.',
      },
      quickLinks: {
        title: 'Hızlı Bağlantılar',
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        projects: 'Projeler',
        contact: 'İletişim',
      },
      services: {
        title: 'Hizmetler',
        webDev: 'Web Geliştirme',
        mobileDev: 'Mobil Uygulamalar',
        uiDesign: 'UI/UX Tasarım',
        consulting: 'Teknoloji Danışmanlığı',
      },
      contact: {
        title: 'İletişim Bilgileri',
        email: 'hello@emfinity.com',
        phone: '+90 (312) 123-4567',
        address: 'Ankara, Türkiye',
      },
      social: {
        title: 'Bizi Takip Edin',
      },
      bottom: {
        copyright: '© 2025 Emfinity Interactive. Tüm hakları saklıdır.',
        privacy: 'Gizlilik Politikası',
        terms: 'Hizmet Şartları',
      },
    },
  },
};

// Language Context
interface LanguageContextType {
  currentLanguage: Language;
  t: LanguageContent;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  // Load saved language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const value: LanguageContextType = {
    currentLanguage,
    t: translations[currentLanguage],
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
