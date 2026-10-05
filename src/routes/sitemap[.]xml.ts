import { createFileRoute } from "@tanstack/react-router";
import { categories, trendingCategory } from "@/lib/packages";
import { SERVICES } from "@/lib/services";
import { posts } from "@/lib/blog";

type Entry = { path: string; priority: string; changefreq: string; lastmod?: string };

function buildEntries(): Entry[] {
  const entries: Entry[] = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "weekly" },
    { path: "/packages", priority: "0.9", changefreq: "weekly" },
    { path: "/ai-solutions", priority: "0.8", changefreq: "monthly" },
    { path: "/work", priority: "0.8", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/testimonials", priority: "0.5", changefreq: "monthly" },
    { path: "/blog", priority: "0.8", changefreq: "weekly" },
    { path: "/contact", priority: "0.9", changefreq: "monthly" },
  ];

  for (const service of SERVICES) {
    entries.push({ path: `/services/${service.slug}`, priority: "0.8", changefreq: "monthly" });
  }

  entries.push({
    path: `/packages/${trendingCategory.slug}`,
    priority: "0.8",
    changefreq: "weekly",
  });

  for (const category of categories) {
    entries.push({ path: `/packages/${category.slug}`, priority: "0.8", changefreq: "monthly" });
    for (const gig of category.gigs) {
      entries.push({
        path: `/packages/${category.slug}/${gig.slug}`,
        priority: "0.9",
        changefreq: "monthly",
      });
    }
  }

  for (const post of posts) {
    entries.push({
      path: `/blog/${post.slug}`,
      priority: "0.7",
      changefreq: "yearly",
      lastmod: post.date,
    });
  }

  return entries;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${buildEntries()
  .map(
    (e) =>
      `  <url>\n    <loc>${origin}${e.path}</loc>\n${
        e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : ""
      }    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
