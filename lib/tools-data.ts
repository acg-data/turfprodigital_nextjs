import { 
  Calculator, 
  Globe, 
  Search, 
  TrendingUp, 
  CalendarDays 
} from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: typeof Calculator;
  category: string;
  color: string;
  featured?: boolean;
}

export const tools: Tool[] = [
  {
    id: 'roi-calculator',
    name: 'ROI Calculator',
    description: 'Calculate the return on investment for your marketing campaigns. See exactly how much revenue you can generate from your ad spend.',
    icon: Calculator,
    category: 'Analytics',
    color: 'from-emerald-500 to-teal-600',
    featured: true
  },
  {
    id: 'website-audit',
    name: 'Website Audit Tool',
    description: 'Get a comprehensive health check of your website. Analyze performance, SEO, mobile-friendliness, and security in seconds.',
    icon: Globe,
    category: 'SEO',
    color: 'from-blue-500 to-indigo-600',
    featured: true
  },
  {
    id: 'seo-score-checker',
    name: 'SEO Score Checker',
    description: 'Quickly assess your website\'s SEO health. Get actionable insights on keywords, meta tags, content quality, and technical issues.',
    icon: Search,
    category: 'SEO',
    color: 'from-violet-500 to-purple-600',
    featured: true
  },
  {
    id: 'lead-cost-calculator',
    name: 'Lead Cost Calculator',
    description: 'Determine your true customer acquisition cost. Calculate cost per lead, cost per booked job, and customer lifetime value.',
    icon: TrendingUp,
    category: 'Analytics',
    color: 'from-amber-500 to-orange-600',
    featured: true
  },
  {
    id: 'marketing-calendar',
    name: 'Marketing Calendar Tool',
    description: 'Plan your seasonal marketing campaigns with our interactive calendar. Never miss key promotional periods for your lawn care business.',
    icon: CalendarDays,
    category: 'Planning',
    color: 'from-rose-500 to-pink-600',
    featured: true
  }
];

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter(tool => tool.category === category);
};
