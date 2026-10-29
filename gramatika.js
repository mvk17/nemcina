/* Gramatika – osnova podle rozsahu Goethe-Zertifikat A1 → A2 → B1
   Cvičení:
   ["c", zadání, [správně, špatně, ...], česky, proč]      výběr
   ["o", věta, česky, [jiné správné pořadí]]               slož větu
   ["t", zadání, odpověď, česky, proč, [jiné správné]]     napiš
*/
window.GRAM_LEVELS = [
  {n:1, t:"Kostra věty", cefr:"A1", sub:"Postavíš jednoduchou větu, otázku a zápor."},
  {n:2, t:"Mluvit o tom, co bylo", cefr:"A2", sub:"Minulost, pády s předložkami, souvětí, zdvořilost."},
  {n:3, t:"Mluvit jako profík", cefr:"B1", sub:"Celý rozsah zkoušky Goethe B1."},
  {n:4, t:"Bonus", cefr:"B2", sub:"Navíc. Není podmínkou pro 100 %.", bonus:true}
];
window.GRAM = [];
function G(o){ window.GRAM.push(o); }

/* =========================== ÚROVEŇ 1 – A1 =========================== */
G({id:"v2", l:1, t:"Sloveso na 2. místě",
 why:"Nejdůležitější pravidlo němčiny. Když ho porušíš, zní to hned cize.",
 rule:["V oznamovací větě je <b>určité sloveso vždy na 2. místě</b>. Počítají se větné členy, ne slova: <i>Am Montag</i> je jeden člen.",
       "Začneš-li větu něčím jiným než podmětem (časem, místem, předmětem), <b>podmět jde hned za sloveso</b> (inverze)."],
 tab:{h:["1. místo","2. místo","zbytek"],r:[["Wir","liefern","morgen die Tore."],["Morgen","liefern","wir die Tore."],["Die Tore","liefern","wir morgen."]]},
 ex:[["Heute schicke ich das Angebot.","Dnes pošlu nabídku."],["Leider ist das Tor zu schwer.","Bohužel je branka moc těžká."]],
 trap:"Česky „Zítra my dodáme“. Německy nikdy <s>Morgen wir liefern</s>, vždy <b>Morgen liefern wir</b>.",
 items:[
  ["c","Morgen ___ die Tore.",["liefern wir","wir liefern","liefern"],"Zítra dodáme branky.","Začínáš časem → sloveso na 2. místě, podmět až za ním."],
  ["o","Heute schicke ich das Angebot.","Dnes pošlu nabídku.",["Ich schicke heute das Angebot."]],
  ["c","Která věta je správně?",["Am Montag kommt der Techniker.","Am Montag der Techniker kommt.","Am Montag kommt Techniker der."],"V pondělí přijde technik.","„Am Montag“ je 1. člen, sloveso „kommt“ musí být hned za ním."],
  ["o","Die Rechnung bekommen Sie per E-Mail.","Fakturu dostanete e-mailem.",["Sie bekommen die Rechnung per E-Mail."]],
  ["t","In Dresden ___ ich einen Termin. (haben)","habe","V Drážďanech mám schůzku.","Sloveso na 2. místě, ich → habe."],
  ["c","Jetzt ___ keine Zeit.",["habe ich","ich habe","hat ich"],"Teď nemám čas.","„Jetzt“ zabírá 1. místo → habe ich."],
  ["o","Nach dem Training trinken wir Wasser.","Po tréninku pijeme vodu.",["Wir trinken nach dem Training Wasser."]],
  ["c","Která věta je správně?",["Leider ist das Tor zu schwer.","Leider das Tor ist zu schwer.","Leider ist zu schwer das Tor."],"Bohužel je branka moc těžká.","„Leider“ je 1. člen, sloveso jde hned za něj."],
  ["t","Die Netze ___ wir aus Deutschland. (bekommen)","bekommen","Sítě dostáváme z Německa.","Předmět na začátku → sloveso 2., podmět wir za ním."],
  ["o","Am Freitag spielen die Kinder Fußball.","V pátek hrají děti fotbal.",["Die Kinder spielen am Freitag Fußball."]]
 ]});

G({id:"fragen", l:1, t:"Otázky a „doch“",
 why:"Bez otázek nezavoláš zákazníkovi ani technikovi.",
 rule:["<b>Otázka s tázacím slovem:</b> tázací slovo – sloveso – podmět. <i>Wann kommt die Lieferung?</i>",
       "<b>Otázka ano/ne:</b> sloveso jde na 1. místo. <i>Kommt die Lieferung heute?</i>",
       "Na <b>zápornou</b> otázku odpovídáš kladně slovem <b>doch</b> (ale ano)."],
 tab:{h:["slovo","význam"],r:[["wer / wen / wem","kdo / koho / komu"],["was","co"],["wo / wohin / woher","kde / kam / odkud"],["wann","kdy"],["wie / wie viel / wie lange","jak / kolik / jak dlouho"],["warum","proč"]]},
 ex:[["Wie viel kostet das Tor?","Kolik stojí branka?"],["Haben Sie keine Zeit? – Doch!","Nemáte čas? – Ale ano!"]],
 trap:"Česky stačí intonace („Technik přijde dnes?“). Německy musí sloveso dopředu: <b>Kommt</b> der Techniker heute?",
 items:[
  ["c","___ kommt die Lieferung?",["Wann","Wer","Was"],"Kdy přijde dodávka?",""],
  ["o","Wie viel kostet das Tor?","Kolik stojí branka?"],
  ["o","Haben Sie das Angebot bekommen?","Dostal jste nabídku?"],
  ["c","Která otázka je správně?",["Kommt der Techniker heute?","Der Techniker heute kommt?","Heute der Techniker kommt?"],"Přijde technik dnes?","Otázka ano/ne → sloveso na 1. místo."],
  ["c","„Kommen Sie nicht mit?“ – „___, ich komme mit!“",["Doch","Ja","Nein"],"Nepůjdete s námi? – Ale ano, půjdu!","Kladná odpověď na zápornou otázku = doch."],
  ["t","___ wohnen Sie? – In Dresden.","Wo","Kde bydlíte? – V Drážďanech.",""],
  ["o","Wo liegt die Baustelle?","Kde je stavba?"],
  ["c","„Haben Sie keine Zeit?“ – „___, ich habe Zeit.“",["Doch","Ja","Nein"],"Nemáte čas? – Ale ano, mám.","Na zápornou otázku kladně → doch."],
  ["c","___ ist zuständig? – Herr Weber.",["Wer","Wen","Was"],"Kdo to má na starosti? – Pan Weber.","Ptáš se na podmět (osobu) → wer."],
  ["t","___ ___ dauert die Montage? – Zwei Tage. (jak dlouho)","Wie lange","Jak dlouho trvá montáž? – Dva dny.",""],
  ["o","Brauchen Sie auch Netze?","Potřebujete také sítě?"]
 ]});

G({id:"praes", l:1, t:"Časování v přítomném čase",
 why:"Každé sloveso v každé větě. Musí to jet automaticky.",
 rule:["Ke kmeni (infinitiv bez -en) přidáš koncovku podle osoby.",
       "Kmen končí na <b>-t / -d</b> → vkládá se <b>-e-</b>: du arbeit<b>e</b>st, er arbeit<b>e</b>t.",
       "<b>Sie</b> (vykání) má stejný tvar jako infinitiv: <i>Sie machen</i>."],
 tab:{h:["osoba","koncovka","machen","arbeiten"],r:[["ich","-e","mache","arbeite"],["du","-st","machst","arbeitest"],["er/sie/es","-t","macht","arbeitet"],["wir","-en","machen","arbeiten"],["ihr","-t","macht","arbeitet"],["sie / Sie","-en","machen","arbeiten"]]},
 ex:[["Ich arbeite bei EUROGREEN.","Pracuji v EUROGREEN."],["Wir liefern am Montag.","Dodáváme v pondělí."]],
 trap:"<b>er</b> a <b>ihr</b> mají stejnou koncovku -t: <i>er macht, ihr macht</i>.",
 items:[
  ["c","Ich ___ bei EUROGREEN. (arbeiten)",["arbeite","arbeitet","arbeiten"],"Pracuji v EUROGREEN.","ich → -e."],
  ["c","Du ___ sehr gut. (spielen)",["spielst","spielt","spiele"],"Hraješ velmi dobře.","du → -st."],
  ["t","Er ___ das Angebot. (machen)","macht","Dělá tu nabídku.","er → -t."],
  ["t","Wir ___ am Montag. (liefern)","liefern","Dodáváme v pondělí.","wir → -en (u liefern jen -n)."],
  ["c","___ Sie das Tor? (kaufen)",["Kaufen","Kauft","Kaufst"],"Kupujete tu branku?","Sie = infinitiv."],
  ["t","Er ___ heute bis 17 Uhr. (arbeiten)","arbeitet","Dnes pracuje do 17 hodin.","Kmen na -t → vložené -e-: arbeitet."],
  ["c","Ihr ___ zu viel. (reden)",["redet","redt","redest"],"Mluvíte moc.","Kmen na -d → ihr redet."],
  ["t","Die Kinder ___ Fußball. (spielen)","spielen","Děti hrají fotbal.","sie (oni) → -en."],
  ["o","Wir suchen einen Lieferanten.","Hledáme dodavatele."],
  ["c","Wie lange ___ du schon? (warten)",["wartest","wartst","wartet"],"Jak dlouho už čekáš?","Kmen na -t → du wartest."]
 ]});

G({id:"sein", l:1, t:"sein, haben, werden",
 why:"Tři nejčastější slovesa. Potřebuješ je i pro minulý čas.",
 rule:["Všechna tři jsou nepravidelná, tvary se učíš nazpaměť.",
       "<b>werden</b> = stát se / začít být: <i>Es wird kalt.</i> (Ochlazuje se.) Později z něj uděláš budoucí čas a trpný rod."],
 tab:{h:["","sein","haben","werden"],r:[["ich","bin","habe","werde"],["du","bist","hast","wirst"],["er/sie/es","ist","hat","wird"],["wir","sind","haben","werden"],["ihr","seid","habt","werdet"],["sie / Sie","sind","haben","werden"]]},
 ex:[["Wir haben ein Problem.","Máme problém."],["Die Tore sind schon da.","Branky už jsou tady."]],
 trap:"Pozor: ihr <b>seid</b> (jste) vs. <b>seit</b> (od, předložka) – stejně se vyslovují.",
 items:[
  ["c","Ich ___ müde.",["bin","habe","ist"],"Jsem unavený.",""],
  ["c","Wir ___ ein Problem.",["haben","sind","hat"],"Máme problém.",""],
  ["t","Du ___ schnell. (sein)","bist","Jsi rychlý.",""],
  ["t","Er ___ keine Zeit. (haben)","hat","Nemá čas.",""],
  ["c","___ Sie aus Tschechien?",["Sind","Haben","Seid"],"Jste z Česka?",""],
  ["t","Ihr ___ zu spät. (sein)","seid","Jdete pozdě.",""],
  ["c","Es ___ kalt. (ochlazuje se)",["wird","werdet","wirst"],"Ochlazuje se.","werden = začít být, er/sie/es → wird."],
  ["t","___ du einen Moment? (haben)","Hast","Máš chvilku?",""],
  ["c","Mein Sohn ___ Fußballer.",["wird","werdet","wirst"],"Můj syn bude fotbalista.","werden = stát se."],
  ["o","Die Tore sind schon da.","Branky už jsou tady."]
 ]});

G({id:"unreg", l:1, t:"Nepravidelná slovesa (e→i, a→ä)",
 why:"Nejčastější slovesa (fahren, geben, nehmen, sehen…) mění samohlásku.",
 rule:["Změna je <b>jen u du a er/sie/es</b>. Ostatní osoby jsou pravidelné.",
       "Typy: <b>e → i</b> (geben → gibt), <b>e → ie</b> (sehen → sieht), <b>a → ä</b> (fahren → fährt), <b>au → äu</b> (laufen → läuft)."],
 tab:{h:["infinitiv","du","er/sie/es"],r:[["fahren","fährst","fährt"],["geben","gibst","gibt"],["nehmen","nimmst","nimmt"],["sehen","siehst","sieht"],["sprechen","sprichst","spricht"],["laufen","läufst","läuft"],["wissen","weißt","weiß (i ich weiß)"]]},
 ex:[["Er fährt nach Dresden.","Jede do Drážďan."],["Der Techniker hilft uns.","Technik nám pomáhá."]],
 trap:"<b>wir nehmen</b>, ne <s>wir nimmen</s>. Změna je jen u du a er.",
 items:[
  ["t","Er ___ nach Dresden. (fahren)","fährt","Jede do Drážďan.","a → ä u er."],
  ["c","Du ___ gut Deutsch. (sprechen)",["sprichst","sprechst","spricht"],"Mluvíš dobře německy.","e → i u du."],
  ["t","Sie (ona) ___ das Angebot. (lesen)","liest","Čte tu nabídku.","e → ie: liest."],
  ["c","Er ___ uns Rabatt. (geben)",["gibt","gebt","gibst"],"Dává nám slevu.",""],
  ["t","___ du das Tor? (sehen)","Siehst","Vidíš tu branku?",""],
  ["c","Wir ___ den Lieferwagen. (nehmen)",["nehmen","nimmen","nimmt"],"Vezmeme dodávku.","U wir se samohláska nemění."],
  ["t","Er ___ jeden Tag 10 km. (laufen)","läuft","Běhá každý den 10 km.","au → äu."],
  ["c","Das ___ ich nicht. (wissen)",["weiß","wisse","weißt"],"To nevím.","wissen: ich weiß, du weißt, er weiß."],
  ["t","Der Techniker ___ uns. (helfen)","hilft","Technik nám pomáhá.",""],
  ["c","Was ___ du? (essen)",["isst","esst","ist"],"Co jíš?","essen → du isst."]
 ]});

