# Krok 4.2 — dowody HTML: G-PRO i 3DSmart

Data: 8 listopada 2026. Odczyt bezpośredni oficjalnego HTML przez HTTP GET; wszystkie wskazane strony zwróciły 200. Nie wysyłano formularzy. Nie mierzono pozycji Google ani widoczności mobilnej — te elementy wymagają osobnej obserwacji interfejsu. Deklaracje marketingowe i referencje opisano jako obecne, bez potwierdzania ich prawdziwości.

Archiwum odczytu: [materiały HTML i JSON](materialy/konkurencja-html/). JSON zawiera tytuł, nagłówki, pola formularzy, odnośniki i tekst. H1 dotyczy pobranego statycznego HTML; skrypt może zmieniać DOM po załadowaniu, więc brak H1 w źródle nie przesądza o stanie po wykonaniu JS.

## G-PRO ECO ENERGY

| Element | Wynik |
| --- | --- |
| Docelowy URL badania | https://g-pro.com.pl/ — strona główna. Osobno odczytano [PV](https://g-pro.com.pl/oferta/fotowoltaika/), [realizacje](https://g-pro.com.pl/realizacje/) i [przykład z Kalisza](https://g-pro.com.pl/realizacje/instalacja-fotowoltaiczna-kalisz/). Nie ustala to samodzielnie adresu rankującego. |
| Title strony głównej — dokładnie | `Fotowoltaika, pompy ciepła i dachy - Kalisz \| G-PRO ECO ENERGY` |
| H1 strony głównej — jeden | `Fotowoltaika, pompy ciepła i dachy od jednego wykonawcy` (słowo „dachy” wyróżnione elementem `em`). |
| Title / H1 oferty PV | Title: `Fotowoltaika - G-PRO ECO ENERGY`; H1: `Fotowoltaika`. |
| Oferta | PV dla domu i firm, dachy, pompy ciepła, magazyny, klimatyzacja, EV, monitoring/alarmy, farmy. Wspólny wykonawca i własne ekipy są deklarowanym wyróżnikiem. |
| Treść a pytania klientów | Homepage wyjaśnia zakres, wykonawcę, zasięg i kontakt. Podstrona PV porusza dobór mocy do zużycia, dach/grunt, dom/firma/farmy, gwarancję i pomoc z finansowaniem. Ma niewiele szczegółów ilościowych: brak jawnego cennika, konkretnych terminów realizacji i rozwiniętego FAQ w odczytanej ofercie PV. Informacje o dotacjach są deklaracjami strony, nie zostały zweryfikowane pod kątem aktualnych programów. |
| Realizacje | Rozbudowana galeria z linkami do osobnych kart. Nazwy obejmują m.in. PV pod Kaliszem i Kalisz, instalacje dachowe/gruntowe, sprzęt i inne usługi. Przykładowa karta „Instalacja fotowoltaiczna – Kalisz” zawiera zdjęcie, zakres oraz lokalizację „powiat kaliski” i opis montażu. Nie znaleziono tam konkretnych kWp, modelu falownika ani rocznego uzysku. Nie należy oceniać wszystkich kart na podstawie jednej próby. |
| Opinie i dowody | Homepage prezentuje deklarację oceny Google 4,9, doświadczenia, partnerstwa i zdjęcia. W odczytanym HTML homepage nie znaleziono linku do źródła Google ocen ani tekstów recenzji. To słabsza możliwość weryfikacji niż bezpośrednio podlinkowane opinie; sama liczba nie dowodzi aktualności. |
| Formularz | Wspólny formularz na home i odczytanych podstronach: **4 pola użytkowe** — telefon, e-mail, temat (select), wiadomość. `required` mają telefon, e-mail i wiadomość; temat nie ma tego atrybutu. Osobno **1 wymagana zgoda checkbox**. |
| Pola techniczne | 6 pól `hidden` i pole antyspamowe `adres_www` oznaczone „Nie wypełniaj tego pola”, z `tabindex=-1`. Nie dolicza się ich do liczby danych potrzebnych od klienta. Wizualne ukrycie honeypota należy potwierdzić w przeglądarce; sama etykieta i atrybuty wskazują jego funkcję. Formularz ma `novalidate`, więc sam atrybut required nie dowodzi faktycznego zachowania walidacji. |
| CTA | Główne wezwanie prowadzi do bezpłatnej wyceny; sekcja kontaktu proponuje telefon lub pozostawienie numeru. Jest link do magazynów, a po kartach usług przejścia do szczegółów. |
| Telefon w HTML | `tel:+48515686622`, tekst `+48 515 686 622`; w nagłówku, sekcji kontaktu i stopce. Obecność `tel:` nie dowodzi widoczności na mobile. |
| SEO lokalne | Kalisz w title, adres Migdałowa 16, lokalna galeria i rozbudowana lista gmin/miejscowości: m.in. Opatówek, Koźminek, Lisków, Ceków-Kolonia. To bardziej konkretne informacje niż samo powtarzanie frazy. Strona eksponuje 100 km, ale opis dojazdu do wsi mówi o 50 km — zakres jest niejednoznaczny i wymaga wyjaśnienia, nie automatycznego uznania błędu. |

Dowody lokalne: [home JSON](materialy/konkurencja-html/gpro-home.json), [oferta PV JSON](materialy/konkurencja-html/gpro-pv.json), [realizacje JSON](materialy/konkurencja-html/gpro-realizacje.json), [przykładowa karta HTML](materialy/konkurencja-html/gpro-realizacja-kalisz.html).

## 3DSmart

