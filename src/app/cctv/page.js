import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import JournalArticles from "@/components/JournalArticles";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, createServiceSchema } from "@/lib/site";

const DESCRIPTION =
  "Monitoring CCTV dla domów i firm w Kaliszu i okolicach. Dobór kamer, montaż, konfiguracja zdalnego podglądu oraz serwis systemu.";

export const metadata = createPageMetadata({
  title: "Monitoring CCTV w Kaliszu — montaż kamer",
  description: DESCRIPTION,
  path: "/cctv/",
  image: "/images/journal/banner.webp",
  imageAlt: "System monitoringu CCTV dla domu lub firmy",
});

const SERVICE_SCHEMA = createServiceSchema({
  name: "Montaż i serwis monitoringu CCTV",
  description: DESCRIPTION,
  path: "/cctv/",
});

export default function JournalPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMA} />
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
