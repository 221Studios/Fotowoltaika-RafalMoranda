import fs from 'node:fs/promises';
import path from 'node:path';
import {Workbook, SpreadsheetFile} from '@oai/artifact-tool';

const root = 'C:/Users/Nikodem/Projekty/Fotowoltaika-RafalMoranda';
const out = path.join(root,'outputs/01a1bcba-095e-7e72-a503-31f197f23d1b');
const reports = path.join(root,'dokumenty/raporty');
const actions = JSON.parse(await fs.readFile(path.join(reports,'materialy/usprawnienia-alfa-4-6.json'),'utf8'));
const measurements = JSON.parse(await fs.readFile(path.join(reports,'materialy/pagespeed/wyniki-30-pomiarow-mobile.json'),'utf8'));
const comparisonMD = await fs.readFile(path.join(reports,'zadanie-4-5-tabela-porownawcza-2026-11-08.md'),'utf8');
const clean = s=>s.trim().replaceAll('\\|','|').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replaceAll('`','').replaceAll('**','');
const matrix=comparisonMD.split(/\r?\n/).filter(s=>s.startsWith('|')).map(s=>s.split(/(?<!\\)\|/).slice(1,-1).map(clean)).filter(r=>r.length===8&&r[0]!=='Kryterium'&&!/^-+$/.test(r[0]));
const wb=Workbook.create();
const a=wb.worksheets.add('10 usprawnień');
const c=wb.worksheets.add('Porównanie');
const p=wb.worksheets.add('PSI mobile');
const colors={ink:'#172D3A',header:'#263F4D',light:'#F2F5F6',accent:'#A64132',alfa:'#EAF2EF',muted:'#52636E',amber:'#FFF3D6'};
function base(s,cols,rows,widths){
 s.showGridLines=false;s.tabColor=colors.header;
 const r=s.getRangeByIndexes(0,0,rows,cols);
 r.format.font={name:'Arial',size:10,color:colors.ink};r.format.verticalAlignment='top';r.format.wrapText=true;
 widths.forEach((w,i)=>s.getRangeByIndexes(0,i,rows,1).format.columnWidthPx=w);
 s.getRangeByIndexes(0,0,rows,cols).format.rowHeight=24;
 s.freezePanes.freezeRows(6);s.freezePanes.freezeColumns(1);
}
function title(s,text,last){s.getRange('A2').values=[[text]];s.getRange('A2').format.font={size:15,bold:true,color:colors.ink};s.getRange(`A2:${last}2`).format.rowHeight=28;s.getRange(`A2:${last}2`).format.wrapText=false;s.getRange(`A2:${last}2`).format.borders={bottom:{style:'thin',color:colors.accent}};}
function header(s,row,values){const r=s.getRangeByIndexes(row-1,0,1,values.length);r.values=[values];r.format.fill=colors.header;r.format.font={name:'Arial',size:10,bold:true,color:'#FFFFFF'};r.format.horizontalAlignment='center';r.format.verticalAlignment='center';r.format.rowHeight=36;}
function fittedRows(s,start,rows,widths,min=44){rows.forEach((r,i)=>{const lines=Math.max(...r.map((v,j)=>String(v??'').split('\n').reduce((n,x)=>n+Math.max(1,Math.ceil(x.length/Math.max(5,Math.floor(widths[j]/6.1)))),0)));s.getRangeByIndexes(start+i-1,0,1,r.length).format.rowHeightPx=Math.max(min,lines*15+14);if(i%2===1)s.getRangeByIndexes(start+i-1,0,1,r.length).format.fill=colors.light;});}

const aw=[52,260,310,115,145,340,230,340,165,95];
base(a,10,21,aw);title(a,'ALFA — 10 usprawnień po analizie konkurencji','J');
a.getRange('B3').values=[['Stan źródeł']];a.getRange('C3').values=[[new Date('2026-11-08T00:00:00Z')]];a.getRange('C3').setNumberFormat('yyyy-mm-dd');
a.getRange('B4').values=[['Kolejność ekspercka. Wpływ przewidywany, bez prognozy wzrostu. Pomiar z pozycji 10 uruchomić razem z kontaktem z pozycji 3–4.']];a.getRange('B4:J4').format.wrapText=false;
header(a,6,['Nr','Usprawnienie','Uzasadnienie','Widoczność','Zapytania','Zakres pracy','Zależność','Warunek wykonania','Status do aktualizacji','Źródła']);
const ar=actions.map(x=>[x.rank,x.action,x.reason,x.visibility,x.leads,x.scope,x.dependency,x.acceptance,x.status,x.source]);
a.getRange('A7:J16').values=ar;fittedRows(a,7,ar,aw,80);
a.getRange('A7:A16').format.font={bold:true,color:colors.accent};
a.getRange('I7:I16').dataValidation={rule:{type:'list',values:['Do wykonania','Do zaplanowania','Do sprawdzenia','Do uzgodnienia','Do zmierzenia','Oczekuje na Rafała','Można przygotować roboczo','Częściowo do przygotowania','Oczekuje na dostęp','Do uzgodnienia przed publikacją','W trakcie','Wykonane']}};
a.getRange('I7:I16').conditionalFormats.add('containsText',{text:'Oczekuje',format:{fill:colors.amber}});
a.getRange('B19').values=[['Źródła S1–S5 i zastrzeżenia są obok danych w arkuszu Porównanie. Status można edytować; warunki wykonania nie zmieniają się automatycznie.']];a.getRange('B19:J19').format.wrapText=false;

