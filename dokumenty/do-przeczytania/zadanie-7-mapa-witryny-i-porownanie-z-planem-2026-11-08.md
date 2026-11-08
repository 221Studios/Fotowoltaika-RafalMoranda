# Zadanie 7 — mapa naszej witryny i porównanie z planem

Stan: 8 listopada 2026. Sprawdzono aktualne pliki projektu, nawigację, składane komponenty stron, dane realizacji i generator sitemap. Punkt odniesienia kodu: commit `173280c` oraz bieżące pliki robocze. To przegląd architektury w repozytorium, bez testu wizualnego w przeglądarce i bez potwierdzenia wdrożenia produkcyjnego.

**Wniosek: zadanie 7 jest w dużej części już zrealizowane. Nasza struktura jest szersza i bardziej konkretna niż pierwotna propozycja. Wymaga doprecyzowania ról dwóch niedokończonych stron i miejsca magazynów energii, a nie przebudowy całej witryny.**

Zgodnie z ustaleniem użytkownika pozostałe podstrony traktujemy jako ukończone projektowo, a `/fotowoltaika/` i `/kalisz/` jako w trakcie. Nie wracamy do Figmy ani historycznego problemu „O nas”. Ukończenie projektu strony nie oznacza potwierdzenia wszystkich deklaracji handlowych ani odbioru produkcyjnego.

## 7.1. Hierarchia, która już istnieje

```text
Strona główna /
├── Oferta
│   ├── Fotowoltaika /fotowoltaika/ — w trakcie
│   │   ├── Magazyny energii — obecnie treści wewnątrz oferty
│   │   └── Dla domu i firmy — obecnie wspólna oferta
│   ├── Instalacje elektryczne /elektryka/
│   └── Monitoring CCTV /cctv/
├── Obsługa lokalna /kalisz/ — w trakcie
├── Realizacje /realizacje/
│   └── 27 podstron /realizacje/{slug}/
├── O firmie /o-nas/
└── Kontakt i wycena /kontakt/
    └── Pytania i odpowiedzi /kontakt/faq/
```

„Oferta” jest tutaj grupą funkcjonalną, nie istniejącą dodatkową stroną `/oferta/`. Nie potrzebujemy jej tworzyć, aby utrzymać ten podział. FAQ ma obecnie adres pod kontaktem; jego funkcja informacyjna wykracza poza sam kontakt.

Generator sitemap zawiera 9 stałych adresów i 27 stron realizacji, łącznie **36 adresów treści**. W danych jest **27 realizacji, w tym 4 z Kalisza i 12 z pozycją „Magazyn energii” w wyposażeniu**. Główne FAQ ma **15 pytań**. Liczby opisują zawartość repozytorium, nie indeks Google ani potwierdzoną liczbę wykonanych zleceń.

### Porównanie z przesłaną propozycją

| Element planu | Co mamy w naszym projekcie | Ocena |
| --- | --- | --- |
| Strona główna | Oferta PV, elektryki i CCTV, obszar działania, opinie, ostatnie realizacje, wiarygodność i wycena | Zrealizowane; szerszy zakres niż w szkicu |
| Fotowoltaika Kalisz — główna podstrona SEO | Dwie strony: `/fotowoltaika/` i `/kalisz/`; obie mają obecnie tytuły związane z fotowoltaiką w Kaliszu | Funkcja istnieje; trzeba wskazać stronę prowadzącą i rozdzielić role |
| Magazyny energii | Treści w fotowoltaice, osobny kafel urządzeń, pytania FAQ, 12 wpisów realizacji z magazynem, temat kontaktu WhatsApp | Temat obecny; brak własnej strony i wyraźnego wejścia w nawigacji |
| Fotowoltaika dla firm — do potwierdzenia | Wspólna oferta „dla domu i biznesu”, wzmianki w kontakcie i temat WhatsApp dla firmy | Obsłużone ogólnie; osobna podstrona nie jest teraz konieczna |
| Realizacje | Katalog, filtrowanie po roku, 27 szczegółowych stron z galeriami i danymi | Zrealizowane w większym zakresie niż szkic |
| O firmie | Osobna strona `/o-nas/` | Zrealizowane |
| Poradnik i FAQ | Rozbudowane FAQ oraz treści poradnikowe w usługach; brak oddzielnego bloga | FAQ zrealizowane; blog jest opcją rozwoju, nie wymogiem tego etapu |
| Kontakt / wycena | Osobna strona, telefon, e-mail, godziny, lista informacji do wyceny; globalny WhatsApp | Funkcja istnieje. Nie jest to formularz wysyłany przez witrynę |
| Dodatkowe usługi | Osobne `/elektryka/` i `/cctv/`, dostępne z oferty, menu i stopki | Projekt wykracza poza pierwotny plan |

