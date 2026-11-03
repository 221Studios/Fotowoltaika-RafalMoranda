import PageHeader from "@/components/PageHeader";
import FirmIntro from "@/components/FirmIntro";
import StatementBanner from "@/components/StatementBanner";
import { BRAND_COLORS } from "@/lib/brandColors";
import { createPageMetadata } from "@/lib/site";
import styles from "./about.module.css";

export const metadata = createPageMetadata({
  title: "O firmie | ALFA Rafał Morańda – Doświadczenie od 1998 roku",
  description:
    "Poznaj firmę ALFA Rafał Morańda z Cekowa. Doświadczenie od 1998 roku, własne ekipy, certyfikaty i uprawnienia SEP oraz odpowiedzialność od projektu po serwis.",
  path: "/o-nas/",
  image: "/images/firm/banner.webp",
  imageAlt: "Firma instalacyjna ALFA Rafał Morańda",
});

export default function FirmPage() {
  return (
    <>
      <PageHeader
        title="O firmie"
        subtitle="ALFA Rafał Morańda"
        descriptionClassName={styles.headerDescription}
        description={
          <>
            Własne kompetencje, sprawdzone standardy
            <br />i odpowiedzialność za wykonaną pracę.
          </>
        }
        icon="HomeIcon"
      />

      <FirmIntro />

      <StatementBanner
        src="/images/firm/banner.webp"
        lightColor={BRAND_COLORS.gray}
        copyColor={BRAND_COLORS.black}
        copyTopLeft={["Rozwiązania dopasowane", "do Twoich potrzeb."]}
        copyBottomRight={["Od doradztwa i projektu", "po montaż oraz serwis."]}
        singleLine
      />
    </>
  );
}
