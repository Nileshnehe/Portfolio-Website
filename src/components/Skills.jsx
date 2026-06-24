import React from 'react';
import { Code2, Server, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      title: "Frontend", 
      icon: <Code2 className="w-6 h-6 text-brand-500" />,
      skills: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"] 
    },
    { 
      title: "Backend (MERN)", 
      icon: <Server className="w-6 h-6 text-accent" />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"] 
    },
    { 
      title: "AI & Future Tech", 
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      skills: ["Generative AI", "LangChain", "LangGraph", "RAG"] 
    },
    { 
      title: "Tools & Workflow", 
      icon: <Wrench className="w-6 h-6 text-slate-500" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"] 
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-light-surface dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-slate-900 dark:text-white">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-card-light dark:shadow-card-dark hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-light-surface dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border">
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-full text-light-muted dark:text-dark-muted hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                  >
                    {skill}
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

export default Skills;