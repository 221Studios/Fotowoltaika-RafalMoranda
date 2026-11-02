import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/o-nas/");

export default function LegacyFirmPage() {
  return <LegacyRouteRedirect href="/o-nas/" label="O nas" />;
}
