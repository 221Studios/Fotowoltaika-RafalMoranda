# Zadanie 6 — cele, KPI i pomiar naszego projektu

Stan: 8 listopada 2026. Projekt do przygotowania; pomiar nie został uruchomiony. Dokument dotyczy nowej strony w tym repozytorium. Historyczna pozycja około 20 i obserwacje starej strony nie są punktem startowym nowego wdrożenia.

## 6.1. Trzy poziomy wyników

| Poziom | KPI i definicja | Źródło | Rytm | Punkt startowy / cel liczbowy |
| --- | --- | --- | --- | --- |
| Widoczność | Wyświetlenia i kliknięcia organiczne Google; CTR = kliknięcia / wyświetlenia | Search Console, Polska, wyszukiwanie internetowe; osobno marka i zapytania bez marki | Co 28 dni |  /  |
| Widoczność | Średnia pozycja dla „fotowoltaika Kalisz” i uzgodnionych fraz usługowych; osobno kontrola lokalnego widoku wyników | Search Console + dziennik ręcznego odczytu z lokalizacją, datą, urządzeniem i URL | Co 28 dni |  / cel strategiczny 1–3, bez gwarancji i terminu |
| Widoczność | Sesje organiczne i strony wejścia nowej strony | GA4, z opisem ograniczeń zgód i blokowania pomiaru | Co 28 dni |  /  |
| Pozyskiwanie | Kliknięcia telefonu, e-maila i przejścia do WhatsApp — oddzielne liczniki intencji kontaktu | GA4 po wdrożeniu i sprawdzeniu | Co tydzień |  /  |
| Pozyskiwanie | Unikalne otrzymane zapytania: faktycznie odebrana wiadomość, otrzymany formularz lub rozmowa; po odrzuceniu testów, spamu i duplikatów | CRM, potwierdzenie Rafała / systemu odbioru | Co tydzień |  /  |
| Pozyskiwanie | Wartościowe leady: rzeczywista potrzeba z potwierdzonej oferty i obszaru obsługi, możliwy dalszy kontakt; kwalifikacja zapisana przez Rafała | CRM | Co tydzień |  /  |
| Pozyskiwanie | Kompletność ewidencji: zapytania zapisane w CRM / wszystkie otrzymane zapytania; udział źródeł nieustalonych | Kontrola skrzynki, rozmów i CRM | Co tydzień | Cel organizacyjny: każde otrzymane zapytanie ma zapis; brak źródła zapisujemy uczciwie |
| Sprzedaż | Liczba wysłanych wycen, podpisanych umów i opłaconych umów — osobne etapy | CRM + dokumenty sprzedażowe | Tygodniowo / miesięcznie |  /  |
| Sprzedaż | Netto faktycznie otrzymane od klientów, zwroty osobno; prowizja naliczona, wypłacona i saldo | Rejestr wpłat, dokumenty i zaakceptowane reguły | Miesięcznie |  / stawka:  |

Puste miejsca oznaczają brak pomiaru albo uzgodnienia, a nie zero. Właściciel danych sprzedaży i kwalifikacji: Rafał. Właściciel raportu marketingowego i kontroli oznaczeń: Nikodem. Terminy operacyjne poniżej są propozycją.

