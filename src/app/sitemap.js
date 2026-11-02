import { INSTALLATIONS } from "@/data/installations";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/fotowoltaika/",
  "/kalisz/",
  "/realizacje/",
  "/elektryka/",
  "/cctv/",
  "/o-nas/",
  "/kontakt/",
  "/kontakt/faq/",
];

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: absoluteUrl(path),
  }));

  const installationEntries = INSTALLATIONS.map((installation) => ({
    url: absoluteUrl(`/realizacje/${installation.slug}/`),
    lastModified: installation.publishedAt,
    images: installation.gallery.map(({ src }) => absoluteUrl(src)),
  }));

  return [...staticEntries, ...installationEntries];
}
