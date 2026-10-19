import type { MetadataRoute } from "next";

// Sample site for a fictional firm: block every crawler so it never shows
// up in search results (the root layout also sets `noindex, nofollow`).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
