export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "early-spring-feeding-lawn-care",
    title: "Early Spring Feeding: The Foundation for a Healthy, Vibrant Lawn",
    date: "January 2, 2026",
    readTime: "10 min read",
    category: "Lawn Care",
    image: "/blog-spring-feeding-header.jpg",
    excerpt: "Learn why early spring feeding is critical for lawn recovery after winter dormancy.",
    content: `
      <p class="text-lg text-slate-600 mb-6 leading-relaxed">
        The moment winter begins to release its grip, your lawn starts its journey back to life. This critical transition period is when proper early spring feeding makes all the difference between a lawn that merely survives and one that truly thrives. As your local lawn care experts, we understand the science behind spring lawn fertilizer application and its lasting impact on your turf's health.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Early Spring Feeding Matters for Your Lawn</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        After months of dormancy, your lawn emerges from winter in a vulnerable state. The root system has depleted much of its stored energy, and the grass needs proper nutrition to recover and prepare for the growing season ahead. Early spring feeding provides essential nutrients that:
      </p>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-brand-50 border border-brand-200 rounded-xl p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Strengthen Root Development</h3>
          <p class="text-slate-600">
            A strong root system is the foundation of a healthy lawn. Early spring feeding encourages deep root growth that helps your lawn access water and nutrients throughout the season, making it more drought-resistant and resilient.
          </p>
        </div>
        <div class="bg-brand-50 border border-brand-200 rounded-xl p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Promote Dense, Healthy Growth</h3>
          <p class="text-slate-600">
            Proper nutrition in spring stimulates thick grass growth that naturally crowds out weeds. A dense lawn not only looks better but requires less maintenance and fewer interventions throughout the year.
          </p>
        </div>
        <div class="bg-brand-50 border border-brand-200 rounded-xl p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Restore Vibrant Color</h3>
          <p class="text-slate-600">
            Winter takes its toll on lawn color. The right nutrients help restore that rich, green color that signals a healthy, well-maintained property. This curb appeal boost is often visible within weeks of proper feeding.
          </p>
        </div>
        <div class="bg-brand-50 border border-brand-200 rounded-xl p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-2">Build Disease Resistance</h3>
          <p class="text-slate-600">
            A well-nourished lawn is better equipped to resist common lawn diseases and pest problems. Early spring feeding strengthens your lawn's natural defenses, reducing the need for treatments later in the season.
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">When to Apply Spring Lawn Fertilizer: Timing Matters</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        According to Michigan State University Extension, the timing of your spring lawn fertilizer application is critical for optimal results. Many homeowners make the mistake of fertilizing too early, which can actually harm your lawn's long-term health.
      </p>

      <div class="bg-slate-100 border-l-4 border-brand-500 p-6 my-8">
        <p class="text-slate-700 italic">
          "Research at Michigan State University has shown that applying nitrogen fertilizer in early spring stimulates shoot growth at the expense of root growth. Early spring applications that contain high amounts of quick-release nitrogen can actually weaken your lawn instead of making it stronger."
        </p>
        <p class="text-slate-500 mt-2 text-sm">— Michigan State University Extension</p>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">The Ideal Timing Window</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        The best time for early spring feeding is when your lawn has fully broken dormancy and begun active growth—typically when soil temperatures consistently reach 55 degrees Fahrenheit. This usually occurs:
      </p>
      <ul class="list-disc list-inside text-slate-600 mb-6 space-y-2 ml-4">
        <li><strong>Northern regions:</strong> Late April to early May</li>
        <li><strong>Central regions:</strong> Mid-March to early April</li>
        <li><strong>Southern regions:</strong> Late February to mid-March</li>
      </ul>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Start Your Lawn's Journey to Health with Early Spring Feeding</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        The decisions you make about early spring feeding set the foundation for your lawn's health throughout the entire growing season. By providing the right nutrients at the right time, you're investing in a thicker, greener, more resilient lawn that will be the envy of your neighborhood.
      </p>
    `
  },
  {
    slug: "digital-marketing-for-landscapers",
    title: "Digital Marketing for Landscapers: How to Get More Customers Without Wasting Money",
    date: "December 18, 2025",
    readTime: "18 min read",
    category: "Marketing",
    image: "/blog-digital-marketing-header.png",
    excerpt: "Learn how digital marketing actually works for landscaping and lawn care companies.",
    content: `
      <p class="text-lg text-slate-600 mb-6 leading-relaxed">
        If you run a landscaping or lawn care business, you've probably noticed that word of mouth and yard signs only go so far. They work at first, but over time, growth slows, your schedule gets less steady, and revenue levels off. Referrals just aren't enough.
      </p>
      <p class="text-slate-600 mb-6 leading-relaxed">
        At this stage, you don't need random marketing ideas. You need a clear, organized system to bring in qualified local leads without wasting money.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Digital Marketing Is Different for Landscaping Businesses</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Before exploring tactics, it's important to understand why landscaping marketing differs from most industries. Many landscapers lose money by using e-commerce strategies rather than local service strategies.
      </p>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">You Serve a Local Area, Not the Whole Internet</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Landscaping is a local service business. Even though marketing happens online, your customers come from a defined service area—not the entire internet. This is where many landscaping companies waste money: running broad ad targeting that reaches people who can't realistically become customers.
      </p>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">Search Ads vs. Social Ads</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Google Ads target people actively searching for landscaping services, making location accuracy essential. Facebook and social ads work differently—they create awareness rather than capture immediate demand.
      </p>

      <div class="bg-brand-50 border-l-4 border-brand-500 p-6 my-8">
        <p class="text-slate-700 font-medium">
          <strong>The main takeaway:</strong> Focus your landscaping marketing on keeping your best customers and building concentrated, profitable routes. Aim for a few local high-quality leads rather than a high volume of lower-quality ones.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">The Core Digital Marketing Channels That Drive Landscaping Leads</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Landscaping businesses do not achieve equal results from every marketing channel. Below are the most effective channels for your time and budget.
      </p>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">Local SEO & Google Business Profile: Your Foundation</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        For landscaping businesses, your Google Business Profile (GBP) has a greater impact on lead quality and cost efficiency than any social media platform.
      </p>

      <div class="my-8 rounded-xl overflow-hidden border border-slate-200">
        <img 
          src="/GwIzX24WAAAVxLJ.png" 
          alt="Google Local Map Pack example showing landscaping businesses"
          class="w-full"
        />
        <p class="text-sm text-slate-500 p-4 bg-slate-50">Example of a Google Local Map Pack - where most local searches start.</p>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">Landscaping Websites That Convert (Not Just Look Good)</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        A website alone isn't enough; it must convert visitors into leads.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">How Long Does Landscaping Digital Marketing Take to Work?</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        As you put your plan into action, you might wonder how long it takes to see results from digital marketing. Some channels work in weeks, while others take months.
      </p>

      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">30 Days</h4>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Google Ads can begin generating leads quickly once campaigns are live. Google Business Profile optimizations may start improving visibility in local results, and website changes can immediately impact conversion rates.
      </p>

      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">90 Days</h4>
      <p class="text-slate-600 mb-6 leading-relaxed">
        SEO efforts typically start gaining traction, review generation builds momentum, and there's enough performance data to refine ad targeting, budgets, and messaging with confidence.
      </p>

      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">6-12 Months</h4>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Organic rankings become more stable, referral systems contribute consistent leads, and brand recognition within your service area grows in a measurable way.
      </p>

      <div class="bg-brand-600 text-white rounded-xl p-8 mt-10">
        <h3 class="text-xl font-bold mb-3">Ready to Build a Marketing System That Works?</h3>
        <p class="text-brand-100 mb-6">
          If you want help building a marketing system designed specifically for landscaping businesses, we can help. Get a free audit of your current marketing and discover where you're leaving leads on the table.
        </p>
        <a 
          href="/#contact" 
          class="inline-flex items-center gap-2 bg-white text-brand-600 font-bold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors"
        >
          Get Your Free Marketing Audit
        </a>
      </div>
    `
  },
  {
    slug: "seo-tips-that-move-the-needle",
    title: "5 SEO Tips That Actually Move the Needle",
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "SEO",
    image: "/GwIzX24WAAAVxLJ.png",
    excerpt: "SEO isn't about tricks or chasing Google updates.",
    content: `
      <p class="text-lg text-slate-600 mb-6 leading-relaxed italic">
        Before writing the tips themselves, it's worth grounding the goal. SEO isn't about tricks or chasing Google updates—it's about making your site the clearest, most useful answer to a real human question, then removing friction so search engines can recognize that clarity.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Start With Search Intent, Not Keywords</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        One of the biggest SEO mistakes is treating keywords as the goal rather than a signal. A keyword is simply a proxy for intent. If you don't understand why someone is searching, ranking won't translate into traffic that converts.
      </p>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Search intent generally falls into four buckets:
      </p>
      <ul class="list-disc list-inside text-slate-600 mb-6 space-y-2 ml-4">
        <li><strong>Informational</strong> (learn something)</li>
        <li><strong>Navigational</strong> (find a specific site or brand)</li>
        <li><strong>Commercial</strong> (research before buying)</li>
        <li><strong>Transactional</strong> (ready to take action)</li>
      </ul>

      <div class="bg-brand-50 border-l-4 border-brand-500 p-4 my-6">
        <p class="text-slate-700 font-medium">
          <strong>Actionable takeaway:</strong> Define the job to be done behind every keyword before creating content. Write for the intent, then optimize for the keyword—not the other way around.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Create One Truly Excellent Page Instead of Five Mediocre Ones</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        SEO rewards depth and authority far more than volume. Publishing multiple overlapping articles on similar topics often cannibalizes your own rankings and dilutes topical authority.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Optimize for Humans First, Then Search Engines</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Modern SEO is largely a byproduct of good user experience. Metrics like time on page, scroll depth, and pogo-sticking (users quickly returning to search results) act as indirect quality signals.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Build Internal Links With Intention</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Internal linking is one of the most underutilized SEO levers—and one of the safest. It helps search engines understand which pages matter most, how topics relate to each other, and where authority should flow.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Technical SEO: Fix the Bottlenecks, Don't Chase Perfection</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        You don't need a flawless technical setup to rank—but you do need to eliminate obvious friction.
      </p>

      <div class="my-10 rounded-xl overflow-hidden border border-slate-200">
        <img 
          src="/seo-example-website.png" 
          alt="Example of a well-optimized website with clear call-to-actions and professional design"
          class="w-full"
        />
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Final Thoughts: SEO Is a Long Game</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        SEO works best when treated as an asset, not a campaign. The highest-performing sites are built around clear intent, high-quality evergreen content, strong internal structure, and consistent incremental improvement.
      </p>
      <p class="text-slate-600 mb-6 leading-relaxed font-medium">
        The goal isn't to game search engines—it's to become the obvious answer.
      </p>
    `
  },
  {
    slug: "professional-lawn-aeration-services",
    title: "Professional Lawn Aeration Services: The Complete Guide to a Healthier Lawn",
    date: "December 31, 2025",
    readTime: "12 min read",
    category: "Lawn Care",
    image: "/blog-lawn-aeration-header.png",
    excerpt: "Discover why core aeration is essential for a healthy lawn.",
    content: `
      <p class="text-lg text-slate-600 mb-6 leading-relaxed">
        Have you noticed brown spots, thinning grass, or water pooling on your lawn? These telltale signs indicate your soil may be compacted and could benefit from professional aeration. Core aeration helps your lawn breathe, absorb nutrients, and stay healthy year-round.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">What Is Lawn Core Aeration?</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Core aeration removes small plugs of soil from your lawn, creating channels for air, water, and nutrients to reach the roots. This process loosens compacted soil, allowing roots to grow deeper and absorb more nutrients.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Benefits of Professional Lawn Aeration</h2>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">Improved Root Development</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Core aeration creates space for grass roots to expand and grow deeper. This results in a stronger, more drought-resistant lawn that can better withstand weather extremes throughout the seasons.
      </p>

      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">Enhanced Water and Nutrient Absorption</h3>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Aeration helps reduce water runoff and puddling by enabling water to penetrate deeper into the soil. This means more efficient watering and better utilization of fertilizers and nutrients you apply to your lawn.
      </p>

      <div class="bg-brand-50 border-l-4 border-brand-500 p-6 my-8">
        <p class="text-slate-700 font-medium">
          <strong>Ready to transform your lawn?</strong> Professional lawn aeration services are just a call away. Contact us today to schedule your service or get a free quote.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">When Is the Best Time to Aerate Your Lawn?</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Timing is crucial for lawn aeration success. The ideal window depends on your climate and grass type, but here are the general guidelines:
      </p>

      <div class="flex flex-col md:flex-row gap-6 my-8">
        <div class="flex-shrink-0">
          <img 
            src="/blog-aeration-calendar.png" 
            alt="Calendar showing best times for lawn aeration" 
            class="w-full md:w-72 h-auto rounded-xl border border-slate-200"
          />
        </div>
        <div class="flex-1">
          <ul class="list-disc list-outside text-slate-600 space-y-4 ml-5">
            <li>
              <strong class="text-slate-900">Early Fall (September through October):</strong>
              <span class="text-slate-600"> This is the optimal time for most cool-season lawns. Cool temperatures and adequate moisture create ideal conditions for grass recovery and root development before winter dormancy sets in.</span>
            </li>
            <li>
              <strong class="text-slate-900">Early Spring (March through April):</strong>
              <span class="text-slate-600"> Early to mid-spring, after the soil thaws and before summer heat, is an alternative.</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">How Often Should You Aerate Your Lawn?</h2>

      <div class="bg-brand-50 border-l-4 border-brand-500 p-6 my-8">
        <p class="text-slate-700 font-medium italic">
          "Most residential lawns benefit from annual aeration. Lawns with heavy use or dense clay soil may require aeration twice a year."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">The Professional Lawn Aeration Process</h2>
      <p class="text-slate-600 mb-6 leading-relaxed">
        Here's what to expect when you schedule professional aeration services:
      </p>

      <div class="space-y-6 my-8">
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
          <div>
            <h4 class="font-bold text-slate-900 mb-1">Initial Lawn Assessment</h4>
            <p class="text-slate-600">We start with a professional assessment to check for compacted soil, thatch buildup, and any areas that need special attention.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
          <div>
            <h4 class="font-bold text-slate-900 mb-1">Core Aeration</h4>
            <p class="text-slate-600">Using professional equipment, we extract evenly spaced soil cores across your entire lawn for consistent coverage.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
          <div>
            <h4 class="font-bold text-slate-900 mb-1">Post-Aeration Care</h4>
            <p class="text-slate-600">We provide specific instructions for watering and maintenance following aeration to maximize results.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
          <div>
            <h4 class="font-bold text-slate-900 mb-1">Optional Overseeding</h4>
            <p class="text-slate-600">We often recommend overseeding immediately after aeration because the holes provide ideal conditions for seed germination.</p>
          </div>
        </div>
      </div>

      <div class="bg-brand-50 border border-brand-200 rounded-xl p-6 mt-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">Ready for a Healthier, More Beautiful Lawn?</h3>
        <p class="text-slate-600 mb-4">
          Schedule your lawn aeration service today and take the first step toward a lush, green lawn you'll love. Get a free quote customized to your property.
        </p>
        <a 
          href="/#audit" 
          class="inline-flex items-center gap-2 bg-brand-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
        >
          Get Your Free Quote
        </a>
      </div>
    `
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};
