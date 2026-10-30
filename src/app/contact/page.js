import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Kontakt — Fotowoltaika Kalisz — Rafał Morańda",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Bezpłatna wycena"
        description="Zadzwoń lub napisz. Porozmawiamy o Twojej instalacji i przygotujemy wycenę."
        icon="SendIcon"
      />

      <ContactBanner />

      <FAQ />
    </>
  );
}
