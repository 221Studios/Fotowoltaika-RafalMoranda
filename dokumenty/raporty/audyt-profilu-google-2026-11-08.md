# Zadanie 3/30 — Audyt Profilu Firmy w Google

Data kontroli: 8 listopada 2026. Status: opracowano punkty 3.1–3.5 w zakresie dostępnych danych publicznych. Raport zawiera wyniki, ograniczenia i listę rekomendacji do wdrożenia po uzyskaniu dostępów. Nie zmieniano profilu ani strony. Archiwum zrzutów pozostaje niepełne, a lokalizacja urządzenia podczas pomiarów 3.3 nie jest potwierdzona. Ustawienia niedostępne publicznie pozostają do sprawdzenia z Rafałem.

## Wynik audytu — do przeczytania najpierw

Profil firmy odnaleziono; adres, telefon i domena są zgodne ze zrzutem starej strony i aktualnym projektem. Google pokazuje 4,8/5 z 21 ocen, standardowe godziny są uzupełnione, a galeria zawiera realizacje. Nie stwierdzono braku zdjęć ani błędnej kategorii. Publiczny widok nie pozwolił potwierdzić dodatkowych kategorii, listy usług i skonfigurowanego obszaru działania.

Najważniejsze działania: rozwiązać problem HTTPS strony wskazanej w profilu, uzyskać dostęp do zarządzania istniejącym profilem, sprawdzić model obsługi pod adresem, ustalić neutralny proces próśb o opinie i uzupełnić dowody oraz pomiary. Szczegóły i warunki zmian znajdują się w punkcie 3.5.

## Zakres i kolejność

Pracujemy wyłącznie nad zadaniem 3. Najpierw sprawdzamy dotychczasową stronę `https://www.moranda.com.pl/`, potem lokalny projekt z GitHub i porównujemy je z publicznym profilem Google. Nie zmieniamy strony ani wizytówki. Braki pozostają pustymi komórkami; ich przyczyny opisujemy osobno. Brak odczytu nie oznacza braku danych w profilu.

## 3.1 — Znalezienie właściwego profilu

### A. Dotychczasowa strona

- Źródło: https://www.moranda.com.pl/
- Narzędzie odczytu strony zwróciło 502.
- Próba otwarcia w przeglądarce zakończyła się błędem `ERR_CERT_DATE_INVALID`. Nie odczytano treści i nie pominięto ostrzeżenia.
- Ten błąd potwierdza problem z datą certyfikatu w tej próbie, ale nie potwierdza samodzielnie dokładnej daty jego wygaśnięcia.
- Nazwa `rafal.moranda.com.pl` pojawiła się jako etykieta linku w wiadomości; wskazany adres docelowy to `https://www.moranda.com.pl/`. Nie zakładamy istnienia osobnej strony pod subdomeną.

### B. Projekt lokalny

Źródło: [dane firmy w kodzie](../../src/lib/site.js). Są to dane projektu, nie dowód na aktualną treść starej strony.

| Pole | Dotychczasowa strona — ręczna weryfikacja | Projekt lokalny | Publiczny profil Google |
| --- | --- | --- | --- |
| Nazwa | Logo: „rafał morańda”; pełna nazwa firmy niewidoczna na zrzucie | ALFA Rafał Morańda | Fotowoltaika - ALFA Rafał Morańda |
| Adres | Ceków Kolonia 6a, 62-834 Ceków | Ceków Kolonia 6a, 62-834 Ceków | Ceków Kolonia 6A, 62-834 Ceków |
| Telefon | +48 600 306 425 | +48 600 306 425 | 600 306 425 |
| E-mail | rafal@moranda.com.pl | rafal@moranda.com.pl | |
| Witryna | www.moranda.com.pl | https://www.moranda.com.pl | moranda.com.pl/ |
| Godziny | | Pon.–pt. 07:00–15:00; sob.–niedz. nieczynne | Pon.–pt. 07:00–15:00; sob.–niedz. zamknięte |

Pełny tydzień godzin Google odczytano w punkcie 3.2. W profilu nie odczytano e-maila; nie wyciągamy z tego wniosku, że powinien być tam publicznie widoczny.

