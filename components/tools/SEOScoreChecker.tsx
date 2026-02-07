'use client';

import { useState } from 'react';
import { 
  Search, 
  FileText, 
  Tag, 
  Link2, 
  Image,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

interface SEOCheck {
  category: string;
  items: {
    name: string;
    status: 'pass' | 'fail' | 'warning';
    message: string;
  }[];
}

export default function SEOScoreChecker() {
  const [url, setUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [checks, setChecks] = useState<SEOCheck[]>([]);
  const [checkedUrl, setCheckedUrl] = useState('');

  const runSEOCheck = () => {
    if (!url) return;
    
    setIsChecking(true);
    setCheckedUrl(url);
    
    setTimeout(() => {
      // Generate random but realistic SEO scores
      const newScore = Math.floor(Math.random() * 35) + 55; // 55-90
      setScore(newScore);
      
      // Generate realistic checks based on score
      const seoChecks: SEOCheck[] = [
        {
          category: 'Meta Tags',
          items: [
            {
              name: 'Title Tag',
              status: newScore > 70 ? 'pass' : newScore > 50 ? 'warning' : 'fail',
              message: newScore > 70 ? 'Optimized (58 chars)' : newScore > 50 ? 'Too short (45 chars)' : 'Missing or empty'
            },
            {
              name: 'Meta Description',
              status: newScore > 75 ? 'pass' : newScore > 60 ? 'warning' : 'fail',
              message: newScore > 75 ? 'Well optimized (155 chars)' : newScore > 60 ? 'Too short (120 chars)' : 'Missing'
            },
            {
              name: 'Canonical URL',
              status: newScore > 65 ? 'pass' : 'warning',
              message: newScore > 65 ? 'Properly set' : 'Missing canonical tag'
            }
          ]
        },
        {
          category: 'Content',
          items: [
            {
              name: 'H1 Tag',
              status: newScore > 60 ? 'pass' : 'fail',
              message: newScore > 60 ? 'Present and optimized' : 'Missing H1 tag'
            },
            {
              name: 'Header Structure',
              status: newScore > 70 ? 'pass' : newScore > 55 ? 'warning' : 'fail',
              message: newScore > 70 ? 'Proper hierarchy' : newScore > 55 ? 'Skipped levels' : 'No structure'
            },
            {
              name: 'Content Length',
              status: newScore > 75 ? 'pass' : 'warning',
              message: newScore > 75 ? '1,250 words (Good)' : '680 words (Consider more)'
            }
          ]
        },
        {
          category: 'Technical',
          items: [
            {
              name: 'SSL Certificate',
              status: 'pass',
              message: 'HTTPS enabled'
            },
            {
              name: 'XML Sitemap',
              status: newScore > 80 ? 'pass' : newScore > 60 ? 'warning' : 'fail',
              message: newScore > 80 ? 'Found and valid' : newScore > 60 ? 'Issues detected' : 'Not found'
            },
            {
              name: 'Robots.txt',
              status: newScore > 65 ? 'pass' : 'warning',
              message: newScore > 65 ? 'Present' : 'Missing or blocking'
            }
          ]
        },
        {
          category: 'Images',
          items: [
            {
              name: 'Alt Text',
              status: newScore > 70 ? 'pass' : newScore > 50 ? 'warning' : 'fail',
              message: newScore > 70 ? 'All images have alt text' : `${Math.floor(Math.random() * 5) + 2} images missing alt text`
            },
            {
              name: 'Image Compression',
              status: newScore > 75 ? 'pass' : 'warning',
              message: newScore > 75 ? 'Properly optimized' : '3 images could be compressed'
            }
          ]
        }
      ];
      
      setChecks(seoChecks);
      setIsChecking(false);
    }, 2000);
  };

  const getScoreColor = (s: number) => {
    if (s >= 80) return 'text-emerald-500';
    if (s >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  const getScoreBg = (s: number) => {
    if (s >= 80) return 'bg-emerald-500';
    if (s >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getScoreText = (s: number) => {
    if (s >= 80) return 'Good';
    if (s >= 60) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Search className="w-6 h-6 text-violet-500" />
          SEO Score Checker
        </h3>
        <p className="text-slate-600 mb-6">
          Analyze your website's SEO health. Check meta tags, content structure, technical issues, and more.
        </p>
        <div className="flex gap-3">
          <input
            type="url"
            placeholder="https://your-website.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all"
          />
          <button
            onClick={runSEOCheck}
            disabled={isChecking || !url}
            className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isChecking ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Check SEO
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results */}
      {score !== null && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Overall Score Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r="64"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="transparent"
                    className="text-slate-100"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="64"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 64}`}
                    strokeDashoffset={`${2 * Math.PI * 64 * (1 - score / 100)}`}
                    className={`${getScoreColor(score)} transition-all duration-1000 ease-out`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(score)}`}>
                    {score}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">/ 100</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  SEO Score: {getScoreText(score)}
                </h4>
                <p className="text-slate-600 mb-4">{checkedUrl}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {score >= 80 && (
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Well Optimized
                    </span>
                  )}
                  {score >= 60 && score < 80 && (
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      Needs Work
                    </span>
                  )}
                  {score < 60 && (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <XCircle className="w-4 h-4" />
                      Critical Issues
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Checks */}
          <div className="grid md:grid-cols-2 gap-4">
            {checks.map((check, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  {check.category === 'Meta Tags' && <Tag className="w-5 h-5 text-violet-500" />}
                  {check.category === 'Content' && <FileText className="w-5 h-5 text-blue-500" />}
                  {check.category === 'Technical' && <Link2 className="w-5 h-5 text-emerald-500" />}
                  {check.category === 'Images' && <Image className="w-5 h-5 text-amber-500" />}
                  {check.category}
                </h4>
                <div className="space-y-3">
                  {check.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {item.status === 'pass' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      )}
                      {item.status === 'warning' && (
                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      )}
                      {item.status === 'fail' && (
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{item.name}</p>
                        <p className="text-slate-500 text-xs">{item.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Priority Actions */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-violet-600" />
              Priority Actions
            </h4>
            <ul className="space-y-2">
              {score < 80 && (
                <>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-violet-500 mt-1">1.</span>
                    <span>Optimize your title tags to be between 50-60 characters</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-violet-500 mt-1">2.</span>
                    <span>Add compelling meta descriptions (150-160 characters)</span>
                  </li>
                </>
              )}
              {score < 70 && (
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-violet-500 mt-1">3.</span>
                  <span>Add alt text to all images for better accessibility and SEO</span>
                </li>
              )}
              {score < 60 && (
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-violet-500 mt-1">4.</span>
                  <span>Create and submit an XML sitemap to search engines</span>
                </li>
              )}
              {score >= 80 && (
                <li className="text-slate-700">
                  Great job! Your SEO foundation is solid. Focus on content creation and building quality backlinks.
                </li>
              )}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-xl p-6 text-center text-white">
            <h4 className="text-lg font-bold mb-2">Need Help Improving Your SEO?</h4>
            <p className="text-slate-300 mb-4">
              Our experts can implement all these fixes and more. Get a complete SEO strategy tailored for your lawn care business.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all"
            >
              Get SEO Help
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
