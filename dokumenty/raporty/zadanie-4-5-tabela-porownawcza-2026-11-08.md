# Krok 4.5 — tabela porównawcza ALFA i pięciu konkurentów

Stan danych: **8 listopada 2026**. Zestawienie wyników kroków 3 i 4.1–4.4 oraz ponownego odczytu lokalnych plików projektu. Osobne kolumny ALFA opisują **starą publiczną stronę** i **aktualny projekt w repozytorium**. Nie potwierdzono wdrożenia projektu pod domeną produkcyjną. Nie zmieniano kodu ani profili firm.

## Zasady porównania

- **Stara ALFA:** dane ze wcześniejszego odczytu, obserwacji użytkownika i jego zrzutu kontaktu. Błąd daty certyfikatu blokował bezpośredni przegląd. Nie udajemy pełnej aktualnej kontroli starej strony.
- **Projekt ALFA:** obecność funkcji potwierdzona w kodzie; nie stanowi dowodu działania w produkcji, rankowania, szybkości, skutecznego dostarczenia zapytania ani czytelności na telefonie.
- **Konkurenci:** publiczne źródła i obserwacje zapisane w krokach 4.1–4.4. Nie badano całości domen; brak elementu dotyczy wskazanej próby. Dane i deklaracje firm nie są niezależnym potwierdzeniem realizacji lub partnerstw.
- Puste pole oznacza brak potwierdzenia. „Brak w TOP 10” dotyczy jednego odczytu Google, nie braku indeksacji. Numerów Map nie podstawiamy jako pozycji organicznych.
- Oceny Google i profil firmy należą do przedsiębiorstwa, a nie do wersji strony. Nowy projekt nie otrzymuje osobnych 21 opinii ani nowej pozycji Map.

## 1. Główna tabela — oferta, widoczność i kontakt

Numery pozycji organicznych odnoszą się do odczytu 4.2: `fotowoltaika Kalisz`, 8 listopada 2026, desktop, `pws=0`, komunikat o braku personalizacji; lokalizacja urządzenia niepotwierdzona. Pozycje Map to inna obserwacja z 3.3.

