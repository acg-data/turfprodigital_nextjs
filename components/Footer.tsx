import { Sprout, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Turf Pro <span className="text-brand-500">Digital</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              We help lawn care and landscaping business owners build 7-figure companies through intelligent web design and local SEO.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/turf-pro-digital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#pricing" className="hover:text-brand-500 transition-colors">Web Design</a></li>
              <li><a href="/#pricing" className="hover:text-brand-500 transition-colors">Local SEO</a></li>
              <li><a href="/#pricing" className="hover:text-brand-500 transition-colors">Google Ads Management</a></li>
              <li><a href="/#pricing" className="hover:text-brand-500 transition-colors">Hosting & Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><a href="/#portfolio" className="hover:text-brand-500 transition-colors">Case Studies</a></li>
              <li><Link href="/blog" className="hover:text-brand-500 transition-colors">Blog</Link></li>
              <li><a href="/#audit" className="hover:text-brand-500 transition-colors">Get Free Audit</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; 2025 Turf Pro Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
