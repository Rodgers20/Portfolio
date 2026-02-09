
import React, { useState } from 'react';
import { Send, Mail, Linkedin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/abahati@albany.edu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-[#F8F9FA] px-6 md:px-12 grid-bg border-t border-gray-200" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-6 font-bold">
                [ NODE: CONTACT_INQUIRY ]
              </div>
              <h2 className="text-6xl md:text-7xl font-serif tracking-tighter mb-8 italic">Get in Touch</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
                Whether you're looking for a final-year CS intern, a data analyst for a project, or just want to discuss predictive modeling — my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:abahati@albany.edu" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="font-bold text-lg">abahati@albany.edu</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/akili-bahati" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Professional</p>
                  <p className="font-bold text-lg">linkedin.com/in/akili-bahati</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Location</p>
                  <p className="font-bold text-lg">Albany, NY</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-600 font-bold">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                Currently open to Spring 2026 Internships & Full-time 2026 Roles
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {status === 'sent' && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center animate-fade">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif mb-2 italic">Message Sent</h3>
                  <p className="text-gray-500 max-w-xs">Your inquiry has been logged successfully. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs font-mono font-bold uppercase tracking-widest text-orange-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center animate-fade">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                    <Mail className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif mb-2 italic">Something went wrong</h3>
                  <p className="text-gray-500 max-w-xs">Please try again or email me directly at abahati@albany.edu</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs font-mono font-bold uppercase tracking-widest text-red-600 underline"
                  >
                    Try again
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-1 focus:border-orange-600 outline-none transition-colors font-medium text-lg placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-1 focus:border-orange-600 outline-none transition-colors font-medium text-lg placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">Inquiry Subject</label>
                  <select name="subject" className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-1 focus:border-orange-600 outline-none transition-colors font-medium text-lg appearance-none cursor-pointer">
                    <option>Job Opportunity / Recruitment</option>
                    <option>Research Collaboration</option>
                    <option>Data Science Inquiry</option>
                    <option>General Coffee Chat</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    placeholder="Tell me about your project or role details..."
                    className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-1 focus:border-orange-600 outline-none transition-colors font-medium text-lg resize-none placeholder:text-gray-300"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'sending'}
                  className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-xs hover:bg-orange-600 transition-all flex items-center justify-center gap-4 group disabled:bg-gray-400"
                >
                  {status === 'sending' ? 'Transmitting Data...' : (
                    <>
                      Send Inquiry 
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
