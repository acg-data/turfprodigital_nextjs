import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ROICalculator from '@/components/ROICalculator';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased selection:bg-brand-500 selection:text-white overflow-x-hidden">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Portfolio />
      <Comparison />
      <Pricing />
      <FAQ />
      <ROICalculator />
      <ContactForm />
    </div>
  );
}
