import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/fotowoltaika/");

export default function LegacyResearchPage() {
  return <LegacyRouteRedirect href="/fotowoltaika/" label="Fotowoltaika" />;
}
