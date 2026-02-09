
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, BarChart, Plus } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white px-6 md:px-12" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-500 mb-6 font-bold">
              [ DIRECTORY: /RESEARCH_PROJECTS ]
            </div>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-4 italic">The Lab</h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-4 leading-relaxed font-light text-lg">
            A selection of computational studies focusing on predictive modeling and narrative data visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-[#242424] border border-white/5 rounded-2xl p-6 hover:bg-[#2A2A2A] transition-all duration-500 flex flex-col h-full">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase border border-white/10 text-orange-500">
                  {project.category}
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tool Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase tracking-wider group-hover:border-orange-500/20 group-hover:text-gray-300 transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">
                  {project.id === 'nba-predict' && "Predictive analysis of historical player data to forecast PTS/AST/REB stats using Linear Regression and Random Forest models."}
                  {project.id === 'fraud-shield' && "Real-time anomaly detection with an integrated dashboard. Built with React and D3.js to visualize fraud heatmaps."}
                  {project.id === 'pharma-bot' && "An intelligent conversational agent leveraging Natural Language Processing to assist in pharmaceutical and prescription inquiries."}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex gap-4">
                   <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                     <Github className="w-4 h-4 text-gray-400" />
                   </a>
                   <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                     <BarChart className="w-4 h-4 text-gray-400" />
                   </a>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-500 hover:text-white transition-colors">
                  Read Abstract <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <a 
            href="#" 
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-transparent border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all hover:border-orange-500"
          >
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
              View All Projects <Plus className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </div>
        
        <div className="mt-24 text-center">
          <p className="font-mono text-xs text-gray-500 mb-8 tracking-widest uppercase">End of selected entries</p>
          <div className="h-[1px] w-24 bg-orange-500/30 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
