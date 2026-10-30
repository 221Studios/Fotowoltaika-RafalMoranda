import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import PartnersSection from "@/components/PartnersSection";

export const metadata = {
  title: "Partnerships — Tessera Labs",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        title="Partnerships"
        subtitle="and pilots"
        description="We take on a small number of partners each year and go deep with them."
        icon="UserIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/partnerships/banner.jpg"
      />

      <PartnersSection />
    </>
  );
}
