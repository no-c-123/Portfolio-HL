import React from 'react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-surface/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Engineering Philosophy</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="border-l-4 border-primary pl-6 italic">
              "{portfolioData.about.philosophy}"
            </p>
            <p>
              {portfolioData.about.summary}
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-1">3+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-1">99.9%</h3>
              <p className="text-sm text-gray-400">Uptime Delivered</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-3" />
          <div className="relative bg-surface p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-white">Current Focus</h3>
            <ul className="space-y-4">
              {[
                "Building scalable AI-driven applications",
                "Optimizing frontend performance (Core Web Vitals)",
                "Architecting serverless backend solutions",
                "Exploring Large Language Model integrations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
