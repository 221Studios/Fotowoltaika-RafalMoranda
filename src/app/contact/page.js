import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { createLegacyMetadata } from "@/lib/site";

export const metadata = createLegacyMetadata("/kontakt/");

export default function LegacyContactPage() {
  return (
    <LegacyRouteRedirect
      href="/kontakt/"
      label="Kontakt"
      hashRedirects={{ faq: "/kontakt/faq/" }}
    />
  );
}
