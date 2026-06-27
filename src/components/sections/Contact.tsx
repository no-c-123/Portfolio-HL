import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';

export const Contact: React.FC = () => {
  const language = useStore(languageStore);
  const data = portfolioData[language];

  return (
    <Section id="contact" className="bg-[rgba(243,238,228,0.55)] pb-32">
      <div className="paper-panel mx-auto max-w-5xl p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:items-end">
          <div>
        <span className="eyebrow mb-6">{data.ui.getInTouch}</span>
        
        <h2 className="section-title mb-6">
          {data.ui.letsBuild}
        </h2>
        
        <p className="muted-copy max-w-2xl text-lg leading-relaxed">
          {data.ui.lookingForPartner}
        </p>
          </div>

        <div className="rounded-[1.5rem] border border-[rgba(140,133,118,0.24)] bg-white/72 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
            {language === 'en' ? 'Direct contact' : 'Contacto directo'}
          </p>
          <p className="mb-6 text-lg font-semibold text-[color:var(--color-foreground)]">
            {data.personal.email}
          </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button href={`mailto:${data.personal.email}`} size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            {data.ui.emailMe}
          </Button>
          <Button href={data.personal.socials.linkedin} variant="outline" size="lg" className="w-full sm:w-auto">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <div className="mt-8 flex gap-6">
          <a href={data.personal.socials.github} className="text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-foreground)]">
            <Github size={24} />
          </a>
          <a href={data.personal.socials.linkedin} className="text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-foreground)]">
            <Linkedin size={24} />
          </a>
        </div>
        </div>
      </div>
      </div>
    </Section>
  );
};
