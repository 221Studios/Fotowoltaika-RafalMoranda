import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import ResearchStatement from "@/components/ResearchStatement";
import ResearchAreas from "@/components/ResearchAreas";
import ResearchOutcomes from "@/components/ResearchOutcomes";

export const metadata = {
  title: "Research Areas — Tessera Labs",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        subtitle="Areas"
        description="Where the hard questions get taken apart and turned into something real."
        icon="TensorIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/research/banner.jpg"
      />

      <ResearchStatement />

      <ResearchAreas />

      <ResearchOutcomes />
    </>
  );
}
