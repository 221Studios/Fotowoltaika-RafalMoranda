import fs from 'node:fs/promises';
import path from 'node:path';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';

const out='C:/Users/Nikodem/Projekty/Fotowoltaika-RafalMoranda/outputs/zadanie-6-2026-11-08';
const wb=Workbook.create();
const l=wb.worksheets.add('Leady');
const u=wb.worksheets.add('Ustawienia');
const p=wb.worksheets.add('Rozliczenia');
const d=s=>new Date(`${s}T00:00:00Z`);
function setup(s,widths){
 s.showGridLines=false;
 const r=s.getRangeByIndexes(0,0,110,widths.length);
 r.format.font={name:'Arial',size:10,color:'#202124'};r.format.wrapText=true;r.format.verticalAlignment='top';r.format.rowHeightPx=38;
 widths.forEach((w,i)=>s.getRangeByIndexes(0,i,110,1).format.columnWidthPx=w);
 s.freezePanes.freezeRows(6);s.freezePanes.freezeColumns(1);
}
function title(s,t,note,last){
 s.getRange(`A1:${last}1`).merge();s.getRange('A1').values=[[t]];s.getRange('A1').format.font={size:16,bold:true};s.getRange(`A1:${last}1`).format.rowHeightPx=34;
 s.getRange(`A2:${last}2`).merge();s.getRange('A2').values=[[note]];s.getRange(`A2:${last}2`).format.rowHeightPx=44;
}
function head(s,labels){const r=s.getRangeByIndexes(5,0,1,labels.length);r.values=[labels];r.format.fill='#E8EAED';r.format.font={bold:true,color:'#202124'};r.format.rowHeightPx=60;r.format.verticalAlignment='center';}
function choices(s,range,values){s.getRange(range).dataValidation={rule:{type:'list',values}};}
setup(l,[140,120,115,150,150,130,140,145,130,135,145,220,115,135,175,210,180,100,180,140,150,140,150,240]);
title(l,'ALFA — CRM i prowizje | PROJEKT','2026-11-08 • Wszystkie wpisy TEST są fikcyjne. Kliknięcie kontaktu nie jest leadem. Dodawaj prawdziwe zgłoszenia w pustych wierszach.','H');
l.getRange('A3:B3').values=[['Otrzymane bez spamu / duplikatów',null]];
l.getRange('B3').formulas=[['=COUNTIFS(B7:B106,"RZECZYWISTY",A7:A106,"<>",H7:H106,"<>Spam",H7:H106,"<>Duplikat")']];
l.getRange('D3:E3').values=[['Wartościowe',null]];l.getRange('E3').formulas=[['=COUNTIFS(B7:B106,"RZECZYWISTY",I7:I106,"Tak",A7:A106,"<>",H7:H106,"<>Spam",H7:H106,"<>Duplikat")']];
l.getRange('A4:H4').merge();l.getRange('A4').values=[['Prowizja wymaga zatwierdzonych zasad i dowodów. Formuły: R–W; kwoty PLN netto. Ujemne saldo wymaga uzgodnienia korekty.']];
l.getRange('J3:K3').values=[['Prowizja — realne',null]];
l.getRange('K3').formulas=[['=IF(AND(Ustawienia!B7="Zatwierdzone",ISNUMBER(Ustawienia!B8),Ustawienia!B8>=0,Ustawienia!B8<=1,ISNUMBER(Ustawienia!B10),Ustawienia!B10>0,ISNUMBER(Ustawienia!B11),Ustawienia!B11>0,Ustawienia!B12<>""),SUMIFS(U7:U106,B7:B106,"RZECZYWISTY"),"Nieuzgodnione")']];
head(l,['Lead ID','Typ rekordu','Pierwszy odbiór','Pierwsze źródło','Ostatnie źródło','Kanał odbioru','Usługa','Status','Wartościowy lead?','Wcześniejszy kontakt?','Przypisanie uzgodnione?','Dowód i akceptacja obu stron','Data umowy','Umowa PLN netto','Submission ID','UTM / kampania','Kontakt / klucz klienta','Dni do umowy ↻','Kontrola ↻','Wpłaty po zwrotach ↻','Prowizja należna ↻','Prowizja wypłacona ↻','Saldo ↻','Uwagi / powód odrzucenia']);
const demo=[
 ['TEST-001','TEST',d('2026-11-01'),'SEO','SEO','Telefon','PV','Nowy','Do ustalenia','Do ustalenia','Do ustalenia','FIKCJA — brak akceptacji',null,null,null,null,'KLIENT-TEST-1',null,null,null,null,null,null,'Przykład nowego zapytania.'],
 ['TEST-002','TEST',d('2026-08-01'),'Facebook','SEO','Formularz','Magazyn energii','Wpłata','Tak','Nie','Tak','FIKCJA — potwierdzenie obu stron do demonstracji',d('2026-10-30'),20000,'SUB-TEST-002','facebook / social / fotowoltaika_kalisz','KLIENT-TEST-2',null,null,null,null,null,null,'Dzień 90; wpłata, zwrot i wypłacona prowizja wyłącznie testowe.'],
 ['TEST-003','TEST',d('2026-11-01'),'Nieustalone','Polecenie','WhatsApp','PV','Wycena','Tak','Tak','Nie','FIKCJA — klient wcześniejszy',null,null,null,null,'KLIENT-TEST-3',null,null,null,null,null,null,'Wykluczony z automatycznej prowizji.']
];
l.getRange('A7:X9').values=demo;l.getRange('A7:X9').format.rowHeightPx=94;l.getRange('A7:B9').format.fill='#FFF3D6';
l.getRange('C7:C106').setNumberFormat('yyyy-mm-dd');l.getRange('M7:M106').setNumberFormat('yyyy-mm-dd');l.getRange('N7:N106').setNumberFormat('#,##0.00');l.getRange('T7:W106').setNumberFormat('#,##0.00;[Red](#,##0.00);0.00');
choices(l,'B7:B106',['RZECZYWISTY','TEST']);
for(const col of ['D','E'])choices(l,`${col}7:${col}106`,['SEO','Profil Firmy Google','Facebook','Instagram','Google Ads','Polecenie','Bezpośrednie','Inne','Nieustalone']);
choices(l,'F7:F106',['Telefon','Formularz','E-mail','WhatsApp','Osobiście','Inne']);
choices(l,'G7:G106',['PV','Magazyn energii','Inna potwierdzona usługa','Do ustalenia']);
choices(l,'H7:H106',['Nowy','Kontakt','Wycena','Umowa','Wpłata','Zakończony','Utracony','Anulowany','Spam','Duplikat']);
for(const col of ['I','J'])choices(l,`${col}7:${col}106`,['Tak','Nie','Do ustalenia']);
choices(l,'K7:K106',['Tak','Nie','Do ustalenia','Sporne']);
l.getRange('R7:W106').format.fill='#F1F3F4';

