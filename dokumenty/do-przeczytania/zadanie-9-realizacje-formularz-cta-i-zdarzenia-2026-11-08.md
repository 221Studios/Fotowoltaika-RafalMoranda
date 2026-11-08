# Zadanie 9 — realizacje i system kontaktu

Stan: 8 listopada 2026. Projekt bez logowania, oparty na obecnym repozytorium. Przygotowano porównanie, szablon redakcyjny, projekt formularza, CTA i specyfikację zdarzeń. Nie zmieniono aplikacji, nie uruchomiono analityki ani odbioru formularzy.

## Porównanie z tym, co już mamy

| Część planu | Stan naszego projektu | Wniosek |
| --- | --- | --- |
| Wykorzystanie autentycznych realizacji | 27 rekordów z miejscowościami, urządzeniami, galeriami i adresami materiałów źródłowych | Zrealizowane jako baza danych i katalog; źródła pozostają punktem odniesienia do weryfikacji |
| Jeden szablon realizacji | Istnieje `/realizacje/[slug]/`: nagłówek, parametry, przebieg, galeria, opinia, FAQ i następna realizacja | Zakres sekcji większy niż szkic, ale część danych dopisywana jest wspólnie przez szablon |
| Potwierdzone parametry i efekt | Część danych pochodzi z rekordu; inne są stałe lub wyliczane z mocy | Wymaga oddzielenia danych od założeń; nie spełnia jeszcze w pełni zasady niewymyślania faktów |
| Formularz zapytania | Telefon, e-mail i WhatsApp działają jako kanały kontaktu. Formularz w widżecie tylko otwiera WhatsApp | Brakuje formularza przyjmowanego przez system strony; poniżej gotowa specyfikacja |
| CTA | Istnieją przyciski do kontaktu na home i usługach oraz globalny kontakt | Brakuje wyraźnego CTA dotyczącego oglądanej realizacji |
| Pomiar | W kodzie znaleziono `whatsapp_message_started`; nie znaleziono pozostałych pięciu zdarzeń z planu ani kompletnej konfiguracji GA4 | Specyfikacja gotowa poniżej; wdrożenie i odbiór pozostają osobnym krokiem |

Przegląd dotyczy kodu i danych. Nie przeprowadzono w tym zadaniu nowych testów interfejsu ani wysyłki. Wcześniejszy przegląd desktop/mobile znajduje się w zadaniu 8.

## 9.1. Realizacje — co zachować, co skorygować

Zachowujemy katalog, adresy, lokalizacje, zdjęcia oraz wyposażenie pochodzące z rekordów. Przykłady z przesłanego planu już są w projekcie:

| Miejscowość | Dane zapisane w rekordzie wyposażenia | Zdjęcia w rekordzie |
| --- | --- | --- |
| Stary Nakwasin | Moduły 550 Wp, Huawei SUN2000 10KTL M1, magazyn 10 kWh; nazwa LUNA2000 występuje w tytule źródłowym | 10; szablon pokazuje do 5 w galerii |
| Przespolew Kościelny | Moduły 500 Wp, Huawei SUN2000 8KTL M1, magazyn 5 kWh; nazwa LUNA2000 w tytule źródłowym | 3 |
| Plewnia | Moduły 500 Wp, Huawei SUN2000 6KTL M1; brak informacji o magazynie | 5 |

Nie wolno utożsamiać mocy pojedynczego modułu w Wp ani znamionowej mocy falownika z łączną mocą modułów PV w kWp. Brak informacji o magazynie oznacza brak potwierdzenia, a nie pewność, że go nie było. W 15 z 27 rekordów wyposażenie ma osobne pole „Moc instalacji”; w pozostałych 12 trzeba sprawdzić tytuł źródłowy lub dokumentację zamiast uzupełniać moc automatycznie z falownika.

### Rozbieżności z wymaganiem potwierdzonych danych

W `src/app/realizacje/[slug]/page.js` znaleziono:

