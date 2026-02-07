'use client';

import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  Calculator,
  ArrowRight,
  Info
} from 'lucide-react';

export default function LeadCostCalculator() {
  const [adSpend, setAdSpend] = useState(2000);
  const [leadsGenerated, setLeadsGenerated] = useState(50);
  const [closeRate, setCloseRate] = useState(20);
  const [avgJobValue, setAvgJobValue] = useState(1500);
  const [showResults, setShowResults] = useState(false);

  const costPerLead = adSpend / leadsGenerated;
  const customersAcquired = Math.round(leadsGenerated * (closeRate / 100));
  const costPerCustomer = adSpend / customersAcquired;
  const revenue = customersAcquired * avgJobValue;
  const profit = revenue - adSpend;
  const roas = revenue / adSpend;

  useEffect(() => {
    setShowResults(true);
  }, [adSpend, leadsGenerated, closeRate, avgJobValue]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-lg p-6 mb-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Lead Cost Calculator</h3>
        </div>
        <p className="text-amber-100">
          Calculate your true customer acquisition costs and ROI. Understand what you're really paying per booked job.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-500" />
            Your Numbers
          </h4>

          <div className="space-y-6">
            {/* Ad Spend */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  Monthly Ad Spend
                </label>
                <span className="text-sm font-bold text-amber-600">{formatCurrency(adSpend)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>$500</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Leads Generated */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                  <Users className="w-4 h-4 text-slate-400" />
                  Leads Per Month
                </label>
                <span className="text-sm font-bold text-amber-600">{leadsGenerated} leads</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={leadsGenerated}
                onChange={(e) => setLeadsGenerated(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>10</span>
                <span>200</span>
              </div>
            </div>

            {/* Close Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                  <Target className="w-4 h-4 text-slate-400" />
                  Close Rate
                </label>
                <span className="text-sm font-bold text-amber-600">{closeRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>5%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Average Job Value */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  Average Job Value
                </label>
                <span className="text-sm font-bold text-amber-600">{formatCurrency(avgJobValue)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>$500</span>
                <span>$5,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          {/* Primary Metrics */}
          <div className="bg-slate-900 rounded-2xl shadow-xl p-6 text-white">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              Your Results
            </h4>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Cost Per Lead</span>
                <span className="text-2xl font-bold text-amber-400">{formatCurrency(costPerLead)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Customers Acquired</span>
                <span className="text-2xl font-bold text-emerald-400">{customersAcquired}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Cost Per Customer</span>
                <span className="text-2xl font-bold text-amber-400">
                  {isFinite(costPerCustomer) ? formatCurrency(costPerCustomer) : 'N/A'}
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Total Revenue</span>
                <span className="text-2xl font-bold text-emerald-400">{formatCurrency(revenue)}</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Net Profit</span>
                <span className={`text-2xl font-bold ${profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {formatCurrency(profit)}
                </span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-400">ROAS</span>
                <span className={`text-3xl font-bold ${roas >= 3 ? 'text-emerald-400' : roas >= 2 ? 'text-amber-400' : 'text-red-400'}`}>
                  {roas.toFixed(1)}x
                </span>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
            <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-600" />
              Insights
            </h5>
            <ul className="space-y-2 text-sm text-slate-700">
              {costPerLead > 100 && (
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Your cost per lead is above $100. Focus on improving targeting and landing page conversion.</span>
                </li>
              )}
              {closeRate < 20 && (
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Close rate under 20% suggests sales process improvements needed.</span>
                </li>
              )}
              {roas < 3 && (
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>ROAS below 3x indicates room for optimization. Consider upselling or increasing job values.</span>
                </li>
              )}
              {roas >= 4 && (
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>Excellent ROAS! You're getting strong returns. Consider scaling your ad spend.</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Industry average close rate for landscaping: 15-25%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-slate-200 text-center">
        <h4 className="text-lg font-bold text-slate-900 mb-2">Want to Lower Your Cost Per Lead?</h4>
        <p className="text-slate-600 mb-4">
          Our clients typically see a 40-60% reduction in cost per lead within 90 days.
        </p>
        <a 
          href="/#contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all"
        >
          Get Free Strategy Call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
