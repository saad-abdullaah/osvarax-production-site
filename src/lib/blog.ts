export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  /** Link to the gig this post supports */
  gigPath: string;
  gigLabel: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  closing: string;
};

export const posts: BlogPost[] = [
  {
    slug: "how-much-does-an-ai-chatbot-cost-2026",
    title: "How Much Does an AI Chatbot Cost in 2026? (Pakistan, UAE, UK & US Pricing Guide)",
    metaTitle: "How Much Does an AI Chatbot Cost in 2026? | OsvaraX",
    description:
      "A straight breakdown of AI chatbot build and running costs in 2026 across Pakistan, UAE, UK and US markets, from OsvaraX.",
    date: "2026-01-14",
    readTime: "7 min read",
    category: "AI Services",
    gigPath: "/packages/ai-services/ai-chatbot-development",
    gigLabel: "AI Chatbot Development",
    intro:
      "Chatbot quotes in 2026 range from under a hundred dollars to five figures, which tells you nothing useful. The price depends on three things: how many channels it lives on, how deeply it connects to your systems, and how much traffic it handles once it's live. Here's how those break down in the markets we work in.",
    sections: [
      {
        heading: "One-off build cost",
        paragraphs: [
          "The build is what you pay to design the conversation, train the bot on your content, style the widget and connect it to wherever your leads need to land.",
        ],
        bullets: [
          "Simple website FAQ bot: roughly $120 to $300",
          "Bot with booking or enquiry flows and CRM sync: roughly $300 to $700",
          "Multi-channel assistant with custom API or database access: $700 and up",
        ],
      },
      {
        heading: "Running cost nobody mentions in the quote",
        paragraphs: [
          "Every conversation costs a fraction of a cent to a few cents in model usage, depending on the model and how much of your content the bot reads per reply. A small business site handling a few hundred conversations a month usually lands somewhere between $5 and $40 in model costs. Hosting a widget is effectively free; hosting an integration-heavy assistant is not.",
          "Ask any vendor for an estimated monthly running cost at your traffic level before you sign. If they can't give you one, they haven't thought about it.",
        ],
      },
      {
        heading: "Does the market you're in change the price?",
        paragraphs: [
          "Model costs are identical whether you're in Lahore, Dubai, London or Los Angeles, they're billed in USD by the same providers. What changes is agency rates. A UK or US agency typically quotes two to five times what a Pakistan-based team charges for the same scope, which is why a lot of UAE, UK, US and Australian businesses work with teams like ours directly.",
        ],
      },
      {
        heading: "What actually drives the number up",
        paragraphs: ["In our experience the cost jumps come from integration, not intelligence."],
        bullets: [
          "Connecting to a booking system, EHR, or inventory database",
          "Multi-language support that needs real testing, not just translation",
          "Human handover rules and routing across a team",
          "Compliance requirements in healthcare, finance or legal",
        ],
      },
    ],
    closing:
      "If you want a number for your specific case rather than a range, a 15-minute call is usually enough to give you one.",
  },
  {
    slug: "ai-voice-agents-vs-call-centers",
    title: "AI Voice Agents vs Traditional Call Centers: What Small Businesses Should Know",
    metaTitle: "AI Voice Agents vs Call Centers in 2026 | OsvaraX",
    description:
      "An honest comparison of AI voice agents and traditional call centers for small businesses, cost, quality, and where each one actually wins.",
    date: "2026-02-03",
    readTime: "6 min read",
    category: "AI Services",
    gigPath: "/packages/ai-services/ai-voice-calling-agents",
    gigLabel: "AI Voice & Calling Agents",
    intro:
      "Missed calls are lost revenue, and both options solve that. But they fail in completely different ways, and knowing which failure you can live with matters more than the price comparison.",
    sections: [
      {
        heading: "Where AI voice agents win",
        paragraphs: [
          "They answer on the first ring, at 3am, on Eid, during your busiest lunch rush. They never get bored of the same five questions. They cost roughly the same whether you get 20 calls a month or 2,000, which makes them predictable to budget for.",
          "For appointment booking, opening-hours questions, order status and basic triage, a well-scripted agent handles the call as well as a junior operator and logs a clean transcript afterwards.",
        ],
      },
      {
        heading: "Where human call centers still win",
        paragraphs: [
          "Angry customers. Complicated complaints. Anything requiring judgement, negotiation or genuine empathy. High-value sales conversations where a person reading the room closes the deal.",
          "Anyone telling you AI handles all of this today is selling, not advising.",
        ],
      },
      {
        heading: "The realistic setup",
        paragraphs: [
          "Most small businesses we work with use both: the AI agent picks up everything, resolves the routine half, and transfers the rest to a human with context already gathered. Your team stops answering 'what time do you close?' and starts taking only the calls worth their time.",
        ],
        bullets: [
          "AI answers first, always",
          "Clear transfer rules to a human on request or on keyword",
          "Every call transcribed and summarised for follow-up",
          "Weekly review of transcripts to improve the script",
        ],
      },
      {
        heading: "Cost, roughly",
        paragraphs: [
          "A part-time receptionist or small outsourced team is an ongoing monthly salary cost. An AI voice agent is a one-off build plus per-minute usage. At low call volume, a human can be cheaper. Past a few hundred calls a month, the AI agent is usually the cheaper option and it never sleeps.",
        ],
      },
    ],
    closing:
      "If you're deciding between the two, start by pulling your last month of call logs and counting how many were routine. That number decides it.",
  },
  {
    slug: "best-web-development-company-pakistan-2026",
    title: "Best Web Development Company in Pakistan for 2026 | What to Look For",
    metaTitle: "Best Web Development Company in Pakistan 2026 | Checklist | OsvaraX",
    description:
      "How to evaluate a web development company in Pakistan in 2026: the questions to ask, the red flags, and what a fair price looks like.",
    date: "2026-03-11",
    readTime: "6 min read",
    category: "Programming & Tech",
    gigPath: "/packages/programming-tech/full-stack-web-development",
    gigLabel: "Full-Stack Web Development",
    intro:
      "We're a web development company in Pakistan, so take this for what it is, but the checklist below is the one we'd use if we were hiring someone else, and it will help you judge us as fairly as anyone.",
    sections: [
      {
        heading: "Ask to see live sites, not screenshots",
        paragraphs: [
          "Anyone can show a mockup. Ask for URLs of sites currently live, then run them through a page-speed test yourself. If the portfolio pieces load slowly, yours will too.",
        ],
      },
      {
        heading: "Ask what happens after launch",
        paragraphs: [
          "Who owns the code and the hosting account? Can you edit content without paying for every change? Is there a support window? A team that goes quiet after the final invoice is the most common complaint we hear from clients who come to us from elsewhere.",
        ],
      },
      {
        heading: "Ask about SEO before the build, not after",
        paragraphs: [
          "Metadata, heading structure, schema, sitemaps and load speed are cheap to get right during the build and expensive to retrofit. If SEO isn't mentioned in the proposal, it wasn't planned.",
        ],
        bullets: [
          "Unique title and description per page",
          "Structured data for your business type",
          "Sitemap and robots.txt",
          "Core Web Vitals in the green on mobile",
        ],
      },
      {
        heading: "What a fair 2026 price looks like",
        paragraphs: [
          "In Pakistan, a well-built five-page business site generally runs $250 to $600, a larger site with a blog and integrations $600 to $1,500, and custom web applications upward of $1,500 depending on features. Far below that range, something is being skipped. Far above, you're paying for an agency's overhead.",
        ],
      },
      {
        heading: "Red flags",
        paragraphs: ["Three that come up repeatedly:"],
        bullets: [
          "Guaranteed number-one Google rankings",
          "No written scope, timeline or revision count",
          "Refusal to give you admin access to your own hosting or domain",
        ],
      },
    ],
    closing: "Use this list on us too. We'd rather answer the hard questions before you pay anything.",
  },
  {
    slug: "how-to-automate-your-business-with-ai-2026",
    title: "How to Automate Your Business with AI in 2026: A Practical Starting Guide",
    metaTitle: "How to Automate Your Business with AI in 2026 | OsvaraX",
    description:
      "A practical, non-hype guide to automating business operations with AI in 2026, where to start, what to skip, and how to measure it.",
    date: "2026-04-08",
    readTime: "8 min read",
    category: "AI Services",
    gigPath: "/packages/ai-services/ai-automation-workflows",
    gigLabel: "AI Automation Workflows",
    intro:
      "Most automation projects fail because they start with the technology. The ones that work start with a boring list of things people on your team do every week that they hate doing.",
    sections: [
      {
        heading: "Step one: write down the repetitive work",
        paragraphs: [
          "For one week, have your team note every task they do more than twice that follows the same steps each time. Copying enquiries into a sheet. Sending the same follow-up email. Producing the Monday report. That list is your automation backlog, ranked by how often each item appears.",
        ],
      },
      {
        heading: "Step two: automate the boring middle, not the whole job",
        paragraphs: [
          "The highest-return automations are rarely glamorous. They move data between two tools, draft something a human approves, or notify the right person at the right moment. Trying to automate an entire role in one go is how projects stall.",
        ],
        bullets: [
          "Lead comes in → enriched, logged in CRM, team notified",
          "Call ends → transcript summarised and attached to the contact",
          "Invoice overdue → reminder drafted, one click to send",
          "Week ends → report assembled and emailed automatically",
        ],
      },
      {
        heading: "Step three: keep a human in the loop where it counts",
        paragraphs: [
          "Anything customer-facing, financial or legally sensitive should be drafted by AI and approved by a person, at least until you've watched it behave for a few weeks. Approval steps cost seconds and prevent the kind of mistake that erases the whole year's savings.",
        ],
      },
      {
        heading: "Step four: measure hours, not novelty",
        paragraphs: [
          "Before you build, estimate how many hours a week the task consumes. After you build, check it again. If an automation isn't saving measurable time or catching measurable revenue, switch it off, that discipline is what separates a useful automation stack from an expensive one.",
        ],
      },
      {
        heading: "What to skip in 2026",
        paragraphs: [
          "Skip automating processes that are broken to begin with, fix the process first. Skip tools that require replacing software your team already knows. And skip anything where the setup cost exceeds a year of the time it saves.",
        ],
      },
    ],
    closing:
      "Start with one workflow, prove the hours saved, then do the next one. That sequence works in every business we've automated.",
  },
  {
    slug: "shopify-vs-wordpress-vs-custom-web-app",
    title: "Shopify vs WordPress vs Custom Web App: Which Fits Your Business?",
    metaTitle: "Shopify vs WordPress vs Custom Web App (2026) | OsvaraX",
    description:
      "A practical comparison of Shopify, WordPress and custom web apps in 2026, cost, control, speed and when each one is the right call.",
    date: "2026-05-19",
    readTime: "7 min read",
    category: "Programming & Tech",
    gigPath: "/packages/programming-tech/ecommerce-store-development",
    gigLabel: "E-Commerce Store Development",
    intro:
      "Three platforms, three very different bills five years from now. The right answer depends far less on features than on who maintains the thing and how weird your business rules are.",
    sections: [
      {
        heading: "Choose Shopify when you sell products, simply",
        paragraphs: [
          "Shopify handles payments, tax, shipping and inventory out of the box, and it handles them across borders. If your catalogue fits standard products and variants, it is the cheapest route to a professional store and the cheapest to keep running.",
          "It gets expensive when you fight it, heavily custom checkout logic, unusual pricing rules, or app subscriptions stacking up month after month.",
        ],
      },
      {
        heading: "Choose WordPress when content is the point",
        paragraphs: [
          "For blogs, publications, service businesses and anything where your team publishes regularly, WordPress is still hard to beat. Editors know it, the SEO tooling is mature, and hosting is cheap.",
          "The risk is plugin sprawl. Every plugin is a speed cost and a security surface. A clean build with five plugins outperforms a bloated one with forty, every time.",
        ],
      },
      {
        heading: "Choose a custom web app when the business logic is the product",
        paragraphs: [
          "Quoting engines, booking systems with unusual rules, dashboards, client portals, marketplaces, when the thing customers value is the logic, a platform will fight you forever. Custom costs more upfront and less in workarounds.",
        ],
        bullets: [
          "Shopify: fastest to launch, lowest maintenance, least flexible",
          "WordPress: best for content, moderate maintenance, plugin risk",
          "Custom: highest upfront cost, total control, needs a maintainer",
        ],
      },
      {
        heading: "The five-year question",
        paragraphs: [
          "Add up licence fees, app subscriptions, hosting and the developer time each option needs over five years. That total usually makes the decision obvious, and it's rarely the option that looked cheapest in month one.",
        ],
      },
    ],
    closing:
      "We build on all three and have no reason to push you toward one, tell us the constraints and we'll tell you which we'd pick.",
  },
];

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, limit = 2) {
  const current = findPost(slug);
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current?.category ? -1 : 0) - (b.category === current?.category ? -1 : 0))
    .slice(0, limit);
}
