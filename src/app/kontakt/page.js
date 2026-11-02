import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";
import FAQ from "@/components/FAQ";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Kontakt i bezpłatna wycena",
  description:
    "Skontaktuj się z firmą ALFA Rafał Morańda. Fotowoltaika, instalacje elektryczne i monitoring w Kaliszu oraz okolicach. Telefon: +48 600 306 425.",
  path: "/kontakt/",
  image: "/images/contact/banner.webp",
  imageAlt: "Kontakt z firmą instalacyjną ALFA Rafał Morańda",
});

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
