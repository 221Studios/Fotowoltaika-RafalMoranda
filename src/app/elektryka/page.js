import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, createServiceSchema } from "@/lib/site";
import ElectricalSeoContent from "./ElectricalSeoContent";
import {
  ELECTRICAL_FAQ_ITEMS,
  ELECTRICAL_SCOPE_ITEMS,
  ELECTRICAL_UPDATED_AT,
} from "./electricalContent";

const DESCRIPTION =
  "Elektryk Kalisz: instalacje w domach i firmach, wymiana rozdzielnic, pomiary z protokołem i podłączenie płyt indukcyjnych. Uprawnienia E i D, bezpłatny dojazd.";

const HERO_IMAGE = "/images/elektryka/rozdzielnica-budynek.webp";

export const metadata = createPageMetadata({
  title: "Elektryk Kalisz — instalacje, pomiary i rozdzielnice",
  description: DESCRIPTION,
  path: "/elektryka/",
  image: HERO_IMAGE,
  imageAlt: "Rozdzielnica elektryczna wykonana przez firmę ALFA",
});

const SERVICE_SCHEMA = {
  ...createServiceSchema({
    name: "Instalacje elektryczne, rozdzielnice i pomiary w Kaliszu",
    description: DESCRIPTION,
    path: "/elektryka/",
  }),
  serviceType: "Instalacje elektryczne i pomiary elektryczne",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi elektryczne",
    itemListElement: ELECTRICAL_SCOPE_ITEMS.map(({ title, copy }) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: title, description: copy },
    })),
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: ELECTRICAL_UPDATED_AT,
  mainEntity: ELECTRICAL_FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function ElectricalPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <PageHeader
        title="Elektryk Kalisz"
        subtitle="instalacje · pomiary · rozdzielnice"
        description="Nowe instalacje, wymiana rozdzielnic i pomiary z protokołem dla domów i firm. Własna ekipa z Cekowa, uprawnienia E i D."
        icon="BoltIcon"
        theme="cctv"
        backgroundImage={HERO_IMAGE}
        backgroundAlt="Rozdzielnica elektryczna w budynku wykonana przez ALFA"
      />

      <ElectricalSeoContent />
    </>
  );
}
