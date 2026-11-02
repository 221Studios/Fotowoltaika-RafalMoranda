import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Kontakt z ALFA Rafał Morańda | Ceków i Kalisz",
  description:
    "Zadzwoń lub napisz do ALFA Rafał Morańda. Biuro i magazyn: Ceków Kolonia 6a, 62-834 Ceków. Obsługa Kalisza i okolic.",
  alternates: { canonical: "/kontakt/" },
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
