import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
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
    <footer className="w-full min-w-[320px] bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-3 sm:col-span-2">
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
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-3">
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

          {/* Location Info */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t.footer.location.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary-blue/10 to-primary-turquoise/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary-blue" />
                  </div>
                  <span className="text-sm sm:text-base">Ankara, Türkiye</span>
                </div>
                <div className="w-full h-[150px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <iframe
                    title="Emfinity Interactive Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195800.85797771872!2d32.62259443273921!3d39.90329227941608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1690456789012!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
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
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="w-full md:w-auto">
              <div className="flex flex-col items-center md:items-start space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    {t.footer.bottom.copyright}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary-blue/10 to-primary-turquoise/10 px-4 py-2 rounded-full"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400">Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  <span className="text-sm font-medium bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
                    in Ankara
                  </span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {t.footer.bottom.privacy}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-blue dark:hover:text-primary-turquoise transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {t.footer.bottom.terms}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
