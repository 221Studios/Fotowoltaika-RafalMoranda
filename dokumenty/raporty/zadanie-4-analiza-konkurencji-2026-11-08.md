# Zadanie 4/30 — analiza konkurencji w Kaliszu

Data rozpoczęcia: 8 listopada 2026. Status: opracowano kroki 4.1–4.6 w dostępnym zakresie. Zadanie 4 zakończone jako publiczna analiza porównawcza, z jawnymi lukami. Nie rozpoczęto następnego zadania ani zmian strony. [Wnioski i 10 usprawnień — krok 4.6](../do-przeczytania/zadanie-4-6-wnioski-i-10-usprawnien-2026-11-08.md). [Arkusz porównawczy XLSX](../../outputs/01a1bcba-095e-7e72-a503-31f197f23d1b/ALFA-analiza-konkurencji-i-10-usprawnien.xlsx).

Materiały szczegółowe: [porównanie stron — 4.2](zadanie-4-2-porownanie-stron-2026-11-08.md), [metadata — 4.3](konkurencja-4-3-metadane-2026-11-08.md), [30 analiz mobile i CrUX — 4.4](zadanie-4-4-pagespeed-2026-11-08.md), [stara ALFA, aktualny projekt i pięciu konkurentów — 4.5](zadanie-4-5-tabela-porownawcza-2026-11-08.md).

## 4.1 — Wybór właściwej konkurencji

### Metoda i ograniczenia

