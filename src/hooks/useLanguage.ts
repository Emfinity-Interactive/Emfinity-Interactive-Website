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

const translations: LanguageContent = {
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
};

export const useLanguage = () => {
  return {
    t: translations,
  };
};
