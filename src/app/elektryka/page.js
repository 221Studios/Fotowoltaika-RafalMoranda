import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import PartnersSection from "@/components/PartnersSection";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, createServiceSchema } from "@/lib/site";

const DESCRIPTION =
  "Instalacje elektryczne i niskoprądowe dla domów oraz firm w Kaliszu i okolicach. Projektowanie, montaż, modernizacja i serwis firmy ALFA.";

export const metadata = createPageMetadata({
  title: "Instalacje elektryczne w Kaliszu",
  description: DESCRIPTION,
  path: "/elektryka/",
  image: "/images/partnerships/banner.webp",
  imageAlt: "Instalacje elektryczne wykonywane przez firmę ALFA",
});

const SERVICE_SCHEMA = createServiceSchema({
  name: "Instalacje elektryczne i niskoprądowe",
  description: DESCRIPTION,
  path: "/elektryka/",
});

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMA} />
      <PageHeader
        title="Instalacje"
        subtitle="elektryczne"
        description="Projektujemy, montujemy i modernizujemy instalacje elektryczne oraz niskoprądowe."
        icon="BoltIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/partnerships/banner.webp"
      />

      <PartnersSection />
    </>
  );
}