Search Console raportuje średnią pozycję najwyższego wyniku witryny, a wyniki zależą m.in. od miejsca i urządzenia. Nie utożsamiamy tej średniej z jednym stałym miejscem w Kaliszu. Mapy raportujemy osobno. [Dokumentacja Search Console](https://support.google.com/webmasters/answer/7576553?hl=pl).

Pierwszy pełny okres bazowy: 28 dni po wdrożeniu pomiaru na produkcji i przejściu kontroli jakości. Data startu: **________**. Następnie porównanie 28 dni do poprzednich 28 dni oraz, gdy dane będą dostępne, rok do roku. Zmiany witryny, kampanii i sezonowość zapisujemy obok wyniku. Cele liczby leadów i sprzedaży ustalimy po bazie i potwierdzeniu możliwości obsługi; teraz ich nie zgadujemy.

Konwersję sprzedażową liczymy dla tej samej grupy leadów: umowy z leadów otrzymanych w danym okresie / wartościowe leady z tego okresu. Grupa pozostaje otwarta do zakończenia uzgodnionego okna przypisania. Wpłaty w miesiącu to odrębny raport przepływów, także od starszych umów. Nie dzielimy umów z bieżącego miesiąca przez dowolne bieżące zapytania. Przy zerowym mianowniku pokazujemy „brak podstawy”, nie 0%.

## Co rzeczywiście mamy w projekcie

Odczyt kodu z 2026-11-08:

- `src/components/WhatsAppWidget/WhatsAppWidget.jsx` zapisuje `whatsapp_message_started` do `dataLayer` oraz licznik w `localStorage`, a następnie otwiera `wa.me`. To przejście do komunikatora. Nie potwierdza wysłania ani odebrania wiadomości. Licznik dotyczy danej przeglądarki; nie jest liczbą osób ani leadów.
- W sprawdzonych plikach `src` nie znaleziono kompletnej instalacji GA4/GTM ani przechowywania UTM. Sam wpis do `dataLayer` nie potwierdza odbioru danych przez GA4.
- Telefon i e-mail są w komponentach kontaktowych. Nie potwierdzono pomiaru kliknięć ani odebranych rozmów.
- Nie potwierdzono działającego formularza z zapisem zgłoszenia po stronie serwera. Wzmianka o formularzu w treści nie jest potwierdzeniem dostarczenia.
- Konfiguracja metadanych wskazuje domenę produkcyjną; pomiar ma być sprawdzony na faktycznie wdrożonej stronie. Środowisko lokalne i podglądowe nie służą do raportowania klientów.

Nie dodano kodu śledzenia, nie aktywowano kont ani kampanii.

## 6.2. Projekt CRM i instrukcja pracy

Plik: [ALFA — CRM i prowizje](../../outputs/zadanie-6-2026-11-08/ALFA-CRM-i-prowizje.xlsx). Projekt zawiera trzy zakładki:

Wersja lokalna jest przygotowana do importu do Google Sheets. Utworzenie natywnego arkusza nie było możliwe: połączenie Google Drive zwróciło błąd `Unknown tool: google_drive.search`. Nie istnieje jeszcze potwierdzony link do arkusza online. Po odświeżeniu połączenia należy zaimportować plik i ponownie sprawdzić formuły, listy wyboru i dostęp.

1. **Leady** — jeden wiersz na rzeczywiste zapytanie / szansę sprzedaży. ID nadajemy raz (np. `L-000001`), zachowujemy po sortowaniu. Kolejny kontakt w tej samej sprawie aktualizuje istniejący rekord. Data pierwszego otrzymanego kontaktu pozostaje niezmienna. Wpisujemy źródło pierwsze, ostatnie, kanał, usługę, etap, kwalifikację, wcześniejszy kontakt z firmą, uzgodnienie przypisania, dowód, datę umowy i wartość netto. Formularz otrzyma niezależny `submission_id`; telefon i WhatsApp można zarejestrować ręcznie. Kolumna kontaktu służy tylko do niezbędnych danych w ograniczonym dostępie.
2. **Ustawienia** — pusta stawka, proponowane 90 dni, status „Projekt”, miejsca na daty akceptacji obu stron. Zmiana stawki w tym szablonie przeliczy całą historię, dlatego zatwierdzoną wersję reguł i zamknięty raport trzeba archiwizować. Przy zmianach warunków tworzymy nową wersję rozliczeń; nie nadpisujemy historycznych stawek.
3. **Rozliczenia** — jeden wiersz na potwierdzoną wpłatę, zwrot klientowi lub wypłatę prowizji. Każda transakcja ma własne ID, Lead ID, datę i odniesienie do dokumentu. Kwoty dotyczą PLN netto, bez VAT. Wpłata dodatnia, zwrot ujemny, wypłata prowizji dodatnia. Faktura bez wpłaty nie zwiększa podstawy. Przy fakturze brutto podstawę netto wyznacza księgowość / dokument, nie stały mnożnik dla wszystkich usług.

Wpisy `TEST-...` i wszystkie ich kwoty są fikcyjne. Nie wchodzą do podsumowania rzeczywistych leadów i prowizji. Nie zmieniaj ich typu na rzeczywisty — dodawaj prawdziwe rekordy w pustych wierszach. Przygotowano wiersze 7–106; po ich wykorzystaniu rozszerz tabele, formuły, walidacje i zakresy podsumowań razem.

Pola „Kontrola”, dni do umowy, wpłaty, prowizja, wypłacono i saldo są formułami. Nie nadpisujemy ich. Formuły blokują rozliczenie przy brakach podstawowych danych, powtórzonych ID, niepotwierdzonym przypisaniu lub braku akceptacji zasad. Są pomocą rachunkową: akceptacja stron i kontrola dokumentów pozostają konieczne. Znak minus w saldzie oznacza kwotę do uzgodnienia po zwrocie lub nadpłacie, a nie nową wypłatę.

Obsługa: zapisać rzeczywisty kontakt → sprawdzić duplikat i wcześniejszą relację → Rafał kwalifikuje i aktualizuje etap → obie strony uzgadniają przypisanie → wpisać umowę → rejestrować wpłaty/zwroty → uzgodnić raport i wypłatę. Odrzucony lead zachowuje powód. Nie usuwamy śladów sporów i anulowań.

Dostęp docelowo: Rafał i Nikodem, inne osoby tylko jeśli potrzebne do obsługi. Bez publicznego linku. Dane kontaktowe, dokumenty płatnicze i treść rozmów zostają w ograniczonym CRM / repozytorium dokumentów, nie w publicznym raporcie ani analityce. Po utworzeniu wersji Google zabezpiecz kolumny z formułami i ustaw listy wyboru. Retencję i zakres danych trzeba ustalić przed wprowadzeniem prawdziwych klientów. Nie utworzono udostępnień.

## 6.3. Zasady prowizji

Oddzielny materiał do wspólnego przeczytania: [propozycja zasad prowizji](zadanie-6-zasady-prowizji-propozycja-2026-11-08.md). Żadna stawka ani zasada nie jest tu uznana za zaakceptowaną.

## 6.4. Plan śledzenia źródeł

Nazwy zdarzeń doprecyzowano w [specyfikacji zadania 9](zadanie-9-realizacje-formularz-cta-i-zdarzenia-2026-11-08.md): `generate_lead`, `click_phone`, `click_email`, `click_whatsapp`, `view_realization`. To aktualny plan do wdrożenia; nie uruchomiono zbierania danych.

| Mechanizm | Proponowany pomiar | Co stanowi dowód |
| --- | --- | --- |
| GA4 | Sesje, strony wejścia, kampanie; planowane `click_phone`, `click_email`, `click_whatsapp` i `view_realization`; obecny sygnał `whatsapp_message_started` mapowany docelowo jednokrotnie do `click_whatsapp` | Zdarzenie kliknięcia / przejścia lub odsłony realizacji; nie rozmowa i nie sprzedaż |
| Formularz, jeśli powstanie | Losowy identyfikator zgłoszenia po trwałym przyjęciu przez system; deduplikacja ponowień; planowane zdarzenie `generate_lead` zgodnie z zadaniem 9 | Przyjęte zgłoszenie w systemie odbioru + rekord CRM; błąd wysyłki nie tworzy zdarzenia sukcesu |
| Telefon / e-mail / WhatsApp | Faktyczny odbiór kontaktu i ręczne zapisanie w CRM; pytanie o źródło | Potwierdzony kontakt, data i notatka; kliknięcie nie zastępuje odbioru |
| Search Console | Frazy, adresy docelowe, wyświetlenia, kliknięcia, CTR, średnia pozycja | Ruch w wyszukiwarce; bez przypisywania pojedynczej sprzedaży do frazy |
| UTM | Źródło / medium / kampania oraz opcjonalnie kreacja | Pochodzenie oznaczonego wejścia; wymaga zestawienia z realnym zgłoszeniem i CRM |
| CRM i dokumenty sprzedaży | Pierwsze i ostatnie źródło, potwierdzenie klienta, przypisanie, umowa, wpływ pieniędzy i zwroty | Podstawa uzgodnienia prowizji |

Taksonomia UTM: małe litery, bez danych osobowych, ustalony zapis; zawsze `utm_source`, `utm_medium`, `utm_campaign`. UTM opisuje pochodzenie ruchu. [Dokumentacja kampanii GA4](https://support.google.com/analytics/answer/10917952?hl=pl).

| Miejsce linku | source | medium | campaign |
| --- | --- | --- | --- |
| Facebook — publikacja organiczna | facebook | social | fotowoltaika_kalisz |
| Instagram — publikacja organiczna | instagram | social | fotowoltaika_kalisz |
| Facebook — płatna kampania, jeśli uruchomiona | facebook | paid_social | fotowoltaika_kalisz |
| Profil Firmy Google — link witryny, po uzyskaniu dostępu | google | organic | profil_firmy |

Przykład planowanego linku: `https://www.moranda.com.pl/?utm_source=facebook&utm_medium=social&utm_campaign=fotowoltaika_kalisz`. Właściwą podstronę wybierzemy po zatwierdzeniu adresów nowej strony. Nie dodajemy UTM do wewnętrznych linków ani zwykłych wyników SEO. Reklam Google nie oznaczamy na ślepo, jeśli później działa automatyczne tagowanie.

Źródło pierwszego kontaktu i ostatnie źródło przechowujemy oddzielnie; nie nadpisujemy pierwszego po powrocie klienta. Brak UTM nie oznacza automatycznie wejścia bezpośredniego. Referrer i deklaracja klienta pomagają, a brak ustalenia zostaje „Nieustalone”. Pytanie do klienta: „Skąd dowiedział(a) się Pan/Pani o ALFA? Czy kontaktował(a) się Pan/Pani z firmą wcześniej?”. Zachowujemy odpowiedź bez dopowiadania.

W formularzu przyszły system powinien zapisać do CRM wyłącznie potrzebne parametry źródła z listy dozwolonych, identyfikator formularza, datę i stronę wejścia. Nie przekazujemy do GA4 telefonów, e-maili, treści wiadomości ani adresów URL z takimi danymi. [Zasady Google dotyczące danych identyfikujących](https://support.google.com/analytics/answer/6366371?hl=pl). Projekt ustawień zgód, prywatności i przechowywania danych trzeba przygotować przed aktywacją pomiaru; obecny dokument nie uruchamia zbierania danych.

## Warunki uruchomienia i odbioru pomiaru

1. Potwierdzić domenę i wersję produkcyjną nowej strony, właścicieli GA4 i Search Console oraz dostęp do odbieranych zgłoszeń.
2. Uzgodnić reguły prowizji, stawkę, okno i datę rozpoczęcia; zachować wersję zaakceptowaną przez obie strony.
3. Wdrożyć obsługę zgód i pomiar; wykluczyć środowiska testowe, nie przesyłać danych kontaktowych do GA4.
4. Sprawdzić telefon, e-mail i WhatsApp na mobile: jedno działanie powoduje jedno zdarzenie intencji. Otwarcie bez wysłania nie daje leada w CRM.
5. Sprawdzić otrzymany formularz, błąd wysyłki, odświeżenie i ponowienie: jeden przyjęty formularz tworzy jeden rekord; nieudane zgłoszenie nie jest sukcesem.
6. Przejść z testowego linku UTM, potwierdzić zachowanie źródła aż do zgłoszenia; wykonać próbę bez UTM i z odrzuceniem zgód. CRM ma umożliwiać ręczny zapis mimo luk w analityce.
7. Przetestować zaliczkę, końcową wpłatę, zwrot, duplikat i brak stawki w rejestrze. Dopiero po odbiorze wpisać datę początku okresu bazowego i zacząć raportowanie.

Cotygodniowo: Rafał aktualizuje etapy, Nikodem sprawdza źródła i kompletność. Co miesiąc: wspólna kontrola dokumentów, zwrotów i rozliczenia. To plan wdrożenia; na tym etapie przygotowaliśmy dokumenty i szablon CRM.
