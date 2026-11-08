# Fotowoltaika i Kalisz — uzupełnione treści robocze

Aktualizacja: 8 listopada 2026. Treści wprowadzono bezpośrednio do projektu. Zakres tej pracy: teksty, tematy sekcji, odnośniki i zgodne z nimi metadane. CSS, grafiki i animacje pozostają bez zmian. Układ nowych fragmentów wykorzystuje istniejące klasy; projekt wizualny zostaje na kolejny etap.

Zgodnie z doprecyzowaniem użytkownika obecne liczby i obietnice mogą pozostać jako przykłady robocze. Zachowano dotychczasowy przewodnik o dotacjach i przyłączeniu. Weryfikacja wszystkich deklaracji przed publikacją to odrębny etap; obecna aktualizacja nie potwierdza ponownie całej oferty.

## Podział ról

| Strona | Jej zadanie | Czego nie powielamy w całości |
| --- | --- | --- |
| `/fotowoltaika/` | Wyjaśnić, jaką instalację można zamówić, jak dobrać zakres i o co zapytać przed decyzją | Ogólnej historii firmy, szczegółowych cenników i wszystkich formalności z głównego FAQ, pełnej oferty elektryki i CCTV |
| `/kalisz/` | Pokazać obsługę lokalną, położenie bazy, wybór usługi, realizacje w mieście i sposób rozpoczęcia współpracy | Pełnej oferty technologicznej PV, elektryki i CCTV; te informacje mają swoje podstrony |

## Fotowoltaika — zawartość po aktualizacji

- Nagłówek: **Fotowoltaika w Kaliszu — dla domu i firmy**.
- Dobór instalacji do sposobu wykorzystania energii w domu i firmie.
- Etapy rozmowy, oględzin, przygotowania oferty, montażu i uruchomienia.
- Własne miejsce magazynów energii, z kotwicą `#magazyny-energii` i kontaktem w sprawie doboru.
- Serwis i kontakt po uruchomieniu.
- Porównanie warunków montażu na dachu i gruncie.
- Rozbudowa istniejącej instalacji i planowanie przyszłych urządzeń.
- Sześć regionalnych przykładów z linkami do szczegółów oraz wejście do całego katalogu.
- Sześć pytań przed decyzją: zakres oferty, przygotowanie rozbudowy, dołożenie magazynu, przygotowanie pod magazyn w przyszłości, harmonogram, odbiór instalacji. Odpowiedzi są również w danych strukturalnych FAQ.
- Odnośnik do głównego FAQ zamiast kopiowania pełnych odpowiedzi o cenach, dotacjach i przepisach.
- Kontakt w sprawie wyceny: telefon, e-mail, strona kontaktowa i odnośnik do obsługi lokalnej.
- Zachowany wcześniejszy przewodnik dotacji i przyłączenia.
- Rozwinięte opisy modułów, falowników, magazynów i konstrukcji oraz podsumowanie zakresu oferty.

## Kalisz — zawartość po aktualizacji

- Nagłówek: **Instalacje w Kaliszu i okolicach**.
- Krótki wybór usług: fotowoltaika, elektryka i monitoring.
- Opis bazy w Cekowie, dojazdu i uzgadniania wizyty.
- Trzy krótkie wprowadzenia prowadzące do właściwych podstron usług.
- Cztery istniejące realizacje oznaczone Kaliszem, bez przypisywania ich do wymyślonych osiedli.
- Sześć pytań dotyczących obsługi lokalnej: zasięg, siedziba, oględziny, kilka instalacji w jednym budynku, lokalne realizacje i informacje potrzebne przed wizytą.
- Kontakt telefoniczny i e-mail zamiast odsyłania do nieistniejącego formularza.
- Końcowe zaproszenie do rozmowy z instrukcją, co podać w pierwszym zapytaniu.
- Tytuł SEO, opis i dane strukturalne odpowiadające lokalnej roli strony.

## Status i następny etap

Treść obu stron jest uzupełniona do pracy nad wyglądem. Nie oznacza to gotowości całej witryny do publikacji: formularz, analityka oraz weryfikacja deklaracji realizacji pozostają w zakresie zapisanym w zadaniu 9. W tej zmianie nie przerabiano innych podstron ani szablonu szczegółów realizacji.

Sprawdzenie: `npm run build` zakończone powodzeniem; w wyeksportowanym HTML obu stron potwierdzono po jednym H1 i zgodność wszystkich sześciu pytań oraz odpowiedzi z danymi strukturalnymi FAQ. `git diff --check` bez błędów. Kompilator zgłosił dwa ostrzeżenia o braku danych fontów zastępczych Google Sans Code / Google Sans Flex. Nie wykonywano ponownego odbioru wizualnego — wygląd jest kolejnym etapem.

Przegląd źródeł pomocniczych: wcześniejsze opracowania ALFA i dane realizacji w repozytorium; [Energa-Operator — mikroinstalacja](https://energa-operator.pl/przylaczenie-do-sieci/przylaczanie-wytworcy-energii/mikroinstalacja), [oficjalny program magazynów energii](https://przydomowemagazyny.gov.pl/o-programie/) oraz dokumentacja producenta dla rozróżnienia magazynowania i zasilania awaryjnego. Ponowne otwarcie starej witryny ALFA zwracało błąd 502; wykorzystano już zapisane materiały, bez deklarowania nowej weryfikacji firmy.
