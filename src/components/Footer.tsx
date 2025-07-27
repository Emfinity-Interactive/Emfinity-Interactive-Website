import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Heart 
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Emfinity-Interactive',
    label: 'github',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/emfinity-interactive',
    label: 'linkedin',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/emfinity_dev',
    label: 'twitter',
    color: 'hover:text-blue-400'
  },
  {
    icon: Mail,
    href: 'mailto:hello@emfinity.com',
    label: 'email',
    color: 'hover:text-red-500'
  }
];

const quickLinks = [
  { href: '#home', label: 'home' },
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' }
];

const services = [
  { label: 'webDev' },
  { label: 'mobileDev' },
  { label: 'uiDesign' },
  { label: 'consulting' }
];

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  key={isDark ? 'footer-dark-theme' : 'footer-light-theme'}
                  src={isDark ? '/logo_light.svg' : '/logo_dark.svg'}
                  alt="Emfinity Interactive" 
                  className="h-10 w-10 object-contain transition-opacity duration-300"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
                  {t.footer.company.name}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {t.footer.company.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color}`}
                    style={{ pointerEvents: 'auto' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(social.href, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t.footer.quickLinks.title}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-300 flex items-center group"
                    >
                      {t.footer.quickLinks[link.label as keyof typeof t.footer.quickLinks]}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t.footer.services.title}
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <span className="text-gray-600 dark:text-gray-400">
                      {t.footer.services[service.label as keyof typeof t.footer.services]}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t.footer.contact.title}
              </h3>
              <div className="flex flex-col space-y-8">
                {/* Location - Üstte */}
                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 text-primary-blue" />
                    <span className="text-base font-medium">{t.footer.contact.address}</span>
                  </div>
                </div>

                {/* CTA Section - Altta */}
                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg p-6 flex flex-col gap-4">
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {t.contact.ctaTitle}
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400">
                    {t.contact.ctaDescription}
                  </div>
                  <button className="px-6 py-3 rounded-lg bg-primary-blue text-white font-semibold hover:bg-primary-turquoise transition-colors duration-300 w-fit">
                    {t.contact.ctaButton}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>{t.footer.bottom.copyright}</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Ankara</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-600 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-300">
                {t.footer.bottom.privacy}
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-300">
                {t.footer.bottom.terms}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
