
import React from 'react';
import { Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-10 h-10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6">Experience</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Applied Data & Software Experience.
          </p>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id} 
              className={`flex flex-col md:flex-row items-center justify-between p-8 md:p-10 border transition-all duration-300 ${
                exp.isActive 
                  ? 'bg-black text-white border-black scale-[1.02] shadow-xl' 
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              <div className="flex items-center gap-8 w-full md:w-auto mb-6 md:mb-0">
                <div className={`w-14 h-14 flex items-center justify-center text-2xl font-bold ${exp.isActive ? 'bg-[#333]' : 'bg-black text-white'}`}>
                  {exp.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{exp.title}</h3>
                  <p className={`${exp.isActive ? 'text-gray-400' : 'text-gray-500'} font-medium`}>{exp.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                <div className={`h-8 w-[1px] ${exp.isActive ? 'bg-gray-600' : 'bg-gray-300'} hidden md:block`}></div>
                <div className="text-xs font-bold uppercase tracking-widest">
                  Job Duration - <span className="ml-2">{exp.duration}</span>
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
