import PageHeader from "@/components/PageHeader";
import JournalArticles from "@/components/JournalArticles";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, createServiceSchema } from "@/lib/site";
import CctvSeoContent from "./CctvSeoContent";
import { CCTV_FAQ_ITEMS } from "./cctvContent";

const DESCRIPTION =
  "Montaż kamer i monitoring CCTV w Kaliszu dla domu i firmy. Dobór kamer, podgląd w telefonie, zapis nagrań, konfiguracja i serwis. Bezpłatna wycena.";

export const metadata = createPageMetadata({
  title: "Montaż kamer CCTV Kalisz — monitoring domu i firmy",
  description: DESCRIPTION,
  path: "/cctv/",
  image: "/images/journal/banner.webp",
  imageAlt: "Kamera systemu monitoringu CCTV montowanego w Kaliszu",
});

const SERVICE_SCHEMA = {
  ...createServiceSchema({
    name: "Montaż kamer i serwis monitoringu CCTV w Kaliszu",
    description: DESCRIPTION,
    path: "/cctv/",
  }),
  serviceType: "Montaż, konfiguracja i serwis monitoringu CCTV",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi monitoringu CCTV",
    itemListElement: [
      "Projekt i montaż kamer CCTV",
      "Monitoring domu i posesji",
      "Monitoring firmy i obiektów",
      "Konfiguracja podglądu w telefonie",
      "Modernizacja i serwis monitoringu",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CCTV_FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function CctvPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <PageHeader
        title="Montaż kamer CCTV"
        subtitle="Kalisz · dom i firma"
        description="Projektujemy i montujemy monitoring domu, firmy i posesji. Konfigurujemy zapis nagrań, podgląd w telefonie oraz serwis systemu."
        icon="EyeIcon"
        theme="cctv"
        backgroundImage="/images/journal/banner.webp"
        backgroundAlt="Kamera systemu monitoringu CCTV"
      />

      <JournalArticles />

      <CctvSeoContent />
    </>
  );
}
