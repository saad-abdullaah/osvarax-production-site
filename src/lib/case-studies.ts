export type Project = {
  slug: string;
  client: string;
  location: string;
  description: string;
  tags: string[];
  /** What we can state honestly today. */
  outcome: string;
  /** The metric we're waiting on the client to confirm before publishing it. */
  pendingMetric: string;
  /** Named placeholder slot for a real screenshot, to be supplied by the client */
  imageSlot: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bay-bakery",
    client: "Bay Bakery",
    location: "Lahore, Pakistan",
    description:
      "Three-branch bakery chain rated 4.4 to 4.5★ across 4,500+ Google reviews. Next.js and Tailwind website with WhatsApp ordering as the primary call to action.",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp ordering", "Local SEO"],
    outcome:
      "Menu and branch information now live on a fast, mobile-first site, with WhatsApp orders arriving directly from the menu page.",
    pendingMetric: "Monthly WhatsApp orders attributed to the site",
    imageSlot: "bay-bakery-website-screenshot",
    featured: true,
  },
  {
    slug: "karo-coffee-bar",
    client: "Karo Coffee Bar",
    location: "DHA Phase 1, Rawalpindi, Pakistan",
    description:
      "React, Vite and Tailwind marketing site with an interactive menu, matched to the cafe's in-store branding and set up for local search.",
    tags: ["React", "Vite", "Interactive menu", "Local SEO + schema"],
    outcome:
      "Brand-matched site shipped with a live, easily updated menu and LocalBusiness schema in place for local discovery.",
    pendingMetric: "Monthly site visits and local search impressions",
    imageSlot: "karo-coffee-bar-website-screenshot",
    featured: true,
  },
  {
    slug: "medcare",
    client: "Medcare",
    location: "United States",
    description:
      "US medical billing organisation. Bilingual English/Spanish AI voice IVR pilot handling inbound patient calls.",
    tags: ["AI voice agent", "Bilingual EN/ES", "Healthcare", "IVR"],
    outcome:
      "Pilot voice agent answering patient calls in English and Spanish, with call transcripts routed to the billing team.",
    pendingMetric: "Calls handled and containment rate across the pilot",
    imageSlot: "medcare-voice-agent-flow-screenshot",
    featured: true,
  },
  {
    slug: "ismail-jewelry",
    client: "Ismail Jewelry",
    location: "Lahore, Pakistan",
    description:
      "International Shopify store selling bridal and gold jewelry in USD to customers in the US, UK, Dubai and Australia.",
    tags: ["Shopify", "International selling", "USD checkout", "Product SEO"],
    outcome:
      "Store configured for USD pricing, product SEO and international shipping across four markets.",
    pendingMetric: "International orders since launch",
    imageSlot: "ismail-jewelry-shopify-screenshot",
  },
  {
    slug: "aims-beauty-salon",
    client: "AIMS Beauty Salon",
    location: "Lahore, Pakistan",
    description:
      "Salon website taken from cold outreach through to a delivered, live site with services, gallery and booking contact.",
    tags: ["Website build", "Local business", "Booking CTA"],
    outcome:
      "Full project delivered end to end, from the first cold outreach message to a live website with a booking enquiry flow.",
    pendingMetric: "Booking enquiries generated since launch",
    imageSlot: "aims-beauty-salon-website-screenshot",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
