import React from 'react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';

export const Skills: React.FC = () => {
  const language = useStore(languageStore);
  const data = portfolioData[language];
  const iosLabel = language === 'en' ? 'Swift & iOS' : 'Swift & iOS';

  const categories = [
    { name: data.ui.skillsCategories.frontend, items: data.skills.frontend },
    { name: data.ui.skillsCategories.backend, items: data.skills.backend },
    { name: data.ui.skillsCategories.aiMlData, items: [...data.skills.devops, "Python", "LLM Integration"] },
    { name: iosLabel, items: ["SwiftUI", "UIKit", "PencilKit", "Swift Concurrency", "Supabase"] }
  ];

  return (
    <Section id="skills" className="bg-transparent">
      <div className="mb-16 text-center">
        <span className="eyebrow mb-6">{data.ui.technicalExpertise}</span>
        <h2 className="section-title mb-5">{data.ui.technicalExpertise}</h2>
        <p className="muted-copy mx-auto max-w-3xl text-lg leading-relaxed">
          {data.ui.technicalExpertiseSubtitle.fullstack}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="wait">
          {categories.map((category, idx) => (
            <motion.div 
              key={`${language}-${idx}`}
              className="paper-panel p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx} 
                    className="rounded-full border border-[rgba(140,133,118,0.24)] bg-white/78 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[color:var(--color-foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
