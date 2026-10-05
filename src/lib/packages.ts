export type Tier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  popular?: boolean;
};

export type Gig = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  startingPrice: string;
  launchPrice?: string;
  headline: string;
  valueProp: string;
  included: string[];
  audience: string[];
  tiers?: Tier[];
  faqs: { q: string; a: string }[];
  keywords: string;
  metaTitle: string;
  metaDescription: string;
  trending?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  gigs: Gig[];
};

const commonFaqTimeline = {
  q: "How long does a typical project take?",
  a: "Most projects in this service start within 2 to 3 working days of the discovery call and are delivered in 1 to 4 weeks depending on scope. We agree the timeline in writing before any work begins.",
};

const commonFaqPayment = {
  q: "How do payments work?",
  a: "We usually split payment 50% to start and 50% on delivery. International clients in the UAE, UK, USA and Australia can pay by bank transfer or card.",
};

export const categories: Category[] = [
  {
    slug: "ai-services",
    name: "AI Services",
    emoji: "🤖",
    description:
      "We build chatbots, voice agents and automations around the way your business actually answers, qualifies and follows up. Each system is grounded in your content, tested with real scenarios and designed to hand conversations to a person when needed.",
    metaTitle: "AI Services | Chatbots, Voice Agents & Automation | OsvaraX",
    metaDescription:
      "OsvaraX builds AI chatbots, AI voice and calling agents, and automation workflows for businesses in Pakistan, UAE, UK, USA and Australia.",
    gigs: [
      {
        slug: "ai-chatbot-development",
        name: "AI Chatbot Development",
        icon: "MessageSquare",
        summary: "Website and WhatsApp chatbots that answer questions and capture leads day and night.",
        startingPrice: "$150",
        trending: true,
        headline: "AI Chatbot Development for Websites, WhatsApp & Instagram",
        valueProp:
          "We build AI chatbots trained on your own content, services, pricing, policies and FAQs, so visitors get accurate answers instantly and your team only handles the conversations that matter.",
        included: [
          "Chatbot trained on your website content, documents and FAQs",
          "Custom conversation flows for enquiries, bookings and support",
          "Lead capture with name, contact and intent pushed to email or your CRM",
          "Website widget styled to your brand, plus optional WhatsApp or Instagram channel",
          "Handover to a human on WhatsApp when the bot can't help",
          "Testing, deployment and a walkthrough session with your team",
        ],
        audience: [
          "Service businesses fielding the same questions every day",
          "Clinics, salons and restaurants taking bookings through DMs",
          "E-commerce stores answering shipping, sizing and returns questions",
          "Agencies and SaaS teams that want leads qualified before a human replies",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$150",
            blurb: "A single-channel chatbot for a straightforward website.",
            features: [
              "Website chat widget",
              "Trained on up to 20 pages / FAQs",
              "Lead capture to email",
              "1 round of revisions",
            ],
          },
          {
            name: "Standard",
            price: "$350",
            popular: true,
            blurb: "Multi-flow chatbot with bookings and WhatsApp handover.",
            features: [
              "Everything in Basic",
              "Booking / enquiry flows",
              "WhatsApp human handover",
              "CRM or Google Sheets integration",
              "2 rounds of revisions",
            ],
          },
          {
            name: "Premium",
            price: "$700+",
            blurb: "Multi-channel assistant with deeper integrations.",
            features: [
              "Everything in Standard",
              "Website + WhatsApp + Instagram",
              "Custom API / database integration",
              "Analytics dashboard of conversations",
              "30 days of post-launch support",
            ],
          },
        ],
        faqs: [
          {
            q: "How much does an AI chatbot cost in 2026?",
            a: "Our chatbot builds start at $150 for a single-channel website bot and go to $700+ for multi-channel assistants with custom integrations. Running costs depend on message volume and the model used, we size that with you before we build.",
          },
          {
            q: "Will the chatbot make things up?",
            a: "We ground the bot in your own content and set strict fallbacks, so when it is unsure it says so and offers a WhatsApp handover to your team instead of guessing.",
          },
          commonFaqTimeline,
        ],
        keywords: "AI chatbot development Pakistan, WhatsApp chatbot, website chatbot",
        metaTitle: "AI Chatbot Development Pakistan & Worldwide | OsvaraX",
        metaDescription:
          "OsvaraX builds AI chatbots for websites, WhatsApp and Instagram, trained on your content, capturing leads 24/7. Packages from $150.",
      },
      {
        slug: "ai-voice-calling-agents",
        name: "AI Voice & Calling Agents",
        icon: "PhoneCall",
        summary: "Voice agents that answer, qualify and route phone calls in natural conversation.",
        startingPrice: "$300",
        trending: true,
        headline: "AI Voice & Calling Agents That Answer Every Call",
        valueProp:
          "We design and deploy AI voice agents that pick up inbound calls, answer common questions, qualify callers and book appointments, in English, Urdu or bilingual setups, so no enquiry rings out.",
        included: [
          "Voice agent scripting and conversation design for your business",
          "Telephony setup (Twilio or your existing number) and call routing",
          "Appointment booking, call qualification and message taking",
          "Warm transfer to a human when the caller asks for one",
          "Call transcripts and summaries delivered to email or your CRM",
          "Pilot period with tuning based on real call recordings",
        ],
        audience: [
          "Clinics and medical offices handling high inbound call volume",
          "Home services and trades missing calls while on site",
          "Restaurants and hospitality taking reservations by phone",
          "Sales teams that need callers qualified before a rep picks up",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$300",
            blurb: "One inbound agent with a focused script.",
            features: [
              "Single inbound voice agent",
              "FAQ answering + message taking",
              "One language",
              "Transcripts by email",
            ],
          },
          {
            name: "Standard",
            price: "$600",
            popular: true,
            blurb: "Booking-capable agent with transfers and CRM sync.",
            features: [
              "Everything in Basic",
              "Appointment booking into your calendar",
              "Warm transfer to your team",
              "CRM logging of every call",
              "Two tuning rounds after launch",
            ],
          },
          {
            name: "Premium",
            price: "$1,200+",
            blurb: "Bilingual, multi-flow agent with outbound calling.",
            features: [
              "Everything in Standard",
              "Bilingual (e.g. English + Spanish or Urdu)",
              "Outbound follow-up campaigns",
              "Custom API / EHR / database integration",
              "30 days of monitoring and tuning",
            ],
          },
        ],
        faqs: [
          {
            q: "Does the caller know they're talking to an AI?",
            a: "Yes. We disclose it in the opening line, it builds trust and it is the right thing to do in regulated sectors like healthcare.",
          },
          {
            q: "Can it hand over to a real person?",
            a: "Any time. The agent transfers to your team on request, on a keyword, or whenever it cannot resolve the call.",
          },
          commonFaqPayment,
        ],
        keywords: "AI voice agent for business, AI calling agent Pakistan",
        metaTitle: "AI Voice & Calling Agents for Business | OsvaraX",
        metaDescription:
          "OsvaraX builds AI voice agents that answer calls, qualify callers and book appointments 24/7. Bilingual options. Packages from $300.",
      },
      {
        slug: "ai-automation-workflows",
        name: "AI Automation Workflows",
        icon: "Workflow",
        summary: "Connect your tools and let AI handle the repetitive admin in between.",
        startingPrice: "$100",
        headline: "AI Automation Workflows for Everyday Business Admin",
        valueProp:
          "We map the manual steps your team repeats every week, copying leads, chasing replies, writing summaries, updating sheets, and replace them with automations that run themselves.",
        included: [
          "Workflow audit session to find the highest-value automations",
          "Automation build across your existing tools (Sheets, CRM, email, WhatsApp, Slack)",
          "AI steps for drafting, summarising, categorising and extracting data",
          "Error handling and notifications when something needs a human",
          "Documentation so your team can run it without us",
        ],
        audience: [
          "Small teams drowning in copy-paste between tools",
          "Sales teams manually following up on leads",
          "Operations teams producing the same reports weekly",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$100",
            blurb: "One automation, built and documented.",
            features: ["1 workflow", "Up to 3 connected tools", "Basic AI step", "Handover documentation"],
          },
          {
            name: "Standard",
            price: "$250",
            popular: true,
            blurb: "A small suite of connected automations.",
            features: [
              "Up to 3 workflows",
              "CRM / email / WhatsApp integrations",
              "AI drafting and summarising",
              "Error alerts",
            ],
          },
          {
            name: "Premium",
            price: "$500+",
            blurb: "Department-level automation with custom logic.",
            features: [
              "Unlimited scoped workflows",
              "Custom API integrations",
              "Reporting dashboard",
              "30 days of support and tuning",
            ],
          },
        ],
        faqs: [
          {
            q: "Do we need new software?",
            a: "Usually not. We automate on top of the tools you already pay for and only suggest something new when it genuinely saves money.",
          },
          {
            q: "What if an automation breaks?",
            a: "Every workflow ships with error handling and alerts, and we document each one so your team can pause or adjust it.",
          },
        ],
        keywords: "business automation services, AI workflow automation",
        metaTitle: "AI Automation Workflows for Business | OsvaraX",
        metaDescription:
          "OsvaraX automates repetitive business admin with AI workflows across your existing tools. Packages from $100.",
      },
    ],
  },
  {
    slug: "programming-tech",
    name: "Programming & Tech",
    emoji: "💻",
    description:
      "We build websites, web apps, SaaS products and online stores on modern, maintainable stacks. The scope starts with the business workflow, then covers responsive delivery, practical integrations and a clear handover.",
    metaTitle: "Web & Software Development Services | OsvaraX",
    metaDescription:
      "Full-stack web development, Python, SaaS, Shopify, WordPress and e-commerce builds by OsvaraX, Lahore-based, serving five countries.",
    gigs: [
      {
        slug: "full-stack-web-development",
        name: "Full-Stack Web Development",
        icon: "Code2",
        summary: "Fast, SEO-ready websites and web apps built with React, Next.js and Node.",
        startingPrice: "$250",
        trending: true,
        headline: "Full-Stack Web Development with React, Next.js & Node",
        valueProp:
          "From marketing sites to logged-in web apps, we build on a modern stack that loads fast, ranks well and stays cheap to maintain, no bloated page builders.",
        included: [
          "Design and build of every page, mobile-first",
          "React / Next.js front end with a Node or Python back end where needed",
          "Database, authentication and admin screens when the project calls for it",
          "Technical SEO: metadata, schema, sitemap, Core Web Vitals",
          "Analytics, contact forms and WhatsApp integration",
          "Deployment, handover and a training walkthrough",
        ],
        audience: [
          "Businesses replacing a slow or dated website",
          "Founders launching a first product site",
          "Teams that need a custom web app rather than a template",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$250",
            blurb: "A focused marketing site done properly.",
            features: ["Up to 5 pages", "Responsive build", "Contact + WhatsApp CTA", "On-page SEO setup"],
          },
          {
            name: "Standard",
            price: "$600",
            popular: true,
            blurb: "A larger site with CMS and integrations.",
            features: [
              "Up to 12 pages",
              "Blog / CMS",
              "Forms, analytics, schema markup",
              "Performance tuning",
              "2 revision rounds",
            ],
          },
          {
            name: "Premium",
            price: "$1,500+",
            blurb: "Custom web application work.",
            features: [
              "Custom app features and dashboards",
              "Authentication and database",
              "Third-party API integrations",
              "Staging environment",
              "30 days of post-launch support",
            ],
          },
        ],
        faqs: [
          {
            q: "Will I be able to edit the site myself?",
            a: "Yes, where you need to edit content we ship a CMS or admin screen and walk your team through it on handover.",
          },
          {
            q: "Do you redesign existing websites?",
            a: "Often. We audit what's there, keep the URLs and content that already rank, and rebuild the rest on a faster stack.",
          },
          commonFaqTimeline,
        ],
        keywords: "full-stack web development Pakistan, website development company Lahore",
        metaTitle: "Full-Stack Web Development Company in Lahore | OsvaraX",
        metaDescription:
          "OsvaraX builds fast, SEO-ready websites and web apps with React, Next.js and Node. Packages from $250.",
      },
      {
        slug: "python-development",
        name: "Python Development",
        icon: "Terminal",
        summary: "APIs, scripts, scrapers and data tooling built in Python.",
        startingPrice: "$200",
        headline: "Python Development for APIs, Automation & Data",
        valueProp:
          "We write clean, tested Python for the jobs that sit behind your product: APIs, data pipelines, scrapers, integrations and internal tools.",
        included: [
          "Scoped build with clear acceptance criteria",
          "FastAPI / Flask services or standalone scripts",
          "Data processing, scraping or integration work",
          "Tests and documentation",
          "Deployment support",
        ],
        audience: [
          "Teams with a manual data process to replace",
          "Products needing a back-end API",
          "Businesses integrating two systems that don't talk",
        ],
        faqs: [
          {
            q: "Can you work with our existing codebase?",
            a: "Yes. We start with a short review, agree what we're touching, and keep changes scoped and reviewable.",
          },
          commonFaqPayment,
        ],
        keywords: "Python development services, FastAPI development",
        metaTitle: "Python Development Services | OsvaraX",
        metaDescription:
          "OsvaraX builds Python APIs, automations, scrapers and data tooling. Scoped projects starting from $200.",
      },
      {
        slug: "saas-development",
        name: "SaaS Development",
        icon: "Layers",
        summary: "MVPs and subscription products with auth, billing and dashboards.",
        startingPrice: "$1,200",
        headline: "SaaS Development, From MVP to Paying Users",
        valueProp:
          "We build subscription products end to end: accounts, roles, billing, dashboards and the admin tooling you need to actually run the thing.",
        included: [
          "Product scoping and a build plan you can fund in stages",
          "Authentication, roles and permissions",
          "Subscription billing integration",
          "User dashboard and admin panel",
          "Deployment, monitoring and handover",
        ],
        audience: [
          "Founders validating a first SaaS idea",
          "Agencies productising a manual service",
          "Businesses replacing spreadsheets with a real product",
        ],
        faqs: [
          {
            q: "Can we start small?",
            a: "That's the recommended path, we ship a tight MVP first, put it in front of users, then build against what they actually ask for.",
          },
          commonFaqTimeline,
        ],
        keywords: "SaaS development company, MVP development",
        metaTitle: "SaaS & MVP Development Company | OsvaraX",
        metaDescription:
          "OsvaraX builds SaaS MVPs with authentication, billing, dashboards and admin tooling. Projects from $1,200.",
      },
      {
        slug: "shopify-development",
        name: "Shopify Development",
        icon: "ShoppingBag",
        summary: "Shopify stores built to sell internationally, with clean theme work.",
        startingPrice: "$300",
        headline: "Shopify Store Development & Theme Customisation",
        valueProp:
          "We set up and customise Shopify stores for brands selling locally and internationally, multi-currency, fast themes, and product pages built for conversion.",
        included: [
          "Store setup, theme selection and brand-matched customisation",
          "Product, collection and variant structure",
          "Multi-currency and international shipping configuration",
          "Payment gateway setup",
          "Basic product-page SEO and speed tuning",
        ],
        audience: [
          "Retailers going online for the first time",
          "Brands selling to the US, UK, Dubai or Australia",
          "Stores stuck on a slow or messy theme",
        ],
        faqs: [
          {
            q: "Can you sell in USD from Pakistan?",
            a: "Yes, we've configured international stores that price in USD and ship to the US, UK, Dubai and Australia. We'll walk you through the payment options available to your business.",
          },
          commonFaqPayment,
        ],
        keywords: "Shopify website development Dubai, Shopify store setup",
        metaTitle: "Shopify Store Development (UAE, UK, US) | OsvaraX",
        metaDescription:
          "OsvaraX builds and customises Shopify stores for international selling, multi-currency, fast themes. From $300.",
      },
      {
        slug: "wordpress-development",
        name: "WordPress Development",
        icon: "Globe",
        summary: "Business WordPress sites that are fast, secure and easy to edit.",
        startingPrice: "$200",
        headline: "WordPress Website Development & Maintenance",
        valueProp:
          "Clean WordPress builds without plugin bloat, fast hosting setup, sensible page structure and an editor your team can actually use.",
        included: [
          "Theme setup or custom build",
          "Page structure and content migration",
          "Speed, caching and security hardening",
          "SEO plugin configuration and sitemap",
          "Editor training on handover",
        ],
        audience: [
          "Businesses that want to edit content in-house",
          "Sites suffering from slow, plugin-heavy builds",
          "Blogs and content sites focused on SEO",
        ],
        faqs: [
          {
            q: "Do you fix existing WordPress sites?",
            a: "Yes, speed, security clean-ups and redesigns on top of existing content are common requests.",
          },
          commonFaqTimeline,
        ],
        keywords: "WordPress website development UK, WordPress developer Pakistan",
        metaTitle: "WordPress Website Development & Maintenance | OsvaraX",
        metaDescription:
          "OsvaraX builds fast, secure, easy-to-edit WordPress websites for businesses in Pakistan, UK, UAE and beyond. From $200.",
      },
      {
        slug: "ecommerce-store-development",
        name: "E-Commerce Store Development",
        icon: "ShoppingCart",
        summary: "Custom online stores with checkout, payments and inventory that fit your ops.",
        startingPrice: "$400",
        headline: "E-Commerce Website Development",
        valueProp:
          "When a template store isn't enough, we build the catalogue, checkout and back-office flows around how your business actually sells and ships.",
        included: [
          "Catalogue, variants and inventory structure",
          "Checkout and payment gateway integration",
          "Order management and notifications",
          "Shipping and tax configuration",
          "Product SEO and performance work",
        ],
        audience: [
          "Retailers with complex product or pricing rules",
          "Brands selling across several countries",
          "Businesses outgrowing a basic store builder",
        ],
        faqs: [
          {
            q: "Shopify or custom?",
            a: "We recommend Shopify when it fits, it's cheaper to run. We go custom when your catalogue, pricing or operations don't fit the platform.",
          },
          commonFaqPayment,
        ],
        keywords: "e-commerce website development UAE, online store development",
        metaTitle: "E-Commerce Website Development (UAE, UK, US) | OsvaraX",
        metaDescription:
          "OsvaraX builds custom e-commerce stores with checkout, payments, inventory and international shipping. From $400.",
      },
      {
        slug: "restaurant-cafe-website-development",
        name: "Restaurant & Cafe Website Development",
        icon: "UtensilsCrossed",
        summary: "Menu-first sites for restaurants and cafes, with WhatsApp ordering and local SEO.",
        startingPrice: "$250",
        headline: "Restaurant & Cafe Website Development",
        valueProp:
          "Hungry people decide fast. We build menu-first sites that load instantly on mobile, push orders to WhatsApp, and show up when someone searches your area.",
        included: [
          "Interactive, easy-to-update digital menu",
          "WhatsApp ordering and click-to-call CTAs",
          "Branch pages with maps, hours and directions",
          "Local SEO and LocalBusiness schema",
          "Gallery and reviews section",
        ],
        audience: [
          "Restaurants and cafes taking orders on WhatsApp",
          "Multi-branch chains needing per-location pages",
          "New openings that need to be findable on day one",
        ],
        faqs: [
          {
            q: "Can we update the menu ourselves?",
            a: "Yes, menus are built to be editable, and we show your team how on handover.",
          },
          {
            q: "Do you handle Google Maps listings?",
            a: "We set up the on-site local SEO and schema, and guide you through claiming and optimising your Google Business Profile.",
          },
        ],
        keywords: "restaurant website design Pakistan, cafe website development",
        metaTitle: "Restaurant & Cafe Website Design Pakistan | OsvaraX",
        metaDescription:
          "OsvaraX builds menu-first restaurant and cafe websites with WhatsApp ordering and local SEO. From $250.",
      },
    ],
  },
  {
    slug: "graphics-design",
    name: "Graphics & Design",
    emoji: "🎨",
    description: "Clean, on-brand design for social posts, print material and personal branding. We work from your existing visual identity or establish a focused direction before producing final, ready-to-use files.",
    metaTitle: "Graphics & Design Services | OsvaraX",
    metaDescription:
      "Social post, flyer, card and resume design by OsvaraX. Fast turnaround, launch pricing from $7.",
    gigs: [
      {
        slug: "post-flyer-card-design",
        name: "Post, Flyer & Card Design",
        icon: "Image",
        summary: "Social posts, flyers and business cards designed to match your brand.",
        startingPrice: "$10",
        launchPrice: "$7",
        headline: "Social Post, Flyer & Business Card Design",
        valueProp:
          "Single-piece design work with a quick turnaround, built to your brand colours and sized correctly for wherever it's going.",
        included: [
          "One design concept per piece",
          "Correct sizing for social, print or both",
          "Source-ready export files",
          "Two revision rounds",
        ],
        audience: [
          "Small businesses posting regularly on social",
          "Events and promotions needing a flyer fast",
          "New businesses setting up cards and basics",
        ],
        faqs: [
          {
            q: "What's the launch price?",
            a: "We're running an introductory rate of $7 per design (regular $10) while we grow this service.",
          },
          {
            q: "How fast is delivery?",
            a: "Most single designs are delivered within 24 to 48 hours of receiving your brief and assets.",
          },
        ],
        keywords: "social media post design, flyer design service",
        metaTitle: "Post, Flyer & Card Design | from $7 | OsvaraX",
        metaDescription:
          "On-brand social posts, flyers and business cards designed by OsvaraX. Launch price $7 (regular $10).",
      },
      {
        slug: "resume-cv-design",
        name: "Resume / CV Design",
        icon: "FileText",
        summary: "ATS-friendly, well-structured resumes that read clearly in 10 seconds.",
        startingPrice: "$15",
        launchPrice: "$12",
        headline: "Resume & CV Design That Passes the 10-Second Scan",
        valueProp:
          "A clean, ATS-friendly layout with your experience restructured so the important things are visible immediately.",
        included: [
          "Professional, ATS-safe layout",
          "Content restructuring and tightening",
          "Editable file plus print-ready PDF",
          "Two revision rounds",
        ],
        audience: [
          "Job seekers applying internationally",
          "Career changers repositioning their experience",
          "Graduates building a first professional CV",
        ],
        faqs: [
          {
            q: "Will it pass applicant tracking systems?",
            a: "We use clean, parse-friendly structures, no text trapped in images or complex columns that break ATS parsing.",
          },
          {
            q: "Do you write the content too?",
            a: "We restructure and tighten what you give us. Full ghostwriting from scratch is quoted separately.",
          },
        ],
        keywords: "resume design service, CV design",
        metaTitle: "Resume & CV Design | from $12 | OsvaraX",
        metaDescription:
          "ATS-friendly resume and CV design by OsvaraX. Launch price $12 (regular $15), delivered in editable and PDF formats.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    emoji: "📈",
    description: "Lead generation, SEO, social media and paid advertising managed as focused monthly work. We agree the channels, deliverables and reporting approach before launch so expectations stay clear.",
    metaTitle: "Digital Marketing Services | SEO, Leads, Ads | OsvaraX",
    metaDescription:
      "Lead generation, SEO, social media marketing and ads management by OsvaraX for businesses in Pakistan, UAE, UK, USA and Australia.",
    gigs: [
      {
        slug: "lead-generation",
        name: "Lead Generation",
        icon: "Target",
        summary: "Targeted outbound and inbound lead flow, tracked in one place.",
        startingPrice: "$150/mo",
        headline: "Lead Generation That Fills Your Pipeline",
        valueProp:
          "We build a targeted prospect list, run outreach that sounds human, and hand you qualified conversations, not a spreadsheet of cold names.",
        included: [
          "Ideal customer profile and targeting workshop",
          "Verified prospect list building",
          "Email and LinkedIn outreach sequences",
          "Reply handling and qualification",
          "Weekly reporting on sends, replies and booked calls",
        ],
        audience: [
          "B2B service businesses needing predictable enquiries",
          "Agencies and consultancies without a sales team",
          "Companies expanding into a new market",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$150/mo",
            blurb: "A single focused outreach channel.",
            features: ["1 channel", "Up to 300 prospects/mo", "Monthly reporting", "Lead inbox setup"],
          },
          {
            name: "Standard",
            price: "$350/mo",
            popular: true,
            blurb: "Multi-channel outreach with qualification.",
            features: [
              "2 channels (email + LinkedIn)",
              "Up to 900 prospects/mo",
              "Reply handling and qualification",
              "CRM pipeline setup",
              "Bi-weekly reporting",
            ],
          },
          {
            name: "Premium",
            price: "$700/mo",
            blurb: "Full pipeline programme with A/B testing.",
            features: [
              "Multi-channel + retargeting support",
              "Up to 2,000 prospects/mo",
              "Copy A/B testing",
              "Appointment setting",
              "Weekly reporting call",
            ],
          },
        ],
        faqs: [
          {
            q: "How many leads will we get?",
            a: "We don't promise a number before we've tested your market, anyone who does is guessing. We set a baseline in month one and optimise against real reply data.",
          },
          {
            q: "Is the outreach compliant?",
            a: "We follow opt-out requirements and regional rules for the markets you're targeting, and keep volumes at levels that protect your domain reputation.",
          },
        ],
        keywords: "lead generation agency Pakistan, B2B lead generation",
        metaTitle: "Lead Generation Services for B2B | OsvaraX",
        metaDescription:
          "OsvaraX runs targeted lead generation with outreach, qualification and reporting. Plans from $150/month.",
      },
      {
        slug: "seo",
        name: "SEO",
        icon: "Search",
        summary: "Technical fixes, content and local SEO that compound month over month.",
        startingPrice: "$200/mo",
        trending: true,
        headline: "SEO Services That Build Compounding Search Traffic",
        valueProp:
          "We fix what's technically holding the site back, target the searches your buyers actually type, and publish content that earns rankings over time.",
        included: [
          "Technical audit and fixes (speed, indexing, structure, schema)",
          "Keyword research mapped to real buying intent",
          "On-page optimisation of priority pages",
          "Local SEO and Google Business Profile guidance",
          "Content plan and publishing support",
          "Monthly reporting on rankings, traffic and conversions",
        ],
        audience: [
          "Businesses invisible for their own service + city searches",
          "Sites that were rebuilt and lost rankings",
          "Companies that want leads without paying per click",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$200/mo",
            blurb: "Foundations and local visibility.",
            features: ["Technical fixes", "Up to 10 keywords", "Local SEO setup", "Monthly report"],
          },
          {
            name: "Standard",
            price: "$450/mo",
            popular: true,
            blurb: "Ongoing content plus optimisation.",
            features: [
              "Everything in Basic",
              "Up to 30 keywords",
              "2 optimised articles/mo",
              "Internal linking programme",
              "Competitor tracking",
            ],
          },
          {
            name: "Premium",
            price: "$900/mo",
            blurb: "Aggressive growth across pages and content.",
            features: [
              "Everything in Standard",
              "Unlimited priority keywords",
              "4 articles/mo",
              "Digital PR / link outreach",
              "Monthly strategy call",
            ],
          },
        ],
        faqs: [
          {
            q: "How long until we see results?",
            a: "Technical and local fixes can move things within weeks. Competitive content rankings typically take 3 to 6 months of consistent work, we report progress monthly either way.",
          },
          {
            q: "Do you guarantee page one?",
            a: "No, and be wary of anyone who does. We commit to the work, the reporting and the leading indicators; Google decides the rest.",
          },
        ],
        keywords: "SEO services Pakistan, local SEO agency",
        metaTitle: "SEO Services Pakistan & International | OsvaraX",
        metaDescription:
          "Technical SEO, content and local SEO from OsvaraX, with transparent monthly reporting. Plans from $200/month.",
      },
      {
        slug: "social-media-marketing",
        name: "Social Media Marketing",
        icon: "Share2",
        summary: "Consistent, on-brand content and community management across platforms.",
        startingPrice: "$150/mo",
        headline: "Social Media Marketing & Content Management",
        valueProp:
          "A consistent posting rhythm, designed content, and someone actually replying to your DMs and comments, without you thinking about it daily.",
        included: [
          "Monthly content calendar and captions",
          "Designed posts, carousels and story assets",
          "Scheduling and publishing",
          "Comment and DM management",
          "Monthly performance report",
        ],
        audience: [
          "Local businesses whose customers discover them on Instagram",
          "Brands posting inconsistently or not at all",
          "Teams without an in-house content person",
        ],
        tiers: [
          {
            name: "Basic",
            price: "$150/mo",
            blurb: "Steady presence on one platform.",
            features: ["1 platform", "8 posts/mo", "Captions + hashtags", "Monthly report"],
          },
          {
            name: "Standard",
            price: "$350/mo",
            popular: true,
            blurb: "Two platforms with community management.",
            features: [
              "2 platforms",
              "16 posts + stories",
              "Reels/short-form assets",
              "DM and comment management",
              "Bi-weekly check-in",
            ],
          },
          {
            name: "Premium",
            price: "$700/mo",
            blurb: "Full content engine across channels.",
            features: [
              "3+ platforms",
              "24 posts + weekly reels",
              "Content shoot direction",
              "Influencer and collab outreach",
              "Weekly reporting",
            ],
          },
        ],
        faqs: [
          {
            q: "Who creates the photos and video?",
            a: "We design graphics and edit what you provide. For fresh footage we direct a simple shoot brief your team can film on a phone, or we quote production separately.",
          },
          {
            q: "Do you run ads too?",
            a: "Yes, paid promotion is handled under our Ads Management service and pairs well with organic content.",
          },
        ],
        keywords: "social media marketing agency Lahore, Instagram management",
        metaTitle: "Social Media Marketing Agency (Lahore) | OsvaraX",
        metaDescription:
          "OsvaraX manages content, posting and community for brands on Instagram, Facebook and more. Plans from $150/month.",
      },
      {
        slug: "ads-management",
        name: "Ads Management",
        icon: "Megaphone",
        summary: "Meta and Google campaigns built around cost per lead, not vanity metrics.",
        startingPrice: "$250/mo",
        headline: "Meta & Google Ads Management",
        valueProp:
          "Campaigns structured around one number: what a real enquiry costs you. We build, test and cut what doesn't pay.",
        included: [
          "Account and conversion tracking setup",
          "Campaign structure, audiences and creative direction",
          "Ongoing testing of creative and copy",
          "Budget pacing and bid management",
          "Monthly reporting on spend, leads and cost per lead",
        ],
        audience: [
          "Businesses that need enquiries this month, not next quarter",
          "Stores scaling product sales",
          "Teams currently boosting posts with no tracking",
        ],
        faqs: [
          {
            q: "Is ad spend included?",
            a: "No, the management fee is separate from what you pay the ad platforms. We'll recommend a starting budget based on your market.",
          },
          {
            q: "What's a realistic starting budget?",
            a: "It varies by country and industry. We size it in the discovery call using your target lead volume and typical cost per click in your market.",
          },
        ],
        keywords: "Meta ads management, Google Ads agency Pakistan",
        metaTitle: "Meta & Google Ads Management | OsvaraX",
        metaDescription:
          "OsvaraX builds and manages Meta and Google Ads campaigns focused on cost per lead. Management from $250/month.",
      },
    ],
  },
  {
    slug: "video-animation",
    name: "Video & Animation",
    emoji: "🎬",
    description: "Short-form and long-form editing shaped around the platform, audience and message. We turn supplied footage into polished reels, YouTube videos, ads and corporate edits with a clear review process.",
    metaTitle: "Video Editing & Animation Services | OsvaraX",
    metaDescription:
      "Reels, short-form and YouTube/corporate video editing by OsvaraX. Launch pricing from $19.",
    gigs: [
      {
        slug: "reels-short-form-video-editing",
        name: "Reels & Short-Form Video Editing",
        icon: "Clapperboard",
        summary: "Punchy vertical edits for Reels, TikTok and Shorts with captions and hooks.",
        startingPrice: "$25",
        launchPrice: "$19",
        headline: "Reels & Short-Form Video Editing",
        valueProp:
          "Fast, rhythmic vertical edits built around a strong first two seconds, captions, sound design and pacing that holds attention.",
        included: [
          "Edit of one vertical video up to 60 seconds",
          "Hook-first structure",
          "Auto-styled captions",
          "Music and sound effects",
          "Two revision rounds",
        ],
        audience: [
          "Brands posting Reels, TikToks or Shorts",
          "Coaches and creators building an audience",
          "Businesses repurposing longer footage",
        ],
        faqs: [
          {
            q: "What's the launch price?",
            a: "$19 per edit while we grow this service (regular $25).",
          },
          {
            q: "How do we send footage?",
            a: "Google Drive, WeTransfer or Dropbox, whatever you already use.",
          },
        ],
        keywords: "reels editing service, short-form video editing",
        metaTitle: "Reels & Short-Form Video Editing | from $19 | OsvaraX",
        metaDescription:
          "OsvaraX edits Reels, TikToks and Shorts with hooks, captions and sound design. Launch price $19 (regular $25).",
      },
      {
        slug: "video-editing",
        name: "Video Editing (YouTube, Ads & Corporate)",
        icon: "Film",
        summary: "Long-form YouTube, ad and corporate edits with clean pacing and graphics.",
        startingPrice: "$30",
        launchPrice: "$22",
        headline: "YouTube, Ad & Corporate Video Editing",
        valueProp:
          "Structured edits with tight pacing, colour and audio clean-up, lower-thirds and the graphics that make a video look professionally produced.",
        included: [
          "Edit of one horizontal video",
          "Colour and audio correction",
          "Lower-thirds, titles and simple motion graphics",
          "Music and sound design",
          "Two revision rounds",
        ],
        audience: [
          "YouTube channels publishing regularly",
          "Businesses producing ads or explainers",
          "Corporate teams with event or training footage",
        ],
        faqs: [
          {
            q: "What's the launch price?",
            a: "$22 per edit while we grow this service (regular $30). Longer or multi-cam projects are quoted individually.",
          },
          {
            q: "Do you write scripts?",
            a: "We can advise on structure, but full scriptwriting is quoted separately.",
          },
        ],
        keywords: "YouTube video editing service, corporate video editing",
        metaTitle: "YouTube, Ad & Corporate Video Editing | from $22 | OsvaraX",
        metaDescription:
          "Professional long-form video editing by OsvaraX with colour, audio and motion graphics. Launch price $22 (regular $30).",
      },
    ],
  },
  {
    slug: "consulting",
    name: "Consulting",
    emoji: "🧭",
    description: "Straight answers on what to build, what to automate and what to leave alone. Start with a no-pressure discovery call, or use a paid strategy session for a deeper technical and business plan.",
    metaTitle: "Business & Tech Consulting | OsvaraX",
    metaDescription:
      "Free 15-minute discovery calls and paid business & tech strategy consulting from OsvaraX.",
    gigs: [
      {
        slug: "free-discovery-call",
        name: "Free Discovery Call",
        icon: "PhoneCall",
        summary: "A 15-minute, no-pressure review of your situation and options.",
        startingPrice: "Free",
        headline: "Free 15-Minute Discovery Call",
        valueProp:
          "Tell us what you're trying to fix. We'll tell you what we'd do, roughly what it costs, and whether you even need us, in 15 minutes, with no pitch deck.",
        included: [
          "15 minutes with a founder, not a salesperson",
          "Review of your current site, tooling or process",
          "Honest recommendation on what to do first",
          "Ballpark budget and timeline",
          "No obligation and no follow-up spam",
        ],
        audience: [
          "Anyone unsure whether AI or automation fits their business",
          "Businesses comparing quotes",
          "Teams that want a second opinion before committing",
        ],
        faqs: [
          {
            q: "Is it really free?",
            a: "Yes. It's 15 minutes and there's no invoice attached to it.",
          },
          {
            q: "What should I prepare?",
            a: "Your website or tool links and one sentence on the problem. That's enough.",
          },
        ],
        keywords: "free discovery call, AI consultation",
        metaTitle: "Book a Free Discovery Call | OsvaraX",
        metaDescription:
          "Book a free, no-pressure 15-minute discovery call with OsvaraX to review your website, automation or AI project.",
      },
      {
        slug: "business-tech-strategy-consulting",
        name: "Business & Tech Strategy Consulting",
        icon: "Compass",
        summary: "Deeper sessions on stack choices, automation roadmaps and build-vs-buy.",
        startingPrice: "$120",
        headline: "Business & Tech Strategy Consulting",
        valueProp:
          "A working session and written recommendation covering what to build, what to buy, what to automate first, and what the realistic cost of each path is.",
        included: [
          "Pre-session review of your tools and processes",
          "60 to 90 minute working session",
          "Written recommendation with a prioritised roadmap",
          "Build-vs-buy analysis with cost ranges",
          "Follow-up Q&A by email",
        ],
        audience: [
          "Founders deciding on a tech direction",
          "Operations leads planning an automation roadmap",
          "Businesses about to spend on the wrong thing",
        ],
        faqs: [
          {
            q: "Can this credit toward a project?",
            a: "If you go ahead with a build within 30 days, we credit the consulting fee against the project.",
          },
          {
            q: "Do you recommend tools you don't sell?",
            a: "Regularly. Sometimes the right answer is an off-the-shelf tool and no development at all.",
          },
        ],
        keywords: "business technology consulting, automation strategy consulting",
        metaTitle: "Business & Tech Strategy Consulting | OsvaraX",
        metaDescription:
          "OsvaraX consulting sessions covering tech stack choices, automation roadmaps and build-vs-buy. From $120.",
      },
    ],
  },
];

export const trendingCategory = {
  slug: "trending",
  name: "Trending",
  emoji: "🔥",
  description: "A curated view of the services clients ask us about most often, drawn from AI, development and marketing. Each item links to its full service scope and current starting price.",
  metaTitle: "Trending Services | AI, Web & SEO | OsvaraX",
  metaDescription:
    "The OsvaraX services in highest demand right now: AI chatbot development, full-stack web development, AI voice agents and SEO.",
};

export const allGigs: { gig: Gig; category: Category }[] = categories.flatMap((category) =>
  category.gigs.map((gig) => ({ gig, category })),
);

export function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function findGig(categorySlug: string, gigSlug: string) {
  const category = findCategory(categorySlug);
  return category ? { category, gig: category.gigs.find((g) => g.slug === gigSlug) } : undefined;
}

export const trendingGigs = allGigs.filter((entry) => entry.gig.trending);

export function gigPath(categorySlug: string, gigSlug: string) {
  return `/packages/${categorySlug}/${gigSlug}`;
}