G({id:"genus", l:1, t:"Rod: der, die, das",
 why:"Bez správného členu nepostavíš pád ani koncovku přídavného jména.",
 rule:["Rod často poznáš podle konce slova:",
       "<b>die</b>: -ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ei, většina slov na -e",
       "<b>der</b>: osoby a přístroje na -er, dny, měsíce, roční období, -ling, -ismus",
       "<b>das</b>: -chen, -lein, -ment, -um, většina cizích slov na -ing (das Training)",
       "<b>Složeniny</b> mají rod podle <b>posledního</b> slova: das Fußball<b>tor</b>."],
 ex:[["die Lieferung, die Mannschaft, die Information","dodávka, družstvo, informace"],["der Trainer, der Montag · das Dokument","trenér, pondělí · dokument"]],
 trap:"Rod se často liší od češtiny: <b>das</b> Tor (ta branka), <b>der</b> Ball, <b>die</b> Halle. Slovíčka se učíš vždy se členem.",
 items:[
  ["c","___ Lieferung",["die","der","das"],"dodávka","-ung = vždy die."],
  ["c","___ Mannschaft",["die","der","das"],"družstvo","-schaft = die."],
  ["c","___ Training",["das","der","die"],"trénink","Cizí slova na -ing bývají das."],
  ["c","___ Häuschen",["das","die","der"],"domeček","-chen = vždy das."],
  ["c","___ Montag",["der","die","das"],"pondělí","Dny v týdnu = der."],
  ["c","___ Fußballtor",["das","der","die"],"fotbalová branka","Složenina → rod podle posledního slova: das Tor."],
  ["c","___ Sicherheit",["die","der","das"],"bezpečnost","-heit = die."],
  ["c","___ Trainer",["der","die","das"],"trenér","Osoba na -er = der."],
  ["c","___ Dokument",["das","der","die"],"dokument","-ment = das."],
  ["c","___ Information",["die","der","das"],"informace","-ion = die."],
  ["c","___ Kunstrasen",["der","die","das"],"umělý trávník","Složenina: der Rasen."],
  ["t","Napiš člen: ___ Gemeinde","die","obec","Většina slov na -e je die."]
 ]});

G({id:"plural", l:1, t:"Množné číslo",
 why:"Branky, sítě, faktury – v práci mluvíš skoro vždy o víc kusech.",
 rule:["V množném čísle je člen <b>vždy die</b>.",
       "Pět typů koncovek:",
       "<b>-e</b> (často s přehláskou): der Tag → Tage, der Zaun → Zäune",
       "<b>-(e)n</b>: skoro všechna ženská slova: die Lieferung → Lieferungen",
       "<b>-er</b> + přehláska: das Kind → Kinder, das Haus → Häuser",
       "<b>beze změny</b> (-er, -el, -en): der Trainer → Trainer",
       "<b>-s</b>: cizí slova a slova na samohlásku: das Auto → Autos"],
 ex:[["das Tor → die Tore","branka → branky"],["die Rechnung → die Rechnungen","faktura → faktury"]],
 trap:"Množné číslo se učíš u každého podstatného jména zvlášť, pravidla jen pomáhají odhadnout.",
 items:[
  ["c","das Tor → die ___",["Tore","Toren","Tors"],"branky",""],
  ["c","der Zaun → die ___",["Zäune","Zaune","Zauns"],"ploty","-e s přehláskou."],
  ["t","die Lieferung → die ___","Lieferungen","dodávky","Ženský rod → -en."],
  ["c","der Ball → die ___",["Bälle","Balle","Ballen"],"míče",""],
  ["c","das Netz → die ___",["Netze","Netzen","Netzer"],"sítě",""],
  ["t","der Trainer → die ___","Trainer","trenéři","Slova na -er zůstávají beze změny."],
  ["c","das Auto → die ___",["Autos","Autoen","Auter"],"auta","Na samohlásku → -s."],
  ["c","das Kind → die ___",["Kinder","Kinde","Kindes"],"děti",""],
  ["t","die Rechnung → die ___","Rechnungen","faktury",""],
  ["c","Člen v množném čísle: ___ Tore",["die","der","das"],"ty branky","Množné číslo = vždy die."],
  ["c","der Platz → die ___",["Plätze","Platze","Platzen"],"hřiště / místa",""]
 ]});

G({id:"negation", l:1, t:"Zápor: nicht, nebo kein",
 why:"Odmítnout, říct že něco není skladem nebo nejde – denně.",
 rule:["<b>kein</b> = zápor podstatného jména, které by mělo <b>ein</b> nebo žádný člen: ein Tor → <b>kein</b> Tor, Zeit → <b>keine</b> Zeit.",
       "<b>nicht</b> = všechno ostatní: sloveso, přídavné jméno, podstatné jméno s <b>der/die/das</b>.",
       "<b>kein</b> se skloňuje jako ein: keinen Termin, keine Netze."],
 ex:[["Ich habe keine Zeit.","Nemám čas."],["Das Angebot ist noch nicht fertig.","Nabídka ještě není hotová."]],
 trap:"Česky všude „ne“. Německy <s>Ich habe nicht Zeit</s> → <b>Ich habe keine Zeit</b>.",
 items:[
  ["c","Ich habe ___ Zeit.",["keine","nicht","kein"],"Nemám čas.","Podstatné jméno bez členu → keine."],
  ["c","Das Tor ist ___ schwer.",["nicht","kein","keine"],"Branka není těžká.","Přídavné jméno → nicht."],
  ["c","Wir haben ___ Termin.",["keinen","nicht","kein"],"Nemáme termín.","der Termin ve 4. pádě → keinen."],
  ["c","Ich verstehe ___.",["nicht","kein","keine"],"Nerozumím.","Sloveso → nicht."],
  ["t","Das ist ___ Problem.","kein","To není problém.","das Problem → kein."],
  ["c","Der Techniker kommt heute ___.",["nicht","kein","keinen"],"Technik dnes nepřijde.",""],
  ["c","Wir brauchen ___ Netze.",["keine","nicht","keinen"],"Nepotřebujeme sítě.","Množné číslo → keine."],
  ["o","Das Angebot ist noch nicht fertig.","Nabídka ještě není hotová."],
  ["t","Wir haben leider ___ Ersatzteile auf Lager.","keine","Bohužel nemáme náhradní díly skladem.",""],
  ["c","Která věta je správně?",["Ich habe kein Auto.","Ich habe nicht Auto.","Ich habe nicht ein Auto."],"Nemám auto.",""]
 ]});

G({id:"akk", l:1, t:"4. pád (Akkusativ)",
 why:"Předmět skoro každé věty: objednat, potřebovat, mít, poslat co.",
 rule:["4. pád = <b>koho, co</b>. Je po slovesech jako haben, brauchen, bestellen, kaufen, suchen, sehen a po <b>es gibt</b>.",
       "<b>Mění se jen mužský rod</b>: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>.",
       "die, das a množné číslo zůstávají stejné."],
 tab:{h:["","1. pád","4. pád"],r:[["mužský","der / ein","den / einen"],["ženský","die / eine","die / eine"],["střední","das / ein","das / ein"],["množné","die / –","die / –"]]},
 ex:[["Wir brauchen einen Zaun.","Potřebujeme plot."],["Ich bestelle das Netz.","Objednám tu síť."]],
 trap:"Čeština pád pozná podle koncovky slova. Němčina podle <b>členu</b>: der Zaun → den Zaun.",
 items:[
  ["c","Wir brauchen ___ Zaun.",["einen","ein","einem"],"Potřebujeme plot.","der Zaun → einen."],
  ["c","Ich bestelle ___ Netz.",["das","den","dem"],"Objednám tu síť.","Střední rod se nemění."],
  ["c","Haben Sie ___ Katalog?",["einen","ein","eine"],"Máte katalog?","der Katalog → einen."],
  ["t","Ich sehe ___ Lieferwagen. (der)","den","Vidím tu dodávku.","der → den."],
  ["c","Wir suchen ___ Trainer für die U8.",["einen","ein","einem"],"Hledáme trenéra pro U8.",""],
  ["t","Es gibt ___ Problem mit der Lieferung. (ein)","ein","Je problém s dodávkou.","das Problem – střední rod se nemění."],
  ["c","Ich brauche ___ Rechnung.",["die","den","der"],"Potřebuji tu fakturu.","Ženský rod se nemění."],
  ["o","Der Kunde bestellt einen Basketballkorb.","Zákazník objednává basketbalový koš."],
  ["c","Která věta je správně?",["Ich habe einen Termin.","Ich habe ein Termin.","Ich habe einem Termin."],"Mám schůzku.","der Termin → einen."],
  ["t","Wir haben ___ Ersatzteil auf Lager. (kein, das Ersatzteil)","kein","Nemáme náhradní díl skladem.",""]
 ]});

G({id:"trennbar", l:1, t:"Odlučitelná slovesa",
 why:"anrufen, abholen, vorbeikommen – telefon a logistika stojí na nich.",
 rule:["Předpona <b>an-, ab-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, vorbei-</b> se odtrhne a jde <b>na konec věty</b>.",
       "<i>anrufen</i> → Ich <b>rufe</b> Sie morgen <b>an</b>.",
       "<b>be-, ver-, er-, ent-, emp-, ge-, zer-</b> se nikdy neodtrhují: bestellen, verkaufen, erklären."],
 tab:{h:["infinitiv","věta"],r:[["anrufen","Ich rufe Sie an."],["abholen","Wir holen die Ware ab."],["mitkommen","Kommst du mit?"],["ausfüllen","Füllen Sie das Formular aus."],["bestellen","Ich bestelle das Netz. (neodlučitelné)"]]},
 ex:[["Ich rufe Sie morgen an.","Zavolám vám zítra."],["Der Techniker kommt morgen vorbei.","Technik zítra přijede."]],
 trap:"Konec věty si hlídej. Dokud nedoposloucháš, nevíš, co to sloveso znamená: Ich rufe… <b>an</b> (volám) / <b>zurück</b> (volám zpět).",
 items:[
  ["o","Ich rufe Sie morgen an.","Zavolám vám zítra.",["Morgen rufe ich Sie an."]],
  ["c","Která věta je správně?",["Wir holen die Ware am Montag ab.","Wir abholen die Ware am Montag.","Wir holen ab die Ware am Montag."],"Zboží vyzvedneme v pondělí.","Předpona ab- jde na konec."],
  ["t","Der Techniker kommt morgen ___. (vorbeikommen)","vorbei","Technik zítra přijede.",""],
  ["o","Wann fängt das Training an?","Kdy začíná trénink?"],
  ["c","Které sloveso je odlučitelné?",["anrufen","bestellen","verkaufen"],"","be- a ver- se neodtrhují."],
  ["t","Wir ___ das alte Tor ab. (abbauen)","bauen","Starou branku demontujeme.",""],
  ["c","Která věta je správně?",["Ich bestelle die Netze heute.","Ich stelle die Netze heute be.","Ich bestelle heute die Netze be."],"Sítě objednám dnes.","be- se neodtrhuje."],
  ["o","Der Bus fährt um sieben Uhr ab.","Autobus odjíždí v sedm."],
  ["t","Ich fülle das Formular ___. (ausfüllen)","aus","Vyplním formulář.",""],
  ["c","Kommst du ___? (mitkommen)",["mit","an","zu"],"Jdeš s námi?",""]
 ]});

G({id:"modal", l:1, t:"Způsobová slovesa",
 why:"Můžeme, musíme, chceme, smíme – srdce každého obchodního hovoru.",
 rule:["Způsobové sloveso je na <b>2. místě</b>, druhé sloveso v <b>infinitivu na konci</b> (větný rám).",
       "<b>ich</b> a <b>er/sie/es</b> mají stejný tvar a bez koncovky: ich kann, er kann.",
       "<b>nicht dürfen</b> = nesmět. <b>nicht müssen</b> = nemuset. <b>sollen</b> = mít (pokyn od někoho)."],
 tab:{h:["","können","müssen","wollen","dürfen","sollen","möchten"],r:[["ich","kann","muss","will","darf","soll","möchte"],["du","kannst","musst","willst","darfst","sollst","möchtest"],["er/sie/es","kann","muss","will","darf","soll","möchte"],["wir/sie/Sie","können","müssen","wollen","dürfen","sollen","möchten"],["ihr","könnt","müsst","wollt","dürft","sollt","möchtet"]]},
 ex:[["Wir können am Montag liefern.","Můžeme dodat v pondělí."],["Sie müssen das nicht bezahlen.","Nemusíte to platit."]],
 trap:"<b>Sie müssen nicht</b> = nemusíte (ne „nesmíte“). Nesmíte = <b>Sie dürfen nicht</b>.",
 items:[
  ["o","Wir können am Montag liefern.","Můžeme dodat v pondělí.",["Am Montag können wir liefern."]],
  ["c","Ich ___ heute länger arbeiten.",["muss","musst","müssen"],"Dnes musím pracovat déle.","ich → muss (bez koncovky)."],
  ["c","Která věta je správně?",["Ich möchte ein Angebot bekommen.","Ich möchte bekommen ein Angebot.","Ich möchte ein Angebot bekomme."],"Chtěl bych dostat nabídku.","Infinitiv na konec."],
  ["t","___ ich Sie kurz stören? (dürfen)","Darf","Smím vás na chvilku vyrušit?",""],
  ["c","Hier ___ man nicht parken. (tady se nesmí parkovat)",["darf","muss","soll"],"Tady se nesmí parkovat.","nesmět = nicht dürfen."],
  ["c","Sie ___ das nicht bezahlen, es ist kostenlos. (nemusíte)",["müssen","dürfen","sollen"],"Nemusíte to platit, je to zdarma.","nemuset = nicht müssen."],
  ["t","Er ___ morgen anrufen. (sollen)","soll","Má zítra zavolat.",""],
  ["t","Die Kinder ___ Fußball spielen. (wollen)","wollen","Děti chtějí hrát fotbal.",""],
  ["o","Können Sie mir bitte helfen?","Můžete mi prosím pomoct?"],
  ["c","Du ___ das Tor nicht allein tragen.",["kannst","kann","könnt"],"Tu branku sám neuneseš.","du → kannst."],
  ["o","Wir müssen die Maße prüfen.","Musíme zkontrolovat rozměry.",["Die Maße müssen wir prüfen."]]
 ]});

G({id:"imperativ", l:1, t:"Rozkazovací způsob",
 why:"Pokyny pro techniky, děti na tréninku a zdvořilé prosby v e-mailu.",
 rule:["<b>Sie</b>: sloveso + Sie: <i>Schicken Sie mir bitte das Angebot.</i>",
       "<b>du</b>: kmen bez -st: <i>Komm! Mach! Warte!</i> Změna e→i zůstává (<i>Gib! Nimm!</i>), přehláska a→ä mizí (<i>Fahr!</i>).",
       "<b>ihr</b>: tvar jako v přítomném čase bez ihr: <i>Kommt! Lauft!</i>",
       "sein: <b>Seien Sie</b> … / <b>Sei</b> …! · <b>bitte</b> dělá z rozkazu prosbu."],
 ex:[["Rufen Sie mich bitte zurück.","Zavolejte mi prosím zpátky."],["Kinder, lauft schneller!","Děti, běžte rychleji!"]],
 trap:"<s>Fähr langsam!</s> → <b>Fahr langsam!</b> Přehláska v rozkazu u du nezůstává.",
 items:[
  ["c","___ Sie mir bitte das Angebot!",["Schicken","Schickt","Schick"],"Pošlete mi prosím nabídku!","Sie-forma = infinitiv + Sie."],
  ["c","du-forma od kommen: ___!",["Komm","Kommst","Kommen"],"Pojď!",""],
  ["t","___ mir bitte den Ball! (geben, du)","Gib","Dej mi prosím míč!","e → i zůstává: gib."],
  ["o","Rufen Sie mich bitte zurück.","Zavolejte mi prosím zpátky."],
  ["c","Kinder, ___ schneller! (laufen, ihr)",["lauft","läuft","laufst"],"Děti, běžte rychleji!","ihr lauft – bez přehlásky."],
  ["t","___ Sie bitte pünktlich! (sein)","Seien","Buďte prosím přesní!",""],
  ["c","du-forma od fahren: ___ langsam!",["Fahr","Fähr","Fährst"],"Jeď pomalu!","Přehláska u du v rozkazu mizí."],
  ["t","___ Sie das Formular aus! (ausfüllen)","Füllen","Vyplňte formulář!",""],
  ["o","Warten Sie bitte einen Moment.","Počkejte prosím chvilku."],
  ["c","Pass ___! (dávej pozor)",["auf","an","ab"],"Dávej pozor!","aufpassen."]
 ]});

