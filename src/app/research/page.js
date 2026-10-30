import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import ResearchAreas from "@/components/ResearchAreas";
import ResearchOutcomes from "@/components/ResearchOutcomes";

export const metadata = {
  title: "Fotowoltaika — Kalisz — Rafał Morańda",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Fotowoltaika"
        subtitle="dla domu i biznesu"
        description="Projektujemy i montujemy instalacje dopasowane do zużycia energii oraz warunków na miejscu."
        icon="SunIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/research/banner.webp"
      />

      <ResearchAreas />

      <ResearchOutcomes />
    </>
  );
}