const cw=[230,255,290,240,250,250,250,250];
base(c,8,matrix.length+24,cw);title(c,'ALFA i pięciu konkurentów — porównanie','H');
c.getRange('A3').values=[['Stan źródeł: 2026-11-08. Stara ALFA = obserwacje historyczne; projekt = odczyt kodu, bez potwierdzenia wdrożenia.']];c.getRange('A3:H3').format.wrapText=false;
c.getRange('A4').values=[['Puste pole = brak potwierdzenia. Google organiczne i Mapy są osobne. Oceny firmy są wspólne dla obu wersji ALFA.']];c.getRange('A4:H4').format.wrapText=false;
header(c,6,['Kryterium','ALFA — stara strona','ALFA — aktualny projekt','G-PRO','3DSmart','Aurelum','PROWABLE','Ekosolary']);
c.getRangeByIndexes(6,0,matrix.length,8).values=matrix;fittedRows(c,7,matrix,cw,65);
c.getRangeByIndexes(6,1,matrix.length,2).format.fill=colors.alfa;
const summaryIndexes=Object.fromEntries(measurements.summaries.map((x,i)=>[x.site,41+i]));
for(const [label,suffix,col,fmt] of [['PSI mobile — mediana home','home','E','0'],['PSI mobile — mediana podstrony PV','pv','E','0'],['Laboratoryjne LCP — mediana home','home','H','0.000" s"']]){
 const ix=matrix.findIndex(r=>r[0].includes(label));if(ix<0)throw new Error('Missing comparison row '+label);
 c.getRangeByIndexes(ix+6,0,1,1).values=[[label+(col==='E'?' (0–100)':'')]];
 ['gpro','3dsmart','aurelum','prowable','ekosolary'].forEach((slug,j)=>{const cell=c.getRangeByIndexes(ix+6,j+3,1,1);cell.formulas=[[`='PSI mobile'!${col}${summaryIndexes[slug+'-'+suffix]}`]];cell.setNumberFormat(fmt);});
}
const sr=matrix.length+10;
header(c,sr,['Kod','Źródło / zakres','Data odczytu','Adres źródła','Dodatkowy adres','Uwagi','','']);
const sources=[
 ['S1','Audyt Profilu Firmy ALFA i kontaktu',new Date('2026-11-08'),'https://www.google.com/maps/search/?api=1&query=ALFA+Rafa%C5%82+Mora%C5%84da','https://www.moranda.com.pl/','Kontakt starej strony potwierdzony zrzutem użytkownika. HTTPS zwracał błąd.','',''],
 ['S2','Strony, formularze, mobile i pojedynczy odczyt Google',new Date('2026-11-08'),'https://www.google.com/search?q=fotowoltaika+Kalisz&pws=0','https://g-pro.com.pl/','Pozycje dotyczą jednego widoku; lokalizacja urządzenia niepotwierdzona.','',''],
 ['S2','Oficjalne strony instalatorów',new Date('2026-11-08'),'https://3dsmart.pl/','https://www.aurelum.pl/','Podstrony dobrane w analizie 4.2.','',''],
 ['S2','Oficjalne strony instalatorów',new Date('2026-11-08'),'https://www.prowable.pl/','https://ekosolary.pl/','Część podstron PROWABLE zwróciła 429 w pobraniu HTML.','',''],
 ['S3','Title, meta, H1/H2, canonical i linki',new Date('2026-11-08'),'https://g-pro.com.pl/','https://3dsmart.pl/','Odczyt HTML pięciu stron. Brak H1 3DSmart sprawdzony też w DOM.','',''],
 ['S4','30 raportów PSI mobile',new Date('2026-11-08'),'https://pagespeed.web.dev/','https://developers.google.com/speed/docs/insights/v5/about','Dane i linki każdej próby są w arkuszu PSI mobile. CrUX oddzielnie.','',''],
 ['S5','Aktualny projekt ALFA — odczyt repozytorium',new Date('2026-11-08'),'https://github.com/221Studios/Fotowoltaika-RafalMoranda','','27 realizacji; 4 Kalisz; 15 pytań FAQ. Kod nie potwierdza produkcji, prawdziwości deklaracji ani skutecznego kontaktu.','','']
];
c.getRangeByIndexes(sr,0,sources.length,8).values=sources;c.getRangeByIndexes(sr,2,sources.length,1).setNumberFormat('yyyy-mm-dd');fittedRows(c,sr+1,sources,cw,65);

