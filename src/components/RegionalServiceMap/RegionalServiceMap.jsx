import Button from "@/components/Button";
import styles from "./RegionalServiceMap.module.css";

const OFFICE_MAP_URL =
  "https://maps.google.com/maps?q=ALFA+Rafa%C5%82+Mora%C5%84da%2C+Cek%C3%B3w+Kolonia+6a%2C+62-834+Cek%C3%B3w&z=15&output=embed";
const OFFICE_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=ALFA%20Rafa%C5%82%20Mora%C5%84da&query_place_id=ChIJW7gAcBXfGkcRpLSZ251ae5E";

export default function RegionalServiceMap() {
  return (
    <section className={styles.section} aria-labelledby="service-area-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`mono ${styles.kicker}`}>Obszar działania</p>
          <h2 id="service-area-title">
            Działamy w Kaliszu i okolicy
          </h2>
          <p className={styles.description}>
            Wykonujemy instalacje dla domów i firm w Kaliszu oraz pobliskich
            miejscowościach.
          </p>
          <address className={styles.address}>
            Ceków Kolonia 6a, 62-834 Ceków
          </address>
          <Button
            variant="primary"
            href="/kalisz"
            className={styles.cityButton}
          >
            Fotowoltaika w Kaliszu
          </Button>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            className={styles.map}
            title="Google Maps — siedziba ALFA Rafał Morańda w Cekowie Kolonii"
            src={OFFICE_MAP_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className={styles.mapLink}
            href={OFFICE_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Otwórz siedzibę w Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
