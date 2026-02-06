import { Search, MailOpen, MousePointer2 } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-transparent rounded-2xl transform -rotate-3"></div>
            <img
              src="/GwIzX24WAAAVxLJ.png"
              alt="Local Search Map Rankings"
              className="relative rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Dominating Local Search</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              When a homeowner in your town searches "patio installer" or "lawn care," who shows up? If it's not you, you're losing money. Our SEO foundation ensures you rank for the keywords that actually drive revenue, not just traffic.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Google Map Pack Optimization
              </li>
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Service Area Pages
              </li>
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Citation Building
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <MailOpen className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">The Content Engine</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              You hate writing blogs. We do it for you. We create industry-specific articles that Google loves and send automated newsletters to your past clients so they remember to book Spring Cleanups and Fall Aeration.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Monthly SEO Blog Posts
              </li>
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Seasonal Client Newsletters
              </li>
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Automated Review Requests
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-brand-100 to-transparent rounded-2xl transform rotate-3"></div>
            <img
              src="/image.png"
              alt="Google Search Console Performance"
              className="relative rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-1 md:order-2">
            <div className="bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <MousePointer2 className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">High-Intent Google Ads</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Need work <i>this week</i>? SEO takes time, but Google Ads are instant. We run targeted campaigns specifically for high-margin jobs like Hardscaping, Lighting, and Installation. We don't waste budget on "lawn mowing" clicks unless you want volume.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Negative Keyword Filtering
              </li>
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> High-Ticket Focusing
              </li>
              <li className="flex items-center gap-3 font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Call Tracking & Recording
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-transparent rounded-2xl transform -rotate-3"></div>
            <img
              src="/image copy.png"
              alt="Google Ads Results"
              className="relative rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
