import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/realizacje/" },
};

export default function LegacyWorkPage() {
  return <LegacyRouteRedirect href="/realizacje/" label="Realizacje" />;
}
