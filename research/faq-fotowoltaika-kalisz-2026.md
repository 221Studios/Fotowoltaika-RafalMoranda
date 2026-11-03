# FAQ fotowoltaika Kalisz 2026 – materiał źródłowy dla ALFA Rafał Morańda

**Sprawdzone:** 3 listopada 2026 r. · **Zakres:** wytyczne Google dla treści FAQ i funkcji AI, ceny PV i magazynów energii 2026, VAT, OSD i procedura zgłoszenia mikroinstalacji w Kaliszu, net-billing, dotacje i ulgi (stan na listopad 2026), wymogi formalne (Prawo budowlane, ppoż., uprawnienia), gwarancje JA Solar / Huawei, realne zapytania użytkowników, okres zwrotu.

Kontekst firmy: ALFA Rafał Morańda, Ceków Kolonia 6a, 62-834 Ceków (powiat kaliski), obsługa ok. 50 km od Kalisza; moduły JA Solar, falowniki Huawei SUN2000-2–10KTL-M1, magazyny LUNA2000, uprawnienia SEP.

Zasada: każda liczba ma link do strony, którą faktycznie pobrano. Źródła pierwotne (ustawy z ISAP/ELI, gov.pl, NFOŚiGW, Energa-Operator, URE, PVGIS, Google Search Central, dokumenty producentów) mają pierwszeństwo; ceny rynkowe pochodzą z datowanych stron firm i są oznaczone jako wtórne.

---

## 1. Google: FAQ rich results, FAQPage, funkcje AI, treści pytanie–odpowiedź

### Stan na listopad 2026

