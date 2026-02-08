import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug, getRelatedServices } from '@/lib/pseo/data/services';
import { generateServiceMetadata } from '@/lib/pseo/utils/metadata';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ service: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const serviceData = getServiceBySlug(service);
  
  if (!serviceData) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {serviceData.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              {serviceData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Get</h2>
          <p className="text-lg text-slate-600 mb-8">{serviceData.longDescription}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { service } = await params;
  const serviceData = getServiceBySlug(service);
  if (!serviceData) return { title: 'Service Not Found' };
  return generateServiceMetadata(serviceData);
}
