import styles from "./PhotovoltaicsLocalService.module.css";
import { INSTALLATIONS } from "@/data/installations";

export default function PhotovoltaicsLocalService() {
  return (
    <section className={styles.localService} aria-labelledby="local-pv-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <p className={`mono ${styles.eyebrow}`}>
            ALFA Rafał Morańda · Kalisz i powiat kaliski
          </p>
          <h2 id="local-pv-title">
            Fotowoltaika w Kaliszu: lokalny montaż, serwis i kontakt z wykonawcą
          </h2>
          <p className={styles.intro}>
            Instalacje projektuje i wykonuje ALFA Rafał Morańda z Cekowa Kolonii.
            Przed wyceną omawiamy zużycie energii, sprawdzamy miejsce montażu
            i dobieramy urządzenia do budynku. Firma działa od 2005 roku,
            a praktyka instalacyjna Rafała Morańdy sięga 1998 roku.
          </p>
        </header>

        <div className={styles.detailsGrid}>
          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>01 · Montaż lokalny</p>
            <h3>Od oględzin do uruchomienia</h3>
            <p>
              Najpierw rozmawiamy o rachunkach i sposobie korzystania z energii.
              Następnie oglądamy dach lub miejsce montażu, wykonujemy pomiary,
              przygotowujemy wycenę i plan. Po uzgodnieniu zakresu i terminu ALFA
              montuje instalację, uruchamia ją i pokazuje klientowi obsługę
              monitoringu w aplikacji.
            </p>
          </article>

          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>02 · Kto wykonuje</p>
            <h3>Ekipa montażowa ALFA, kontakt bezpośrednio z Rafałem Morańdą</h3>
            <p>
              Montaż wykonuje ekipa instalacyjna ALFA, a za projekt, uzgodnienia
              i kontakt z klientem odpowiada Rafał Morańda. Zadzwoń bezpośrednio
              pod numer{" "}
              <a href="tel:+48600306425">+48 600 306 425</a> lub mailowo pod
              adresem <a href="mailto:rafal@moranda.com.pl">rafal@moranda.com.pl</a>.
              Siedziba firmy: Ceków Kolonia 6a, 62-834 Ceków.
            </p>
          </article>

          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>03 · Termin realizacji</p>
            <h3>Typowy montaż domu zajmuje 1–2 dni robocze</h3>
            <p>
              To orientacyjny czas prac na miejscu dla standardowej instalacji
              domowej. Magazyn energii, trudniejszy dach albo dodatkowe prace
              elektryczne mogą wydłużyć montaż. Termin rozpoczęcia ustalamy po
              oględzinach, doborze urządzeń i akceptacji wyceny; zależy też od
              aktualnej kolejki realizacji i dostępności komponentów.
            </p>
          </article>

          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>04 · Serwis i zgłoszenia</p>
            <h3>Kontakt po montażu bez pośredników</h3>
            <p>
              ALFA świadczy serwis gwarancyjny i pogwarancyjny oraz wykonuje
              okresowe przeglądy i konserwację. Zakres i okres gwarancji zależą
              od urządzeń i warunków oferty. Usterkę zgłoś telefonicznie lub
              mailowo, podając adres instalacji, model falownika i treść komunikatu
              z aplikacji. ALFA wstępnie weryfikuje objawy zdalnie i w razie
              potrzeby uzgadnia termin oględzin na miejscu. Termin i zakres
              diagnostyki są ustalane po przyjęciu zgłoszenia.
            </p>
          </article>
        </div>

        <div className={styles.installations}>
          <div className={styles.installationsHeader}>
            <p className={`mono ${styles.eyebrow}`}>Przykłady z regionu</p>
            <h3>Rzeczywiste instalacje ALFA w okolicy Kalisza</h3>
          </div>
          <ul className={styles.installationList}>
            {INSTALLATIONS.map(
              ({ slug, location, panel, inverter, battery }) => (
                <li key={slug}>
                  <strong>{location}</strong>
                  <span>
                    Moduły {panel} · falownik {inverter}
                    {battery ? ` · magazyn ${battery}` : ""}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