| Data | Zdarzenie | Źródło |
| --- | --- | --- |
| sierpień 2023 | FAQ rich results ograniczone do „well-known, authoritative government and health websites”. | [Google Search Central Blog, 8.08.2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes) |
| 7 maja 2026 | FAQ rich results przestały się wyświetlać w wyszukiwarce. | [Search Central – changelog](https://developers.google.com/search/updates), [SER, 11.05.2026](https://www.seroundtable.com/google-drops-faq-rich-results-41298.html) |
| czerwiec 2026 | Według komunikatu Google znika wygląd wyszukiwania FAQ, raport w Search Console i obsługa w Rich Results Test. | [SER, cytat komunikatu z dokumentacji](https://www.seroundtable.com/google-drops-faq-rich-results-41298.html) |
| 15 czerwca 2026 | Dokumentacja FAQ usunięta; stary adres przekierowuje (301) na changelog. | [faqpage → updates#removing-faq-rich-result](https://developers.google.com/search/docs/appearance/structured-data/faqpage) |
| sierpień 2026 | Wycofanie FAQ z Search Console API. | [SER](https://www.seroundtable.com/google-drops-faq-rich-results-41298.html) |

- **Czy usuwać FAQPage JSON-LD?** Google pisało już w 2023 r.: „no need to proactively remove it. Structured data that's not being used does not cause problems for Search, but also has no visible effects” ([blog 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). John Mueller w maju 2026 r.: „No need to change anything, but if you did it for search, you can remove the markup if you want” ([SER](https://www.seroundtable.com/google-drops-faq-rich-results-41298.html)). Wniosek: znacznik FAQPage nie szkodzi, ale nie daje już efektu w Google.
- **W repozytorium** FAQPage jest generowane w `src/app/kontakt/faq/page.js` (z `src/data/faq.js`), `src/app/kalisz/page.js` i `src/app/realizacje/[slug]/page.js`. W ramach tego zadania pliki nie były zmieniane – decyzja należy do zespołu.
- **QAPage nie zastępuje FAQPage.** Jest przeznaczone dla stron z jednym pytaniem i odpowiedziami przesyłanymi przez użytkowników, a nie dla firmowego FAQ ([QAPage, aktualizacja 8.09.2026](https://developers.google.com/search/docs/appearance/structured-data/qapage)).
- **Zasady danych strukturalnych:** nie oznaczać treści niewidocznych dla użytkownika; znaczniki muszą odpowiadać treści na stronie ([sd-policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)).

### AI Overviews / AI Mode – co Google mówi oficjalnie

- **Dodatkowe wymagania:** brak. Strona musi być zaindeksowana i kwalifikować się do wyświetlania fragmentu. Nie są potrzebne specjalne schema ani „pliki AI” ([AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)).
- **Przewodnik z 15.05.2026** ([AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); data w [changelogu](https://developers.google.com/search/updates)):
  - Liczy się treść „non-commodity”, czyli własne doświadczenie, dane i przykłady, a nie ogólniki.
  - Treść należy dzielić na czytelne akapity, sekcje i nagłówki.
  - Nie należy tworzyć osobnych stron pod każdą wariację zapytania (ryzyko „scaled content abuse”).
  - Zbędne są llms.txt, sztuczne „chunkowanie”, przepisywanie tekstu „pod AI” i nienaturalne wzmianki.
  - Dane strukturalne nie są wymagane, choć nadal przydają się do innych rich results.
  - Search Console ma raport skuteczności funkcji generatywnych AI.
  - Dla wyników lokalnych ważny jest Profil Firmy w Google.
- Wyjaśnienie dotyczące llms.txt: wpis z 15.06.2026 w [changelogu](https://developers.google.com/search/updates).

**Praktycznie dla strony ALFA:**
- Odpowiedzi umieszczać w widocznym HTML: pytanie jako nagłówek, a pod nim 2–4 zdania z konkretem (cena z datą, nazwa OSD, liczba z ustawy).
- Pokazywać lokalne doświadczenie: realizacje z okolic Kalisza i Cekowa oraz serwis Huawei.
- Nie tworzyć osobnych stron typu „fotowoltaika [każda gmina]” z tą samą treścią.

---

## 2. Ceny 2026 (brutto) i VAT

### 2.1 Raport IEO – brak edycji 2026

- **Raport 2026 nie istnieje.** IEO ogłosiło prace nad raportem „Rynek fotowoltaiki w Polsce 2027”, a raportu za 2026 r. nie ma ([IEO](https://ieo.pl/rozpoczynamy-prace-nad-raportem-rynek-fotowoltaiki-w-polsce-2027)).
- **Ostatnie dane IEO (raport 2025, dane za 2024 r.):**
  - średni koszt mikroinstalacji 4069 zł/kW,
  - średnia moc 10,3 kW.
  - Streszczenie nie mówi, czy to kwota netto czy brutto ([streszczenie raportu IEO 2025, PDF](https://energetyka.civitas.edu.pl/wp-content/uploads/2025/07/Streszczenie_Raport_PV_2025_IEO.pdf)).
- **Ograniczenie:** to dane z 2024 r., nie z 2026 r.

### 2.2 Datowane cenniki i przeglądy rynku 2026

**Bez magazynu (brutto z montażem)**

| Moc | VoltValue (14.10.2026) | TS Energy (31.08.2026) | eu-panele (12.08.2026, ceny I kw. 2026) | Zenergy (VI 2026) |
| --- | --- | --- | --- | --- |
| 5 kWp | 14 900–19 100 zł | 22 000 zł | – | 20 000–28 000 zł |
| 6–8 kWp | 8 kWp: 22 100–28 500 zł | 8 kWp: 32 000 zł | 6 kWp 17 200–23 500; 7 kWp 18 900–25 900; 8 kWp 20 600–28 300 zł | – |
| 10 kWp | 26 400–34 200 zł | 40 000 zł | 24 000–33 100 zł | 38 000–52 000 zł |

Źródła: [VoltValue](https://voltvalue.pl/baza-wiedzy/ile-kosztuje-fotowoltaika-z-magazynem-energii) · [TS Energy](https://www.tsenergy.com.pl/poradnik/ile-kosztuje-instalacja-fotowoltaiczna-w-2026-roku) · [eu-panele](https://eu-panele.pl/fotowoltaika-cena-za-kwp) · [Zenergy](https://www.zenergy.com.pl/ile-kosztuje-fotowoltaika-dla-domu-jednorodzinnego/). Jutroteka (29.09/29.10.2026) podaje typowo ok. 28 000 zł za 6 kWp i 38–52 tys. zł za 10 kWp ([jutroteka](https://jutroteka.pl/fotowoltaika-czy-sie-oplaca-2026/)).

**Cena za kWp**

| Źródło | 5 kWp | 8 kWp | 10 kWp |
| --- | --- | --- | --- |
| VoltValue, przeliczenie własne z widełek | 2 980–3 820 zł | 2 760–3 560 zł | 2 640–3 420 zł |
| eu-panele (10 kW) | – | – | 2 400–3 310 zł |
| Zenergy | 4 000–5 600 zł | – | 3 800–5 200 zł |

Rozrzut między źródłami jest duży, więc w FAQ lepiej podawać widełki z datą niż jedną liczbę.

**Z magazynem (brutto z montażem)**

| Konfiguracja | Cena | Źródło |
| --- | --- | --- |
| 5 kWp + 10 kWh | 24 400–31 100 zł | VoltValue, typowo |
| 8 kWp + 10 kWh | 32 100–40 400 zł | VoltValue, typowo |
| 10 kWp + 10 kWh | 36 500–45 600 zł (premium 43 900–52 500 zł) | VoltValue, typowo |
| 10 kWp + 20 kWh | 43 800–56 200 zł | VoltValue |
| 10 kWp + magazyn (wyceny 24.09–8.10.2026) | 47 579–68 513 zł | [SMR Instalacje](https://smrinstalacje.pl/fotowoltaika-10-kw-z-magazynem-energii) (aktualizacja 27.10.2026) |
| 5 kW + magazyn, od | 40 990 zł | [kolektory.com / SOLEKO](https://www.kolektory.com/magazyny-energii/instalacje-fotowoltaiczne-z-magazynem-energii-ceny.html) |
| 10 kW + magazyn | 49 990 / 59 990 zł | kolektory.com / SOLEKO |
| 5 kW + 5 kWh | 45 000–60 000 zł | Zenergy |
| 6 kW + 10 kWh | 65 000–80 000 zł | Zenergy |
| 10 kW + 10 kWh | 75 000–95 000 zł | Zenergy |

Ceny Zenergy wyraźnie odstają od pozostałych źródeł.

**Ile kosztuje dołożenie magazynu**
- **Ceny za kWh** (VoltValue):
  - mediana 983 zł/kWh,
  - typowo 746–1 297 zł/kWh,
  - segment premium (m.in. Huawei) 1 631–2 047 zł/kWh, czyli 16 300–20 500 zł za 10 kWh.
- **Różnica w zestawie 10 kWp** (przeliczenie z widełek VoltValue): dołożenie 10 kWh zwiększa cenę o ok. 10–11 tys. zł w segmencie typowym. W segmencie premium różnica jest większa.
- **Zenergy:** sam magazyn 10 kWh kosztuje 22 000–28 000 zł.
- **Małe firmy** wyceniały średnio ok. 12% poniżej środka widełek (VoltValue).
- **Magazyn 5 kWh:** danych jest mało. Taki magazyn nie spełnia warunków PME2, które wymagają co najmniej 10 kWh (pkt 4).

### 2.3 VAT 8% czy 23%

- **Podstawa prawna:** art. 41 ust. 2 w zw. z ust. 12 pkt 1 ustawy o VAT. Stawka obniżona obejmuje „dostawę, budowę, remont, modernizację, termomodernizację, przebudowę” obiektów budownictwa objętego społecznym programem mieszkaniowym.
  - Definicja tego budownictwa jest w ust. 12a, limity w ust. 12b: dom jednorodzinny do 300 m², lokal do 150 m².
  - Powyżej limitu stosuje się proporcję z ust. 12c.
  - Stawka 8% (zamiast 7%) wynika z art. 146ef.
  - Źródło: [ISAP, tekst ujednolicony ustawy o VAT, Dz.U. 2025 poz. 775, stan 20.07.2026](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20250000775/U/D20250775Lj.pdf).
- **8% – na dachu, z magazynem:** interpretacja indywidualna Dyrektora KIS z 15.09.2026 (0111-KDSB1-2.440.318.2026.2.MD) obejmuje montaż PV z magazynem na dachu domu ([taxmachine](https://taxmachine.pl/interpretacje/0111-kdsb1-2-440-318-2026-2-md)).
- **8% – na gruncie:** interpretacja z 12.04.2024 dopuszcza 8% także dla instalacji naziemnej funkcjonalnie związanej z budynkiem mieszkalnym ([Legalis](https://biz.legalis.pl/montaz-paneli-fotowoltaicznych-a-stawka-vat/)). Analogiczne podejście KIS dla kolektorów: [Eureka MF](https://eureka.mf.gov.pl/informacje/podglad/546583).
- **23% stosuje się, gdy:**
  - budynek nie jest mieszkalny,
  - instalacja nie jest funkcjonalnie związana z domem albo zasila działalność gospodarczą,
  - dom przekracza 300 m² (wtedy 23% dotyczy części ponad limit, wg proporcji z ust. 12c).
- Powiedzenie „na gruncie = 23%” nie jest regułą wynikającą z ustawy. Interpretacje indywidualne wiążą tylko wnioskodawcę.

---

## 3. Operator, zgłoszenie mikroinstalacji, net-billing

### 3.1 Kto jest OSD dla Kalisza i okolic

- **Operatorem jest Energa-Operator S.A.** Koncesja URE (ważna do 31.12.2030) wymienia m.in. Kalisz, Ceków-Kolonia, Opatówek, Żelazków, Koźminek, Lisków, Mycielin, Szczytniki, Stawiszyn, Blizanów i Nowe Skalmierzyce ([koncesja URE, PDF](https://api.ure.gov.pl/api/ConcessionFuel/download/F2DE1526-D80A-4257-93D0-7F88947FE49D)).
- **Oddział w Kaliszu:** al. Wolności 8, tel. +48 62 500 22 10, kalisz@energa-operator.pl ([kontakt oddziały](https://energa-operator.pl/kontakt/centrala-oddzialy-spolki), [BIP Kalisz](https://bip.energa-operator.pl/kalisz/s/20477/dane-kontaktowe)).
- **Uwaga:** część stron branżowych błędnie podaje Enea jako operatora dla Kalisza. Wiążący jest dokument koncesji i faktura klienta.

### 3.2 Procedura zgłoszenia (Energa-Operator)

Źródła: [zgłoszenie](https://energa-operator.pl/przylaczenie-do-sieci/przylaczanie-wytworcy-energii/mikroinstalacja/zgloszenie), [mikroinstalacja](https://energa-operator.pl/przylaczenie-do-sieci/przylaczanie-wytworcy-energii/mikroinstalacja), [proces dla konsumenta](https://energa-operator.pl/dla-konsumenta/proces-przylaczenia-mikroinstalacji), [formularze](https://energa-operator.pl/dokumenty-i-formularze/przylaczenia-do-sieci/wytworca/mikroinstalacja).

- **Kto składa:**
  - Odbiorca końcowy, który jest stroną umowy dystrybucyjnej lub kompleksowej.
  - Instalator może złożyć zgłoszenie jako pełnomocnik (wzór pełnomocnictwa jest na stronie formularzy).
  - Mikroinstalacja nie wymaga koncesji.
- **Kiedy:** po zainstalowaniu, nie później niż 30 dni przed planowanym przyłączeniem.
- **Kanał:** formularz online („Mikroinstalacje-OZE”), poczta albo osobiście w Punkcie Obsługi Przyłączeń lub Departamencie Usług Dystrybucyjnych. Kanał mailowy wygaszono 31.08.2021.
- **Załączniki:**
  - Certyfikat NC RfG falownika. Nie trzeba go dołączać, jeśli falownik jest na [liście PTPiREE](http://ptpiree.pl/opracowania/kodeksy-sieci/wykaz-certyfikatow).
  - Oświadczenie z art. 7 ust. 8d6 Prawa energetycznego.
  - Oświadczenie instalatora.
  - Przy magazynie energii dodatkowy załącznik dotyczący magazynu (strona formularzy).
- **Termin OSD:** 30 dni od kompletnego zgłoszenia na sprawdzenie techniczne i przyłączenie; w tym czasie montowany jest licznik dwukierunkowy.
- **Koszt:** przyłączenie jest bezpłatne. Strona procesu dla konsumenta wspomina o opłacie za niezasadny przyjazd ekipy.
- **Po przyłączeniu:** prosument zgłasza się do sprzedawcy w sprawie umowy na rozliczenie.
- **Uwaga:** strona „zgłoszenie” Energa-Operator nadal zawiera nieaktualny opis opustów 1:0,8 / 1:0,7. Nie cytować go w FAQ jako obowiązującego.
- **Podstawa ustawowa:** art. 7 ust. 8d4–8d7 i 8d10 Prawa energetycznego ([Dz.U. 2026 poz. 43](https://api.sejm.gov.pl/eli/acts/DU/2026/43/text.pdf)).

### 3.3 Net-billing – obowiązujące zasady i zmiany 2025–2026

Główne źródło: ustawa o OZE, [Dz.U. 2026 poz. 68](https://api.sejm.gov.pl/eli/acts/DU/2026/68/text.pdf).

- **Rozliczanie wartości energii:**
  - Energia wprowadzona do sieci trafia do depozytu prosumenckiego po cenie rynkowej (art. 4b ust. 1–2).
  - Prosumenci przyłączeni od 1.07.2024 rozliczają się po godzinowej cenie RCE.
  - Starsi prosumenci net-billingu mogą zostać przy miesięcznej RCEm albo przejść na RCE ([MKiŚ](https://www.gov.pl/web/klimat/korzystne-zmiany-dla-prosumentow-wchodza-w-zycie), [MKiŚ – pytania](https://www.gov.pl/web/klimat/prosument-pytania)).
- **Współczynnik 1,23:** wartość depozytu jest powiększana o 23% (art. 4c ust. 4). Zmiana obowiązuje od końca grudnia 2024 r. ([MKiŚ](https://www.gov.pl/web/klimat/korzystne-zmiany-dla-prosumentow-wchodza-w-zycie)).
- **Zwrot niewykorzystanego depozytu** po 12 miesiącach (art. 4 ust. 11a):
  - do 20% wartości energii wprowadzonej w danym miesiącu przy RCEm,
  - do 30% przy RCE.
- **Depozyt pokrywa tylko energię czynną.** Opłaty dystrybucyjne płaci się osobno ([Energa – net-billing](https://www.energa.pl/dom/strefa-prosumenta/net-billing)).
- **Bilansowanie godzinowe:** rozliczenie opiera się na energii „sumarycznie zbilansowanej w każdej godzinie” (art. 4 ust. 2b ustawy o OZE).
  - Od 1.10.2025 rynek dnia następnego (SDAC) działa w produktach 15-minutowych ([PSE](https://www.pse.pl/-/zmiana-daty-wprowadzenia-produktow-15-minutowych-na-sdac)).
  - Sposób, w jaki RCE 15-minutowa przekłada się na godzinowe rozliczenie, opisuje tylko źródło wtórne ([smartinghome](https://smartinghome.pl/rce-15-minutowe/)).
- **Nowelizacja z 4.09.2026** ([Dz.U. 2026 poz. 1347](https://api.sejm.gov.pl/eli/acts/DU/2026/1347/text.pdf)):
  - Ogłoszona 16.10.2026; wchodzi w życie zasadniczo 1.12.2026, a art. 1 pkt 3 – po 3 miesiącach od ogłoszenia.
  - Faktury prosumenckie będą zawierać więcej informacji o rozliczeniu, m.in. o RCE godzinowej.
  - Nowy art. 4 ust. 13b reguluje zwrot nadwyżki depozytu przy zmianie sprzedawcy.
  - Limity zwrotu 20%/30% się nie zmieniają.

---

## 4. Dotacje i ulgi – stan na listopad 2026

| Program | Status (3.11.2026) | Kwoty / warunki | Źródło |
| --- | --- | --- | --- |
| **Mój Prąd 6.0** | Zamknięty 12.09.2025. „Mój Prąd 7.0” nie będzie; strona ostrzega przed oszustami. | – | [NFOŚiGW – nabory zakończone](https://www.gov.pl/web/nfosigw/nabory-zakonczone), [mojprad.gov.pl](https://mojprad.gov.pl/) |
| **PME cz. I (KPO)** | Zamknięty. Nabór 30.03–8.05.2026 (przedłużony z 30.04). Strona PME podaje 30.03–19.06.2026 – rozbieżność. | Obejmował refundację PV z lat 2024–2025. | [NFOŚiGW – nabory zakończone](https://www.gov.pl/web/nfosigw/nabory-zakonczone), [ogłoszenie NFOŚiGW](https://www.gov.pl/web/nfosigw/startuje-program-dotacji-na-instalacje-fotowoltaiczne-i-magazyny-energii) |
| **PME 2 (Fundusz Modernizacyjny)** | Otwarty od 20.10.2026; termin końcowy wg NFOŚiGW 1.10.2027 lub wcześniej, jeśli wyczerpie się budżet 1 mld zł. **Nie finansuje paneli PV.** | Szczegóły poniżej tabeli. | [przydomowemagazyny.gov.pl – o programie](https://przydomowemagazyny.gov.pl/o-programie/), [NFOŚiGW](https://www.gov.pl/web/nfosigw/nfosigw-uruchamia-nabor-wnioskow-na-dofinansowanie-przydomowych-magazynow-energii), [MKiŚ](https://www.gov.pl/web/klimat/zglos-sie-po-dofinansowanie-przydomowych-magazynow-energii) |
| **Czyste Powietrze** | Program działa; strona opisuje ścieżki składania wniosków. **PV nie jest kosztem kwalifikowanym.** | Maks. 170 100 zł (najwyższy poziom, budynek > 140 kWh/m²/rok); strona aktualizowana 20.07.2026. | [Na co i ile](https://czystepowietrze.gov.pl/wez-dofinansowanie/na-co-i-ile), [czystepowietrze.gov.pl](https://czystepowietrze.gov.pl/) |
| **Ulga termomodernizacyjna (PIT)** | Obowiązuje. | Szczegóły poniżej tabeli. | [PIT, Dz.U. 2026 poz. 592](https://api.sejm.gov.pl/eli/acts/DU/2026/592/text.pdf), [wykaz, Dz.U. 2025 poz. 1128](https://api.sejm.gov.pl/eli/acts/DU/2025/1128/text.pdf) |
| **Kalisz (miasto)** | Brak dotacji na PV dla mieszkańców. Są doradcy klimatyczni i projekt KPO dotyczący społeczności energetycznych. | – | [doradcy](https://www.kalisz.pl/dla-mieszkanca/ochrona-srodowiska/life-after-coal-pl), [projekt KPO](https://www.kalisz.pl/miasto/projekty-miasta/projekty-kpo/przedsiewziecie-pn-wsparcie-rozwoju-spolecznosci-energetycznych-na-terenie-miasta-kalisza,68374) |
| **WFOŚiGW Poznań** | Agroenergia zakończona 31.12.2025; w trybie ciągłym dostępne są głównie pożyczki. | – | [Agroenergia](https://www.wfosgw.poznan.pl/programy/program-priorytetowy-agroenergia/), [nabór ciągły](https://www.wfosgw.poznan.pl/programy/nabor-wnioskow-w-trybie-ciaglym/) |

### PME 2 – szczegóły

Źródło: [przydomowemagazyny.gov.pl – o programie](https://przydomowemagazyny.gov.pl/o-programie/).

**Kwoty**
- Magazyn energii: do 30% kosztów kwalifikowanych i maks. 800 zł/kWh.
  - Limit 16 000 zł przy net-billingu, 8 000 zł przy net-meteringu.
- Dodatkowo do 2 000 zł (maks. 50% kosztu), jeśli falownik hybrydowy albo magazyn wyprodukowano w UE.
- Magazyn ciepła: do 1 000 zł.
- Łącznie maks. 19 000 zł na jeden punkt poboru energii (PPE).

**Warunki**
- Pojemność:
  - co najmniej 10 kWh,
  - w Wh co najmniej dwukrotność mocy PV w Wp (np. instalacja 10 kWp wymaga magazynu 20 kWh).
- Zakup, montaż i zgłoszenie do OSD od 1.11.2025.
- Koszt magazynu z montażem maks. 3 000 zł/kWh (bez falownika i EMS).
- Wymagana praca wyspowa, czyli zasilanie awaryjne.
- Wymagany system zarządzania energią (EMS) z funkcjami decyzyjnymi; sama aplikacja wizualizacyjna nie wystarcza.
- Wymogi cyberbezpieczeństwa: NIS2, CRA, RED DA, ETSI EN 303 645.

**Kto składa:** osoba fizyczna będąca stroną umowy kompleksowej, nie na działalność gospodarczą. Wniosek wyłącznie elektronicznie w Generatorze Wniosków o Dofinansowanie (GWD).

**Dokumenty od klienta i od instalatora**
- faktura, ze specyfikacją kosztów, jeśli obejmuje kilka urządzeń,
- potwierdzenie przelewu,
- zaświadczenie OSD na **aktualnym wzorze** z danymi magazynu,
- protokół odbioru na wzorze NFOŚiGW (z nazwą, rodzajem i funkcjami EMS),
- zdjęcia urządzeń i tabliczek znamionowych (weryfikowane automatycznie pod kątem edycji),
- karty produktu magazynu i falownika,
- potwierdzenie rachunku bankowego,
- oświadczenie DNSH,
- pełnomocnictwo, jeśli wniosek składa ktoś inny niż klient (podpis notarialnie poświadczony albo podpis elektroniczny – profil zaufany lub kwalifikowany).

**Czas rozpatrzenia:** ocena do 120 dni roboczych, wypłata do 20 dni roboczych od zawiadomienia o przyznaniu dofinansowania.

**Do sprawdzenia przez ALFA** (moja interpretacja, nie potwierdzona przez źródło):
- Czy dana konfiguracja Huawei spełnia wymóg pracy wyspowej. Gwarancja Huawei wymienia osobne urządzenie Smart Backup Box-B0/B1.
- Czy FusionSolar kwalifikuje się jako EMS w rozumieniu programu.
- Kraj produkcji LUNA2000 i SUN2000 – od tego zależy dodatkowe 2 000 zł za produkcję w UE.

### Ulga termomodernizacyjna – szczegóły

Źródło: art. 26h ustawy o PIT ([Dz.U. 2026 poz. 592](https://api.sejm.gov.pl/eli/acts/DU/2026/592/text.pdf)).

- Do odliczenia od podstawy opodatkowania jest maks. 53 000 zł na podatnika, łącznie na wszystkie budynki.
- Przysługuje właścicielowi lub współwłaścicielowi domu jednorodzinnego.
- Wymagane są faktury od czynnego podatnika VAT (art. 26h ust. 3).
- Nie odlicza się części sfinansowanej z dotacji NFOŚiGW lub WFOŚiGW.
- Przedsięwzięcie trzeba zakończyć w ciągu 3 lat; niewykorzystaną kwotę można odliczać przez 6 lat.
- Wykaz wydatków obejmuje ogniwo fotowoltaiczne i jego montaż, a od 1.01.2025 także magazyn energii ([Dz.U. 2025 poz. 1128](https://api.sejm.gov.pl/eli/acts/DU/2025/1128/text.pdf)).

---

## 5. Wymogi formalne

- **Pozwolenie na budowę – zwolnienie:** instalacje fotowoltaiczne do 150 kW nie wymagają pozwolenia na budowę ani zgłoszenia (art. 29 ust. 4 pkt 3 lit. c Prawa budowlanego, [Dz.U. 2026 poz. 524](https://api.sejm.gov.pl/eli/acts/DU/2026/524/text.pdf)).
- **Instalacje powyżej 6,5 kW** (ten sam przepis) wymagają dwóch kroków:
  - uzgodnienia projektu z rzeczoznawcą do spraw zabezpieczeń przeciwpożarowych,
  - zawiadomienia komendanta powiatowego (miejskiego) PSP; dołącza się projekt i informację ułatwiającą działania ratownicze.
- **Wyjątek:** obiekty wpisane do rejestru zabytków i obszary ochrony konserwatorskiej (art. 29 ust. 7).
- **Uprawnienia instalatora** – Energa-Operator wymaga jednego z trzech dokumentów ([zgłoszenie](https://energa-operator.pl/przylaczenie-do-sieci/przylaczanie-wytworcy-energii/mikroinstalacja/zgloszenie)):
  - certyfikatu UDT dla instalatora OZE (art. 136 ustawy o OZE, [Dz.U. 2026 poz. 68](https://api.sejm.gov.pl/eli/acts/DU/2026/68/text.pdf)),
  - świadectwa kwalifikacyjnego w zakresie dozoru i eksploatacji (potocznie „uprawnienia SEP”),
  - uprawnień budowlanych w specjalności instalacyjnej elektrycznej.
- **Ważność świadectw:** świadectwa kwalifikacyjne tracą ważność po 5 latach od wydania (art. 54 ust. 1aa Prawa energetycznego, [Dz.U. 2026 poz. 43](https://api.sejm.gov.pl/eli/acts/DU/2026/43/text.pdf)). W FAQ warto napisać, że uprawnienia SEP ekipy są aktualne, ale tylko po sprawdzeniu dat.

---

## 6. Gwarancje producentów

### JA Solar (JAM54)

| Model | Gwarancja produktowa | Gwarancja mocy | Źródło |
| --- | --- | --- | --- |
| JAM54D40 (bifacial, podwójne szkło) | 15 lat | 30 lat; −1% w 1. roku, potem −0,4%/rok, 87,4% po 30 latach | Warunki 4.02.2026 (kopia u dystrybutora): [PDF](https://solareon.co.uk/cdn/shop/files/Warranty_JA_Solar_Warranty_2026_EN_-_JAM54D-40-470-LR-TS-MC4__TRACEABLE.pdf?v=13174594505305015811); wersja z 10.05.2024 na [jasolar.com](https://www.jasolar.com/uploadfile/fujian/2025/1017/c533a11cf141e54.pdf) |
| JAM54D41 (full black) | 25 lat | 30 lat | Warunki 4.02.2026 (jw.) |
| JAM54S30 (monofacial) | 12 lat | 25 lat | [jasolar.com, wersja 10.05.2024](https://www.jasolar.com/uploadfile/fujian/2025/1017/c533a11cf141e54.pdf) |
| Pozostałe modele | 12 lat | – | Warunki 4.02.2026 (jw.) |

- Karta katalogowa: [JA Solar datasheet](https://www.jasolar.com/uploadfile/fujian/2025/0718/cf64c1ba049abeb.pdf).
- W FAQ trzeba podać konkretny model, który montuje ALFA, bo gwarancja produktowa różni się w zależności od modelu (12, 15 lub 25 lat).

### Huawei

**Dokumenty źródłowe**
- [Europejska polityka gwarancyjna V1.2](https://solar.huawei.com/admin/asset/v1/pro/view/0037bf38d384473ea477e3ebf9c8f6df.pdf): 15.05.2026, rewizja 31.08.2026; Polska w załączniku 3.
- Warunki „EU warranty condition V3.0” w wersji dystrybutorskiej z 3.04.2025 ([PDF u dystrybutora](https://solsol.eu/de/file/view/3683/huawei_warranty_01-eu-warranty-conditions-distributor-version-20250403_en.pdf)).
- [Strona NL Huawei](https://solar.huawei.com/nl/service-support/warranty-terms-and-conditions/). Polska strona gwarancyjna Huawei zwraca błąd 404.

**Okresy gwarancji**

| Produkt | Gwarancja |
| --- | --- |
| SUN2000-3/4/5/6/8/10KTL-M0/M1 | 120 miesięcy (10 lat), licząc od 180 dni po wysyłce z Huawei. Płatne przedłużenie o 5, 10 lub 15 lat, łącznie do 20 lat (polityka V1.2). |
| LUNA2000-S0 (moduł 5 kWh) | 10 lat albo 16,45 MWh energii oddanej na moduł – co nastąpi pierwsze. Na koniec okresu co najmniej 60% pojemności użytkowej. Przedłużenie niedostępne. |
| LUNA2000-7/14/21-S1 (moduł 6,9 kWh) | Bazowo 5 lat. 15 lat („advanced”), jeśli magazyn nie traci połączenia z FusionSolar SmartPVMS na dłużej niż 6 miesięcy. Limit 28,84 MWh na moduł, 60% pojemności na koniec okresu. |

**Warunki**
- Instalacja przez wykwalifikowanego, przeszkolonego elektryka lub instalatora.
- Montaż w ciągu miesiąca od dostawy.
- Zgłoszenie usterki w ciągu miesiąca.
- Terytorium gwarancji: EOG + Szwajcaria.

**Do FAQ:** gwarancja baterii zależy od lat **i** ilości oddanej energii (MWh). Huawei nie podaje liczby cykli. Dla LUNA2000-S1 stałe połączenie z internetem i FusionSolar warunkuje gwarancję 15-letnią.

---

## 7. O co naprawdę pytają użytkownicy (Google Autocomplete, 3.11.2026)

**Metoda**
- Podpowiedzi pobrano z `suggestqueries.google.com` (parametry `hl=pl`, `gl=pl`) dla fraz startowych, np. „fotowoltaika ile kosztuje”, „fotowoltaika net billing”, „magazyn energii czy się opłaca”, „falownik huawei”, „fotowoltaika zgłoszenie”, „przydomowe magazyny energii”.
- To realne zapytania z Autocomplete, a nie boksy „Podobne pytania” (PAA). Boksów PAA nie udało się pobrać bez przeglądarki lub API wyników wyszukiwania.
- Lokalnie: dla „fotowoltaika kalisz” Google podpowiada m.in. „firma fotowoltaika kalisz” i „fotowoltaika kalisz godziny otwarcia”, co wskazuje na intencję nawigacyjną i lokalną. Dla „fotowoltaika ceków” podpowiedzi nie ma.

| # | Pytanie do FAQ | Podpowiedź Autocomplete, na której się opiera | Intencja | Odpowiedź w sekcji |
| --- | --- | --- | --- | --- |
| 1 | Ile kosztuje fotowoltaika 5, 6, 8 i 10 kW z montażem w 2026 r.? | „fotowoltaika ile kosztuje 5 kw / 6 kw / 8 kw”, „fotowoltaika 10 kw cena z montażem” | transakcyjna | 2.2 |
| 2 | Ile kosztuje fotowoltaika z magazynem energii 10 kWh? | „ile kosztuje fotowoltaika z magazynem energii 10 kw”, „magazyn energii 10kw cena” | transakcyjna | 2.2 |
| 3 | Jaki magazyn do instalacji 10 kW? | „fotowoltaika 10 kw jaki magazyn energii”, „…z magazynem energii 20kw” | doradcza | 4 (warunek 2×kWp w PME2) |
| 4 | Czy fotowoltaika się opłaca w 2026 r.? | „czy fotowoltaika się opłaca w 2026”, „…na nowych zasadach” | informacyjna | 8 |
| 5 | Czy magazyn energii się opłaca? | „magazyn energii czy się opłaca”, „magazyn energii opłacalność” | informacyjna | 8 |
| 6 | Po ilu latach zwraca się fotowoltaika? | „fotowoltaika czas zwrotu”, „fotowoltaika zwrot inwestycji” | informacyjna | 8 |
| 7 | Jak działa net-billing i co to RCE / RCEm? | „fotowoltaika net billing zasady”, „…kalkulator” | informacyjna | 3.3 |
| 8 | Jak wygląda rozliczenie z Energą? | „fotowoltaika energa rozliczenie”, „energa fotowoltaika zgłoszenie” | lokalna / proceduralna | 3.1–3.3 |
| 9 | Kto zgłasza instalację do Energa-Operator i ile to trwa? | „zgłoszenie fotowoltaika energa”, „fotowoltaika energa operator” | proceduralna | 3.2 |
| 10 | Czy potrzebne jest pozwolenie na budowę? | „fotowoltaika pozwolenie czy zgłoszenie”, „fotowoltaika czy potrzebne pozwolenie” | informacyjna | 5 |
| 11 | Kiedy potrzebne jest uzgodnienie ppoż. i zgłoszenie do straży? | „fotowoltaika zgłoszenie do straży / do psp”, „uzgodnienie ppoż fotowoltaika cena” | proceduralna | 5 |
| 12 | Fotowoltaika na gruncie – pozwolenie, odległość od granicy, VAT? | „fotowoltaika na gruncie pozwolenie / odległość od granicy działki / podatek” | informacyjna | 2.3, 5 (odległości nie badano) |
| 13 | VAT 8% czy 23%? | „fotowoltaika vat 8 czy 23” | informacyjna | 2.3 |
| 14 | Jakie dofinansowanie jest w 2026 r.? Czy będzie Mój Prąd 7.0? | „fotowoltaika dofinansowanie 2026”, „…7.0” | informacyjna | 4 |
| 15 | Przydomowe Magazyny Energii 2 – warunki i od kiedy? | „przydomowe magazyny energii czesc 2 / warunki / kiedy start” | informacyjna / transakcyjna | 4 |
| 16 | Czy PV i magazyn można odliczyć w uldze termomodernizacyjnej? | „fotowoltaika ulga termomodernizacyjna 2026”, „…a dofinansowanie” | informacyjna | 4 |
| 17 | Jaka moc instalacji na mój dom? | „fotowoltaika jaka moc na dom”, „ile kosztuje fotowoltaika na dom 150m2” | doradcza | do opisania z doświadczenia ALFA |
| 18 | Ile prądu wyprodukuje 10 kW? Jak działa PV zimą? | „fotowoltaika 10 kw ile wyprodukuje”, „ile prądu produkuje fotowoltaika w zimie” | informacyjna | 8 (PVGIS, miesiące) |
| 19 | Czy fotowoltaika działa, gdy nie ma prądu w sieci? | „czy fotowoltaika działa jak nie ma prądu”, „fotowoltaika z magazynem energii a brak prądu” | informacyjna | 4 (praca wyspowa), Huawei Backup Box |
| 20 | Falownik nie działa / awaria falownika Huawei – co robić? | „awaria falownika huawei”, „falownik nie działa w nocy”, „falownik huawei zmiana wifi” | serwisowa | 6 + kontakt serwisowy ALFA |
| 21 | Jak często robić przegląd instalacji i ile kosztuje serwis? | „fotowoltaika co ile przegląd”, „fotowoltaika serwisowanie cena”, „huawei fotowoltaika serwis” | serwisowa / transakcyjna | do uzupełnienia cennikiem ALFA |
| 22 | Jaka jest gwarancja na panele, falownik i magazyn? | „fotowoltaika gwarancja”, „luna2000-s1”, „falownik huawei sun2000” | informacyjna | 6 |
| 23 | Czy instalację trzeba ubezpieczyć? Co przy pożarze? | „fotowoltaika ubezpieczenie domu”, „fotowoltaika pożar ubezpieczenie”, „czy fotowoltaika na dachu jest bezpieczna” | informacyjna | niezbadane |
| 24 | Fotowoltaika Kalisz – firma, dojazd, godziny | „firma fotowoltaika kalisz”, „fotowoltaika kalisz godziny otwarcia” | lokalna / nawigacyjna | Profil Firmy w Google (pkt 1) |

---

## 8. Okres zwrotu w net-billingu (2025–2026)

### Uzysk lokalny – PVGIS (źródło pierwotne, Komisja Europejska / JRC)

- **Zapytanie:** [PVGIS 5.3 API](https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=51.762&lon=18.091&peakpower=1&loss=14&optimalangles=1&outputformat=json) dla Kalisza (51,762° N, 18,091° E), 1 kWp, straty 14%, dane PVGIS-SARAH3 i ERA5 z lat 2005–2023.
- **Wynik roczny:**
  - kąt optymalny (40°, azymut −3°): **1 085 kWh/kWp/rok**,
  - [35°, południe](https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=51.762&lon=18.091&peakpower=1&loss=14&angle=35&aspect=0&outputformat=json): 1 082 kWh/kWp/rok.
- **Rozkład miesięczny:**
  - grudzień ok. 31 kWh/kWp, styczeń 36,
  - maj 133, czerwiec 132.
- Odpowiada to na pytanie „ile wyprodukuje 10 kW”: ok. 10 800 kWh rocznie przy kącie optymalnym, bez zacienienia.

### Bez magazynu

| Źródło (data) | Założenia | Prosty zwrot |
| --- | --- | --- |
| [Jutroteka](https://jutroteka.pl/fotowoltaika-czy-sie-oplaca-2026/) (29.09.2026, akt. 29.10.2026) | 6 kWp za 28 000 zł; dom 4 000 kWh; autokonsumpcja 30%; prąd 1,10 zł/kWh (PGE G11, taryfy 2026); eksport 0,31 zł/kWh; 1 000 kWh/kWp. Bez wzrostu cen prądu i bez wymiany falownika. | **8,5 roku**; z ulgą (próg 12%) 7,5 roku |
| Jutroteka (jw.) | 8 kWp za 34 000 zł; dom z pompą ciepła 7 000 kWh; autokonsumpcja 35% | **7,2 roku**; z ulgą 6,4 roku |
| [EnergyDock](https://energydock.pl/fotowoltaika-bez-magazynu-2026-czy-sie-oplaca/) (3.10.2026, akt. 12.10.2026) | 6 kW za 22–28 tys. zł; dom 4 000 kWh; 1,16 zł/kWh; eksport 0,31 zł/kWh. Model RCEm – autor zaznacza, że nowi prosumenci mają RCE. | autokonsumpcja 25%: **7–8,9 roku**; 40%: 5,6–7,2 roku |
| [Sobir](https://sobir.pl/czy-fotowoltaika-jeszcze-sie-oplaca-w-2026-roku-net-billing-ujemne-ceny-i-magazyn-energii-prawdziwa-kalkulacja/) (6.09.2026) | 6 kWp za 26 000 zł; autokonsumpcja 30% | **9,2 roku** (zdyskontowany: 16. rok); ze sterowaniem odbiorami (50%) 7,8 roku |

### Z magazynem

| Źródło (data) | Założenia | Prosty zwrot |
| --- | --- | --- |
| Jutroteka (jw.) | 6 kWp + 15,9 kWh za 56 334 zł; autokonsumpcja 50%; dotacja PME2 8 500 zł + ulga 5 740 zł | **14,0 lat** bez wsparcia; 11,9 roku z PME2; 10,5 roku z PME2 i ulgą |
| Sobir (jw.) | 6 kWp + 10 kWh za 48 000 zł; autokonsumpcja ok. 67% | **12,4 roku** prosto. Po uwzględnieniu wymiany baterii w 13. roku – ok. 19. rok; zdyskontowany powyżej 20 lat; NPV po 20 latach −12 907 zł |
| [MDPI Energies 18(24):6615](https://www.mdpi.com/1996-1073/18/24/6615) (recenzowany, 18.12.2025) | 6 kWp + 15 kWh LiFePO4; ceny i taryfy Enea (Szczecin) z sierpnia 2025; **montaż własny na gruncie**; koszt kapitału 3,1%; horyzont 10 lat; bez kosztów serwisu | **8,0 roku** prosto, 9,0 roku zdyskontowany, IRR 5,32%. Autorzy piszą, że wyniki to „upper-bound”. |
| Goryl 2025, cytowany w artykule MDPI | Rzeczywista instalacja PV z magazynem w południowej Polsce; autokonsumpcja 56,3% | 9,0 roku z dofinansowaniem, 11,8 roku bez |

**Synteza do FAQ** (wniosek z powyższych źródeł, nie z jednego źródła):
- Bez magazynu zwrot wynosi typowo ok. **7–9 lat**. Jest krótszy przy wysokiej autokonsumpcji (praca zdalna, pompa ciepła, sterowanie odbiorami).
- Z magazynem zwrot wynosi ok. **10–14 lat** w ujęciu prostym. Krótszy jest z dotacją PME2 i ulgą, dłuższy przy drogim zestawie premium lub konieczności wymiany baterii.
- Magazyn poprawia niezależność i daje zasilanie awaryjne, ale sam z siebie zwykle nie skraca zwrotu.

---

## Potwierdzone przez ALFA (3.11.2026)

Potwierdzone przez zespół projektu na podstawie informacji od firmy; wykorzystane w `src/data/faq.js`:

- ALFA składa zgłoszenie mikroinstalacji do Energa-Operator w imieniu klienta (pełnomocnictwo).
- ALFA załatwia uzgodnienie z rzeczoznawcą ppoż. i zawiadomienie PSP dla instalacji powyżej 6,5 kW.
- ALFA przygotowuje dokumenty instalatora do PME 2 (m.in. protokół odbioru) i do ulgi termomodernizacyjnej.
- Dojazd na oględziny i wycenę w Kaliszu i powiecie kaliskim jest bezpłatny.
- Montaż i serwis wykonuje własna ekipa, bez podwykonawców.
- ALFA montuje zestawy z zasilaniem awaryjnym (Huawei Backup Box).

Ceny w FAQ to widełki rynkowe z sekcji 2.2, nie cennik ALFA.

## Ograniczenia

- **Ceny:** brak raportu IEO 2026. Dane IEO dotyczą 2024 r. i nie wiadomo, czy są netto czy brutto. Ceny 2026 pochodzą ze stron firm i serwisów (źródła wtórne) i mocno się różnią – Zenergy podaje wartości 1,5–2× wyższe niż VoltValue czy eu-panele. Ceny per kWp z VoltValue to moje przeliczenie widełek.
- **Ceny magazynów 5 kWh:** brak wiarygodnych danych z 2026 r. poza pojedynczą widełką Zenergy.
- **VAT:** interpretacje indywidualne wiążą tylko wnioskodawcę. Strony WIS 0111-KDSB1-2.440.318.2026.2.MD nie pobrano z Eureki MF, tylko z serwisu taxmachine.
- **Harmonogram Google** (czerwiec i sierpień 2026 dla Search Console) i cytat Muellera pochodzą z Search Engine Roundtable. Pierwotna notka na stronie FAQPage została usunięta (301).
- **AI Mode:** nie znalazłem osobnych wytycznych dla AI Mode poza stroną „AI features” i przewodnikiem optymalizacji.
- **PME:**
  - Dla PME cz. I NFOŚiGW podaje koniec naboru 8.05.2026, a strona PME 19.06.2026.
  - PME 2 może zakończyć się wcześniej po wyczerpaniu budżetu; w dniu sprawdzenia nie znalazłem komunikatu o zamknięciu.
  - Nie zweryfikowałem, czy Huawei FusionSolar jest uznawany za EMS w rozumieniu PME 2, czy konfiguracja SUN2000-KTL-M1 + LUNA2000 spełnia wymóg pracy wyspowej bez Backup Boxa, ani gdzie produkowane są urządzenia Huawei.
- **Czyste Powietrze:** nie znalazłem daty końca programu.
- **Gwarancje:**
  - Warunki JA Solar z 4.02.2026 i Huawei V3.0 (3.04.2025) to kopie hostowane u dystrybutorów, a nie na stronach producentów.
  - Polska strona gwarancyjna Huawei zwraca 404.
  - Na jasolar.com jest wersja z 10.05.2024.
- **Net-billing:** przełożenie 15-minutowej RCE na godzinowe rozliczenie opisuje tylko źródło wtórne. Ustawa (art. 4 ust. 2b) mówi o bilansowaniu godzinowym.
- **Energa-Operator:** strona „zgłoszenie” zawiera nieaktualne zapisy o opustach. Informację o opłacie za niezasadny przyjazd pobrano ze strony procesu dla konsumenta, ale bez kwoty.
- **Pytania użytkowników:** to dane z Google Autocomplete (nieoficjalny endpoint, wynik zależny od lokalizacji i czasu), nie boksy PAA ani wolumeny wyszukiwań.
- **Okres zwrotu:** to proste modele z jednego roku (bez degradacji, wzrostu cen i wymiany falownika). Artykuł MDPI zakłada montaż własny i ceny z sierpnia 2025, więc jest optymistyczny. Żadne źródło nie liczy zwrotu dla taryfy Energa ani dla uzysku z Kalisza – PVGIS (1 085 kWh/kWp) jest nieco wyższy niż typowe w kalkulacjach 1 000 kWh/kWp.
- **Niezbadane:** odległość instalacji naziemnej od granicy działki, ubezpieczenie, koszt uzgodnienia ppoż., ceny serwisu.
