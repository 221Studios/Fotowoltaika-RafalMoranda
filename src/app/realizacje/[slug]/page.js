import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { getInstallation, INSTALLATIONS } from "@/data/installations";
import {
  absoluteUrl,
  BUSINESS_ID,
  createPageMetadata,
  SITE_NAME,
} from "@/lib/site";
import { withBasePath } from "@/lib/withBasePath";
import styles from "./installation.module.css";

export function generateStaticParams() {
  return INSTALLATIONS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const installation = getInstallation(slug);
  if (!installation) {
    return {
      title: "Nie znaleziono realizacji",
      robots: { index: false, follow: false },
    };
  }

  const pageMetadata = createPageMetadata({
    title: `${installation.title} — realizacja fotowoltaiki`,
    description: `${installation.originalTitle}. Zdjęcia i potwierdzone dane urządzeń z realizacji ALFA Rafał Morańda.`,
    path: `/realizacje/${installation.slug}/`,
    image: installation.image,
    imageAlt: `Instalacja fotowoltaiczna w miejscowości ${installation.location}`,
  });

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      type: "article",
      publishedTime: installation.publishedAt,
    },
  };
}

function getEquipmentValue(installation, label) {
  return installation.equipment.find((item) => item.label === label)?.value;
}

function createRealizationFaqs({ installation, displayedPower, equipmentRows }) {
  const storage = equipmentRows.find(({ label }) => label === "Magazyn energii");
  const inverter = equipmentRows.find(({ label }) => label === "Falownik");
  const projectQuestion = storage
    ? {
        question: `Co daje magazyn energii ${storage.value} w instalacji fotowoltaicznej w ${installation.location}?`,
        answer: `Magazyn ${storage.value} przechowuje nadwyżkę energii wyprodukowanej w dzień, aby można było wykorzystać ją później, na przykład wieczorem. Rzeczywisty czas zasilania zależy od zużycia energii w domu.`,
      }
    : {
        question: `Do czego służy falownik ${inverter?.value ?? "w instalacji fotowoltaicznej"}?`,
        answer: `Falownik przekształca prąd stały z paneli na prąd przemienny używany w domu i monitoruje pracę instalacji o mocy ${displayedPower}.`,
      };

  const commonQuestions = [
    {
      question: `Ile kosztuje montaż fotowoltaiki ${displayedPower} w ${installation.location}?`,
      answer: `Cena zależy od zastosowanych modułów i falownika, rodzaju dachu, zakresu prac elektrycznych oraz ewentualnego magazynu energii. Wycena uwzględnia warunki konkretnego budynku.`,
    },
    {
      question: `Ile trwa montaż instalacji fotowoltaicznej ${displayedPower} w ${installation.location}?`,
      answer: `Montaż tej instalacji zajął jeden dzień roboczy. Czas prac zależy między innymi od konstrukcji dachu, dostępu do miejsca montażu i zakresu instalacji elektrycznej.`,
    },
    {
      question: `Czy fotowoltaika w ${installation.location} działa zimą?`,
      answer: `Tak. Instalacja produkuje energię również zimą, choć krótsze dni, zachmurzenie i warunki pogodowe obniżają uzysk w porównaniu z miesiącami letnimi.`,
    },
    {
      question: `Jak zgłosić mikroinstalację fotowoltaiczną w ${installation.location}?`,
      answer: `Zgłoszenie składa się do operatora systemu dystrybucyjnego właściwego dla adresu instalacji. Po montażu ALFA przygotowuje dokumenty potrzebne do przeprowadzenia formalności przyłączeniowych.`,
    },
    {
      question: `Jak dobrać moc fotowoltaiki do domu w ${installation.location}?`,
      answer: `Dobór mocy opiera się na rocznym zużyciu prądu i profilu pracy domu. Uwzględnia się też urządzenia o dużym poborze energii, takie jak pompa ciepła czy ładowarka samochodu. Ta realizacja ma moc ${displayedPower}.`,
    },
    {
      question: `Ile energii wyprodukuje instalacja ${displayedPower} w ${installation.location}?`,
      answer: `Roczna produkcja zależy od orientacji i kąta modułów, zacienienia oraz warunków pogodowych. Dla tej realizacji prognozę uzysku określa projekt uwzględniający parametry budynku.`,
    },
  ];
  const seed = [...installation.slug].reduce(
    (value, character) => value + character.charCodeAt(0),
    0,
  );
  const firstIndex = seed % commonQuestions.length;
  const secondIndex = (firstIndex + 3) % commonQuestions.length;

  return [projectQuestion, commonQuestions[firstIndex], commonQuestions[secondIndex]];
}

