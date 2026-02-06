'use client';

import { useState } from 'react';
import { CheckCircle2, Flame } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-100/40 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-lg">No hidden fees. No long-term contracts. Just results.</p>
        </div>

        {/* SCARCITY BANNER */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-xl shadow-lg border border-brand-200 overflow-hidden">
          <div className="bg-promo-gradient px-6 py-2 flex justify-between items-center text-white">
            <span className="font-bold text-sm uppercase tracking-widest">Founder's Club Special</span>
            <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded">Limited Time</span>
          </div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                  <Flame className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg">50% Off Lifetime Rate</p>
                <p className="text-xs text-slate-500">Lock in the original pricing before it doubles.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
              <div className="flex space-x-1">
                <div className="w-2 h-6 bg-brand-500 rounded-sm"></div>
                <div className="w-2 h-6 bg-brand-500 rounded-sm"></div>
                <div className="w-2 h-6 bg-brand-500 rounded-sm"></div>
                <div className="w-2 h-6 bg-slate-200 rounded-sm"></div>
                <div className="w-2 h-6 bg-slate-200 rounded-sm"></div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-brand-700">3 of 5</p>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Spots Claimed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span
            className={`font-semibold cursor-pointer ${!isAnnual ? 'text-slate-900' : 'text-slate-600'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>
          <button
            className={`relative w-16 h-8 rounded-full transition-colors focus:outline-none shadow-inner ${isAnnual ? 'bg-brand-100' : 'bg-slate-200'}`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div className={`absolute top-1 w-6 h-6 bg-brand-600 rounded-full transition-all duration-300 shadow-sm ${isAnnual ? 'left-9' : 'left-1'}`}></div>
          </button>
          <span
            className={`font-bold cursor-pointer flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-600'}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">Save ~30%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* Package 1: One-Time */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 transition-all hover:-translate-y-1 duration-300 flex flex-col h-full relative group">
            <div className="h-1.5 w-full bg-slate-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Web Build</h3>
            <p className="text-slate-500 text-xs mb-4 h-8">Professional foundation.</p>

            <div className="flex flex-col mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-slate-400 line-through font-semibold">$5k</span>
                <span className="text-3xl font-extrabold text-brand-600">$2,500</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold mt-1">One-time payment</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>5-Page Custom Design</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Mobile Responsive</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Quote Integration</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>SEO-Ready Structure</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Fast Loading Speed</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Domain & DNS Setup</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>1 Month Support</span>
              </li>
            </ul>
            <a href="#audit" className="block w-full py-2.5 px-4 bg-slate-100 text-slate-900 font-bold text-sm text-center rounded-lg hover:bg-slate-200 transition-colors mt-auto">Get Started</a>
          </div>

          {/* Package 2: Growth */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 transition-all hover:-translate-y-1 duration-300 flex flex-col h-full relative group">
            <div className="h-1.5 w-full bg-brand-400 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
            <p className="text-slate-500 text-xs mb-4 h-8">SEO & Maintenance.</p>

            <div className="flex flex-col mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-slate-400 line-through font-semibold">${isAnnual ? '1,745' : '2,495'}</span>
                <span className="text-3xl font-extrabold text-brand-600">${isAnnual ? '875' : '1,250'}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold mt-1 h-3">{isAnnual ? 'billed annually' : 'monthly billing'}</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-start gap-2 text-slate-800 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Web Build Included</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Hosting & Maintenance</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Local SEO (GMB)</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Monthly Reporting</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Competitor Tracking</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Dedicated Manager</span>
              </li>
            </ul>
            <a href="#audit" className="block w-full py-2.5 px-4 bg-brand-100 text-brand-800 font-bold text-sm text-center rounded-lg hover:bg-brand-200 transition-colors mt-auto">Select Growth</a>
          </div>

          {/* Package 3: Authority */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-brand-900/10 border-2 border-brand-500 relative flex flex-col h-full hover:-translate-y-1 transition-all duration-300 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg">Most Popular</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">Authority</h3>
            <p className="text-slate-500 text-xs mb-4 h-8">Content & Retention.</p>

            <div className="flex flex-col mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-slate-400 line-through font-semibold">${isAnnual ? '2,995' : '3,745'}</span>
                <span className="text-3xl font-extrabold text-brand-600">${isAnnual ? '1,500' : '1,875'}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold mt-1 h-3">{isAnnual ? 'billed annually' : 'monthly billing'}</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-start gap-2 text-slate-800 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Everything in Growth</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>2x Monthly SEO Blogs</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Email Newsletter</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Review Automation</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Seasonal Campaigns</span>
              </li>
              <li className="flex items-start gap-2 text-slate-600 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Social Media Setup</span>
              </li>
            </ul>
            <a href="#audit" className="block w-full py-3 px-4 bg-brand-600 text-white font-bold text-sm text-center rounded-lg hover:bg-brand-700 transition-colors shadow-lg mt-auto">Start Scaling</a>
          </div>

          {/* Package 4: Market Leader (Ads) */}
          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-brand-500 transition-all hover:-translate-y-1 duration-300 flex flex-col h-full group">
            <div className="h-1.5 w-full bg-brand-500 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold text-white mb-2">Market Leader</h3>
            <p className="text-slate-400 text-xs mb-4 h-8">Complete Dominance.</p>

            <div className="flex flex-col mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-slate-600 line-through font-semibold">${isAnnual ? '5,495' : '6,245'}</span>
                <span className="text-3xl font-extrabold text-white">${isAnnual ? '2,750' : '3,125'}</span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold mt-1 h-3">{isAnnual ? 'billed annually' : 'monthly billing'}</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-start gap-2 text-white text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Everything in Authority</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Google Ads Mgmt</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>High-Ticket Focus</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Landing Page CRO</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Dynamic Call Tracking</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>VIP Priority Support</span>
              </li>
            </ul>
            <a href="#audit" className="block w-full py-2.5 px-4 bg-white text-slate-900 font-bold text-sm text-center rounded-lg hover:bg-slate-100 transition-colors mt-auto">Dominate Now</a>
          </div>

        </div>
      </div>
    </section>
  );
}
