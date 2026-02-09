
import React from 'react';
import { User, Target, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6 md:px-12 border-t border-gray-100" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
                [ NODE: BIOGRAPHY_DATA ]
              </div>
              <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none italic mb-8">
                The<br/>Analyst.
              </h2>
              <div className="w-24 h-1 bg-orange-600 mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-500 font-mono text-xs">
                  <User className="w-4 h-4 text-orange-600" /> BASED IN ALBANY, NEW YORK
                </div>
                <div className="flex items-center gap-4 text-gray-500 font-mono text-xs">
                  <Target className="w-4 h-4 text-orange-600" /> FOCUS: PREDICTIVE ANALYTICS
                </div>
                <div className="flex items-center gap-4 text-gray-500 font-mono text-xs">
                  <Coffee className="w-4 h-4 text-orange-600" /> CURATING DATA NARRATIVES
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12 pt-4">
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl font-serif leading-tight italic text-black">
                "I believe data is just a collection of stories waiting for the right storyteller to decode them."
              </p>
              <div className="h-[1px] w-full bg-gray-100"></div>
            </div>

            <div className="prose prose-lg text-gray-500 font-light leading-relaxed space-y-6">
              <p>
                As a final-year Informatics student at the <span className="text-black font-semibold">University at Albany</span>, with a strong interest in how data, systems, and software influence real-world decisions. My interest in technology goes beyond writing code—I enjoy understanding why systems behave the way they do and how they can be improved to serve people more effectively.
                
                I am most engaged when working at the intersection of data analysis and software development. Whether I am building predictive models for NBA player performance, analyzing spending behavior, or preparing datasets for visualization, my focus is always on turning raw information into insights that are clear, reliable, and actionable.
                <br></br>
                <br></br>
                I approach projects with a practical mindset. I value clean data, well-structured code, and solutions that can scale beyond a single use case. Just as important, I am mindful of how data is collected, interpreted, and communicated, especially when decisions or outcomes affect others.
                <br></br>
                <br></br>
                As I prepare to transition from student to professional, I am looking for opportunities where I can continue learning, contribute meaningfully to data-driven teams, and build systems that balance technical rigor with ethical responsibility.
              </p>
              <p>
                My work often begins at the command line but ends in a narrative. Whether it's predicting NBA player stats or securing financial transactions, I prioritize clarity, scalability, and ethical data usage. My exchange semester in Amsterdam deepened my understanding of <span className="italic">Data Ethics</span>, which now serves as the foundation for every model I build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 group hover:border-orange-600/30 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">The Vision</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To democratize data through beautiful, intuitive visualizations that empower non-technical stakeholders to make high-stakes decisions with confidence.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 group hover:border-orange-600/30 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">The Mission</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
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
