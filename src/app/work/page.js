import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/realizacje/");

export default function LegacyWorkPage() {
  return <LegacyRouteRedirect href="/realizacje/" label="Realizacje" />;
}