Porównanie opinii: [komponent projektu](../../src/components/CustomerReviews/CustomerReviews.jsx) ma wpisane na stałe **4,8 i 20 opinii**, natomiast podczas kontroli profil Google pokazał **4,8 i 21 opinii**. Liczba w projekcie jest zatem nieaktualna względem tej obserwacji. Zapisujemy rozbieżność, bez zmiany kodu podczas audytu. [Szczegółowy odczyt projektu](dane-firmy-w-projekcie-2026-11-08.md).

### C. Znaleziony profil

Źródło pierwotne: [wyszukiwanie firmy w Google Maps](https://www.google.com/maps/search/?api=1&query=ALFA+Rafa%C5%82+Mora%C5%84da).

Bezpośrednie wyszukanie nazwy otworzyło profil **Fotowoltaika - ALFA Rafał Morańda**. Odczytano:

- adres: Ceków Kolonia 6A, 62-834 Ceków;
- telefon: 600 306 425;
- domenę: moranda.com.pl;
- widoczną kategorię: Dostawca sprzętu do pozyskiwania energii słonecznej;
- ocenę: 4,8/5, liczba opinii: 21;
- Plus Code: V7RX+GV Ceków.

Wniosek: zgodność nazwy właściciela, adresu, telefonu i domeny z projektem oraz dostarczonym przez użytkownika zrzutem starej strony pozwala uznać profil za zidentyfikowany na potrzeby audytu. Nie ma podstaw do tworzenia nowego profilu.

Zrzut widoku profilu wykonano i pokazano w czacie; pliku obrazu nie zapisano w repozytorium. Nie traktujemy tego jako kompletnego archiwum dowodowego audytu.

## Ręczna weryfikacja — uzupełnienie od użytkownika

Użytkownik dostarczył [zrzut danych kontaktowych starej strony](materialy/stara-strona-kontakt-2026-11-08.png). Potwierdza on adres, telefon, e-mail i domenę oraz nazwę właściciela w logo. Te dane są zgodne z projektem, a adres, telefon i domena także z odczytanym profilem Google. Na zrzucie nie ma godzin otwarcia ani pełnej nazwy firmy „ALFA Rafał Morańda”; nie uzupełniamy ich na jego podstawie.

Użytkownik potwierdził, że na starej stronie nie ma godzin otwarcia. Pole pozostaje puste; nie wymaga dalszej ręcznej weryfikacji na starej stronie. W punkcie 3.2 potwierdzono zgodność standardowego harmonogramu projektu z Google. Nie potrzebujemy kolejnych podstron starego serwisu do samej identyfikacji profilu.

## Dane profilu i dalsze punkty

### 3.2 — Pełne dane profilu

Źródło: publiczny profil Google Maps wskazany w punkcie 3.1; odczyt w przeglądarce 8 listopada 2026. Sprawdzono przegląd profilu, zakładkę „Informacje”, pełne godziny, sortowanie opinii „Najnowsze” oraz galerię „Wszystko”. Porównanie ze starą stroną opiera się na zrzucie użytkownika; porównanie z projektem na lokalnych plikach wskazanych powyżej.

| Element | Dane z wizytówki | Porównanie / ocena |
| --- | --- | --- |
| Nazwa | Fotowoltaika - ALFA Rafał Morańda | Zawiera nazwę firmy i usługę; projekt używa „ALFA Rafał Morańda”, stare logo „rafał morańda”. Nie przesądzamy zgodności rozszerzonej nazwy z rzeczywistym oznakowaniem firmy. |
| Kategoria główna — widoczna pod nazwą | Dostawca sprzętu do pozyskiwania energii słonecznej | Tematycznie pasuje do PV. To ocena znaczenia widocznej kategorii, a nie potwierdzenie optymalności ustawień. |
| Dodatkowe kategorie | | Nie ujawniono ich w sprawdzonym widoku publicznym ani zakładce „Informacje”; brak danych nie oznacza braku ustawionych kategorii. |
| Ocena | 4,8/5 | Zgodna z oceną wpisaną w projekcie. |
| Opinie — liczba | 21 | Projekt wyświetla 20 — rozbieżność zapisana do późniejszej poprawy. |
| Najnowsza opinia — oznaczenie Google | „3 dni temu”, Grzegorz Marciniak, 5/5 | Potwierdzone po sortowaniu „Najnowsze”; widoczny znacznik „NOWA”. |
| Najnowsza opinia — dokładna data kalendarzowa | | Google pokazał datę względną; nie przepisujemy wyliczonego dnia jako dokładnej daty publikacji. |
| Zdjęcia — orientacyjna liczba | Co najmniej 23 zdjęcia oraz 1 film w załadowanej galerii | Po przewijaniu załadowano 24 pozycje: 23 oznaczone jako zdjęcia i 1 jako Video. To dolna granica, nie potwierdzona liczba całej galerii. |
| Zdjęcia — tematyka | Budynek firmy z szyldem, instalacje PV na dachach i na gruncie; również materiały osobiste niezwiązane tematycznie z instalacjami | Ocena widocznych miniatur i zdjęcia siedziby. Dostępne filtry „Od właściciela”, „Filmy”, „Street View i zdjęcia sferyczne”. Zdjęcie otwierające siedziby oznaczono „wrz 2024”; nie określa to aktualności całej galerii. |
| Numer telefonu | 600 306 425 | Zgodny ze starą stroną i projektem: +48 600 306 425. |
| Adres | Ceków Kolonia 6A, 62-834 Ceków | Zgodny ze starą stroną i projektem; różnica 6A/6a jest zapisem tego samego numeru. To siedziba w Cekowie, nie adres w Kaliszu. |
| Obszar świadczenia usług w profilu | | Nie odczytano jawnej listy obszarów działania w sprawdzonych widokach. Projekt deklaruje Kalisz i region; nie traktujemy tego jako ustawienia wizytówki. |
| Strona WWW — widoczny odnośnik | moranda.com.pl/ | Domena i strona główna zgodne ze starą stroną i projektem. Nie potwierdzono dokładnego schematu HTTP/HTTPS ani wariantu www z atrybutu odnośnika. |
| Godziny | Poniedziałek–piątek 07:00–15:00; sobota i niedziela zamknięte | Uzupełnione, zgodne ze standardowymi godzinami projektu. Na starej stronie brak — potwierdził użytkownik. |

#### Dodatkowe obserwacje z odczytu

- Dla środy 11 listopada 2026 Google pokazuje 07:00–15:00 z ostrzeżeniem „Godziny otwarcia mogą być inne” z powodu Narodowego Święta Niepodległości. Nie potwierdzono godzin świątecznych.
- Zakładka „Informacje” pokazuje „Usługi na miejscu”, „Bezpłatny parking” i „Własny parking”. Nie są to dodatkowe kategorie firmy. Nie dowodzą też same w sobie, że klienci są regularnie przyjmowani pod adresem siedziby.
- Podsumowanie ocen pokazuje 20 ocen pięciogwiazdkowych i 1 jednogwiazdkową. Nie przeprowadzono jeszcze analizy treści opinii z punktu 3.4.
- Zrzuty profilu, najnowszej opinii i galerii pokazano w czacie; nie zapisano ich jako plików w repozytorium.

#### Luki do ręcznej weryfikacji przed zamknięciem 3.2

1. Dodatkowe kategorie — jeśli są widoczne w Twoim widoku, przepisz ich nazwy. Jeśli nie są widoczne, pozostawimy puste do czasu uzyskania dostępu.
2. Dokładna data najnowszej opinii — tylko jeśli Twój widok ją ujawnia; w przeciwnym razie pozostaje zapis „3 dni temu” na dzień kontroli.
3. Jawny obszar działania — tylko jeśli profil go wyświetla. Zgodność faktycznej obsługi i przyjmowania klientów pod adresem potwierdzi docelowo Rafał.

Dokładna liczba wszystkich zdjęć i pełny URL witryny mogą zostać uzupełnione, jeśli będą dostępne. Nie blokują zapisu orientacyjnej liczby materiałów i domeny.

Użytkownik potwierdził, że dodatkowe kategorie i obszar działania nie są widoczne bezpośrednio w jego Google Maps oraz że nie ma dostępu do zarządzania profilem. Pola pozostają puste; oznacza to brak możliwości ich potwierdzenia, a nie brak konfiguracji. Punkt 3.2 zamknięto w zakresie publicznym. Uzupełnienie ustawień będzie możliwe po uzyskaniu odpowiedniego dostępu lub informacji od Rafała. Nie przechodzimy automatycznie do 3.3.

### 3.3 — Widoczność w Mapach

Wykonano kolejno cztery wyszukania w publicznym interfejsie Google Maps. Zapis dotyczy kolejności kart firm w bocznej liście wyników, od góry, po przewijaniu listy. Nie jest to pozycja organicznej strony ani pozycja w trzyelementowym pakiecie Map w zwykłym Google. Szukana firma: „Fotowoltaika - ALFA Rafał Morańda”, Ceków Kolonia 6A, telefon 600 306 425.

| Fraza | Widoczność ALFA | Pozycja w liście | Obszar i środek mapy odczytany z URL | Przybliżenie | Data | Urządzenie / widok | Lokalizacja urządzenia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| fotowoltaika Kalisz | Tak | 19 | Kalisz i okolice; 51.8008896, 18.1702174 | 11z; skala 5 km | 2026-11-08 | Przeglądarka w aplikacji Codex, widok desktop 1280 × 720 | |
| montaż fotowoltaiki Kalisz | Tak | 10 | Kalisz i okolice; 51.8006592, 18.1702168 | 11z; skala 5 km | 2026-11-08 | Przeglądarka w aplikacji Codex, widok desktop 1280 × 720 | |
| magazyny energii Kalisz | Nie w wyświetlonej liście | | Kalisz i okolice; 51.7726343, 18.0320942 | 13z; skala 1 km | 2026-11-08 | Przeglądarka w aplikacji Codex, widok desktop 1280 × 720 | |
| instalacje fotowoltaiczne Kalisz | Tak | 16 | Kalisz i okolice; 51.7726199, 18.0320941 | 13z; skala 1 km | 2026-11-08 | Przeglądarka w aplikacji Codex, widok desktop 1280 × 720 | |

#### Warunki i ograniczenia

- Wyszukania wykonano kolejno w tej samej sesji, zmieniając treść pola wyszukiwania. Nie ustawiano jednakowego centrum ani przybliżenia; zapisano faktyczne wartości z URL po załadowaniu wyników. Ostatnie wyszukanie odziedziczyło kontekst widoku poprzedniego wyszukania. To cztery obserwacje w opisanych widokach, nie porównywalny pomiar siatki lokalizacji.
- Nie ustalono fizycznej lokalizacji urządzenia, lokalizacji po IP ani miejsca przypisanego przez Google do użytkownika. Środek mapy nie jest lokalizacją osoby wyszukującej. Pole lokalizacji urządzenia pozostaje puste do ręcznej weryfikacji.
- Sesja była zalogowana do Google, a nie incognito. Personalizacja mogła wpływać na wyniki. Nie używano przycisku lokalizacji, filtrów oceny ani „Otwarte”. Opcja „Zaktualizuj wyniki po przesunięciu mapy” pozostawała wyłączona.
- Nie klikano profilu ALFA podczas liczenia. Odczytano kolejność kart firm. Nie zaobserwowano etykiet „Sponsorowane” w liczonych kartach; reklamy sklepów oznaczone na mapie nie były doliczane do pozycji listy.
- Dla „magazyny energii Kalisz” sprawdzono koniec listy: interfejs pokazał „To już wszystkie wyniki.” Były cztery firmy, bez ALFA. Nie oznacza to nieobecności firmy przy innych ustawieniach mapy.
- Liczby załadowanych kart przy odczycie: 20, 16, 4 i 16 odpowiednio. Dla fraz z odnalezioną ALFA nie stwierdzamy, że to wszystkie istniejące wyniki; wystarczyło załadować karty od początku do pozycji firmy.
- Zrzuty widoków pokazano w czacie, ale nie zapisano jako plików w repozytorium. [Zapis kolejności odczytanych kart](widocznosc-mapy-kolejnosc-2026-11-08.md) pozwala sprawdzić sposób policzenia pozycji.

#### Źródła — odnośniki odczytanych widoków

- [fotowoltaika Kalisz](https://www.google.com/maps/search/fotowoltaika+Kalisz/@51.8008896,18.1702174,11z/data=!3m1!4b1)
- [montaż fotowoltaiki Kalisz](https://www.google.com/maps/search/monta%C5%BC+fotowoltaiki+Kalisz/@51.8006592,18.1702168,11z/data=!3m1!4b1)
- [magazyny energii Kalisz](https://www.google.com/maps/search/magazyny+energii+Kalisz/@51.7726343,18.0320942,13z/data=!3m1!4b1)
- [instalacje fotowoltaiczne Kalisz](https://www.google.com/maps/search/instalacje+fotowoltaiczne+Kalisz/@51.7726199,18.0320941,13z/data=!3m1!4b1)

Ponowne otwarcie linków może dać inną kolejność i inne automatyczne ustawienie mapy. Obserwacje stanowią punkt startowy wyłącznie dla warunków opisanych powyżej. Do uzupełnienia pozostaje lokalizacja urządzenia lub osobna ręczna próba z zanotowaną lokalizacją użytkownika.

### 3.4 — Analiza opinii

Przeczytano 21 ocen: 16 z tekstem oraz 5 bez tekstu. Powtarzają się doradztwo (5), dokumentacja (3), czysty/estetyczny montaż (3), sprawność (4), zgodność z ustaleniami/terminem (4) i cena (3); tematy mogą współwystępować. Serwis, działanie po latach i magazyny energii mają pojedyncze, ograniczone opisy. Jedna ocena jednogwiazdkowa nie zawiera tekstu, więc przyczyna jest nieznana.

[Pełna analiza autorów, potrzeb klientów, braków, liczb konkurencji i neutralnych próśb o opinie](opinie-alfa-analiza-i-plan-2026-11-08.md). Pierwszy proponowany cel porównawczy: 50 opinii łącznie (+29), bez gwarancji rankingu i bez narzucania klientom oceny ani treści. Wdrożenia, publikacji i wysyłki nie wykonano.

### 3.5 — Rekomendacje

Priorytety: **pilny** — utrudnienie kontaktu lub dostępu do strony; **wysoki** — poprawność danych i obsługa klientów; **rozwojowy** — zwiększanie wartości materiałów oraz pomiary. To lista do przygotowania i późniejszego wdrożenia, nie wykaz wykonanych zmian.

| Priorytet | Co wykryto / czego nie potwierdzono | Rekomendacja | Warunek / dostęp | Jak sprawdzimy wykonanie |
| --- | --- | --- | --- | --- |
| Pilny | Próba wejścia na starą stronę zakończyła się błędem daty certyfikatu; ta domena jest wskazana w profilu. | Administrator hostingu powinien sprawdzić certyfikat, poprawną konfigurację HTTPS i odnowienie. Po naprawie sprawdzić warianty www/bez www i przekierowania. | Dostęp administratora hostingu; nie potwierdzono dokładnej daty wygaśnięcia. | Docelowa strona otwiera się bez ostrzeżenia i pozwala skontaktować się z firmą. |
| Wysoki | Użytkownik nie ma dostępu do zarządzania profilem. | Rafał powinien nadać odpowiednią rolę do istniejącego profilu; zachować kontrolę właścicielską po jego stronie. Nie tworzyć drugiego profilu. | Działanie właściciela profilu. | Możliwość odczytu i zarządzania właściwym profilem ALFA. |
| Wysoki | Adres w Cekowie jest zgodny z danymi strony; nie wiadomo, czy odbywa się tam obsługa klientów. | Ustalić sposób obsługi. Jeśli firma nie przyjmuje klientów pod adresem, ukryć publiczny adres i określić obsługiwany obszar. Jeśli przyjmuje klientów oraz spełnia warunki placówki, zachować adres i ewentualnie dodać obszar dojazdu. | Potwierdzenie Rafała i dostęp do profilu; sam szyld i parking nie rozstrzygają. | Ustawienia odpowiadają rzeczywistemu sposobowi działania. |
| Wysoki | Dodatkowe kategorie, skonfigurowany obszar i kompletność usług są nieznane, a nie potwierdzone jako brakujące. | Po uzyskaniu dostępu zinwentaryzować ustawienia; dopisać wyłącznie rzeczywiście oferowane usługi i obsługiwane miejscowości. Kalisz uwzględnić, jeśli firma faktycznie go obsługuje. | Weryfikacja oferty i obszaru przez Rafała. | Zapis zastanych ustawień i porównanie z potwierdzoną ofertą. |
| Wysoki | Widoczna kategoria pasuje do PV; nazwa zawiera „Fotowoltaika -”, a projekt i stare logo mają inne warianty nazwy. | Nie zmieniać kategorii automatycznie. Sprawdzić dostępne kategorie oraz rzeczywistą nazwę używaną na materiałach firmy; skorygować tylko udokumentowaną niezgodność. | Fakty o firmie oraz dostęp do panelu. | Nazwa zgodna z rzeczywistym oznakowaniem, kategorie opisują podstawową działalność. |
| Wysoki | 21 opinii wobec 44–88 w czterech porównanych profilach; brak ustalonego procesu próśb. | Uzgodnić neutralne, dobrowolne zaproszenia dla rzeczywistych klientów bez selekcji według zadowolenia. Pierwszy cel porównawczy: 50 opinii łącznie (+29), bez gwarancji rankingu. | Potwierdzony link do wystawienia opinii i uzgodnienie kontaktów z Rafałem. | Zapis zaproszeń, dobrowolnych recenzji i tematów; bez obowiązkowej kwoty dla pracowników. |
| Wysoki | Dwie zaobserwowane odpowiedzi właściciela; odpowiedź na jedną gwiazdkę nie proponuje jasno wyjaśnienia sprawy. | Przygotować rzeczową odpowiedź z zaproszeniem do kontaktu, a następnie reagować na recenzje, gdy można pomóc lub wnieść informację. Nie zakładać fałszywości oceny bez opisu. | Rafał potwierdza fakty i publikuje lub zleca publikację po uzyskaniu dostępu. | Odpowiedź uprzejma, pomocna i bez ujawniania prywatnych danych. |
| Wysoki | Godziny standardowe są zgodne z projektem; dla 11 listopada Google pokazuje możliwą zmianę. | Potwierdzić godziny świąteczne i ustawić wyjątki zgodnie z rzeczywistością. Standardowych godzin nie zmieniać bez przyczyny. | Informacja od Rafała i dostęp do panelu. | Święta i godziny standardowe są zgodne z ustaleniami. |
| Rozwojowy | Zdjęcia realizacji już istnieją; są też materiały niezwiązane z działalnością, a aktualności całej galerii nie ustalono. | Regularnie dodawać własne autentyczne zdjęcia aktualnych realizacji i zespołu. Przejrzeć materiały niezwiązane z firmą: własne można uporządkować; cudze zgłaszać wyłącznie w razie naruszenia zasad. | Materiały i prawa do ich publikacji oraz dostęp do zarządzania własnymi zdjęciami. | Galeria przedstawia rzeczywistą ofertę i aktualną firmę. Nie ustawiamy sztucznego wymogu liczby zdjęć. |
| Rozwojowy | Mało szczegółowych relacji o serwisie, magazynach i użytkowaniu po latach. | Zebrać osobne, zweryfikowane opisy realizacji i doświadczeń na potrzeby strony; klientom wystawiającym opinie Google nie narzucać tematów ani fraz. | Potwierdzenie danych, rozmowy z rzeczywistymi klientami i zgody na publikację materiałów. | Materiały mają źródła i nie zawierają obietnic wyprowadzonych z pojedynczego przypadku. |
| Rozwojowy | Domena w profilu jest właściwa; dokładny wariant URL i działanie po naprawie HTTPS nie są potwierdzone. | Po naprawie zweryfikować docelowy adres. Przy wdrożeniu nowej strony zachować właściwą domenę i kontrolę starych adresów; link profilu zmienić tylko w razie potrzeby. UTM można dodać po ustaleniu pomiaru. | Dostęp do profilu i analityki na etapie wdrożenia. | Link trafia na działającą stronę firmy; ewentualne oznaczenie źródła działa. |
| Rozwojowy | W projekcie widnieje 20 opinii zamiast 21, a część tekstów opinii jest parafrazowana. | Przy późniejszych poprawkach strony uaktualnić liczbę i datę odczytu; stosować wierne cytaty lub jawnie oznaczone streszczenia z odnośnikiem do źródła. | Osobna zmiana w projekcie przed publikacją. | Dane prezentowane na stronie nie udają pomiaru na żywo ani nowych wypowiedzi klientów. |
| Rozwojowy | Pomiar Map ma różne przybliżenia i niepotwierdzoną lokalizację urządzenia. | Powtórzyć cztery frazy z udokumentowanym miejscem wyszukiwania i porównywalnymi ustawieniami; zachować historię, nie nadpisywać pierwszych obserwacji. | Ręczny pomiar użytkownika lub ustalona metoda pomiarowa. | Każdy pomiar ma datę, lokalizację, urządzenie, frazę, widok i źródło; Mapy oddzielone od organicznych wyników. |

#### Zasady podejmowania decyzji

- **Adres i obszar:** jeśli firma nie obsługuje klientów pod adresem, Google wymaga usunięcia go z publicznego profilu i wskazania obszaru. Dla działalności hybrydowej można podawać adres oraz obszar. Nie dopisujemy fikcyjnego biura w Kaliszu. [Google — obszary i firmy hybrydowe](https://support.google.com/business/answer/9157481?hl=pl).
- **Nazwa i kategorie:** nazwa ma odzwierciedlać rzeczywistą firmę, a kategorie opisywać jej podstawową działalność. Nie dopisujemy nazw miast i usług jedynie po to, aby wpływać na ranking. [Google — informacje o firmie](https://support.google.com/business/answer/3038177?hl=pl).
- **Opinie:** prosimy o autentyczne doświadczenia bez korzyści i wpływania na treść albo ocenę. Nie wymagamy frazy „fotowoltaika Kalisz”, pięciu gwiazdek ani gotowego tekstu. [Google — zasady treści](https://support.google.com/contributionpolicy/answer/7400114?hl=pl).
- **Wyniki:** liczba opinii nie gwarantuje TOP 3; znaczenie mają również trafność, odległość i inne sygnały rozpoznawalności. [Google — ranking lokalny](https://support.google.com/business/answer/7091?hl=pl).

#### Informacje do uzyskania od Rafała

1. Kto zarządza obecnym profilem i hostingiem oraz kto naprawi HTTPS?
2. Czy klienci są przyjmowani w Cekowie Kolonii 6A i w jakich godzinach? Czy placówka jest obsadzona w deklarowanych godzinach?
3. Jakie miejscowości i jakie usługi są faktycznie obsługiwane? Jaki jest aktualny zakres dokumentacji, serwisu i gwarancji?
4. Jakiej nazwy firma rzeczywiście używa w oznakowaniu i materiałach?
5. Jakie są godziny świąteczne i kto będzie je aktualizować?
6. Jakie mamy zdjęcia i zgody do opisów realizacji oraz jak uzgodnimy neutralny kontakt z klientami w sprawie opinii?

Nie wysłano tych pytań ani żadnej wiadomości do Rafała.

## Archiwum zrzutów i ograniczenia dokumentu

Jedyny zapisany obecnie plik obrazu to przekazany przez użytkownika zrzut kontaktu starej strony:

![Dane kontaktowe starej strony — zrzut od użytkownika](materialy/stara-strona-kontakt-2026-11-08.png)

Zrzuty Google wykonane podczas odczytu były widoczne w czacie, ale nie zostały zapisane jako pliki projektu. Nie zastępujemy ich odtworzonymi obrazami. Puste pola poniżej oznaczają brak załącznika do archiwum, nie brak wykonania opisanej obserwacji.

| Dowód | Plik |
| --- | --- |
| Kontakt starej strony | [Zapisany zrzut](materialy/stara-strona-kontakt-2026-11-08.png) |
| Przegląd wizytówki: nazwa, adres, telefon, ocena | |
| Rozwinięte godziny | |
| Galeria zdjęć | |
| Opinie: najnowsza i rozkład ocen | |
| fotowoltaika Kalisz — wynik i ustawienie mapy | |
| montaż fotowoltaiki Kalisz — wynik i ustawienie mapy | |
| magazyny energii Kalisz — koniec listy | |
| instalacje fotowoltaiczne Kalisz — wynik i ustawienie mapy | |

**Rezultat zadania 3:** ukończony opisowy audyt publiczny z wynikami wyszukiwań, analizą opinii, rekomendacjami i wykazem ograniczeń. Pełne archiwum zrzutów wymaga uzupełnienia. Ustawienia panelu, sposób obsługi w siedzibie i fakty zależne od Rafała pozostają otwarte. Wdrożenie poprawek jest oddzielnym etapem po otrzymaniu dostępów i potwierdzeniu danych. Nie rozpoczęto zadania 4.
