import Copy from "@/components/Copy";
import styles from "./ContactChecklist.module.css";

const ITEMS = [
  {
    title: "Rachunek za prąd",
    copy: "Najlepiej fakturę rozliczeniową z rocznym zużyciem energii w kWh. Na jej podstawie dobieramy moc instalacji.",
  },
  {
    title: "Numer PPE i moc przyłączeniowa",
    copy: "Znajdziesz je na fakturze lub w umowie z Energą. Są potrzebne do zgłoszenia mikroinstalacji w Energa-Operator.",
  },
  {
    title: "Informacje o dachu",
    copy: "Rodzaj pokrycia, przybliżony kierunek połaci i zdjęcie dachu. Pozwala to wstępnie ocenić warunki montażu.",
  },
  {
    title: "Plany na najbliższe lata",
    copy: "Pompa ciepła, auto elektryczne albo magazyn energii zmieniają zużycie prądu i potrzebną moc instalacji.",
  },
];

export default function ContactChecklist() {
  return (
    <section className={styles.section} aria-labelledby="contact-checklist-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <Copy>
            <p className={`mono ${styles.kicker}`}>Przed bezpłatnymi oględzinami</p>
          </Copy>
          <Copy>
            <h2 id="contact-checklist-title">Co przygotować do wyceny fotowoltaiki?</h2>
          </Copy>
          <Copy>
            <p className={styles.lead}>
              Z tymi informacjami przygotujemy precyzyjną ofertę już podczas
              pierwszej rozmowy lub wizyty.
            </p>
          </Copy>
        </div>

        <ol className={styles.list}>
          {ITEMS.map(({ title, copy }, index) => (
            <li key={title} className={styles.item}>
              <span className={`mono ${styles.index}`} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
