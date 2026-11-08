# Krok 4.3 — tytuły, opisy, nagłówki i linkowanie usług

Stan źródeł: 8 listopada 2026. Zakres: pięć stron głównych z kroku 4.2. Wykorzystano zapisane w tym dniu oficjalne pliki HTML; nie pobierano ich ponownie. To zapis organizacji treści, nie propozycja kopiowania tekstów do ALFA.

## Metoda i ograniczenia

- Dane odczytano parserem `HTMLParser` z biblioteki standardowej Pythona. Zachowano wszystkie tagi title, meta name=description, H1, H2 i link rel=canonical w źródle. Białe znaki w tytułach i nagłówkach znormalizowano do pojedynczych spacji; nie zmieniano słów ani kolejności.
- H2 pokazano w kolejności dokumentu, wraz z nagłówkami stopki, cookies i formularzy. Nie oznacza to, że wszystkie są jednocześnie widoczne.
- Linki usług znormalizowano do absolutnych URL i usunięto duplikaty adresów. Pominięto kontakt, social media, blog, realizacje i dokumenty prawne. Linki „Oferta” i segmenty klientów pozostawiono jako elementy architektury usług. Nie testowano odpowiedzi każdego adresu.
- Meta description i canonical w HTML nie dowodzą, że Google używa tego opisu lub wybrał ten adres kanoniczny. Nie odczytywano Search Console konkurencji.
- Dla 3DSmart osobno sprawdzono DOM po wykonaniu JavaScript w przeglądarce: brak H1 potwierdzony, H2 i canonical zgodne ze źródłem. [Dowód DOM](materialy/konkurencja-html/3dsmart-dom-4-3.json). Dla pozostałych firm poniższe kompletne listy dotyczą statycznego HTML.
- PROWABLE: polska wersja strony, nie wersja angielska zwrócona przez inne narzędzie.

[Pełna ekstrakcja JSON](materialy/konkurencja-html/naglowki-metadane-4-3.json) zawiera URL źródła, datę, nazwę pliku i SHA-256, co pozwala powiązać obserwację z konkretnym odczytem.

## 1. G-PRO ECO ENERGY