| Kryterium | ALFA — stara strona | ALFA — aktualny projekt | G-PRO | 3DSmart | Aurelum | PROWABLE | Ekosolary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pozycja organiczna | Użytkownik wcześniej zgłosił około 20. miejsca i „O nas”; w kontrolowanym odczycie 4.2 brak w pierwszej dziesiątce. Nie są to te same warunki pomiaru. | Nie dotyczy jako osobnej wersji lokalnej; brak potwierdzonego wdrożenia i pomiaru po wdrożeniu. | 2 | 3 | Brak w sprawdzonej pierwszej dziesiątce. | Brak w sprawdzonej pierwszej dziesiątce. | Brak w sprawdzonej pierwszej dziesiątce; strona wystąpiła w innym odczycie 4.1. |
| Adres znaleziony organicznie w 4.2 | | | Strona główna `/`. | Strona główna `/`. | | | |
| Lokalna strona PV / Kalisz | Istnieją `/fotowoltaika/` i `/fotowoltaika-kalisz/`; drugi adres wcześniej prowadził do „O nas”. Przeznaczenie wymaga uporządkowania. | Są `/fotowoltaika/` oraz `/kalisz/`; druga ma H1 o fotowoltaice w Kaliszu, lokalne realizacje i FAQ. Role obu stron trzeba określić w strategii fraz. | `/oferta/fotowoltaika/`; lokalność mocno eksponowana na home. | `/fotowoltaika-dla-domu.html`; lokalne realizacje i siedziba. | `/fotowoltaika-dla-domu/` i oferta biznesowa; lokalność przez adres i realizacje. | Link `/fotowoltaika-kalisz/`; treść nieodczytana w 4.2 z powodu 429, dostępna w pomiarze PSI. | `/oferta/fotowoltaika`; Kalisz w title i H1 home. |
| Realizacje — zdjęcia | Tak według wcześniejszych źródeł. | 27 wpisów z galeriami i `sourceUrl`; 4 z lokalizacją „Kalisz”. | Galeria i osobne karty. | Zdjęcia i osobne przykłady projektów. | Zdjęcia i podpisane projekty. | | Galeria zdjęć. |
| Realizacje — miejscowości i parametry | Wcześniejsze opisy zawierają miejscowości, panele, falowniki i magazyny. | Miejscowości, oryginalne tytuły, konfiguracje sprzętu i źródła. Nie każdy wpis musi mieć wszystkie parametry — nie utożsamiamy 27 wpisów z 27 kompletnymi studiami przypadku. | W próbce Kalisz/powiat kaliski bez mocy i modelu falownika. | Konkretne moce/pojemności i miejscowości, np. Kalisz 49,14 kW. | Konkretne moce i miasta, np. Kalisz 328,58 kWp. | | W odczytanej galerii brak przypisanych miast i mocy. |
| Opinie Google — profil firmy | 4,8 / 21. | Ten sam profil: 4,8 / 21, nie nowa pula recenzji. | 4,9 / 44. | 5,0 / 77. | 5,0 / 46. | 4,8 / 88. | 4,3 / 6 w odczytanych publicznych kartach. |
| Opinie prezentowane na stronie | | 7 tekstów; komponent pokazuje 4,8 / 20, czyli nieaktualną liczbę. Jest link do profilu; część tekstów to parafrazy. | Deklaracja 4,9 Google, bez źródłowego linku i tekstów w odczycie home. | Odsyłacz do referencji i 12 skanów; niezweryfikowana autentyczność. | Widget autorów/dat/tekstów i referencje; liczba 40 inna niż 46 w Google. | Nagroda Oferteo 2022 i odnośnik kategorii pomp, nie potwierdzona lista opinii PV. | Nie znaleziono podpisanych recenzji w odczytanej home. |
| HTTPS — zaobserwowany stan | Błąd `ERR_CERT_DATE_INVALID` w próbie 8 listopada. Nie potwierdzono dokładnej daty wygaśnięcia. | Zależny od wdrożenia i hostingu; nie można uznać HTTPS za naprawione na podstawie kodu lub wpisania adresu `https://`. | Strona otwarta przez HTTPS bez napotkanego ostrzeżenia. | Jak obok — HTTPS działał w próbie. | Jak obok — HTTPS działał w próbie. | Home otwarta przez HTTPS; część podstron przy pobieraniu zwracała 429, co nie jest błędem certyfikatu. | Strona otwarta przez HTTPS bez napotkanego ostrzeżenia. |
| CTA | Pełna aktualna ocena niedostępna; wcześniejsze źródła opisują wycenę i kontakt. | „Umów bezpłatną wycenę”, przejście do kontaktu, `tel:`, `mailto:` i WhatsApp. Obecność w kodzie, bez pomiaru konwersji. | Bezpłatna wycena, telefon, oddzwonienie. | „Porozmawiajmy”, oddzwonienie i wycena. | Wycena, konsultacja i wizja lokalna. | Kontakt, raty i dotacje. | Kontakt, konsultacje i przejścia do oferty. |
| Formularz / rozpoczęcie kontaktu | | Na stronie kontaktowej w badanych plikach telefon i e-mail; widget WhatsApp ma jedno pole wiadomości i otwiera `wa.me`. Nie potwierdzono klasycznego formularza z wysyłką do firmy. | 4 pola danych + zgoda; 3 pola wymagane. | Callback 1 pole + zgoda; pełna wiadomość 4 pola + zgoda. | Modal 5 pól + zgoda; kontakt 6 pól + zgoda. | Główny 4 pola + zgoda; raty 6 pól + zgoda. | Kontakt 4 pola + zgoda + CAPTCHA. |
| Telefon — pierwszy ekran mobile | | Linki telefoniczne są w kodzie; pierwszego ekranu projektu w tym porównaniu nie testowano. | Ikona telefonu w nagłówku. | Ikona telefonu w nagłówku. | Brak na pierwszym ekranie; numer dostępny po otwarciu menu i dalej na stronie. | Dwa numery na górze. | Numer na górze. |
| FAQ / odpowiedzi klientom | FAQ istnieje według wcześniejszych źródeł; treści wymagają kontroli aktualności. | 15 pytań w `FAQ_ITEMS`, strona `/kontakt/faq`; dodatkowe 3 pytania na `/kalisz`. To ilość treści, nie ocena poprawności faktów. | W sprawdzonej ofercie PV brak rozwiniętego FAQ. | FAQ na podstronie PV: cena, zima, żywotność i inne pytania. | 5 pytań na home; starsze odniesienia na podstronie PV. | Linki FAQ/blog; pełnej zawartości nie oceniono. | Dużo opisów technicznych i procesu; nie potwierdzono osobnej sekcji FAQ. |
| Rzeczywista lokalność | Adres Ceków Kolonia 6a; miejscowości realizacji w regionie. | Rozróżnia siedzibę w Cekowie i obsługę Kalisza; adres, mapa i realizacje. Twierdzenia o zasięgu oraz usługach do potwierdzenia z Rafałem. | Adres Kalisz, realizacje, lista gmin; komunikaty 100/50 km wymagają wyjaśnienia. | Siedziba Kalisz oraz lokalne projekty z parametrami. | Pruszków 67 i projekty w Kaliszu/Wolicy. | Adres Skarszewska 4, Kalisz i lokalny title. | Adresy Kalisz i region; obecna też sekcja Olsztyn, która nie dowodzi lokalnej realizacji. |

