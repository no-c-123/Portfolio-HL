import React from 'react';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { profileStore } from '../../stores/profileStore';
import { languageStore } from '../../stores/languageStore';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const profile = useStore(profileStore);
  const language = useStore(languageStore);
  const data = portfolioData[language];
  
  const filteredProjects = data.projects.filter(project => 
    project.tags.includes(profile)
  );

  return (
    <Section id="projects" className="bg-surface/50">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{data.ui.selectedProjects}</h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          {profile === 'fullstack' 
            ? data.ui.selectedProjectsSubtitle.fullstack
            : data.ui.selectedProjectsSubtitle.frontend}
        </p>
      </div>

      <div className="flex flex-col gap-24">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={`${project.title}-${language}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Preview */}
              <div className="w-full lg:w-3/5 group relative perspective-1000">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 aspect-video transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    {project.title}
                    <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                  <p className="text-xl text-primary font-medium">{project.description}</p>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="text-yellow-400 w-4 h-4" />
                    <span>{data.ui.keyImpact}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <Button href={project.link} variant="outline" size="sm">
                    {data.ui.viewCaseStudy}
                  </Button>
                  <Button href={project.github} variant="ghost" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    {data.ui.sourceCode}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
