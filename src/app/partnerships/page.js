import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import PartnersSection from "@/components/PartnersSection";

export const metadata = {
  title: "Instalacje elektryczne — Fotowoltaika Kalisz — Rafał Morańda",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        title="Instalacje"
        subtitle="elektryczne"
        description="Projektujemy, montujemy i modernizujemy instalacje elektryczne oraz niskoprądowe."
        icon="BoltIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/partnerships/banner.webp"
      />

      <PartnersSection />
    </>
  );
}
