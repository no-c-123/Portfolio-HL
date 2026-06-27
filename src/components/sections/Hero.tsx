import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { ArrowRight, Eye } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';
import { ResumeModal } from '../ui/ResumeModal';

export const Hero: React.FC = () => {
  const language = useStore(languageStore);
  const data = portfolioData[language];
  const currentData = data.profiles.fullstack;
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const profileLabel = language === 'en' ? 'Profile' : 'Perfil';
  const roleLabel = language === 'en' ? 'Role' : 'Rol';
  const emailLabel = language === 'en' ? 'Email' : 'Correo';
  const focusLabel = language === 'en' ? 'Focus' : 'Enfoque';

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumeUrl={currentData.resumeLink} 
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-24 h-px bg-[rgba(140,133,118,0.18)]" />
        <div className="absolute bottom-16 left-1/2 hidden h-[28rem] w-px -translate-x-1/2 bg-[rgba(140,133,118,0.18)] lg:block" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.72fr)] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex max-w-3xl flex-col items-start"
        >
          <span className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {data.ui.available}
          </span>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${language}-title`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]"
            >
              {currentData.title}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={language}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="max-w-4xl text-5xl leading-[0.92] md:text-7xl lg:text-[5.4rem]"
            >
              {currentData.tagline}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${language}-summary`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="muted-copy mt-6 max-w-2xl text-lg leading-relaxed md:text-xl"
            >
              {currentData.summary}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <Button href="#projects" size="lg" className="group">
              {data.ui.viewProjects}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="paper-panel p-6 md:p-8"
        >
          <div className="mb-8 flex items-center justify-between border-b border-[rgba(140,133,118,0.18)] pb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              {profileLabel}
            </p>
            <span className="rounded-full border border-[rgba(156,122,46,0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              {data.personal.location}
            </span>
          </div>

          <dl className="space-y-5">
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">{roleLabel}</dt>
              <dd className="text-base font-medium text-[color:var(--color-foreground)]">{currentData.title}</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">{emailLabel}</dt>
              <dd className="text-base font-medium text-[color:var(--color-foreground)]">{data.personal.email}</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">{focusLabel}</dt>
              <dd className="muted-copy text-base leading-relaxed">{currentData.philosophy}</dd>
            </div>
          </dl>
        </motion.aside>
      </div>
    </section>
  );
};
