import { ArrowRight, TrendingUp, Bell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-r from-brand-50 via-brand-100 to-brand-50 opacity-60 -z-10 blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
              </span>
              Accepting New Clients for Spring 2025
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Fill Your Landscaping Calendar with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400">
                High Qualified Leads
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
              The all-in-one growth partner for landscaping companies. We combine high-end design with local SEO to turn your website into a 24/7 salesperson.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-brand-500/25 flex items-center justify-center gap-2">
                View Packages <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold text-lg rounded-xl hover:bg-slate-50 border border-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm">
                Recent Work
              </a>
            </div>

          </div>

          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute top-10 right-0 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-8 left-10 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="relative rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01] duration-500 z-10">
              <div className="h-10 bg-slate-50/80 border-b border-slate-100 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue</p>
                    <h3 className="text-4xl font-extrabold text-slate-900">$742,394</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-brand-100 px-3 py-1.5 rounded-full text-brand-700 font-bold text-sm border border-brand-200">
                    <TrendingUp className="w-4 h-4" /> +127%
                  </div>
                </div>

                <div className="h-48 flex items-end justify-between gap-3 md:gap-4">
                  <div className="w-full bg-slate-100 rounded-t-lg h-[35%] hover:bg-brand-100 transition-colors relative group">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">$12k</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-t-lg h-[45%] hover:bg-brand-100 transition-colors relative group">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">$24k</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-t-lg h-[40%] hover:bg-brand-100 transition-colors relative group">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">$21k</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-t-lg h-[65%] hover:bg-brand-100 transition-colors relative group">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">$45k</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-t-lg h-[75%] hover:bg-brand-100 transition-colors relative group">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">$68k</div>
                  </div>
                  <div className="w-full bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-lg h-[95%] shadow-[0_0_20px_rgba(16,185,129,0.4)] relative group">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">$142k</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between text-xs text-slate-400 font-semibold">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span className="text-brand-600">JUN</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-3 animate-float animation-delay-1000 max-w-[220px] z-20">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">New Lead Received!</p>
                <p className="text-[10px] text-slate-500 font-medium">"Looking for hardscaping quote..."</p>
              </div>
            </div>

            <div className="hidden md:flex absolute -left-6 bottom-32 bg-white p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-3 animate-float max-w-[200px] z-20">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-5 h-5" alt="Google" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Rank #1</p>
                <p className="text-[10px] text-slate-500 font-medium">"Landscapers Near Me"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
