import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/o-nas/" },
};

export default function LegacyFirmPage() {
  return <LegacyRouteRedirect href="/o-nas/" label="O nas" />;
}