Źródło: [https://g-pro.com.pl/](https://g-pro.com.pl/) · [zapisany HTML](materialy/konkurencja-html/gpro-home.html).

| Element | Odczyt |
| --- | --- |
| Title | Fotowoltaika, pompy ciepła i dachy - Kalisz \| G-PRO ECO ENERGY |
| Meta description | Fotowoltaika, pompy ciepła, dachy - Kalisz i południowa Wielkopolska |
| H1 | Fotowoltaika, pompy ciepła i dachy od jednego wykonawcy |
| Canonical URL | https://g-pro.com.pl/ |

### H2 — 9, kolejność źródła

1. Jeden wykonawca, cała instalacja
2. Ponad 25 lat w branży elektrycznej
3. Zobacz, co zrobiliśmy w okolicy
4. Kalisz i okolice do 100 km
5. Porozmawiajmy o Twojej instalacji
6. Oferta
7. Informacje
8. Kontakt
9. Dbamy o Twoją prywatność

### Linki do usług i sekcji oferty

| Tekst pierwszego odnośnika do adresu | Absolutny URL |
| --- | --- |
| Oferta | [https://g-pro.com.pl/oferta/](https://g-pro.com.pl/oferta/) |
| Fotowoltaika | [https://g-pro.com.pl/oferta/fotowoltaika/](https://g-pro.com.pl/oferta/fotowoltaika/) |
| Dachy | [https://g-pro.com.pl/oferta/dachy/](https://g-pro.com.pl/oferta/dachy/) |
| Pompy ciepła | [https://g-pro.com.pl/oferta/pompy-ciepla/](https://g-pro.com.pl/oferta/pompy-ciepla/) |
| Magazyny energii | [https://g-pro.com.pl/oferta/magazyny-energii/](https://g-pro.com.pl/oferta/magazyny-energii/) |
| Klimatyzacja | [https://g-pro.com.pl/oferta/klimatyzacja/](https://g-pro.com.pl/oferta/klimatyzacja/) |
| Stacje ładowania | [https://g-pro.com.pl/oferta/stacje-ladowania/](https://g-pro.com.pl/oferta/stacje-ladowania/) |
| Monitoring i alarmy | [https://g-pro.com.pl/oferta/monitoring-i-alarmy/](https://g-pro.com.pl/oferta/monitoring-i-alarmy/) |
| Farmy fotowoltaiczne | [https://g-pro.com.pl/oferta/farmy-fotowoltaiczne/](https://g-pro.com.pl/oferta/farmy-fotowoltaiczne/) |

## 2. 3DSmart

Źródło: [https://3dsmart.pl/](https://3dsmart.pl/) · [zapisany HTML](materialy/konkurencja-html/3dsmart-home.html).

| Element | Odczyt |
| --- | --- |
| Title | 3DSmart \| Kompleksowe Instalacje OZE dla przemysłu, biznesu, rolnictwa i domu |
| Meta description | Projektujemy i montujemy fotowoltaikę, pompy ciepła, magazyny energii i stacje ładowania. Ponad 13 lat doświadczenia i 3400+ realizacji. Sprawdź nasze rozwiązania. |
| H1 |  |
| Canonical URL | https://3dsmart.pl/ |

Puste H1: nie odnaleziono tagu w zapisanym HTML; brak potwierdzono także w odrębnym odczycie DOM po JavaScript.

### H2 — 11, kolejność źródła

1. Business
2. Industry
3. Home&Agro
4. Dla kogo pracujemy
5. Dotacje
6. Serwis
7. Zaufali nam
8. Zobacz nasze realizacje
9. Kontakt
10. Zamów rozmowę
11. Napisz do nas

### Linki do usług i sekcji oferty

| Tekst pierwszego odnośnika do adresu | Absolutny URL |
| --- | --- |
| Oferta | [https://3dsmart.pl/oferta.html](https://3dsmart.pl/oferta.html) |
| Business Dla biznesu | [https://3dsmart.pl/business.html](https://3dsmart.pl/business.html) |
| Magazyny energii | [https://3dsmart.pl/business-magazyny-energii.html](https://3dsmart.pl/business-magazyny-energii.html) |
| Instalacje PV | [https://3dsmart.pl/business-instalacje-pv.html](https://3dsmart.pl/business-instalacje-pv.html) |
| Mikroinstalacje (0,8-50 kW) | [https://3dsmart.pl/mikroinstalacje-dla-biznesu.html](https://3dsmart.pl/mikroinstalacje-dla-biznesu.html) |
| Średnie instalacje (50 kW-1 MW) | [https://3dsmart.pl/srednie-instalacje-dla-biznesu.html](https://3dsmart.pl/srednie-instalacje-dla-biznesu.html) |
| Farmy fotowoltaiczne (od 1MW) | [https://3dsmart.pl/farmy-fotowoltaiczne-dla-biznesu.html](https://3dsmart.pl/farmy-fotowoltaiczne-dla-biznesu.html) |
| Carporty | [https://3dsmart.pl/business-carporty.html](https://3dsmart.pl/business-carporty.html) |
| Stacje ładowania pojazdów | [https://3dsmart.pl/business-stacje-ladowania.html](https://3dsmart.pl/business-stacje-ladowania.html) |
| Telemechanika | [https://3dsmart.pl/business-telemechanika.html](https://3dsmart.pl/business-telemechanika.html) |
| Opracowanie dokumentacji | [https://3dsmart.pl/business-opracowanie-dokumentacji.html](https://3dsmart.pl/business-opracowanie-dokumentacji.html) |
| Industry Dla wykonawcy | [https://3dsmart.pl/industry.html](https://3dsmart.pl/industry.html) |
| Magazyny energii | [https://3dsmart.pl/industry-magazyny-energii.html](https://3dsmart.pl/industry-magazyny-energii.html) |
| Instalacje PV | [https://3dsmart.pl/industry-instalacje-pv.html](https://3dsmart.pl/industry-instalacje-pv.html) |
| Mikroinstalacje (0,8-50 kW) | [https://3dsmart.pl/mikroinstalacje-industry.html](https://3dsmart.pl/mikroinstalacje-industry.html) |
| Średnie instalacje (50 kW-1 MW) | [https://3dsmart.pl/srednie-instalacje-industry.html](https://3dsmart.pl/srednie-instalacje-industry.html) |
| Farmy fotowoltaiczne (od 1MW) | [https://3dsmart.pl/farmy-fotowoltaiczne-industry.html](https://3dsmart.pl/farmy-fotowoltaiczne-industry.html) |
| Carporty | [https://3dsmart.pl/industry-carporty.html](https://3dsmart.pl/industry-carporty.html) |
| Stacje ładowania pojazdów | [https://3dsmart.pl/industry-stacje-ladowania.html](https://3dsmart.pl/industry-stacje-ladowania.html) |
| Telemechanika | [https://3dsmart.pl/industry-telemechanika.html](https://3dsmart.pl/industry-telemechanika.html) |
| Opracowanie dokumentacji | [https://3dsmart.pl/industry-opracowanie-dokumentacji.html](https://3dsmart.pl/industry-opracowanie-dokumentacji.html) |
| Home&Agro Dla domu i gospodarstwa | [https://3dsmart.pl/home-agro.html](https://3dsmart.pl/home-agro.html) |
| Magazyny energii | [https://3dsmart.pl/magazyny-energii.html](https://3dsmart.pl/magazyny-energii.html) |
| Fotowoltaika dla domu | [https://3dsmart.pl/fotowoltaika-dla-domu.html](https://3dsmart.pl/fotowoltaika-dla-domu.html) |
| Pompy ciepła | [https://3dsmart.pl/pompy-ciepla.html](https://3dsmart.pl/pompy-ciepla.html) |
| Klimatyzacja | [https://3dsmart.pl/klimatyzacja.html](https://3dsmart.pl/klimatyzacja.html) |
| Punkty ładowania pojazdów | [https://3dsmart.pl/stacje-ladowania-pojazdow.html](https://3dsmart.pl/stacje-ladowania-pojazdow.html) |
| Carporty | [https://3dsmart.pl/carporty.html](https://3dsmart.pl/carporty.html) |
| Audyty energetyczne | [https://3dsmart.pl/audyty-energetyczne.html](https://3dsmart.pl/audyty-energetyczne.html) |
| Dotacje | [https://3dsmart.pl/dotacje.html](https://3dsmart.pl/dotacje.html) |
| Serwis | [https://3dsmart.pl/serwis.html](https://3dsmart.pl/serwis.html) |

## 3. Aurelum

Źródło: [https://www.aurelum.pl/](https://www.aurelum.pl/) · [zapisany HTML](materialy/konkurencja-html/aurelum-home.html).

| Element | Odczyt |
| --- | --- |
| Title | Aurelum – Fotowoltaika \| Pompy ciepła \| Klimatyzacja \| Smart Home \| Termomodernizacje – Rozświetl przyszłość z Aurelum – Twoim partnerem w energii odnawialnej! Od paneli słonecznych, przez klimatyzację i pompy ciepła, po inteligentne domy – oferujemy kompleksowe rozwiązania, które zapewniają nie tylko komfort, ale i oszczędność energii. Dzięki naszym panelom fotowoltaicznym możesz czerpać moc słoneczną na własne potrzeby, podczas gdy nasze innowacyjne systemy klimatyzacyjne i pompy ciepła dbają o optymalną temperaturę w Twoim domu. Wprowadź inteligencję do swojego życia z naszymi rozwiązaniami smart home, gdzie kontrola nad oświetleniem, ogrzewaniem i bezpieczeństwem jest na wyciągnięcie ręki. Wybierz Aurelum – krocz w stronę ekologicznej przyszłości już dziś! |
| Meta description |  |
| H1 | Produkuj własną energię, żyj komfortowo |
| Canonical URL | https://www.aurelum.pl/ |

Puste meta description: w zapisanym HTML nie odnaleziono tagu `meta name="description"`. Nie oznacza to braku fragmentu opisu w Google.

### H2 — 17, kolejność źródła

1. Nasza oferta
2. Fotowoltaika dla domu
3. Fotowoltaika dla biznesu
4. Pompy ciepła
5. Klimatyzacje
6. Smart Home
7. Stacje ładowania EV
8. Przykładowe realizacje
9. Instalacja 988,48 kWp - Radom
10. Instalacja 999,56 kWp - Opoczno
11. Instalacja 328,58 kWp - Kalisz
12. Instalacja 199,80 kWp - Wolica
13. Baza wiedzy
14. Jak przebiega współpraca z Aurelum?
15. Nasi partnerzy
16. Poznaj opinie naszych klientów
17. Skontaktuj się z nami.

### Linki do usług i sekcji oferty

| Tekst pierwszego odnośnika do adresu | Absolutny URL |
| --- | --- |
| Instalacja dla domu | [https://www.aurelum.pl/fotowoltaika-dla-domu/](https://www.aurelum.pl/fotowoltaika-dla-domu/) |
| Instalacja dla biznesu | [https://www.aurelum.pl/fotowoltaika-dla-biznesu/](https://www.aurelum.pl/fotowoltaika-dla-biznesu/) |
| Instalacja dla domu | [https://www.aurelum.pl/pompy-ciepla-instalacje-domowe/](https://www.aurelum.pl/pompy-ciepla-instalacje-domowe/) |
| Instalacja dla biznesu | [https://www.aurelum.pl/pompy-ciepla-instalacje-przemyslowe/](https://www.aurelum.pl/pompy-ciepla-instalacje-przemyslowe/) |
| Klimatyzacja | [https://www.aurelum.pl/klimatyzacja-dla-domu-i-firmy/](https://www.aurelum.pl/klimatyzacja-dla-domu-i-firmy/) |
| Termomodernizacja budynków | [https://www.aurelum.pl/termomodernizacja-budynkow](https://www.aurelum.pl/termomodernizacja-budynkow) |
| Inteligentne domy | [https://www.aurelum.pl/smart-home/](https://www.aurelum.pl/smart-home/) |
| Instalacje elektryczne | [https://www.aurelum.pl/instalacje-elektryczne-dla-domu/](https://www.aurelum.pl/instalacje-elektryczne-dla-domu/) |
| Folie i panele grzewcze IR | [https://www.aurelum.pl/folie-i-panele-grzewcze-ir/](https://www.aurelum.pl/folie-i-panele-grzewcze-ir/) |
| Instalacje hydrauliczne | [https://www.aurelum.pl/instalacje-hydrauliczne/](https://www.aurelum.pl/instalacje-hydrauliczne/) |
| Stacje ładowania EV | [https://www.aurelum.pl/stacje-ladowania-ev/](https://www.aurelum.pl/stacje-ladowania-ev/) |
| Rekuperacja | [https://www.aurelum.pl/rekuperacja/](https://www.aurelum.pl/rekuperacja/) |

## 4. PROWABLE — polska wersja

Źródło: [https://www.prowable.pl/](https://www.prowable.pl/) · [zapisany HTML](materialy/konkurencja-html/prowable-home.html).

| Element | Odczyt |
| --- | --- |
| Title | PROWABLE - Pompy ciepła Kalisz |
| Meta description | Pompy ciepła, instalacje fotowoltaiczne, rekuperacje, klimatyzacje. Zacznij oszczędzać z PROWABLE już dziś! Najlepsza jakość to podstawa! |
| H1 | rozwiązania dla twojego domu |
| Canonical URL | https://www.prowable.pl/ |

### H2 — 5, kolejność źródła

1. Kompleksowe
2. Oferujemy
3. Nasze usługi
4. Jesteśmy partnerem i instalatorem
5. Kalkulator Fotowaltaiki

### Linki do usług i sekcji oferty

| Tekst pierwszego odnośnika do adresu | Absolutny URL |
| --- | --- |
| Oferta | [https://www.prowable.pl/oferta-kalisz/](https://www.prowable.pl/oferta-kalisz/) |
| Pompy Ciepła | [https://www.prowable.pl/pompy-ciepla/](https://www.prowable.pl/pompy-ciepla/) |
| Przemysłowe pompy ciepła | [https://www.prowable.pl/przemyslowe-pompy-ciepla-kalisz/](https://www.prowable.pl/przemyslowe-pompy-ciepla-kalisz/) |
| Ogrzewanie podłogowe | [https://www.prowable.pl/ogrzewanie-podlogowe-kalisz/](https://www.prowable.pl/ogrzewanie-podlogowe-kalisz/) |
| Fotowoltaika | [https://www.prowable.pl/fotowoltaika-kalisz/](https://www.prowable.pl/fotowoltaika-kalisz/) |
| Rekuperacja | [https://www.prowable.pl/rekuperacja-kalisz/](https://www.prowable.pl/rekuperacja-kalisz/) |
| Klimatyzacja | [https://www.prowable.pl/klimatyzacja-kalisz/](https://www.prowable.pl/klimatyzacja-kalisz/) |
| Pomiary termowizyjne | [https://www.prowable.pl/pomiary-termowizyjne-kalisz/](https://www.prowable.pl/pomiary-termowizyjne-kalisz/) |
| Dowiedz się więcej | [https://www.prowable.pl/pompy-ciepla](https://www.prowable.pl/pompy-ciepla) |
| Więcej | [https://www.prowable.pl/przemyslowe-pompy-ciepla/](https://www.prowable.pl/przemyslowe-pompy-ciepla/) |
| Więcej | [https://www.prowable.pl/fotowoltaika-dla-domu/](https://www.prowable.pl/fotowoltaika-dla-domu/) |
| Więcej | [https://www.prowable.pl/klimatyzacja-dla-domu/](https://www.prowable.pl/klimatyzacja-dla-domu/) |
| Więcej | [https://www.prowable.pl/rekuperacja/](https://www.prowable.pl/rekuperacja/) |
| Oferta | [https://www.prowable.pl/oferta/](https://www.prowable.pl/oferta/) |

## 5. Ekosolary

Źródło: [https://ekosolary.pl/](https://ekosolary.pl/) · [zapisany HTML](materialy/konkurencja-html/ekosolary-home.html).

| Element | Odczyt |
| --- | --- |
| Title | Fotowoltaika Kalisz – montaż paneli fotowoltaicznych - Ekosolary |
| Meta description | Firma Ekosolary w Kaliszu zajmuje się fotowoltaiką oraz montażem paneli fotowoltaicznych. Oferujemy sprzedaż i montaż instalacji OZE. Skontaktuj się z nami! |
| H1 | Sprzedaż i montaż paneli solarnych w Kaliszu – Ekosolary |
| Canonical URL |  |

Puste canonical: w zapisanym HTML nie odnaleziono tagu `link rel="canonical"`. Nie ustalono adresu kanonicznego wybranego przez Google ani ewentualnego nagłówka HTTP Link.

### H2 — 14, kolejność źródła

1. Instalacja solarów w Kaliszu i inne usługi – gwarancja najwyższej jakości
2. Energia odnawialna
3. Dlaczego warto nas wybrać
4. Fotowoltaika w Olsztynie
5. Izolacja okien i drzwi
6. Usługi serwisowe
7. Przegląd pompy ciepła – ile kosztuje i kiedy warto?
8. Fotowoltaika dla firm – czy to się opłaca?
9. Przydomowa elektrownia wiatrowa – dlaczego warto?
10. Fotowoltaika na dom – jaka moc będzie odpowiednia?
11. Jak oszczędzać na rachunkach za prąd w firmie
12. Oświetlenie LED
13. Jak wygląda wstępny proces budowy farmy fotowoltaicznej
14. Aktualne formy dotacji:

### Linki do usług i sekcji oferty

| Tekst pierwszego odnośnika do adresu | Absolutny URL |
| --- | --- |
| Oferta | [https://ekosolary.pl/oferta](https://ekosolary.pl/oferta) |
| Lampy solarne uliczne | [https://ekosolary.pl/oferta/lampy-solarne-uliczne](https://ekosolary.pl/oferta/lampy-solarne-uliczne) |
| Fotowoltaika | [https://ekosolary.pl/oferta/fotowoltaika](https://ekosolary.pl/oferta/fotowoltaika) |
| Monitoring sieci energetycznej | [https://ekosolary.pl/oferta/monitoring-sieci-energetycznej](https://ekosolary.pl/oferta/monitoring-sieci-energetycznej) |
| Turbiny wiatrowe | [https://ekosolary.pl/oferta/turbiny-wiatrowe](https://ekosolary.pl/oferta/turbiny-wiatrowe) |
| Pompy ciepła | [https://ekosolary.pl/oferta/pompy-ciepla](https://ekosolary.pl/oferta/pompy-ciepla) |
| Termomodernizacja | [https://ekosolary.pl/oferta/termomodernizacja](https://ekosolary.pl/oferta/termomodernizacja) |

## Wnioski o organizacji treści — interpretacja

- **G-PRO:** jeden czytelny H1 obejmuje główne usługi; H2 prowadzą od oferty przez doświadczenie i realizacje do lokalnego zasięgu i kontaktu. Osobne adresy usług tworzą prostą nawigację.
- **3DSmart:** segmentacja według odbiorcy i odrębne podstrony dla podobnych usług. Powtarzający się tekst „Magazyny energii” prowadzi do różnych adresów dla biznesu, wykonawców i domu; w analizie nie należy ich scalać. Brak H1 jest obserwacją struktury, a nie samodzielnym wyjaśnieniem rankingu.
- **Aurelum:** H1 opisuje korzyść, a H2 łączą ofertę, konkretne realizacje, proces i opinie. Bardzo długi title oraz brak meta description w źródle odnotowano do porównania; nie określono ich wpływu na CTR lub pozycję.
- **PROWABLE:** title koncentruje się na pompach ciepła w Kaliszu, a H1 pozostaje ogólny. Linki usług są bardziej opisowe i lokalne niż główny nagłówek. W źródle występują różne warianty adresów podobnych usług; nie potwierdzono, czy przekierowują lub są równoważne.
- **Ekosolary:** title/H1 wskazują Kalisz i usługę; H2 mieszają ofertę, wiedzę techniczną, artykuły i dotacje, w tym nagłówek o Olsztynie. Brak canonical w HTML jest polem do odnotowania, nie dowodem duplikacji.

Nie przepisujemy tych tekstów do ALFA. Dla dalszego projektowania wykorzystujemy jedynie wzorce: jednoznaczny temat strony, logiczna kolejność sekcji oraz odrębne, opisowe wejścia do rzeczywistych usług. Nie rozpoczęto kolejnego kroku i nie zmieniano kodu projektu.
