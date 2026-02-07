import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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

            <div 
              className="prose prose-lg prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | Turf Pro Digital Blog`,
    description: post.excerpt,
  };
}
