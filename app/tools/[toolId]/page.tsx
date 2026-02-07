import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { tools, getToolById } from '@/lib/tools-data';

// Import all tool components
import ROICalculator from '@/components/ROICalculator';
import WebsiteAuditTool from '@/components/tools/WebsiteAuditTool';
import SEOScoreChecker from '@/components/tools/SEOScoreChecker';
import LeadCostCalculator from '@/components/tools/LeadCostCalculator';
import MarketingCalendarTool from '@/components/tools/MarketingCalendarTool';

interface PageProps {
  params: Promise<{ toolId: string }>;
}

// Map tool IDs to components
const toolComponents: Record<string, React.ComponentType> = {
  'roi-calculator': ROICalculator,
  'website-audit': WebsiteAuditTool,
  'seo-score-checker': SEOScoreChecker,
  'lead-cost-calculator': LeadCostCalculator,
  'marketing-calendar': MarketingCalendarTool
};

export default async function ToolPage({ params }: PageProps) {
  const { toolId } = await params;
  const tool = getToolById(toolId);
  
  if (!tool) {
    notFound();
  }

  const ToolComponent = toolComponents[toolId];
  
  if (!ToolComponent) {
    notFound();
  }

  // Find related tools (excluding current)
  const relatedTools = tools
    .filter(t => t.id !== toolId)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/tools" className="text-slate-500 hover:text-emerald-600 transition-colors">
              Tools
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{tool.name}</span>
          </div>
        </div>
      </div>

      {/* Tool Header */}
      <section className="bg-white pt-8 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Tools
          </Link>
          
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <tool.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                {tool.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {tool.name}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                {tool.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Component */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ToolComponent />
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Try These Tools Next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedTools.map((relatedTool) => {
              const Icon = relatedTool.icon;
              return (
                <Link
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.id}`}
                  className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedTool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {relatedTool.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {relatedTool.description}
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold text-sm">
                    <span>Try It</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all tools
export function generateStaticParams() {
  return tools.map((tool) => ({
    toolId: tool.id,
  }));
}
