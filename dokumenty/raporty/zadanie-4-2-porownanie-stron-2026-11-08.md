# Krok 4.2 — porównanie pięciu stron konkurentów

Data: 8 listopada 2026. Zakres: G-PRO, 3DSmart, Aurelum, PROWABLE i Ekosolary. Odczyt stron głównych oraz wybranych podstron PV, kontaktu i realizacji; osobna kontrola mobilnego nagłówka i wyników Google. Nie wysyłano formularzy, nie wykonywano połączeń i nie zmieniano strony ALFA.

## Jak czytać wyniki

- **Title SEO** to tag `title` pobranego HTML, nie automatycznie tekst pokazywany przez Google. **H1** pochodzi z HTML; brak tagu w statycznym źródle nie przesądza o DOM zmienianym przez JavaScript.
- Opinie, referencje, parametry i partnerstwa oceniono pod kątem obecności oraz możliwości identyfikacji źródła. Nie zweryfikowano niezależnie ich autentyczności ani efektów instalacji.
- Formularze: liczba pól danych bez technicznych pól ukrytych i honeypotów; zgody oraz CAPTCHA podane osobno. Wymaganie wynika z atrybutów HTML/ARIA i etykiet, nie z testu wysłania. Modale mogą wymagać otwarcia w interfejsie.
- Mobile: rzeczywisty odczyt strony w przeglądarce z szerokością 390 i wysokością 844 px; to symulacja rozmiaru ekranu, nie test fizycznego telefonu. Sprawdzono pierwszy ekran i dostęp do kontaktu; nie wykonano pełnego testu użyteczności wszystkich podstron. Tymczasowe ustawienie rozmiaru przywrócono po kontroli.
- Wnioski o czytelności lub przewadze konkretnego elementu są oceną audytową. Nie zmierzono konwersji, szybkości ani wpływu elementów na pozycje.

## 1. Pozycje Google i docelowe URL