/* =========================== ÚROVEŇ 2 – A2 =========================== */
G({id:"perf_haben", l:2, t:"Perfektum s haben",
 why:"V mluvené řeči se o minulosti mluví skoro vždy perfektem.",
 rule:["<b>haben</b> na 2. místě + <b>příčestí</b> na konci věty.",
       "Pravidelná slovesa: <b>ge-…-t</b>: machen → gemacht, arbeiten → gearbeitet.",
       "Nepravidelná: <b>ge-…-en</b>, často se změnou samohlásky: schreiben → geschrieben, finden → gefunden.",
       "Odlučitelná: <b>ge</b> doprostřed: anrufen → an<b>ge</b>rufen, abholen → ab<b>ge</b>holt.",
       "<b>Bez ge-</b>: předpony be-, ver-, er-, ent- (bestellt, verkauft) a slovesa na -ieren (repariert)."],
 tab:{h:["infinitiv","příčestí"],r:[["liefern","geliefert"],["lesen","gelesen"],["sprechen","gesprochen"],["nehmen","genommen"],["anrufen","angerufen"],["bestellen","bestellt"],["verstehen","verstanden"],["telefonieren","telefoniert"]]},
 ex:[["Ich habe das Angebot geschickt.","Poslal jsem nabídku."],["Er hat mich gestern angerufen.","Včera mi volal."]],
 trap:"Příčestí patří úplně na konec: <s>Ich habe geschickt das Angebot</s> → Ich habe das Angebot <b>geschickt</b>.",
 items:[
  ["o","Ich habe das Angebot geschickt.","Poslal jsem nabídku.",["Das Angebot habe ich geschickt."]],
  ["c","Wir haben die Tore ___. (liefern)",["geliefert","geliefern","gelieft"],"Dodali jsme branky.","Pravidelné: ge-…-t."],
  ["t","Er hat mich gestern ___. (anrufen)","angerufen","Včera mi volal.","Odlučitelné: ge doprostřed, nepravidelné -en."],
  ["c","Ich habe die Netze ___. (bestellen)",["bestellt","gebestellt","bestellen"],"Objednal jsem sítě.","be- → bez ge-."],
  ["t","Der Techniker hat das Tor ___. (reparieren)","repariert","Technik opravil branku.","-ieren → bez ge-."],
  ["c","Haben Sie meine E-Mail ___? (lesen)",["gelesen","gelest","geliest"],"Četl jste můj e-mail?",""],
  ["c","Která věta je správně?",["Wir haben gestern lange gearbeitet.","Wir haben gearbeitet gestern lange.","Wir gearbeitet haben gestern lange."],"Včera jsme dlouho pracovali.","Příčestí na konec."],
  ["t","Ich habe das Problem nicht ___. (verstehen)","verstanden","Nepochopil jsem ten problém.",""],
  ["c","Wir haben die Ware am Montag ___. (abholen)",["abgeholt","geabholt","abgeholen"],"Zboží jsme vyzvedli v pondělí.",""],
  ["t","Was hast du am Wochenende ___? (machen)","gemacht","Co jsi dělal o víkendu?",""],
  ["o","Haben Sie die Rechnung bekommen?","Dostal jste fakturu?"]
 ]});

G({id:"perf_sein", l:2, t:"Perfektum se sein",
 why:"Jel jsem, přijel, zůstal, stalo se – tady se místo haben používá sein.",
 rule:["<b>sein</b> + příčestí u sloves <b>pohybu z místa na místo</b>: fahren, gehen, kommen, fliegen, laufen.",
       "…a u <b>změny stavu</b>: aufstehen, einschlafen, werden, passieren, ankommen.",
       "Plus <b>sein</b> a <b>bleiben</b>: ich bin gewesen, ich bin geblieben.",
       "Všechno ostatní má <b>haben</b> (i warten, arbeiten, spielen)."],
 ex:[["Ich bin nach Dresden gefahren.","Jel jsem do Drážďan."],["Was ist passiert?","Co se stalo?"]],
 trap:"<s>Ich habe gefahren</s> → Ich <b>bin</b> gefahren. A pozor: warten není pohyb → Ich <b>habe</b> gewartet.",
 items:[
  ["c","Ich ___ nach Dresden gefahren.",["bin","habe","war"],"Jel jsem do Drážďan.","Pohyb → sein."],
  ["c","Der Techniker ___ pünktlich gekommen.",["ist","hat","sind"],"Technik přišel včas.",""],
  ["c","Wir ___ lange gewartet.",["haben","sind","ist"],"Dlouho jsme čekali.","warten není pohyb → haben."],
  ["t","Was ___ passiert?","ist","Co se stalo?","passieren = změna stavu → sein."],
  ["c","Er ___ um 6 Uhr aufgestanden.",["ist","hat","war"],"Vstal v 6 hodin.",""],
  ["t","Die Lieferung ___ gestern angekommen.","ist","Dodávka včera dorazila.",""],
  ["c","Wir ___ 10 km gelaufen.",["sind","haben","hat"],"Uběhli jsme 10 km.",""],
  ["o","Ich bin zu Hause geblieben.","Zůstal jsem doma."],
  ["c","Die Kinder ___ viel gespielt.",["haben","sind","ist"],"Děti hodně hrály.","spielen → haben."],
  ["t","___ Sie mit dem Auto gekommen?","Sind","Přijel jste autem?",""],
  ["c","Es ___ kalt geworden.",["ist","hat","wird"],"Ochladilo se.","werden → sein."]
 ]});

G({id:"praet_basis", l:2, t:"Préteritum: war, hatte, konnte…",
 why:"U sein, haben a způsobových sloves se i v řeči používá préteritum, ne perfektum.",
 rule:["Místo <i>ich bin gewesen</i> řekneš <b>ich war</b>. Místo <i>ich habe gehabt</i> řekneš <b>ich hatte</b>.",
       "Způsobová slovesa: <b>-te</b> a bez přehlásky: können → konnte, müssen → musste, dürfen → durfte.",
       "ich a er/sie/es mají stejný tvar bez koncovky: ich war, er war."],
 tab:{h:["","sein","haben","können","müssen","wollen"],r:[["ich / er","war","hatte","konnte","musste","wollte"],["du","warst","hattest","konntest","musstest","wolltest"],["wir / sie / Sie","waren","hatten","konnten","mussten","wollten"],["ihr","wart","hattet","konntet","musstet","wolltet"]]},
 ex:[["Gestern war ich krank.","Včera jsem byl nemocný."],["Ich konnte nicht kommen.","Nemohl jsem přijít."]],
 trap:"<b>konnte</b> (mohl) × <b>könnte</b> (mohl by). Přehláska mění význam.",
 items:[
  ["c","Gestern ___ ich krank.",["war","bin","hatte"],"Včera jsem byl nemocný.",""],
  ["c","Wir ___ ein Problem mit der Lieferung.",["hatten","waren","hattet"],"Měli jsme problém s dodávkou.",""],
  ["t","Ich ___ nicht kommen. (können)","konnte","Nemohl jsem přijít.","können → konnte (bez přehlásky)."],
  ["t","Er ___ länger arbeiten. (müssen)","musste","Musel pracovat déle.",""],
  ["c","___ du gestern im Büro?",["Warst","Wart","Waren"],"Byl jsi včera v kanceláři?",""],
  ["c","Die Kinder ___ Fußball spielen. (chtěly)",["wollten","wollen","wolltet"],"Děti chtěly hrát fotbal.",""],
  ["t","Wie ___ das Training? (sein)","war","Jaký byl trénink?",""],
  ["c","Wir ___ dort nicht parken. (nesměli)",["durften","dürften","durfen"],"Nesměli jsme tam parkovat.",""],
  ["o","Ich hatte keine Zeit.","Neměl jsem čas."],
  ["c","Sie ___ mich doch anrufen! (měl jste)",["sollten","solltet","sollen"],"Měl jste mi přece zavolat!",""]
 ]});

G({id:"dativ", l:2, t:"3. pád (Dativ)",
 why:"Komu posíláš, komu pomáháš, komu to patří – a hlavně po předložkách.",
 rule:["3. pád = <b>komu, čemu</b>.",
       "der → <b>dem</b>, die → <b>der</b>, das → <b>dem</b>, množné → <b>den + -n</b> (den Kindern).",
       "Slovesa s 3. pádem: helfen, danken, gehören, gefallen, antworten, passen.",
       "Dva předměty: <b>komu (3.) + co (4.)</b>: Ich schicke <b>dem Kunden</b> <b>das Angebot</b>."],
 tab:{h:["","1. pád","3. pád"],r:[["mužský","der / ein","dem / einem"],["ženský","die / eine","der / einer"],["střední","das / ein","dem / einem"],["množné","die","den …-n"]]},
 ex:[["Ich schicke dem Kunden das Angebot.","Pošlu zákazníkovi nabídku."],["Das Tor gehört der Schule.","Branka patří škole."]],
 trap:"Ženský rod: die → <b>der</b>. Stejné jako člen der u mužského, ale jiný pád.",
 items:[
  ["c","Ich schicke ___ Kunden das Angebot.",["dem","den","der"],"Pošlu zákazníkovi nabídku.","Komu? → 3. pád dem."],
  ["c","Das Tor gehört ___ Schule.",["der","die","dem"],"Branka patří škole.","die Schule → 3. pád der."],
  ["t","Wir danken ___ Trainer. (der)","dem","Děkujeme trenérovi.",""],
  ["c","Ich helfe ___ Kindern.",["den","die","dem"],"Pomáhám dětem.","Množné číslo → den + -n."],
  ["c","Die Farbe gefällt ___ Bürgermeister.",["dem","den","der"],"Barva se starostovi líbí.",""],
  ["t","Zeigen Sie ___ Techniker die Baustelle. (der)","dem","Ukažte technikovi stavbu.",""],
  ["c","Er gibt ___ Mannschaft neue Trikots.",["der","die","dem"],"Dává družstvu nové dresy.",""],
  ["o","Ich schicke der Gemeinde die Rechnung.","Pošlu obci fakturu.",["Die Rechnung schicke ich der Gemeinde."]],
  ["c","Ich antworte ___ Kundin morgen.",["der","die","dem"],"Odpovím zákaznici zítra.","antworten + 3. pád."],
  ["t","Wir bringen ___ Spielern Wasser. (die, mn. č.)","den","Neseme hráčům vodu.",""]
 ]});

G({id:"praep_dat", l:2, t:"Předložky se 3. pádem",
 why:"mit, bei, nach, von, zu – nejčastější předložky vůbec.",
 rule:["Po těchto předložkách je <b>vždy 3. pád</b>: <b>aus, bei, mit, nach, seit, von, zu</b> (+ gegenüber).",
       "Stažené tvary: zu dem = <b>zum</b>, zu der = <b>zur</b>, bei dem = <b>beim</b>, von dem = <b>vom</b>.",
       "<b>nach</b> + města a země bez členu (nach Dresden). <b>zu</b> + osoby a místa (zum Arzt)."],
 ex:[["Ich fahre mit dem Lieferwagen.","Jedu dodávkou."],["Ich arbeite bei EUROGREEN.","Pracuji v EUROGREEN."]],
 trap:"Česky „s“ + 7. pád, „u“ + 2. pád. Německy <b>mit</b> i <b>bei</b> vždy 3. pád.",
 items:[
  ["c","Ich fahre mit ___ Lieferwagen.",["dem","den","der"],"Jedu dodávkou.","mit + 3. pád."],
  ["c","Wir kommen ___ Tschechien.",["aus","von","nach"],"Jsme z Česka.","Odkud (země) → aus."],
  ["c","Ich arbeite ___ EUROGREEN.",["bei","mit","zu"],"Pracuji v EUROGREEN.","U firmy → bei."],
  ["t","Ich gehe ___ Arzt. (zu + dem)","zum","Jdu k lékaři.",""],
  ["c","___ drei Wochen warten wir auf die Ware.",["Seit","Vor","Ab"],"Už tři týdny čekáme na zboží.","Trvá dodnes → seit."],
  ["t","Die Kinder fahren ___ Schule. (zu + der)","zur","Děti jedou do školy.",""],
  ["c","Nach ___ Training gehen wir essen.",["dem","das","den"],"Po tréninku jdeme jíst.",""],
  ["o","Ich komme gerade von der Baustelle.","Jdu právě ze stavby."],
  ["c","Der Brief ist ___ Herrn Müller.",["von","aus","bei"],"Ten dopis je od pana Müllera.",""],
  ["c","Wir fahren morgen ___ Dresden.",["nach","zu","in"],"Zítra jedeme do Drážďan.","Město bez členu → nach."],
  ["t","Ich bin heute ___ Kunden. (bei + dem)","beim","Dnes jsem u zákazníka.",""]
 ]});

