import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { ArrowRight, ChevronDown, Download, Eye } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { profileStore } from '../../stores/profileStore';
import { languageStore } from '../../stores/languageStore';
import { ResumeModal } from '../ui/ResumeModal';

export const Hero: React.FC = () => {
  const profile = useStore(profileStore);
  const language = useStore(languageStore);
  const data = portfolioData[language];
  const currentData = data.profiles[profile];
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumeUrl={currentData.resumeLink} 
      />

      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          {data.ui.available}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={`${profile}-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {currentData.tagline}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`${profile}-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            {currentData.summary}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button href="#projects" size="lg" className="group">
            {data.ui.viewProjects}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            onClick={() => setIsResumeOpen(true)} 
            variant="outline" 
            size="lg"
          >
            <Eye className="mr-2 h-4 w-4" />
            {data.ui.viewResume}
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};
