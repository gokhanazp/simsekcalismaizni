import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { companyServices } from "@/lib/companyServices";
import { homeServices } from "@/lib/homeServices";
import { residenceServices } from "@/lib/residenceServices";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/calisma-izni", "/ikamet-izni", "/sirketler-icin", "/ev-hizmetleri", "/hizmetlerimiz",
    "/referanslarimiz", "/hakkimizda", "/sss", "/blog", "/bize-ulasin",
  ].map((path) => ({
    url: `${site.url}${path}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const companyRoutes = companyServices.map((s) => ({
    url: `${site.url}/sirketler-icin/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const residenceRoutes = residenceServices.map((s) => ({
    url: `${site.url}/ikamet-izni/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const homeRoutes = homeServices.map((s) => ({
    url: `${site.url}/ev-hizmetleri/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...companyRoutes, ...residenceRoutes, ...homeRoutes, ...blogRoutes];
}
