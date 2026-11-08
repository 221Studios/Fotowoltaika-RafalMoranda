# Metoda pomiarów — krok 4.4

Data: 8 listopada 2026, godziny raportów według PSI w CET (Europe/Warsaw).

Zakres: pięć stron głównych i pięć podstron PV z kroku 4.2. Zaplanowano po trzy uruchomienia analizy mobilnej na URL. Pomiary wywoływano przyciskiem „Analizuj” w publicznym PageSpeed Insights. Powtórki mają odrębne identyfikatory raportów i czasy. Ponownego odczytania starego raportu nie liczono jako nowego pomiaru. Część analiz różnych URL była wykonywana równolegle po stronie usługi Google. Nie jest to porównanie rozłożone na wiele dni.

Środowisko odczytane z raportów: Lighthouse 13.6.0, emulacja Moto G Power, ograniczanie sieci do 4G, HeadlessChromium 157.0.8103.38, wstępne wczytanie, pojedyncza strona. To zdalne laboratorium Google, a nie szybkość komputera użytkownika lub faktycznego telefonu.

Źródło czasów laboratoryjnych w milisekundach: widoczny w PSI odnośnik „Zobacz kalkulator”. CLS zachowano z widocznej metryki, ponieważ kalkulator zaokrągla go (np. 0.001 do 0). Wyjątek: pierwszy G-PRO home miał widoczne CLS 0; zapisano 0.

CrUX jest osobnym zbiorem danych z ostatniego 28-dniowego okresu, p75. Należy zachować zakres URL/origin. Ten sam zestaw origin pokazany dla strony głównej i podstrony nie jest dwoma niezależnymi wynikami użytkowników. „Brak danych” nie oznacza zerowych wskaźników, złej wydajności ani zaliczenia CWV. TBT z laboratorium nie jest INP.

Próba publicznego API PSI bez klucza zwróciła HTTP 429 (wyczerpany limit dla projektu usługi). Nie użyto jej do obliczeń; wyniki pochodzą z działającego publicznego interfejsu PSI. Nie zastępowano PSI lokalnym Lighthouse.

Ograniczenia: brak serii desktop, brak potwierdzenia geograficznego centrum danych, brak wielodniowej próby, brak gwarancji identycznego stanu serwerów, cache i skryptów zewnętrznych. Osobne identyfikatory potwierdzają nowe żądania analiz, nie gwarantują całkowicie niezależnego stanu cache backendu. Zgodne metryki w dwóch raportach nie są liczone jako jedna próba, ale nie stanowią dowodu pełnej niezależności pomiarowej.

Podstawę interpretacji stanowi [oficjalna dokumentacja PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about). Metodę i zakres należy zachować przy późniejszym pomiarze ALFA; wyniku projektu lokalnego nie porównywać bezpośrednio z laboratoryjnym pomiarem publicznej strony z innego środowiska.
