import { ScanSearch, Hammer, Rocket } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Your Path to <span className="text-brand-600">Market Dominance</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We don't guess. We use a proven 3-step framework designed specifically for the green industry to turn your territory into a lead-generating machine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent -z-10"></div>

          <div className="relative text-center group">
            <div className="w-24 h-24 bg-brand-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
              <ScanSearch className="w-10 h-10 text-brand-600 group-hover:text-white" />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-600 font-bold text-xs py-1 px-3 rounded-full border border-brand-100 shadow-sm">
              STEP 01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">The Deep Dive Audit</h3>
            <p className="text-slate-500 leading-relaxed">
              We analyze your service area, competitors, and current web presence to find the "low hanging fruit" keywords others are missing.
            </p>
          </div>

          <div className="relative text-center group">
            <div className="w-24 h-24 bg-brand-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
              <Hammer className="w-10 h-10 text-brand-600 group-hover:text-white" />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-600 font-bold text-xs py-1 px-3 rounded-full border border-brand-100 shadow-sm">
              STEP 02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">The Custom Build</h3>
            <p className="text-slate-500 leading-relaxed">
              We deploy a high-performance website and set up your Google Ads campaigns targeting high-margin jobs like hardscaping & install.
            </p>
          </div>

          <div className="relative text-center group">
            <div className="w-24 h-24 bg-brand-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
              <Rocket className="w-10 h-10 text-brand-600 group-hover:text-white" />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-600 font-bold text-xs py-1 px-3 rounded-full border border-brand-100 shadow-sm">
              STEP 03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Launch & Scale</h3>
            <p className="text-slate-500 leading-relaxed">
              We go live. Calls start recording. We meet monthly to review data and optimize, ensuring your cost-per-lead drops over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
