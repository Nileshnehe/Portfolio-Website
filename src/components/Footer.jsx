import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg transition-colors duration-300 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="p-2 rounded-full bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 transition-all">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 transition-all">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 transition-all">
          <Mail className="w-5 h-5" />
        </a>
      </div>
      <p className="text-light-muted dark:text-dark-muted text-sm font-medium">
        &copy; {currentYear} Nilesh Nehe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;