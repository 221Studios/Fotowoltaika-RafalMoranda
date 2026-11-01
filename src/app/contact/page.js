import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/kontakt/" },
};

export default function LegacyContactPage() {
  return (
    <LegacyRouteRedirect
      href="/kontakt/"
      label="Kontakt"
      hashRedirects={{ faq: "/kontakt/faq/" }}
    />
  );
}
