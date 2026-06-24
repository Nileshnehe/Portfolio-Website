import React from 'react';
import { Sparkles, Code2, BookOpen, Layers, Terminal, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 dark:bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Center Graphic Assembly */}
        <div className="relative flex justify-center items-center mb-16 h-64 animate-fade-in">
          {/* Concentric Rings */}
          <div className="absolute w-64 h-64 border-[1px] border-light-border dark:border-dark-border rounded-full" />
          <div className="absolute w-80 h-80 border-[1px] border-light-border/60 dark:border-dark-border/60 rounded-full border-dashed" />
          
          {/* Main Avatar Circle */}
          <div className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow-md dark:shadow-glow-lg flex items-center justify-center">
            <span className="text-7xl font-display font-bold text-white drop-shadow-lg">
              N
            </span>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-4 left-1/2 -translate-x-[180px] z-20 animate-float" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-2 bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border px-4 py-2 rounded-full shadow-card-light dark:shadow-card-dark backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GenAI Dev</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-1/2 translate-x-[120px] z-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2 bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border px-4 py-2 rounded-full shadow-card-light dark:shadow-card-dark backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Open to Work</span>
            </div>
          </div>
        </div>

        {/* Biography Text */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl font-sans text-light-muted dark:text-dark-muted leading-relaxed">
            I am a passionate software developer blending the power of the{' '}
            <span className="inline-block px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 font-medium border border-brand-100 dark:border-brand-800/50">
              MERN stack
            </span>{' '}
            with cutting-edge{' '}
            <span className="inline-block px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 font-medium border border-purple-100 dark:border-purple-800/50">
              Generative AI
            </span>{' '}
            technologies.
          </p>
          
          <p className="text-base md:text-lg font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
            With expertise in building robust web architectures and integrating AI capabilities like{' '}
            <span className="font-medium text-accent">RAG</span> and{' '}
            <span className="font-medium text-accent">LangChain</span>, I strive to create web solutions that are not just functional but highly intelligent. I thrive on solving complex problems and continuously learning new technologies to stay ahead of the curve.
          </p>

          <p className="text-base md:text-lg font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
            Currently pursuing my <strong className="text-slate-900 dark:text-slate-200 font-semibold">MCA</strong> from Savitribai Phule Pune University with a BCA foundation, I approach every project as an opportunity to push the boundaries of what's possible.
          </p>
        </div>

        {/* Stats / Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          
          {/* Card 1 */}
          <div className="group bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 text-center shadow-card-light dark:shadow-card-dark hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-50/50 group-hover:to-transparent dark:group-hover:from-brand-900/10 transition-colors duration-500" />
            <BookOpen className="w-8 h-8 mx-auto mb-4 text-light-muted dark:text-dark-muted group-hover:text-brand-500 transition-colors" />
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">1+</h3>
            <p className="text-sm font-medium text-light-muted dark:text-dark-muted">Years Learning</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 text-center shadow-card-light dark:shadow-card-dark hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-light/10 group-hover:to-transparent dark:group-hover:from-accent-dark/20 transition-colors duration-500" />
            <Layers className="w-8 h-8 mx-auto mb-4 text-light-muted dark:text-dark-muted group-hover:text-accent transition-colors" />
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">5+</h3>
            <p className="text-sm font-medium text-light-muted dark:text-dark-muted">Projects Built</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 text-center shadow-card-light dark:shadow-card-dark hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-50/50 group-hover:to-transparent dark:group-hover:from-brand-900/10 transition-colors duration-500" />
            <Terminal className="w-8 h-8 mx-auto mb-4 text-light-muted dark:text-dark-muted group-hover:text-brand-500 transition-colors" />
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1 mt-1">MERN</h3>
            <p className="text-sm font-medium text-light-muted dark:text-dark-muted">Core Stack</p>
          </div>

          {/* Card 4 */}
          <div className="group bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 text-center shadow-card-light dark:shadow-card-dark hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-50/50 group-hover:to-transparent dark:group-hover:from-purple-900/10 transition-colors duration-500" />
            <Cpu className="w-8 h-8 mx-auto mb-4 text-light-muted dark:text-dark-muted group-hover:text-purple-500 transition-colors" />
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1 mt-1">GenAI</h3>
            <p className="text-sm font-medium text-light-muted dark:text-dark-muted">Specialisation</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;