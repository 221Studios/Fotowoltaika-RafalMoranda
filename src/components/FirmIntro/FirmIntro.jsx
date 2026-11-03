import styles from "./FirmIntro.module.css";

import Copy from "@/components/Copy";

export default function FirmIntro() {
  return (
    <section className={styles.studioCopy} aria-label="O firmie ALFA">
      <div className={`container ${styles.studioCopyInner}`}>
        <Copy animateOnScroll={true} delay={2.2}>
          <div className={styles.studioCopyRow}>
            <p
              className={`${styles.studioCopyParagraph} ${styles.studioCopyLead}`}
            >
              Rozwijamy się razem z branżą.<br />
              Nasze doświadczenie w instalacjach<br />
              elektrycznych zdobywamy<br />
              od 1998 roku, a od 2005 roku<br />
              funkcjonujemy oficjalnie jako firma<br />
              <span className={styles.brandAccent}>ALFA Rafał Morańda</span>.
            </p>
          </div>

          <div
            className={`${styles.studioCopyRow} ${styles.studioCopyRowRight} ${styles.studioCopyFirstBodyRow}`}
          >
            <span className={styles.studioCopyNumber} aria-hidden="true">
              1
            </span>
            <p
              className={`${styles.studioCopyParagraph} ${styles.studioCopyParagraphRight}`}
            >
              Dziś, poza klasycznymi instalacjami elektrycznymi,<br />
              wykonujemy instalacje fotowoltaiczne, monitoring CCTV<br />
              oraz systemy OZE i automatykę dla budynków.
            </p>
          </div>

          <div className={`${styles.studioCopyRow} ${styles.studioCopyRowLeft}`}>
            <span className={styles.studioCopyNumber} aria-hidden="true">
              2
            </span>
            <p
              className={`${styles.studioCopyParagraph} ${styles.studioCopyParagraphLeft}`}
            >
              Posiadamy certyfikaty i uprawnienia SEP, a nasze<br />
              własne, wykwalifikowane ekipy wykonują prace<br />
              elektryczne i instalacyjne dla domów oraz firm.
            </p>
          </div>

          <div className={`${styles.studioCopyRow} ${styles.studioCopyRowRight}`}>
            <span className={styles.studioCopyNumber} aria-hidden="true">
              3
            </span>
            <p
              className={`${styles.studioCopyParagraph} ${styles.studioCopyParagraphRight}`}
            >
              Każdą inwestycję prowadzimy od fachowego doradztwa<br />
              i projektu przez bezpieczny montaż instalacji,<br />
              aż po uruchomienie i serwis instalacji.
            </p>
          </div>

          <div className={`${styles.studioCopyRow} ${styles.studioCopyRowLeft}`}>
            <span className={styles.studioCopyNumber} aria-hidden="true">
              4
            </span>
            <p
              className={`${styles.studioCopyParagraph} ${styles.studioCopyParagraphLeft}`}
            >
              Tworzymy rozwiązania dopasowane do specyfiki<br />
              budynku i Twoich potrzeb. Po zakończeniu prac<br />
              pozostajemy do pełnej dyspozycji inwestora.
            </p>
          </div>
        </Copy>
      </div>
    </section>
  );
}
