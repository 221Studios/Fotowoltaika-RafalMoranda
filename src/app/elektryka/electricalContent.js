export const ELECTRICAL_UPDATED_AT = "2026-11-03";

export const ELECTRICAL_SCOPE_ITEMS = [
  {
    title: "Nowa instalacja w domu",
    copy: "Trasy przewodów, bruzdy, puszki, osprzęt i biały montaż — od stanu surowego po rozdzielnicę i pomiary odbiorcze.",
  },
  {
    title: "Wymiana starej instalacji",
    copy: "Zastępujemy przewody aluminiowe i układ dwuprzewodowy (TN-C) instalacją z przewodem ochronnym i ochroną różnicowoprądową.",
  },
  {
    title: "Rozdzielnice",
    copy: "Wymieniamy tablice z bezpiecznikami topikowymi na rozdzielnice z wyłącznikami nadprądowymi, różnicowoprądowymi i ochroną przeciwprzepięciową.",
  },
  {
    title: "Pomiary z protokołem",
    copy: "Pomiary odbiorcze po nowej instalacji lub zmianach oraz okresowa kontrola instalacji co 5 lat — z podpisem osoby z kwalifikacjami dozoru (D).",
  },
  {
    title: "Płyty indukcyjne i AGD",
    copy: "Gniazdo lub obwód 400 V, podłączenie płyty i piekarnika oraz wpis do karty gwarancyjnej albo poświadczenie montażu.",
  },
  {
    title: "Uziomy i WLZ",
    copy: "Uziomy szpilkowe i fundamentowe, połączenia wyrównawcze oraz wewnętrzna linia zasilająca od złącza do rozdzielnicy.",
  },
  {
    title: "Pompa ciepła i ładowarka EV",
    copy: "Sprawdzamy moc przyłączeniową i rozdzielnicę, prowadzimy osobny obwód z zabezpieczeniami dobranymi do urządzenia.",
  },
  {
    title: "Firmy, hale i gospodarstwa",
    copy: "Instalacje w budynkach usługowych, magazynach, warsztatach i budynkach gospodarczych — także zasilanie trójfazowe maszyn.",
  },
  {
    title: "Usuwanie awarii",
    copy: "Szukamy przyczyny wybijających zabezpieczeń, zaników fazy i przegrzanych połączeń, a po naprawie sprawdzamy instalację pomiarami.",
  },
];

export const ELECTRICAL_TESTS = [
  "oględziny instalacji, osprzętu i zabezpieczeń",
  "ciągłość przewodów ochronnych i połączeń wyrównawczych",
  "rezystancja izolacji przewodów",
  "samoczynne wyłączenie zasilania — w układzie TN pomiar impedancji pętli zwarcia",
  "działanie wyłączników różnicowoprądowych",
  "rezystancja uziemienia, jeśli instalacja ma uziom",
];

export const INDUCTION_WARRANTY = [
  {
    brand: "Amica",
    requirement:
      "Podłączenie przez instalatora z wymaganymi uprawnieniami, potwierdzone podpisem i pieczęcią w karcie gwarancyjnej. Bez wpisu gwarancja wygasa.",
  },
  {
    brand: "Electrolux",
    requirement:
      "Brak papierowej karty. Wymagane poświadczenie montażu w dowolnej formie z numerem uprawnień instalatora, datą i podpisem.",
  },
  {
    brand: "Bosch",
    requirement:
      "Montaż wyłącznie przez osoby uprawnione pod rygorem utraty gwarancji. Warunki nie wymagają pieczątki w karcie.",
  },
  {
    brand: "Samsung",
    requirement:
      "Brak wymogu wpisu instalatora. Gwarancja nie obejmuje wad wynikających z niewłaściwej instalacji lub podłączenia.",
  },
];

export const ELECTRICAL_PRICES = [
  { service: "Punkt elektryczny (gniazdo, oświetlenie) — robocizna", price: "90–180 zł netto" },
  { service: "Instalacja w domu 100–150 m² z materiałem", price: "ok. 14–45 tys. zł brutto" },
  { service: "Wymiana instalacji w mieszkaniu ok. 50 m²", price: "ok. 10–16 tys. zł brutto" },
  { service: "Wymiana lub modernizacja rozdzielnicy", price: "800–2500 zł brutto" },
  { service: "Pomiary elektryczne domu jednorodzinnego", price: "400–1200 zł" },
  { service: "Podłączenie płyty indukcyjnej do gotowego obwodu", price: "140–450 zł" },
  { service: "Uziom szpilkowy z materiałem", price: "600–1500 zł, w trudnym gruncie do 3500 zł" },
];

