import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './hooks/useLanguage';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <Navigation isDark={isDark} onThemeToggle={toggleTheme} />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
