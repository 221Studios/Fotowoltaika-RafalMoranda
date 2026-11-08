# Zadanie 8 — strona główna i usługi: porównanie z planem

Stan: 8 listopada 2026. Zakres planu: projekt strony głównej oraz dwóch najważniejszych podstron usług, na komputer i telefon, z tekstami roboczymi.

**Wniosek: zakres opracowania jest większy niż w planie — mamy działającą stronę główną i trzy podstrony usług z treścią oraz układami responsywnymi. Nie oznaczamy jednak całego zadania jako ostatecznie zamkniętego: fotowoltaika, kluczowa dla celu projektu, zgodnie z ustaleniem użytkownika nadal jest w trakcie.** Elektryka i CCTV są gotowe projektowo; obecność dwóch gotowych usług nie zastępuje dokończenia najważniejszej strony PV.

## Porównanie rezultatu z naszym projektem

| Wymaganie zadania 8 | Co rzeczywiście mamy | Ocena |
| --- | --- | --- |
| Projekt strony głównej | Działający układ z nagłówkiem i opisem, wyceną, przejściem do realizacji, trzema usługami, obszarem działania, opiniami, przykładami prac, informacjami o firmie i kontaktem | Zrealizowane; większy zakres niż sam projekt roboczy |
| Dwie najważniejsze podstrony usług | `/fotowoltaika/`, `/elektryka/` i dodatkowo `/cctv/` | Więcej stron niż wymagane; PV pozostaje do dokończenia. Nie ustalono formalnie rankingu usług według sprzedaży, ale PV jest głównym celem dotychczasowego planu |
| Wersja komputerowa | Obejrzano nagłówki wszystkich czterech stron przy 1280 × 720; sprawdzono strukturę treści w kodzie i przeglądarce | Istnieje działający projekt; uwagi do odbioru poniżej |
| Wersja mobilna | Obejrzano nagłówki wszystkich czterech stron przy 390 × 844 oraz fragmenty treści elektryki i CCTV; otwarto menu telefonu | Układ mobilny istnieje; nie jest to kompletna kontrola wszystkich urządzeń i wszystkich sekcji |
| Teksty robocze | Nagłówki, opisy usług, zakres, wyceny/omówienie kosztów, serwis, lokalność i FAQ już są zapisane w projekcie | Zrealizowane, z dalszym dopracowaniem PV; tekst w kodzie nie jest automatycznie potwierdzonym faktem o firmie |

Strona Kalisza należy do wcześniejszego porządkowania architektury i lokalnej obsługi. Nie liczymy jej jako dodatkowej, odrębnej usługi. Pozostaje w trakcie zgodnie z ustaleniem z zadania 7.

## Co jest już mocniejsze niż w minimalnym planie

**Strona główna:** nie kończy się na przedstawieniu firmy. Prowadzi do wyboru usługi, pokazuje lokalny obszar działania, opinie i realizacje, a dwa główne przyciski rozdzielają wycenę od sprawdzania doświadczenia. To konkretny projekt ścieżki klienta, a nie sama lista sekcji.

**Elektryka:** osobna treść obejmuje dziewięć obszarów prac, pomiary, podłączenie płyty, omówienie kosztów, kwalifikacje i dojazd oraz osiem pytań FAQ. Są odnośniki do powiązanych usług i przycisk oględzin/wyceny. Odczyt potwierdza obecność tych informacji; w tym zadaniu nie weryfikowano ponownie prawdziwości cen, kwalifikacji ani twierdzeń prawnych.

**CCTV:** strona opisuje zastosowania w domu, firmie i na posesji, podgląd w telefonie, modernizację i serwis, czynniki kosztu oraz dziewięć pytań FAQ. Karty mają przyciski „Bezpłatna wycena monitoringu”. W przeglądarce potwierdzono przejście z takiego przycisku do `/kontakt/`.

**Fotowoltaika:** istnieje już rozbudowana baza: dobór, montaż, uruchomienie, serwis, przykłady z regionu, moduły, falowniki, magazyny, konstrukcje oraz część poradnikowa. To nie jest pusta podstrona. Nadal wymaga końcowego ułożenia zgodnie z rolą ustaloną w zadaniu 7, wyraźnego CTA i dopracowania prezentacji.

Większy zakres treści i gotowy interfejs są przewagą względem wymaganego rezultatu prac projektowych. Nie stanowią jeszcze dowodu lepszej konwersji, pozycji Google ani sprzedaży — to będzie mierzone według zadania 6.

## Kontrola komputer / telefon — co potwierdzono

