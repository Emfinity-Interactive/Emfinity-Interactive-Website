import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  const skills = [
    {
      icon: Code,
      title: t.about.skills.fullStack.title,
      description: t.about.skills.fullStack.description
    },
    {
      icon: Palette,
      title: t.about.skills.uiux.title,
      description: t.about.skills.uiux.description
    },
    {
      icon: Zap,
      title: t.about.skills.performance.title,
      description: t.about.skills.performance.description
    },
    {
      icon: Users,
      title: t.about.skills.collaboration.title,
      description: t.about.skills.collaboration.description
    }
  ];

  const techSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "Mobile Development", level: 80 },
    { name: "Cloud & DevOps", level: 75 }
  ];
  
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              {t.about.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {t.about.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-primary-blue/10 to-primary-turquoise/10 rounded-full group-hover:from-primary-blue/20 group-hover:to-primary-turquoise/20 transition-all duration-300">
                    <skill.icon className="w-8 h-8 text-primary-blue dark:text-primary-turquoise" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary-blue to-primary-turquoise bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-primary-blue dark:text-primary-turquoise">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-blue to-primary-turquoise rounded-full shadow-lg"
                    style={{
                      boxShadow: `0 0 10px rgba(34, 211, 238, 0.5)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};