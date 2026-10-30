import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import JournalArticles from "@/components/JournalArticles";

export const metadata = {
  title: "Journal — Tessera Labs",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        title="Journal"
        subtitle="features"
        description="Articles and blogs where the lab, and the work, were written about."
        icon="BookIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/journal/banner.jpg"
      />

      <JournalArticles />
    </>
  );
}
