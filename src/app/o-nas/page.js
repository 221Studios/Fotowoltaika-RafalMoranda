import PageHeader from "@/components/PageHeader";
import FirmIntro from "@/components/FirmIntro";
import StatementBanner from "@/components/StatementBanner";
import { BRAND_COLORS } from "@/lib/brandColors";

export const metadata = {
  title: "O firmie — Fotowoltaika Kalisz — Rafał Morańda",
};

export default function FirmPage() {
  return (
    <>
      <PageHeader
        title="Poznaj nas"
        subtitle="ALFA Rafał Morańda"
        description="Doświadczenie w branży instalacyjnej zdobywamy od 1998 roku."
        icon="HomeIcon"
      />

      <FirmIntro />

      <StatementBanner
        src="/images/firm/banner.webp"
        lightColor={BRAND_COLORS.gray}
        copyTopLeft={`Rozwiązania dopasowane do Twoich potrzeb.`}
        copyBottomRight={`Od doradztwa i projektu po montaż oraz serwis.`}
      />
    </>
  );
}