### Doprecyzowania głównej tabeli

- Ekosolary 4,3 / 6 pochodzi z publicznej karty zaobserwowanej podczas odczytu Google/Map; liczby opinii mogą się zmieniać. Wartość G-PRO 44 przyjęto z profilu bezpośredniego; w podobnych wyszukiwaniach wcześniej pojawiło się także 47 — rozbieżność jest opisana w analizie opinii.
- Puste realizacje PROWABLE oznaczają brak odczytu, nie brak portfolio. Pozytywny pomiar PSI nie zastępuje przeczytania galerii.
- Obserwacja HTTPS nie jest audytem wszystkich aspektów bezpieczeństwa, formularzy, nagłówków czy odporności strony.
- FAQ projektu zawiera deklaracje o bezpłatnym dojeździe, własnej ekipie i zakresie wsparcia. Nie uznajemy ich automatycznie za potwierdzone fakty o firmie wyłącznie dlatego, że są zapisane w kodzie.

## 2. Tabela techniczna — metadata i pomiary

| Kryterium | ALFA — stara strona | ALFA — aktualny projekt | G-PRO | 3DSmart | Aurelum | PROWABLE | Ekosolary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kierunek title strony głównej | Wcześniej indeksowany tytuł „Fotowoltaika Kalisz – ALFA Rafał Morańda”; brak nowego odczytu tagu. | Konfiguracja: `Fotowoltaika Kalisz — bezpłatna wycena` + ALFA. | Usługi + Kalisz + marka. | OZE + grupy odbiorców + marka. | Długi opis oferty, 770 znaków. | Pompy ciepła + Kalisz. | Fotowoltaika + montaż + Kalisz. |
| H1 home | | W kodzie: „Instalacje dla domu i firmy w Kaliszu”; lead doprecyzowuje PV, elektrykę i bezpieczeństwo. | Jasny zakres PV/pompy/dachy. | Brak H1 w źródle i odczytanym DOM. | Nagłówek korzyści: własna energia i komfort. | Ogólne „rozwiązania dla twojego domu”. | Sprzedaż i montaż paneli w Kaliszu. |
| Meta description | | Zdefiniowane w konfiguracji: PV, Kalisz, zakres i wycena; bez odczytu wyrenderowanej produkcji. | Jest. | Jest. | Brak w zapisanym HTML. | Jest w polskiej wersji. | Jest. |
| Canonical home | | Konfiguracja `/` przy bazie `https://www.moranda.com.pl`; wynik produkcyjny niezweryfikowany. | Wskazuje home HTTPS. | Wskazuje home HTTPS. | Wskazuje home HTTPS. | Wskazuje polską home HTTPS. | Brak tagu w zapisanym HTML; inne mechanizmy canonical niepotwierdzone. |
| PSI mobile — mediana home | Brak odczytanych wartości poprzedniego zrzutu PSI. | Nie mierzono w równoważnym publicznym środowisku. | 76 (76–80). | 65 (60–70). | 62 (59–62). | 99 (97–99). | 53 (51–54). |
| PSI mobile — mediana podstrony PV | | | 97 (94–97). | 73 (68–73). | 72 (72–72). | 97 (97–97). | 75 (56–75). |
| Laboratoryjne LCP — mediana home | | | 5,468 s. | 13,696 s. | 32,476 s. | 1,671 s. | 8,553 s. |
| CrUX — rzeczywiści użytkownicy | | Nie ma osobnego pomiaru projektu; nie dziedziczy automatycznie danych starej witryny jako dowodu swojego działania. | Brak danych w sprawdzonych raportach. | Origin: zaliczone; LCP 2,3 s, INP 190 ms, CLS 0. | Brak danych w sprawdzonych raportach. | Origin: niezaliczone; LCP 3,4 s, INP niedostępny, CLS 0,01. | Brak danych w sprawdzonych raportach. |

