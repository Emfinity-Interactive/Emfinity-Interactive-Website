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

const translations: LanguageContent = {
  navigation: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    title: 'Creating Digital Magic.',
    subtitle: "We're a creative software studio crafting innovative digital experiences that push the boundaries of what's possible.",
    viewWork: 'View Our Work',
    getInTouch: 'Get In Touch',
  },
  about: {
    title: 'About Us',
    description: 'We are a passionate team of developers and designers creating innovative digital solutions. With expertise in modern web technologies and a keen eye for design, we transform ideas into reality.',
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
    location: 'Based in Turkey, Working Worldwide',
    ctaTitle: 'Ready to Start Your Project?',
    ctaDescription: 'We\'d love to hear about your ideas and discuss how we can help bring them to life.',
    ctaButton: 'Start a Conversation',
  },
};

export const useLanguage = () => {
  return {
    t: translations,
  };
};
