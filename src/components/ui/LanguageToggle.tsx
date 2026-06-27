import React from 'react';
import { useStore } from '@nanostores/react';
import { languageStore, setLanguage } from '../../stores/languageStore';
import { motion } from 'framer-motion';

export const LanguageToggle: React.FC = () => {
  const language = useStore(languageStore);

  return (
    <div className="flex items-center rounded-full border border-[rgba(140,133,118,0.28)] bg-white/75 p-1 shadow-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
          language === 'en' ? 'text-[color:var(--color-foreground)]' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 rounded-full border border-[rgba(156,122,46,0.24)] bg-[rgba(200,162,76,0.14)]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      <button
        onClick={() => setLanguage('es')}
        className={`relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
          language === 'es' ? 'text-[color:var(--color-foreground)]' : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]'
        }`}
      >
        {language === 'es' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 rounded-full border border-[rgba(156,122,46,0.24)] bg-[rgba(156,122,46,0.14)]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </button>
    </div>
  );
};
