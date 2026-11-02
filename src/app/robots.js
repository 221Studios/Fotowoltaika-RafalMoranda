import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots() {
  const isPreview = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

  if (isPreview) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