Pomiary PSI: po trzy żądania analizy na każdy URL, raporty z 8 listopada 2026, 22:12–22:18 CET; Lighthouse 13.6.0/Moto G Power/4G. Wyniki dotyczą mobile. Mediany metryk obliczono oddzielnie. CrUX dotyczy ostatnich 28 dni i poziomu origin; nie jest oceną konkretnej podstrony. Nie dopisujemy projektu ALFA do rankingu szybkości bez analogicznego pomiaru.

## 3. Co aktualny projekt już poprawia względem starego punktu wyjścia

Na podstawie struktury kodu można stwierdzić, że projekt ma:

1. **Odrębny lokalny adres `/kalisz/`**, który rzeczywiście opisuje obsługę Kalisza, zamiast opierania tej roli na stronie „O nas”. Nie oznacza to jeszcze, że nowy adres będzie rankował lepiej.
2. **Katalog 27 realizacji z galeriami i adresami źródłowymi.** Cztery wpisy mają lokalizację „Kalisz”. Sam katalog starej strony nie był brakiem — projekt porządkuje istniejący materiał, a nie tworzy 27 nowych realizacji firmy.
3. **Osobne wejścia do PV, elektryki i CCTV**, lokalną treść oraz zdefiniowane title, description i canonical.
4. **Widoczne w kodzie ścieżki kontaktu i treści do wyceny**, w tym telefon, mail, WhatsApp oraz wskazówki, co przygotować. Nie potwierdzono w tym kroku ich wygody mobilnej ani działania biznesowego.
5. **Rozbudowane FAQ i recenzje**, które wymagają kontroli źródeł, aktualności oraz zgodności deklaracji z rzeczywistą ofertą.

Nie określamy projektu jako „zdecydowanie lepszego od wszystkich konkurentów”. Mamy dowody obecności elementów i treści, ale nie mamy jeszcze porównywalnych dowodów szybkości, konwersji ani wyniku po wdrożeniu.

## 4. Najważniejsze luki projektu do dalszego planowania

