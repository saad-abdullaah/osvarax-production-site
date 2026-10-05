export type ServiceDetail = {
  headline: string;
  intro: string[];
  benefits: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

const d = (
  headline: string,
  intro: string[],
  benefits: [string, string][],
  deliverables: string[],
  faqs: [string, string][],
): ServiceDetail => ({
  headline,
  intro,
  benefits: benefits.map(([title, body]) => ({ title, body })),
  deliverables,
  faqs: faqs.map(([q, a]) => ({ q, a })),
});

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "lead-generation-marketing": d(
    "Lead generation that fills the calendar, not the reporting deck",
    [
      "Most campaigns are measured on clicks. We measure them on the number of qualified conversations your sales team has this month. Every asset we build, the offer, the landing page, the follow-up sequence, exists to move a stranger one step closer to a booked call.",
      "We start by mapping who actually buys from you, what triggers the decision and where the current journey leaks. Then we rebuild the funnel around that reality and hold it to a cost-per-qualified-lead target you agree to up front.",
    ],
    [
      ["Qualified, not curious", "Lead scoring and qualifying questions filter out tyre-kickers before they reach your team."],
      ["Speed to lead", "Instant routing into your CRM, WhatsApp or phone system so leads are contacted in minutes, not days."],
      ["Honest economics", "We report cost per lead, cost per opportunity and closed revenue, not vanity impressions."],
    ],
    [
      "Offer positioning and funnel architecture",
      "Conversion-focused landing pages",
      "Multi-channel campaign setup (search, social, email)",
      "Lead scoring, routing and CRM integration",
      "Automated follow-up and nurture sequences",
      "Monthly pipeline and cost-per-lead reporting",
    ],
    [
      ["How quickly will we see leads?", "Paid channels usually produce first leads within the opening two weeks. Quality stabilises around week four once we have enough data to optimise targeting and messaging."],
      ["Do you guarantee a number of leads?", "We set a realistic target from your market data and budget, and report against it every month. Anyone guaranteeing exact volume before seeing your numbers is guessing."],
      ["Will this work for a niche B2B offer?", "Yes, narrow markets usually perform better because targeting is precise. We lean on LinkedIn, search intent and account-based lists rather than broad social reach."],
    ],
  ),
  "google-ads-management": d(
    "Google Ads managed for profit, not for spend",
    [
      "Google Ads is the fastest way to appear in front of people who are already searching for what you sell. It is also the fastest way to waste money if the account is left on autopilot with broad match and default settings.",
      "We rebuild accounts around tight intent themes, ruthless negative keyword lists and conversion tracking you can actually trust, so every dollar is traceable to a lead or a sale.",
    ],
    [
      ["Intent-first structure", "Campaigns organised by what the searcher wants, so ad copy and landing page match the query."],
      ["Waste elimination", "Weekly search term reviews and negative sculpting stop budget leaking into irrelevant clicks."],
      ["Tracking you can trust", "Server-side conversion tracking and offline conversion imports tie ad spend to real revenue."],
    ],
    [
      "Account audit and rebuild",
      "Search, Shopping, Performance Max and remarketing campaigns",
      "Keyword research and negative keyword sculpting",
      "Ad copy and asset testing programme",
      "Conversion tracking, GA4 and offline conversion imports",
      "Bid, budget and monthly performance management",
    ],
    [
      ["What budget do I need to start?", "Most accounts need at least the equivalent of 30 clicks a day to gather usable data. We will tell you honestly if your budget is too thin for the market before you commit."],
      ["Do you charge a percentage of ad spend?", "No. We charge a flat management fee, so our advice never depends on you spending more."],
      ["Can you fix an existing account?", "Yes. We audit first, keep what is converting, and rebuild only the parts dragging performance down."],
    ],
  ),
  seo: d(
    "SEO that compounds into rankings you don't have to rent",
    [
      "Paid traffic stops the moment you stop paying. Organic search keeps working, but only when technical foundations, content and authority are handled together instead of in isolation.",
      "We fix what is blocking crawlers, build content around real search intent, and earn links from places your customers actually read. Progress is reported in rankings, traffic and enquiries, not in a list of tasks completed.",
    ],
    [
      ["Technical foundations", "Core Web Vitals, indexation, structured data and site architecture handled before anything else."],
      ["Intent-mapped content", "Every page targets a specific query cluster and a specific stage of the buying journey."],
      ["Authority that lasts", "Digital PR and editorial links rather than directory spam that gets devalued next update."],
    ],
    [
      "Full technical and content audit",
      "Keyword research and SERP intent mapping",
      "On-page optimisation and schema markup",
      "Content programme and internal linking",
      "Digital PR and link acquisition",
      "Monthly ranking, traffic and conversion reporting",
    ],
    [
      ["How long until SEO works?", "Expect early technical and on-page gains inside 4 to 8 weeks, and meaningful ranking movement in competitive terms between months 3 and 6."],
      ["Do you write the content?", "Yes. Our copywriters produce it, briefed on your tone and reviewed by you before publishing."],
      ["Is SEO worth it if we already run ads?", "Usually yes, the two reinforce each other. Search data from ads shows exactly which organic terms are worth chasing."],
    ],
  ),
  "facebook-advertising": d(
    "Meta advertising built on creative that earns attention",
    [
      "On Facebook and Instagram nobody is searching for you. The creative has to stop the scroll, and the offer has to be worth the tap. Targeting is now the easy part, the creative is the campaign.",
      "We run structured creative testing so you always know which hook, format and angle is producing sales, and we back it with server-side tracking so iOS privacy changes do not blind the account.",
    ],
    [
      ["Creative as the lever", "A rolling test calendar of hooks, formats and angles instead of one boosted post."],
      ["Full-funnel stacks", "Cold prospecting, warm engagement and retargeting audiences working as one system."],
      ["Accurate attribution", "Conversions API and server-side events restore the signal Meta lost to privacy changes."],
    ],
    [
      "Meta Business Manager and pixel/CAPI setup",
      "Audience and retargeting architecture",
      "Creative testing framework and ad production",
      "Catalogue and dynamic product ads",
      "Budget scaling and bid strategy management",
      "Weekly performance reviews and reporting",
    ],
    [
      ["Do you produce the creative?", "Yes, static, motion and short-form video, produced in-house and cut for each placement."],
      ["How much should we spend?", "We usually recommend starting with a test budget for 3 to 4 weeks, then scaling only the angles that clear your target return."],
      ["Our last agency's ads stopped working. Why?", "Almost always creative fatigue. Frequency climbs, performance falls, and nothing new is queued. A test calendar prevents it."],
    ],
  ),
  "instagram-advertising": d(
    "Instagram as a measurable revenue channel",
    [
      "Instagram is a shopfront, a review site and a sales channel in one. Treated as a brand-awareness playground it burns budget; treated as a funnel with the right creative it produces trackable revenue.",
      "We build Reels-first creative, layer influencer and UGC proof, and connect it to shopping or lead flows so every impression has somewhere to go.",
    ],
    [
      ["Native creative", "Reels and stories made for the platform, not repurposed landscape ads."],
      ["Social proof at scale", "UGC and creator content that converts better than polished brand spots."],
      ["Shoppable journeys", "Catalogue, collection and lead ads that shorten the path to purchase."],
    ],
    [
      "Reels-first creative production",
      "Story, collection and catalogue ad builds",
      "Influencer and UGC campaign management",
      "Audience, lookalike and retargeting setup",
      "Shopping and product feed integration",
      "Performance reporting by creative and audience",
    ],
    [
      ["Do we need a big follower count?", "No. Paid distribution does not depend on followers, good creative and a clear offer matter far more."],
      ["Can you manage the organic account too?", "Yes, as an add-on. Organic and paid share the same content pipeline, which keeps costs down."],
      ["Does this work for services, not just products?", "Yes. Service brands use it for lead forms, booking flows and building trust before a sales call."],
    ],
  ),
  "linkedin-advertising": d(
    "LinkedIn campaigns mapped to a real B2B sales cycle",
    [
      "LinkedIn is the only channel where you can target by company, seniority and function with real accuracy. It is also expensive, which means blasting one lead-gen form at everyone is a fast way to lose money.",
      "We match campaign types to buying stages, thought leadership for awareness, case studies for consideration, direct offers for the shortlist, and report on pipeline, not form fills.",
    ],
    [
      ["Account-based precision", "Firmographic and job-title targeting, plus uploaded account lists from your CRM."],
      ["Stage-matched messaging", "Different creative for people who have never heard of you versus those already in a buying cycle."],
      ["Pipeline reporting", "Lead quality tracked through to opportunity and closed revenue in your CRM."],
    ],
    [
      "Campaign Manager setup and insight tag install",
      "ABM target list building",
      "Thought-leadership and document ad production",
      "Lead gen forms with CRM integration",
      "Retargeting and sequenced messaging",
      "Pipeline-level reporting",
    ],
    [
      ["Why is LinkedIn so expensive?", "You pay for precision. A higher cost per click is fine when deal values are large, we track cost per opportunity instead."],
      ["What is the minimum sensible budget?", "Enough to reach your target list several times over a quarter. We size it from your list, not from a fixed number."],
      ["Can you use our founders' profiles?", "Yes. Thought-leadership ads run from personal profiles and consistently outperform company-page ads."],
    ],
  ),
  "email-marketing": d(
    "Email and WhatsApp: the cheapest revenue you already own",
    [
      "Your list is the only audience no algorithm can take away. Most businesses email it occasionally and leave the automated flows, welcome, abandoned cart, win-back, switched off entirely.",
      "We build the lifecycle programme end to end: segmentation, automation, deliverability and campaign calendar, across email and WhatsApp where your customers actually reply.",
    ],
    [
      ["Automation that sells while you sleep", "Welcome, cart, browse-abandon and win-back flows running continuously."],
      ["Real segmentation", "Messaging based on behaviour and value, not one blast to everybody."],
      ["Inbox placement", "SPF, DKIM, DMARC and list hygiene so your campaigns land in the primary tab."],
    ],
    [
      "Platform setup and migration",
      "Lifecycle and drip automation builds",
      "Abandoned cart and win-back flows",
      "Segmentation and list hygiene",
      "Campaign calendar, copy and design",
      "Deliverability configuration (SPF/DKIM/DMARC)",
    ],
    [
      ["Which platform do you work with?", "Klaviyo, Mailchimp, HubSpot, Brevo and most WhatsApp Business API providers. We will recommend the cheapest one that does what you need."],
      ["How often should we email?", "Enough to stay familiar, not enough to get muted. For most brands that means weekly campaigns plus always-on automation."],
      ["Can you run WhatsApp broadcasts?", "Yes, through the official WhatsApp Business API with compliant opt-in and template management."],
    ],
  ),
  "conversion-rate-optimisation": d(
    "Make the traffic you already pay for go further",
    [
      "Doubling conversion rate is usually cheaper than doubling traffic. Yet most sites are never tested, they are redesigned on opinion and then left alone for three years.",
      "We watch how real users behave, form hypotheses about where they hesitate, and test changes properly so the wins are real and the losses are cheap.",
    ],
    [
      ["Evidence, not opinion", "Heatmaps, session recordings and funnel analytics decide what we test."],
      ["Statistically sound testing", "Tests run to significance so you are not making decisions on noise."],
      ["Compounding returns", "Every winning test permanently lifts the return on all your other marketing."],
    ],
    [
      "Analytics and tracking audit",
      "Heatmap and session recording setup",
      "Funnel and drop-off analysis",
      "A/B and multivariate test programme",
      "Checkout, form and page speed optimisation",
      "Monthly test results and roadmap",
    ],
    [
      ["How much traffic do we need to test?", "Roughly 1,000 conversions-relevant sessions a month per tested page. Below that we use qualitative research and best-practice fixes instead."],
      ["Will testing slow the site down?", "No. We use server-side or lightweight client-side testing and monitor Core Web Vitals throughout."],
      ["What lift should we expect?", "Programmes typically deliver a 15 to 40% cumulative lift over six months, but it depends heavily on your starting point."],
    ],
  ),
  "recruitment-marketing": d(
    "Hire better people by marketing the role properly",
    [
      "Job boards put your vacancy next to a hundred others and charge you for applicants who never read it. Recruitment marketing treats hiring like a campaign: an audience, an offer and a conversion path.",
      "We position your employer brand, target the specific people you want, and build careers pages that make good candidates apply instead of bouncing.",
    ],
    [
      ["Right candidates, fewer of them", "Precise targeting means less time screening irrelevant applications."],
      ["Employer brand that sells", "Culture, progression and pay framed the way strong candidates evaluate them."],
      ["Cost per hire visibility", "Reporting from impression through to applicant quality and offer acceptance."],
    ],
    [
      "Employer brand positioning and messaging",
      "Careers page design and build",
      "Targeted candidate campaigns on Meta and LinkedIn",
      "Application funnel and ATS integration",
      "Content and video for role storytelling",
      "Applicant quality and cost-per-hire reporting",
    ],
    [
      ["Is this cheaper than a recruiter?", "For volume or repeat roles, almost always. For a single rare executive hire a specialist recruiter may still be the better route."],
      ["Can you fill roles in multiple cities?", "Yes, campaigns are geo-segmented so each location gets its own budget and reporting."],
      ["Do you handle screening?", "We build the qualifying questions and routing; your team or ATS makes the final calls."],
    ],
  ),
  "web-development": d(
    "Custom websites engineered for speed, search and sales",
    [
      "Your website is the one asset you fully own. It should load in under two seconds, reflect your brand precisely and guide visitors toward one clear action, and it should never require a developer to change a headline.",
      "We design and build every site in-house on modern React foundations, with a component system your team can extend and content models your marketers can edit. No templates, no page-builder bloat.",
    ],
    [
      ["Performance as a feature", "We target 90+ Lighthouse scores because speed affects both rankings and revenue."],
      ["Built to be edited", "Content models and reusable blocks so marketing can ship pages without a ticket."],
      ["Search-ready from day one", "Semantic markup, schema, sitemaps and metadata handled during the build, not bolted on later."],
    ],
    [
      "Discovery, sitemap and wireframes",
      "Custom UI design and component system",
      "React / Next.js / TypeScript development",
      "CMS setup and content modelling",
      "Third-party and API integrations",
      "Launch, analytics setup and 30-day support",
    ],
    [
      ["How long does a website take?", "A focused marketing site ships in 3 to 5 weeks. Larger platforms with integrations run 8 to 14 weeks. You get a fixed timeline before we start."],
      ["Who owns the code?", "You do. The repository is created under your ownership and handed over in full at launch."],
      ["Can we edit it ourselves afterwards?", "Yes. Every build includes a CMS, an editor walkthrough and documentation for your team."],
    ],
  ),
  "react-headless-development": d(
    "Headless architecture for speed and flexibility",
    [
      "A headless setup separates your content from your front end. The result is a site that renders at the edge in milliseconds, and a content layer that can feed your website, app and in-store screens from one place.",
      "We design the content model first, then build a React front end that is fast by default and simple for your team to publish into.",
    ],
    [
      ["Edge-fast rendering", "Static and incremental rendering with CDN caching for near-instant page loads."],
      ["Composable stack", "Swap CMS, search, commerce or payments without rebuilding the front end."],
      ["Publish anywhere", "One content source powering web, app and third-party surfaces."],
    ],
    [
      "Content model and architecture design",
      "Headless CMS setup (Sanity, Contentful, Payload, Strapi)",
      "React / Next.js front-end build",
      "Edge rendering, caching and revalidation strategy",
      "API and third-party service integration",
      "Editor training and documentation",
    ],
    [
      ["Is headless overkill for a small site?", "Often, yes. We recommend it when you have high content volume, multiple channels or strict performance targets."],
      ["Can we migrate from WordPress?", "Yes. We migrate content and URLs with redirects in place so rankings are preserved."],
      ["Who hosts it?", "Usually Vercel, Netlify or Cloudflare, all under your own account."],
    ],
  ),
  "wordpress-development": d(
    "WordPress builds that are fast, secure and easy to run",
    [
      "WordPress gets a bad reputation because most sites are built from bloated themes and thirty plugins. Built properly, it is a fast, flexible CMS your marketing team can run without help.",
      "We build custom themes and a clean block library so editors get real control, and we handle security, updates and hosting so nothing breaks quietly.",
    ],
    [
      ["No page-builder bloat", "Custom theme code instead of heavy builders that slow every page load."],
      ["Editor-friendly blocks", "A curated block library that keeps every new page on brand."],
      ["Maintained properly", "Managed updates, backups, monitoring and hardening included."],
    ],
    [
      "Custom theme design and development",
      "Gutenberg block library",
      "WooCommerce setup where required",
      "Performance and Core Web Vitals tuning",
      "Security hardening and backups",
      "Hosting, migration and ongoing maintenance",
    ],
    [
      ["Can you rescue a slow existing site?", "Yes. We audit plugins, database, hosting and theme code, and usually cut load times substantially without a full rebuild."],
      ["Do you offer ongoing care plans?", "Yes, monthly updates, backups, uptime monitoring and a support allowance."],
      ["Elementor or custom?", "Custom, in almost every case. Builders cost you performance and flexibility over the life of the site."],
    ],
  ),
  "e-commerce": d(
    "Stores engineered to turn browsers into buyers",
    [
      "An online store is a conversion machine with a lot of moving parts: merchandising, search, checkout, payments, shipping logic and retention. Weakness in any one of them shows up directly in revenue.",
      "We build commerce experiences around the shortest path to purchase for your catalogue, then optimise the checkout, feeds and retention flows that follow.",
    ],
    [
      ["Shorter path to purchase", "Navigation, search and product pages designed around how people actually shop your range."],
      ["Checkout that converts", "Fewer steps, more payment options, and clear shipping and returns messaging."],
      ["Retention built in", "Post-purchase flows, subscriptions and loyalty so the second order costs you nothing."],
    ],
    [
      "Commerce strategy and catalogue structure",
      "Custom storefront or headless commerce build",
      "Payments, tax and shipping configuration",
      "Product feed and merchandising setup",
      "Subscription and retention flows",
      "Analytics, tracking and CRO programme",
    ],
    [
      ["Shopify or custom?", "Shopify for most catalogues; custom or headless when you have complex pricing, B2B rules or unusual fulfilment."],
      ["Can you migrate our existing store?", "Yes, products, customers, orders and URLs, with redirects mapped to protect search rankings."],
      ["Do you handle product photography?", "Yes, through our in-house photography service."],
    ],
  ),
  "shopify-development": d(
    "Shopify stores built from strategy up",
    [
      "Shopify is only as good as the store built on it. A theme installed straight from the marketplace will look like every competitor and convert like an afterthought.",
      "We design custom Shopify 2.0 themes around your catalogue and margins, integrate the systems your operations already run on, and tune the store for speed.",
    ],
    [
      ["Custom, not templated", "Shopify 2.0 sections built to your brand and merchandising logic."],
      ["Connected operations", "ERP, inventory, 3PL and CRM integrations so the store matches the warehouse."],
      ["Fast by design", "App auditing and theme optimisation to protect Core Web Vitals."],
    ],
    [
      "Custom Shopify 2.0 theme design and build",
      "Checkout extensibility and Shopify Plus features",
      "App, ERP and 3PL integrations",
      "Product feed and multi-channel selling setup",
      "Speed and Core Web Vitals tuning",
      "Launch support and staff training",
    ],
    [
      ["Do you work with Shopify Plus?", "Yes, including checkout extensions, scripts, B2B catalogues and multi-store setups."],
      ["Can you cut our app costs?", "Usually. We audit installed apps and replace the ones that duplicate work with lightweight theme code."],
      ["How long does a store build take?", "Typically 5 to 9 weeks depending on catalogue size and integrations."],
    ],
  ),
  "user-experience-design": d(
    "Interfaces that guide people to the action that matters",
    [
      "Good UX is invisible: people find what they need, understand what to do and never feel lost. Bad UX shows up as bounce rates, support tickets and abandoned carts.",
      "We research how your users actually behave, prototype the journey before anything is built, and test it with real people so the build starts from evidence.",
    ],
    [
      ["Research-led decisions", "Interviews, analytics and journey mapping instead of internal opinion."],
      ["Prototype before build", "Clickable prototypes catch problems while they are still cheap to fix."],
      ["Accessible by default", "WCAG 2.2 AA compliance built into components, not retrofitted."],
    ],
    [
      "User research and stakeholder interviews",
      "Journey mapping and information architecture",
      "Wireframes and interactive prototypes",
      "High-fidelity UI design and design system",
      "Accessibility (WCAG) review",
      "Usability testing and iteration",
    ],
    [
      ["Can you do UX without the build?", "Yes. We regularly hand off research, prototypes and design systems to in-house or third-party dev teams."],
      ["How many users do you test with?", "Five to eight per round uncovers the large majority of usability issues, more rounds beat more participants."],
      ["Do you redesign existing products?", "Yes, and we usually start with an audit so we can prioritise fixes by impact."],
    ],
  ),
  "payments-automation": d(
    "Automation that removes the copy-paste from your week",
    [
      "Every business runs on a few silent time sinks: re-typing orders into accounting, chasing approvals over email, updating three systems with the same customer detail.",
      "We map those workflows, connect the systems properly and build the internal tooling that makes the manual steps disappear, with audit trails so nothing goes missing.",
    ],
    [
      ["Hours back every week", "Repetitive admin handled by workflows instead of staff."],
      ["One source of truth", "Systems synced so CRM, billing and support always agree."],
      ["Visibility", "Dashboards and alerts that show the state of the business without a spreadsheet export."],
    ],
    [
      "Workflow discovery and process mapping",
      "CRM, ERP and finance system integrations",
      "Invoice and document automation",
      "Custom APIs and webhook pipelines",
      "Internal dashboards and admin tools",
      "Monitoring, logging and error alerting",
    ],
    [
      ["Which tools do you integrate?", "HubSpot, Salesforce, Pipedrive, Xero, QuickBooks, Stripe, Zapier, Make, Slack and most systems with an API."],
      ["What if a tool has no API?", "We look at exports, webhooks or a light middleware layer. If automation genuinely is not viable, we will say so."],
      ["Do you maintain it afterwards?", "Yes, through a support retainer with monitoring and alerting included."],
    ],
  ),
  branding: d(
    "Identity systems that make you recognisable",
    [
      "A brand is not a logo. It is the accumulated impression of every touchpoint, the site, the invoice, the ad, the way you answer the phone, and consistency is what makes it stick.",
      "We build complete identity systems: mark, palette, typography, imagery and the guidelines that keep it coherent as your team grows.",
    ],
    [
      ["Consistency at scale", "Guidelines and templates so every team member produces on-brand work."],
      ["Built for digital first", "Marks and type tested at favicon size and billboard size alike."],
      ["Fast to deploy", "Ready-made collateral so the new identity goes live everywhere at once."],
    ],
    [
      "Brand discovery workshop",
      "Logo and identity system design",
      "Colour, typography and imagery direction",
      "Brand guidelines document",
      "Stationery, deck and social templates",
      "Rollout support across digital and print",
    ],
    [
      ["How long does a rebrand take?", "Typically 4 to 8 weeks from discovery to final guidelines, depending on how many stakeholders review."],
      ["Do we get the source files?", "Yes. Full vector source files and fonts licences are handed over on completion."],
      ["Can you refresh rather than replace?", "Yes, an evolution keeps existing equity while fixing what no longer works."],
    ],
  ),
  "brand-strategy": d(
    "Positioning that makes the choice obvious",
    [
      "If a customer cannot articulate why you rather than the alternative, price becomes the only lever left. Strategy fixes that before design touches it.",
      "We analyse the market, find the position you can credibly own, and write the messaging framework every ad, page and pitch deck flows from.",
    ],
    [
      ["A defensible position", "Grounded in what you genuinely do better, not aspirational adjectives."],
      ["Messaging that scales", "A framework your sales team, marketers and agency all pull from."],
      ["Clarity for decisions", "A clear filter for what to build, say and ignore."],
    ],
    [
      "Market and competitor analysis",
      "Customer and stakeholder interviews",
      "Positioning and value proposition",
      "Messaging framework and tone of voice",
      "Naming and brand architecture",
      "Internal rollout and training",
    ],
    [
      ["Is strategy necessary if we just need a website?", "If your messaging is already clear, no. If every page draft starts an internal debate, strategy is the cheaper fix."],
      ["How involved does our team need to be?", "Two or three workshops plus interviews, roughly six to eight hours of leadership time."],
      ["What do we actually receive?", "A positioning and messaging document your whole team can write from, plus a presentation of the reasoning."],
    ],
  ),
  copywriting: d(
    "Copy written for humans first, search engines second",
    [
      "Most website copy describes the company. Good copy describes the reader's problem so precisely that they assume you can solve it.",
      "We write in your voice, structured for scanning, with the search terms your customers actually use woven in naturally rather than stuffed.",
    ],
    [
      ["Clarity over cleverness", "Plain language that makes the offer and next step obvious."],
      ["Search-aware", "Keyword research informs structure and headings without wrecking the read."],
      ["Consistent voice", "Documented tone so future content still sounds like you."],
    ],
    [
      "Messaging and tone-of-voice documentation",
      "Website and landing page copy",
      "SEO content programmes and article writing",
      "Ad, email and WhatsApp copy",
      "Case studies and sales collateral",
      "Editing and optimisation of existing copy",
    ],
    [
      ["Do you use AI to write?", "As a research and drafting aid only. Everything published is written and edited by a human who understands your business."],
      ["How many revisions are included?", "Two rounds per piece as standard, which is almost always enough once the brief is agreed."],
      ["Can you match our existing voice?", "Yes. We build a tone guide from your best existing material and write to it."],
    ],
  ),
  photography: d(
    "Photography that makes you look like the category leader",
    [
      "Stock imagery is instantly recognisable and quietly damaging, it tells visitors the business could be anyone. Real photography of your product, team and space does the opposite.",
      "We plan the shot list against where the images will be used, then deliver them cropped and optimised for web, social and print.",
    ],
    [
      ["Shot for the channel", "Every image planned for a specific page, ad format or post size."],
      ["Consistent art direction", "Lighting and styling that match your brand across every shoot."],
      ["Web-ready delivery", "Compressed, correctly sized and named assets, ready to upload."],
    ],
    [
      "Creative direction and shot list planning",
      "Product and e-commerce photography",
      "Team, headshot and workplace photography",
      "Location and site photography",
      "Retouching and colour grading",
      "Optimised multi-format asset delivery",
    ],
    [
      ["Where do shoots take place?", "On location at your premises or in studio, depending on the brief."],
      ["How many images do we get?", "Set per shoot in the brief, typically 20 to 60 finished images from a full day."],
      ["Do we own the usage rights?", "Yes, full commercial usage rights across all channels are included."],
    ],
  ),
  "video-production": d(
    "Video produced to perform, not just to look nice",
    [
      "A beautiful brand film that nobody watches past three seconds is an expensive screensaver. Video needs a hook, a point and a version cut for every placement it will run in.",
      "We handle concept, script, shoot and edit, then deliver platform-native cut-downs so one production feeds months of content.",
    ],
    [
      ["Hook-first editing", "The first three seconds engineered to stop the scroll."],
      ["One shoot, many assets", "Vertical, square and landscape cut-downs from the same production day."],
      ["Made to be measured", "Creative variants built for testing, so you learn what actually converts."],
    ],
    [
      "Concept development and scripting",
      "Storyboarding and production planning",
      "Filming, direction and lighting",
      "Editing, colour grading and sound",
      "Motion graphics and subtitles",
      "Platform-native cut-downs and delivery",
    ],
    [
      ["How long does production take?", "Usually 3 to 5 weeks from concept approval to final delivery for a standard brand or ad shoot."],
      ["Do you provide talent and voiceover?", "Yes, casting, voiceover and licensed music can all be arranged."],
      ["Can you work with footage we already have?", "Yes. Editing-only engagements are common and considerably cheaper."],
    ],
  ),
  "chatbot-and-ai-agents": d(
    "AI agents that answer, qualify and book around the clock",
    [
      "Most enquiries arrive outside office hours, and most of them are the same twenty questions. An AI agent trained on your own content handles them instantly, and escalates the ones that genuinely need a person.",
      "We deploy chat agents on your website and WhatsApp, and voice agents on your phone line, with full transcripts and clean handoff into your CRM.",
    ],
    [
      ["Always available", "Instant answers at 2am, on weekends and during your busiest hours."],
      ["Trained on your business", "Grounded in your documents and pricing, with guardrails against invented answers."],
      ["Qualified handoff", "Agents collect what your team needs, then push the lead straight into your CRM."],
    ],
    [
      "Knowledge base ingestion and training",
      "Website chat widget deployment",
      "WhatsApp Business API agent",
      "Outbound and inbound voice calling agents",
      "CRM, calendar and handoff integration",
      "Transcript review, tuning and monthly reporting",
    ],
    [
      ["Will it make things up?", "We ground answers in your own content and restrict scope, so unknown questions are escalated to a human rather than guessed."],
      ["Can it book appointments?", "Yes, it reads live calendar availability and confirms bookings with the customer."],
      ["How long does deployment take?", "A website or WhatsApp agent is typically live in 2 to 3 weeks. Voice agents take a little longer for call flow testing."],
    ],
  ),
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS[slug];
}