G({id:"praep_akk", l:2, t:"Předložky se 4. pádem",
 why:"für, ohne, bis, um – nabídky, ceny a termíny.",
 rule:["Po těchto předložkách je <b>vždy 4. pád</b>: <b>durch, für, gegen, ohne, um, bis</b> (+ entlang).",
       "Mění se jen mužský rod: für <b>den</b> Verein, ohne <b>einen</b> Rabatt."],
 ex:[["Das Angebot ist für den Verein.","Nabídka je pro klub."],["Wir brauchen das Tor bis Freitag.","Branku potřebujeme do pátku."]],
 trap:"Česky „pro“ + 4. pád sedí. Ale „bez“ má česky 2. pád, německy <b>ohne + 4. pád</b>.",
 items:[
  ["c","Das Angebot ist für ___ Verein.",["den","dem","der"],"Nabídka je pro klub.","für + 4. pád."],
  ["c","Wir liefern ohne ___ Montage.",["die","der","den"],"Dodáme bez montáže.","Ženský rod se ve 4. pádě nemění."],
  ["t","Das Training beginnt ___ 17 Uhr.","um","Trénink začíná v 17 hodin.",""],
  ["c","Wir spielen gegen ___ FC Dresden.",["den","dem","der"],"Hrajeme proti FC Drážďany.",""],
  ["t","Ich habe ein Geschenk für ___ Sohn. (mein)","meinen","Mám dárek pro syna.",""],
  ["c","Wir fahren durch ___ Stadt.",["die","der","den"],"Jedeme přes město.",""],
  ["c","Wir brauchen das Tor ___ Freitag.",["bis","um","seit"],"Branku potřebujeme do pátku.",""],
  ["o","Ohne den Rabatt ist es zu teuer.","Bez slevy je to moc drahé."],
  ["c","Danke für ___ Hilfe!",["Ihre","Ihrer","Ihren"],"Děkuji za vaši pomoc!",""],
  ["t","Die Kinder laufen ___ den Platz. (kolem)","um","Děti běhají kolem hřiště.",""]
 ]});

G({id:"wechsel", l:2, t:"Kde? × Kam? (in, auf, an…)",
 why:"Kam to postavit, kde to leží – na stavbě i ve skladu.",
 rule:["Předložky <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b> mají dva pády:",
       "<b>Wo?</b> (kde, místo) → <b>3. pád</b>: Das Tor steht auf <b>dem</b> Platz.",
       "<b>Wohin?</b> (kam, směr) → <b>4. pád</b>: Stellen Sie das Tor auf <b>den</b> Platz.",
       "Dvojice sloves: stellen → stehen, legen → liegen, hängen (kam) → hängen (kde).",
       "Stažené: in dem = <b>im</b>, in das = <b>ins</b>, an dem = <b>am</b>, an das = <b>ans</b>."],
 ex:[["Die Netze liegen im Lager.","Sítě leží ve skladu."],["Bringen Sie die Bälle ins Lager.","Doneste míče do skladu."]],
 trap:"Stejně jako česky „na hřišti“ (6.) × „na hřiště“ (4.). Ptej se kde/kam a máš pád.",
 items:[
  ["c","Das Tor steht auf ___ Platz.",["dem","den","das"],"Branka stojí na hřišti.","Wo? → 3. pád."],
  ["c","Stellen Sie das Tor auf ___ Platz.",["den","dem","der"],"Postavte branku na hřiště.","Wohin? → 4. pád."],
  ["t","Die Netze liegen ___ Lager. (in + dem)","im","Sítě leží ve skladu.",""],
  ["t","Bringen Sie die Bälle ___ Lager. (in + das)","ins","Doneste míče do skladu.",""],
  ["c","Ich hänge das Netz an ___ Tor.",["das","dem","den"],"Věším síť na branku.","Kam? → 4. pád."],
  ["c","Das Netz hängt an ___ Tor.",["dem","das","den"],"Síť visí na brance.","Kde? → 3. pád."],
  ["c","Wir treffen uns ___ Eingang.",["am","ans","an"],"Sejdeme se u vchodu.","Kde? an + dem = am."],
  ["o","Der Lieferwagen steht vor dem Haus.","Dodávka stojí před domem."],
  ["c","Fahren Sie bitte hinter ___ Halle.",["die","der","den"],"Zajeďte prosím za halu.","Kam? → 4. pád."],
  ["c","Der Ball liegt unter ___ Bank.",["der","die","dem"],"Míč leží pod lavičkou.","Kde? → 3. pád, die Bank → der."],
  ["t","Ich fahre morgen ___ die Schweiz. (do)","in","Zítra jedu do Švýcarska.","Země se členem → in + 4. pád."]
 ]});

G({id:"pronomen", l:2, t:"Mi, mě, vám, vás: zájmena v pádech",
 why:"Zavolám vám, pošlu vám to, pomůžete mi – každý hovor.",
 rule:["Osobní zájmena mají tvar pro 4. pád (koho) a 3. pád (komu).",
       "Zdvořilé <b>Sie</b>: 4. pád <b>Sie</b>, 3. pád <b>Ihnen</b>."],
 tab:{h:["1. pád","4. pád","3. pád"],r:[["ich","mich","mir"],["du","dich","dir"],["er","ihn","ihm"],["sie","sie","ihr"],["es","es","ihm"],["wir","uns","uns"],["ihr","euch","euch"],["sie / Sie","sie / Sie","ihnen / Ihnen"]]},
 ex:[["Können Sie mir helfen?","Můžete mi pomoct?"],["Ich rufe Sie morgen an.","Zavolám vám zítra."]],
 trap:"<b>anrufen</b> má 4. pád: Ich rufe <b>Sie</b> an (česky „vám“). <b>helfen</b> má 3. pád: Ich helfe <b>Ihnen</b>.",
 items:[
  ["c","Können Sie ___ helfen? (mně)",["mir","mich","ich"],"Můžete mi pomoct?","helfen + 3. pád."],
  ["c","Ich rufe ___ morgen an. (vám)",["Sie","Ihnen","Ihr"],"Zavolám vám zítra.","anrufen + 4. pád (česky 3.)."],
  ["c","Ich danke ___ für die Hilfe. (vám)",["Ihnen","Sie","Ihr"],"Děkuji vám za pomoc.","danken + 3. pád."],
  ["t","Der Trainer? Ich kenne ___ gut.","ihn","Trenéra? Znám ho dobře.","er → 4. pád ihn."],
  ["t","Die Kundin hat angerufen. Ich schicke ___ das Angebot.","ihr","Zákaznice volala. Pošlu jí nabídku.","sie → 3. pád ihr."],
  ["c","Wie geht es ___? (tobě)",["dir","dich","du"],"Jak se máš?",""],
  ["c","Das Tor gefällt ___. (nám)",["uns","wir","euch"],"Branka se nám líbí.",""],
  ["t","Die Kinder warten. Ich bringe ___ Wasser.","ihnen","Děti čekají. Donesu jim vodu.",""],
  ["o","Ich schicke es Ihnen heute.","Pošlu vám to dnes.",["Heute schicke ich es Ihnen."]],
  ["c","Hast du ___ verstanden? (mě)",["mich","mir","ich"],"Rozuměl jsi mi?","verstehen + 4. pád."]
 ]});

G({id:"possessiv", l:2, t:"Můj, váš, náš: přivlastňovací zájmena",
 why:"Vaše objednávka, naše nabídka, jeho telefon.",
 rule:["<b>mein</b> (můj), <b>dein</b> (tvůj), <b>sein</b> (jeho), <b>ihr</b> (její / jejich), <b>unser</b> (náš), <b>euer</b> (váš – vy dva), <b>Ihr</b> (Váš – vykání).",
       "Koncovky jako <b>ein / kein</b>: mein Sohn, meine Firma, meinen Termin (4.), meinem Kunden (3.), meine Kinder."],
 ex:[["Haben Sie unsere Rechnung bekommen?","Dostal jste naši fakturu?"],["Herr Weber und seine Frau","pan Weber a jeho žena"]],
 trap:"Česky „svůj“ pro všechny osoby. Německy podle majitele: Er nimmt <b>sein</b> Auto, sie nimmt <b>ihr</b> Auto.",
 items:[
  ["c","Das ist ___ Firma. (naše)",["unsere","unser","unseren"],"To je naše firma.",""],
  ["c","Herr Weber und ___ Frau kommen. (jeho)",["seine","ihre","sein"],"Pan Weber a jeho žena přijdou.",""],
  ["c","Frau Bauer und ___ Sohn spielen Fußball. (její)",["ihr","sein","ihre"],"Paní Bauerová a její syn hrají fotbal.","der Sohn → ihr."],
  ["t","Haben Sie ___ Rechnung bekommen? (naši)","unsere","Dostal jste naši fakturu?",""],
  ["c","Wie ist ___ Telefonnummer? (Vaše)",["Ihre","Ihr","Ihren"],"Jaké je vaše telefonní číslo?",""],
  ["c","Ich suche ___ Schlüssel. (můj, der)",["meinen","mein","meinem"],"Hledám svůj klíč.","4. pád mužský → meinen."],
  ["t","Ich spreche mit ___ Chef. (mein, 3. pád)","meinem","Mluvím se svým šéfem.",""],
  ["c","Die Kinder und ___ Eltern sind da. (jejich)",["ihre","seine","ihr"],"Děti a jejich rodiče jsou tady.",""],
  ["o","Wann ist Ihr Termin?","Kdy máte termín?"],
  ["t","Wir danken ___ Kunden. (náš, 3. pád mn. č.)","unseren","Děkujeme našim zákazníkům.",""]
 ]});

G({id:"zeit", l:2, t:"Časové údaje: am, um, im, vor, seit",
 why:"Termíny dodávek a schůzek. Tady se chybuje nejčastěji.",
 rule:["<b>am</b> + den, denní doba, datum: am Montag, am Morgen, am 5. Mai",
       "<b>um</b> + hodina: um 8 Uhr · <b>im</b> + měsíc, roční období: im Mai, im Winter",
       "<b>in</b> + doba = <b>za</b>: in zwei Wochen · <b>vor</b> + 3. pád = <b>před</b>: vor einer Woche",
       "<b>seit</b> = od (a trvá dodnes) · <b>ab</b> = od (dál do budoucna) · <b>bis</b> = do · von … bis",
       "Hodiny: <b>halb drei</b> = 2:30, Viertel nach drei = 3:15, Viertel vor drei = 2:45"],
 ex:[["Wir liefern am Montag um 8 Uhr.","Dodáme v pondělí v 8 hodin."],["Wir sind in zwei Wochen fertig.","Za dva týdny budeme hotoví."]],
 trap:"„Za dva týdny“ = <b>in</b> zwei Wochen, ne <s>nach zwei Wochen</s>.",
 items:[
  ["c","Wir liefern ___ Montag.",["am","im","um"],"Dodáme v pondělí.","Den → am."],
  ["c","Das Training beginnt ___ 17 Uhr.",["um","am","im"],"Trénink začíná v 17 hodin.","Hodina → um."],
  ["c","Die Montage ist ___ Mai.",["im","am","um"],"Montáž je v květnu.","Měsíc → im."],
  ["t","Wir sind ___ zwei Wochen fertig. (za)","in","Za dva týdny budeme hotoví.",""],
  ["c","Ich habe ___ einer Woche angerufen. (před)",["vor","seit","in"],"Volal jsem před týdnem.",""],
  ["c","Ich warte ___ Montag auf die Ware. (od pondělí a pořád)",["seit","ab","vor"],"Od pondělí čekám na zboží.",""],
  ["t","Das Angebot gilt ___ Ende Dezember. (do)","bis","Nabídka platí do konce prosince.",""],
  ["c","„halb drei“ znamená:",["2:30","3:30","3:00"],"půl třetí",""],
  ["o","Wir arbeiten von acht bis fünf.","Pracujeme od osmi do pěti."],
  ["c","Der neue Preis gilt ___ Januar. (od ledna dál)",["ab","seit","vor"],"Nová cena platí od ledna.",""],
  ["c","___ Wochenende spielen die Kinder.",["Am","Im","Um"],"O víkendu hrají děti.",""]
 ]});

G({id:"konj_haupt", l:2, t:"und, aber, oder, denn, sondern",
 why:"Spojíš dvě věty a nemusíš měnit slovosled.",
 rule:["<b>und, aber, oder, denn, sondern</b> stojí „na nultém místě“. Za nimi pokračuje normální věta se slovesem na 2. místě.",
       "<b>denn</b> = protože (slovosled se nemění, na rozdíl od weil).",
       "<b>sondern</b> = ale, po záporu: nicht teuer, <b>sondern</b> günstig."],
 ex:[["Ich komme heute nicht, denn ich bin krank.","Dnes nepřijdu, protože jsem nemocný."],["Wir brauchen kein Netz, sondern einen Zaun.","Nepotřebujeme síť, ale plot."]],
 trap:"<b>aber</b> × <b>sondern</b>: sondern jen tehdy, když první část popíráš a druhou ji nahrazuješ.",
 items:[
  ["c","Ich komme heute nicht, ___ ich bin krank.",["denn","weil","dass"],"Dnes nepřijdu, protože jsem nemocný.","Za čárkou je „ich bin“ → normální slovosled → denn."],
  ["c","Das ist nicht teuer, ___ günstig.",["sondern","aber","oder"],"To není drahé, ale levné.","Po záporu s nahrazením → sondern."],
  ["o","Wir liefern morgen, aber der Techniker kommt erst am Freitag.","Dodáme zítra, ale technik přijde až v pátek."],
  ["c","Která věta je správně?",["Ich bleibe zu Hause, denn ich bin müde.","Ich bleibe zu Hause, denn bin ich müde.","Ich bleibe zu Hause, denn ich müde bin."],"Zůstanu doma, protože jsem unavený.",""],
  ["t","Möchten Sie das Tor mit ___ ohne Netz? (nebo)","oder","Chcete branku se sítí, nebo bez?",""],
  ["c","Das Tor ist gut, ___ zu teuer.",["aber","sondern","denn"],"Branka je dobrá, ale moc drahá.","Nepopíráš, jen přidáváš výhradu → aber."],
  ["c","Wir brauchen kein Netz, ___ einen Zaun.",["sondern","aber","oder"],"Nepotřebujeme síť, ale plot.",""],
  ["t","Ich trainiere die Kinder ___ spiele selbst Fußball. (a)","und","Trénuji děti a sám hraju fotbal.",""],
  ["o","Er ruft nicht an, denn er hat keine Zeit.","Nevolá, protože nemá čas."],
  ["c","Spielen wir heute ___ morgen?",["oder","und","aber"],"Hrajeme dnes, nebo zítra?",""]
 ]});

