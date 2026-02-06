import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: "Frank Sturm",
    role: "Co-Founder & CEO",
    bio: "Frank brings over 20 years of experience building two landscaping and fertilizing companies. Prior to starting Turf Pro and GreenAce Lawn Care, he had a career in digital marketing. His passion for helping small businesses grow led him to co-found Turf Pro Digital, where he focuses on developing strategic partnerships and ensuring every client achieves measurable results.",
    image: "/frank-sturm.jpg"
  },
  {
    name: "Justin Abrams",
    role: "Co-Founder & CTO",
    bio: "Justin is a seasoned digital marketer and business consultant, founding Aryo Consulting Group in 2020. He leads the technical team at Turf Pro Digital, ensuring every company succeeds digitally, via search engines and user experience.",
    image: "/justin-abrams.jpg"
  }
];

export default function About() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Meet Our Team
            </h1>
            <p className="text-slate-600 text-lg">
              We're a team of digital marketing experts dedicated to helping landscaping businesses thrive online.
            </p>
          </div>

          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Turf Pro Digital, we believe every landscaping company deserves a strong online presence. We combine cutting-edge web design with proven SEO strategies to help our clients dominate their local markets and fill their calendars with high-quality leads.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Unlike generic marketing agencies, we specialize exclusively in the landscaping industry. This focused approach means we understand your challenges, your customers, and exactly what it takes to stand out in a competitive market.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Leadership</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-brand-200 transition-all duration-300"
              >
                <div className="h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-600 font-semibold text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-brand-100 hover:text-brand-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-brand-100 hover:text-brand-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
