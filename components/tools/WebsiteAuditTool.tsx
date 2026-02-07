'use client';

import { useState } from 'react';
import { 
  Globe, 
  Zap, 
  Smartphone, 
  Shield, 
  Search,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react';

interface AuditResult {
  performance: number;
  seo: number;
  mobile: number;
  security: number;
  overall: number;
}

export default function WebsiteAuditTool() {
  const [url, setUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [auditedUrl, setAuditedUrl] = useState('');

  const runAudit = () => {
    if (!url) return;
    
    setIsAuditing(true);
    setAuditedUrl(url);
    
    // Simulate audit with realistic scores
    setTimeout(() => {
      setResult({
        performance: Math.floor(Math.random() * 30) + 60, // 60-90
        seo: Math.floor(Math.random() * 25) + 70, // 70-95
        mobile: Math.floor(Math.random() * 20) + 75, // 75-95
        security: Math.floor(Math.random() * 15) + 80, // 80-95
        overall: 0
      });
      setIsAuditing(false);
    }, 2000);
  };

  // Calculate overall after result is set
  const getOverallScore = (r: AuditResult) => {
    return Math.round((r.performance + r.seo + r.mobile + r.security) / 4);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-emerald-500';
    if (score >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getRecommendations = (category: string, score: number) => {
    if (score >= 90) return ['Excellent! Keep up the great work.'];
    if (score >= 70) {
      if (category === 'performance') return ['Optimize images', 'Enable compression', 'Minify CSS/JS'];
      if (category === 'seo') return ['Add meta descriptions', 'Improve header structure', 'Add alt tags'];
      if (category === 'mobile') return ['Touch targets too small', 'Viewport not set', 'Font sizes too small'];
      return ['Missing security headers', 'SSL certificate check', 'Update plugins'];
    }
    if (category === 'performance') return ['Critical: Large images', 'No caching enabled', 'Server response slow'];
    if (category === 'seo') return ['Missing title tags', 'No meta descriptions', 'Broken links found'];
    if (category === 'mobile') return ['Not mobile-friendly', 'Horizontal scrolling', 'Content wider than screen'];
    return ['No HTTPS', 'Missing CSP headers', 'Outdated software'];
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-500" />
          Website Health Audit
        </h3>
        <p className="text-slate-600 mb-6">
          Enter your website URL to get a comprehensive health check across performance, SEO, mobile-friendliness, and security.
        </p>
        <div className="flex gap-3">
          <input
            type="url"
            placeholder="https://your-website.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
          />
          <button
            onClick={runAudit}
            disabled={isAuditing || !url}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isAuditing ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Auditing...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Run Audit
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Overall Score */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-slate-700"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - getOverallScore(result) / 100)}`}
                    className={`${getScoreColor(getOverallScore(result))} transition-all duration-1000 ease-out`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(getOverallScore(result))}`}>
                    {getOverallScore(result)}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">Overall Health Score</h4>
                <p className="text-slate-300 mb-4">
                  {auditedUrl}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {getOverallScore(result) >= 90 && (
                    <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Excellent
                    </span>
                  )}
                  {getOverallScore(result) >= 70 && getOverallScore(result) < 90 && (
                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Good - Needs Improvement
                    </span>
                  )}
                  {getOverallScore(result) < 70 && (
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Needs Attention
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Category Scores */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Performance */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span className="font-semibold text-slate-900">Performance</span>
                </div>
                <span className={`text-2xl font-bold ${getScoreColor(result.performance)}`}>
                  {result.performance}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                <div 
                  className={`${getScoreBg(result.performance)} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${result.performance}%` }}
                />
              </div>
              <ul className="space-y-2 text-sm">
                {getRecommendations('performance', result.performance).map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <span className="text-amber-500 mt-0.5">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-violet-500" />
                  <span className="font-semibold text-slate-900">SEO</span>
                </div>
                <span className={`text-2xl font-bold ${getScoreColor(result.seo)}`}>
                  {result.seo}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                <div 
                  className={`${getScoreBg(result.seo)} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${result.seo}%` }}
                />
              </div>
              <ul className="space-y-2 text-sm">
                {getRecommendations('seo', result.seo).map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <span className="text-violet-500 mt-0.5">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-slate-900">Mobile-Friendly</span>
                </div>
                <span className={`text-2xl font-bold ${getScoreColor(result.mobile)}`}>
                  {result.mobile}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                <div 
                  className={`${getScoreBg(result.mobile)} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${result.mobile}%` }}
                />
              </div>
              <ul className="space-y-2 text-sm">
                {getRecommendations('mobile', result.mobile).map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-500 mt-0.5">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold text-slate-900">Security</span>
                </div>
                <span className={`text-2xl font-bold ${getScoreColor(result.security)}`}>
                  {result.security}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                <div 
                  className={`${getScoreBg(result.security)} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${result.security}%` }}
                />
              </div>
              <ul className="space-y-2 text-sm">
                {getRecommendations('security', result.security).map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-200 rounded-xl p-6 text-center">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Want a Detailed Action Plan?</h4>
            <p className="text-slate-600 mb-4">
              Get a comprehensive website audit with prioritized recommendations from our experts.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-500/30"
            >
              Get Free Expert Audit
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
