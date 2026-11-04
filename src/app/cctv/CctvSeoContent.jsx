import styles from "./cctvSeo.module.css";

import Button from "@/components/Button";
import Copy from "@/components/Copy";
import PartnerList from "@/components/PartnerList";
import SectionHeader from "@/components/SectionHeader";
import CctvScopeList from "./CctvScopeList";

import {
  CCTV_FAQ_ITEMS,
  CCTV_PRICE_FACTORS,
} from "./cctvContent";

const PRICE_FACTOR_CELLS = CCTV_PRICE_FACTORS.map((factor, index) => (
  <p key={factor} className={styles.factorCopy}>
    <span className={`mono ${styles.factorIndex}`}>
      {String(index + 1).padStart(2, "0")}
    </span>
    <span>{factor}</span>
  </p>
));

const PRICE_FACTOR_ROWS = [
  [0, 2],
  [2, 5],
  [5, 7],
].map(([start, end]) => PRICE_FACTOR_CELLS.slice(start, end));

export default function CctvSeoContent() {
  return (
    <div className={styles.seoContent}>
      <section className={styles.scopeSection} aria-labelledby="cctv-scope-title">
        <SectionHeader
          bullet
          left="Kompleksowa instalacja"
          right="Montaż kamer CCTV · Kalisz"
        />

        <div className={`container ${styles.sectionInner}`}>
          <div className={styles.introGrid}>
            <div>
              <p className={`mono ${styles.eyebrow}`}>Od projektu do serwisu</p>
              <h2 id="cctv-scope-title">
                Monitoring dopasowany do domu, firmy i posesji
              </h2>
            </div>
            <div className={styles.introCopy}>
              <p>
                Montujemy monitoring CCTV w Kaliszu, powiecie kaliskim i
                okolicznych miejscowościach. Zaczynamy od poznania obiektu i
                miejsc, które mają być chronione — nie od przypadkowego doboru
                gotowego zestawu kamer.
              </p>
              <p>
                Wykonujemy nowe instalacje, modernizujemy istniejące systemy i
                konfigurujemy bezpieczny podgląd obrazu w telefonie, komputerze
                lub na lokalnym stanowisku monitoringu.
              </p>
            </div>
          </div>

          <CctvScopeList />
        </div>
      </section>

      <section className={styles.priceSection} aria-labelledby="cctv-price-title">
        <SectionHeader
          bullet
          left="Bezpłatna wycena"
          right="Koszt monitoringu"
        />

        <div className={`container ${styles.priceInner}`}>
          <div className={styles.priceLead}>
            <p className={`mono ${styles.eyebrow}`}>Przejrzysty zakres prac</p>
            <div className={styles.priceTitleRow}>
              <Copy>
                <h2 id="cctv-price-title">
                  Od czego zależy cena montażu kamer?
                </h2>
              </Copy>
              <Button href="/kontakt" className={styles.quoteButton}>
                Umów bezpłatne oględziny i wycenę
              </Button>
            </div>
          </div>
        </div>

        <PartnerList
          rows={PRICE_FACTOR_ROWS}
          variant="factors"
          ariaLabel="Czynniki wpływające na cenę montażu kamer"
        />
      </section>

      <section id="faq-cctv" className={styles.faqSection} aria-labelledby="cctv-faq-title">
        <SectionHeader
          bullet
          left="Najczęstsze pytania"
          right="Monitoring CCTV"
        />

        <div className={`container ${styles.faqInner}`}>
          <div className={styles.faqHeading}>
            <p className={`mono ${styles.eyebrow}`}>Przed montażem</p>
            <h2 id="cctv-faq-title">O co pytają klienci przed wyborem kamer?</h2>
          </div>

          <div className={styles.faqList}>
            {CCTV_FAQ_ITEMS.map(({ question, answer }, index) => (
              <details key={question} className={styles.faqItem}>
                <summary>
                  <span className={`mono ${styles.faqIndex}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.question}>{question}</span>
                  <span className={styles.plus} aria-hidden="true" />
                </summary>
                <p className={styles.answer}>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
