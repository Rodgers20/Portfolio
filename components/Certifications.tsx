
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-32 bg-[#F8F9FA] px-6 md:px-12 grid-bg" id="certs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
              [ NODE: VERIFIED_CREDENTIALS ]
            </div>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none italic">Certifications</h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            PROFESSIONAL STANDARDS VALIDATED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="glass bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-600/30 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between">
              <div>
                <div className="mb-6 flex justify-between items-start">
                   <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <span className="text-[10px] font-mono font-bold text-gray-300 group-hover:text-orange-600 transition-colors">#{cert.id.toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
                  {cert.issuer}
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-gray-400">{cert.date}</span>
                <a href={cert.url} className="text-orange-600 hover:text-black transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
