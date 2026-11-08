# Zadanie 3.1 — dane firmy w aktualnym projekcie

Data odczytu: 8 listopada 2026 r. Zakres: wyłącznie lokalne pliki projektu; nie sprawdzano w tym podzadaniu obecnej strony ani Google Maps. Dane projektu nie stanowią potwierdzenia aktualnego stanu wizytówki.

## Dane do porównania z obecną stroną i właściwą wizytówką

| Pole | Wartość w projekcie | Źródło |
| --- | --- | --- |
| Nazwa | ALFA Rafał Morańda | [Konfiguracja firmy](../../src/lib/site.js) |
| Adres | Ceków Kolonia 6a, 62-834 Ceków | [Konfiguracja firmy](../../src/lib/site.js), [kontakt](../../src/components/ContactBanner/ContactBanner.jsx), [stopka](../../src/components/Footer/Footer.jsx) |
| Telefon | +48 600 306 425 | [Konfiguracja firmy](../../src/lib/site.js), [kontakt](../../src/components/ContactBanner/ContactBanner.jsx), [stopka](../../src/components/Footer/Footer.jsx) |
| E-mail | rafal@moranda.com.pl | [Konfiguracja firmy](../../src/lib/site.js), [kontakt](../../src/components/ContactBanner/ContactBanner.jsx), [stopka](../../src/components/Footer/Footer.jsx) |
| WWW | https://www.moranda.com.pl/ | [Konfiguracja firmy](../../src/lib/site.js) |
| Godziny | Pon.–pt. 7:00–15:00; sob.–niedz. nieczynne | [Konfiguracja godzin](../../src/lib/site.js); [metadane kontaktu](../../src/app/kontakt/page.js) potwierdzają zakres dni roboczych |
| Obszar | Kalisz i powiat kaliski w danych strukturalnych; stopka podaje Kalisz i okolice w promieniu około 50 km od miasta | [Konfiguracja firmy](../../src/lib/site.js), [stopka](../../src/components/Footer/Footer.jsx) |

## Odnośniki Google Maps zapisane w projekcie

- Kontakt i dane strukturalne korzystają ze stałej `OFFICE_DIRECTIONS_URL` z `query_place_id=ChIJW7gAcBXfGkcRpLSZ251ae5E`: [źródło](../../src/lib/site.js).
- Sekcja opinii prowadzi do `https://www.google.com/maps?cid=10483072191675610276`: [źródło](../../src/components/CustomerReviews/CustomerReviews.jsx).
- Mapa osadzona używa zapytania tekstowego `ALFA Rafał Morańda, Ceków Kolonia 6a, 62-834 Ceków`, przybliżenia `z=15`, bez jawnego Place ID: [źródło](../../src/components/RegionalServiceMap/RegionalServiceMap.jsx).

Nie potwierdzono na żywo, że te trzy odnośniki wskazują ten sam profil. Weryfikacja tożsamości profilu pozostaje do wykonania w punkcie 3.1; samo zapisanie identyfikatora w kodzie nie jest dowodem poprawności.

## Opinie i potencjalne rozbieżności

- Sekcja opinii zawiera wpisane na stałe **4,8** i **20 opinii**. To wartości w kodzie, a nie bieżący odczyt Google: [źródło](../../src/components/CustomerReviews/CustomerReviews.jsx).
- Plik danych zawiera siedem tekstów opinii z nazwami autorów, bez dat, indywidualnych ocen i odnośników do źródłowych recenzji: [źródło](../../src/data/customerReviews.js). Autentyczność, zgodność tekstów i aktualność wymagają sprawdzenia na właściwym profilu.
- W odczytanych komponentach nie znaleziono rozbieżności nazwy, telefonu, adresu ani e-maila.
- Opis obszaru działania różni się szczegółowością: jednostki administracyjne w danych strukturalnych kontra około 50 km w stopce. Nie dowodzi to sprzeczności; realny obszar wymaga potwierdzenia.
- Typ Schema.org `Electrician` w kodzie nie oznacza, że taka jest główna kategoria Profilu Firmy w Google.

## Pola oczekujące na ręczną lub bezpośrednią weryfikację

Puste komórki są celowe. Nie oznaczają braku danych w samym Google.

| Pole | Potwierdzona wartość z Google Maps |
| --- | --- |
| Dokładna nazwa profilu | |
| Adres / obszar | |
| Telefon | |
| WWW | |
| Kategoria główna | |
| Kategorie dodatkowe | |
| Aktualna ocena | |
| Aktualna liczba opinii | |
| Data najnowszej opinii | |
| Godziny | |
| Czy link kontaktowy i link opinii prowadzą do tej samej firmy | |

Raport pomocniczy do zadania 3.1. Nie zamyka audytu Profilu Firmy w Google ani żadnego dalszego punktu.
