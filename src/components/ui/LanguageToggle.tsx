import React from 'react';
import { useStore } from '@nanostores/react';
import { languageStore, setLanguage } from '../../stores/languageStore';
import { motion } from 'framer-motion';

export const LanguageToggle: React.FC = () => {
  const language = useStore(languageStore);

  return (
    <div className="flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm ml-4">
      <button
        onClick={() => setLanguage('en')}
        className={`relative flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors ${
          language === 'en' ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      <button
        onClick={() => setLanguage('es')}
        className={`relative flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors ${
          language === 'es' ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
      >
        {language === 'es' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-secondary/20 rounded-full border border-secondary/30"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </button>
    </div>
  );
};
