import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Built for Conversion</h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              We don't just make "pretty" websites. We build sales machines designed to convert visitors into booked jobs.
            </p>
          </div>
          <a href="#audit" className="hidden md:flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src="/portfolio-greenacelawncare.png"
              alt="GreenAce Lawn Care"
              className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-xl font-bold">GreenAce Lawn Care</h3>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src="/portfolio-turfproma.png"
              alt="Turf Pro MA"
              className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-xl font-bold">Turf Pro MA</h3>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src="/portfolio-mulchmasters.png"
              alt="Mulch Masters"
              className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-xl font-bold">Mulch Masters</h3>
            </div>
          </div>
        </div>

        <a href="#audit" className="md:hidden mt-8 flex justify-center items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors">
          View All Projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