- Zastępowanie brakującej mocy PV liczbą wyciągniętą z oznaczenia falownika, a w ostateczności wartością 6,4 kWp. To nie jest potwierdzona moc instalacji.
- Stałe „Dach skośny, blachodachówka” i „1 dzień roboczy” dla wszystkich stron.
- Roczne zapotrzebowanie budynku obliczane jako moc × 1000 i przedstawiane w parametrach konkretnej inwestycji. To nie jest odczyt rachunków klienta ani uzysku instalacji.
- Wspólną historię o wzroście zużycia energii, a dla wybranego Kalisza opowieść o pompie ciepła i rachunkach około 800 zł — bez powiązanego pola dowodu w rekordzie realizacji.
- Wspólny cytat przypisywany właścicielowi domu w każdej miejscowości. Brak indywidualnego źródła opinii w rekordzie nie pozwala traktować go jako autentycznej wypowiedzi danego klienta.
- FAQ może stwierdzać, że właśnie ten montaż zajął jeden dzień, mimo braku takiego potwierdzenia w rekordzie.

Te fragmenty traktujemy jako **treści robocze do potwierdzenia lub pominięcia**, nie jako udokumentowane fakty. Zdjęcia i parametry urządzeń nie potwierdzają automatycznie historii klienta, czasu prac ani opinii. Nie trzeba wymyślać efektu finansowego, aby opublikować wartościową realizację.

W czterech rekordach są tylko dwa zdjęcia: Aleksandria (`online-business-goals`), Kalisz z instalacją 10 kWp i magazynem 5 kWh, Skrzatki oraz Ceków z instalacją 7 kWp. Pokazujemy dostępne zdjęcia; docelowe 3–6 to wskazówka redakcyjna, nie powód do duplikowania ani generowania dokumentacji.

Gotowy materiał do uzupełniania: [szablon pojedynczej realizacji](zadanie-9-szablon-pojedynczej-realizacji-2026-11-08.md). Puste miejsca są zamierzone. W wersji publicznej niepotwierdzone pola pomijamy albo uczciwie opisujemy brak danych; nie publikujemy wewnętrznych luk i uwag redakcyjnych.

## 9.2. Projekt formularza

**Miejsce:** `/kontakt/`, pod wstępem, obok bezpośredniego telefonu i e-maila. Proponowana kotwica `#zapytanie` jeszcze nie istnieje. Formularz służy zapytaniu, nie wiążącemu zamówieniu.

Nagłówek: **„Opowiedz nam o swojej instalacji”**.

Wstęp: „Zostaw kontakt i miejscowość. Skontaktujemy się, aby ustalić zakres prac i kolejne kroki.” Nie obiecujemy czasu odpowiedzi, którego Rafał nie potwierdził.

| Pole | Wymagane | Etykieta / pomoc | Zachowanie |
| --- | --- | --- | --- |
| Imię | Nie — propozycja uproszczenia | „Jak mamy się do Ciebie zwracać? (opcjonalnie)” | Tekst do 80 znaków; bez wymuszania nazwiska |
| Telefon lub e-mail | Tak, jeden sposób kontaktu wystarczy | „Telefon lub e-mail”; „Wpisz numer telefonu albo adres e-mail” | Jedno pole; nie wymaga obu danych. Sprawdzenie adresu e-mail albo numeru po usunięciu spacji i separatorów, z obsługą prefiksu kraju |
| Miejscowość | Tak | „Gdzie planujesz instalację?” | Tekst do 120 znaków; bez prywatnego adresu na etapie zapytania |
| Rodzaj usługi | Tak | „W czym możemy pomóc?” | Lista: Fotowoltaika; Magazyn energii; Instalacje elektryczne; Monitoring CCTV; Potrzebuję doradztwa. Początkowo „Wybierz usługę”, chyba że użytkownik przeszedł z konkretnej usługi |
| Dodatkowe informacje | Nie | „Co warto wiedzieć? (opcjonalnie)” | Do 1500 znaków. Pomoc: „Np. nowa instalacja czy rozbudowa, przybliżone zużycie energii. Nie przesyłaj danych wrażliwych.” |

