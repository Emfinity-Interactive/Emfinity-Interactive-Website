import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
              {t.location.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.location.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Ankara, Türkiye</span>
            </div>
            
            {/* Interactive Map */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="Emfinity Interactive Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195800.85797771872!2d32.62259443273921!3d39.90329227941608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1690456789012!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t.location.officeHours}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.location.workingHours}
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t.location.address}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.location.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