setup(u,[280,195,600]);title(u,'Ustawienia — wymagana wspólna akceptacja','Pusta stawka jest zamierzona. 90 dni to propozycja. Ustawienia dotyczą całej wersji arkusza; zmiana przelicza historię.','C');
head(u,['Parametr','Wartość do uzupełnienia','Znaczenie / instrukcja']);
u.getRange('A7:C15').values=[
 ['Status zasad','Projekt','Zatwierdzone dopiero po akceptacji Rafała i Nikodema.'],
 ['Stawka prowizji',null,'Wpisz procent, np. 5% jedynie gdy tak uzgodniono. Brak sugerowanej stawki.'],
 ['Okno do umowy (dni)',90,'PROPOZYCJA: od pierwszego odebranego kontaktu do umowy; dzień 90 włącznie.'],
 ['Akceptacja Rafała — data',null,'Data rzeczywistej akceptacji wersji zasad.'],
 ['Akceptacja Nikodema — data',null,'Data rzeczywistej akceptacji wersji zasad.'],
 ['Wersja / dowód zasad',null,'Prywatny odnośnik lub identyfikator uzgodnienia obu stron.'],
 ['Podstawa','Wpłaty netto minus zwroty','PROPOZYCJA. Wpłaty klienta dodatnie, zwroty ujemne; bez VAT.'],
 ['Rozliczenia','Miesięczne — propozycja','Raport do 5., wypłata do 10. po uzgodnieniu; ustalić z Rafałem.'],
 ['Źródło projektu','Plan zadania 6, 2026-11-08','Założenia robocze, bez danych prawdziwych klientów.']
];
u.getRange('A7:C15').format.rowHeightPx=60;u.getRange('B8').setNumberFormat('0.00%');u.getRange('B10:B11').setNumberFormat('yyyy-mm-dd');
choices(u,'B7',['Projekt','Zatwierdzone']);
u.getRange('A18:C18').merge();u.getRange('A18').values=[['Użytkowanie: Leady → dowód przypisania → umowa → Rozliczenia. Tylko rzeczywisty odbiór kontaktu tworzy leada.']];u.getRange('A18:C18').format.rowHeightPx=44;
u.getRange('A20:C20').merge();u.getRange('A20').values=[['Zakres: wiersze 7–106. Przy rozszerzeniu zmień też formuły, podsumowania, tabele i walidacje. Nie nadpisuj kolumn z symbolem ↻.']];u.getRange('A20:C20').format.rowHeightPx=44;
u.getRange('A22:C22').merge();u.getRange('A22').values=[['Dostęp prywatny dla Rafała i Nikodema. Po imporcie zabezpiecz formuły i sprawdź listy wyboru. Dane osobowe i dokumenty nie trafiają do GA4.']];u.getRange('A22:C22').format.rowHeightPx=44;

