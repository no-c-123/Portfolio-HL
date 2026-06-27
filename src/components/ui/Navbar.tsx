import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';
import { portfolioData } from '../../data/portfolio';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const language = useStore(languageStore);
  const ui = portfolioData[language].ui;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: ui.nav.projects, href: '#projects' },
    { name: ui.nav.about, href: '#about' },
    { name: ui.nav.skills, href: '#skills' },
    { name: ui.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 md:px-6 transition-all duration-300",
            scrolled
              ? "border-[rgba(140,133,118,0.32)] bg-[rgba(250,248,242,0.86)] py-3 shadow-[0_14px_40px_rgba(22,21,18,0.08)] backdrop-blur-xl"
              : "border-transparent bg-transparent py-2"
          )}
        >
        <a href="#" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-foreground)] transition-colors hover:text-secondary">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(156,122,46,0.24)] bg-[rgba(200,162,76,0.1)] text-[0.7rem] tracking-[0.18em]">HL</span>
          Hector Leal
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-foreground)]"
            >
              {link.name}
            </a>
          ))}
          <Button href="#contact" size="sm" variant="primary">
            {ui.hireMe}
          </Button>
          <div className="pl-1">
            <LanguageToggle />
          </div>
        </div>

        <button 
          className="md:hidden rounded-full border border-[rgba(140,133,118,0.28)] bg-white/70 p-2 text-[color:var(--color-foreground)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden px-4 pt-2"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.75rem] border border-[rgba(140,133,118,0.28)] bg-[rgba(250,248,242,0.96)] p-6 shadow-[0_16px_40px_rgba(22,21,18,0.08)] backdrop-blur-xl">
              <div className="flex justify-center">
                <LanguageToggle />
              </div>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="border-b border-[rgba(140,133,118,0.18)] pb-3 text-base font-medium text-[color:var(--color-foreground)] last:border-b-0 last:pb-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button href="#contact" className="mt-2 w-full">
                {ui.hireMe}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
