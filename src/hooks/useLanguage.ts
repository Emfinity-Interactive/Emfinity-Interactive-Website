import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'tr';

const translations = {
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
      getInTouch: 'Start a Project',
    },
    about: {
      title: 'About Us',
      intro: "Hi, I'm Emre. I build things for fun, and for the future.",
      description: "At Emfinity Interactive, we're passionate about creating digital experiences that matter.",
      skills: {
        fullStack: {
          title: 'Full-Stack Development',
          description: 'Building robust applications with modern technologies.',
        },
        uiux: {
          title: 'UI/UX Design',
          description: 'Creating beautiful and intuitive user interfaces.',
        },
        performance: {
          title: 'Performance Optimization',
          description: 'Ensuring applications run smoothly and efficiently.',
        },
        collaboration: {
          title: 'Team Collaboration',
          description: 'Working effectively with cross-functional teams.',
        },
      },
    },
    projects: {
      title: 'Our Projects',
      viewProject: 'View Project',
      description: 'Discover our latest work and digital experiences.',
      items: {
        neuralNetwork: {
          title: 'Neural Network Visualizer',
          description: 'Interactive visualization of neural networks.',
        },
        cloudInfra: {
          title: 'Cloud Infrastructure Platform',
          description: 'Scalable cloud solutions with automation.',
        },
        realTimeCollab: {
          title: 'Real-time Collaboration Tool',
          description: 'Live collaborative workspace.',
        },
        aiCodeAssist: {
          title: 'AI Code Assistant',
          description: 'Intelligent code completion system.',
        },
        blockchainAnalytics: {
          title: 'Blockchain Analytics Dashboard',
          description: 'Comprehensive blockchain data analysis.',
        },
        mobileFitness: {
          title: 'Mobile Fitness Application',
          description: 'AI-powered fitness tracking app.',
        },
      },
    },
    contact: {
      title: 'Get In Touch',
      description: 'Ready to bring your vision to life?',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      location: 'Based in Ankara, Turkey',
      ctaTitle: 'Ready to Start Your Project?',
      ctaDescription: 'Let\'s create something amazing together.',
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
      getInTouch: 'Projeye Başla',
    },
    about: {
      title: 'Hakkımızda',
      intro: "Merhaba, ben Emre. Eğlence ve gelecek için şeyler inşa ediyorum.",
      description: "Emfinity Interactive olarak, önemli dijital deneyimler yaratma konusunda tutkulu bir ekibiz.",
      skills: {
        fullStack: {
          title: 'Full-Stack Geliştirme',
          description: 'Modern teknolojilerle sağlam uygulamalar inşa etme.',
        },
        uiux: {
          title: 'UI/UX Tasarım',
          description: 'Güzel ve sezgisel kullanıcı arayüzleri oluşturma.',
        },
        performance: {
          title: 'Performans Optimizasyonu',
          description: 'Uygulamaların sorunsuz çalışmasını sağlama.',
        },
        collaboration: {
          title: 'Takım Çalışması',
          description: 'Çok fonksiyonlu ekiplerle etkili çalışma.',
        },
      },
    },
    projects: {
      title: 'Projelerimiz',
      viewProject: 'Projeyi Gör',
      description: 'En son çalışmalarımızı ve dijital deneyimlerimizi keşfedin.',
      items: {
        neuralNetwork: {
          title: 'Sinir Ağı Görselleştiricisi',
          description: 'Sinir ağlarının etkileşimli görselleştirilmesi.',
        },
        cloudInfra: {
          title: 'Bulut Altyapı Platformu',
          description: 'Otomasyonlu ölçeklenebilir bulut çözümleri.',
        },
        realTimeCollab: {
          title: 'Gerçek Zamanlı İşbirliği Aracı',
          description: 'Canlı işbirliği çalışma alanı.',
        },
        aiCodeAssist: {
          title: 'AI Kod Asistanı',
          description: 'Akıllı kod tamamlama sistemi.',
        },
        blockchainAnalytics: {
          title: 'Blockchain Analitik Paneli',
          description: 'Kapsamlı blockchain veri analizi.',
        },
        mobileFitness: {
          title: 'Mobil Fitness Uygulaması',
          description: 'AI destekli fitness takip uygulaması.',
        },
      },
    },
    contact: {
      title: 'İletişime Geçin',
      description: 'Vizyonunuzu hayata geçirmeye hazır mısınız?',
      name: 'İsim',
      email: 'E-posta',
      message: 'Mesaj',
      send: 'Mesaj Gönder',
      location: 'Ankara, Türkiye merkezli',
      ctaTitle: 'Projenizi Başlatmaya Hazır mısınız?',
      ctaDescription: 'Birlikte harika bir şey yaratalım.',
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

const LanguageContext = createContext<{
  currentLanguage: Language;
  t: typeof translations.en;
  changeLanguage: (lang: Language) => void;
} | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const value = {
    currentLanguage,
    t: translations[currentLanguage],
    changeLanguage,
  };

  return React.createElement(LanguageContext.Provider, { value }, children);
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};