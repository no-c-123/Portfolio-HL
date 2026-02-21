import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-t from-surface to-background pb-32">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Get in Touch
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Let's build something exceptional.
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          Looking for a partner to bring your vision to life? I'm currently available for new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button href={`mailto:${portfolioData.personal.email}`} size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
          <Button href={portfolioData.personal.socials.linkedin} variant="outline" size="lg" className="w-full sm:w-auto">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <div className="flex gap-8 justify-center">
          <a href={portfolioData.personal.socials.github} className="text-gray-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={portfolioData.personal.socials.linkedin} className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};