1. Odczytano istniejące analizy z 31 października: [konkurencja lokalna](../../research/konkurencja-fotowoltaika-kalisz.md) i [oferta oraz strona główna](../../research/konkurencja-oferta-homepage.md). To materiały pomocnicze, nie dowód dzisiejszych pozycji.
2. Otwarto [Google: fotowoltaika Kalisz](https://www.google.com/search?q=fotowoltaika+Kalisz). Osobno odczytano blok „Miejsca”, „Podobne witryny”, zwykłe wyniki stron i „Przegląd od AI”.
3. Pierwszy odczyt był spersonalizowany. Nagłówek wskazywał Kalisz, ale stopka pokazywała obszar 27-310 na podstawie wcześniejszej aktywności. To sygnał Google, nie potwierdzenie fizycznej lokalizacji urządzenia.
4. Użyto dostępnego na stronie odnośnika „Wypróbuj bez personalizacji”. Google potwierdził „Te wyniki nie są personalizowane”. Kolejność i część wyników zmieniły się. Wyłączenie personalizacji nie oznacza wyłączenia wpływu lokalizacji; nie potwierdzono pomiaru z urządzenia znajdującego się w Kaliszu.
5. Porównano z [kolejnością kart Google Maps z zadania 3.3](widocznosc-mapy-kolejnosc-2026-11-08.md): cztery frazy usługowe, osobne widoki i przybliżenia.
6. Sprawdzono deklarację montażu PV i związek z Kaliszem w oficjalnych źródłach pięciu firm. Deklaracje marketingowe nie są niezależnym potwierdzeniem wykonanych instalacji.

Warunki: przeglądarka w aplikacji Codex, widok desktop, 8 listopada 2026, bez logowania do paneli firm. Przeglądarka miała aktywną sesję Google; drugi odczyt używał funkcji wyłączenia personalizacji wyników. Nie jest to badanie wielotygodniowe. „Powtarzalność” poniżej oznacza występowanie w kilku sprawdzonych zapytaniach lub widokach, a nie udowodnioną stabilność rankingu w czasie. Zrzut widoku Google pokazano w czacie; pliku obrazu nie zapisano w projekcie.

### Pięć firm wybranych do głównego audytu

Numery identyfikują firmy w naszym porównaniu, a nie ich ranking organiczny.

| Nr | Firma i domena | Dlaczego to bezpośredni konkurent | Gdzie zaobserwowano widoczność | Decyzja |
| --- | --- | --- | --- | --- |
| 1 | [G-PRO ECO ENERGY](https://g-pro.com.pl/) | Własna strona opisuje montaż PV, własne ekipy, ofertę dla domu i firm oraz obsługę Kalisza i okolic. | Zwykły wynik strony w obu odczytach Google; w pierwszym odczycie także karta w bloku „Miejsca”. W Mapach 1. dla „fotowoltaika Kalisz” i „montaż fotowoltaiki Kalisz”. | Wybrany — łączy widoczność organiczną i lokalną z ofertą zbliżoną do ALFA. |
| 2 | [3DSmart](https://3dsmart.pl/) | Deklaruje projektowanie i realizację PV; [kontakt](https://3dsmart.pl/kontakt.html) wskazuje Legionów 41 w Kaliszu. | Zwykły wynik strony w obu odczytach Google i moduł „Podobne witryny”. W Mapach 3. dla „fotowoltaika Kalisz” oraz 4. dla „montaż fotowoltaiki Kalisz”. | Wybrany — widoczność w obu kanałach i rzeczywisty lokalny punkt kontaktowy według strony. |
| 3 | [Aurelum](https://www.aurelum.pl/) | Firma opisuje projektowanie, dostawę i montaż PV oraz adres Pruszków 67, 62-800 Kalisz. | Karta w bloku „Miejsca” w pierwszym odczycie Google; w Mapach 2. dla „fotowoltaika Kalisz”, 3. dla „montaż fotowoltaiki Kalisz” i obecność dla „magazyny energii Kalisz”. | Wybrany — powtarzalna widoczność lokalna. Nie potwierdzono TOP 2 organicznego. |
| 4 | [PROWABLE](https://www.prowable.pl/) | Oficjalne źródła opisują PV i [realizacje](https://www.prowable.pl/realizacje-kalisz/); [kontakt](https://www.prowable.pl/kontakt-do-firmy/) wskazuje Skarszewską 4 w Kaliszu. | Karta w bloku „Miejsca” w pierwszym odczycie Google; w Mapach 4. dla „fotowoltaika Kalisz” oraz 2. dla „montaż fotowoltaiki Kalisz”. | Wybrany — silny kandydat lokalny, choć strona eksponuje również inne usługi OZE. |
| 5 | [Ekosolary](https://ekosolary.pl/) | Strona deklaruje montaż i serwis PV w Kaliszu i okolicy, podaje lokalne dane kontaktowe. | Zwykły wynik strony w pierwszym, spersonalizowanym odczycie Google oraz wynik narzędzia wyszukiwania. W Mapach 8. dla „fotowoltaika Kalisz”, 7. dla „montaż fotowoltaiki Kalisz” i 6. dla „instalacje fotowoltaiczne Kalisz”. | Wybrany — uzupełnia audyt o lokalnego instalatora obecnego także w wynikach stron. Nie potwierdzono takiej samej obecności w drugim odczycie Google. |

Ograniczenie odczytu PROWABLE: bezpośrednie pobranie strony głównej zwróciło 429, a realizacji przekroczyło czas. Treść oferty i realizacji odczytano z wyników oficjalnej domeny; kontakt odczytano bezpośrednio. Do szczegółowej analizy strony trzeba wrócić w odpowiednim kroku.

### Dlaczego akurat ta piątka?

Wybieramy lokalne firmy wykonujące instalacje, które można porównać z ALFA sprzedażowo i które powtarzają się w zebranych obserwacjach. Cztery były już rozpoznane w projekcie; piąta — Ekosolary — ma oficjalną ofertę montażu w Kaliszu oraz dowody widoczności w Mapach i wynikach stron. Nie dobieramy pięciu najwyższych ocen, największej liczby opinii ani pięciu pierwszych domen z jednego zapytania.

To celowy zestaw do audytu, **nie oficjalne TOP 5 rynku i nie pięć najwyższych wyników organicznych**. Powtórny pomiar w znanej lokalizacji może uzasadnić zmianę listy, ale nie jest konieczny do rozpoczęcia porównania ofert tej piątki.

### Trzy grupy konkurencji w wyszukiwarce

| Grupa | Przykłady i źródła zaobserwowane w badaniu | Jak traktujemy |
| --- | --- | --- |
| Firmy oferujące instalacje | Wybrana piątka oraz Brewa, EcoRun, SunSol, SunlightPro i Apex Renewables jako dodatkowi kandydaci. | Konkurencja sprzedażowa i o widoczność. Główny audyt ograniczamy na tym etapie do wskazanych pięciu. |
| Katalogi i rankingi | [Oferteo](https://www.oferteo.pl/fotowoltaika/kalisz), [FotowoltaikaOnline — Kalisz](https://fotowoltaikaonline.pl/miasto/kalisz) w Google; [woleOZE — katalog](https://woleoze.pl/firmy/fotowoltaika/kalisz/) i [24kalisz — ranking](https://24kalisz.pl/lokalne-uslugi/fotowoltaika-kalisz) w dodatkowym narzędziu wyszukiwania. | Konkurencja o wynik organiczny i zapytanie klienta, ale nie tożsama z wykonawcą montażu. Nie zaliczamy ich jako instalatorów do piątki. |
| Portale i treści poradnikowe | [woleOZE — poradnik lokalny](https://woleoze.pl/fotowoltaika-kalisz/) znaleziony w dodatkowym narzędziu; treści poradnikowe także na stronach katalogów i instalatorów. | Konkurencja o ruch informacyjny. Nie potwierdzono osobnego portalu poradnikowego jako stałego lidera zwykłego Google dla tej frazy. |

Jedna domena może pełnić kilka funkcji. W klasyfikacji zwracamy uwagę na konkretną podstronę i jej zadanie. Przegląd od AI jest modułem Google korzystającym ze źródeł — nie kolejną firmą ani samodzielnym wynikiem organicznym do policzenia w rankingu instalatorów. Reklam nie włączamy do rankingu organicznego.

### Dodatkowi kandydaci — poza główną piątką

- **Brewa i EcoRun:** obecne jako zwykłe wyniki stron w obu odczytach Google. Nie wolno ich ignorować w dalszym monitoringu organicznym. Pozostają dodatkowymi kandydatami do rozszerzenia audytu; w tym kroku nie zweryfikowano szczegółowo ich aktualnej oferty i statusu działalności.
- **SunSol i SunlightPro:** widoczne lokalne podstrony sprzedażowe w Google. Mogą konkurować o leady mimo innego modelu działania niż lokalna ekipa.
- **Apex Renewables:** lokalna podstrona ofertowa pojawiła się w narzędziu wyszukiwania; nie traktujemy kolejności tego narzędzia jako pozycji w Google.
- **HORIZONTAL ENERGY:** widoczny lokalnie; w sprawdzonym module Google pokazano brak witryny. Nie włączono do głównej piątki porównania stron. Nie oznacza to, że firma nie ma żadnej strony.

### Co zapisujemy, a czego jeszcze nie stwierdzamy

Potwierdzono zasadność wyboru pięciu firm do porównania. Nie potwierdzono ich stabilnych pozycji w czasie ani przewagi jakości strony, linków, treści lub konwersji. Wcześniejszy ranking na 24kalisz nie stanowi dowodu, że 3DSmart i Aurelum są TOP 2 organicznych wyników Google; jego dane nie zastępują aktualnego odczytu profili.

Przy dalszych krokach porównujemy te same obszary u każdego konkurenta i u ALFA, najpierw z ofertą starej strony i danymi potwierdzonymi przez użytkownika, następnie z aktualnym projektem. Informacje niedostępne pozostają oznaczone jako niezweryfikowane. Nie wykonujemy teraz dalszych kroków zadania 4.

## Materiały powiązane

- [Audyt Profilu Firmy ALFA — zadanie 3](audyt-profilu-google-2026-11-08.md).
- [Odczyt kolejności wyników Map](widocznosc-mapy-kolejnosc-2026-11-08.md).
- [Wcześniejsze porównanie stron z 31 października](../../research/konkurencja-fotowoltaika-kalisz.md) — materiał do późniejszej aktualizacji, nie wynik tego kroku.
