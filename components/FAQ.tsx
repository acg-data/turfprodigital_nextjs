import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do I own my website?",
      answer: "Yes, 100%. Unlike other agencies that hold your site hostage, you own the domain, the design, and the content. If you ever decide to leave, you take it with you."
    },
    {
      question: "Are there long-term contracts?",
      answer: "No. We operate on a month-to-month basis. We believe we should earn your business every month with results, not lock you into a 12-month agreement."
    },
    {
      question: "How long until I see results?",
      answer: "Google Ads produce leads almost immediately (within 48-72 hours of launch). Local SEO typically takes 3-6 months to build significant momentum, but provides the highest long-term ROI."
    },
    {
      question: "Do you work with other industries?",
      answer: "No. We specialize exclusively in the Green Industry (Landscaping, Lawn Care, Tree Service, Hardscaping). This focus allows us to know exactly what keywords work and what homeowners are looking for."
    },
    {
      question: "Is Ad Spend included in the price?",
      answer: "No, the 'Market Leader' package covers the professional management, optimization, and reporting of your campaigns. You pay Google directly for the ad clicks (Ad Spend), which gives you full control and transparency over your budget."
    },
    {
      question: "Do I have to write the emails/blogs?",
      answer: "Not at all. In the 'Authority Partner' package, we handle all the writing. We know the difference between dethatching and aerating, so the content is accurate and professional without you needing to lift a finger."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely. Many of our clients start with the 'Growth Partner' package to build their foundation and upgrade to 'Authority' or 'Market Leader' once they have the crew capacity to handle more leads."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">Common Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-slate-900 list-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
