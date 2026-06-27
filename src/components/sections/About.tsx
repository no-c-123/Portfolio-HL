import React from 'react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';

export const About: React.FC = () => {
  const language = useStore(languageStore);
  const data = portfolioData[language];
  const currentData = data.profiles.fullstack;
  const focusItems = data.ui.focusItems.fullstack;

  return (
    <Section id="about" className="bg-[rgba(243,238,228,0.45)]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-start">
        <div>
          <span className="eyebrow mb-6">{data.ui.engineeringPhilosophy}</span>
          <h2 className="section-title mb-8">{data.ui.engineeringPhilosophy}</h2>
          <AnimatePresence mode="wait">
            <motion.div 
              key={language}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 text-lg leading-relaxed"
            >
              <p className="border-l-2 border-primary pl-5 text-2xl italic text-[color:var(--color-foreground)] md:text-[2rem]">
                {currentData.philosophy}
              </p>
              <p className="muted-copy max-w-2xl">
                {currentData.summary}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="paper-panel p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">{data.ui.currentFocus}</h3>
            <ul className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${language}-focus`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {focusItems.map((item, i) => (
                    <li key={i} className="mb-4 flex items-start gap-3 border-b border-[rgba(140,133,118,0.16)] pb-4 last:mb-0 last:border-b-0 last:pb-0">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="muted-copy">{item}</span>
                    </li>
                  ))}
                </motion.div>
              </AnimatePresence>
            </ul>
        </div>
      </div>
    </Section>
  );
};
