import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const ProjectsSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const getProjectContent = (index: number) => {
    const projectKeys = ['neuralNetwork', 'cloudInfra', 'realTimeCollab', 'aiCodeAssist', 'blockchainAnalytics', 'mobileFitness'] as const;
    const key = projectKeys[index];
    return t.projects.items[key];
  };

  const filters = currentLanguage === 'tr' ? [
    { key: 'all', label: 'Tüm Projeler' },
    { key: 'web', label: 'Web Geliştirme' },
    { key: 'mobile', label: 'Mobil Uygulamalar' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'blockchain', label: 'Blockchain' }
  ] : [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'blockchain', label: 'Blockchain' }
  ];

  const projects = [
    {
      id: 1,
      category: 'ai',
      technologies: ["React", "TypeScript", "D3.js", "TensorFlow.js"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      category: 'web',
      technologies: ["Next.js", "Node.js", "AWS", "Docker", "Kubernetes"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      category: 'web',
      technologies: ["React", "WebRTC", "Socket.io", "MongoDB", "Express"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 4,
      category: 'ai',
      technologies: ["TypeScript", "Python", "OpenAI API", "VS Code API"],
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 5,
      category: 'blockchain',
      technologies: ["Vue.js", "Web3.js", "Chart.js", "Solidity", "Ethereum"],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 6,
      category: 'mobile',
      technologies: ["React Native", "Firebase", "TensorFlow", "Redux"],
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              {t.projects.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            {t.projects.description}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-gradient-to-r from-primary-blue to-primary-turquoise text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const content = getProjectContent(index);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={content.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 text-primary-blue" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5 text-primary-blue" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-blue dark:group-hover:text-primary-turquoise transition-colors duration-300">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {content.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-blue/10 to-primary-turquoise/10 text-primary-blue dark:text-primary-turquoise text-sm rounded-full font-medium border border-primary-blue/20 dark:border-primary-turquoise/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex space-x-4">
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-turquoise text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>{currentLanguage === 'tr' ? 'Canlı Demo' : 'Live Demo'}</span>
                              </motion.a>
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 px-4 py-2 border-2 border-primary-blue dark:border-primary-turquoise text-primary-blue dark:text-primary-turquoise rounded-lg font-semibold hover:bg-primary-blue hover:text-white dark:hover:bg-primary-turquoise dark:hover:text-primary-dark transition-all duration-300"
                              >
                                <Github className="w-4 h-4" />
                                <span>{currentLanguage === 'tr' ? 'Kaynak Kod' : 'Source'}</span>
                              </motion.a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};