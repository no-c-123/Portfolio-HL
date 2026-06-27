import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { Check, ExternalLink, Github, X } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../../stores/languageStore';
import { AnimatePresence, motion } from 'framer-motion';

export const Projects: React.FC = () => {
  const language = useStore(languageStore);
  const data = portfolioData[language];
  const [openTimeline, setOpenTimeline] = useState<string | null>(null);
  
  const filteredProjects = data.projects.filter(project => 
    project.tags.includes('fullstack')
  );

  return (
    <Section id="projects" className="bg-transparent">
      <AnimatePresence>
        {openTimeline && (() => {
          const activeProject = filteredProjects.find((project) => project.title === openTimeline);

          if (!activeProject?.timeline) {
            return null;
          }

          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(22,21,18,0.42)] p-4 backdrop-blur-sm"
              onClick={() => setOpenTimeline(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.22 }}
                className="paper-panel relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 border-b border-[rgba(140,133,118,0.18)] p-5 md:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                      {data.ui.timelineLabel}
                    </p>
                    <h3 className="mt-2 text-4xl leading-none">{activeProject.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {activeProject.timeline.summary}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenTimeline(null)}
                    className="rounded-full p-2 text-[color:var(--color-muted)] transition-colors hover:bg-black/5 hover:text-[color:var(--color-foreground)]"
                    aria-label={data.ui.hideTimeline}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="overflow-y-auto p-5 md:p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {activeProject.timeline.phases.map((phase) => (
                      <div
                        key={phase.title}
                        className="rounded-[1.25rem] border border-[rgba(140,133,118,0.16)] bg-white/70 p-4"
                      >
                        <h4 className="text-base font-semibold text-[color:var(--color-foreground)]">
                          {phase.title}
                        </h4>
                        <ul className="mt-3 space-y-2.5">
                          {phase.items.map((item) => (
                            <li key={item.label} className="flex items-start gap-3">
                              <span className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${item.done ? 'border-[rgba(156,122,46,0.28)] bg-[rgba(200,162,76,0.12)] text-[color:var(--color-secondary)]' : 'border-[rgba(140,133,118,0.24)] bg-transparent text-transparent'}`}>
                                <Check size={12} />
                              </span>
                              <span className={`text-sm leading-relaxed ${item.done ? 'text-[color:var(--color-foreground)]' : 'text-[color:var(--color-muted)]'}`}>
                                {item.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-[color:var(--color-muted)]">
                    {activeProject.timeline.marker}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      <div className="mb-16 flex flex-col items-center text-center">
        <span className="eyebrow mb-6">{data.ui.selectedProjects}</span>
        <h2 className="section-title mb-5">{data.ui.selectedProjects}</h2>
        <p className="muted-copy max-w-3xl text-lg leading-relaxed">
          {data.ui.selectedProjectsSubtitle.fullstack}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={`${project.title}-${language}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.25 }}
            className="paper-panel overflow-hidden"
          >
            <div className={`grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
              <div className="relative min-h-[18rem] border-b border-[rgba(140,133,118,0.18)] bg-[rgba(22,21,18,0.03)] lg:min-h-[26rem] lg:border-b-0 lg:border-r">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                      {data.ui.projectStatus}
                    </span>
                    <span className="rounded-full border border-[rgba(156,122,46,0.24)] bg-[rgba(200,162,76,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-secondary)]">
                      {project.status === 'in-progress' ? data.ui.statusLabels.inProgress : data.ui.statusLabels.completed}
                    </span>
                  </div>

                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-4xl leading-none">{project.title}</h3>
                      <p className="mt-3 text-lg font-medium text-[color:var(--color-secondary)]">{project.description}</p>
                    </div>
                    <a
                      href={project.link}
                      className="rounded-full border border-[rgba(140,133,118,0.28)] p-3 text-[color:var(--color-foreground)] transition-colors hover:border-[rgba(156,122,46,0.3)] hover:text-[color:var(--color-secondary)]"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <p className="muted-copy text-base leading-relaxed md:text-[1.02rem]">
                    {project.longDescription}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[rgba(140,133,118,0.24)] bg-white/70 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[color:var(--color-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.timeline && (
                      <Button
                        onClick={() => setOpenTimeline(project.title)}
                        variant="ghost"
                        size="sm"
                      >
                        {data.ui.timelineHint}
                      </Button>
                    )}
                    <Button href={project.link} variant="outline" size="sm">
                      {data.ui.viewCaseStudy}
                    </Button>
                    {project.github !== '#' && (
                      <Button href={project.github} variant="ghost" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        {data.ui.sourceCode}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
