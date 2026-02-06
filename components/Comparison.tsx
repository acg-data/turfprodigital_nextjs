import { Sprout, CheckCircle2, XCircle } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Why Specialists Win</h2>
          <p className="text-slate-600 text-lg">
            Stop paying general agencies to "learn on your dime." We hit the ground running.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl">
          <div className="min-w-[600px] md:min-w-0">
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
            <div className="p-4 md:p-6 lg:p-8 flex items-end">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                The Comparison
              </span>
            </div>
            <div className="p-4 md:p-6 lg:p-8 bg-white border-x border-brand-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
              <div className="flex items-center gap-1 md:gap-2 mb-1">
                <div className="bg-brand-500 p-1 rounded-md shrink-0">
                  <Sprout className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <span className="font-bold text-slate-900 text-xs md:text-sm">Turf Pro Digital</span>
              </div>
              <p className="text-[10px] md:text-xs text-brand-600 font-bold">Green Industry Experts</p>
            </div>
            <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-end opacity-60">
              <span className="font-bold text-slate-900 block mb-1 text-xs md:text-sm">General Agencies</span>
              <p className="text-[10px] md:text-xs text-slate-500">Jack of all trades</p>
            </div>
          </div>

          {[
            {
              label: "Industry Focus",
              us: "100% Landscaping & Lawn",
              them: "Dentists, Restaurants, & You"
            },
            {
              label: "Content Strategy",
              us: "We write it (We know the lingo)",
              them: "You write it (They don't know mulch)"
            },
            {
              label: "Speed to Results",
              us: "Day 1 (Proven System)",
              them: "Months (Trial & Error)"
            },
            {
              label: "Asset Ownership",
              us: "You Own Everything",
              them: "Leased / Held Hostage"
            },
            {
              label: "Contracts",
              us: "Month-to-Month",
              them: "12-Month Lock-in"
            }
          ].map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b last:border-b-0 border-slate-100 hover:bg-slate-50/50 transition-colors"
            >
              <div className="p-4 md:p-6 lg:p-8 flex items-center">
                <span className="font-bold text-slate-700 text-xs md:text-sm">{row.label}</span>
              </div>
              <div className="p-4 md:p-6 lg:p-8 bg-brand-50/30 border-x border-brand-100 flex items-center gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-brand-500 shrink-0" />
                <span className="text-xs md:text-sm font-semibold text-slate-800">{row.us}</span>
              </div>
              <div className="p-4 md:p-6 lg:p-8 flex items-center gap-2 md:gap-3 opacity-60">
                <XCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-slate-300 shrink-0" />
                <span className="text-xs md:text-sm text-slate-500">{row.them}</span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
