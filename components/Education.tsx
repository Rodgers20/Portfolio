
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-40 bg-white px-6 md:px-12 border-t border-gray-100" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
              [ DIRECTORY: /ACADEMIC_RECORD ]
            </div>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.8] italic mb-10">
              Back<br/>ground.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <p className="text-2xl text-gray-500 font-light leading-relaxed">
              My academic journey at the University at Albany has been driven by a fascination with data structures and their power to reveal human insight.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {EDUCATION_DATA.map((item, i) => (
            <div key={i} className="grid lg:grid-cols-12 gap-8 items-start relative group">
              <div className="lg:col-span-3">
                <div className="text-6xl md:text-8xl font-serif font-bold text-orange-600/10 group-hover:text-orange-600/20 transition-colors duration-500">
                  {item.year.split(' - ')[0]}
                </div>
                <div className="font-mono text-xs font-bold tracking-widest text-gray-400 mt-2">
                  CLASS OF {item.year.split(' - ')[1]}
                </div>
              </div>
              
              <div className="lg:col-span-9 pt-2 md:pt-4 border-t border-gray-100 lg:border-t-0">
                <h3 className="text-4xl md:text-5xl font-serif italic mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-black mb-6 tracking-tight">
                  {item.institution}
                </p>
                <div className="max-w-2xl text-lg text-gray-500 font-light leading-relaxed">
                  {item.description}
                </div>
                
                <div className="mt-8 flex gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-mono font-bold text-gray-400">DATA ETHICS</span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-mono font-bold text-gray-400">SOFTWARE DEVELOPMENT</span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-mono font-bold text-gray-400">AI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
