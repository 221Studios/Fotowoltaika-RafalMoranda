import Image from "next/image";
import Link from "next/link";

import shared from "@/app/cctv/cctvSeo.module.css";
import styles from "./electricalSeo.module.css";

import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { withBasePath } from "@/lib/withBasePath";

import {
  ELECTRICAL_FAQ_ITEMS,
  ELECTRICAL_PRICES,
  ELECTRICAL_SCOPE_ITEMS,
  ELECTRICAL_TESTS,
  ELECTRICAL_UPDATED_AT,
  INDUCTION_WARRANTY,
  SERVICE_AREA,
} from "./electricalContent";

const UPDATED_LABEL = new Date(ELECTRICAL_UPDATED_AT).toLocaleDateString("pl-PL", {
  month: "long",
  year: "numeric",
});

const GALLERY = [
  {
    src: "/images/elektryka/rozdzielnica-montaz.webp",
    width: 630,
    height: 1400,
    alt: "Rozdzielnica z wyłącznikami różnicowoprądowymi podczas montażu przez ALFA",
  },
  {
    src: "/images/elektryka/rozdzielnica-okablowanie.webp",
    width: 630,
    height: 1400,
    alt: "Okablowanie i listwy zaciskowe w modernizowanej rozdzielnicy",
  },
  {
    src: "/images/elektryka/szafa-rack.webp",
    width: 1050,
    height: 1400,
    alt: "Szafa teletechniczna rack z okablowaniem strukturalnym wykonana przez ALFA",
  },
];

const index = (value) => String(value + 1).padStart(2, "0");