G({id:"nebensatz", l:2, t:"dass, weil, wenn: sloveso na konec",
 why:"Bez vedlejších vět mluvíš jako robot. Tohle je skok z A1 na A2.",
 rule:["Ve vedlejší větě (za <b>dass, weil, wenn, ob, obwohl…</b>) jde určité sloveso <b>na konec</b>.",
       "Odlučitelné sloveso se spojí: …, dass er morgen <b>anruft</b>.",
       "Se způsobovým slovesem nebo v perfektu jde na konec pomocné sloveso: …, weil ich das bestellt <b>habe</b>.",
       "Když vedlejší věta stojí <b>první</b>, hlavní věta začíná <b>slovesem</b>: Wenn du Zeit hast, <b>komm</b> vorbei."],
 ex:[["Ich weiß, dass die Lieferung morgen kommt.","Vím, že dodávka přijde zítra."],["Wenn das Wetter gut ist, trainieren wir draußen.","Když je hezky, trénujeme venku."]],
 trap:"<b>weil</b> × <b>denn</b>: obojí „protože“, ale po weil sloveso na konec, po denn ne.",
 items:[
  ["o","Ich weiß, dass die Lieferung morgen kommt.","Vím, že dodávka přijde zítra."],
  ["c","Která věta je správně?",["Ich komme nicht, weil ich krank bin.","Ich komme nicht, weil ich bin krank.","Ich komme nicht, weil bin ich krank."],"Nepřijdu, protože jsem nemocný.","weil → sloveso na konec."],
  ["t","Wenn Sie Fragen ___, rufen Sie mich an. (haben)","haben","Když budete mít otázky, zavolejte mi.",""],
  ["c","Která věta je správně?",["Ich hoffe, dass Sie morgen kommen können.","Ich hoffe, dass Sie können morgen kommen.","Ich hoffe, dass Sie morgen können kommen."],"Doufám, že můžete zítra přijít.","Způsobové sloveso úplně na konec."],
  ["o","Wir liefern später, weil der Hersteller Probleme hat.","Dodáme později, protože výrobce má problémy."],
  ["c","Wenn das Wetter gut ist, ___ draußen.",["trainieren wir","wir trainieren","trainieren"],"Když je hezky, trénujeme venku.","Vedlejší věta je 1. člen → hlavní věta začíná slovesem."],
  ["t","Er sagt, dass er morgen ___. (anrufen)","anruft","Říká, že zítra zavolá.","Ve vedlejší větě se odlučitelné sloveso spojí."],
  ["c","Ich glaube, ___ das Netz zu klein ist.",["dass","weil","wenn"],"Myslím, že ta síť je moc malá.",""],
  ["c","Která věta je správně?",["Ich bin müde, weil ich viel gearbeitet habe.","Ich bin müde, weil ich habe viel gearbeitet.","Ich bin müde, weil ich viel habe gearbeitet."],"Jsem unavený, protože jsem hodně pracoval.","Pomocné sloveso na úplný konec."],
  ["t","___ ich Zeit habe, gehe ich laufen. (když)","Wenn","Když mám čas, jdu běhat.",""]
 ]});

G({id:"komparativ", l:2, t:"Stupňování a srovnání",
 why:"Lepší, levnější, vyšší než… – obchodní argumenty.",
 rule:["2. stupeň: <b>-er</b> + <b>als</b> (než): leichter als, billiger als.",
       "3. stupeň: <b>am -sten</b>: am billigsten, am schnellsten.",
       "Stejně: <b>so … wie</b>: so gut wie.",
       "Krátká slova často dostanou přehlásku: groß → größer, alt → älter, warm → wärmer, hoch → höher.",
       "Nepravidelné: <b>gut – besser – am besten</b>, <b>viel – mehr – am meisten</b>, <b>gern – lieber – am liebsten</b>."],
 ex:[["Das Aluminiumtor ist leichter als das Stahltor.","Hliníková branka je lehčí než ocelová."],["Unser Preis ist so gut wie der Preis der Konkurrenz.","Naše cena je stejně dobrá jako u konkurence."]],
 trap:"<b>als</b> = než, <b>wie</b> = jako. <s>größer wie</s> je hovorová chyba.",
 items:[
  ["c","Das Tor ist ___ als das alte. (větší)",["größer","großer","mehr groß"],"Branka je větší než ta stará.",""],
  ["c","Das Aluminiumtor ist leichter ___ das Stahltor.",["als","wie","dann"],"Hliníková branka je lehčí než ocelová.","než = als."],
  ["c","Unser Preis ist so gut ___ der Preis der Konkurrenz.",["wie","als","so"],"Naše cena je stejně dobrá jako u konkurence.","so … wie."],
  ["t","Dieses Netz ist ___ als das andere. (gut)","besser","Tahle síť je lepší než ta druhá.",""],
  ["c","Welches Tor ist am ___?",["billigsten","billiger","billigste"],"Která branka je nejlevnější?",""],
  ["t","Ich trinke ___ Wasser als Cola. (gern)","lieber","Piju radši vodu než colu.",""],
  ["c","Wir brauchen ___ Zeit. (víc)",["mehr","mehrer","vieler"],"Potřebujeme víc času.",""],
  ["o","Der Zaun ist höher als zwei Meter.","Plot je vyšší než dva metry."],
  ["c","Er läuft am ___. (nejrychleji)",["schnellsten","schneller","schnellste"],"Běhá nejrychleji.",""],
  ["t","Im Sommer ist es ___ als im Winter. (warm)","wärmer","V létě je tepleji než v zimě.",""]
 ]});

G({id:"reflexiv", l:2, t:"Zvratná slovesa (sich)",
 why:"Ozvu se, těším se, postarám se – fráze z každého e-mailu.",
 rule:["Zvratné zájmeno se mění podle osoby: ich <b>mich</b>, du <b>dich</b>, er/sie/es <b>sich</b>, wir <b>uns</b>, ihr <b>euch</b>, sie/Sie <b>sich</b>.",
       "Když je ve větě ještě jiný předmět, je zvratné zájmeno ve 3. pádě: ich wasche <b>mir</b> die Hände, kannst du <b>dir</b> das vorstellen?",
       "Časté: sich melden, sich freuen auf, sich kümmern um, sich interessieren für, sich entschuldigen, sich treffen, sich beeilen."],
 ex:[["Ich melde mich morgen.","Ozvu se zítra."],["Wir freuen uns auf das Spiel.","Těšíme se na zápas."]],
 trap:"Ne všechno, co je česky zvratné, je zvratné i německy: učit se = <b>lernen</b> (bez sich).",
 items:[
  ["c","Ich melde ___ morgen. (ozvu se)",["mich","mir","sich"],"Ozvu se zítra.",""],
  ["c","Wir freuen ___ auf das Spiel.",["uns","sich","euch"],"Těšíme se na zápas.",""],
  ["t","Er kümmert ___ um die Lieferung.","sich","Stará se o dodávku.",""],
  ["c","Interessieren Sie ___ für Kunstrasen?",["sich","Sie","Ihnen"],"Zajímáte se o umělý trávník?","Sie → sich."],
  ["c","Která věta je správně?",["Ich lerne Deutsch.","Ich lerne mich Deutsch.","Ich lerne mir Deutsch."],"Učím se německy.","lernen není zvratné."],
  ["t","Beeil ___! (du)","dich","Pospěš si!",""],
  ["o","Wir treffen uns um acht Uhr.","Sejdeme se v osm.",["Um acht Uhr treffen wir uns."]],
  ["c","Ich entschuldige ___ für die Verspätung.",["mich","mir","sich"],"Omlouvám se za zpoždění.",""],
  ["t","Kannst du ___ das vorstellen? (ty)","dir","Dokážeš si to představit?","Je tam i „das“ → zvratné zájmeno ve 3. pádě."],
  ["c","Habt ihr ___ schon angemeldet?",["euch","sich","uns"],"Už jste se přihlásili?",""]
 ]});

G({id:"konj2_hofl", l:2, t:"Zdvořile: würde, hätte, wäre, könnte",
 why:"Profesionální tón v e-mailu a po telefonu. Bez toho zníš příkře.",
 rule:["<b>Könnten Sie …?</b> (Mohl byste…?) · <b>Würden Sie …?</b> (Byl byste tak laskav…?)",
       "<b>Ich hätte gern …</b> = Chtěl bych … · <b>Wäre … möglich?</b> = Bylo by … možné?",
       "Podmínka: <b>Wenn</b> ich Zeit <b>hätte</b>, <b>würde</b> ich kommen.",
       "Rada: Sie <b>sollten</b> … = Měl byste …"],
 tab:{h:["","werden","haben","sein","können"],r:[["ich / er","würde","hätte","wäre","könnte"],["du","würdest","hättest","wärst","könntest"],["wir / sie / Sie","würden","hätten","wären","könnten"]]},
 ex:[["Könnten Sie mich bitte zurückrufen?","Mohl byste mi prosím zavolat zpátky?"],["Wäre Donnerstag möglich?","Byl by možný čtvrtek?"]],
 trap:"<b>würde</b> (by) × <b>wurde</b> (byl/stal se). Jedna tečka nad u mění celý význam.",
 items:[
  ["c","___ Sie mir bitte das Angebot schicken? (zdvořile: mohl byste)",["Könnten","Konnten","Kannst"],"Mohl byste mi prosím poslat nabídku?",""],
  ["c","Ich ___ gern zwei Netze. (chtěl bych)",["hätte","habe","würde"],"Chtěl bych dvě sítě.","Ich hätte gern … = Chtěl bych …"],
  ["t","___ Donnerstag möglich? (byl by)","Wäre","Byl by možný čtvrtek?",""],
  ["c","Wenn ich Zeit hätte, ___ ich mitkommen.",["würde","werde","wäre"],"Kdybych měl čas, šel bych s vámi.",""],
  ["t","___ Sie mir das bitte bestätigen? (werden, zdvořile)","Würden","Potvrdil byste mi to prosím?",""],
  ["o","Ich hätte eine Frage.","Měl bych otázku."],
  ["c","Das ___ super! (to by bylo)",["wäre","war","würde"],"To by bylo super!",""],
  ["c","Wenn wir mehr Geld ___, würden wir ein neues Tor kaufen.",["hätten","haben","würden"],"Kdybychom měli víc peněz, koupili bychom novou branku.",""],
  ["t","Du ___ mehr trainieren. (měl bys)","solltest","Měl bys víc trénovat.",""],
  ["o","Könnten Sie mich bitte zurückrufen?","Mohl byste mi prosím zavolat zpátky?"]
 ]});

/* =========================== ÚROVEŇ 3 – B1 =========================== */
G({id:"adj", l:3, t:"Koncovky přídavných jmen",
 why:"Nový zákazník, velká branka, s pozdravem. Bez toho to v e-mailu bije do očí.",
 rule:["<b>Pravidlo 1:</b> když člen už ukazuje rod a pád (der, die, das, dem, den, des, dieser, jeder), má přídavné jméno jen <b>-e</b> nebo <b>-en</b>.",
       "<b>-e</b> v 1. pádě jednotného čísla (všechny rody) a ve 4. pádě u die a das. <b>Všude jinde -en.</b>",
       "<b>Pravidlo 2:</b> když člen rod neukazuje (ein Tor, ein Zaun, mein Tor) nebo člen chybí, přebírá přídavné jméno „koncovku členu“: ein groß<b>er</b> Zaun (der), ein groß<b>es</b> Tor (das), kalt<b>es</b> Wasser, mit kalt<b>em</b> Wasser."],
 tab:{h:["","s der/die/das","s ein / bez členu"],r:[["der Zaun","der neue Zaun","ein neuer Zaun"],["das Tor","das neue Tor","ein neues Tor"],["die Halle","die neue Halle","eine neue Halle"],["4. p. muž.","den neuen Zaun","einen neuen Zaun"],["3. pád","dem neuen Tor","einem neuen Tor"],["množné","die neuen Tore","neue Tore"]]},
 ex:[["Wir suchen einen erfahrenen Techniker.","Hledáme zkušeného technika."],["Mit freundlichen Grüßen","S přátelským pozdravem"]],
 trap:"<b>-en</b> je nejčastější koncovka. Když si nejsi jistý a nejde o 1. pád, tipni -en.",
 items:[
  ["c","der ___ Zaun (neu)",["neue","neuen","neuer"],"ten nový plot","Člen ukazuje rod, 1. pád → -e."],
  ["c","ein ___ Zaun (neu)",["neuer","neue","neuen"],"nový plot","ein rod neukazuje → přídavné jméno přebírá -er."],
  ["c","ein ___ Tor (groß)",["großes","große","großen"],"velká branka","das → -es."],
  ["c","Wir brauchen einen ___ Zaun. (hoch)",["hohen","hoher","hohe"],"Potřebujeme vysoký plot.","4. pád mužský → -en (hoch → hoh-)."],
  ["t","Das ist eine ___ Idee. (gut)","gute","To je dobrý nápad.",""],
  ["c","mit dem ___ Lieferwagen (alt)",["alten","alte","altem"],"se starou dodávkou","3. pád → -en."],
  ["t","Ich trinke ___ Wasser. (kalt, bez členu)","kaltes","Piju studenou vodu.","Bez členu → koncovka členu das → -es."],
  ["c","die ___ Netze (neu, mn. č.)",["neuen","neue","neuer"],"ty nové sítě","Množné číslo se členem → -en."],
  ["c","Wir haben ___ Bälle. (neu, bez členu)",["neue","neuen","neuer"],"Máme nové míče.","Bez členu → koncovka die → -e."],
  ["t","Mit ___ Grüßen (freundlich)","freundlichen","S přátelským pozdravem","3. pád mn. č. bez členu → -en."],
  ["o","Wir suchen einen erfahrenen Techniker.","Hledáme zkušeného technika."],
  ["c","Sehr ___ Damen und Herren (geehrt)",["geehrte","geehrten","geehrter"],"Vážené dámy a pánové","Bez členu, 1. pád mn. č. → -e."]
 ]});

G({id:"verbpraep", l:3, t:"Slovesa s předložkou + darauf, worauf",
 why:"warten auf, sich kümmern um, sprechen über – předložka patří ke slovesu natvrdo.",
 rule:["Některá slovesa mají pevnou předložku a pád. Učíš se je jako celek:",
       "warten <b>auf</b> + 4. · sich freuen <b>auf</b> (na budoucí) / <b>über</b> (z přítomného) · denken <b>an</b> + 4. · sich kümmern <b>um</b> · sich interessieren <b>für</b> · sprechen <b>über</b> + 4. · fragen <b>nach</b> · abhängen <b>von</b> · sich beschweren <b>über</b>",
       "U věcí se předložka spojí s <b>da(r)-</b>: darauf, damit, dafür. Otázka: <b>wo(r)-</b>: Worauf warten Sie?",
       "U osob zůstává zájmeno: Ich warte <b>auf ihn</b>."],
 ex:[["Wir warten auf die Lieferung.","Čekáme na dodávku."],["Ich bin damit einverstanden.","Souhlasím s tím."]],
 trap:"Česky „čekat na“ = auf ✓, ale „ptát se na“ = fragen <b>nach</b>, „starat se o“ = sich kümmern <b>um</b>.",
 items:[
  ["c","Wir warten ___ die Lieferung.",["auf","für","an"],"Čekáme na dodávku.",""],
  ["c","Ich freue mich ___ das Wochenende. (těším se na)",["auf","über","an"],"Těším se na víkend.","Budoucí → auf."],
  ["t","Ich kümmere mich ___ die Rechnung.","um","Postarám se o fakturu.",""],
  ["c","Denken Sie ___ den Termin!",["an","auf","um"],"Myslete na termín!",""],
  ["c","„Wartest du auf die Ware?“ – „Ja, ich warte ___.“",["darauf","auf es","worauf"],"Čekáš na zboží? – Ano, čekám na něj.","Věc → da(r)- + předložka."],
  ["t","___ warten Sie? (na co)","Worauf","Na co čekáte?",""],
  ["c","Wir haben ___ Ihr Angebot gesprochen.",["über","von","auf"],"Mluvili jsme o vaší nabídce.",""],
  ["c","Er hat sich ___ den Lärm beschwert.",["über","auf","um"],"Stěžoval si na hluk.",""],
  ["t","Ich habe nach dem Preis ___. (fragen)","gefragt","Ptal jsem se na cenu.",""],
  ["c","Das hängt ___ Wetter ab.",["vom","von","am"],"To záleží na počasí.","abhängen von + 3. pád: von dem = vom."],
  ["o","Ich bin damit einverstanden.","Souhlasím s tím."]
 ]});

