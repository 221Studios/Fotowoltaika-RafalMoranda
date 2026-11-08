# Krok 4.2 — dowody HTML: Aurelum, PROWABLE i Ekosolary

Odczyt: 8 listopada 2026. Badano oficjalny HTML stron głównych oraz wskazane w nich podstrony kontaktu, realizacji i PV. Nie wysyłano formularzy. Nie oceniano tutaj pozycji Google ani widoczności telefonu na mobile — te pola wymagają osobnego odczytu interfejsu przez prowadzącego audyt. Pole `tel:` potwierdza możliwość wywołania połączenia, ale nie widoczność przycisku na ekranie.

Źródłowe pliki HTML i ich ekstrakty JSON zapisano w [folderze dowodowym](materialy/konkurencja-html/). H1 i title pochodzą z tagów HTML; tekst wyniku Google może się od nich różnić. Zawartość HTML formularza nie dowodzi, że formularz jest aktualnie widoczny ani że jego walidacja działa poprawnie. Formularzy nie testowano przez wysyłkę.

## Aurelum

Źródła: [strona główna](https://www.aurelum.pl/), [kontakt](https://www.aurelum.pl/kontakt/), [realizacje](https://www.aurelum.pl/kategoria-produktu/realizacje/), [PV dla domu](https://www.aurelum.pl/fotowoltaika-dla-domu/). Wszystkie te adresy zwróciły HTTP 200 w pobraniu HTML.

| Element | Odczyt i ocena |
| --- | --- |
| URL badany | https://www.aurelum.pl/ — strona główna; nie jest to stwierdzenie rankującego URL. |
| Title SEO | Bardzo długi, **770 znaków po normalizacji odstępów**. Zaczyna się „Aurelum – Fotowoltaika \| Pompy ciepła \| Klimatyzacja \| Smart Home \| Termomodernizacje – Rozświetl przyszłość z Aurelum…”, potem zawiera cały opis oferty. Pełny tekst zachowano bez skracania w `title[0]` pliku [aurelum-home.json](materialy/konkurencja-html/aurelum-home.json). To długość obserwowana, nie dowód konkretnego zachowania Google. |
| H1 | Jeden: **Produkuj własną energię, żyj komfortowo**. |
| Oferta | PV dla domu i biznesu, pompy ciepła, klimatyzacja, Smart Home, EV; w menu także termomodernizacja, instalacje elektryczne/hydrauliczne, IR i rekuperacja. |
| Treść | Homepage zawiera 5 pytań FAQ: korzyści i koszt PV, czas montażu, efektywność oraz konserwacja pomp. Opisuje 5 etapów współpracy od konsultacji po serwis, finansowanie i wsparcie. Odpowiedź o cenie wylicza czynniki, bez konkretnego cennika. Podstrona PV omawia net-billing i magazyn, ale zawiera odniesienia do cen i planowanych zmian w 2024 r. oraz tabeli 2023 — nie traktować jako zweryfikowanego stanu prawnego na 2026 r. |
| Realizacje | Cztery pozycje z fotografiami, lokalizacją i mocą: Wolica 199,80 kWp, Kalisz 328,58 kWp, Radom 988,48 kWp, Opoczno 999,56 kWp. To konkretniejszy dowód niż sama galeria bez podpisów. Nie potwierdzono niezależnie autorstwa ani parametrów wykonania. |
| Opinie | Homepage zawiera widget Trustindex z autorami, datami i tekstami przypisywanymi Google, podpis „Na podstawie 40 opinii”. Są też nazwane referencje instytucji i firm. Obecność tych elementów potwierdzona w HTML, autentyczności nie zweryfikowano. Liczba 40 jest inna od wcześniej odczytanych 46 w Google; może oznaczać starszy wycinek/widget. W ekstrakcie linków nie znaleziono bezpośredniego odnośnika do Google/Trustindex. |
| Formularz — homepage | Moduł 375: **5 pól danych** (imię, nazwisko, e-mail, temat, telefon) + checkbox. Imię, nazwisko, e-mail i telefon mają oznaczenia wymagania; temat opcjonalny; checkbox oznaczony wymagany. Formularz w surowym HTML ma `display:none` — potrzebne potwierdzenie otwarcia modalu w UI. Nie doliczamy wyszukiwarki strony i technicznych hidden inputs. |
| Formularz — kontakt | Moduł 303: **6 pól danych** (imię, nazwisko, e-mail, telefon, temat, wiadomość) + checkbox. Imię/nazwisko/e-mail/telefon mają oznaczenia wymagania. Wiadomość ma gwiazdkę w etykiecie, ale textarea nie ma `required`/`aria-required` w odczycie — rozbieżność etykiety i atrybutów; nie potwierdzono faktycznej walidacji. Temat opcjonalny. Checkbox oznaczony wymagany. |
| CTA | „Zamów wycenę instalacji”, „Tak, dzwonię”, „Przejdź do kontaktu”, bezpłatna konsultacja i wizja lokalna. |
| Telefon | HTML zawiera wielokrotnie `tel:+48579640309`, w tym CTA „Tak, dzwonię”. Widoczność mobile: do osobnego sprawdzenia. |
| SEO lokalne | Adres Pruszków 67, 62-800 Kalisz i konkretna realizacja Kalisz 328,58 kWp oraz Wolica. Realizacje także poza regionem; strona opisuje działalność na terenie Polski. |

**Ocena do dalszego porównania:** mocne podpisane realizacje, proces i wieloźródłowe referencje; potencjalne słabości to rozbudowany formularz kontaktu, przesadnie długi title, starsze treści PV oraz niezgodna z aktualnym odczytem Google liczba opinii widgetu. Nie badano wpływu tych cech na konwersję lub ranking.

## PROWABLE — polska wersja

Źródło podstawowe: [https://www.prowable.pl/](https://www.prowable.pl/). Bezpośrednie pobranie w Python requests zwróciło **polską wersję HTTP 200**, bez przekierowania do angielskiej. To ważne, bo inne narzędzie może zwracać `/en/prowable-eng/`; nie należy mieszać tytułu i H1 tych wersji.

| Element | Odczyt i ocena |
| --- | --- |
| URL badany | https://www.prowable.pl/ — strona główna; rankujący URL osobno. |
| Title SEO | **PROWABLE - Pompy ciepła Kalisz**. |
| H1 | Jeden: **rozwiązania dla twojego domu** — tekst w HTML rozbity na linie, po normalizacji jak podano. Słowo „Kompleksowe” występuje przed H1, poza jego tagiem. |
| Oferta | PV, pompy ciepła (także przemysłowe), ogrzewanie podłogowe, klimatyzacja, rekuperacja, termowizja; dotacje i finansowanie ratalne. |
| Treść | Homepage ma dłuższe opisy usług i wsparcia, serwis gwarancyjny/pogwarancyjny, dotacje oraz raty; menu odsyła do FAQ i bloga. Brak pełnego odczytu podstrony PV; nie stwierdzamy, czy odpowiada ona na szczegółowe pytania o dobór, ceny i terminy. |
| Realizacje | Menu wskazuje `/realizacje-kalisz/`; jego pobranie zwróciło **429**, więc fotografie, lokalizacje i parametry na tej podstronie pozostają niezweryfikowane. |
| Opinie | Homepage podaje nagrodę Oferteo „Najlepsi 2022” i link do `https://www.oferteo.pl/pompy-ciepla/kalisz#Najlepsi`. To link do kategorii/rankingu, nie potwierdzona lista konkretnych recenzji PV tej firmy. Widoczne logotypy marek są deklaracją strony, nie weryfikacją partnerstw. |
| Formularz główny | „Formularz ProWable”: **4 pola danych** — imię i nazwisko, telefon, e-mail, wiadomość — plus checkbox. Pierwsze 3 pola i checkbox mają `required`; wiadomość nie. Dane techniczne hidden wyłączono z liczenia. |
| Formularz rat | **6 pól danych** — imię i nazwisko, telefon, e-mail, wielkość instalacji/rachunek, liczba rat, dodatkowe informacje — plus checkbox. Wymagane pierwsze 3 i zgoda. Modułu rat nie należy mylić z podstawowym formularzem kontaktowym. |
| CTA | „Skontaktuj się już teraz!”, telefon i e-mail, „Kup na raty”, „Więcej o dotacjach”; pola formularza i przycisk „Wyślij formularz”. |
| Telefon | `tel:625802190` i `tel:+48503515520` w nagłówku/kontakcie/stopce HTML. Widoczność mobile wymaga UI. |
| SEO lokalne | Title zawiera Kalisz; kontakt podaje Skarszewską 4, 62-800 Kalisz. Sama obecność miejscowości w tytule nie dowodzi jakości całego lokalnego SEO. |

**Ograniczenia:** pobrania `/kontakt`, `/realizacje-kalisz/` i `/fotowoltaika-kalisz/` zwróciły 429. Ich JSON zachowuje status. Nie podejmowano dalszych prób obchodzenia limitu. Wyczerpującą ocenę realizacji i podstrony PV pozostawiamy pustą do późniejszej weryfikacji. Oceny homepage nie należy przenosić automatycznie na nieodczytane podstrony.

## Ekosolary

Źródła: [home](https://ekosolary.pl/), [kontakt](https://ekosolary.pl/kontakt), [realizacje](https://ekosolary.pl/realizacje), [fotowoltaika](https://ekosolary.pl/oferta/fotowoltaika). Wszystkie odczytane bezpośrednio, HTTP 200.

| Element | Odczyt i ocena |
| --- | --- |
| URL badany | https://ekosolary.pl/ — strona główna; rankujący URL osobno. |
| Title SEO | **Fotowoltaika Kalisz – montaż paneli fotowoltaicznych - Ekosolary**. |
| H1 | Jeden: **Sprzedaż i montaż paneli solarnych w Kaliszu – Ekosolary**. |
| Oferta | PV, solarne lampy uliczne, monitoring sieci energetycznej, turbiny, pompy ciepła, termomodernizacja; opisuje też LED i serwis. |
| Treść | Homepage jest obszerna: korzyści, zakres doradztwa i serwisu, termomodernizacja, dotacje i odsyłacze do artykułów. Podstrona PV ma 4 etapy prac, wyjaśnienia ogniw i systemów on/off-grid/hybrydowych. Dużo miejsca zajmuje opis technologii; nie odnaleziono konkretnego cennika ani jasnych terminów realizacji. Homepage ma także sekcję o Olsztynie — nie traktujemy jej jako dowodu realizacji w Kaliszu. W treściach są szerokie obietnice, których poprawności technicznej nie weryfikowano. |
| Realizacje | `/realizacje` zawiera galerię z plikami zdjęć i altami typu `instalacja-fotowoltaiczna-01`. W odczytanym tekście nie znaleziono przypisanych do poszczególnych projektów miejscowości ani mocy urządzeń. Zdjęcia: obecność plików potwierdzona; lokalizacje i parametry: brak w odczytanej treści, nie domyślamy się z samych fotografii. |
| Opinie | W odczytanym HTML homepage nie znaleziono sekcji z podpisanymi recenzjami, datami i odnośnikami do źródeł. Nie znaczy to, że firma nie ma opinii w Google lub innych serwisach. |
| Formularz | Na homepage brak formularza kontaktowego w HTML; `/kontakt` ma **4 pola danych**: imię i nazwisko, e-mail, telefon, wiadomość — plus checkbox i CAPTCHA. Imię/nazwisko, e-mail, wiadomość i checkbox mają `aria-required=true`; telefon nie. CAPTCHA jest osobną czynnością, nie zwykłym polem kontaktowym. Brak wysyłki i testu działania. |
| CTA | „Zapraszamy do kontaktu”, „Skontaktuj się z nami!”, bezpłatne konsultacje w domach/firmach i bezpłatne spotkanie na stronie kontaktowej; często „Dowiedz się więcej”. |
| Telefon | `tel:+48792463350` na homepage; na kontakcie dodatkowe telefony zespołu. Widoczność mobile wymaga UI. |
| SEO lokalne | Kalisz w title i H1, dwa adresy w Kaliszu (Złota 72 i al. Wojska Polskiego 46/5), regiony Pleszew/Turek/Ostrów/Ostrzeszów/Krotoszyn/Konin. To konkretne dane kontaktowe; nie przypisano jednak miejscowości do poszczególnych zdjęć realizacji. |

**Ocena do dalszego porównania:** silne dopasowanie title/H1 do frazy i rozbudowana wiedza techniczna; przestrzeń do przewagi ALFA to podpisane realizacje z parametrami, jasna ścieżka wyceny i dowody klientów. Sama długość tekstu nie oznacza większej użyteczności ani lepszego rankingu.

## Pliki dowodowe

Dla każdej firmy zachowano `*-home.html` i `*-home.json`, a dla kontaktu, realizacji i PV odpowiednio `*-contact`, `*-projects`, `*-pv`. JSON podaje `requested`, końcowy `url`, `status`, `title`, `h1`, listę linków, formularze z atrybutami i ekstrakt tekstu. Błędy 429 nie stanowią dowodu braku treści na stronie. Nie zachowano danych wpisanych przez użytkowników — formularzy nie wypełniano.
