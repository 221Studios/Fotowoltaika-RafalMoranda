export const SITE_URL = "https://www.moranda.com.pl";
export const SITE_NAME = "ALFA Rafał Morańda";
export const SITE_SHORT_NAME = "ALFA";
export const SITE_DESCRIPTION =
  "Fotowoltaika w Kaliszu dla domu i firmy. Projekt, montaż i serwis instalacji PV, magazynów energii, instalacji elektrycznych i CCTV. Bezpłatna wycena.";
export const DEFAULT_OG_IMAGE = "/images/home/hero.webp";

export const BUSINESS_ID = `${SITE_URL}/#firma`;

export const OFFICE_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=ALFA%20Rafa%C5%82%20Mora%C5%84da&query_place_id=ChIJW7gAcBXfGkcRpLSZ251ae5E";

export const OPENING_HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "07:00",
  closes: "15:00",
  label: "Pon.–pt. 7:00–15:00",
  closedLabel: "Sob.–niedz. nieczynne",
};

export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  alternateName: "ALFA",
  description: SITE_DESCRIPTION,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  logo: `${SITE_URL}/images/moranda-logo.svg`,
  telephone: "+48 600 306 425",
  email: "rafal@moranda.com.pl",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ceków Kolonia 6a",
    addressLocality: "Ceków",
    postalCode: "62-834",
    addressRegion: "Wielkopolskie",
    addressCountry: "PL",
  },
  hasMap: OFFICE_DIRECTIONS_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: OPENING_HOURS.days,
      opens: OPENING_HOURS.opens,
      closes: OPENING_HOURS.closes,
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Kalisz",
      sameAs: "https://www.wikidata.org/entity/Q52842",
    },
    {
      "@type": "AdministrativeArea",
      name: "Powiat kaliski",
      sameAs: "https://www.wikidata.org/entity/Q133178",
    },
  ],
  knowsAbout: [
    "Instalacje fotowoltaiczne",
    "Magazyny energii",
    "Instalacje elektryczne",
    "Systemy alarmowe",
    "Monitoring CCTV",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi instalacyjne ALFA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Montaż i serwis instalacji fotowoltaicznych",
          url: `${SITE_URL}/fotowoltaika/`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalacje elektryczne",
          url: `${SITE_URL}/elektryka/`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monitoring CCTV",
          url: `${SITE_URL}/cctv/`,
        },
      },
    ],
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Instalacja fotowoltaiczna ALFA Rafał Morańda",
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url: path,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export function createServiceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#usluga`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Kalisz" },
      { "@type": "AdministrativeArea", name: "Powiat kaliski" },
    ],
  };
}

export function createLegacyMetadata(canonical) {
  return {
    alternates: { canonical },
    robots: { index: false, follow: true },
  };
}
