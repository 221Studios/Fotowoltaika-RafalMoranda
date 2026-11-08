# Krok 4.4 — szybkość stron konkurencji

**Wykonano 30 analiz mobilnych PageSpeed Insights: 10 adresów × 3 uruchomienia.** Raporty pochodzą z 8 listopada 2026, z godzin 22:12–22:18 CET. Nie zmieniano stron i nie rozpoczęto kroku 4.5.

## Zakres i metoda

Sprawdzono strony główne pięciu wybranych firm oraz podstrony PV analizowane w kroku 4.2. Dla G-PRO i 3DSmart wcześniej potwierdzono rankowanie strony głównej; podstrony usług są dodatkowym porównaniem ścieżki sprzedażowej, nie potwierdzonymi rankującymi adresami. Dla pozostałych firm wybór URL wynika z oferty strony, a nie z domniemanej pozycji organicznej.

Każdą powtórkę wywołano przyciskiem „Analizuj”. Zachowano 30 różnych identyfikatorów raportów i ich czasy. Ponowne otwarcie starego wyniku nie zwiększało liczby pomiarów. Wybrane analizy różnych URL działały równolegle w usłudze Google. To próba z jednej sesji, a nie monitoring wielodniowy.

Odczytane środowisko: **Lighthouse 13.6.0, Moto G Power, sieć ograniczana do 4G, HeadlessChromium 157.0.8103.38**, wstępne wczytanie pojedynczej strony. Rzeczywiste centrum danych nie zostało potwierdzone. Nie wykonywano testów desktop — wszystkie wyniki porównania dotyczą mobile.

W tabelach podano medianę każdej metryki osobno; nie musi odpowiadać jednemu konkretnemu raportowi. Nie uśredniano wartości strony głównej z podstroną. Oddzielne raporty nie gwarantują zupełnie niezależnego stanu serwera/cache — nie odrzucano powtórek tylko dlatego, że zwróciły identyczne metryki.

[Dokładna metoda i ograniczenia](materialy/pagespeed/metoda-4-4.md) · [30 odczytów i mediany — JSON](materialy/pagespeed/wyniki-30-pomiarow-mobile.json) · [Rejestr linków raportów](materialy/pagespeed/rejestr-pomiarow.md).

## 1. Laboratorium — wynik wydajności i zmienność

Wynik 0–100 jest oceną Lighthouse, nie procentem szybkości ani oceną pozycji SEO.

| Firma | Typ strony | Próba 1 / 2 / 3 | Mediana | Zakres |
| --- | --- | --- | --- | --- |
| G-PRO | Główna | 76 / 76 / 80 | **76** | 76–80 |
| G-PRO | PV | 97 / 97 / 94 | **97** | 94–97 |
| 3DSmart | Główna | 65 / 70 / 60 | **65** | 60–70 |
| 3DSmart | PV | 73 / 73 / 68 | **73** | 68–73 |
| Aurelum | Główna | 62 / 59 / 62 | **62** | 59–62 |
| Aurelum | PV | 72 / 72 / 72 | **72** | 72–72 |
| PROWABLE | Główna | 97 / 99 / 99 | **99** | 97–99 |
| PROWABLE | PV | 97 / 97 / 97 | **97** | 97–97 |
| Ekosolary | Główna | 53 / 54 / 51 | **53** | 51–54 |
| Ekosolary | PV | 75 / 75 / 56 | **75** | 56–75 |

Największy zakres wyniku w tej próbie wystąpił na podstronie PV Ekosolary. Nie ukrywamy pomiaru 56 ani nie wyjaśniamy jego przyczyny bez dodatkowej diagnostyki.

## 2. Laboratorium — metryki

FCP: pierwsza widoczna treść; LCP: największy element treści; TBT: blokowanie głównego wątku; CLS: przesunięcia układu; SI: Speed Index. **Laboratoryjny TBT nie jest terenowym INP.** CLS jest bez jednostki. Czasy pochodzą z odnośnika kalkulatora PSI; CLS z metryki widocznej w raporcie, ponieważ kalkulator go zaokrągla.

