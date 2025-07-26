import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@emfinity.com',
    color: 'hover:text-red-500'
  }
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group block"
            >
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-primary-blue/10 to-primary-turquoise/10 rounded-full group-hover:from-primary-blue/20 group-hover:to-primary-turquoise/20 transition-all duration-300">
                    <link.icon className={`w-8 h-8 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${link.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {link.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with us on {link.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-8">
            <MapPin className="w-5 h-5" />
            <span>Based in the Digital Realm, Working Globally</span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-primary-blue to-primary-turquoise p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
              <p className="text-blue-100 mb-4">
                Let's turn your vision into reality
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-primary-blue font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};