G({id:"konjadv", l:3, t:"deshalb, trotzdem × weil, obwohl",
 why:"Argumentace: proto, přesto, jinak. Stejný význam, jiný slovosled.",
 rule:["<b>deshalb / deswegen</b> (proto), <b>trotzdem</b> (přesto), <b>sonst</b> (jinak), <b>dann</b> (pak), <b>außerdem</b> (navíc) jsou příslovce. Zabírají 1. místo → <b>hned po nich sloveso</b>.",
       "<b>weil</b> (protože) a <b>obwohl</b> (přestože) jsou spojky → sloveso <b>na konec</b>."],
 tab:{h:["význam","sloveso hned","sloveso na konec"],r:[["proto / protože","deshalb liefern wir später","weil wir später liefern"],["přesto / přestože","trotzdem trainieren wir","obwohl es regnet"]]},
 ex:[["Der Lieferant hat Probleme, deshalb liefern wir später.","Dodavatel má problémy, proto dodáme později."],["Obwohl das Tor teuer ist, kauft die Gemeinde zwei Stück.","Přestože je branka drahá, obec koupí dvě."]],
 trap:"<s>deshalb wir liefern</s> → deshalb <b>liefern wir</b>.",
 items:[
  ["c","Der Lieferant hat Probleme, ___ liefern wir später.",["deshalb","weil","obwohl"],"Dodavatel má problémy, proto dodáme později.","Za mezerou hned sloveso → deshalb."],
  ["c","Es regnet, ___ trainieren wir draußen.",["trotzdem","obwohl","deshalb"],"Prší, přesto trénujeme venku.",""],
  ["c","Která věta je správně?",["Ich bin krank, deshalb bleibe ich zu Hause.","Ich bin krank, deshalb ich bleibe zu Hause.","Ich bin krank, deshalb ich zu Hause bleibe."],"Jsem nemocný, proto zůstanu doma.",""],
  ["c","Wir trainieren, ___ es regnet.",["obwohl","trotzdem","weil"],"Trénujeme, přestože prší.","Sloveso na konci → spojka obwohl."],
  ["o","Obwohl das Tor teuer ist, kauft die Gemeinde zwei Stück.","Přestože je branka drahá, obec koupí dvě."],
  ["t","Bitte bestellen Sie bis Freitag, ___ wird es zu spät. (jinak)","sonst","Objednejte prosím do pátku, jinak bude pozdě.",""],
  ["c","Das Tor ist stabil. ___ ist es leicht.",["Außerdem","Obwohl","Weil"],"Branka je stabilní. Navíc je lehká.",""],
  ["c","Která věta je správně?",["Trotzdem kommt er heute.","Trotzdem er kommt heute.","Trotzdem er heute kommt."],"Přesto dnes přijde.",""],
  ["t","Der Preis ist hoch. ___ kaufen wir es. (přesto)","Trotzdem","Cena je vysoká. Přesto to koupíme.",""],
  ["o","Zuerst prüfen wir die Maße, dann bestellen wir.","Nejdřív zkontrolujeme rozměry, pak objednáme."]
 ]});

G({id:"futur", l:3, t:"Budoucí čas: werden",
 why:"Sliby a plány: prověříme, ozveme se, postaráme se.",
 rule:["<b>werden</b> na 2. místě + <b>infinitiv na konci</b>: Wir werden das prüfen.",
       "V běžné řeči se budoucnost často řekne <b>přítomným časem + časovým údajem</b>: Morgen liefern wir.",
       "werden + infinitiv vyjadřuje i odhad: Er wird krank sein. (Asi je nemocný.)"],
 ex:[["Wir werden das Angebot prüfen.","Nabídku prověříme."],["Ich werde mich darum kümmern.","Postarám se o to."]],
 trap:"„Zítra dodáme“ nejčastěji = <b>Morgen liefern wir.</b> werden nepotřebuješ.",
 items:[
  ["o","Wir werden das Angebot prüfen.","Nabídku prověříme.",["Das Angebot werden wir prüfen."]],
  ["c","Ich ___ Sie morgen anrufen.",["werde","wird","werden"],"Zítra vám zavolám.",""],
  ["t","Es ___ morgen regnen.","wird","Zítra bude pršet.",""],
  ["c","Která věta je správně?",["Der Techniker wird am Montag kommen.","Der Techniker wird kommen am Montag.","Der Techniker kommen wird am Montag."],"Technik přijde v pondělí.","Infinitiv na konec."],
  ["c","Nejběžnější způsob, jak říct „Zítra dodáme“:",["Morgen liefern wir.","Morgen werden liefern wir.","Morgen wir werden liefern."],"","Přítomný čas + časový údaj."],
  ["t","___ du am Samstag spielen? (werden)","Wirst","Budeš v sobotu hrát?",""],
  ["c","Wir ___ Ihnen bis Freitag Bescheid geben.",["werden","wird","werdet"],"Do pátku vám dáme vědět.",""],
  ["o","Ich werde mich darum kümmern.","Postarám se o to."],
  ["c","Er ist nicht da. Er ___ krank sein. (asi)",["wird","werdet","würde"],"Není tu. Asi je nemocný.",""],
  ["t","Ihr ___ das schaffen! (werden)","werdet","Vy to zvládnete!",""]
 ]});

G({id:"zuinf", l:3, t:"zu + infinitiv, um … zu, damit",
 why:"Zkusím vám zavolat. Volám, abych potvrdil termín.",
 rule:["Po slovesech a frázích jako <b>versuchen, vergessen, anfangen, aufhören, Lust/Zeit haben, es ist wichtig</b> přijde <b>zu + infinitiv</b> na konec.",
       "Odlučitelná slovesa: zu doprostřed: an<b>zu</b>rufen.",
       "Po způsobových slovesech <b>nikdy zu</b>: Ich kann kommen.",
       "<b>um … zu</b> = abych (stejný podmět). <b>damit</b> = aby (jiný podmět, sloveso na konec).",
       "<b>ohne … zu</b> = aniž by · <b>statt … zu</b> = místo aby."],
 ex:[["Ich versuche, Sie morgen anzurufen.","Zkusím vám zítra zavolat."],["Ich rufe an, um den Termin zu bestätigen.","Volám, abych potvrdil termín."]],
 trap:"<b>um … zu</b>, když děláš něco ty. <b>damit</b>, když to má udělat někdo jiný: …, damit <b>Sie</b> den Termin bestätigen.",
 items:[
  ["c","Ich versuche, Sie morgen ___.",["anzurufen","zu anrufen","anrufen"],"Zkusím vám zítra zavolat.","Odlučitelné: zu doprostřed."],
  ["c","Wir haben vergessen, die Rechnung ___.",["zu schicken","schicken","geschickt"],"Zapomněli jsme poslat fakturu.",""],
  ["c","Ich kann morgen ___.",["kommen","zu kommen","kommt"],"Zítra můžu přijít.","Po způsobových slovesech nikdy zu."],
  ["c","Ich rufe an, ___ den Termin zu bestätigen.",["um","damit","für"],"Volám, abych potvrdil termín.","Stejný podmět → um … zu."],
  ["c","Ich rufe an, ___ Sie den Termin bestätigen.",["damit","um","zu"],"Volám, abyste potvrdil termín.","Jiný podmět → damit."],
  ["t","Er ist gegangen, ohne Tschüss zu ___. (sagen)","sagen","Odešel, aniž by řekl ahoj.",""],
  ["o","Es ist wichtig, die Maße zu prüfen.","Je důležité zkontrolovat rozměry."],
  ["t","Hast du Lust, Fußball zu ___? (spielen)","spielen","Máš chuť hrát fotbal?",""],
  ["c","Wir trainieren, ___ fit zu bleiben.",["um","damit","ohne"],"Trénujeme, abychom zůstali fit.",""],
  ["t","Ich fange an, das Angebot ___. (schreiben, se zu)","zu schreiben","Začínám psát nabídku.",""],
  ["c","Statt ___, schreibt er eine E-Mail.",["anzurufen","zu anrufen","anrufen"],"Místo aby zavolal, píše e-mail.",""]
 ]});

G({id:"relativ", l:3, t:"Vztažné věty: der, die, das (který)",
 why:"Branka, kterou jsme dodali. Zákazník, kterému jsem psal.",
 rule:["Vztažné zájmeno = „který“. <b>Rod</b> má podle podstatného jména, <b>pád</b> podle toho, jakou roli hraje ve vedlejší větě.",
       "Vypadá skoro jako člen. Liší se jen 3. pád množného čísla <b>denen</b> a 2. pád <b>dessen / deren</b>.",
       "Sloveso jde na konec, před vztažnou větou je čárka. Předložka jde před zájmeno: mit <b>dem</b>, für <b>die</b>."],
 tab:{h:["","mužský","ženský","střední","množné"],r:[["1.","der","die","das","die"],["4.","den","die","das","die"],["3.","dem","der","dem","denen"],["2.","dessen","deren","dessen","deren"]]},
 ex:[["Das ist das Netz, das wir brauchen.","To je ta síť, kterou potřebujeme."],["Der Kunde, dem ich geschrieben habe, hat angerufen.","Zákazník, kterému jsem psal, volal."]],
 trap:"Pád určuje vedlejší věta, ne hlavní: Das ist der Techniker, <b>den</b> ich angerufen habe (anrufen + 4. pád).",
 items:[
  ["c","Das ist der Techniker, ___ morgen kommt.",["der","den","dem"],"To je technik, který zítra přijde.","Ve vedlejší větě je podmětem → 1. pád der."],
  ["c","Das ist der Techniker, ___ ich angerufen habe.",["den","der","dem"],"To je technik, kterému jsem volal.","anrufen + 4. pád → den."],
  ["c","Die Firma, ___ die Tore liefert, ist aus Deutschland.",["die","der","das"],"Firma, která dodává branky, je z Německa.",""],
  ["t","Das Tor, ___ wir geliefert haben, ist zu groß.","das","Branka, kterou jsme dodali, je moc velká.",""],
  ["c","Der Kunde, ___ ich das Angebot geschickt habe, hat angerufen.",["dem","den","der"],"Zákazník, kterému jsem poslal nabídku, volal.","Komu → 3. pád dem."],
  ["c","Die Kinder, ___ ich trainiere, sind sieben Jahre alt.",["die","denen","der"],"Děti, které trénuji, je sedm let.","trainieren + 4. pád → die."],
  ["t","Die Kinder, mit ___ ich trainiere, sind toll.","denen","Děti, se kterými trénuji, jsou skvělé.","mit + 3. pád mn. č. → denen."],
  ["o","Das ist das Netz, das wir brauchen.","To je ta síť, kterou potřebujeme."],
  ["c","Die Schule, für ___ wir das Angebot machen, ist in Děčín.",["die","der","den"],"Škola, pro kterou děláme nabídku, je v Děčíně.","für + 4. pád, die Schule → die."],
  ["c","Der Trainer, ___ Mannschaft gewonnen hat, ist glücklich.",["dessen","deren","dem"],"Trenér, jehož tým vyhrál, je šťastný.","Jehož (der Trainer) → dessen."]
 ]});

G({id:"passiv", l:3, t:"Trpný rod (wird geliefert)",
 why:"Dodává se, montuje se, kontroluje se. Technické texty, normy a nabídky jsou ho plné.",
 rule:["Přítomný čas: <b>werden + příčestí</b>: Das Tor wird geliefert.",
       "Préteritum: <b>wurde + příčestí</b>: Das Tor wurde geliefert.",
       "Perfektum: <b>ist + příčestí + worden</b>: Das Tor ist geliefert worden.",
       "Se způsobovým slovesem: <b>muss geliefert werden</b>. Kdo to dělá: <b>von</b> + 3. pád."],
 ex:[["Das Tor wird jedes Jahr geprüft.","Branka se každý rok kontroluje."],["Die Bestellung kann online gemacht werden.","Objednávku lze udělat online."]],
 trap:"V perfektu je <b>worden</b>, ne <s>geworden</s>: Die Tore sind geliefert <b>worden</b>.",
 items:[
  ["c","Die Tore ___ morgen geliefert.",["werden","sind","haben"],"Branky budou zítra dodány.",""],
  ["t","Das Netz ___ gestern montiert. (préteritum)","wurde","Síť byla včera namontována.",""],
  ["c","Die Rechnung wird ___ der Buchhaltung geschickt. (kým)",["von","durch","mit"],"Fakturu posílá účtárna.",""],
  ["o","Das Tor wird jedes Jahr geprüft.","Branka se každý rok kontroluje."],
  ["c","Die Ware muss bis Freitag ___ werden.",["bezahlt","bezahlen","bezahlte"],"Zboží musí být zaplaceno do pátku.",""],
  ["t","Hier ___ Deutsch gesprochen.","wird","Tady se mluví německy.",""],
  ["c","Která věta je správně?",["Die Tore sind gestern geliefert worden.","Die Tore sind gestern geliefert geworden.","Die Tore haben gestern geliefert worden."],"Branky byly včera dodány.","V perfektu trpného rodu → worden."],
  ["c","Udělej trpný rod: „Wir reparieren das Tor.“",["Das Tor wird repariert.","Das Tor ist reparieren.","Das Tor wird reparieren."],"Branka se opravuje.",""],
  ["t","Der Platz ___ 2025 gebaut. (préteritum)","wurde","Hřiště bylo postaveno v roce 2025.",""],
  ["o","Die Bestellung kann online gemacht werden.","Objednávku lze udělat online."]
 ]});

