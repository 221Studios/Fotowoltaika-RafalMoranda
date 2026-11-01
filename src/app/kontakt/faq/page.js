import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ — Fotowoltaika i instalacje | ALFA Rafał Morańda",
  description:
    "Odpowiedzi na pytania o fotowoltaikę, montaż, serwis i instalacje ALFA Rafał Morańda.",
};

export default function FAQPage() {
  return (
    <>
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