setup(p,[155,140,120,190,150,250,220,260]);title(p,'Rozliczenia — wpłaty, zwroty i prowizja','Jeden wiersz na transakcję. Kwoty PLN netto: wpłata +, zwrot −, wypłacona prowizja +. Nie wpisuj nieopłaconych faktur jako wpłat.','H');
p.getRange('A4:H4').merge();p.getRange('A4').values=[['Powiązanie przez Lead ID; typ TEST / rzeczywisty pochodzi z Leady. Tylko wiersze z kontrolą OK wchodzą do naliczeń.']];
head(p,['Transakcja ID','Lead ID','Data transakcji','Rodzaj','PLN netto','Dowód / dokument','Kontrola ↻','Uwagi']);
p.getRange('A7:H9').values=[
 ['TX-TEST-001','TEST-002',d('2026-11-01'),'Wpłata',10000,'FIKCJA — wpłata testowa',null,'Zaliczka; kwoty demonstracyjne.'],
 ['TX-TEST-002','TEST-002',d('2026-11-04'),'Zwrot',-2000,'FIKCJA — zwrot testowy',null,'Zwrot obniża podstawę.'],
 ['TX-TEST-003','TEST-002',d('2026-11-02'),'Prowizja wypłacona',500,'FIKCJA — wypłata testowa',null,'Nie jest wpłatą klienta.']
];
p.getRange('A7:H9').format.rowHeightPx=72;p.getRange('C7:C106').setNumberFormat('yyyy-mm-dd');p.getRange('E7:E106').setNumberFormat('#,##0.00;[Red](#,##0.00);0.00');p.getRange('G7:G106').format.fill='#F1F3F4';
choices(p,'D7:D106',['Wpłata','Zwrot','Prowizja wypłacona']);
for(let r=7;r<=106;r++){
 p.getRange(`G${r}`).formulas=[[`=IF(A${r}="","",IF(COUNTIFS($A$7:$A$106,A${r})<>1,"Duplikat ID",IF(COUNTIFS(Leady!$A$7:$A$106,B${r})<>1,"Sprawdź Lead ID",IF(OR(NOT(ISNUMBER(C${r})),C${r}<=0,F${r}="",NOT(ISNUMBER(E${r}))),"Uzupełnij dane",IF(OR(AND(D${r}="Wpłata",E${r}>0),AND(D${r}="Zwrot",E${r}<0),AND(D${r}="Prowizja wypłacona",E${r}>0)),"OK","Sprawdź rodzaj / znak")))))`]];
 l.getRange(`R${r}`).formulas=[[`=IF(A${r}="","",IF(AND(ISNUMBER(C${r}),ISNUMBER(M${r})),M${r}-C${r},""))`]];
 l.getRange(`S${r}`).formulas=[[`=IF(A${r}="","",IF(COUNTIFS($A$7:$A$106,A${r})<>1,"Duplikat ID",IF(OR(I${r}="Nie",J${r}="Tak",K${r}="Nie",H${r}="Spam",H${r}="Duplikat"),"Wykluczony",IF(AND(OR(B${r}="TEST",B${r}="RZECZYWISTY"),ISNUMBER(C${r}),C${r}>0,I${r}="Tak",J${r}="Nie",K${r}="Tak",L${r}<>"",ISNUMBER(M${r}),ISNUMBER(Ustawienia!$B$9),Ustawienia!$B$9>=0,R${r}>=0,R${r}<=Ustawienia!$B$9),"Gotowy","Do wyjaśnienia"))))`]];
 l.getRange(`T${r}`).formulas=[[`=IF(A${r}="","",SUMIFS(Rozliczenia!$E$7:$E$106,Rozliczenia!$B$7:$B$106,A${r},Rozliczenia!$D$7:$D$106,"Wpłata",Rozliczenia!$G$7:$G$106,"OK")+SUMIFS(Rozliczenia!$E$7:$E$106,Rozliczenia!$B$7:$B$106,A${r},Rozliczenia!$D$7:$D$106,"Zwrot",Rozliczenia!$G$7:$G$106,"OK"))`]];
 l.getRange(`U${r}`).formulas=[[`=IF(A${r}="","",IF(S${r}<>"Gotowy","Nieuzgodnione",IF(AND(Ustawienia!$B$7="Zatwierdzone",ISNUMBER(Ustawienia!$B$8),Ustawienia!$B$8>=0,Ustawienia!$B$8<=1,ISNUMBER(Ustawienia!$B$10),Ustawienia!$B$10>0,ISNUMBER(Ustawienia!$B$11),Ustawienia!$B$11>0,Ustawienia!$B$12<>""),ROUND(T${r}*Ustawienia!$B$8,2),"Brak akceptacji / stawki")))`]];
 l.getRange(`V${r}`).formulas=[[`=IF(A${r}="","",SUMIFS(Rozliczenia!$E$7:$E$106,Rozliczenia!$B$7:$B$106,A${r},Rozliczenia!$D$7:$D$106,"Prowizja wypłacona",Rozliczenia!$G$7:$G$106,"OK"))`]];
 l.getRange(`W${r}`).formulas=[[`=IF(A${r}="","",IF(ISNUMBER(U${r}),U${r}-V${r},"Nieuzgodnione"))`]];
}
const leadTable=l.tables.add('A6:X106',true,'LeadyCRM');leadTable.style='TableStyleLight1';
const cashTable=p.tables.add('A6:H106',true,'TransakcjeCRM');cashTable.style='TableStyleLight1';
l.getRange('A7:X106').format.fill='#FFFFFF';p.getRange('A7:H106').format.fill='#FFFFFF';
l.getRange('R7:W106').format.fill='#F1F3F4';p.getRange('G7:G106').format.fill='#F1F3F4';l.getRange('A7:B9').format.fill='#FFF3D6';
l.getRange('A6:X6').format.fill='#E8EAED';p.getRange('A6:H6').format.fill='#E8EAED';
// Test against the actual workbook formulas, then restore unapproved settings.
const tests=[];
async function inspectCell(range){wb.recalculate();return (await wb.inspect({kind:'table',range,include:'values',tableMaxRows:1,tableMaxCols:8,maxChars:1600})).ndjson;}
function assertText(label,txt,expected){if(!txt.includes(expected))throw new Error(`${label}: expected ${expected}, got ${txt}`);tests.push({label,result:txt});}
assertText('Blank rate blocks commission',await inspectCell('Leady!U8'),'Brak akceptacji');
u.getRange('B7').values=[['Zatwierdzone']];u.getRange('B8').values=[[0.05]];u.getRange('B10:B11').values=[[d('2026-11-08')],[d('2026-11-08')]];u.getRange('B12').values=[['TEST ONLY']];
assertText('Day 90 included',await inspectCell('Leady!S8'),'Gotowy');
assertText('Cash net of refunds',await inspectCell('Leady!T8'),'8000');
assertText('Accrued commission 5% test',await inspectCell('Leady!U8'),'400');
assertText('Refund correction stays negative',await inspectCell('Leady!W8'),'-100');
assertText('TEST excluded from real summary',await inspectCell('Leady!K3'),'0');
l.getRange('M8').values=[[d('2026-10-31')]];assertText('Day 91 blocked',await inspectCell('Leady!S8'),'Do wyjaśnienia');l.getRange('M8').values=[[d('2026-10-30')]];
l.getRange('A10').values=[['TEST-002']];assertText('Duplicate lead blocked',await inspectCell('Leady!S8'),'Duplikat ID');assertText('Payment with ambiguous lead blocked',await inspectCell('Rozliczenia!G7'),'Sprawdź Lead ID');l.getRange('A10').values=[[null]];
p.getRange('E8').values=[[2000]];assertText('Positive refund rejected',await inspectCell('Rozliczenia!G8'),'Sprawdź rodzaj');p.getRange('E8').values=[[-2000]];
assertText('Existing client blocked',await inspectCell('Leady!S9'),'Wykluczony');
u.getRange('B7').values=[['Projekt']];u.getRange('B8').values=[[null]];u.getRange('B10:B12').values=[[null],[null],[null]];
wb.recalculate();
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:20},summary:'Formula errors'});
await fs.mkdir(out,{recursive:true});
for(const [name,sheetName,range] of [['leady','Leady','A1:H9'],['leady-rozliczenie','Leady','R6:X9'],['ustawienia','Ustawienia','A1:C22'],['wplaty','Rozliczenia','A1:H9']]){
 const img=await wb.render({sheetName,range,scale:1,format:'png'});await fs.writeFile(path.join(out,`${name}.png`),new Uint8Array(await img.arrayBuffer()));
}
const xlsx=await SpreadsheetFile.exportXlsx(wb);await xlsx.save(path.join(out,'ALFA-CRM-i-prowizje.xlsx'));
await fs.writeFile(path.join(out,'verification.json'),JSON.stringify({tests,finalErrors:errors.ndjson,settingsRestored:true,realCustomers:0},null,2));
console.log(JSON.stringify({output:path.join(out,'ALFA-CRM-i-prowizje.xlsx'),tests:tests.length,errors:errors.ndjson}));
