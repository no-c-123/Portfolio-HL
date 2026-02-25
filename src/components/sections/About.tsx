import React from 'react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { profileStore } from '../../stores/profileStore';
import { languageStore } from '../../stores/languageStore';

export const About: React.FC = () => {
  const profile = useStore(profileStore);
  const language = useStore(languageStore);
  const data = portfolioData[language];
  const currentData = data.profiles[profile];

  const focusItems = profile === 'frontend' 
    ? data.ui.focusItems.frontend
    : data.ui.focusItems.fullstack;

  return (
    <Section id="about" className="bg-surface/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">{data.ui.engineeringPhilosophy}</h2>
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${profile}-${language}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p className="border-l-4 border-primary pl-6 italic">
                "{currentData.philosophy}"
              </p>
              <p>
                {currentData.summary}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-1">3+</h3>
              <p className="text-sm text-gray-400">{data.ui.yearsExperience}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-1">99.9%</h3>
              <p className="text-sm text-gray-400">{data.ui.uptimeDelivered}</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-3" />
          <div className="relative bg-surface p-8 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-white">{data.ui.currentFocus}</h3>
            <ul className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${profile}-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {focusItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </motion.div>
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