| Firma / strona | FCP — mediana | LCP — mediana | TBT — mediana | CLS — mediana | SI — mediana |
| --- | --- | --- | --- | --- | --- |
| G-PRO / główna | 1,001 s | **5,468 s** | 3 ms | 0 | 5,243 s |
| G-PRO / PV | 0,957 s | **2,574 s** | 0 ms | 0 | 1,479 s |
| 3DSmart / główna | 1,834 s | **13,696 s** | 182 ms | 0 | 6,917 s |
| 3DSmart / PV | 1,540 s | **6,713 s** | 111 ms | 0 | 4,313 s |
| Aurelum / główna | 2,588 s | **32,476 s** | 6 ms | 0,001 | 14,196 s |
| Aurelum / PV | 2,138 s | **6,339 s** | 0 ms | 0 | 4,676 s |
| PROWABLE / główna | 1,671 s | **1,671 s** | 0 ms | 0 | 2,856 s |
| PROWABLE / PV | 1,680 s | **1,680 s** | 0 ms | 0,084 | 1,695 s |
| Ekosolary / główna | 0,794 s | **8,553 s** | 77 ms | **0,452** | 3,926 s |
| Ekosolary / PV | 0,780 s | **2,723 s** | 2 ms | **0,442** | 3,510 s |

Przykłady rozrzutu: LCP strony głównej 3DSmart wyniósł 8,702–13,698 s, a PV Ekosolary 2,723–6,376 s. Podstrona PV Ekosolary miała wysoki CLS we wszystkich trzech próbach (0,442 / 0,442 / 0,446); na stronie głównej było to 0,453 / 0,448 / 0,452. To powtarzalny sygnał z laboratorium, nie pomiar całej populacji klientów.

Wysokie wyniki PROWABLE nie zostały automatycznie uznane za rezultat strony błędu: obejrzano Final Screenshot strony głównej oraz podstrony PV i potwierdzono treść firmy. Podstrona PV w PSI była dostępna, mimo wcześniejszych odpowiedzi 429 podczas pobierania HTML inną metodą.

## 3. Dane rzeczywistych użytkowników — CrUX

PSI pokazuje tu p75 z ostatniego 28-dniowego okresu. Nie ustalono dokładnych dat granicznych okresu. Dla dwóch firm dane były dostępne tylko dla **origin**, czyli całej domeny, a nie osobno dla badanego URL. Świadczyły o tym niedostępny przycisk „Ten URL” i odnośnik historii z `identifier=origin`.

| Firma | Zakres | LCP p75 | INP p75 | CLS p75 | Ocena CWV wyświetlona przez PSI |
| --- | --- | --- | --- | --- | --- |
| G-PRO | Brak danych w obu raportach URL | | | | |
| 3DSmart | Origin: https://3dsmart.pl | 2,3 s | 190 ms | 0 | **Zaliczone** |
| Aurelum | Brak danych w obu raportach URL | | | | |
| PROWABLE | Origin: https://www.prowable.pl | 3,4 s | | 0,01 | **Niezaliczone** |
| Ekosolary | Brak danych w obu raportach URL | | | | |

INP PROWABLE wyświetlało „Nie dotyczy”; nie wpisujemy 0 ms. Ten sam zestaw terenowy był pokazany przy stronie głównej i podstronie. Nie liczymy go dwa razy i nie nazywamy wynikiem konkretnej podstrony. [Odczyt CrUX ze źródłami](materialy/pagespeed/crux-4-4.json).

**Istotna różnica:** 3DSmart ma słabszy wynik laboratoryjny, ale zaliczone CWV dla origin. PROWABLE ma bardzo dobry wynik laboratorium, ale terenowe LCP 3,4 s i niezaliczoną ocenę CWV. Żadnego z tych faktów nie należy usuwać, żeby stworzyć jeden prosty ranking „najszybszej firmy”.