G({id:"indirekt", l:3, t:"Nepřímé otázky: ob, wann, wo…",
 why:"Nejzdvořilejší způsob, jak se na něco zeptat: Können Sie mir sagen, wann…?",
 rule:["Otázka ano/ne → <b>ob</b> (jestli): Wissen Sie, <b>ob</b> das Tor auf Lager ist?",
       "Otázka s tázacím slovem → slovo zůstane: Können Sie mir sagen, <b>wann</b> die Lieferung kommt?",
       "Je to vedlejší věta, sloveso jde <b>na konec</b>."],
 ex:[["Ich weiß nicht, ob das möglich ist.","Nevím, jestli je to možné."],["Ich frage, wie viel das kostet.","Ptám se, kolik to stojí."]],
 trap:"jestli = <b>ob</b>, ne wenn. <s>Ich weiß nicht, wenn er kommt</s>.",
 items:[
  ["c","Ich weiß nicht, ___ er kommt. (jestli)",["ob","wenn","dass"],"Nevím, jestli přijde.",""],
  ["c","Která věta je správně?",["Können Sie mir sagen, wann die Lieferung kommt?","Können Sie mir sagen, wann kommt die Lieferung?","Können Sie mir sagen, die Lieferung wann kommt?"],"Můžete mi říct, kdy přijde dodávka?","Sloveso na konec."],
  ["t","Wissen Sie, ___ das Tor auf Lager ist? (jestli)","ob","Víte, jestli je branka skladem?",""],
  ["o","Ich frage, wie viel das kostet.","Ptám se, kolik to stojí."],
  ["c","Er fragt, ___ wir am Samstag Zeit haben.",["ob","wenn","was"],"Ptá se, jestli máme v sobotu čas.",""],
  ["t","Ich weiß nicht, wo die Baustelle ___. (liegen)","liegt","Nevím, kde je ta stavba.",""],
  ["c","Která věta je správně?",["Wissen Sie, ob der Techniker schon da ist?","Wissen Sie, ob ist der Techniker schon da?","Wissen Sie, ist der Techniker schon da ob?"],"Víte, jestli je technik už tady?",""],
  ["c","Sagen Sie mir bitte, ___ ich das bezahlen muss. (kdy)",["wann","wenn","ob"],"Řekněte mi prosím, kdy to musím zaplatit.",""],
  ["o","Ich weiß nicht, ob das möglich ist.","Nevím, jestli je to možné."],
  ["t","Können Sie mir sagen, ___ das Training beginnt? (kdy)","wann","Můžete mi říct, kdy začíná trénink?",""]
 ]});

G({id:"temporal", l:3, t:"als, wenn, bevor, nachdem, sobald…",
 why:"Jakmile zboží dorazí, ozvu se. Než objednáte, zkontrolujte rozměry.",
 rule:["<b>als</b> = když (jednou v minulosti) · <b>wenn</b> = když (opakovaně nebo v budoucnu) · <b>wann</b> = kdy (otázka)",
       "<b>bevor</b> (než) · <b>nachdem</b> (poté co) · <b>während</b> (zatímco) · <b>bis</b> (dokud ne) · <b>seit</b> (od té doby co) · <b>sobald</b> (jakmile)",
       "Všechny jsou spojky vedlejší věty → sloveso <b>na konec</b>."],
 ex:[["Ich rufe Sie an, sobald die Ware da ist.","Zavolám vám, jakmile bude zboží tady."],["Bevor Sie bestellen, prüfen Sie bitte die Maße.","Než objednáte, zkontrolujte prosím rozměry."]],
 trap:"Česky všude „když“. Německy: jednorázově v minulosti <b>als</b>, jinak <b>wenn</b>.",
 items:[
  ["c","___ ich ein Kind war, habe ich viel Fußball gespielt.",["Als","Wenn","Wann"],"Když jsem byl dítě, hrál jsem hodně fotbal.","Jednou v minulosti → als."],
  ["c","Immer ___ es regnet, trainieren wir in der Halle.",["wenn","als","wann"],"Vždycky, když prší, trénujeme v hale.","Opakovaně → wenn."],
  ["c","___ Sie bestellen, prüfen Sie bitte die Maße.",["Bevor","Nachdem","Während"],"Než objednáte, zkontrolujte prosím rozměry.",""],
  ["t","Ich rufe Sie an, ___ die Ware da ist. (jakmile)","sobald","Zavolám vám, jakmile bude zboží tady.",""],
  ["c","___ ich telefoniere, schreibe ich Notizen.",["Während","Bevor","Seit"],"Zatímco telefonuji, dělám si poznámky.",""],
  ["c","Warten Sie, ___ der Techniker kommt. (dokud nepřijde)",["bis","bevor","seit"],"Počkejte, dokud nepřijde technik.",""],
  ["o","Seit ich hier arbeite, lerne ich Deutsch.","Od té doby, co tu pracuji, se učím německy."],
  ["c","___ wir das Tor montiert hatten, prüften wir es.",["Nachdem","Bevor","Während"],"Poté co jsme branku namontovali, zkontrolovali jsme ji.",""],
  ["c","Ich weiß nicht, ___ er kommt. (kdy)",["wann","wenn","als"],"Nevím, kdy přijde.","Otázka kdy → wann."],
  ["t","___ ich gestern nach Hause kam, war es schon dunkel. (když)","Als","Když jsem včera přišel domů, už byla tma.","Jednou v minulosti → als."]
 ]});

G({id:"praet_alle", l:3, t:"Préteritum ostatních sloves",
 why:"Psané texty, zprávy, e-maily od úřadů. Musíš ho poznat, i když ho sám moc neříkáš.",
 rule:["Pravidelná: kmen + <b>-te</b>: machte, lieferte, arbeitete.",
       "Nepravidelná mění kmen: fahren → <b>fuhr</b>, gehen → <b>ging</b>, kommen → <b>kam</b>, geben → <b>gab</b>, nehmen → <b>nahm</b>, sehen → <b>sah</b>, finden → <b>fand</b>, schreiben → <b>schrieb</b>, sprechen → <b>sprach</b>, stehen → <b>stand</b>.",
       "Smíšená: bringen → <b>brachte</b>, denken → <b>dachte</b>, wissen → <b>wusste</b>.",
       "ich a er/sie/es jsou stejné a bez koncovky: ich kam, er kam; wir kamen."],
 ex:[["Er fuhr gestern nach Berlin.","Včera jel do Berlína."],["Wir lieferten das Tor im Mai.","Branku jsme dodali v květnu."]],
 trap:"V mluvené řeči říkej perfektum (ist gefahren). Préteritum hlavně poznávej v textu.",
 items:[
  ["c","„kam“ je préteritum od:",["kommen","kämmen","kaufen"],"přišel",""],
  ["c","Er ___ gestern nach Berlin. (fahren)",["fuhr","fahrte","fährte"],"Včera jel do Berlína.",""],
  ["t","Wir ___ das Tor im Mai. (liefern)","lieferten","Branku jsme dodali v květnu.","Pravidelné: -te + -n."],
  ["c","„ging“ je préteritum od:",["gehen","geben","gelingen"],"šel",""],
  ["t","Sie ___ einen Brief. (schreiben, ona)","schrieb","Napsala dopis.",""],
  ["c","Der Trainer ___ mit den Eltern. (sprechen)",["sprach","sprechte","sprich"],"Trenér mluvil s rodiči.",""],
  ["c","Ich ___ das nicht. (wissen)",["wusste","wisste","weißte"],"To jsem nevěděl.",""],
  ["t","Die Kinder ___ Fußball. (spielen)","spielten","Děti hrály fotbal.",""],
  ["c","Er ___ uns die Rechnung. (bringen)",["brachte","bringte","brang"],"Přinesl nám fakturu.",""],
  ["c","Das Auto ___ vor dem Haus. (stehen)",["stand","stehte","stund"],"Auto stálo před domem.",""]
 ]});

G({id:"plusquam", l:3, t:"Předminulý čas (Plusquamperfekt)",
 why:"Když vyprávíš, co se stalo ještě před něčím jiným v minulosti.",
 rule:["<b>hatte / war</b> + příčestí. Jako perfektum, jen pomocné sloveso je v préteritu.",
       "Typicky s <b>nachdem</b>: Nachdem wir gegessen <b>hatten</b>, gingen wir nach Hause.",
       "sein / haben vybíráš stejně jako v perfektu."],
 ex:[["Als ich ankam, war der Zug schon abgefahren.","Když jsem dorazil, vlak už odjel."],["Er hatte das Angebot schon geschickt.","Nabídku už předtím poslal."]],
 trap:"Po <b>nachdem</b> patří předminulý čas, ne perfektum.",
 items:[
  ["c","Nachdem wir gegessen ___, gingen wir nach Hause.",["hatten","haben","waren"],"Poté co jsme se najedli, šli jsme domů.",""],
  ["c","Als ich ankam, ___ der Zug schon abgefahren.",["war","hatte","ist"],"Když jsem dorazil, vlak už odjel.","abfahren = pohyb → sein."],
  ["t","Er ___ das Angebot schon geschickt, als der Kunde anrief.","hatte","Nabídku už poslal, když zákazník zavolal.",""],
  ["o","Ich hatte das vergessen.","Zapomněl jsem na to."],
  ["c","Nachdem der Techniker das Tor ___ hatte, testete er es.",["montiert","montieren","montierte"],"Poté co technik branku namontoval, otestoval ji.",""],
  ["t","Die Lieferung ___ schon angekommen. (předminulý)","war","Dodávka už předtím dorazila.",""],
  ["c","Která věta je správně?",["Nachdem ich gefrühstückt hatte, fuhr ich zur Arbeit.","Nachdem ich hatte gefrühstückt, fuhr ich zur Arbeit.","Nachdem ich gefrühstückt habe, ich fuhr zur Arbeit."],"Poté co jsem se nasnídal, jel jsem do práce.",""],
  ["c","Wir ___ uns vorher nie gesehen.",["hatten","waren","wurden"],"Předtím jsme se nikdy neviděli.",""],
  ["t","Sie war müde, weil sie schlecht ___. (schlafen, předminulý)","geschlafen hatte","Byla unavená, protože špatně spala.","Ve vedlejší větě pomocné sloveso na konec."],
  ["c","Předminulý čas od „ich komme“:",["ich war gekommen","ich hatte gekommen","ich bin gekommen"],"",""]
 ]});

G({id:"konj2_verg", l:3, t:"Kdybych byl…: hätte / wäre + příčestí",
 why:"Výčitky, omluvy a nerealizované možnosti: Měli jsme objednat dřív.",
 rule:["Neskutečná minulost: <b>hätte / wäre + příčestí</b>.",
       "Wenn ich das gewusst <b>hätte</b>, <b>wäre</b> ich gekommen. (Kdybych to věděl, byl bych přišel.)",
       "Se způsobovým slovesem: hätte + 2× infinitiv: Wir <b>hätten</b> früher bestellen <b>sollen</b>."],
 ex:[["Ich hätte das früher sagen sollen.","Měl jsem to říct dřív."],["Das wäre nicht passiert.","To by se nestalo."]],
 trap:"hätte nebo wäre vybíráš stejně jako haben/sein v perfektu: gekommen → wäre, gemacht → hätte.",
 items:[
  ["c","Wenn ich das gewusst ___, hätte ich angerufen.",["hätte","wäre","würde"],"Kdybych to věděl, byl bych zavolal.",""],
  ["c","Ich ___ fast vergessen.",["hätte es","wäre es","würde es"],"Málem jsem to zapomněl.",""],
  ["t","Wenn der Bus pünktlich gewesen wäre, ___ ich nicht zu spät gekommen.","wäre","Kdyby autobus jel včas, nebyl bych přišel pozdě.","kommen → sein."],
  ["c","Wir hätten früher bestellen ___. (měli jsme)",["sollen","gesollt","sollten"],"Měli jsme objednat dřív.","Dva infinitivy na konci."],
  ["o","Das wäre nicht passiert.","To by se nestalo."],
  ["c","Ohne dich ___ wir verloren.",["hätten","wären","würden"],"Bez tebe bychom byli prohráli.","verlieren → haben."],
  ["t","Ich ___ Ihnen gern geholfen.","hätte","Rád bych vám byl pomohl.",""],
  ["c","Wenn wir früher losgefahren ___, wären wir pünktlich.",["wären","hätten","würden"],"Kdybychom vyjeli dřív, byli bychom včas.","losfahren = pohyb → sein."],
  ["c","Du ___ mich anrufen können!",["hättest","wärst","würdest"],"Mohl jsi mi zavolat!",""],
  ["o","Ich hätte das früher sagen sollen.","Měl jsem to říct dřív."]
 ]});

G({id:"genitiv", l:3, t:"2. pád (Genitiv) + wegen, trotz, während",
 why:"V psaném textu a ve smlouvách běžný. Mluvená řeč ho často nahrazuje.",
 rule:["Mužský a střední rod: <b>des</b> + <b>-(e)s</b> na konci: des Trainers, des Netzes.",
       "Ženský rod a množné číslo: <b>der</b>: der Firma, der Kinder.",
       "Předložky s 2. pádem: <b>wegen</b> (kvůli), <b>trotz</b> (navzdory), <b>während</b> (během), <b>statt</b> (místo), <b>innerhalb</b> (během, do).",
       "Hovorově místo genitivu <b>von + 3. pád</b>: das Auto vom Trainer. Jména: Ondras Ball."],
 ex:[["Wegen des Regens fällt das Training aus.","Kvůli dešti odpadá trénink."],["Die Lieferung erfolgt innerhalb einer Woche.","Dodání proběhne do týdne."]],
 trap:"U jmen <b>bez apostrofu</b>: Ondras Ball, ne <s>Ondra's Ball</s>.",
 items:[
  ["c","Das ist das Auto ___ Trainers.",["des","der","dem"],"To je auto trenéra.",""],
  ["c","Die Farbe ___ Netzes ist grün.",["des","dem","der"],"Barva sítě je zelená.",""],
  ["t","Der Name ___ Firma ist EUROGREEN.","der","Název firmy je EUROGREEN.","Ženský rod → der."],
  ["c","___ des Regens fällt das Training aus.",["Wegen","Trotz","Während"],"Kvůli dešti odpadá trénink.",""],
  ["c","Wir spielen trotz ___ Regens.",["des","dem","den"],"Hrajeme navzdory dešti.",""],
  ["t","___ der Montage ist der Platz gesperrt. (během)","Während","Během montáže je hřiště uzavřené.",""],
  ["c","Hovorově místo „das Auto des Trainers“ řekneš:",["das Auto vom Trainer","das Auto dem Trainer","das Auto den Trainer"],"","von + 3. pád."],
  ["o","Die Lieferung erfolgt innerhalb einer Woche.","Dodání proběhne do týdne."],
  ["c","Das ist ___ Ball. (Ondrův)",["Ondras","Ondra's","des Ondra"],"To je Ondrův míč.",""],
  ["t","Wegen ___ Verspätung entschuldigen wir uns. (die)","der","Omlouváme se za zpoždění.",""]
 ]});

