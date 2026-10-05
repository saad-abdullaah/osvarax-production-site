import {
  BarChart3,
  Bot,
  Brush,
  Camera,
  Code2,
  Compass,
  CreditCard,
  Film,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MousePointerClick,
  PenTool,
  Search,
  Share2,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "Marketing" | "Web" | "Branding" | "AI & Content";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: LucideIcon;
  summary: string;
  points: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Marketing",
  "Web",
  "Branding",
  "AI & Content",
];

export const SERVICES: Service[] = [
  {
    slug: "lead-generation-marketing",
    title: "Lead Generation Marketing",
    category: "Marketing",
    icon: Target,
    summary:
      "Traffic alone doesn't pay salaries. We build conversion-led campaigns that generate qualified leads your sales team actually wants to call.",
    points: ["Offer and funnel design", "Landing pages built to convert", "Lead scoring and routing", "Cost-per-lead reporting"],
  },
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    category: "Marketing",
    icon: MousePointerClick,
    summary:
      "Put your business in front of people actively searching for what you sell, and stop paying for clicks that never convert.",
    points: ["Search, Shopping and Performance Max", "Keyword and negative sculpting", "Bid and budget management", "Conversion tracking you can trust"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    category: "Marketing",
    icon: Search,
    summary:
      "Technical foundations, content and authority that compound month over month into rankings you don't have to rent.",
    points: ["Technical audit and Core Web Vitals", "Keyword and SERP intent mapping", "On-page and schema markup", "Digital PR and link acquisition"],
  },
  {
    slug: "facebook-advertising",
    title: "Facebook Advertising",
    category: "Marketing",
    icon: Share2,
    summary:
      "Meta ads aren't about being seen, they're about being remembered and bought from. We turn attention into pipeline.",
    points: ["Creative testing frameworks", "Audience and retargeting stacks", "CAPI server-side tracking", "Weekly performance reviews"],
  },
  {
    slug: "instagram-advertising",
    title: "Instagram Advertising",
    category: "Marketing",
    icon: Instagram,
    summary:
      "More than a social platform, used properly, Instagram is a measurable revenue channel for product and service brands alike.",
    points: ["Reels and story-first creative", "Influencer and UGC campaigns", "Shopping and catalogue ads", "Full-funnel retargeting"],
  },
  {
    slug: "linkedin-advertising",
    title: "LinkedIn Advertising",
    category: "Marketing",
    icon: Linkedin,
    summary:
      "The most effective medium for B2B. We map campaign types to your sales cycle instead of blasting one lead-gen form at everyone.",
    points: ["ABM and firmographic targeting", "Thought-leadership ads", "Lead gen forms into your CRM", "Pipeline-based reporting"],
  },
  {
    slug: "email-marketing",
    title: "Email & WhatsApp Marketing",
    category: "Marketing",
    icon: Mail,
    summary:
      "The cheapest revenue you own. Campaigns and automated sequences that keep customers engaged and coming back.",
    points: ["Lifecycle and drip automation", "Abandoned cart and win-back flows", "Segmentation and list hygiene", "Deliverability setup (SPF/DKIM)"],
  },
  {
    slug: "conversion-rate-optimisation",
    title: "Conversion Rate Optimisation",
    category: "Marketing",
    icon: BarChart3,
    summary:
      "Driving traffic matters little if visitors don't act. We optimise every step of the journey to make existing spend go further.",
    points: ["Heatmaps and session review", "A/B and multivariate testing", "Checkout and form optimisation", "Analytics and attribution audit"],
  },
  {
    slug: "recruitment-marketing",
    title: "Recruitment Marketing",
    category: "Marketing",
    icon: Users,
    summary:
      "Stop burning budget on job ads that attract the wrong applicants. We put your vacancies in front of the right candidates.",
    points: ["Employer brand positioning", "Targeted candidate campaigns", "Careers pages that convert", "Applicant quality reporting"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web",
    icon: Code2,
    summary:
      "High-performance websites that reflect your brand and drive measurable results, custom designed and built in-house, never templated.",
    points: ["React, Next.js and TypeScript", "Custom design systems", "API and third-party integrations", "90+ Lighthouse performance target"],
  },
  {
    slug: "react-headless-development",
    title: "React & Headless Development",
    category: "Web",
    icon: Layers,
    summary:
      "Unlock flexibility and speed with a headless CMS and a React front end, scalable, lightning-fast digital experiences.",
    points: ["Headless CMS architecture", "Edge rendering and caching", "Composable integrations", "Content models your team can edit"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    category: "Web",
    icon: Globe,
    summary:
      "WordPress builds that don't just look stunning, they're fast, secure and structured so marketing can move without a developer.",
    points: ["Custom themes, no page-builder bloat", "Editor-friendly block library", "Security and update management", "Hosting and migration"],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    category: "Web",
    icon: ShoppingCart,
    summary:
      "We turn regular websites into commerce engines, custom stores built to convert browsers into buyers and scale with demand.",
    points: ["Custom carts and headless storefronts", "Product feed and merchandising", "Payments and shipping logic", "Subscription and retention flows"],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    category: "Web",
    icon: Store,
    summary:
      "Shopify stores built from strategy up. We map the shortest purchase path for your catalogue and design the store around it.",
    points: ["Custom Shopify 2.0 themes", "App and ERP integrations", "Checkout extensibility", "Speed and CWV tuning"],
  },
  {
    slug: "user-experience-design",
    title: "User Experience Design",
    category: "Web",
    icon: Compass,
    summary:
      "Great digital experiences don't happen by accident. We design interfaces that guide users toward the actions that matter.",
    points: ["Research and journey mapping", "Wireframes and prototypes", "Accessibility (WCAG) compliance", "Usability testing"],
  },
  {
    slug: "payments-automation",
    title: "Automation & Integrations",
    category: "Web",
    icon: CreditCard,
    summary:
      "We remove the manual copy-paste between your CRM, billing, support desk and spreadsheets so the team can do real work.",
    points: ["CRM and ERP integrations", "Invoice and document automation", "Internal dashboards", "Custom APIs and webhooks"],
  },
  {
    slug: "branding",
    title: "Branding",
    category: "Branding",
    icon: Sparkles,
    summary:
      "Branding is more than a logo, it's the identity that defines your business and the foundation for long-term recognition.",
    points: ["Logo and identity systems", "Colour and typography", "Brand guidelines", "Collateral and templates"],
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    category: "Branding",
    icon: Brush,
    summary:
      "One of the most critical factors for standing out. We determine what makes you different and how to convey it consistently.",
    points: ["Market and competitor analysis", "Positioning and messaging", "Tone of voice", "Naming and architecture"],
  },
  {
    slug: "copywriting",
    title: "Copywriting",
    category: "AI & Content",
    icon: PenTool,
    summary:
      "Great copy is the backbone of every successful campaign, written for humans first and search engines second.",
    points: ["Website and landing page copy", "SEO content programmes", "Ad and email copy", "Brand tone documentation"],
  },
  {
    slug: "photography",
    title: "Photography",
    category: "AI & Content",
    icon: Camera,
    summary:
      "Product, team and location photography that makes your brand look like the category leader across every channel.",
    points: ["Product and e-commerce shoots", "Team and workplace portraits", "Art direction", "Retouching and asset delivery"],
  },
  {
    slug: "video-production",
    title: "Video Production",
    category: "AI & Content",
    icon: Film,
    summary:
      "From concept to final cut, brand films, social cut-downs and ad creative produced to perform, not just to look nice.",
    points: ["Concept and scripting", "Filming and direction", "Editing and motion graphics", "Platform-native cut-downs"],
  },
  {
    slug: "chatbot-and-ai-agents",
    title: "AI Chatbots & Calling Agents",
    category: "AI & Content",
    icon: Bot,
    summary:
      "AI agents that answer, qualify and book, on your website, WhatsApp and phone line, 24 hours a day without a headcount.",
    points: ["Trained on your own content", "WhatsApp and web deployment", "Voice agents that call and book", "CRM handoff and transcripts"],
  },
];
