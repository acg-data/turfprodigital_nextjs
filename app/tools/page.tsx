import { tools } from '@/lib/tools-data';
import Link from 'next/link';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-100">Free Tools for Landscapers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Marketing Tools That{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Drive Growth
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Powerful calculators and analyzers to help you make smarter marketing decisions for your lawn care business.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="group bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Try It Free</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-4 text-sm font-semibold">
                <Calculator className="w-4 h-4" />
                Most Popular Tool
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                ROI Calculator
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                See exactly how much revenue you can generate from your marketing investment. 
                Calculate your return on ad spend, customer acquisition costs, and lifetime value.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Calculate true cost per lead',
                  'Determine customer acquisition cost',
                  'Project monthly revenue',
                  'Optimize ad spend allocation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/tools/roi-calculator"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/30"
              >
                Use ROI Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-400 text-sm">Your Results</span>
                  <span className="text-emerald-400 font-bold">3.5x ROAS</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                    <span className="text-slate-400">Monthly Ad Spend</span>
                    <span className="text-white font-bold">$2,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                    <span className="text-slate-400">Leads Generated</span>
                    <span className="text-white font-bold">45</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                    <span className="text-slate-400">Cost Per Customer</span>
                    <span className="text-amber-400 font-bold">$222</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-400">Net Profit</span>
                    <span className="text-emerald-400 font-bold text-xl">$5,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Want Expert Help With Your Marketing?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            These tools are just the beginning. Get a comprehensive marketing strategy tailored to your lawn care business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Get Free Marketing Audit
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors border border-emerald-500"
            >
              View Our Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
