import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Before working with Turf Pro, we were relying on referrals. Now our website brings in 3-5 quote requests every single day. We've had to buy two new trucks just to keep up.",
      name: "Mike Reynolds",
      company: "Reynolds Landscapes",
      avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
      quote: "I was skeptical about Google Ads because I burned money on them before. Their team set it up to only target big install jobs. The ROI has been incredible—nearly 10x.",
      name: "Sarah Thompson",
      company: "Green Earth Design",
      avatar: "https://i.pravatar.cc/100?img=68"
    },
    {
      quote: "The communication is what sets them apart. I have a dedicated account manager I can actually text. They understand the landscaping seasonality perfectly.",
      name: "David Kowalski",
      company: "DK Lawn Care",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
          Don't Just Take Our Word For It
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="text-brand-500 mb-4">
                <Quote className="w-8 h-8 fill-current opacity-20" />
              </div>
              <p className="text-slate-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-brand-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.company}</p>
                </div>
              </div>
              <div className="absolute top-8 right-8 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
