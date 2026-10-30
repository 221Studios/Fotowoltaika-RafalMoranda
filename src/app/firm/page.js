import PageHeader from "@/components/PageHeader";
import FirmIntro from "@/components/FirmIntro";
import Team from "@/components/Team";
import OpenPositions from "@/components/OpenPositions";
import StatementBanner from "@/components/StatementBanner";

export const metadata = {
  title: "Inside the Firm — Tessera Labs",
};

export default function FirmPage() {
  return (
    <>
      <PageHeader
        title="Inside"
        subtitle="the Firm"
        description="A look at how the lab thinks, works, and decides what matters."
        icon="OrbitIcon"
      />

      <FirmIntro />

      <Team />

      <OpenPositions />

      <StatementBanner
        src="/images/firm/banner.jpg"
        copyTopLeft={`The questions worth chasing rarely pay off fast.`}
        copyBottomRight={`So we protect the slow research that does not earn its keep yet.`}
      />
    </>
  );
}