| Element | Wynik |
| --- | --- |
| Docelowy URL badania | https://3dsmart.pl/ — strona główna. Osobno odczytano [fotowoltaikę dla domu](https://3dsmart.pl/fotowoltaika-dla-domu.html), [referencje](https://3dsmart.pl/referencje.html) i [kontakt](https://3dsmart.pl/kontakt.html). Nie ustala to samodzielnie adresu rankującego. |
| Title strony głównej — dokładnie | `3DSmart \| Kompleksowe Instalacje OZE dla przemysłu, biznesu, rolnictwa i domu` |
| H1 strony głównej | **Nie znaleziono elementu H1 w pobranym HTML**. Nagłówki otwierających segmentów Business, Industry i Home&Agro są H2. Ocena DOM po JS pozostaje osobna. |
| Title / H1 podstrony PV | Title: `Fotowoltaika dla domu i rolnictwa \| Dotacje \| 3DSmart`; H1: `Fotowoltaika dla domu – Twoja droga do niezależności energetycznej i niższych rachunków`. |
| Oferta | Segmenty Business, Industry i Home&Agro. PV od mikroinstalacji po farmy, magazyny energii, carporty, EV, telemechanika i dokumentacja; dla domu także pompy, klimatyzacja i audyty. Odrębne wejścia do dotacji i serwisu. |
| Treść a pytania klientów | Homepage szeroko przedstawia segmenty, dobór systemu, koncepcję, formalności i serwis. Podstrona PV jest szczegółowsza: opis technologii, korzyści, pięć kroków współpracy i FAQ obejmujące cenę, zimę/pochmurne dni, żywotność oraz wartość domu. Są też mocne, ogólne obietnice efektów, których nie można kopiować jako faktów ALFA: np. pełne pokrycie potrzeb w bilansie rocznym czy wysokie oszczędności. Nie zweryfikowano aktualności dotacji ani parametrów marketingowych. |
| Realizacje | Na homepage zdjęcia, lokalizacje i konkretne parametry: PV 499,8 kW Szulec, PV 49,14 kW Kalisz, magazyn 200 kWh Ostrów Wlkp., magazyn 51,2 kWh Zbiersk Cukrownia. Na podstronie domowej m.in. PV 12,38 kW Kalisz oraz 11,2 kW Wojciechówka. To bogatsze opisy niż sama fotografia; nie wykonano niezależnego potwierdzenia każdej realizacji. |
| Opinie / dowody | Sekcja zaufania i deklarowane liczby doświadczenia/projektów, link do referencji. Strona referencji udostępnia **12 linków do obrazów dokumentów**, m.in. nazwanych UAM, Prosna i Martel. Nie odczytano ani nie zweryfikowano autentyczności treści skanów. W odczytanym HTML nie znaleziono kompletnej listy tekstowych recenzji Google; link do mapy/dojazdu to nie to samo co osadzona lista opinii. |
| Formularz oddzwonienia | Popup „Zamów rozmowę”: **1 pole numeru telefonu wymagane** oraz **1 wymagana zgoda checkbox**, zaznaczona domyślnie w HTML. |
| Formularz wiadomości | Popup: **4 pola użytkowe** — imię i nazwisko/nazwa firmy, e-mail, telefon, treść wiadomości. Wymagane w HTML są imię/nazwa, e-mail i treść; telefon opcjonalny. Osobno **1 wymagana zgoda checkbox**, zaznaczona domyślnie. 4 ukryte pola UTM nie są polami klienta. Ten sam zestaw popupów występuje w odczytanych home, PV, kontakt i referencjach. |
| Ograniczenie liczenia formularzy | Odczyt HTML potwierdza strukturę, nie widoczność otwartego popupu, zachowanie walidacji JS ani dostarczenie wiadomości. Nie wysyłano formularza. |
| CTA | „Porozmawiajmy”, bezpłatna wycena i oddzwonienie; osobne zachęty do dotacji, serwisu oraz realizacji. Minimalny callback jest łatwiejszy pod względem liczby danych niż pełna wiadomość — to wniosek o formularzu, nie zmierzona konwersja. |
| Telefon w HTML | `tel:+48577151315` w nagłówku; w dalszych miejscach także `tel:+48 577 15 13 15`. Tekst `+48 577 15 13 15`, skrócony wariant `577 151 315`. Są ikoniczne linki telefoniczne bez tekstu; widoczność i funkcja mobilna wymagają sprawdzenia interfejsu. |
| SEO lokalne | Adres Kalisz, Legionów 41, mapy/dojazd, realizacje z Kalisza i regionu. Title głównej strony ma charakter szeroki i nie wymienia Kalisza, więc lokalność opiera się także na innych elementach. Kontakt rozróżnia Kalisz jako siedzibę główną, Poznań jako oddział i Zduńską Wolę jako punkt partnerski. |

Dowody lokalne: [home JSON](materialy/konkurencja-html/3dsmart-home.json), [PV JSON](materialy/konkurencja-html/3dsmart-pv.json), [kontakt JSON](materialy/konkurencja-html/3dsmart-kontakt.json), [referencje JSON](materialy/konkurencja-html/3dsmart-referencje.json).

## Ograniczenia

- Raport opisuje pobrane strony i próbkę realizacji, nie kompletny crawl domen ani techniczny audyt SEO.
- Pola `required` policzono na podstawie obecności atrybutu, a nie wartości (atrybut boolean). Nie przyjęto, że każdy input należy wypełnić.
- Ukryte pola techniczne i antyspamowe nie zwiększają liczby pól klienta; zgody pokazano osobno.
- Dane mobilne i pozycje Google pozostają do wpisania w raporcie głównym przez prowadzącego audyt.