export default function ElectricalSeoContent() {
  return (
    <div className={shared.seoContent}>
      <section className={shared.scopeSection} aria-labelledby="elektryka-zakres">
        <SectionHeader bullet left="Zakres prac" right="Elektryk · Kalisz" />

        <div className={`container ${shared.sectionInner}`}>
          <div className={shared.introGrid}>
            <div>
              <p className={`mono ${shared.eyebrow}`}>Od przyłącza do gniazdka</p>
              <h2 id="elektryka-zakres">
                Instalacje elektryczne w domach, firmach i gospodarstwach
              </h2>
            </div>
            <div className={shared.introCopy}>
              <p>
                Wykonujemy nowe instalacje, wymieniamy stare i modernizujemy
                rozdzielnice w Kaliszu i gminach powiatu kaliskiego. Prace
                prowadzi nasza własna ekipa z Cekowa — bez podwykonawców.
              </p>
              <p>
                Alarmy, domofony i kontrolę dostępu opisujemy przy{" "}
                <Link href="/cctv" className={styles.inlineLink}>
                  monitoringu CCTV
                </Link>
                , a rozdzielnicę pod falownik i magazyn energii — przy{" "}
                <Link href="/fotowoltaika" className={styles.inlineLink}>
                  fotowoltaice
                </Link>
                .
              </p>
            </div>
          </div>

          <div className={shared.scopeGrid}>
            {ELECTRICAL_SCOPE_ITEMS.map(({ title, copy }, i) => (
              <article key={title} className={shared.scopeCard}>
                <p className={`mono ${shared.cardIndex}`}>{index(i)}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={shared.priceSection} aria-labelledby="elektryka-pomiary">
        <SectionHeader bullet left="Pomiary elektryczne" right="Protokół i podpis D" />

        <div className={`container ${shared.priceInner}`}>
          <div className={shared.priceLead}>
            <p className={`mono ${shared.eyebrow}`}>Art. 62 Prawa budowlanego</p>
            <h2 id="elektryka-pomiary">
              Pomiary elektryczne — kiedy są obowiązkowe?
            </h2>
            <p>
              Instalację elektryczną w budynku trzeba kontrolować co najmniej raz
              na 5 lat — także w domu jednorodzinnym. Pomiary odbiorcze
              wykonujemy też po nowej instalacji, wymianie rozdzielnicy i każdej
              większej przeróbce, zgodnie z normą PN-HD 60364-6.
            </p>
            <p>
              Protokół podpisuje osoba ze świadectwem dozoru (D) z zakresem
              kontrolno-pomiarowym. Zawiera wyniki każdej próby, użyty przyrząd i
              ocenę instalacji.
            </p>
          </div>

          <div>
            <p className={`mono ${styles.listLabel}`}>Co sprawdzamy</p>
            <ol className={shared.factorList}>
              {ELECTRICAL_TESTS.map((test, i) => (
                <li key={test}>
                  <span className="mono">{index(i)}</span>
                  <p>{test}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.tableSection} aria-labelledby="elektryka-plyta">
        <SectionHeader bullet left="Płyta indukcyjna" right="Gwarancja producenta" />

        <div className={`container ${styles.tableInner}`}>
          <div className={styles.tableLead}>
            <p className={`mono ${shared.eyebrow}`}>Stan warunków: {UPDATED_LABEL}</p>
            <h2 id="elektryka-plyta">Płyta indukcyjna a gwarancja — co wymaga producent?</h2>
            <p>
              Nie każdy producent wymaga pieczątki w karcie. Przed podłączeniem
              sprawdzamy warunki Twojej marki, a po podłączeniu wpisujemy je do
              karty albo wystawiamy poświadczenie z numerem świadectwa
              kwalifikacyjnego, datą i podpisem.
            </p>
          </div>

          <dl className={styles.dataTable}>
            {INDUCTION_WARRANTY.map(({ brand, requirement }) => (
              <div key={brand} className={styles.dataRow}>
                <dt>{brand}</dt>
                <dd>{requirement}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={shared.priceSection} aria-labelledby="elektryka-ceny">
        <SectionHeader bullet left="Ceny 2026" right="Widełki rynkowe" />

        <div className={`container ${shared.priceInner}`}>
          <div className={shared.priceLead}>
            <p className={`mono ${shared.eyebrow}`}>Aktualizacja: {UPDATED_LABEL}</p>
            <h2 id="elektryka-ceny">Ile kosztują prace elektryczne w 2026 r.?</h2>
            <p>
              To widełki z cenników firm w Polsce, a nie nasza oferta. Cenę
              ustalamy po oględzinach — zależy od liczby punktów i obwodów,
              rodzaju ścian, stanu rozdzielnicy i zakresu pomiarów.
            </p>
            <p className={styles.note}>
              VAT 8% obejmuje prace instalacyjne w domu do 300 m² i mieszkaniu do
              150 m². Stawka 23% dotyczy lokali użytkowych i firm oraz pomiarów
              okresowych zlecanych jako osobna usługa.
            </p>
            <Button href="/kontakt" className={shared.quoteButton}>
              Umów bezpłatne oględziny i wycenę
            </Button>
          </div>

          <dl className={styles.dataTable}>
            {ELECTRICAL_PRICES.map(({ service, price }) => (
              <div key={service} className={`${styles.dataRow} ${styles.priceRow}`}>
                <dt>{service}</dt>
                <dd>{price}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.trustSection} aria-labelledby="elektryka-kto">
        <SectionHeader bullet left="Kwalifikacje i dojazd" right="Ceków · Kalisz" />

        <div className={`container ${styles.trustInner}`}>
          <div className={styles.trustCopy}>
            <p className={`mono ${shared.eyebrow}`}>Kto wykonuje prace</p>
            <h2 id="elektryka-kto">Elektryk z uprawnieniami E i D, 30 minut od Kalisza</h2>

            <ul className={styles.credentials}>
              <li>
                <strong>Świadectwa kwalifikacyjne E i D, grupa 1</strong>
                <span>
                  Eksploatacja i dozór instalacji do 1 kV i powyżej 1 kV, z
                  zakresem prac kontrolno-pomiarowych.
                </span>
              </li>
              <li>
                <strong>Praktyka od 1998 roku</strong>
                <span>Firma ALFA Rafał Morańda działa od 2005 roku.</span>
              </li>
              <li>
                <strong>Własna ekipa</strong>
                <span>Montaż, pomiary i serwis bez podwykonawców.</span>
              </li>
              <li>
                <strong>Bezpłatny dojazd</strong>
                <span>
                  W Kaliszu i powiecie kaliskim — na oględziny, zlecenia i do
                  awarii.
                </span>
              </li>
            </ul>

            <p className={`mono ${styles.listLabel}`}>Gdzie dojeżdżamy</p>
            <ul className={styles.areaList} aria-label="Obszar działania">
              {SERVICE_AREA.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>

          <div className={styles.gallery}>
            {GALLERY.map(({ src, width, height, alt }) => (
              <figure key={src} className={styles.galleryItem}>
                <Image
                  src={withBasePath(src)}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 50vw, 20vw"
                  unoptimized
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq-elektryka"
        className={shared.faqSection}
        aria-labelledby="elektryka-faq"
      >
        <SectionHeader bullet left="Najczęstsze pytania" right="Elektryk Kalisz" />

        <div className={`container ${shared.faqInner}`}>
          <div className={shared.faqHeading}>
            <p className={`mono ${shared.eyebrow}`}>Przepisy i praktyka</p>
            <h2 id="elektryka-faq">O co pytają klienci przed pracami elektrycznymi?</h2>
          </div>

          <div className={shared.faqList}>
            {ELECTRICAL_FAQ_ITEMS.map(({ question, answer }, i) => (
              <details key={question} className={shared.faqItem}>
                <summary>
                  <span className={`mono ${shared.faqIndex}`}>{index(i)}</span>
                  <span className={shared.question}>{question}</span>
                  <span className={shared.plus} aria-hidden="true" />
                </summary>
                <p className={shared.answer}>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
