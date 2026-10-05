export const site = {
  name: "OsvaraX",
  legalName: "OsvaraX",
  tagline: "AI & software company building websites, automations, and AI agents.",
  mission:
    "We build websites, automate business operations, and deploy AI chatbots and voice agents that work around the clock.",
  founded: "2024",
  city: "Lahore",
  country: "Pakistan",
  email: "info@osvarax.com",
  whatsapp: {
    pk: { label: "WhatsApp (Pakistan)", display: "+92 322 7580962", number: "923227580962" },
    au: { label: "WhatsApp (Australia)", display: "+61 404 599 598", number: "61404599598" },
  },
  countriesServed: ["Pakistan", "UAE", "UK", "USA", "Australia"],
  socials: [
    { name: "YouTube", url: "https://www.youtube.com/@OsvaraX" },
    { name: "Facebook", url: "https://www.facebook.com/osvarax" },
    { name: "Instagram", url: "https://www.instagram.com/osvarax" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/osvarax" },
    { name: "Pinterest", url: "https://www.pinterest.com/osvarax_" },
    { name: "TikTok", url: "https://www.tiktok.com/@osvara.x" },
    { name: "X", url: "https://x.com/OsvaraTech" },
  ],
} as const;

export function waLink(
  message = "Hi OsvaraX, I'd like to talk about a project.",
  number: string = site.whatsapp.pk.number,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const discoveryCallWa = waLink(
  "Hi OsvaraX, I'd like to book a free 15-minute discovery call.",
);
