export interface Service {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  longDescription: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "local-seo-for-landscapers",
    name: "Local SEO for Landscapers",
    shortName: "Local SEO",
    headline: "Rank #1 on Google When Homeowners Search for Landscaping Services",
    description: "Dominate local search results and get found by homeowners actively searching for landscaping services.",
    longDescription: "Our Local SEO service is specifically designed for landscaping companies.",
    benefits: ["Appear in Google Map Pack", "Rank for high-intent keywords", "Reduce cost per lead"]
  },
  {
    slug: "google-ads-for-landscapers",
    name: "Google Ads for Landscapers",
    shortName: "Google Ads",
    headline: "Get Immediate Leads with High-Intent Google Ads Campaigns",
    description: "Need customers this week? Our Google Ads management targets homeowners actively searching.",
    longDescription: "Our Google Ads service delivers immediate results for landscaping companies.",
    benefits: ["Start getting leads within 48 hours", "Target only high-intent keywords", "Precise geo-targeting"]
  },
  {
    slug: "website-design-for-landscapers",
    name: "Website Design for Landscapers",
    shortName: "Web Design",
    headline: "Turn Your Website Into a 24/7 Salesperson",
    description: "High-converting websites specifically designed for landscaping companies.",
    longDescription: "Your website should be your best salesperson, working 24/7 to convert visitors into leads.",
    benefits: ["Convert 3-5x more visitors", "Mobile-optimized", "Showcase your portfolio"]
  },
  {
    slug: "content-marketing-for-landscapers",
    name: "Content Marketing for Landscapers",
    shortName: "Content Marketing",
    headline: "Stay Top-of-Mind with Automated Content",
    description: "Monthly blog posts, email newsletters, and review requests that drive repeat business.",
    longDescription: "Content marketing keeps your landscaping company top-of-mind with past clients.",
    benefits: ["Generate repeat business", "Build authority", "Improve SEO"]
  },
  {
    slug: "review-management-for-landscapers",
    name: "Review Management for Landscapers",
    shortName: "Review Management",
    headline: "Build a 5-Star Reputation That Attracts Premium Clients",
    description: "Automated review generation, monitoring, and response system.",
    longDescription: "Your online reputation directly impacts how many leads you get.",
    benefits: ["Get more 5-star reviews", "Rank higher in Google", "Build trust"]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getRelatedServices = (serviceSlug: string): Service[] => {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return services.filter(s => s.slug !== serviceSlug).slice(0, 2);
};
