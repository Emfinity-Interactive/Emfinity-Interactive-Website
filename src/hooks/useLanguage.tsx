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
      github: string;
      linkedin: string;
      twitter: string;
      email: string;
      connectWith: string;
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
      intro: "Hi, I'm Emre. I build things for fun, and for the future.",
      description: "At Emfinity Interactive, we're passionate about creating digital experiences that matter. Our team combines technical expertise with creative vision to build software that not only works flawlessly but also inspires and delights users. From concept to deployment, we're committed to pushing the boundaries of what's possible in the digital realm.",
      skills: {
        fullStack: {
          title: 'Full-Stack Development',
          description: 'Building robust applications with modern technologies and best practices.',
        },
        uiux: {
          title: 'UI/UX Design',
          description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
        },
        performance: {
          title: 'Performance Optimization',
          description: 'Ensuring lightning-fast experiences across all devices and platforms.',
        },
        collaboration: {
          title: 'Team Collaboration',
          description: 'Working seamlessly with teams to deliver exceptional results.',
        },
      },
    },
    projects: {
      title: 'Our Projects',
      viewProject: 'View Project',
      description: 'Discover our latest work and see how we transform ideas into stunning digital experiences.',
      items: {
        neuralNetwork: {
          title: 'Neural Network Visualizer',
          description: 'Interactive web application for visualizing and understanding neural network architectures with real-time training visualization.',
        },
        cloudInfra: {
          title: 'Cloud Infrastructure Manager',
          description: 'Full-stack application for managing cloud resources across multiple providers with automated deployment pipelines.',
        },
        realTimeCollab: {
          title: 'Real-time Collaboration Tool',
          description: 'WebRTC-based collaboration platform with live document editing, video calls, and screen sharing capabilities.',
        },
        aiCodeAssist: {
          title: 'AI-Powered Code Assistant',
          description: 'VS Code extension that provides intelligent code suggestions and automated refactoring using machine learning.',
        },
        blockchainAnalytics: {
          title: 'Blockchain Analytics Dashboard',
          description: 'Comprehensive dashboard for analyzing blockchain transactions and DeFi protocols with real-time data visualization.',
        },
        mobileFitness: {
          title: 'Mobile Fitness Tracker',
          description: 'Cross-platform mobile app with AI-powered workout recommendations and social features for fitness enthusiasts.',
        },
      },
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
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        email: 'Email',
        connectWith: 'Connect with us on',
      },
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
      intro: "Merhaba, ben Emre. Eğlence için ve gelecek için şeyler inşa ediyorum.",
      description: "Emfinity Interactive'de, önemli dijital deneyimler yaratma konusunda tutkuluyuz. Ekibimiz teknik uzmanlığı yaratıcı vizyonla birleştirerek sadece kusursuz çalışan değil, aynı zamanda kullanıcıları ilhamlendiren ve memnun eden yazılımlar geliştiriyor. Konseptten dağıtıma kadar, dijital alanda mümkün olanın sınırlarını zorlamaya kararlıyız.",
      skills: {
        fullStack: {
          title: 'Full-Stack Geliştirme',
          description: 'Modern teknolojiler ve en iyi uygulamalarla sağlam uygulamalar geliştirme.',
        },
        uiux: {
          title: 'UI/UX Tasarım',
          description: 'Kullanıcıların etkileşim kurmaktan keyif aldığı güzel, sezgisel arayüzler yaratma.',
        },
        performance: {
          title: 'Performans Optimizasyonu',
          description: 'Tüm cihazlar ve platformlarda yıldırım hızında deneyimler sağlama.',
        },
        collaboration: {
          title: 'Takım Çalışması',
          description: 'Olağanüstü sonuçlar vermek için takımlarla sorunsuz çalışma.',
        },
      },
    },
    projects: {
      title: 'Projelerimiz',
      viewProject: 'Projeyi Gör',
      description: 'En son çalışmalarımızı keşfedin ve fikirleri çarpıcı dijital deneyimlere nasıl dönüştürdüğümüzü görün.',
      items: {
        neuralNetwork: {
          title: 'Sinir Ağı Görselleştiricisi',
          description: 'Gerçek zamanlı eğitim görselleştirmesi ile sinir ağı mimarilerini görselleştirmek ve anlamak için interaktif web uygulaması.',
        },
        cloudInfra: {
          title: 'Bulut Altyapı Yöneticisi',
          description: 'Otomatik dağıtım hatları ile birden fazla sağlayıcıda bulut kaynaklarını yönetmek için full-stack uygulama.',
        },
        realTimeCollab: {
          title: 'Gerçek Zamanlı İş Birliği Aracı',
          description: 'Canlı belge düzenleme, video aramalar ve ekran paylaşımı özellikleri ile WebRTC tabanlı iş birliği platformu.',
        },
        aiCodeAssist: {
          title: 'AI Destekli Kod Asistanı',
          description: 'Makine öğrenmesi kullanarak akıllı kod önerileri ve otomatik yeniden düzenleme sağlayan VS Code eklentisi.',
        },
        blockchainAnalytics: {
          title: 'Blockchain Analitik Paneli',
          description: 'Gerçek zamanlı veri görselleştirmesi ile blockchain işlemlerini ve DeFi protokollerini analiz etmek için kapsamlı panel.',
        },
        mobileFitness: {
          title: 'Mobil Fitness Takipçisi',
          description: 'Fitness meraklıları için AI destekli antrenman önerileri ve sosyal özellikler içeren çapraz platform mobil uygulama.',
        },
      },
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
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        email: 'E-posta',
        connectWith: 'Bizimle iletişime geç',
      },
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
