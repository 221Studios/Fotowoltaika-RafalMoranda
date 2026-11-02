import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/cctv/");

export default function LegacyJournalPage() {
  return <LegacyRouteRedirect href="/cctv/" label="CCTV" />;
}
