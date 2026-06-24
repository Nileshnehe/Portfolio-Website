import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "Canvas Workspace Interface",
      description: "A highly interactive web application interface featuring a flexible sidebar, bottom bar, and a large canvas-based workspace architecture.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS"],
      live: "#",
      github: "#"
    },
    {
      title: "Secure Authentication System",
      description: "Implemented a robust authentication system featuring state hydration techniques to maintain application data securely across sessions.",
      tech: ["Node.js", "Express", "Redux", "MongoDB"],
      live: "#",
      github: "#"
    },
    {
      title: "Intelligent RAG Assistant",
      description: "A generative AI application utilizing Retrieval-Augmented Generation to provide context-aware responses from internal knowledge bases.",
      tech: ["React", "LangChain", "Python", "OpenAI"],
      live: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-slate-900 dark:text-white">
          Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col justify-between rounded-2xl p-8 border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-card shadow-card-light dark:shadow-card-dark hover:-translate-y-2 hover:shadow-glow-sm transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-500">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    <a href={proj.github} className="text-light-muted dark:text-dark-muted hover:text-brand-500 transition-colors" aria-label="GitHub">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href={proj.live} className="text-light-muted dark:text-dark-muted hover:text-accent transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-light-muted dark:text-dark-muted mb-6 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono font-medium text-accent bg-accent-light/10 dark:bg-accent-dark/30 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;