import PageHeader from "@/components/PageHeader";
import FirmIntro from "@/components/FirmIntro";
import StatementBanner from "@/components/StatementBanner";
import { BRAND_COLORS } from "@/lib/brandColors";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "O firmie — doświadczenie i uprawnienia",
  description:
    "Poznaj firmę ALFA Rafał Morańda z Cekowa. Doświadczenie instalacyjne od 1998 roku, działalność od 2005 roku, uprawnienia SEP i serwis.",
  path: "/o-nas/",
  image: "/images/firm/banner.webp",
  imageAlt: "Firma instalacyjna ALFA Rafał Morańda",
});

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