const pw=[165,70,260,115,90,100,100,100,90,100,320,90];base(p,12,56,pw);title(p,'PageSpeed Insights — 30 prób mobile','L');
p.getRange('A3').values=[['2026-11-08, 22:12–22:18 CET. Lighthouse 13.6.0, Moto G Power, ograniczona sieć 4G. Każdy raport ma osobny identyfikator.']];p.getRange('A3:L3').format.wrapText=false;
p.getRange('A4').values=[['CrUX: 3DSmart origin zaliczone (LCP 2,3 s / INP 190 ms / CLS 0); PROWABLE origin niezaliczone (3,4 s / brak INP / 0,01). Inne: brak danych.']];p.getRange('A4:L4').format.wrapText=false;
header(p,6,['Strona','Próba','Data','Czas CET','Wynik 0–100','FCP ms','LCP ms','TBT ms','CLS','SI ms','Raport PSI','CrUX']);
const pr=measurements.runs.map(r=>[r.site,r.run,new Date('2026-11-08'),r.time_CET,r.score,r.fcp_ms,r.lcp_ms,r.tbt_ms,r.cls,r.si_ms,r.report_url,r.no_crux?'Brak danych':'Origin']);
p.getRange('A7:L36').values=pr;fittedRows(p,7,pr,pw,43);p.getRange('C7:C36').setNumberFormat('yyyy-mm-dd');p.getRange('I7:I36').setNumberFormat('0.000');p.getRange('E7:H36').setNumberFormat('0');p.getRange('J7:J36').setNumberFormat('0');
p.tables.add('A6:L36',true,'PomiaryPSI');
header(p,40,['Firma','Typ','Adres URL','Liczba prób','Mediana','Minimum','Maksimum','LCP mediana\n(s)','CLS\nmediana']);
measurements.summaries.forEach((s,i)=>{const row=41+i;const first=7+i*3,last=first+2;p.getRange(`A${row}:I${row}`).values=[[s.company,s.kind==='glowna'?'Główna':'PV',s.url,null,null,null,null,null,null]];p.getRange(`D${row}:I${row}`).formulas=[[`=COUNT(E${first}:E${last})`,`=MEDIAN(E${first}:E${last})`,`=MIN(E${first}:E${last})`,`=MAX(E${first}:E${last})`,`=MEDIAN(G${first}:G${last})/1000`,`=MEDIAN(I${first}:I${last})`]];p.getRange(`A${row}:I${row}`).format.rowHeightPx=58;if(i%2===1)p.getRange(`A${row}:I${row}`).format.fill=colors.light;});
p.getRange('H41:I50').setNumberFormat('0.000');

p.getRange('E7').values=[[99]];
const changedMedian=(await wb.inspect({kind:'table',range:'PSI mobile!E41',include:'values',tableMaxRows:1,tableMaxCols:1,maxChars:300})).ndjson;
if(!changedMedian.includes('80'))throw new Error('Median did not react to changed source: '+changedMedian);
p.getRange('E7').values=[[measurements.runs[0].score]];
wb.recalculate();
const inspected=await wb.inspect({kind:'table',range:'PSI mobile!D40:I50',include:'values,formulas',tableMaxRows:11,tableMaxCols:6,maxChars:2200});console.log(inspected.ndjson);
const errorScan=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},summary:'Final formula scan'});console.log(errorScan.ndjson);
await fs.mkdir(out,{recursive:true});
for(const [name,sheetName,range] of [['usprawnienia','10 usprawnień','A2:E10'],['usprawnienia-zakres','10 usprawnień','F6:J10'],['porownanie','Porównanie','A2:D12'],['porownanie-konkurenci','Porównanie','E6:H12'],['psi','PSI mobile','A40:I50']]){
 const img=await wb.render({sheetName,range,scale:1,format:'png'});await fs.writeFile(path.join(out,`${name}.png`),new Uint8Array(await img.arrayBuffer()));
}
const xlsx=await SpreadsheetFile.exportXlsx(wb);await xlsx.save(path.join(out,'ALFA-analiza-konkurencji-i-10-usprawnien.xlsx'));
await fs.writeFile(path.join(out,'verification.json'),JSON.stringify({actions:actions.length,comparisonRows:matrix.length,runs:pr.length,summaries:measurements.summaries.length,inputChangeTest:changedMedian,restored:true,summaryInspect:inspected.ndjson,errorScan:errorScan.ndjson},null,2));
console.log('EXPORTED '+path.join(out,'ALFA-analiza-konkurencji-i-10-usprawnien.xlsx'));
