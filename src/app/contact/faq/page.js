import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/kontakt/faq/" },
};

export default function LegacyContactFaqPage() {
  return <LegacyRouteRedirect href="/kontakt/faq/" label="FAQ" />;
}
