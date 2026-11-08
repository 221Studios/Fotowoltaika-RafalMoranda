# Zadanie 4 — wnioski i 10 usprawnień dla ALFA

Stan źródeł: 8 listopada 2026. [Arkusz porównania i usprawnień](../../outputs/01a1bcba-095e-7e72-a503-31f197f23d1b/ALFA-analiza-konkurencji-i-10-usprawnien.xlsx).

## Główne wnioski

Aktualny projekt ma już podstawę do rzeczowej prezentacji firmy: 27 wpisów realizacji z adresami źródłowymi, w tym 4 oznaczone jako Kalisz, osobne strony usługowe i lokalną, 15 pytań FAQ oraz kontakt telefoniczny, mailowy i WhatsApp. Nie zaczynamy od tworzenia tych elementów od nowa. Ich obecność w kodzie nie potwierdza jednak skuteczności publicznego wdrożenia.

Przewaga do wypracowania polega na ułatwieniu decyzji klienta: jasny zakres, konkretne lokalne realizacje, potwierdzone opinie, prosty kontakt i szybkie ładowanie. 3DSmart i Aurelum pokazują parametry projektów; G-PRO jasno wiąże ofertę z regionem i wyceną. To przykłady użytecznej konstrukcji, a nie instrukcja kopiowania ich tekstów albo obietnic.

Sama długość treści nie rozstrzyga o jakości. Projekt potrzebuje weryfikacji faktów i ścieżki kontaktu, a nie automatycznego zwiększania liczby słów. Nie mamy podstaw do stwierdzenia, że nowa ALFA już przewyższa konkurentów szybkością lub konwersją. Nie ma porównywalnego pomiaru publicznej wersji projektu ani danych po jego wdrożeniu.

## Lista 10 usprawnień w kolejności priorytetu

Wpływ jest oceną ekspercką na podstawie audytu, nie zmierzonym przyrostem pozycji lub procentem sprzedaży. Kolejność nie jest harmonogramem: część prac można przygotować równolegle, a pomiar z pozycji 10 trzeba uruchomić razem z kontaktem z pozycji 3–4.

| Nr | Konkretne usprawnienie | Dlaczego teraz / co uznajemy za wykonanie |
| --- | --- | --- |
| 1 | **Naprawić HTTPS i ustalić właściwą wersję produkcyjną.** | Usunąć błąd certyfikatu, sprawdzić domenę www/bez www i kontakt. Gotowe, gdy klient otwiera właściwą stronę bez ostrzeżenia. Wymaga administratora. |
| 2 | **Przypisać role home, `/fotowoltaika` i `/kalisz` oraz przygotować mapę migracji.** | Wykorzystać istniejące strony projektu. Zapisać stare URL → nowe URL, plan przekierowań i canonical; po wdrożeniu sprawdzić istotne adresy. Nie usuwać podstron na podstawie nieudowodnionej kanibalizacji. |
| 3 | **Sprawdzić i uprościć kontakt na mobile.** | Test uruchomionego projektu w 390 × 844 i na telefonie: pierwszy ekran, CTA, `tel:`, menu i nakładki. Gotowe po usunięciu rzeczywiście wykrytych przeszkód. |
| 4 | **Zapewnić krótki kontakt z potwierdzonym dostarczeniem zapytania.** | Uzgodnić formularz lub oddzwonienie jako uzupełnienie istniejących kanałów. Dopasować obietnicę formularza do działania; testowe zapytanie musi dotrzeć do uzgodnionego odbiorcy. WhatsApp tylko otwiera wiadomość. |
| 5 | **Zmierzyć publiczną wersję i poprawić wykryte problemy szybkości.** | Po 3 próby PSI mobile dla home i oferty, z medianą i zakresem przed/po. Sprawdzać LCP, stabilność układu i koszt skryptów. Roboczy cel 90+, bez udawania istniejącego wyniku i bez mieszania z CrUX. |
| 6 | **Zweryfikować ofertę, etapy współpracy i istniejące FAQ.** | Z Rafałem potwierdzić zakres, ekipy, dojazd, wycenę, formalności i serwis. Aktualizować ceny/dotacje ze źródeł. Gotowe, gdy odpowiedzi są użyteczne, aktualne i nie zawierają niepotwierdzonych deklaracji. |
| 7 | **Rozwinąć trzy istniejące realizacje w studia przypadku.** | Wybrać udokumentowane lokalne wpisy: potrzeba klienta, zakres, konfiguracja, zdjęcia i miejscowość. Dopisywać wyniki tylko przy danych, a nie tworzyć pozornie nowych montaży. |
| 8 | **Uporządkować recenzje i proces próśb o szczerą opinię.** | Liczbę 20 uaktualnić według stanu przy publikacji (odczyt: 21); wierne cytaty lub oznaczone streszczenia ze źródłami. Neutralne zaproszenia bez korzyści, selekcji według zadowolenia i narzucania treści. 50 opinii to pierwszy benchmark, nie próg TOP 3. |
| 9 | **Zweryfikować i uzupełnić Profil Firmy po uzyskaniu dostępu.** | Sprawdzić zastane usługi, obszar, kategorie i godziny świąteczne. Potwierdzić obsługę w siedzibie. Nie zakładać, że niewidoczne ustawienia są puste; nie tworzyć fikcyjnego adresu w Kaliszu. |
| 10 | **Połączyć źródło zapytania z kontaktem, sprzedażą i prowizją.** | Uzgodnić identyfikator leada, źródło, wynik i zasady przypisania z Rafałem. Kliknięcie telefonu albo otwarcie WhatsApp nie jest sprzedażą. Gotowe po prześledzeniu kontrolnego zapytania i zatwierdzeniu zasad. Wdrożyć przed uruchomieniem pozyskiwania leadów. |

