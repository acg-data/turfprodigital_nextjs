'use client';

import { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

export default function ROICalculator() {
  const [currentCpl, setCurrentCpl] = useState(65);
  const [leadsYear, setLeadsYear] = useState(100);
  const [aov, setAov] = useState(3500);
  const [margin, setMargin] = useState(40);

  const conversionRate = 0.10;
  const dropPercentage = 0.75;

  const newCpl = Math.round(currentCpl * (1 - dropPercentage));
  const totalJobs = leadsYear * conversionRate;
  const annualRevenue = totalJobs * aov;
  const grossProfit = annualRevenue * (margin / 100);
  const oldMarketingCost = leadsYear * currentCpl;
  const newMarketingCost = leadsYear * newCpl;
  const marketingSavings = oldMarketingCost - newMarketingCost;
  const totalProfit = grossProfit - newMarketingCost;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 border border-slate-100">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">The Profit Engine</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">Stop Overpaying for Leads</h2>
            <p className="text-sm md:text-base text-slate-500 mt-2">Compare your current lead sources (Angi, Thumbtack, Shared Leads) with our exclusive system.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-slate-700 text-sm md:text-base">Current Cost Per Lead</label>
                  <span className="font-bold text-brand-600">${currentCpl}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={currentCpl}
                  onChange={(e) => setCurrentCpl(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$20</span>
                  <span>$200</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-slate-700 text-sm md:text-base">Total Leads Per Year</label>
                  <span className="font-bold text-brand-600">{leadsYear}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={leadsYear}
                  onChange={(e) => setLeadsYear(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>0</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-slate-700 text-sm md:text-base">Average Order Value</label>
                  <span className="font-bold text-brand-600">${aov.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$500</span>
                  <span>$20k</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-slate-700 text-sm md:text-base">Gross Margin</label>
                  <span className="font-bold text-brand-600">{margin}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 p-3 rounded-lg">
                <Info className="w-4 h-4" />
                <span>Calculations assume a standard <strong>10% lead-to-sale conversion rate</strong>.</span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-slate-900 text-white p-6 md:p-8 rounded-2xl relative overflow-hidden min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Estimated Turf Pro CPL</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-extrabold text-white">${newCpl}</span>
                    <span className="text-brand-400 text-sm font-bold">(-{(dropPercentage * 100).toFixed(0)}%)</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">We lower CPL by ~75% via organic search.</p>
                </div>

                <div className="w-full h-px bg-slate-700"></div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Annual Revenue</p>
                    <p className="text-lg md:text-xl font-bold text-white">${Math.round(annualRevenue).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Marketing Savings</p>
                    <p className="text-lg md:text-xl font-bold text-brand-400">${Math.round(marketingSavings).toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total Annual Profit</p>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-400">
                    ${Math.round(totalProfit).toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Gross Profit - Marketing Costs</p>
                </div>
              </div>

              <div className="mt-8">
                <a href="#audit" className="block w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-center rounded-xl transition-colors shadow-lg shadow-brand-900/50">
                  Start Saving Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
