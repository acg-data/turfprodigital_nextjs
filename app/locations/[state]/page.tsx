import { notFound } from 'next/navigation';
import Link from 'next/link';
import { states, getStateBySlug } from '@/lib/pseo/data/states';
import { cities, getCitiesByState } from '@/lib/pseo/data/cities';
import { generateStateMetadata } from '@/lib/pseo/utils/metadata';
import { MapPin, Users, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ state: string }>;
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
  const stateData = getStateBySlug(state);
  
  if (!stateData) {
    notFound();
  }

  const stateCities = getCitiesByState(stateData.abbreviation);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Landscaping Marketing Agency in {stateData.name}
            </h1>
            <p className="text-xl text-slate-300 mb-8">{stateData.description}</p>
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all">
              Get Your Free {stateData.abbreviation} Market Analysis
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Cities We Serve in {stateData.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateCities.map((city) => (
              <Link key={city.slug} href={`/locations/${city.stateSlug}/${city.slug}`} className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-300 transition-all">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600">{city.name}</h3>
                <p className="text-slate-600">{city.population.toLocaleString()} residents</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { state } = await params;
  const stateData = getStateBySlug(state);
  if (!stateData) return { title: 'State Not Found' };
  return generateStateMetadata(stateData);
}
