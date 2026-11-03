import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { FAQ_ITEMS, FAQ_UPDATED_AT } from "@/data/faq";
import { createPageMetadata } from "@/lib/site";

const DESCRIPTION =
  "Ceny fotowoltaiki w Kaliszu w 2026 r., zgłoszenie do Energa-Operator, dotacje na magazyny energii, VAT, gwarancje i serwis — odpowiedzi ALFA Rafał Morańda z Cekowa.";

const UPDATED_LABEL = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(`${FAQ_UPDATED_AT}T12:00:00`));

export const metadata = createPageMetadata({
  title: "FAQ — ceny fotowoltaiki, Energa, dotacje i serwis",
  description: DESCRIPTION,
  path: "/kontakt/faq/",
});

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: FAQ_UPDATED_AT,
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer.join(" "),
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <PageHeader
        title="Pytania"
        subtitle="i odpowiedzi"
        description={`Ceny, formalności, dotacje, gwarancja i serwis instalacji ALFA Rafał Morańda. Stan informacji: ${UPDATED_LABEL}.`}
        icon="QuestionIcon"
      />
      <FAQ />
    </>
  );
}
