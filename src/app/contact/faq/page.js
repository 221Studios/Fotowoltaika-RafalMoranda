import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/kontakt/faq/");

export default function LegacyContactFaqPage() {
  return <LegacyRouteRedirect href="/kontakt/faq/" label="FAQ" />;
}
