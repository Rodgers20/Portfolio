
import React from 'react';
import { Database, BarChart3, Network } from 'lucide-react';
import { SKILLS } from '../constants';
import akiliImg from '../assets/images/akili.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-48 pb-0 grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center mb-24">
        
        <div className="lg:col-span-7 z-10 animate-fade">
          <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-orange-600 font-bold mb-6 flex items-center gap-3">
            [ ROLE: CS_RESEARCHER_FINAL_YEAR ]
          </div>
          
          <h1 className="text-7xl md:text-[110px] font-serif leading-[0.9] mb-8 tracking-tighter">
            Akili <span className="font-light italic text-gray-400">Bahati.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-xl mb-12 font-light leading-relaxed">
            Concentrating in <span className="text-black font-semibold underline decoration-orange-600/30 underline-offset-4">Data Visualization & Predictive Modeling</span>. I build systems that find the signals in the noise.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <div className="glass px-6 py-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm">
              <Database className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Focus</p>
                <p className="text-sm font-bold">Data Science</p>
              </div>
            </div>
            <div className="glass px-6 py-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm">
              <BarChart3 className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expertise</p>
                <p className="text-sm font-bold">Visualization</p>
              </div>
            </div>
            <div className="glass px-6 py-4 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm">
              <Network className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Core</p>
                <p className="text-sm font-bold">Machine Learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade" style={{animationDelay: '0.2s'}}>
          <div className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-2xl bg-white p-3">
            <div className="aspect-[4/5] rounded-xl overflow-hidden grayscale contrast-125">
               <img
                 src={akiliImg}
                 alt="Akili Bahati"
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute bottom-8 right-8 bg-black/90 backdrop-blur-md text-white font-mono text-[9px] p-3 rounded border border-white/20">
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Skill Ticker Container */}
      <div className="relative border-y border-gray-200 bg-white">
        <div className="h-4 w-full dot-pattern border-b border-gray-100 opacity-30"></div>
        
        <div className="py-10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
              <div key={i} className="flex items-center px-12 text-sm font-mono font-bold tracking-widest text-gray-400 group cursor-default">
                <span className="text-orange-600 mr-2 font-black">#</span>
                <span className="group-hover:text-black transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-4 w-full dot-pattern border-t border-gray-100 opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;
