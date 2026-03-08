import React from 'react';
import { User, Target, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#111111] px-6 md:px-12 border-t border-gray-100 dark:border-gray-800" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
                [ NODE: BIOGRAPHY_DATA ]
              </div>
              <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none italic mb-8 dark:text-white">
                The<br />Analyst.
              </h2>
              <div className="w-24 h-1 bg-orange-600 mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-mono text-xs">
                  <User className="w-4 h-4 text-orange-600" /> BASED IN ALBANY, NEW YORK
                </div>
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-mono text-xs">
                  <Target className="w-4 h-4 text-orange-600" /> FOCUS: PREDICTIVE ANALYTICS
                </div>
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-mono text-xs">
                  <Coffee className="w-4 h-4 text-orange-600" /> CURATING DATA NARRATIVES
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12 pt-4">
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl font-serif leading-tight italic text-black dark:text-white">
                "I believe data is just a collection of stories waiting for the right storyteller to decode them."
              </p>
              <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-800"></div>
            </div>

            <div className="space-y-5 text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg">
              <p>
                As a final-year Informatics student at the <span className="text-black dark:text-white font-semibold">University at Albany</span>, I focus on the intersection of data, systems, and software — and how they shape real-world decisions. I enjoy understanding why systems behave the way they do and how they can be improved to serve people more effectively.
              </p>
              <p>
                I am most engaged when working at the crossroads of data analysis and software development. Whether building predictive models for NBA player performance, analyzing spending behavior, or preparing datasets for visualization, my focus is always on turning raw information into insights that are clear, reliable, and actionable.
              </p>
              <p>
                My work often begins at the command line but ends in a narrative. I prioritize clarity, scalability, and ethical data usage. My exchange semester in Amsterdam deepened my understanding of <span className="italic text-black dark:text-white">Data Ethics</span>, which now serves as the foundation for every model I build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-8 rounded-2xl bg-[#F8F9FA] dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 group hover:border-orange-600/30 transition-all duration-500">
                <div className="w-12 h-12 bg-white dark:bg-[#222] rounded-xl flex items-center justify-center shadow-sm mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight dark:text-white">The Vision</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  To democratize data through beautiful, intuitive visualizations that empower non-technical stakeholders to make high-stakes decisions with confidence.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#F8F9FA] dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 group hover:border-orange-600/30 transition-all duration-500">
                <div className="w-12 h-12 bg-white dark:bg-[#222] rounded-xl flex items-center justify-center shadow-sm mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight dark:text-white">The Mission</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Leveraging advanced machine learning and software engineering principles to solve complex socio-technical problems in real-time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