Przegląd lokalny: `http://localhost:3000/`. Wymiary w pikselach CSS, bez emulacji konkretnego fizycznego telefonu. Przeglądarka in-app, lokalny tryb developerski.

| Strona / funkcja | Obserwacja |
| --- | --- |
| Strona główna, komputer | Nagłówek, opis, oba główne CTA i widget kontaktu są widoczne |
| Strona główna, telefon | Nagłówek i opis dopasowują się do szerokości, główne CTA jest widoczne; drugie znajduje się niżej i wymaga przewinięcia |
| Menu telefonu | Po zakończeniu animacji widoczne są wszystkie siedem pozycji i osobny Kontakt z numerem telefonu |
| Elektryka, komputer i telefon | Widoczny nagłówek z zakresem, zdjęcie i opis. Na telefonie zakres prac układa się pionowo |
| CCTV, komputer i telefon | Widoczny nagłówek; karty na komputerze tworzą kolumny, na telefonie układają się pionowo. Przycisk wyceny prowadzi do kontaktu |
| PV, komputer i telefon | Obie wersje istnieją. Mobilny nagłówek i opis są czytelne w sprawdzonym widoku; na desktopie po zmianie rozmiaru zaobserwowano opis wchodzący w obszar kolejnego banera — do kontroli przy kończeniu tej strony |
| Szerokość dokumentu na telefonie | Dla strony głównej, PV, elektryki i CCTV odczytano 390 px przy oknie 390 px — bez poszerzenia dokumentu w tych odczytach |
| Szerokość elektryki na komputerze | Odczytano 1296 px przy oknie 1280 px. Niewielkie przekroczenie szerokości wymaga sprawdzenia; nie ustalono jego przyczyny ani wpływu na cały interfejs |

Nie testowano połączenia telefonicznego ani wysłania wiadomości. Potwierdzono nawigację do kontaktu, nie dostarczenie leada. Nie wykonywano tu pomiaru szybkości, pełnego audytu dostępności, testu wszystkich FAQ ani kontroli każdego miejsca strony przy każdej szerokości.

## Krótka lista do dopracowania

1. **Dokończyć PV jako główną usługę projektu.** Spójny układ oferty, magazyny energii w czytelnym miejscu, powiązane realizacje i wyraźny przycisk wyceny. Rozdział ról z Kaliszem jest zapisany w zadaniu 7.
2. **Przy odbiorze PV sprawdzić nagłówek na desktopie**, zwłaszcza opis i granicę z kolejnym banerem po zmianie wymiarów okna.
3. **Ograniczyć zasłanianie treści na telefonie przez zachętę WhatsApp.** Przy 390 × 844 dymek „Masz pytanie?” nachodził na opis CCTV i tekst karty. Dymek ma zamknięcie; nie jest to brak kontaktu ani brak wersji mobilnej.
4. **Sprawdzić dodatkowe 16 px szerokości elektryki przy 1280 px.** To punkt odbioru układu, nie podstawa do przepisywania gotowej strony.

Na usługach można później rozważyć szybszy dostęp do wyceny już przy nagłówku. Obecne przyciski w dalszej treści, menu, stopka i WhatsApp zapewniają ścieżkę kontaktu; dodatkowy przycisk nie jest osobnym wymogiem przesłanego zadania.

## Status do dalszego planu

- **Strona główna: wykonana projektowo.**
- **Elektryka i CCTV: wykonane projektowo, z drobnymi punktami kontroli układu.**
- **Fotowoltaika: zaawansowany projekt, do dokończenia.**
- **Teksty robocze: istnieją na wszystkich wymienionych stronach.**
- **Wersje komputerowe i mobilne: istnieją i zostały sprawdzone w podanym zakresie.**

Zadanie 8 oznaczamy jako **w większości wykonane, z zakresem większym niż plan; do zamknięcia po dokończeniu PV i odbiorze układów**. Nie tworzymy kolejnego projektu od początku. Nie zmieniono kodu, treści ani wyglądu strony.

Powiązane materiały: [mapa z zadania 7](zadanie-7-mapa-witryny-i-porownanie-z-planem-2026-11-08.md), [pomiar i KPI z zadania 6](zadanie-6-cele-kpi-i-pomiar-2026-11-08.md).

Źródła w repozytorium: [home](../../src/app/page.js), [PV](../../src/app/fotowoltaika/page.js), [elektryka](../../src/app/elektryka/page.js), [CCTV](../../src/app/cctv/page.js), ich komponenty treści i style responsywne oraz obserwacja działającego projektu lokalnego z 2026-11-08.
