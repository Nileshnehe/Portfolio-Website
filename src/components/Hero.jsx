import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col justify-center items-center text-center min-h-[90vh] px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
          Hi, I'm <span className="text-brand-500 dark:text-brand-400">Nilesh Nehe</span>
        </h1>
        <p className="text-lg md:text-2xl text-light-muted dark:text-dark-muted max-w-3xl mb-10 leading-relaxed font-sans mx-auto">
          Full-Stack MERN Developer & Generative AI Specialist | Building intelligent, scalable, and future-ready web applications.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-glow-sm hover:shadow-glow-md hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/cv.pdf" 
            download 
            className="flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-light-border dark:border-dark-border hover:border-brand-500 dark:hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300 text-slate-700 dark:text-slate-200 bg-light-surface dark:bg-dark-surface px-8 py-3.5 rounded-xl font-medium transition-all hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;