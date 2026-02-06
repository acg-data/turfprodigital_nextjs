'use client';

import { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-brand-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-brand-600 to-brand-400 p-2 rounded-xl shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Turf Pro <span className="text-brand-600">Digital</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Packages
            </button>
            <Link 
              href="/blog" 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              About
            </Link>
            <a href={isHomePage ? "#audit" : "/#audit"} className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 transition-all">
              Get Free Audit
            </a>
          </div>

          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors"
              data-testid="link-mobile-process"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors"
              data-testid="link-mobile-work"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors"
              data-testid="link-mobile-packages"
            >
              Packages
            </button>
            <Link 
              href="/blog" 
              onClick={closeMobileMenu}
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors"
              data-testid="link-mobile-blog"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors"
              data-testid="link-mobile-about"
            >
              About
            </Link>
            <a 
              href={isHomePage ? "#audit" : "/#audit"} 
              onClick={closeMobileMenu}
              className="block w-full text-center bg-slate-900 text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-brand-600 transition-all mt-4"
              data-testid="link-mobile-audit"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
