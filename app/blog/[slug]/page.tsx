import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
}> = {
  "early-spring-feeding-lawn-care": {
    title: "Early Spring Feeding: The Foundation for a Healthy, Vibrant Lawn",
    date: "January 2, 2026",
    readTime: "10 min read",
    category: "Lawn Care",
    image: "/blog-spring-feeding-header.jpg",
    excerpt: "Learn why early spring feeding is critical for lawn recovery after winter dormancy."
  },
  "professional-lawn-aeration-services": {
    title: "Professional Lawn Aeration Services: The Complete Guide to a Healthier Lawn",
    date: "December 31, 2025",
    readTime: "12 min read",
    category: "Lawn Care",
    image: "/blog-lawn-aeration-header.png",
    excerpt: "Discover why core aeration is essential for a healthy lawn."
  },
  "digital-marketing-for-landscapers": {
    title: "Digital Marketing for Landscapers: How to Get More Customers Without Wasting Money",
    date: "December 18, 2025",
    readTime: "18 min read",
    category: "Marketing",
    image: "/blog-digital-marketing-header.png",
    excerpt: "Learn how digital marketing actually works for landscaping and lawn care companies."
  },
  "seo-tips-that-move-the-needle": {
    title: "5 SEO Tips That Actually Move the Needle",
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "SEO",
    image: "/GwIzX24WAAAVxLJ.png",
    excerpt: "SEO isn't about tricks or chasing Google updates."
  }
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article>
            <div className="mb-8">
              <span className="bg-brand-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-500 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {post.excerpt} This is a placeholder for the full blog post content. 
                In the complete implementation, you would migrate all the detailed content 
                from the original BlogPost.tsx file.
              </p>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                The original blog post contains extensive content about {post.category.toLowerCase()}. 
                To complete the migration, you would copy the full content from the original 
                turfprodigital/src/pages/BlogPost.tsx file and adapt it for Next.js.
              </p>

              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to learn more?</h3>
                <p className="text-slate-600 mb-4">
                  Contact us to discuss how we can help your landscaping business grow.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center gap-2 bg-brand-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
