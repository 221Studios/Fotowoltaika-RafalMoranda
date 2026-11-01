import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/fotowoltaika/" },
};

export default function LegacyResearchPage() {
  return <LegacyRouteRedirect href="/fotowoltaika/" label="Fotowoltaika" />;
}
