import { INSTALLATIONS } from "@/data/installations";

const SITE_URL = "https://www.moranda.com.pl";

const PUBLIC_PAGES = [
  "/",
  "/kalisz/",
  "/fotowoltaika/",
  "/realizacje/",
  "/o-nas/",
  "/kontakt/",
  "/kontakt/faq/",
  "/elektryka/",
  "/cctv/",
];

export default function sitemap() {
  const pages = PUBLIC_PAGES.map((path) => ({ url: `${SITE_URL}${path}` }));
  const installations = INSTALLATIONS.map(({ slug }) => ({
    url: `${SITE_URL}/realizacje/${slug}/`,
  }));

  return [...pages, ...installations];
}
