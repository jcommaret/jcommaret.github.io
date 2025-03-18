import React from 'react';
import { AboutSection } from './adapters/primary/AboutSection';
import { ProjectList } from './adapters/primary/ProjectList';
import { SkillList } from './adapters/primary/SkillList';
import { ExperienceList } from './adapters/primary/ExperienceList';
import { ContactSection } from './adapters/primary/ContactSection';

const App: React.FC = () => {
  return (
    <div className="app">
      <AboutSection />
      <ProjectList />
      <SkillList />
      <ExperienceList />
      <ContactSection />
    </div>
  );
};

export default App; 