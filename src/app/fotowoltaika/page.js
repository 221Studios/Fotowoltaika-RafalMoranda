import PageHeader from "@/components/PageHeader";
import StatementBanner from "@/components/StatementBanner";
import ResearchAreas from "@/components/ResearchAreas";
import ResearchOutcomes from "@/components/ResearchOutcomes";
import ProcessSteps from "@/components/ProcessSteps";
import PhotovoltaicsLocalService from "@/components/PhotovoltaicsLocalService";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, createServiceSchema } from "@/lib/site";

const DESCRIPTION =
  "Montaż fotowoltaiki w Kaliszu i powiecie kaliskim. Lokalne realizacje JA Solar, Huawei, LUNA i BAKS. Serwis gwarancyjny i pogwarancyjny.";

export const metadata = createPageMetadata({
  title: "Fotowoltaika w Kaliszu — montaż i serwis",
  description: DESCRIPTION,
  path: "/fotowoltaika/",
  image: "/images/research/banner.webp",
  imageAlt: "Panele fotowoltaiczne montowane przez firmę ALFA",
});

const SERVICE_SCHEMA = createServiceSchema({
  name: "Montaż i serwis instalacji fotowoltaicznych",
  description: DESCRIPTION,
  path: "/fotowoltaika/",
});

export default function ResearchPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMA} />
      <PageHeader
        title="Fotowoltaika"
        subtitle="dla domu i biznesu"
        description="Dobór, montaż, uruchomienie i serwis instalacji fotowoltaicznych oraz magazynów energii. Firma ALFA działa z Cekowa i obsługuje Kalisz oraz region."
        icon="SunIcon"
      />

      <StatementBanner
        showContent={false}
        src="/images/research/banner.webp"
      />

      <PhotovoltaicsLocalService />

      <section className="container pv-guidance" id="dotacje-przylaczenia" aria-labelledby="pv-guidance-title">
        <p className="mono">Praktyczny przewodnik · aktualizacja 2 listopada 2026</p>
        <h2 id="pv-guidance-title">Dotacje i zgłoszenie instalacji — od czego zacząć?</h2>
        <p>
          Dostępność wsparcia zależy od rodzaju urządzeń, dat inwestycji i
          warunków naboru. Przed zakupem sprawdź aktualny regulamin oraz
          kwalifikowalność kosztów w instytucji prowadzącej program.
        </p>
        <div className="pv-guidance-grid">
          <article>
            <h3>Przydomowe Magazyny Energii 2</h3>
            <p>
              Według informacji NFOŚiGW nabór trwa od 20 października 2026 r.
              do 1 października 2027 r. lub do wyczerpania budżetu. Program
              dotyczy prosumentów z przyłączoną mikroinstalacją OZE i obejmuje
              magazyny energii, magazyny ciepła oraz określone falowniki. Łączny
              limit wsparcia wynosi do 19 000 zł na PPE; kwota zależy od rodzaju
              kosztów i spełnienia wymagań programu.
            </p>
            <ul>
              <li>Magazyn energii: minimum 10 kWh i pojemność co najmniej 2 kWh na 1 kWp instalacji PV.</li>
              <li>Dotacja do magazynu: do 30% kosztów kwalifikowanych, z limitem zależnym m.in. od sposobu rozliczania energii.</li>
              <li>Dodatkowe wsparcie na określone urządzenia może podnieść łączny limit do 19 000 zł na PPE.</li>
            </ul>
            <a href="https://przydomowemagazyny.gov.pl/o-programie/" target="_blank" rel="noreferrer">
              Zasady programu i wniosek NFOŚiGW <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article>
            <h3>Dotacje miejskie w Kaliszu</h3>
            <p>
              Miejskie wsparcie i nabory mogą się zmieniać. Aktualna strona
              miasta opisuje programy ekologiczne oraz doradztwo klimatyczne;
              przed decyzją sprawdź, czy nabór obejmuje konkretnie planowane
              urządzenie. Nie zakładamy, że miejska dotacja do wymiany źródła
              ciepła obejmuje samą instalację fotowoltaiczną.
            </p>
            <a href="https://www.kalisz.pl/dla-mieszkanca/ochrona-srodowiska/life-after-coal-pl/dla-mieszkancow" target="_blank" rel="noreferrer">
              Informacje miasta Kalisza o programach <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article>
            <h3>Zgłoszenie do operatora sieci</h3>
            <p>
              Właściwego operatora ustala się dla adresu instalacji, na przykład
              na podstawie rachunku za energię. W sieci Energa-Operator tryb
              zgłoszeniowy dotyczy mikroinstalacji, której moc nie przekracza
              mocy przyłączeniowej obiektu. W pozostałych przypadkach sprawdź
              wymagany wniosek i aktualne dokumenty operatora.
            </p>
            <a href="https://energa-operator.pl/przylaczenie-do-sieci/przylaczanie-wytworcy-energii/mikroinstalacja" target="_blank" rel="noreferrer">
              Proces przyłączenia mikroinstalacji — Energa-Operator <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
        <p className="pv-guidance-note">
          Informacje mają charakter orientacyjny. Ostateczne warunki potwierdza
          instytucja prowadząca program lub operator właściwy dla punktu poboru.
        </p>
      </section>

      <ResearchAreas />

      <ResearchOutcomes />

      <ProcessSteps />
    </>
  );
}
