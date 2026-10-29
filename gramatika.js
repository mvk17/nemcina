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