export const SERVICE_AREA = [
  "Kalisz",
  "Ceków-Kolonia",
  "Opatówek",
  "Koźminek",
  "Lisków",
  "Mycielin",
  "Stawiszyn",
  "Blizanów",
  "Żelazków",
  "Godziesze Wielkie",
  "Szczytniki",
  "Brzeziny",
];

export const ELECTRICAL_FAQ_ITEMS = [
  {
    question: "Czy dom jednorodzinny musi mieć pomiary elektryczne co 5 lat?",
    answer:
      "Tak. Art. 62 ust. 1 pkt 2 Prawa budowlanego wymaga kontroli instalacji elektrycznej co najmniej raz na 5 lat — także w domu jednorodzinnym. Domy jednorodzinne są zwolnione tylko z części kontroli rocznej, która i tak nie obejmuje elektryki. Obowiązek ciąży na właścicielu lub zarządcy budynku.",
  },
  {
    question: "Kto może podpisać protokół z pomiarów i kontroli instalacji?",
    answer:
      "Kontrolę okresową może wykonać osoba ze świadectwem kwalifikacyjnym na stanowisku dozoru (D) albo z uprawnieniami budowlanymi w specjalności instalacyjnej elektrycznej. Same pomiary wymagają świadectwa z zakresem prac kontrolno-pomiarowych. W protokole powinny być wyniki liczbowe każdej próby, użyty przyrząd, data i numer świadectwa osoby podpisującej.",
  },
  {
    question:
      "Czy do zawiadomienia o zakończeniu budowy domu trzeba dołączyć protokół pomiarów elektrycznych?",
    answer:
      "Nie. Przy zawiadomieniu o zakończeniu budowy domu jednorodzinnego art. 57 ust. 1b Prawa budowlanego zwalnia z dołączania protokołów badań i sprawdzeń instalacji. Kierownik budowy musi jednak zapewnić wykonanie wymaganych prób (art. 22 pkt 7), a przy wniosku o pozwolenie na użytkowanie protokół jest już wymagany.",
  },
  {
    question:
      "Jakie dokumenty podpisuje elektryk przy przyłączeniu nowego domu do sieci Energa-Operator?",
    answer:
      "Po wykonaniu instalacji składa się „Oświadczenie o gotowości instalacji przyłączanej”. Podpisuje je osoba ze świadectwem dozoru w zakresie kontrolno-pomiarowym albo z uprawnieniami budowlanymi. Na tej podstawie Energa-Operator wydaje „Oświadczenie o wykonaniu przyłączenia”, z którym zawierasz umowę ze sprzedawcą energii i umawiasz montaż licznika.",
  },
  {
    question: "Czy płytę indukcyjną można podłączyć do jednej fazy?",
    answer:
      "Część płyt na to pozwala, ale zwykle z ograniczeniem mocy, a decyduje instrukcja konkretnego modelu. Przed podłączeniem sprawdzamy dokumentację płyty, przekrój przewodu i zabezpieczenie obwodu. Jeśli w kuchni nie ma zasilania 400 V, wyceniamy nowy obwód z rozdzielnicy.",
  },
  {
    question: "Kiedy wymienić rozdzielnicę z bezpiecznikami topikowymi?",
    answer:
      "Gdy instalacja nie ma wyłącznika różnicowoprądowego, bezpieczniki wymienia się po każdym zadziałaniu, zaciski są przebarwione lub ciepłe, a w domu pojawia się nowy duży odbiornik — pompa ciepła, płyta indukcyjna, ładowarka auta lub fotowoltaika. Po wymianie rozdzielnicy wykonujemy pomiary, bo to zmiana w instalacji.",
  },
  {
    question: "Czy przygotujecie instalację pod pompę ciepła lub ładowarkę samochodu?",
    answer:
      "Tak. Sprawdzamy moc przyłączeniową, stan rozdzielnicy i trasę przewodu, wykonujemy osobny obwód z zabezpieczeniem nadprądowym i różnicowoprądowym dobranym do urządzenia, a po podłączeniu robimy pomiary. Jeśli moc przyłączeniowa jest za mała, wskazujemy, o jaką zmianę wystąpić do Energa-Operator.",
  },
  {
    question: "Jak sprawdzić, czy elektryk ma ważne uprawnienia?",
    answer:
      "Poproś o świadectwo kwalifikacyjne i sprawdź stanowisko (E — eksploatacja, D — dozór), grupę 1, zakres prac i datę ważności. Świadectwa są ważne 5 lat, a dokumenty bezterminowe straciły ważność 3 lipca 2026 r. (poza wyjątkami z ustawy). Świadectwa wydają komisje kwalifikacyjne powoływane przez Prezesa URE — często działające przy SEP.",
  },
];
