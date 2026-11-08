import Image from "next/image";
import Link from "next/link";

import Copy from "@/components/Copy";
import JsonLd from "@/components/JsonLd";
import { INSTALLATIONS } from "@/data/installations";
import styles from "./kalisz.module.css";
import { withBasePath } from "@/lib/withBasePath";
import { createPageMetadata, createServiceSchema } from "@/lib/site";

const KALISZ_INSTALLATIONS = INSTALLATIONS.filter(
  ({ location }) => location === "Kalisz",
);

const FAQ = [
  {
    question: "Czy obsługujecie Kalisz i okoliczne miejscowości?",
    answer:
      "Tak. Obsługujemy Kalisz i okolice z bazy w Cekowie. W sprawie fotowoltaiki, instalacji elektrycznej lub monitoringu podaj miejscowość i planowany zakres prac. Termin dojazdu oraz możliwość realizacji pod konkretnym adresem ustalimy podczas kontaktu.",
  },
  {
    question: "Gdzie znajduje się firma ALFA?",
    answer:
      "Biuro i magazyn znajdują się pod adresem Ceków Kolonia 6a, 62-834 Ceków. Stąd dojeżdżamy do klientów w Kaliszu i okolicy. Aby zapytać o usługę, wystarczy telefon lub e-mail; przed przyjazdem do siedziby umów wizytę.",
  },
  {
    question: "Jak umówić oględziny na terenie Kalisza?",
    answer:
      "Zadzwoń pod +48 600 306 425 lub napisz na rafal@moranda.com.pl. Podaj miejscowość, rodzaj obiektu i usługę, której potrzebujesz. Na tej podstawie ustalimy kolejne kroki i termin ewentualnych oględzin. Nie musisz przyjeżdżać do Cekowa, aby rozpocząć rozmowę.",
  },
  {
    question: "Czy mogę zapytać o kilka instalacji w jednym budynku?",
    answer:
      "Tak. W jednym zapytaniu możesz opisać fotowoltaikę, prace elektryczne i monitoring. Warto zaznaczyć, co już istnieje, a co ma dopiero powstać. Ustalimy zakres poszczególnych prac oraz ich kolejność; sam wspólny kontakt nie oznacza jednego terminu wykonania wszystkich instalacji.",
  },
  {
    question: "Czy pokazujecie realizacje wykonane w samym Kaliszu?",
    answer:
      "Tak. Na tej stronie znajdziesz realizacje fotowoltaiczne opisane miejscowością Kalisz. Każda karta prowadzi do zdjęć i zestawienia urządzeń. W katalogu realizacji możesz obejrzeć także montaże z innych miejscowości regionu.",
  },
  {
    question: "Jakie informacje o lokalizacji ułatwią przygotowanie wizyty?",
    answer:
      "Na pierwszy kontakt wystarczy miejscowość i informacja, czy chodzi o dom, firmę czy inny obiekt. Przed oględzinami przydadzą się szczegóły dojazdu, dostęp do budynku i miejsca planowanych prac. Dokładny adres ustalamy bezpośrednio z Tobą; nie publikujemy go w opisie realizacji.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const DESCRIPTION =
  "ALFA obsługuje Kalisz i okolice z bazy w Cekowie. Fotowoltaika, elektryka i monitoring CCTV: lokalne realizacje, dojazd i kontakt w sprawie wyceny.";

export const metadata = createPageMetadata({
  title: "Kalisz i okolice — lokalna obsługa instalacji",
  description: DESCRIPTION,
  path: "/kalisz/",
});

const SERVICE_SCHEMA = createServiceSchema({
  name: "Usługi instalacyjne w Kaliszu i okolicach",
  description: DESCRIPTION,
  path: "/kalisz/",
});

export default function KaliszPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={SERVICE_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true">
          <Image
            src={withBasePath("/images/home/hero.webp")}
            alt=""
            width={2560}
            height={1067}
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
        </div>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <Copy variant="flicker" animateOnScroll={false} delay={0.2}>
            <p className={`mono ${styles.eyebrow}`}>ALFA Rafał Morańda · Kalisz</p>
          </Copy>
          <Copy animateOnScroll={false} delay={0.4}>
            <h1>Instalacje w Kaliszu i okolicach</h1>
          </Copy>
          <Copy animateOnScroll={false} delay={0.65}>
            <p className={styles.lead}>
              Planujesz fotowoltaikę, prace elektryczne albo monitoring?
              ALFA Rafał Morańda obsługuje domy i firmy w Kaliszu oraz
              pobliskich miejscowościach. Poznaj nasze realizacje z miasta
              i umów rozmowę o pracach w Twoim budynku.
            </p>
          </Copy>
          <Copy animateOnScroll={false} delay={0.8}>
            <ul className={styles.benefits}>
              <li>Fotowoltaika, instalacje elektryczne i monitoring CCTV</li>
              <li>Dojazd z biura i magazynu w Cekowie</li>
              <li>Rozmowa o zakresie prac i wycenie dla Twojej nieruchomości</li>
            </ul>
          </Copy>
          <Copy animateOnScroll={false} delay={1}>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} href="/kontakt">
                Umów rozmowę o instalacji
              </Link>
              <a className={styles.phoneAction} href="tel:+48600306425">
                Zadzwoń: +48 600 306 425
              </a>
            </div>
          </Copy>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <Copy variant="flicker">
            <p className={`mono ${styles.sectionLabel}`}>Lokalna obsługa</p>
          </Copy>
          <div>
            <Copy>
              <h2>Firma z Cekowa obsługująca Kalisz i okolice</h2>
            </Copy>
            <Copy>
              <p>
                Nasze biuro i magazyn znajdują się w Cekowie, około 30 minut
                drogi od centrum Kalisza. Stąd dojeżdżamy na oględziny,
                montaże i prace serwisowe. Obsługujemy Kalisz oraz region,
                m.in. okolice Opatówka i Nowych Skalmierzyc. Czas przejazdu
                zależy od trasy i ruchu; termin wizyty ustalamy dla konkretnego
                adresu i zakresu zlecenia.
              </p>
            </Copy>
            <Copy>
              <h3>Fotowoltaika i magazyny energii</h3>
              <p>
                Jeśli planujesz nową instalację lub rozbudowę istniejącej,
                przejdź do oferty PV. Znajdziesz tam informacje o doborze
                urządzeń, magazynach, etapach współpracy i przygotowaniu wyceny.
                Lokalne przykłady montażu zobaczysz poniżej.
              </p>
            </Copy>
            <Link className={styles.textLink} href="/fotowoltaika">
              Poznaj ofertę fotowoltaiki <span aria-hidden="true">↗</span>
            </Link>
            <Copy>
              <h3>Instalacje elektryczne</h3>
              <p>
                Przy budowie, remoncie lub zmianie wyposażenia budynku mogą
                być potrzebne nowe obwody, modernizacja rozdzielnicy albo
                pomiary. Opisz, jakie prace planujesz i na jakim etapie jest
                inwestycja. Szczegółowy zakres znajdziesz na stronie elektryki.
              </p>
            </Copy>
            <Link className={styles.textLink} href="/elektryka">
              Sprawdź usługi elektryczne <span aria-hidden="true">↗</span>
            </Link>
            <Copy>
              <h3>Monitoring domu, firmy i posesji</h3>
              <p>
                W sprawie kamer podaj, jaki obiekt i które miejsca chcesz
                obserwować: wejście, bramę, parking czy wnętrze budynku.
                Dobór systemu, zapis nagrań i podgląd w telefonie opisujemy
                na osobnej stronie monitoringu CCTV.
              </p>
            </Copy>
            <Link className={styles.textLink} href="/cctv">
              Poznaj ofertę monitoringu CCTV <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={`container ${styles.sectionContent}`}>
          <Copy variant="flicker">
            <p className={`mono ${styles.sectionLabel}`}>
              Realizacje z Kalisza
            </p>
          </Copy>
          <Copy>
            <h2>Zobacz nasze realizacje fotowoltaiki w Kaliszu</h2>
          </Copy>
          <p className={styles.projectsIntro}>
            Zobacz zdjęcia montaży i urządzenia wykorzystane w instalacjach
            na terenie Kalisza. Każda karta prowadzi do szczegółów realizacji.
            To przykłady różnych konfiguracji — rozwiązanie dla Twojego
            budynku dobieramy do jego warunków i potrzeb.
          </p>
          <div className={styles.projectGrid}>
            {KALISZ_INSTALLATIONS.map((installation) => {
              const installationPower = installation.equipment.find(
                ({ label }) => label === "Moc instalacji",
              )?.value;
              const equipment = installation.equipment
                .map(({ label, value }) => `${label}: ${value}`)
                .join(" · ");

              return (
                <Link
                  className={styles.project}
                  href={`/realizacje/${installation.slug}`}
                  key={installation.slug}
                >
                  <div className={styles.projectImage}>
                    <Image
                      src={withBasePath(installation.image)}
                      alt={installation.imageAlt}
                      width={installation.gallery[0]?.width ?? 1024}
                      height={installation.gallery[0]?.height ?? 461}
                      unoptimized
                    />
                  </div>
                  <h3>
                    {installationPower
                      ? `Fotowoltaika ${installationPower} — Kalisz`
                      : installation.originalTitle}
                  </h3>
                  <p>{equipment}</p>
                  <span className={styles.projectLink}>
                    Zobacz realizację <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <Copy variant="flicker">
              <p className={`mono ${styles.sectionLabel}`}>FAQ</p>
            </Copy>
            <Copy>
              <h2>Jak skorzystać z obsługi w Kaliszu?</h2>
            </Copy>
          </div>
          <div className={styles.questions}>
            {FAQ.map(({ question, answer }) => (
              <details key={question}>
                <Copy>
                  <summary>{question}</summary>
                </Copy>
                <Copy>
                  <p>{answer}</p>
                </Copy>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaContent}`}>
          <Copy variant="flicker">
            <p className={`mono ${styles.eyebrow}`}>Kalisz i okolice</p>
          </Copy>
          <Copy>
            <h2>Powiedz, jakie prace planujesz w Kaliszu lub okolicy.</h2>
          </Copy>
          <Copy>
            <p>
              Podaj miejscowość, rodzaj obiektu i usługę. Przy remoncie lub
              budowie wspomnij o etapie inwestycji, a przy rozbudowie — o
              istniejących urządzeniach. Ustalimy, jakie informacje i oględziny
              będą potrzebne do przygotowania oferty.
            </p>
          </Copy>
          <Copy>
            <Link className={styles.primaryAction} href="/kontakt">
              Umów bezpłatną wycenę
            </Link>
          </Copy>
        </div>
      </section>
    </main>
  );
}