Proponowane limity są założeniami wdrożeniowymi. Formularz nie wymaga rachunku, numeru PPE, zdjęć, budżetu ani załączników. Listę dokumentów do szczegółowej wyceny zachowujemy jako późniejszą pomoc, nie warunek wysłania pierwszego zapytania.

Przycisk: **„Wyślij zapytanie”**. Alternatywa obok: **„Wolisz porozmawiać? +48 600 306 425”**.

Układ komputerowy: imię i kontakt w jednym rzędzie, miejscowość i usługa w następnym, wiadomość na całą szerokość. Na telefonie wszystkie pola i przycisk w jednej kolumnie. Etykiety pozostają widoczne; nie zastępujemy ich samymi placeholderami. Błędy są przypisane do pól, dostępne dla klawiatury i czytnika ekranu; informacja o wysyłaniu nie opiera się wyłącznie na kolorze.

### Stany formularza i teksty

| Stan | Komunikat / zachowanie |
| --- | --- |
| Brak kontaktu | „Podaj numer telefonu lub adres e-mail.” |
| Niepoprawny kontakt | „Sprawdź numer telefonu lub adres e-mail.” Dane pozostałych pól zostają |
| Brak miejscowości / usługi | „Podaj miejscowość.” / „Wybierz rodzaj usługi.” |
| Wysyłanie | „Wysyłanie…”; blokada kolejnego kliknięcia; bez zdarzenia sukcesu |
| Potwierdzone przyjęcie | „Dziękujemy. Otrzymaliśmy Twoje zapytanie. Skontaktujemy się w sprawie szczegółów.” Identyfikator zgłoszenia można pokazać po potwierdzeniu zapisu |
| Błąd przyjęcia | „Nie udało się potwierdzić przyjęcia zapytania. Spróbuj ponownie lub zadzwoń: +48 600 306 425.” Nie kasujemy wpisanych danych |
| Brak odpowiedzi serwera | Zachowanie danych i możliwość ponowienia z tym samym identyfikatorem próby; bez drugiego leada, jeśli pierwszy zapis jednak się powiódł |

### Informacja o danych i zgody — część do domknięcia przed publikacją

Pod formularzem planujemy krótką informację: „Administratorem danych jest ALFA Rafał Morańda. Dane wykorzystamy do obsługi Twojego zapytania. Szczegóły przetwarzania danych i Twoich praw znajdziesz w informacji o prywatności.” To **szkic**, nie kompletna klauzula do publikacji.

Trzeba uzupełnić i potwierdzić pełną informację: dane administratora i kontakt, cel i podstawę przetwarzania, odbiorców / dostawców, okres lub kryterium przechowywania, prawa osoby, informację o wymaganych danych i pozostałe elementy właściwe dla rzeczywistego procesu. Podstawę i zakres dopasowujemy do odbioru zapytań, nie zastępujemy ich jednym obowiązkowym checkboxem „zgadzam się na wszystko”. Nie projektujemy tu newslettera ani zgody marketingowej. Zgody analityczne są odrębnym mechanizmem i nie warunkują możliwości wysłania zapytania. [RODO — art. 6, 7 i 13, tekst urzędowy](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=pl).

Nie znaleziono strony polityki prywatności w sprawdzonym drzewie `src/app`. Docelowy adres informacji o prywatności: **________**. Retencja: **________**. Dostawca odbioru danych i jego konfiguracja: **________**. Nie publikujemy formularza z nieaktywnym linkiem do informacji ani z nieuzupełnioną klauzulą.

### Projekt obsługi technicznej i CRM

Projekt ma `output: "export"`, dlatego samo dodanie pól nie tworzy działającego odbioru po stronie serwera. Proponowany model: statyczna strona wysyła zapytanie do oddzielnego endpointu HTTPS, który waliduje dane, zabezpiecza przed spamem i trwale rejestruje zgłoszenie. Dostawca / hosting endpointu pozostaje do wyboru; żadnego zewnętrznego serwisu nie uruchomiono. Docelowy endpoint: **________**.

