import React from 'react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { profileStore } from '../../stores/profileStore';
import { languageStore } from '../../stores/languageStore';

export const Skills: React.FC = () => {
  const profile = useStore(profileStore);
  const language = useStore(languageStore);
  const data = portfolioData[language];

  const categories = profile === 'frontend' ? [
    { name: data.ui.skillsCategories.frontendCore, items: data.skills.frontend, color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
    { name: data.ui.skillsCategories.uiDesign, items: ["Tailwind CSS", "Framer Motion", "Figma", "Responsive Design", "Accessibility"], color: "bg-purple-500/10 border-purple-500/20 text-purple-300" },
    { name: data.ui.skillsCategories.performance, items: ["Core Web Vitals", "SEO", "Lazy Loading", "Image Optimization"], color: "bg-teal-500/10 border-teal-500/20 text-teal-300" },
    { name: data.ui.skillsCategories.tools, items: ["Git", "VS Code", "Chrome DevTools", "Webpack", "Vite"], color: "bg-rose-500/10 border-rose-500/20 text-rose-300" }
  ] : [
    { name: data.ui.skillsCategories.frontend, items: data.skills.frontend, color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
    { name: data.ui.skillsCategories.backend, items: data.skills.backend, color: "bg-purple-500/10 border-purple-500/20 text-purple-300" },
    { name: data.ui.skillsCategories.aiMlData, items: [...data.skills.devops, "Python", "TensorFlow"], color: "bg-teal-500/10 border-teal-500/20 text-teal-300" },
    { name: data.ui.skillsCategories.coreSoft, items: data.skills.soft, color: "bg-rose-500/10 border-rose-500/20 text-rose-300" }
  ];

  return (
    <Section id="skills" className="bg-surface">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{data.ui.technicalExpertise}</h2>
        <p className="text-gray-400">
          {profile === 'fullstack' ? data.ui.technicalExpertiseSubtitle.fullstack : data.ui.technicalExpertiseSubtitle.frontend}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode='wait'>
          {categories.map((category, idx) => (
            <motion.div 
              key={`${profile}-${language}-${idx}`}
              className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx} 
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${category.color} transition-all hover:scale-105`}
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
