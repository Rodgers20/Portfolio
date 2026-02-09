
import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
              Let&apos;s build<br/>something <span className="text-gray-500 italic font-serif font-light">great.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              Always open to new collaborations and interesting projects. Reach out and let&apos;s make magic happen.
            </p>
          </div>
          
          <div className="flex flex-col justify-end items-start md:items-end">
             <a href="mailto:abahati@albany.edu" className="text-3xl md:text-5xl font-light hover:text-gray-400 transition-colors mb-4 flex items-center gap-4">
               abahati@albany.edu <ArrowUpRight className="w-10 h-10" />
             </a>
             <p className="text-gray-500 mb-12">Albany, NY</p>
             
             <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/akili-bahati" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Rodgers20" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="text-xl font-bold text-white uppercase tracking-tighter">Akili Bahati.</div>
          <p>© 2024 Akili Bahati. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-xs text-gray-800">v1.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