Przepływ: formularz → serwerowa walidacja → trwały zapis z `submission_id` → potwierdzenie przyjęcia → synchronizacja do CRM i powiadomienie Rafała. Nie pokazujemy sukcesu po samym kliknięciu ani po utworzeniu wiadomości `mailto:`. Awaria powiadomienia po trwałym zapisie wymaga ponowienia i widocznego statusu obsługi; nie może zgubić zapytania. Jeśli zapis się nie powiódł, formularz nie ogłasza sukcesu.

Próba wysyłki ma losowy klucz idempotencji, a serwer zwraca ten sam identyfikator przy ponowieniu tej samej próby. Odrębne prawidłowe zapytanie może dostać nowe ID; decyzja, czy dotyczy istniejącej szansy sprzedaży, należy do CRM. Formularz i odbiór działają także bez zgody na analitykę.

Do CRM trafiają potrzebne dane kontaktowe, usługa, miejscowość, otrzymana wiadomość, data pierwszego kontaktu, `submission_id`, kontekst realizacji i źródło. `Lead ID` jest stabilnym identyfikatorem szansy, odrębnym od `submission_id`. Dane źródła obejmują dozwolone UTM i oczyszczoną stronę wejścia; nie zapisujemy dowolnych pełnych URL-i z danymi klienta. Dane wysyłane z przeglądarki wymagają walidacji serwerowej i nie są same w sobie dowodem przypisania prowizji.

Odbiorca operacyjny: Rafał; skrzynkę `rafal@moranda.com.pl` trzeba potwierdzić i przetestować przed uruchomieniem. Docelowy CRM z zadania 6 istnieje obecnie jako plik do importu, nie jako działająca integracja Google Sheets. Klucze dostępu zostają po stronie serwera. Plan zabezpieczeń: walidacja, ograniczenie długości, limit żądań i kontrola spamu, bez logowania pełnych danych kontaktowych do publicznych logów.

## Projekt CTA

| Miejsce | Główny przycisk / link | Docelowe zachowanie | Stan |
| --- | --- | --- | --- |
| Pojedyncza realizacja, po parametrach i po galerii | „Zapytaj o podobną instalację” | Przejście do kontaktu z zachowaniem publicznego identyfikatora realizacji; pole usługi PV wstępnie wybrane, użytkownik może zmienić | Propozycja do dodania |
| Katalog realizacji | „Porozmawiaj o swojej instalacji” | Kontakt, bez przypisywania konkretnej realizacji | Propozycja do dodania |
| Oferta PV | „Poproś o wycenę fotowoltaiki” | Kontakt z wstępnie wybraną usługą PV | Do dopracowania z PV |
| Sekcja magazynów | „Zapytaj o dobór magazynu” | Kontakt z usługą Magazyn energii | Propozycja do dopracowania |
| Elektryka / CCTV | Istniejące przyciski oględzin i wyceny monitoringu | Zachować przejście do kontaktu; docelowo wybrać właściwą usługę | Linki istnieją; kontekst formularza do dodania |
| Kontakt | „Wyślij zapytanie” | Próba przyjęcia formularza z opisanymi stanami | Projekt |
| Kontakt bezpośredni | „Zadzwoń”, „Napisz e-mail”, „Przejdź do WhatsApp” | Otworzenie odpowiedniej aplikacji, bez obietnicy wysłania / odebrania wiadomości | Kanały istnieją |

Proponowany schemat linku z realizacji: `/kontakt/?usluga=fotowoltaika&realizacja={publiczny-slug}#zapytanie`. To projekt, nie potwierdzona funkcja. Parametry są walidowane z listy usług i istniejących realizacji; nie ma w nich danych kontaktowych. Bez UTM na linkach wewnętrznych. Nie używamy tekstu „z magazynem energii”, jeśli konkretny wpis tego nie potwierdza.

