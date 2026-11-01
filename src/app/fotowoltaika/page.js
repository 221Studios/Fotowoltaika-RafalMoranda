import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import ResearchAreas from "@/components/ResearchAreas";
import ResearchOutcomes from "@/components/ResearchOutcomes";
import ProcessSteps from "@/components/ProcessSteps";
import PhotovoltaicsLocalService from "@/components/PhotovoltaicsLocalService";

export const metadata = {
  title: "Fotowoltaika w Kaliszu — montaż i serwis | ALFA Rafał Morańda",
  description:
    "Montaż fotowoltaiki w Kaliszu i powiecie kaliskim. Lokalne realizacje JaSolar, Huawei, LUNA i BAKS. Serwis gwarancyjny i pogwarancyjny ALFA Rafał Morańda.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Fotowoltaika"
        subtitle="dla domu i biznesu"
        description="Lokalne instalacje w Kaliszu i powiecie kaliskim: dobór, montaż, uruchomienie i serwis systemów JaSolar, Huawei oraz BAKS."
        icon="SunIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/research/banner.webp"
      />

      <PhotovoltaicsLocalService />

      <ResearchAreas />

      <ResearchOutcomes />

      <ProcessSteps />
    </>
  );
}
