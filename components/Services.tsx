
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6 md:px-12" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
          <div>
             <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
               [ SECTION: CORE_METHODOLOGY ]
             </div>
             <h2 className="text-6xl md:text-7xl font-serif tracking-tighter mb-8 leading-none italic">Technical Concentration</h2>
             <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
               As a final-year Informatics student, I apply rigorous statistical methods to software engineering challenges. My work sits at the intersection of data and human experience.
             </p>
          </div>
          
          <div className="grid gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex gap-8 group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <div>
                   <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-orange-600 transition-colors">{service.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                     {service.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100 flex flex-wrap gap-x-20 gap-y-12 justify-center">
           <div className="text-center">
             <p className="text-4xl font-serif mb-2 text-orange-600">1M+</p>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Data Points Analyzed.</p>
           </div>
           <div className="text-center">
             <p className="text-4xl font-serif mb-2 text-orange-600">ETL</p>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Workflow Logic</p>
           </div>
           <div className="text-center">
             <p className="text-4xl font-serif mb-2 text-orange-600">04</p>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Tech Certifications</p>
           </div>
           <div className="text-center">
             <p className="text-4xl font-serif mb-2 text-orange-600">2026</p>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Graduation Year</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
