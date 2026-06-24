import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-light-surface dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">
          Let's build something intelligent together.
        </h2>
        <p className="text-light-muted dark:text-dark-muted mb-12 text-lg">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        
        <form className="space-y-6 text-left p-8 rounded-2xl bg-light-bg dark:bg-dark-card border border-light-border dark:border-dark-border shadow-card-light dark:shadow-card-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input 
                type="text" 
                className="p-3.5 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow" 
                placeholder="John Doe" 
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input 
                type="email" 
                className="p-3.5 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow" 
                placeholder="john@example.com" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea 
              rows="5" 
              className="p-3.5 rounded-lg bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow resize-none" 
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button 
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-lg font-bold transition-all shadow-glow-sm hover:shadow-glow-md"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;