import React from 'react';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const categories = [
    { name: "Frontend", items: portfolioData.skills.frontend, color: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
    { name: "Backend", items: portfolioData.skills.backend, color: "bg-purple-500/10 border-purple-500/20 text-purple-300" },
    { name: "AI / ML & Data", items: [...portfolioData.skills.devops], color: "bg-teal-500/10 border-teal-500/20 text-teal-300" }, // devops is closest to this category in current data structure
    { name: "Core & Soft", items: portfolioData.skills.soft, color: "bg-rose-500/10 border-rose-500/20 text-rose-300" }
  ];

  return (
    <Section id="skills" className="bg-surface">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-gray-400">Mastering the modern web and AI stack.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <motion.div 
            key={idx}
            className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
      </div>
    </Section>
  );
};
