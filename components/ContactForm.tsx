'use client';

import { Video, Target, Loader2, Calendar } from 'lucide-react';
import { useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/franksturm4/30min';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    website: '',
    email: '',
    challenge: 'Not enough leads'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/audit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit" className="py-24 bg-brand-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-900 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wide mb-6">
              Limited Availability
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Book a Free Strategy Call <br className="hidden sm:block" />
              <span className="text-brand-400">& Get a Custom Video Audit</span>
            </h2>
            <p className="text-brand-100 text-base md:text-lg mb-8 leading-relaxed">
              Schedule a 30-minute call with our team. We'll review your website, Google rankings, and competitor strategies—then send you a personalized video audit within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-bold">30-Minute Strategy Call</h4>
                  <p className="text-sm text-brand-200">Pick a time that works for your schedule.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Video className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-bold">5-Minute Video Analysis</h4>
                  <p className="text-sm text-brand-200">Sent directly to your inbox within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-bold">Actionable Keyword Plan</h4>
                  <p className="text-sm text-brand-200">See the exact keywords your competitors use.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Great! Now Book Your Call</h3>
                <p className="text-slate-600 mb-6">Choose a time that works for you. We'll send your video audit within 24 hours of our call.</p>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    src={CALENDLY_URL}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Schedule a call"
                    data-testid="calendly-embed"
                  ></iframe>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Free Strategy Call</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        data-testid="input-first-name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        data-testid="input-last-name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Company Website</label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      data-testid="input-website"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                      placeholder="www.yourcompany.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Biggest Challenge?</label>
                    <select 
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      data-testid="select-challenge"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    >
                      <option value="Not enough leads">Not enough leads</option>
                      <option value="Poor lead quality">Poor lead quality</option>
                      <option value="Website needs update">Website needs update</option>
                      <option value="Just starting out">Just starting out</option>
                    </select>
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm text-center" data-testid="error-message">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="button-submit-audit"
                    className="w-full bg-brand-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Book My Free Call'
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-400 mt-4">
                    No credit card required. We respect your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
