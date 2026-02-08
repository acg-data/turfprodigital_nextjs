import { notFound } from 'next/navigation';
import Link from 'next/link';
import { states, getStateBySlug } from '@/lib/pseo/data/states';
import { cities, getCityBySlugAndState } from '@/lib/pseo/data/cities';
import { generateCityMetadata } from '@/lib/pseo/utils/metadata';
import { MapPin, Users, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ state: string; city: string }>;
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateData = getStateBySlug(state);
  if (!stateData) notFound();
  
  const cityData = getCityBySlugAndState(city, stateData.abbreviation);
  if (!cityData) notFound();

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Landscaping Marketing in {cityData.name}, {cityData.stateCode}
          </h1>
          <p className="text-xl text-slate-300 mb-8">{cityData.description}</p>
          <a href="/#contact" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all">
            Get Your Free {cityData.name} Market Analysis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
              <Users className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
              <p className="text-3xl font-bold text-slate-900">{cityData.population.toLocaleString()}</p>
              <p className="text-slate-600">Population</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
              <p className="text-3xl font-bold text-slate-900">{cityData.competitors}</p>
              <p className="text-slate-600">Competitors</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
              <p className="text-3xl font-bold text-slate-900">${cityData.medianIncome.toLocaleString()}</p>
              <p className="text-slate-600">Median Income</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  cities.forEach((city) => {
    const state = states.find(s => s.abbreviation === city.stateCode);
    if (state) params.push({ state: state.slug, city: city.slug });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { state, city } = await params;
  const stateData = getStateBySlug(state);
  if (!stateData) return { title: 'Location Not Found' };
  const cityData = getCityBySlugAndState(city, stateData.abbreviation);
  if (!cityData) return { title: 'City Not Found' };
  return generateCityMetadata(cityData);
}