Nie tworzymy osobnej podstrony dla każdej odmiany frazy. Nie ma też potrzeby budowania bloga tylko po to, aby odtworzyć słowo „poradnik” ze szkicu. Priorytetem jest czytelne przypisanie istniejących treści do potrzeb klienta. Google zaleca logiczną organizację witryny i opisowe adresy, ale nie wymaga zmiany całej struktury działającej strony. [Przewodnik Google — uporządkowanie witryny](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pl#organize-your-site).

## 7.2. Role i warianty istniejących adresów

Obecnie `/fotowoltaika/` ma tytuł „Fotowoltaika w Kaliszu — montaż i serwis”, a `/kalisz/` — „Fotowoltaika w Kaliszu i okolicach”. Strona główna ma szeroką ofertę instalacji, podczas gdy jej domyślny tytuł SEO także eksponuje „Fotowoltaika Kalisz”. To zbieżność kierunku treści do uporządkowania podczas kończenia dwóch stron. Bez danych wyszukiwania nie stwierdzamy, że występuje już problem konkurowania tych adresów w Google.

| Wariant | `/fotowoltaika/` | `/kalisz/` | Ocena robocza |
| --- | --- | --- | --- |
| A — rekomendowany do dalszego projektowania | Główna strona sprzedażowa PV i główna intencja „fotowoltaika Kalisz”: dobór, montaż, urządzenia, etapy, dowody i wycena | Lokalna strona obsługi Kalisza: dojazd z Cekowa, lokalne realizacje i odnośniki do PV, elektryki oraz CCTV | Pasuje do obecnego podziału oferty na stronie głównej. Wymaga poszerzenia roli Kalisza poza samą PV |
| B — możliwy bez zmiany adresów | Ogólna oferta PV dla domu i firmy w obsługiwanym regionie; nacisk na technologię i zakres | Główna lokalna strona sprzedażowa „fotowoltaika Kalisz”, z pełną odpowiedzią dla osoby szukającej instalatora | Możliwy, jeśli chcemy świadomie rozwijać lokalną stronę wyłącznie pod PV; wymaga konsekwentnego linkowania do niej |

Na potrzeby mapy poniżej przyjęto **wariant A jako propozycję projektową**, nie wdrożoną zmianę. Zachowujemy obecne adresy. Nie dokładamy trzeciego adresu `/fotowoltaika-kalisz/` o tej samej funkcji. Nie ma potrzeby wracać do historycznego wariantu przenoszenia „O nas”.

### Magazyny energii — dwa dopuszczalne zakresy

- **Na obecny etap:** wyraźna sekcja w `/fotowoltaika/`, obejmująca dobór magazynu, zgodność z istniejącym falownikiem, przykłady instalacji oraz CTA „Zapytaj o dobór magazynu”. Warto nadać jej kotwicę, np. `#magazyny-energii`; taka kotwica jest propozycją, nie istniejącym potwierdzonym adresem sekcji.
- **Opcjonalne rozszerzenie:** `/magazyny-energii/`, jeśli ALFA potwierdzi samodzielną ofertę modernizacji istniejących instalacji i przygotujemy wystarczająco odrębny zakres informacji. To jedyna istotniejsza osobna podstrona usługowa ze szkicu, której obecnie nie ma. Nie uznajemy jej braku automatycznie za błąd.

„Fotowoltaika dla firm” może początkowo pozostać konkretną sekcją na stronie oferty. Osobne `/fotowoltaika-dla-firm/` ma sens dopiero przy potwierdzonym zakresie i odrębnych potrzebach odbiorcy. Wzmianka w tekście nie dowodzi wszystkich możliwości wykonawczych firmy.

## 7.3. Mapa podstron — intencja, fraza, CTA, status

Frazy są przypisaniem redakcyjnym do przyszłych prac, a nie zmierzonymi pozycjami ani potwierdzeniem popytu. CTA „docelowe” oznacza rekomendację, jeśli nie istnieje obecnie w treści konkretnej podstrony.

| Podstrona | Główna intencja | Fraza / temat prowadzący | CTA | Status |
| --- | --- | --- | --- | --- |
| Strona główna `/` | Poznać firmę i wybrać właściwą usługę | ALFA Rafał Morańda; instalacje dla domu i firmy w Kaliszu | Obecne: „Umów bezpłatną wycenę”, „Zobacz realizacje” | Gotowa projektowo; zachować rolę wejścia do całej oferty |
| Fotowoltaika `/fotowoltaika/` | Wybrać wykonawcę i uzyskać ofertę PV | fotowoltaika Kalisz; montaż fotowoltaiki | Obecne: telefon i e-mail w treści; docelowo wyraźne „Poproś o wycenę fotowoltaiki” | W trakcie; proponowana główna strona PV, do dopracowania sekcje i CTA |
| Kalisz `/kalisz/` | Sprawdzić lokalną obsługę i wykonane prace, przejść do wybranej usługi | obsługa Kalisza; lokalne realizacje i dojazd | Obecne: „Zapytaj o obsługę w Kaliszu”, telefon i „Umów bezpłatną wycenę” | W trakcie; obecnie strona PV, docelowo lokalne uzupełnienie oferty w wariancie A |
| Elektryka `/elektryka/` | Zamówić instalację elektryczną, modernizację lub pomiary | elektryk Kalisz; instalacje i pomiary elektryczne | Obecne: przejście do `/kontakt/` przy wycenie | Gotowa projektowo; osobna usługa |
| CCTV `/cctv/` | Dobrać i zamontować monitoring | monitoring CCTV Kalisz; montaż kamer | Obecne: przycisk wyceny do `/kontakt/` | Gotowa projektowo; osobna usługa |
| Realizacje `/realizacje/` | Zobaczyć doświadczenie i wybrać przykład podobnej inwestycji | realizacje fotowoltaiki Kalisz i okolice | Obecne: wejście w realizację; kontakt przez globalną nawigację i WhatsApp | Gotowa projektowo; opcjonalne CTA wyceny w katalogu |
| Szczegóły realizacji `/realizacje/{slug}/` — 27 adresów | Sprawdzić konkretny montaż, zdjęcia, miejsce i wyposażenie | miejscowość + rzeczywiste parametry realizacji | Obecne: następna realizacja i kontakt globalny; docelowo „Zapytaj o podobną instalację” | Gotowy szablon i 27 rekordów; można wzmocnić przejście z dowodu do wyceny |
| O firmie `/o-nas/` | Sprawdzić wykonawcę i wiarygodność | ALFA Rafał Morańda; firma instalacyjna Ceków | Obecnie kontakt globalny; docelowo „Porozmawiaj o swojej instalacji” | Gotowa projektowo; nie wymaga zmiany adresu |
| Kontakt `/kontakt/` | Rozpocząć rozmowę i wycenę | kontakt ALFA Rafał Morańda; wycena instalacji | Obecne: telefon, e-mail, globalny WhatsApp | Gotowa projektowo; formularz nie jest warunkiem kompletności architektury |
| FAQ `/kontakt/faq/` | Wyjaśnić koszty, formalności i obawy przed kontaktem | pytania o PV, ceny, magazyny, serwis i formalności | Obecnie kontakt globalny; docelowo kontekstowe przejście do oferty lub wyceny | Gotowa projektowo; 15 pytań, oddzielny blog nie jest wymagany |

### Elementy warunkowe — nie istnieją jako osobne strony

| Podstrona | Główna intencja | Fraza / temat prowadzący | CTA | Status |
| --- | --- | --- | --- | --- |
| Magazyny energii — obecnie sekcja PV; ewentualnie `/magazyny-energii/` | Dobrać magazyn lub rozbudować istniejącą PV | magazyny energii Kalisz | „Zapytaj o dobór magazynu” | Temat obecny; docelowa forma do dopracowania z ofertą PV |
| Dla firm — obecnie wspólna oferta PV; ewentualnie `/fotowoltaika-dla-firm/` | Dobrać rozwiązanie do profilu zużycia firmy | fotowoltaika dla firm Kalisz | „Porozmawiaj o instalacji dla firmy” | Osobna strona opcjonalna, zakres do potwierdzenia |
| Poradnik — ewentualnie `/poradnik/` i artykuły | Uzyskać szczegółową odpowiedź informacyjną | Temat konkretnego artykułu, bez dublowania stron usług | Przejście do odpowiedniej usługi / konsultacji | Etap treści później; obecnie funkcję częściowo realizują FAQ i poradniki w usługach |

## Plan nawigacji i linkowania

**Obecnie:** menu zawiera Kalisz, Fotowoltaikę, Realizacje, CCTV, Elektrykę, O nas i FAQ oraz osobny blok Kontakt. Logo prowadzi do strony głównej. Stopka powtarza wszystkie osiem wejść i zawiera aktywne linki telefonu oraz e-maila. Na stronie głównej trzy karty prowadzą do trzech usług; mapa prowadzi do Kalisza, sekcja realizacji do katalogu, a blok firmy do „O nas”. To spójny szkielet nawigacji.

**Propozycja przy dalszym kończeniu projektu:** zachować te wejścia, ale rozważyć kolejność Fotowoltaika → Elektryka → Monitoring CCTV → Realizacje → Kalisz i okolice → O nas → FAQ, z wyeksponowanym Kontaktem. „Monitoring CCTV” i „Kalisz i okolice” wyraźniej opisują cel kliknięcia niż same skróty. Nie zmieniamy teraz menu; nie jest to konieczny warunek ukończenia zadania 7.

Docelowe powiązania treści:

- Strona główna → trzy główne usługi, Kalisz, realizacje, firma i kontakt — zasadniczo obecne.
- Fotowoltaika → szczegóły dobranych realizacji, magazyny energii, odpowiednie FAQ, Kalisz i wycena. Obecna lista sześciu przykładów w `PhotovoltaicsLocalService` pokazuje parametry, ale nie daje linków do szczegółów — warto dodać je przy kończeniu tej strony.
- Kalisz → oferta PV oraz, w wariancie A, elektryka i CCTV; lokalne realizacje i kontakt. Obecnie link do PV, cztery realizacje Kalisza i kontakt są już w kodzie.
- Realizacja → oferta właściwej usługi i „Zapytaj o podobną instalację”, obok istniejącego przejścia do następnej realizacji.
- O firmie i FAQ → kontakt lub właściwa usługa w naturalnym miejscu tekstu. Kontakt globalny już istnieje; dodatkowe CTA w treści to usprawnienie, nie brak całej funkcji.
- Kontakt → telefon, e-mail i WhatsApp. Jeśli później dodamy formularz, dopiero po zapewnieniu rzeczywistego odbioru i pomiaru z zadania 6.

Angielskie trasy techniczne `/research/`, `/journal/`, `/partnerships/`, `/firm/`, `/work/`, `/work/{slug}/`, `/contact/` i `/contact/faq/` są w kodzie stronami pomocniczymi kierującymi do polskich odpowiedników. Nie są dodatkowymi usługami, poradnikiem ani elementami docelowego menu. Generator sitemap ich nie zawiera. W tym zadaniu nie zmieniamy ich obsługi.

## Co rzeczywiście pozostało do zrobienia

| Priorytet | Rzecz do dopracowania | Kiedy uznamy za załatwioną |
| --- | --- | --- |
| 1 | Utrzymać jeden wyraźny podział ról `/fotowoltaika/`, `/kalisz/` i strony głównej | Strona PV odpowiada na wybór wykonawcy i oferty; Kalisz wnosi odrębną lokalną wartość; nagłówki, tytuły i linki odpowiadają wybranemu wariantowi |
| 2 | Zapewnić czytelne miejsce magazynów energii | Użytkownik szukający samego magazynu łatwo znajduje zakres, kompatybilność, przykłady i właściwe CTA — w sekcji PV albo na uzasadnionej osobnej stronie |
| 3 | Domknąć ścieżkę z oferty / dowodów do kontaktu | Przykłady z PV mają linki do realizacji; można przejść z realizacji do pytania o podobne rozwiązanie. Dodatkowe CTA na gotowych stronach traktujemy jako drobne usprawnienie |
| 4 | Dopasować obietnicę sposobu kontaktu do rzeczywistej funkcji | FAQ Kalisza przestaje odsyłać do nieistniejącego formularza albo rzeczywiście powstaje obsługiwany formularz. Telefon, e-mail i WhatsApp już zapewniają kontakt |

Nie rozszerzamy teraz zadania na ponowny audyt każdej ceny, deklaracji, opinii czy parametru. W szablonie realizacji są również wspólne opisy i dane generowane, więc jego ukończenie wizualne nie oznacza, że każda deklaracja jest potwierdzona dla każdego wpisu. Weryfikacja treści pozostaje warunkiem ich publikacji; nie jest powodem do przebudowy mapy witryny.

## Status zadania 7

**Opracowanie wykonane:** mapa witryny, funkcje podstron, frazy prowadzące, CTA, aktualne statusy, warianty ról URL i plan nawigacji są zapisane. **Projekt strony w większości realizuje plan i przewyższa jego szczegółowość.** Do dalszej pracy przechodzą przede wszystkim dwie wskazane przez użytkownika podstrony: Fotowoltaika i Kalisz. Osobna strona magazynów, strona dla firm i blog są decyzjami zakresowymi, a nie automatycznymi zaległościami.

Nie zmieniono plików aplikacji, adresów ani menu. Nie wykonano wdrożenia ani testów produkcyjnych.

Źródła w projekcie: [sitemap](../../src/app/sitemap.js), [menu](../../src/components/Menu/Menu.jsx), [stopka](../../src/components/Footer/Footer.jsx), [strona główna](../../src/app/page.js), [fotowoltaika](../../src/app/fotowoltaika/page.js), [Kalisz](../../src/app/kalisz/page.js), [dane realizacji](../../src/data/installations.js), [FAQ](../../src/data/faq.js), [kontakt](../../src/app/kontakt/page.js) i komponenty wczytane przez wymienione strony.
