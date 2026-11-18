import Link from "next/link";
import styles from "./PhotovoltaicsLocalService.module.css";
import { INSTALLATIONS } from "@/data/installations";

export const PHOTOVOLTAICS_FAQ = [
  {
    question: "Co powinno znaleźć się w ofercie fotowoltaiki?",
    answer:
      "Porównuj oferty obejmujące ten sam zakres: modele i liczbę modułów, moc PV, falownik, konstrukcję, zabezpieczenia, montaż oraz uruchomienie. Sprawdź również, jakie prace elektryczne, dokumentacja i warunki gwarancji obejmuje cena. Dzięki temu wiesz, za jakie urządzenia i prace płacisz.",
  },
  {
    question: "Mam już fotowoltaikę - co przygotować przed rozbudową?",
    answer:
      "Przygotuj model falownika, obecną moc i liczbę modułów, dokumentację instalacji, jeśli ją masz, oraz informację o zużyciu energii. Ważne są też wolne miejsce na dachu lub gruncie i powód rozbudowy, np. dodatkowe urządzenia albo zakup magazynu. Pozwala to ocenić, które elementy można zachować, a które wymagają zmiany.",
  },
  {
    question: "Czy do istniejącej fotowoltaiki można dołożyć magazyn energii?",
    answer:
      "Możliwość rozbudowy zależy od modelu falownika i pozostałych elementów instalacji. Przed doborem magazynu potrzebne są informacje o urządzeniach, zużyciu energii i sposobie pracy systemu. Sam fakt posiadania fotowoltaiki nie potwierdza zgodności z dowolnym magazynem.",
  },
  {
    question: "Czy instalację można zaplanować pod późniejszy magazyn?",
    answer:
      "Taką potrzebę warto zgłosić już przy doborze falownika i miejsca na urządzenia. Przyszła rozbudowa zależy od zgodności konkretnych modeli, możliwości instalacji elektrycznej i dostępności komponentów. Osobno określamy, czy chodzi o większe wykorzystanie własnej energii, czy także o zasilanie wybranych obwodów podczas awarii sieci.",
  },
  {
    question: "Ile trwa montaż i kiedy może się rozpocząć?",
    answer:
      "Orientacyjny czas montażu standardowej instalacji domowej to 1-2 dni robocze. Nie jest to termin od pierwszego kontaktu do uruchomienia całego procesu: osobno ustalamy oględziny, przygotowanie oferty, dostępność urządzeń i rozpoczęcie prac. Magazyn, trudniejszy dach lub dodatkowe prace elektryczne mogą wydłużyć montaż.",
  },
  {
    question: "Co ustalić przy odbiorze instalacji?",
    answer:
      "Ustal, jakie dokumenty otrzymujesz, jak sprawdzić pracę falownika i gdzie zgłosić usterkę. Jeśli zestaw ma monitoring w aplikacji, ważne są dostęp właściciela i wyjaśnienie podstawowych odczytów. Przy magazynie warto omówić tryb pracy, a przy zasilaniu awaryjnym - które obwody będą zasilane i jakie są ograniczenia zestawu.",
  },
];

