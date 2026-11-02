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
      "Tak. Realizujemy instalacje w Kaliszu i regionie. Skontaktuj się z nami, aby potwierdzić możliwość dojazdu pod konkretny adres.",
  },
  {
    question: "Gdzie znajduje się firma ALFA?",
    answer:
      "Nasza siedziba znajduje się w Cekowie: Ceków Kolonia 6a, 62-834 Ceków.",
  },
  {
    question: "Jak umówić oględziny na terenie Kalisza?",
    answer:
      "Zadzwoń pod numer +48 600 306 425 lub napisz przez formularz kontaktowy. Ustalimy dogodny termin.",
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
  "Fotowoltaika w Kaliszu i okolicach — lokalna obsługa, dojazd i realizacje firmy ALFA Rafał Morańda z Cekowa.";

export const metadata = createPageMetadata({
  title: "Fotowoltaika w Kaliszu i okolicach",
  description: DESCRIPTION,
  path: "/kalisz/",
});

const SERVICE_SCHEMA = createServiceSchema({
  name: "Fotowoltaika w Kaliszu i okolicach",
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
            <h1>Fotowoltaika w Kaliszu i okolicach</h1>
          </Copy>
          <Copy animateOnScroll={false} delay={0.65}>
            <p className={styles.lead}>
              Szukasz wykonawcy blisko Kalisza? Firma ALFA z siedzibą w Cekowie
              obsługuje klientów z miasta i okolic. Sprawdź, jak skontaktować
              się z nami w sprawie lokalnej realizacji.
            </p>
          </Copy>
          <Copy animateOnScroll={false} delay={0.8}>
            <ul className={styles.benefits}>
              <li>Obsługa Kalisza i okolicznych miejscowości</li>
              <li>Siedziba firmy w Cekowie, w powiecie kaliskim</li>
              <li>Kontakt bezpośrednio z lokalną firmą ALFA</li>
            </ul>
          </Copy>
          <Copy animateOnScroll={false} delay={1}>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} href="/kontakt">
                Zapytaj o obsługę w Kaliszu
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
            <p className={`mono ${styles.sectionLabel}`}>Fotowoltaika dla regionu</p>
          </Copy>
          <div>
            <Copy>
              <h2>Firma z Cekowa obsługująca Kalisz i okolice</h2>
            </Copy>
            <Copy>
              <p>
                Nasze biuro i magazyn znajdują się w Cekowie, około 30 minut
                drogi od centrum Kalisza. Baza poza centrum ułatwia nam
                planowanie bezpośrednich dojazdów na montaże w Kaliszu, Nowych
                Skalmierzycach, Opatówku i pobliskich miejscowościach. Czas
                dojazdu zależy od trasy, ruchu i adresu inwestycji, dlatego
                termin potwierdzamy indywidualnie.
              </p>
            </Copy>
            <Link className={styles.textLink} href="/fotowoltaika">
              Poznaj ofertę fotowoltaiki <span aria-hidden="true">↗</span>
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
            <h2>Udokumentowane instalacje ALFA wykonane w Kaliszu</h2>
          </Copy>
          <p className={styles.projectsIntro}>
            Poniżej pokazujemy wszystkie realizacje oznaczone w archiwum firmy
            lokalizacją „Kalisz”. Karty prowadzą do galerii, parametrów
            opublikowanych dla danej instalacji i oryginalnego wpisu. Nie
            przypisujemy ich do konkretnych osiedli, bo archiwum ich nie podaje.
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
              <h2>Fotowoltaika w Kaliszu — pytania i odpowiedzi</h2>
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
            <h2>Porozmawiajmy o fotowoltaice dla Twojego domu lub firmy.</h2>
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
