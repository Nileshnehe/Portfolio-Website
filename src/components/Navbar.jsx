import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-light-surface/80 dark:bg-dark-surface/80 border-b border-light-border dark:border-dark-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-display font-bold text-2xl tracking-tight text-brand-500 dark:text-brand-400">
            NN.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="/cv.pdf" 
              download 
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-glow-sm hover:shadow-glow-md"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card text-slate-600 dark:text-slate-300 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-light-card dark:hover:bg-dark-card transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border animate-slide-up">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-card-light dark:shadow-card-dark">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-light-card dark:hover:bg-dark-card hover:text-brand-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-light-border dark:border-dark-border">
              <a 
                href="/cv.pdf" 
                download 
                className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-lg font-medium transition-all"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;