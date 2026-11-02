import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/data/faq";
import { createPageMetadata } from "@/lib/site";

const DESCRIPTION =
  "Odpowiedzi na pytania o fotowoltaikę, montaż, magazyny energii, wycenę i serwis instalacji ALFA Rafał Morańda.";

export const metadata = createPageMetadata({
  title: "FAQ — fotowoltaika, montaż i serwis",
  description: DESCRIPTION,
  path: "/kontakt/faq/",
});

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
        description="Fotowoltaika, instalacje, gwarancja i serwis ALFA Rafał Morańda."
        icon="QuestionIcon"
      />
      <FAQ />
    </>
  );
}