G({id:"doppel", l:3, t:"Dvojice: sowohl … als auch, weder … noch",
 why:"Jak branky, tak sítě. Ani šéf, ani technik. Zní to hned vyspěleji.",
 rule:["<b>sowohl … als auch</b> = jak … tak · <b>weder … noch</b> = ani … ani · <b>entweder … oder</b> = buď … nebo",
       "<b>nicht nur … sondern auch</b> = nejen … ale i · <b>zwar … aber</b> = sice … ale",
       "<b>je</b> + 2. stupeň …, <b>desto</b> + 2. stupeň = čím …, tím: Je früher, desto besser."],
 ex:[["Wir liefern sowohl Tore als auch Netze.","Dodáváme jak branky, tak sítě."],["Je früher Sie bestellen, desto schneller liefern wir.","Čím dřív objednáte, tím rychleji dodáme."]],
 trap:"Po <b>weder … noch</b> už žádné nicht ani kein. Zápor je v nich.",
 items:[
  ["c","Wir liefern ___ Tore als auch Netze.",["sowohl","weder","entweder"],"Dodáváme jak branky, tak sítě.",""],
  ["c","Ich habe weder Zeit ___ Geld.",["noch","oder","als auch"],"Nemám ani čas, ani peníze.",""],
  ["c","Entweder wir liefern am Montag ___ am Dienstag.",["oder","noch","aber"],"Dodáme buď v pondělí, nebo v úterý.",""],
  ["t","Das Tor ist nicht nur stabil, ___ auch leicht.","sondern","Branka je nejen stabilní, ale i lehká.",""],
  ["c","Das Netz ist ___ teuer, aber sehr gut.",["zwar","sowohl","weder"],"Síť je sice drahá, ale velmi dobrá.",""],
  ["c","Je mehr wir trainieren, ___ besser spielen wir.",["desto","als","so"],"Čím víc trénujeme, tím líp hrajeme.",""],
  ["o","Weder der Chef noch der Techniker ist da.","Není tu ani šéf, ani technik."],
  ["t","___ du kommst mit, oder du bleibst hier. (buď)","Entweder","Buď půjdeš s námi, nebo zůstaneš tady.",""],
  ["c","Je früher Sie bestellen, desto ___ liefern wir.",["schneller","schnell","am schnellsten"],"Čím dřív objednáte, tím rychleji dodáme.","Po desto 2. stupeň."],
  ["c","Která věta je správně?",["Sowohl die Schule als auch die Gemeinde haben bestellt.","Sowohl die Schule als die Gemeinde auch haben bestellt.","Sowohl die Schule auch die Gemeinde haben bestellt."],"Objednala jak škola, tak obec.",""]
 ]});

G({id:"ndekl", l:3, t:"n-deklinace: den Kunden, Herrn Müller",
 why:"Kunde, Kollege, Herr, Lieferant – tvoje nejčastější slova a nejčastější chyba.",
 rule:["Některá mužská podstatná jména dostanou <b>-(e)n</b> ve všech pádech kromě 1. pádu jednotného čísla.",
       "Typicky osoby na <b>-e</b> (der Kunde, der Kollege, der Junge) a na <b>-ent, -ant, -ist, -at</b> (der Student, der Lieferant, der Polizist).",
       "Plus <b>der Herr → Herrn</b>, der Mensch, der Nachbar, der Name (des Namens)."],
 tab:{h:["pád","Kunde","Herr"],r:[["1.","der Kunde","der Herr"],["4.","den Kunden","den Herrn"],["3.","dem Kunden","dem Herrn"],["2.","des Kunden","des Herrn"]]},
 ex:[["Ich rufe den Kunden an.","Zavolám zákazníkovi."],["Ich schreibe Herrn Müller eine E-Mail.","Píšu panu Müllerovi e-mail."]],
 trap:"V e-mailu: Sehr geehrter <b>Herr</b> Müller (1. pád), ale ich schreibe <b>Herrn</b> Müller.",
 items:[
  ["c","Ich rufe den ___ an. (der Kunde)",["Kunden","Kunde","Kundes"],"Zavolám zákazníkovi.",""],
  ["c","Ich spreche mit meinem ___. (der Kollege)",["Kollegen","Kollege","Kolleges"],"Mluvím s kolegou.",""],
  ["t","Sehr geehrter ___ Müller, (oslovení)","Herr","Vážený pane Müllere,","Oslovení je 1. pád → Herr."],
  ["t","Ich schreibe ___ Müller eine E-Mail. (der Herr)","Herrn","Píšu panu Müllerovi e-mail.","3. pád → Herrn."],
  ["c","Wir suchen einen neuen ___. (der Lieferant)",["Lieferanten","Lieferant","Lieferants"],"Hledáme nového dodavatele.",""],
  ["c","Der ___ hat angerufen. (der Kunde)",["Kunde","Kunden","Kundes"],"Zákazník volal.","1. pád jednotného čísla → beze změny."],
  ["c","Das ist das Auto des ___. (der Nachbar)",["Nachbarn","Nachbars","Nachbar"],"To je auto souseda.",""],
  ["o","Ich danke dem Kunden für die Bestellung.","Děkuji zákazníkovi za objednávku."],
  ["c","Der Trainer lobt den ___. (der Junge)",["Jungen","Junge","Junges"],"Trenér chválí kluka.",""],
  ["t","Ich habe Ihren ___ nicht verstanden. (der Name)","Namen","Nerozuměl jsem vašemu jménu.",""]
 ]});

G({id:"lassen", l:3, t:"lassen: nechat udělat",
 why:"Necháme to opravit, dejte mi vědět – časté v servisu i v e-mailech.",
 rule:["<b>lassen + infinitiv</b> = nechat (někoho) něco udělat: Wir lassen das Tor reparieren.",
       "lassen = dovolit: <b>Lass mich</b> das machen.",
       "Časování: ich lasse, du <b>lässt</b>, er <b>lässt</b>, wir lassen, ihr lasst.",
       "Perfektum má 2 infinitivy: Ich habe das Netz wechseln <b>lassen</b>. · <b>sich lassen</b> = dá se: Das lässt sich machen."],
 ex:[["Wir lassen das Tor reparieren.","Necháme branku opravit."],["Lassen Sie mich bitte wissen, ob es passt.","Dejte mi prosím vědět, jestli to sedí."]],
 trap:"Přehláska jen u du a er: du <b>lässt</b>, ale ihr <b>lasst</b>.",
 items:[
  ["o","Wir lassen das Tor reparieren.","Necháme branku opravit."],
  ["c","Er ___ das Auto waschen.",["lässt","lasst","lasse"],"Nechává si umýt auto.",""],
  ["t","___ mich das machen! (du)","Lass","Nech mě to udělat!",""],
  ["c","Ich habe das Netz ___. (nechal jsem vyměnit)",["wechseln lassen","gewechselt gelassen","wechseln gelassen"],"Nechal jsem vyměnit síť.","Perfektum: 2 infinitivy."],
  ["c","Das lässt ___ machen. (to se dá udělat)",["sich","es","man"],"To se dá udělat.",""],
  ["t","Wir ___ die Ware liefern.","lassen","Necháme si zboží dovézt.",""],
  ["c","Lassen Sie ___ bitte wissen, ob es passt.",["mich","mir","ich"],"Dejte mi prosím vědět, jestli to sedí.",""],
  ["o","Ich lasse Sie nicht warten.","Nenechám vás čekat."],
  ["c","Wo ___ du deine Haare schneiden?",["lässt","lasst","lässe"],"Kde se necháváš stříhat?",""],
  ["t","Der Trainer ___ die Kinder spielen.","lässt","Trenér nechává děti hrát.",""]
 ]});

G({id:"indef", l:3, t:"man, jemand, nichts, es gibt",
 why:"Jak se to dělá, někdo volal, nic se nestalo, je tu problém.",
 rule:["<b>man</b> = neosobní „se“: Hier darf <b>man</b> nicht parken. Sloveso jako u er.",
       "<b>jemand</b> (někdo) · <b>niemand</b> (nikdo) · <b>etwas</b> (něco) · <b>nichts</b> (nic) · <b>alle</b> (všichni) · <b>alles</b> (všechno) · <b>jeder / jede / jedes</b> (každý)",
       "<b>es</b> jako formální podmět: <b>Es gibt</b> + 4. pád (je, existuje), es regnet, <b>es geht um</b> (jde o), es tut mir leid."],
 ex:[["Wie sagt man das auf Deutsch?","Jak se to řekne německy?"],["Es gibt ein Problem mit der Lieferung.","Je problém s dodávkou."]],
 trap:"Česky „je tam problém“. Německy ne <s>Ist ein Problem</s>, ale <b>Es gibt ein Problem</b>.",
 items:[
  ["c","Hier ___ man nicht rauchen.",["darf","dürfen","darfst"],"Tady se nesmí kouřit.","man + tvar jako er."],
  ["c","Ist ___ da? (někdo)",["jemand","niemand","etwas"],"Je tu někdo?",""],
  ["c","Ich habe ___ gehört. (nic)",["nichts","niemand","kein"],"Nic jsem neslyšel.",""],
  ["t","___ gibt ein Problem mit der Lieferung.","Es","Je problém s dodávkou.",""],
  ["c","Wie sagt ___ das auf Deutsch?",["man","es","er"],"Jak se to řekne německy?",""],
  ["c","___ hat angerufen. (nikdo)",["Niemand","Nichts","Kein"],"Nikdo nevolal.",""],
  ["o","Es geht um den neuen Platz.","Jde o nové hřiště."],
  ["c","___ sind da. (všichni)",["Alle","Alles","Jeder"],"Všichni jsou tady.",""],
  ["t","Ist ___ in Ordnung? (všechno)","alles","Je všechno v pořádku?",""],
  ["c","___ Kind bekommt eine Medaille. (každé)",["Jedes","Jeder","Jede"],"Každé dítě dostane medaili.","das Kind → jedes."]
 ]});

/* =========================== BONUS – B2 =========================== */
G({id:"konj1", l:4, t:"Konjunktiv I: nepřímá řeč",
 why:"Zprávy, tiskové zprávy, úřední dopisy: „prý“.",
 rule:["Cizí výrok se v psaném textu tlumočí Konjunktivem I: er <b>sei</b>, er <b>habe</b>, er <b>komme</b>, er <b>könne</b>, er <b>werde</b>.",
       "V běžné řeči stačí indikativ nebo Konjunktiv II."],
 ex:[["Der Kunde sagt, das Tor sei zu klein.","Zákazník říká, že branka je (prý) moc malá."]],
 trap:"Poznat stačí. Sám v řeči používat nemusíš.",
 items:[
  ["c","Der Bürgermeister sagt, der Platz ___ fertig. (spisovně)",["sei","seid","wäre gewesen"],"Starosta říká, že hřiště je hotové.",""],
  ["c","Er sagt, er ___ keine Zeit. (spisovně)",["habe","hab","hätte gehabt"],"Říká, že nemá čas.",""],
  ["t","Sie sagt, sie ___ morgen. (kommen, Konjunktiv I)","komme","Říká, že zítra přijde.",""],
  ["c","Der Hersteller teilt mit, die Lieferung ___ sich verzögern. (spisovně)",["werde","wurde","geworden"],"Výrobce sděluje, že se dodávka zpozdí.",""],
  ["c","Er meint, er ___ das nicht machen. (spisovně)",["könne","konnte","gekonnt"],"Myslí si, že to nemůže udělat.",""],
  ["o","Der Kunde sagt, das Tor sei zu klein.","Zákazník říká, že branka je moc malá."]
 ]});

G({id:"futur2", l:4, t:"Budoucí čas II",
 why:"Do pátku to budeme mít hotové. Asi zapomněl.",
 rule:["<b>werden + příčestí + haben / sein</b>: Bis Freitag <b>werden</b> wir das Tor montiert <b>haben</b>.",
       "Často jako odhad minulosti: Er <b>wird</b> den Termin vergessen <b>haben</b>. (Asi zapomněl.)"],
 ex:[["Bis morgen werde ich das erledigt haben.","Do zítřka to budu mít vyřízené."]],
 trap:"V běžné řeči stačí perfektum: Bis Freitag haben wir das montiert.",
 items:[
  ["c","Bis Freitag ___ wir das Tor montiert haben.",["werden","haben","sind"],"Do pátku budeme mít branku namontovanou.",""],
  ["t","Er ist nicht da. Er wird den Termin vergessen ___.","haben","Není tu. Asi zapomněl na termín.",""],
  ["c","Bis Montag wird die Ware ___ sein.",["angekommen","ankommen","angekommt"],"Do pondělí zboží dorazí.",""],
  ["o","Bis morgen werde ich das erledigt haben.","Do zítřka to budu mít vyřízené."],
  ["c","Sie ___ den Zug verpasst haben. (asi, ona)",["wird","werden","würde"],"Asi jí ujel vlak.",""],
  ["t","In einer Woche ___ wir alles geliefert haben.","werden","Za týden budeme mít všechno dodané.",""]
 ]});

G({id:"partizip", l:4, t:"Příčestí jako přídavné jméno",
 why:"Úřední a technický jazyk: die gelieferten Tore, die vom Kunden bestellte Ware.",
 rule:["Příčestí minulé jako přídavné jméno: die <b>gelieferten</b> Tore (dodané branky).",
       "Příčestí přítomné (infinitiv + d): <b>spielende</b> Kinder (hrající si děti).",
       "Rozvitý přívlastek: die <b>vom Kunden bestellten</b> Tore = branky, které objednal zákazník.",
       "Koncovky přesně jako u přídavných jmen."],
 ex:[["Wir prüfen die vom Kunden bestellten Tore.","Kontrolujeme branky objednané zákazníkem."]],
 trap:"Čti od členu ke konci: <b>die</b> … <b>Tore</b>. Všechno mezi tím je přívlastek.",
 items:[
  ["c","die ___ Tore (geliefert)",["gelieferten","gelieferte","geliefert"],"dodané branky",""],
  ["c","das ___ Netz (montiert)",["montierte","montierten","montiertes"],"namontovaná síť",""],
  ["c","___ Kinder (spielen, přítomné příčestí, bez členu)",["Spielende","Spielenden","Gespielte"],"hrající si děti",""],
  ["t","Wir prüfen die vom Kunden ___ Tore. (bestellen)","bestellten","Kontrolujeme branky objednané zákazníkem.",""],
  ["c","die am Montag ___ Ware (liefern)",["gelieferte","gelieferten","geliefert"],"zboží dodané v pondělí","die Ware, 1. pád → -e."],
  ["o","Das ist ein gut funktionierendes System.","To je dobře fungující systém."]
 ]});