Na telefonie CTA ma własne miejsce w treści; widget WhatsApp nie może go zasłaniać. „Następna realizacja” pozostaje linkiem do oglądania prac, nie zastępuje przycisku zapytania.

## 9.3. Jedna specyfikacja zdarzeń

Poniższe nazwy porządkują robocze propozycje z zadania 6. To **docelowy kontrakt**, nie deklaracja, że zdarzenia już trafiają do GA4. `generate_lead` jest nazwą zalecaną przez Google dla przesłanego formularza / zapytania. Pozostałe cztery są własnymi nazwami naszego projektu. [Zdarzenia zalecane GA4](https://support.google.com/analytics/answer/9267735?hl=pl).

| Zdarzenie | Dokładny wyzwalacz | Parametry z listy dozwolonych | Znaczenie |
| --- | --- | --- | --- |
| `generate_lead` | Potwierdzenie trwałego przyjęcia poprawnego formularza; raz na przyjęte zgłoszenie, po sprawdzeniu uprawnienia do pomiaru | `form_id=contact_quote_v1`, `service_type`, `cta_location`, opcjonalny publiczny `realization_id` | Otrzymany formularz; nie kwalifikacja leada, umowa ani sprzedaż |
| `click_phone` | Aktywacja linku `tel:` myszą, dotykiem lub klawiaturą | `cta_location`, `service_type`, opcjonalny `realization_id` | Intencja telefonu; nie potwierdza rozmowy |
| `click_email` | Aktywacja linku `mailto:` | Jak wyżej | Intencja napisania; nie potwierdza wysłanej wiadomości |
| `click_whatsapp` | Aktywacja „Przejdź do WhatsApp” z niepustą wiadomością lub bezpośredniego linku `wa.me` | `cta_location`, `service_type`; wybrany temat jako ustalona kategoria | Próba przejścia do komunikatora; nie potwierdza wysłania, dostarczenia ani nawet otwarcia aplikacji |
| `view_realization` | Zakończone wejście na prawidłową stronę `/realizacje/{slug}/`; zarówno bezpośrednie, jak i przez nawigację aplikacji | Publiczny `realization_id`, `service_type=fotowoltaika` | Odsłona konkretnego opisu; nie lead |

`view_realization` nie wyzwala się przy wyświetleniu karty w katalogu, preloadzie ani 404. Jedna odsłona = jedno zdarzenie; ponowne świadome wejście po opuszczeniu strony może być kolejną odsłoną. Ponowne renderowanie komponentu i animacje nie tworzą dodatkowych odsłon. Nie sumujemy `page_view` i `view_realization` jako dwóch różnych odwiedzin.

`click_whatsapp` nie uruchamia się przy otwieraniu samego panelu, wybieraniu tematu ani wpisywaniu tekstu. Obecny `whatsapp_message_started` pasuje znaczeniowo do próby przejścia do komunikatora. Przy wdrożeniu wybieramy **jedno** mapowanie tego sygnału do `click_whatsapp` albo zastępujemy nazwę w aplikacji; nie raportujemy obu jako dwóch kontaktów. Obecny licznik `localStorage` i dodatkowy CustomEvent również nie są niezależnymi leadami.

Nazwy do zastąpienia w wcześniejszym planie: `contact_phone_click` → `click_phone`, `contact_email_click` → `click_email`, planowane `lead_received` → `generate_lead`. Nie wdrożono tych nazw wcześniej, więc jest to uporządkowanie dokumentacji. Jeżeli później automatyczny pomiar formularzy zbiera `form_submit`, nie uznajemy go za dodatkowego leada obok `generate_lead`.

Kategoryczne wartości `service_type`: `fotowoltaika`, `magazyn_energii`, `elektryka`, `cctv`, `doradztwo`, `nieustalone`. `cta_location`: `hero`, `service_content`, `realization_details`, `realization_gallery`, `catalog`, `contact_form`, `footer`, `floating_widget`, `menu`. Wartości muszą odpowiadać faktycznemu miejscu działania; nie zgadujemy źródła pozyskania na podstawie CTA.

Do GA4 nie wysyłamy imienia, telefonu, e-maila, treści zgłoszenia, prywatnego adresu, numeru PPE, pełnego URL-u `wa.me?text=...` ani URL-u z danymi osobowymi. Dotyczy to też parametrów automatycznie zbieranych zdarzeń kliknięcia. `submission_id`, `Lead ID` i dowody sprzedaży pozostają w systemie odbioru / CRM; nie są potrzebne do tego podstawowego planu GA4. [Zasady Google o danych identyfikujących](https://support.google.com/analytics/answer/6366371?hl=pl).

Zdarzenia uruchamiamy dopiero po wdrożeniu właściwego mechanizmu zgód. `generate_lead` to proponowane zdarzenie kluczowe pomiaru formularzy. Kliknięcia kontaktu i oglądanie realizacji raportujemy oddzielnie, bez traktowania jako pozyskanych klientów. Nie przypisujemy fikcyjnej wartości `value` ani prowizji; umowy i wpłaty potwierdza CRM.

### Warunki odbioru przyszłego wdrożenia

1. Brak wymaganych danych lub błąd serwera: brak leada i brak `generate_lead`.
2. Poprawne przyjęcie: jeden trwały zapis i jeden identyfikator; zdarzenie po potwierdzeniu, jeśli pomiar dozwolony.
3. Dwuklik, ponowienie po timeout i odświeżenie potwierdzenia: bez nowego zapisu tej samej próby i bez ponownego zdarzenia sukcesu.
4. Odmowa analityki: zapytanie nadal dochodzi do systemu; brak niedozwolonego wysłania zdarzeń. Liczba formularzy w GA4 nie musi równać się CRM.
5. Telefon, e-mail, WhatsApp: jedna aktywacja = jedno właściwe zdarzenie; anulowanie kontaktu w aplikacji zewnętrznej nie tworzy leada w CRM.
6. Wejście bezpośrednie i przejście między realizacjami: po jednej odsłonie każdej otwartej strony; brak zdarzenia z samej karty.
7. Kontrola raportów, adresów URL i parametrów zdarzeń: brak danych kontaktowych i tekstu wiadomości, także w pomiarze automatycznym.
8. Link z realizacji: poprawnie wybrana usługa i kontekst w formularzu; źródło pierwszego kontaktu zachowane osobno.
9. Usterka synchronizacji CRM / powiadomienia: zapytanie pozostaje w trwałym rejestrze, problem jest widoczny i możliwy do ponowienia.

## Status zadania 9

**Przygotowano rezultat projektowy:** istniejący szablon został oceniony, bezpieczny szablon redakcyjny jest zapisany, a formularz, CTA, obsługa zgłoszeń i zdarzenia są opisane do wdrożenia. **Nie uznajemy systemu za wdrożony.** Pozostają: korekta / weryfikacja wspólnych deklaracji realizacji, dodanie kontekstowego CTA, odbiór formularzy, pełna informacja o danych i konfiguracja analityki.

Najpierw należy uporządkować prawdziwość danych realizacji; potem wdrożyć i przetestować formularz oraz pomiar. Materiały, których nie da się potwierdzić z repozytorium, pozostają do ręcznej weryfikacji z Rafałem. Nie uzupełniamy ich zmyślonymi liczbami.

Źródła lokalne: [szablon strony](../../src/app/realizacje/[slug]/page.js), [27 rekordów](../../src/data/installations.js), [WhatsApp](../../src/components/WhatsAppWidget/WhatsAppWidget.jsx), [kontakt](../../src/app/kontakt/page.js), [konfiguracja eksportu](../../next.config.mjs), [KPI i CRM — zadanie 6](zadanie-6-cele-kpi-i-pomiar-2026-11-08.md).
