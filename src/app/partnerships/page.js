import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/elektryka/" },
};

export default function LegacyPartnershipsPage() {
  return <LegacyRouteRedirect href="/elektryka/" label="Elektryka" />;
}
