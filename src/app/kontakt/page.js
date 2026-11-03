import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";
import ContactChecklist from "@/components/ContactChecklist/ContactChecklist";
import RegionalServiceMap from "@/components/RegionalServiceMap/RegionalServiceMap";
import JsonLd from "@/components/JsonLd";
import {
  BUSINESS_ID,
  SITE_NAME,
  absoluteUrl,
  createPageMetadata,
} from "@/lib/site";
import styles from "./contact.module.css";

const TITLE = "Kontakt — elektryk i fotowoltaika Kalisz";
const DESCRIPTION =
  "Bezpłatna wycena fotowoltaiki i instalacji elektrycznych w Kaliszu i powiecie kaliskim. Dojazd z bazy w Cekowie. Pn–pt 7:00–15:00, tel. +48 600 306 425.";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/kontakt/",
  image: "/images/contact/banner.webp",
  imageAlt: "Kontakt z firmą instalacyjną ALFA Rafał Morańda",
});

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/kontakt/")}#strona`,
  url: absoluteUrl("/kontakt/"),
  name: `${TITLE} | ${SITE_NAME}`,
  description: DESCRIPTION,
  inLanguage: "pl-PL",
  about: { "@id": BUSINESS_ID },
  mainEntity: { "@id": BUSINESS_ID },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={CONTACT_PAGE_SCHEMA} />
      <PageHeader
        title="Kontakt"
        subtitle="Bezpłatna wycena"
        descriptionClassName={styles.headerDescription}
        description={
          <>
            Zadzwoń lub napisz.
            <br />
            Porozmawiamy o instalacji.
            <br />
            Przygotujemy wycenę.
          </>
        }
        icon="SendIcon"
      />

      <ContactBanner />

      <ContactChecklist />

      <RegionalServiceMap />
    </>
  );
}
