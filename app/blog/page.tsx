import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 0,
    title: "Early Spring Feeding: The Foundation for a Healthy, Vibrant Lawn",
    excerpt: "Learn why early spring feeding is critical for lawn recovery after winter dormancy. Discover the right timing, fertilizer types, and professional application techniques for a lush green lawn.",
    image: "/blog-spring-feeding-header.jpg",
    date: "January 2, 2026",
    readTime: "10 min read",
    category: "Lawn Care",
    slug: "early-spring-feeding-lawn-care"
  },
  {
    id: 1,
    title: "Professional Lawn Aeration Services: The Complete Guide to a Healthier Lawn",
    excerpt: "Discover why core aeration is essential for a healthy lawn. Learn when to aerate, what to expect from professional services, and how aeration helps your grass thrive year-round.",
    image: "/blog-lawn-aeration-header.png",
    date: "December 31, 2025",
    readTime: "12 min read",
    category: "Lawn Care",
    slug: "professional-lawn-aeration-services"
  },
  {
    id: 2,
    title: "Digital Marketing for Landscapers: How to Get More Customers Without Wasting Money",
    excerpt: "Learn how digital marketing actually works for landscaping and lawn care companies — from local SEO and Google Ads to websites that convert. A comprehensive guide with real data from Turf Pro Digital campaigns.",
    image: "/blog-digital-marketing-header.png",
    date: "December 18, 2025",
    readTime: "18 min read",
    category: "Marketing",
    slug: "digital-marketing-for-landscapers"
  },
  {
    id: 3,
    title: "5 SEO Tips That Actually Move the Needle",
    excerpt: "SEO isn't about tricks or chasing Google updates. It's about making your site the clearest, most useful answer to a real human question. Here are five tips that compound over time.",
    image: "/GwIzX24WAAAVxLJ.png",
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "SEO",
    slug: "seo-tips-that-move-the-needle"
  },
];

export default function Blog() {
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
              Insights & Resources
            </h1>
            <p className="text-slate-600 text-lg">
              Expert tips and strategies to help your landscaping business grow online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
                    data-testid={`link-read-more-${post.id}`}
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