| Obszar | Co zrobić w późniejszym etapie | Dlaczego |
| --- | --- | --- |
| Wynik i wersja produkcyjna | Ustalić wdrożenie, naprawić produkcyjne HTTPS i zmierzyć publiczną wersję tą samą metodą. | Kod nie dowodzi bezpieczeństwa połączenia ani szybkości hostingu. |
| Role podstron | Przypisać intencję i frazy do home, `/fotowoltaika` i `/kalisz`; opracować mapowanie starych URL przy migracji. | Nie ma jeszcze dowodu kanibalizacji, ale role powinny być jasne. Nie usuwać adresów na podstawie samych nazw. |
| Dowody realizacji | Uzupełniać opis problemu, zakres i udokumentowane parametry w istniejących kartach. | 3DSmart i Aurelum pokazują konkretne parametry; ALFA ma materiał do podobnie rzeczowej prezentacji. |
| Opinie | Poprawić liczbę 20 wobec 21 w odczycie; uporządkować cytaty/parafrazy i źródła, uzgodnić proces neutralnych próśb. | Liczba firmowa jest wspólna dla obu wersji, a tekstów klientów nie należy rozbudowywać za nich. |
| Kontakt i formularz | Ustalić, czy potrzebujemy także prostego formularza/oddzwonienia poza telefonem, mailem i WhatsApp; następnie sprawdzić dostarczenie i pomiar. | W badanym kontakcie nie potwierdzono zwykłej wysyłki formularza. W `/kalisz` występuje obietnica kontaktu przez formularz, więc tekst trzeba dopasować do faktycznej ścieżki. |
| Pomiar leadów | Oddzielić kliknięcie telefonu i otwarcie WhatsApp od rzeczywiście otrzymanego zapytania oraz sprzedaży. | `whatsapp_message_started` i lokalny licznik zapisują rozpoczęcie ścieżki; nie dowodzą wysłania wiadomości lub podstawy prowizji. |
| Mobile | Sprawdzić pierwszy ekran, dostęp do telefonu, nawigację i czas dotarcia do wyceny w uruchomionym projekcie. | Konkurenci byli oglądani w 390 × 844; projektu nie należy oznaczać jako zaliczonego bez analogicznej próby. |
| Fakty i aktualność | Potwierdzić z Rafałem usługi, ekipy, dojazd, formalności, gwarancje i zasady wyceny; osobno aktualność programów i cen. | Treść projektu jest propozycją publikacji, a nie źródłem prawdy o firmie. |

Lista jest materiałem planistycznym wynikającym z tabeli, nie wykonanym wdrożeniem ani rozpoczęciem kolejnego kroku.

## 5. Źródła i ślad porównania

- [Zadanie 3 — publiczny profil, kontakt starej strony i ograniczenia](audyt-profilu-google-2026-11-08.md).
- [Krok 4.2 — treści, dowody, formularze, mobile i pozycje](zadanie-4-2-porownanie-stron-2026-11-08.md).
- [Krok 4.3 — dokładne title, meta, H1/H2, canonical i linki](konkurencja-4-3-metadane-2026-11-08.md).
- [Krok 4.4 — PSI oraz CrUX](zadanie-4-4-pagespeed-2026-11-08.md).
- [Starszy odczyt ALFA i konkurencji z 31 października](../../research/konkurencja-oferta-homepage.md) — historyczny materiał pomocniczy, nie nowy test starej witryny.
- Aktualny projekt: [metadata layoutu](../../src/app/layout.js), [dane firmy](../../src/lib/site.js), [home](../../src/app/page.js), [oferta PV](../../src/app/fotowoltaika/page.js), [strona lokalna](../../src/app/kalisz/page.js), [realizacje](../../src/data/installations.js), [FAQ](../../src/data/faq.js), [kontakt](../../src/components/ContactBanner/ContactBanner.jsx), [recenzje](../../src/components/CustomerReviews/CustomerReviews.jsx), [dane recenzji](../../src/data/customerReviews.js), [WhatsApp i zdarzenie rozpoczęcia](../../src/components/WhatsAppWidget/WhatsAppWidget.jsx).

**Status:** krok 4.5 opracowany. Ujęto starą ALFA, osobno aktualny projekt i wszystkich pięciu konkurentów. Braki pozostały jawne. Nie uruchamiano nowych testów PSI, nie publikowano treści ani nie zmieniano kodu.