Źródło: [fotowoltaika Kalisz, parametr pws=0](https://www.google.com/search?q=fotowoltaika+Kalisz&pws=0), publiczny interfejs Google, desktop, 8 listopada 2026. Stopka potwierdziła „Wyniki nie są spersonalizowane”. Przeglądarka pozostawała zalogowana; fizyczna lokalizacja urządzenia nie została potwierdzona. Nagłówek wyników wskazywał Kalisz. Liczymy zwykłe wyniki stron, bez bloku „Miejsca”, „Podobnych witryn”, AI i pytań.

| Firma | Pozycja organiczna w tym odczycie | Docelowy URL organiczny | Dodatkowa widoczność / URL badania |
| --- | --- | --- | --- |
| G-PRO | **2** | https://g-pro.com.pl/ — strona główna | Pierwsza karta w bloku „Miejsca”. |
| 3DSmart | **3** | https://3dsmart.pl/ — strona główna | Także moduł „Podobne witryny”. |
| Aurelum | | | Brak w sprawdzonej pierwszej dziesiątce zwykłych wyników. Druga karta w bloku „Miejsca”; badano https://www.aurelum.pl/. |
| PROWABLE | | | Brak w sprawdzonej pierwszej dziesiątce zwykłych wyników. Trzecia karta w bloku „Miejsca”; badano https://www.prowable.pl/. |
| Ekosolary | | | Brak w sprawdzonej pierwszej dziesiątce zwykłych wyników. Badano https://ekosolary.pl/; w kroku 4.1 strona występowała w innym, spersonalizowanym odczycie. |

Puste pozycje nie oznaczają braku indeksacji ani nieobecności w dalszych wynikach. Nie zastępujemy ich pozycjami Map. Wcześniejsze wyniki z 4.1 i Map są oddzielnymi obserwacjami.

Kontrolna kolejność dziesięciu zwykłych wyników: Brewa → G-PRO → 3DSmart → Oferteo → PVhurt → FotowoltaikaOnline → EcoRun → Multi Energa → SunlightPro → SunSol. To zapis jednego widoku, nie trwały ranking.

## 2. G-PRO ECO ENERGY

Źródła: [home](https://g-pro.com.pl/), [PV](https://g-pro.com.pl/oferta/fotowoltaika/), [realizacje](https://g-pro.com.pl/realizacje/). [Szczegółowy odczyt HTML](konkurencja-4-2-gpro-3dsmart-2026-11-08.md).

| Element | Obserwacja |
| --- | --- |
| Title SEO | `Fotowoltaika, pompy ciepła i dachy - Kalisz \| G-PRO ECO ENERGY` |
| H1 | `Fotowoltaika, pompy ciepła i dachy od jednego wykonawcy` |
| Oferta | PV, dachy, pompy ciepła, magazyny, klimatyzacja, EV, monitoring/alarmy, farmy; deklaruje własne ekipy i jedną firmę odpowiedzialną za całość. |
| Treść | Jasno opisuje zakres i zasięg. Oferta PV wyjaśnia dobór mocy, dach/grunt, dom/firma oraz finansowanie. W sprawdzonej próbie brakuje rozwiniętego FAQ, cennika i konkretnych terminów. |
| Realizacje | Dużo zdjęć i osobne karty; są lokalne nazwy. Próbka „Instalacja fotowoltaiczna – Kalisz” opisuje powiat kaliski i montaż, ale nie podaje kWp, modelu falownika czy uzysku. Nie przenosimy braku na każdą kartę domeny. |
| Opinie | Homepage deklaruje Google 4,9; w pobranym HTML brak źródłowego linku recenzji i pełnych tekstów. To deklaracja łatwiejsza do podania niż do samodzielnej weryfikacji z tej strony. |
| Formularz | **4 pola danych:** telefon, e-mail, temat, wiadomość. W HTML wymagane 3: telefon, e-mail, wiadomość; osobno wymagana zgoda. Pola techniczne wyłączono z liczenia. |
| CTA | Wyraźne „Zamów bezpłatną wycenę”, telefon, obietnica oddzwonienia. |
| Telefon mobile | **Ikona telefonu widoczna w nagłówku na pierwszym ekranie**, link `tel:+48515686622`. Sam numer nie jest tam rozpisany; numer tekstowy jest w dalszym kontakcie. |
| SEO lokalne | Kalisz w title, adres Migdałowa 16, lokalne realizacje i lista miejscowości. Komunikaty 100 km oraz 50 km nie wyjaśniają jednoznacznie różnicy zasięgu. |

**Wniosek:** przejrzyste połączenie oferty i kontaktu. Przestrzeń do wyróżnienia ALFA: dokładniej opisane własne realizacje oraz bezpośrednio weryfikowalne opinie. Nie kopiować niepotwierdzonych partnerstw, zasięgu ani dotacji.

## 3. 3DSmart

Źródła: [home](https://3dsmart.pl/), [PV dla domu](https://3dsmart.pl/fotowoltaika-dla-domu.html), [referencje](https://3dsmart.pl/referencje.html), [kontakt](https://3dsmart.pl/kontakt.html). [Szczegółowy odczyt HTML](konkurencja-4-2-gpro-3dsmart-2026-11-08.md).

| Element | Obserwacja |
| --- | --- |
| Title SEO | `3DSmart \| Kompleksowe Instalacje OZE dla przemysłu, biznesu, rolnictwa i domu` |
| H1 | Nie znaleziono H1 w statycznym HTML homepage. Segmenty Business, Industry i Home&Agro są H2. Nie potwierdzono braku H1 w DOM po wykonaniu JavaScript. |
| Oferta | Wyraźny podział odbiorców; PV od mikroinstalacji po farmy, magazyny, carporty, EV, dokumentacja i telemechanika; dla domu także pompy, klimatyzacja i audyty. |
| Treść | Oferta PV opisuje proces i odpowiada w FAQ m.in. na pytania o cenę, zimę i żywotność. Są formalności, serwis i dotacje. Nie weryfikowano aktualności kwot i szerokich obietnic oszczędności. |
| Realizacje | Zdjęcia, miasta i parametry: m.in. PV 49,14 kW Kalisz, PV 499,8 kW Szulec oraz magazyny 200 kWh Ostrów Wlkp. i 51,2 kWh Zbiersk Cukrownia. |
| Opinie | Referencje zawierają 12 odnośników do skanów; nazwane firmy i instytucje zwiększają możliwość identyfikacji dowodu. Treści i autentyczności skanów nie zweryfikowano. Nie znaleziono pełnej listy recenzji Google w odczytanym HTML. |
| Formularz | Oddzwonienie: **1 wymagane pole telefonu + zgoda**. Wiadomość: **4 pola danych**, 3 wymagane (imię/nazwa, e-mail, treść), telefon opcjonalny + wymagana zgoda. Zgody w HTML domyślnie zaznaczone; nie jest to rekomendacja do skopiowania. |
| CTA | „Porozmawiajmy”, „Zamów rozmowę”, bezpłatna wycena; osobne ścieżki dla segmentów. |
| Telefon mobile | **Ikona telefonu widoczna w nagłówku na pierwszym ekranie**, link `tel:+48577151315`. Ocenę wykonano podczas ładowania strony; baner cookies później zasłonił część treści i został odrzucony. |
| SEO lokalne | Adres Legionów 41, Kalisz; mapy, lokalizacje i parametry realizacji. Title strony głównej ma szerszy, ponadlokalny charakter. |

**Wniosek:** dobry materiał do porównania dowodów wykonania i sposobu skracania pierwszego kontaktu. Nie zmierzono, czy jeden numer telefonu daje więcej leadów niż pełny formularz.

## 4. Aurelum

Źródła: [home](https://www.aurelum.pl/), [kontakt](https://www.aurelum.pl/kontakt/), [realizacje](https://www.aurelum.pl/kategoria-produktu/realizacje/), [PV](https://www.aurelum.pl/fotowoltaika-dla-domu/). [Szczegółowy odczyt HTML](konkurencja-4-2-aurelum-prowable-ekosolary-2026-11-08.md).

| Element | Obserwacja |
| --- | --- |
| Title SEO | **770 znaków**, zaczyna się: `Aurelum – Fotowoltaika \| Pompy ciepła \| Klimatyzacja \| Smart Home \| Termomodernizacje – Rozświetl przyszłość z Aurelum…`. Dalej zawiera długi opis marketingowy. [Pełny dokładny title w źródle JSON](materialy/konkurencja-html/aurelum-home.json). Nie zakładamy, że Google wyświetla go w całości. |
| H1 | `Produkuj własną energię, żyj komfortowo` |
| Oferta | PV dla domu i biznesu, pompy, klimatyzacja, Smart Home, EV; dalsze usługi instalacyjne i termomodernizacyjne w menu. |
| Treść | Pięć pytań FAQ i pięć etapów współpracy; konsultacja, finansowanie i serwis. Podstrona PV ma starsze odniesienia do 2023/2024, które wymagają aktualizacji przed traktowaniem jako obecne porady. Cena opisana czynnikami, bez cennika. |
| Realizacje | Zdjęcia, lokalizacje i moce: m.in. Kalisz 328,58 kWp, Wolica 199,80 kWp oraz projekty w Radomiu i Opocznie. |
| Opinie | Widget z autorami, datami i treściami przypisywanymi Google oraz referencje instytucji. Widget podaje 40 opinii, a nasz odczyt Google 46 — może pokazywać starszy wycinek. Autentyczności referencji nie potwierdzono. |
| Formularz | Home, ukryty moduł: **5 pól danych + zgoda**, 4 pola wymagane, temat opcjonalny. Kontakt: **6 pól danych + zgoda**; 4 pola oznaczone wymaganiem, temat opcjonalny, przy wiadomości rozbieżność gwiazdki i atrybutu. Otwarcia i walidacji modalu nie testowano. |
| CTA | „Zamów wycenę instalacji”, „Tak, dzwonię”, konsultacja i bezpłatna wizja lokalna. |
| Telefon mobile | Na pierwszym ekranie **brak numeru i ikony telefonu**, jest duży przycisk wyceny. Po otwarciu menu dostępny klikalny numer +48 579 640 309; numer występuje też w dalszym kontakcie. |
| SEO lokalne | Pruszków 67, 62-800 Kalisz oraz podpisane realizacje w Kaliszu i Wolicy. Część realizacji ma zasięg ogólnopolski. |

**Wniosek:** mocny wzorzec opisu procesu i realizacji. Możliwa przewaga ALFA: krótszy pierwszy kontakt, jawny telefon oraz aktualne, łatwe do sprawdzenia treści. Nie przypisujemy długiemu title określonej straty pozycji bez dowodów.

## 5. PROWABLE — polska wersja

Źródło: [home](https://www.prowable.pl/). [Szczegółowy odczyt HTML](konkurencja-4-2-aurelum-prowable-ekosolary-2026-11-08.md). Polska homepage została odczytana z HTTP 200 i obejrzana na mobile. Inne narzędzie odczytu kierowało do wersji angielskiej — nie użyto jej title/H1 do oceny polskiej strony.

| Element | Obserwacja |
| --- | --- |
| Title SEO | `PROWABLE - Pompy ciepła Kalisz` |
| H1 | `rozwiązania dla twojego domu`; poprzedzające „Kompleksowe” leży poza tagiem H1. |
| Oferta | PV, pompy, klimatyzacja, rekuperacja, ogrzewanie podłogowe i termowizja; finansowanie i dotacje. |
| Treść | Homepage opisuje usługi, doradztwo, serwis i finansowanie, a menu prowadzi do FAQ/bloga. Szczegółowości podstrony PV nie potwierdzono z powodu 429. |
| Realizacje — zdjęcia, lokalizacje, parametry | |
| Opinie | Nagroda Oferteo „Najlepsi 2022” i odnośnik kategorii pomp ciepła. Nie jest to potwierdzona lista recenzji montażu PV. |
| Formularz | Podstawowy: **4 pola danych + zgoda**, wymagane imię/nazwisko, telefon, e-mail i zgoda; wiadomość opcjonalna w HTML. Osobny formularz rat ma 6 pól + zgoda; nie mylić ich. |
| CTA | Kontakt, „Kup na raty”, dotacje; telefon i e-mail. |
| Telefon mobile | **Dwa klikalne numery widoczne na samej górze pierwszego ekranu**: 62 580 21 90 i +48 503 515 520. Dodatkowo przycisk „Kontakt”. |
| SEO lokalne | Kalisz w title i adres Skarszewska 4. Title eksponuje pompy ciepła, nie PV — fakt o pozycjonowaniu oferty, nie dowód przyczyny rankingu. |

**Luka do ręcznego sprawdzenia:** `/realizacje-kalisz/` i `/fotowoltaika-kalisz/` zwróciły 429 przy pobraniu; kontakt również był ograniczony. Nie stwierdzamy braku realizacji. W razie dostępności użytkownik może uzupełnić fotografię, miejscowość i moc na przykładzie jednej realizacji. Nie obchodzono ograniczeń ani nie wysyłano formularzy.

## 6. Ekosolary

Źródła: [home](https://ekosolary.pl/), [PV](https://ekosolary.pl/oferta/fotowoltaika), [realizacje](https://ekosolary.pl/realizacje), [kontakt](https://ekosolary.pl/kontakt). [Szczegółowy odczyt HTML](konkurencja-4-2-aurelum-prowable-ekosolary-2026-11-08.md).

| Element | Obserwacja |
| --- | --- |
| Title SEO | `Fotowoltaika Kalisz – montaż paneli fotowoltaicznych - Ekosolary` |
| H1 | `Sprzedaż i montaż paneli solarnych w Kaliszu – Ekosolary` |
| Oferta | PV, pompy, termomodernizacja, lampy solarne, turbiny, LED, monitoring sieci i serwis. |
| Treść | Dużo informacji technicznych, opis on/off-grid i hybryd oraz cztery etapy prac. Nie odnaleziono konkretnego cennika ani jasnego terminu realizacji. Sekcja o Olsztynie nie stanowi lokalnego dowodu dla Kalisza. |
| Realizacje | Galeria fotografii; brak przypisanych miast i mocy w odczytanym tekście. Nie wnioskujemy parametrów z wyglądu zdjęć. |
| Opinie | W odczytanej homepage nie odnaleziono podpisanych recenzji z datami i źródłami. Nie oznacza to braku opinii o firmie poza stroną. |
| Formularz | Na kontakcie **4 pola danych + zgoda + CAPTCHA**. Imię/nazwisko, e-mail, wiadomość i zgoda oznaczone wymaganiem ARIA; telefon opcjonalny. Na homepage nie znaleziono formularza kontaktowego w HTML. |
| CTA | Kontakt, bezpłatne konsultacje/spotkanie i „Dowiedz się więcej”; na pierwszym ekranie mobile dominuje termomodernizacja z dotacją, nie formularz PV. |
| Telefon mobile | **Numer +48 792 463 350 widoczny i klikalny na samej górze pierwszego ekranu**, obok danych kontaktowych. |
| SEO lokalne | Kalisz w title/H1, adresy Złota 72 oraz al. Wojska Polskiego 46/5 i nazwy miejscowości regionu. Galerie nie wiążą tych lokalizacji z konkretnymi zdjęciami. |

**Wniosek:** silne dopasowanie title i H1 do zapytania, ale czytelne studia realizacji i dowody klientów mogą dać ALFA lepszy materiał sprzedażowy. Długość tekstu sama w sobie nie oznacza jego wyższej jakości.

## 7. Odniesienie do ALFA — stara strona, potem projekt

**Stara strona:** punktem odniesienia jest odczyt z wcześniejszych analiz i zrzut kontaktu od użytkownika, a nie nowy pełny przegląd. Próba wejścia podczas audytu 3 zwróciła błąd daty certyfikatu. Potwierdzone kontakt i domena są zgodne z projektem. Starsze materiały wskazują istniejące realizacje, FAQ i ofertę PV; obecnego wyglądu mobilnego oraz formularza starego serwisu nie potwierdzono, więc nie przypisujemy mu ocen na podstawie nowego projektu.

**Aktualny projekt:** ma już [dane realizacji](../../src/data/installations.js), [FAQ](../../src/data/faq.js), [recenzje](../../src/data/customerReviews.js), [kontakt telefoniczny i mailowy](../../src/components/ContactBanner/ContactBanner.jsx) oraz [listę materiałów do wyceny](../../src/components/ContactChecklist/ContactChecklist.jsx). To odczyt kodu, nie dowód wdrożenia na `moranda.com.pl` ani test mobile. Nie zakładamy, że te elementy trzeba budować ponownie.

Do dalszych decyzji zapisujemy:

1. Porównać kompletność własnych realizacji z 3DSmart i Aurelum: zdjęcie + miejscowość + parametry + rzeczywisty zakres. Uzupełniać braki, zamiast zastępować udokumentowane dane sloganami.
2. Rozważyć prosty pierwszy kontakt i wyraźny telefon; dopiero osobno ustalić zakres formularza, pomiar i działanie wysyłki. Same przyciski kontaktu nie dowodzą istnienia formularza.
3. Zaktualizować znaną rozbieżność 20/21 opinii i uporządkować źródła/parafrazy recenzji przed publikacją. Widget konkurencji również może pokazywać starszy stan.
4. W kolejnych etapach sprawdzić własną mobilną ścieżkę od wejścia do kontaktu. Nie wyciągać wniosków o konwersji jedynie z liczby pól konkurenta.
5. Treści o dotacjach, gwarancjach, cenach i uzyskach traktować jako informacje wymagające osobnej weryfikacji, a nie materiał do skopiowania od konkurencji.

## 8. Stan ukończenia i luki

Krok 4.2 opracowany dla pięciu firm w dostępnym zakresie. Najważniejsze braki: realizacje i pełna podstrona PV PROWABLE, dalsze pozycje organiczne trzech firm, DOM H1 3DSmart po JS, walidacja i otwieranie części formularzy. Zgodnie z ustaleniem nie uzupełniamy tych danych domysłami.

Archiwum: [HTML i JSON źródeł](materialy/konkurencja-html/). Nie zapisano plików zrzutów mobile/Google — obrazy były widoczne w czacie. Nie wykonano pełnego technicznego audytu SEO, testów wydajności ani analizy linków. Nie rozpoczęto kroku 4.3 i nie zmieniano kodu strony.
