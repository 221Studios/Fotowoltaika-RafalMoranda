import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";

export const metadata = {
  alternates: { canonical: "/cctv/" },
};

export default function LegacyJournalPage() {
  return <LegacyRouteRedirect href="/cctv/" label="CCTV" />;
}
