import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-[#111111] px-6 md:px-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
            [ DIRECTORY: /WORK_HISTORY ]
          </div>
          <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none italic dark:text-white">Experience.</h2>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className={`flex flex-col md:flex-row items-center justify-between p-8 md:p-10 border transition-all duration-300 rounded-xl ${
                exp.isActive
                  ? 'bg-black text-white border-black scale-[1.01] shadow-xl'
                  : 'bg-white dark:bg-[#1A1A1A] text-black dark:text-white border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-8 w-full md:w-auto mb-6 md:mb-0">
                <div className={`w-14 h-14 flex items-center justify-center text-2xl font-bold rounded-lg ${exp.isActive ? 'bg-[#333] text-white' : 'bg-black dark:bg-white text-white dark:text-black'}`}>
                  {exp.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{exp.title}</h3>
                  <p className={`font-medium ${exp.isActive ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                <div className={`h-8 w-[1px] hidden md:block ${exp.isActive ? 'bg-gray-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className="text-xs font-bold uppercase tracking-widest">
                  {exp.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
