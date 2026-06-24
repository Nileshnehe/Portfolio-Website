import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg transition-colors duration-300 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="p-2 rounded-full bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 transition-all">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 transition-all">
          <Github className="w-5 h-5" />
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