export default function PhotovoltaicsLocalService() {
  return (
    <section className={styles.localService} aria-labelledby="local-pv-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <p className={`mono ${styles.eyebrow}`}>ALFA Rafał Morańda · Fotowoltaika</p>
          <h2 id="local-pv-title">Instalacja dobrana do Twojego zużycia energii</h2>
          <p className={styles.intro}>
            Fotowoltaika powinna odpowiadać temu, jak korzystasz z prądu.
            ALFA z Cekowa oferuje dobór, montaż i serwis instalacji dla domów
            i firm w Kaliszu oraz okolicy. Zacznij od rozmowy o budynku,
            zużyciu energii i planach rozbudowy - na tej podstawie ustalimy
            zakres rozwiązania i wyceny.
          </p>
        </header>

        <div className={styles.detailsGrid}>
          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>01 · Dom i firma</p>
            <h3>Dobór zaczyna się od potrzeb budynku</h3>
            <p>
              W domu ważne są codzienne zużycie, pora pracy urządzeń i plany
              na kolejne lata. W firmie liczy się również profil poboru energii
              w godzinach działalności. Przy doborze uwzględniamy miejsce
              montażu, kierunek modułów, zacienienie oraz warunki instalacji
              elektrycznej. Większa moc nie zastępuje właściwego projektu.
            </p>
          </article>
          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>02 · Etapy współpracy</p>
            <h3>Od rozmowy i oględzin do montażu</h3>
            <p>
              Najpierw omawiamy potrzeby i zużycie energii. Oględziny pomagają
              ustalić warunki montażu, dobrać urządzenia i przygotować wycenę.
              Po uzgodnieniu zakresu i terminu przychodzi czas na montaż oraz
              uruchomienie. W ofercie ustalamy także zakres dokumentacji,
              formalności i przekazania informacji o obsłudze instalacji.
            </p>
          </article>
          <article className={styles.detail} id="magazyny-energii">
            <p className={`mono ${styles.detailLabel}`}>03 · Magazyny energii</p>
            <h3>Przechowaj energię do wykorzystania później</h3>
            <p>
              Magazyn pozwala wykorzystać część energii z fotowoltaiki w innym
              czasie niż jej produkcja, np. wieczorem. Pojemność dobieramy do
              zużycia i możliwości instalacji. Przy rozbudowie trzeba sprawdzić
              zgodność z falownikiem. Zasilanie podczas awarii sieci wymaga
              odpowiedniej konfiguracji - sam magazyn go nie gwarantuje.
            </p>
            <p><Link href="/kontakt">Zapytaj o dobór magazynu energii →</Link></p>
          </article>
          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>04 · Serwis</p>
            <h3>Kontakt także po uruchomieniu instalacji</h3>
            <p>
              Oferta ALFA obejmuje serwis gwarancyjny i pogwarancyjny,
              przeglądy oraz konserwację. Warunki gwarancji zależą od urządzeń
              i uzgodnionej oferty. Przy zgłoszeniu podaj model falownika,
              miejscowość i opis problemu; pomocny będzie komunikat z aplikacji.
              Zakres dalszych czynności i termin ustalamy po przyjęciu zgłoszenia.
            </p>
          </article>
          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>05 · Miejsce montażu</p>
            <h3>Na dachu czy na gruncie?</h3>
            <p>
              Wybór zależy od dostępnej powierzchni, zacienienia, konstrukcji
              i możliwości poprowadzenia przewodów. Na dachu oceniamy pokrycie
              i sposób mocowania. Przy instalacji gruntowej znaczenie mają
              także odległość od budynku oraz miejsce na konstrukcję. Oba
              warianty porównujemy dla konkretnej nieruchomości, zamiast
              zakładać jeden układ dla każdego domu.
            </p>
          </article>
          <article className={styles.detail}>
            <p className={`mono ${styles.detailLabel}`}>06 · Rozbudowa instalacji</p>
            <h3>Nowe potrzeby, istniejące urządzenia</h3>
            <p>
              Pompa ciepła, samochód elektryczny lub zmiana sposobu pracy
              firmy mogą zwiększyć zużycie prądu. Przed dołożeniem modułów
              albo magazynu sprawdzamy obecną konfigurację i możliwości
              rozbudowy. Jeśli planujesz kolejne urządzenia dopiero za jakiś
              czas, powiedz o tym przy pierwszej wycenie.
            </p>
          </article>
        </div>

        <div className={styles.installations}>
          <div className={styles.installationsHeader}>
            <p className={`mono ${styles.eyebrow}`}>Realizacje ALFA</p>
            <h3>Zobacz urządzenia i montaże z regionu</h3>
            <p>
              Zdjęcia i zestawienia wyposażenia pomogą Ci porównać różne
              rozwiązania. Urządzenia dla Twojego budynku dobieramy indywidualnie.
            </p>
            <Link href="/realizacje">Zobacz wszystkie realizacje →</Link>
          </div>
          <ul className={styles.installationList}>
            {INSTALLATIONS.slice(0, 6).map(({ slug, location, equipment }) => (
              <li key={slug}>
                <strong><Link href={`/realizacje/${slug}`}>{location}</Link></strong>
                <span>
                  {equipment.map(({ label, value }) => `${label}: ${value}`).join(" · ")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.installations} aria-labelledby="pv-faq-title">
          <div className={styles.installationsHeader}>
            <p className={`mono ${styles.eyebrow}`}>Przed decyzją</p>
            <h3 id="pv-faq-title">Pytania o fotowoltaikę i magazyny energii</h3>
            <p>Praktyczne ustalenia dotyczące oferty, rozbudowy i odbioru.</p>
            <Link href="/kontakt/faq">Ceny, dotacje i formalności - przejdź do FAQ →</Link>
          </div>
          <div>
            {PHOTOVOLTAICS_FAQ.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className={styles.installations}>
          <div className={styles.installationsHeader}>
            <p className={`mono ${styles.eyebrow}`}>Bezpłatna wycena</p>
            <h3>Porozmawiajmy o Twojej instalacji</h3>
          </div>
          <div>
            <p>
              Podaj miejscowość, przybliżone roczne zużycie energii i informację,
              czy planujesz nową instalację, czy rozbudowę. Jeśli nie masz jeszcze
              wszystkich danych, zacznij od kontaktu - ustalimy, co będzie potrzebne.
            </p>
            <p><Link href="/kontakt">Poproś o wycenę fotowoltaiki →</Link></p>
            <p>
              <a href="tel:+48600306425">+48 600 306 425</a>{" · "}
              <a href="mailto:rafal@moranda.com.pl">rafal@moranda.com.pl</a>
            </p>
            <p><Link href="/kalisz">Sprawdź obsługę Kalisza i okolic →</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}
