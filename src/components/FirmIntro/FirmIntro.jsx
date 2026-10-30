import styles from "./FirmIntro.module.css";

import Copy from "@/components/Copy";

export default function FirmIntro() {
  return (
    <section className={styles.firmIntro}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.block}>
          <Copy animateOnScroll={false} delay="1.25">
            <h1 className={styles.heading}>
              ALFA Rafał Morańda to firma instalacyjna działająca na rynku od
              2005 roku. Doświadczenie w branży zdobywamy od 1998 roku.
            </h1>
          </Copy>
        </div>

        <div className={styles.block}>
          <Copy>
            <h1 className={styles.heading}>
              Projektujemy i montujemy instalacje fotowoltaiczne oraz
              elektryczne. Wykonujemy także instalacje niskoprądowe, alarmy i
              monitoring CCTV. Zapewniamy doradztwo, uruchomienie i serwis.
            </h1>
          </Copy>
        </div>
      </div>
    </section>
  );
}