Pełny zakres, zależności, przewidywany wpływ na widoczność i zapytania oraz edytowalny status są w zakładce „10 usprawnień”. Nie przypisano dat ani zobowiązań wykonania bez uzgodnienia.

## Co zawiera arkusz

- **10 usprawnień:** uporządkowana lista, uzasadnienie, zależności, warunek zakończenia i status do aktualizacji.
- **Porównanie:** 21 kryteriów, osobno stara ALFA, aktualny projekt i pięciu konkurentów. Braki danych pozostają puste lub opisane. Wartości PSI są połączone z obliczeniami.
- **PSI mobile:** 30 odczytów, czasy i linki, liczone formułami mediany oraz minima i maksima. CrUX opisany osobno, bez podwójnego liczenia danych origin.

## Ograniczenia i status zadania

Podstawa: [porównanie z kroku 4.5](../raporty/zadanie-4-5-tabela-porownawcza-2026-11-08.md), [analiza stron](../raporty/zadanie-4-2-porownanie-stron-2026-11-08.md), [metadata](../raporty/konkurencja-4-3-metadane-2026-11-08.md), [pomiar szybkości](../raporty/zadanie-4-4-pagespeed-2026-11-08.md) i [audyt Profilu Firmy](../raporty/audyt-profilu-google-2026-11-08.md).

Analiza konkurencji obejmuje G-PRO, 3DSmart, Aurelum, PROWABLE i Ekosolary. Różne odczyty Google nie stanowią stałego rankingu Kalisza. Część podstron PROWABLE, dokładne dalsze pozycje organiczne i ustawienia panelu ALFA pozostają niezweryfikowane. Aktualny projekt był oceniany na podstawie kodu; nie potwierdzono produkcji, mobilnej użyteczności ani skuteczności wysyłki. Nie wykonano nowych wdrożeń ani nie opublikowano treści.

**Zadanie 4 zakończone w ustalonym zakresie dostępnych danych:** arkusz z pięcioma konkurentami i lista 10 konkretnych usprawnień, z osobnym odniesieniem do starej strony i obecnego projektu ALFA. Otwarte braki nie zostały zamienione w domniemane fakty. Nie rozpoczęto następnego zadania.
