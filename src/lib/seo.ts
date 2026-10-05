type MetaArgs = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Optional page-specific share image path (relative to the site root). */
  image?: string;
};

/** Default social share card. Relative so it resolves on any domain the site runs on. */
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "OsvaraX, AI and software company" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: path }];
}

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  path: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": post.path },
    author: { "@type": "Organization", name: "OsvaraX" },
    publisher: { "@type": "Organization", name: "OsvaraX" },
  };
}
