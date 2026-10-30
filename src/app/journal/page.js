import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import JournalArticles from "@/components/JournalArticles";

export const metadata = {
  title: "Monitoring CCTV — Fotowoltaika Kalisz — Rafał Morańda",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        title="Monitoring"
        subtitle="CCTV"
        description="Projektujemy i montujemy systemy kamer dla domów oraz firm."
        icon="EyeIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/journal/banner.webp"
      />

      <JournalArticles />
    </>
  );
}