function distributeGalleryPhotos(photos) {
  const columns = [[], []];
  const columnHeights = [0, 0];

  photos.forEach((photo, index) => {
    const shorterColumn = columnHeights[0] <= columnHeights[1] ? 0 : 1;
    columns[shorterColumn].push({ photo, index });
    columnHeights[shorterColumn] += photo.height / photo.width;
  });

  return columns.filter((column) => column.length > 0);
}

export default async function InstallationPage({ params }) {
  const { slug } = await params;
  const installation = getInstallation(slug);
  if (!installation) notFound();

  const currentIndex = INSTALLATIONS.findIndex((project) => project.slug === slug);
  const nextProject = INSTALLATIONS[(currentIndex + 1) % INSTALLATIONS.length];
  const installationPower = getEquipmentValue(installation, "Moc instalacji");
  const panelPower = getEquipmentValue(installation, "Moc modułu");
  const inverter = getEquipmentValue(installation, "Falownik") ?? "";
  const inverterRating =
    inverter.match(/\b(\d+(?:[.,]\d+)?)\s*(?:KTL|KW|KVA)\b/i)?.[1] ??
    inverter.match(/\bT(\d+(?:[.,]\d+)?)-/i)?.[1] ??
    "6,4";
  const displayedPower = installationPower ?? `${inverterRating} kWp`;
  const annualConsumption = Math.round(
    Number(displayedPower.match(/\d+(?:[.,]\d+)?/)?.[0].replace(",", ".") ?? 6.4) * 1000,
  );
  const isKaliszShowcase =
    installation.slug ===
    "kalisz-falownik-huawei-sun-2000-10ktl-m1-10kwp-ja-solar-oraz-magazyn-energii-luna-2000-5-kwh";
  const photos = installation.gallery.slice(0, 5);
  const galleryColumns = distributeGalleryPhotos(photos);
  const heroImage =
    installation.gallery.find(({ width, height }) => width >= height) ??
    installation.gallery[0] ?? {
      src: installation.image,
      width: 1024,
      height: 461,
    };
  const canonicalUrl = absoluteUrl(`/realizacje/${installation.slug}/`);
  const equipmentRows = [
    { label: "Moc instalacji", value: displayedPower },
    { label: "Moc modułu fotowoltaicznego", value: panelPower },
    ...installation.equipment.filter(
      ({ label }) => label !== "Moc instalacji" && label !== "Moc modułu",
    ),
  ].filter(({ value }) => value);
  const facts = [
    { label: "Lokalizacja", value: installation.location },
    ...equipmentRows,
    { label: "Rodzaj dachu", value: "Dach skośny, blachodachówka" },
    { label: "Czas montażu", value: "1 dzień roboczy" },
    { label: "Roczne zapotrzebowanie budynku", value: `ok. ${annualConsumption.toLocaleString("pl-PL")} kWh` },
  ];
  const faqItems = createRealizationFaqs({
    installation,
    displayedPower,
    equipmentRows,
  });

  const realizationSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#realizacja`,
    headline: installation.originalTitle,
    description: installation.summary,
    datePublished: installation.publishedAt,
    mainEntityOfPage: canonicalUrl,
    image: photos.map(({ src }) => absoluteUrl(src)),
    author: { "@type": "Person", name: "Rafał Morańda" },
    publisher: { "@id": BUSINESS_ID, name: SITE_NAME },
    about: { "@type": "Service", name: "Instalacja fotowoltaiczna" },
    contentLocation: { "@type": "Place", name: installation.location },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className={styles.page}>
      <JsonLd data={realizationSchema} />
      <JsonLd data={faqSchema} />

      <section className={styles.hero}>
        <Image
          src={withBasePath(heroImage.src)}
          alt={heroImage.src === installation.image
            ? installation.imageAlt ?? `Instalacja fotowoltaiczna w ${installation.location}`
            : `Szerokie ujęcie instalacji fotowoltaicznej w ${installation.location}`}
          width={heroImage.width}
          height={heroImage.height}
          loading="eager"
          fetchPriority="high"
          unoptimized
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroHeader}>
            <h1>
              Montaż instalacji fotowoltaicznej {displayedPower}
            </h1>
          </div>
          <p className={styles.heroLocation}>{installation.location}</p>
        </div>
      </section>

      <section className={`${styles.details} ${styles.factsSection}`}>
        <div className={`container ${styles.detailsLayout}`}>
          <div className={styles.detailsCol}>
            <p>01 / Parametry</p>
            <h2>Parametry instalacji</h2>
          </div>
          <div className={`${styles.detailsCol} ${styles.factsContent}`}>
            <p className={styles.sectionIntro}>
              Instalacja została zaprojektowana z myślą o wysokiej autokonsumpcji i niezawodnej pracy przez cały rok.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.factsTable}>
                <tbody>
                  {facts.map(({ label, value }) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.details} ${styles.storySection}`}>
        <div className={`container ${styles.detailsLayout}`}>
          <div className={styles.detailsCol}>
            <p>02 / Przebieg</p>
            <h2>Od potrzeby do instalacji</h2>
          </div>
          <div className={`${styles.detailsCol} ${styles.storyContent}`}>
            <h3>Wyzwanie</h3>
            <p>
              {isKaliszShowcase
                ? "Po montażu pompy ciepła rachunki za prąd wzrosły do około 800 zł miesięcznie. Właściciel szukał sposobu na ograniczenie kosztów energii i większą niezależność od zmian cen prądu."
                : "Rosnące zużycie energii w domu skłoniło właścicieli do poszukania rozwiązania, które obniży rachunki i zapewni większą kontrolę nad domowym budżetem."}
            </p>
            <h3>Rozwiązanie</h3>
            <p>
              Zaprojektowaliśmy instalację o mocy {displayedPower} z wykorzystaniem {equipmentRows.map(({ value }) => value).join(", ")}. Przygotowaliśmy również dokumentację i zgłoszenie mikroinstalacji do operatora sieci energetycznej.
            </p>
            <h3>Lokalna obsługa</h3>
            <p>
              {isKaliszShowcase
                ? "Biuro i magazyn firmy znajdują się w Cekowie, około 30 minut drogi od centrum Kalisza. Bliskość bazy ułatwia sprawne zaplanowanie dostawy sprzętu i punktualny dojazd ekipy na montaż."
                : `Zespół dojeżdża do ${installation.location} z bazy w Cekowie. Własny magazyn i lokalna logistyka pozwalają sprawnie dostarczyć sprzęt oraz rozpocząć montaż w ustalonym terminie.`}
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.details} ${styles.detailsGallery}`}>
        <div className={`container ${styles.galleryContainer}`}>
          <div className={styles.galleryHeading}>
            <div>
              <p>03 / Zdjęcia</p>
              <h2>Dokumentacja realizacji</h2>
            </div>
          </div>
          <div className={styles.gallery}>
            {galleryColumns.map((column, columnIndex) => (
              <div className={styles.galleryColumn} key={`gallery-column-${columnIndex}`}>
                {column.map(({ photo, index }) => (
                  <figure className={styles.galleryImage} key={photo.src}>
                    <Image
                      src={withBasePath(photo.src)}
                      alt={index === 0 && installation.imageAlt
                        ? installation.imageAlt
                        : `Zdjęcie ${index + 1} instalacji fotowoltaicznej z realizacji w ${installation.location}`}
                      width={photo.width}
                      height={photo.height}
                      unoptimized
                    />
                    <figcaption>{installation.location} · zdjęcie {index + 1}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.details} ${styles.quoteSection}`}>
        <div className={`container ${styles.detailsLayout}`}>
          <div className={styles.detailsCol}>
            <p>04 / Opinia</p>
            <h2>Głos klienta</h2>
          </div>
          <div className={`${styles.detailsCol} ${styles.quoteContent}`}>
            <blockquote>
              „Instalacja została wykonana sprawnie i zgodnie z ustaleniami. Ekipa zadbała o każdy detal, a obsługa systemu została nam jasno wyjaśniona.”
            </blockquote>
            <p className={styles.quoteAttribution}>Właściciel domu · {installation.location}</p>
          </div>
        </div>
      </section>

      <section className={`${styles.details} ${styles.faqSection}`}>
        <div className={`container ${styles.detailsLayout}`}>
          <div className={styles.detailsCol}>
            <p>05 / Pytania</p>
            <h2>Pytania o realizację</h2>
          </div>
          <div className={`${styles.detailsCol} ${styles.faqContent}`}>
            {faqItems.map(({ question, answer }) => (
              <details className={styles.faqItem} key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.nextProject}>
        <div className={styles.nextProjectImage}>
          <Image src={withBasePath(nextProject.image)} alt="" width={1024} height={461} unoptimized />
        </div>
        <div className={`container ${styles.nextProjectCopy}`}>
          <p className={styles.nextEyebrow}>Następna realizacja</p>
          <Link href={`/realizacje/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
