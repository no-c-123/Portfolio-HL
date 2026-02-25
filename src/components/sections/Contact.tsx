import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';

export const Contact: React.FC = () => {
  const language = useStore(languageStore);
  const data = portfolioData[language];

  return (
    <Section id="contact" className="bg-gradient-to-t from-surface to-background pb-32">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          {data.ui.getInTouch}
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          {data.ui.letsBuild}
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          {data.ui.lookingForPartner}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button href={`mailto:${data.personal.email}`} size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            {data.ui.emailMe}
          </Button>
          <Button href={data.personal.socials.linkedin} variant="outline" size="lg" className="w-full sm:w-auto">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <div className="flex gap-8 justify-center">
          <a href={data.personal.socials.github} className="text-gray-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={data.personal.socials.linkedin} className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};
