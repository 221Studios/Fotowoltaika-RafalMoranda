import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/elektryka/");

export default function LegacyPartnershipsPage() {
  return <LegacyRouteRedirect href="/elektryka/" label="Elektryka" />;
}