Brak CrUX może wynikać z niewystarczającej próby. Nie dowodzi małego ruchu w sensie biznesowym, braku klientów, dobrej ani złej wydajności. Powtarzanie Lighthouse nie tworzy nowych niezależnych próbek CrUX. Rozróżnienie laboratorium i danych użytkowników opisuje [Google w dokumentacji PSI](https://developers.google.com/speed/docs/insights/v5/about).

## 4. Diagnostyka i wnioski z porównania

Są to wskazania narzędzia oraz interpretacje audytowe, nie dowiedzione przyczyny każdej różnicy wyniku:

- **G-PRO:** home jest wyraźnie słabsza od PV. PSI wskazuje obrazy, pamięć podręczną i zasoby blokujące renderowanie; w trzecim raporcie home oszczędność obrazów szacowano na 740 KiB. Warto odróżniać szybkość wejścia na ofertę od szybkości strony głównej.
- **3DSmart:** wysokie laboratoryjne LCP na obu stronach. PSI wskazuje m.in. żądania LCP, cache, nieużywany JavaScript i CSS. W trzecim raporcie home szacunek cache dotyczył około 21 208 KiB zasobów; nie oznacza to możliwego skrócenia pierwszego ładowania o dokładnie tę ilość danych. Bez inspekcji szczegółów nie przypisujemy problemu konkretnemu filmowi lub animacji.
- **Aurelum:** bardzo wysokie LCP home, mimo niewielkiego TBT. Sama redukcja blokowania JavaScript nie musi rozwiązać tego problemu. Raport PV wskazuje zasoby blokujące renderowanie (szacunek 2020 ms), obrazy i nieużywany CSS; tych oszczędności nie sumujemy jako gwarantowanego zysku.
- **PROWABLE:** najlepsze wyniki laboratoryjne home w tej próbie. Terenowe LCP origin nadal wymaga poprawy; wynik 99 nie zastępuje realnego doświadczenia użytkowników.
- **Ekosolary:** powtarzalnie wysoki CLS oraz zmienny wynik PV. Pierwszy raport home wskazywał przesunięcia układu i obrazy bez jawnych wymiarów; to kierunek diagnostyki, nie dowód, że każdy skok powodują zdjęcia.

## 5. Co wynika z tego dla ALFA

1. Szybkość może być elementem przewagi, ale wymaga pomiaru naszej publicznej wersji w tej samej metodzie — nie deklaracji na podstawie kodu.
2. Testować stronę główną i docelową ofertę osobno. Przykład G-PRO pokazuje, że jedna szybka podstrona nie oznacza równie szybkiego serwisu.
3. W dalszym wdrożeniu kontrolować obraz/element LCP, rozmiary mediów, stabilne miejsce na obrazy oraz koszt skryptów i animacji. To lista kontrolna do sprawdzenia w ALFA, nie diagnoza wykrytych dziś błędów naszego projektu.
4. Jako roboczy cel jakości przyjąć wydajność mobile co najmniej 90 w powtarzanej próbie oraz dobre LCP/CLS; osobno dążyć do dobrych CWV użytkowników, jeśli pojawi się wystarczająca próba. Progi dobrych metryk terenowych to LCP do 2,5 s, INP do 200 ms i CLS do 0,1 według [Google](https://developers.google.com/speed/docs/insights/v5/about). Nie przekładać tych progów na gwarancję rankingu lub sprzedaży.
5. Nie mierzymy teraz starej ALFA z błędem certyfikatu jako równoważnego konkurenta i nie podstawiamy wyniku projektu lokalnego. W tym kroku badano konkurencję. Pomiar ALFA zostaje osobnym punktem po zapewnieniu właściwego środowiska i działającego HTTPS.

## 6. Źródła, kompletność i ograniczenia

- Pełne adresy docelowe, czasy, wyniki każdej próby i 30 linków znajdują się w [rejestrze pomiarów](materialy/pagespeed/rejestr-pomiarow.md) oraz [JSON wyników](materialy/pagespeed/wyniki-30-pomiarow-mobile.json).
- JSON jest archiwum odczytu publicznego interfejsu i kalkulatora, nie pełnym eksportem oryginalnego raportu Lighthouse. Zachowano także cztery wcześniejsze zapisy pierwszych prób oraz surowe wiersze odczytów prowadzącego.
- Raporty PSI mają indywidualne ID; ich dostępność w przyszłości nie jest gwarantowana. Nie zapisano plików zrzutów ekranu w repozytorium.
- Nie wykonano desktop ani monitoringów wielodniowych. Wszystkie wnioski laboratoryjne odnoszą się do opisanej próby mobilnej.
- Próba publicznego API bez klucza zakończyła się 429 limitu usługi. Faktyczne wyniki zebrano z działającego UI PageSpeed Insights, a nie z tego błędu.

**Status:** krok 4.4 zakończony w przyjętym zakresie mobilnym: 30 odrębnie wywołanych analiz, mediany, rozrzut i oddzielne dane terenowe. Nie rozpoczęto dalszych kroków ani zmian kodu.
