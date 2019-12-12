import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    nume: undefined,
    descriereCaragiale: "\tCel mai mare dramaturg și scriitor satiric al literaturii noastre, Ion Luca Caragiale, s-a născut la 30 ianuarie 1852 în satul Haimaitare din fostul județ Prahova, ca fiu al lui Luca și al Ecaterinei Caragiale. Primele clase le urmeaza la Ploiești, la Școala Domnească, păstrând o pioasă amintire învățătorului Basil Drăgoșescu, de la care a învățat întâia dată tainele gramaticii și respectul pentru limba românească.\n" +
        "\tDupă 1870, timp de câțiva ani, preocupările lui Caragiale se aseamnană cu ale marelui său contemporan și prieten de mai tarziu, M. Eminescu: în 1870 Caragiale este copist la Tribunalul Prahova, iar în 1871 este sufleur si copist al Teatrului National din București.\n" +
        "\tAnul 1873 este important în evoluția lui Caragiale, întrucât acum de prima probă a înclinațiilor sale satirice, debutând la revista umoristică Ghimpele, cu articole si note polemice ascuțite, în care atacă cu frondă juvenilă pe Maiorescu, Macedonski s.a.\n" +
        "\tAnul 1884 trebuie reținut ca dată memorabilă în care apare capodopera dramaturgiei noastre  clasice, comedia O scrisoare pierdută, reprezentată în același an. La cei 32 de ani, Caragiale dăduse literaturii noastre : O noapte furtunoasă, Conu Leonida față cu reacțiunea și O scrisoare pierdută.\n" +
        "\tÎntre 1888-1889, aproape un an, Caragiale funcționează ca director general al teatrelor. Însă relațiile cu Junimea si cu Titu Maiorescu încep să se răcească și Caragiale începe să devină, pentru liberali și conservatori, deopotrivă, un scriitor dificil si incomod.\n" +
        "\tÎn 1901 apare volumul Momente și schițe și în același an are loc cunoscuta acuzație de plagiat adusă de Caion Al. Ionescu, publicist mediocru, necinstit și amator de scandaluri, infierat în fulminanta pledoarie a lui Delavrancea.\n" +
        "\tÎn 1904, beneficiind de o moștenire considerabilă, Caragiale pleacă la Berlin, unde se va stabili până  la moarte. Placarea lui din țară nu trebuie privită cu superficialitate, ca fiind simplu rezultat al unei moșteniri.\n" +
        "\tDar cea mai emoționantă dovadă a legăturii trainice cu țara adevărată, cu poporul năpăstuit pe care l-a slujit cu devotament si ale cărui dureri si năzuințe le-a oglindit cu atâta pătrundere într-o însemnată parte a operei sale, o constituie pamfletul 1907 din primăvară până-n toamnă, cel mai aspru rechizitoriu al vremii, cu privire la marile rascoale țărănești.\n" +
        "\tI.L.Caragiale moare la Berlin, în 1912, 22 iunie, lăsând în urma sa o operă bogată și strălucitoare, o adevarată oglindă a societății românești de la sfârșitul secolului al XIX-lea.\n" +
        "\n" +
        "\tI.L.Caragiale este, înainte de toate , marele dramaturg  al literaturii noastre, autor al comediilor O noapte furtunoasă, O scrisoare pierdută, Conu Leonida față cu reacțiunea și D-ale carnavalului, precum și al dramei Năpasta. Ceea ce dă o neobișnuită vigoare creațiilor sale dramatice este în primul rând conținutul lor deosebit de valoros, prin ascuțita lui actualitate în vremea autorului.\n" +
        "\tDar fară îndoială că genul dramatic al lui Caragiale și-a găsit expresia desăvârșită in O scrisoare pierdută. Ceea ce face ca această piesă să treacă înaintea tuturor celorlalte este, înainte de orice, conținutul de idei. Reprezentarea piesei  O scrisoare pierdută pe marile sceni ale lumii (Morcova, Berlin, Varsovia, Paris, Buenos Aires) atestă, indiscutabil, universalitatea ei.\n" +
        "\tDe o factură cu totul deosebită este Năpasta. De data această râsul este convertit in compasiune, satira in meditatie si profunzime psihologică.\n" +
        "\tDupă 1890 repertoriul lui Caragiale se îmbogățește cu proza de analiză și cu povestiri care ilustrează și de asta dată, bogatele resurse ale marelui scriitor. Apar nuvele(O făclie de Paști, Păcat, În vreme de război), povestiri(Kir Inulea, La hanul lui Mînjoală, Calul dracului, Abu Hassan) si schiţe(d-l Goe, Triumful talentului, Vizită, Lanțul slăbiciunilor).\n",
    intrebariCaragiale: [
        "Hăimanale",
        "Haimaitare",
        "Haimanale"
    ],
    intrebareCaragiale: "Unde s-a născut Ion Luca Caragiale?",
    corectCaragiale: 3,
    raspunsCaragiale: false,
    raspunsCorectCaragiale: false,
    descriereEminescu: "\tMihai Eminescu s-a născut la Botosani, la data de 15 ianuarie 1850 , fiind al şapte-lea din cei 11 copii ai căminarului Gheorge Eminovici.  Intre 1858-1866 urmează cu intermitente şcoala la Cernăuţi. Părăseşte şcoala în 1863, revine ca privatist în 1865 şi pleacă din nou în 1866. Anul 1866 este anul primelor manifestări literare ale lui Eminescu.  Activează în rândul societăţilor studenţeşti, se împrieteneşte cu Ioan Slavici si o cunoaşte la Viena pe Veronica Micle. Tot in aceasat perioada începe colaborarea la \"Convorbiri literare\" si  debutează ca publicist în ziarul \"Albina\" din Pesta. Devine bun prieten cu Ion Creangă, pe care-l determină să scrie şi-l introduce la \"Junimea \".În 1877 se mută la Bucureşti, unde până în 1883 este redactor, apoi redactor-şef (1880) la ziarul \"Timpul\". În această perioada scrie marile lui poeme : \"Scrisorile\"  si \"Luceafărul\" . În iunie 1883, poetul se îmbolnăveşte grav, fiind internat la spitalul doctorului Şuţu. În decembrie 1883, îi apare volumul \"Poezii\" cu prefaţa şi cu texte selectate de Titu Maiorescu. Mihai Eminescu se stinge din viaţă la 15 iunie 1889 în casa de sănătate a doctorului Şuţu.Este înmormântat la Bucureşti , la Cimitirul Bellu.\n" +
        "\tDeși nu a scris texte declarate arte poetice, concepția lui Mihai Eminescu despre poet și poezie se întalnește în întreaga sa opera, în poezii ca ,,Epigonii’’ , „Glossă”, „Criticilor mei”, „Eu nu cred nici in Iehova”, „Icoană și privaz”, „Iambul”, „Scrisoarea II”, „Oda”.\n" +
        "\tCu toate că poetul, la modul declarativ, se consideră ca apartinând romantismului, el admiră şi valorile clasice, în creaţia sa tinzând spre frumos şi adevăr, militând pentru perfecţiunea artistică, trăsături specifice clasicismului.  Poetul însusi isi arata stradania in acest sens in poezia ,,Iambul’’, iar aceeasi preocupare de a spori frumusetea limbii o gasim si in ’’ Icoana si privaz” : ,,Voit-am a mea limbă să fie ca un râu .” El își exprimă scepticismul și durerea față de felul în care este privită poezia de către contemporani și , de aceea, pare să o considere aducătoare de împliniri : ,, Fugi, fugi ! Ce te așteaptă cu mine într-un veac , / În care poezie și visuri sunt un fleac: / Nu te-ndemn eu însumi ca să-mi urmezi în cale / Să fiu nemernic martor nefericirii tale ’’.\n" +
        "\tÎn concepţia lui Eminescu, adevărata poezie este cea izvorâtă din propria experienţă umană, existenţială, pe care creatorul o transfigurează artistic: ,, Nu e carte să înveți,/ Ca viața s-aibă preț-, / Ci trăiește, chinuiește / Și de toate pătimește / Ș-ai s-auzi cum iarba crește ”( ,, În zadar în colbul școlii”  ) . Tot în concepţia lui, poezia veritabilă se naşte din adevăr transfigurat artistic, iar poezia autentică este aceea care asigură creatorului nemurirea.\n" +
        "\t,,Epigonii” poate fi considerată o poezie programatică, un prim manifest estetic eminescian, în care poetul realizează o antiteză în stil romantic între creatorii de dinainte şi contemporanii săi. Dacă în prima parte îşi elogiază înaintaşii în accente de odă, în a doua parte Eminescu adoptă o atitudine intransigentă faţă de poeţii generaţiei sale.\n" +
        "\t,,Scrisoarea II” este dominată de aceleaşi accente satirice dispreţuitoare, dar amare ca în ,,Epigonii”. Eminescu simulează iniţial dezgustul şi dispreţul sau faţă de poezie, pentru a evidenţia adevăratele valori morale şi artistice pe care aceasta ar trebui să le conţină. Este prezentă antiteza dintre vârsta tinereţii când fiinţa tinde spre împlinire spirituală, morală şi dintre contemporanii săi care aleargă după glorie prin orice mijloace sau vănzându-şi ca pe o marfă ,,tainică simţire”.\n" +
        "\tAbordarea poeziei de inspiraţie istorică şi socială este tot o trasătură romantică a poeziei lui  Eminescu. Temei istorice poetului îi asociază alte teme secundare de natură mitologică sau filozofică , cum sunt ,,viaţa ca vis”, temă dublată de motivul ,,fortuna labilis”‚(soarta schimbatoare), eternitatea morţii faţă de viaţa efemeră, patria văzută din punctul de vedere al trecutului ca varstă mitică (,,Memento mori”), ca vârsta eroică ( ,,Scrisoarea III ” ), înstrăinarea percepută ca o criză prezentată în opoziţie cu vârstele anterioare , în ,, Scrisoarea III ”. Cele mai importante opere poetice evidenţiind aceste idei sunt, pe lângă  ,,Memento mori ”, ,,Scrisoarea III”  , ,,Împărat şi proletar” şi ,,Mureşan ”.\n" +
        "\tPoemul  ,,Memento mori” pune în discuţie o seamă de idei filozofice specific romantice, cum este cea referitoare la preexistenţa răului în lume, concepţie exprimatî şi în poemul  ,,Mureşan’’. Prezentă în poem este şi tema deţertăciunii, eternitatea morţii pândind orice formă a existenţei , iar viaţa fiind văzută ca un vis. Motivul ,,fortuna labilis ” apare ilustrat cu momentele de glorie şi decădere din viaţa fiecărei civilizaţii. Astfel, poetul pune în evidenţă stralucirea lumii, dar şi nimicia ei, iar fenomenul este repetabil prin natura lui. Raportată la prezent, imaginea viitoare a omenirii nu reprezintă o certitudine, de aceea, întoarcerea în trecut este singura posibilitate de a cunoaşte viitorul ( ,,Vrei viitorul a-l cunoaşte, te întoarce spre trecut” ). Poetul precizează că ,,visu -acesta ( adica viaţa ) cu moarte se sfârşeşte” , ajungând la concluzia amară ,,Ca vis al morţii eterne e viaţa lumii întregi”. Astfel, el stabileşte , cu o deplină obiectivitate, adevărul referitor la locul omului în Univers.\n" +
        "\tIdeea predestinării şi a repetabilităţii în istorie apare frecvent. În perioada de decadenţă a civilizaţiilor,  valorile sociale nu mai sunt respectate, iar individul este supus răului.\n" +
        "\tPoezia ,,Scrisoarea III” realizează o imagine impozantă  a ceea ce reprezintă aspiraţiile românilor,  dorinţa lor de a fi la înalţimea trecutului.\n" +
        "\tMeditaţia eminesciană are în vedere aspecte criticabile ale existenţei sociale: desfrâul şi lipsa de idealuri, superficialitatea, snobismul, lipsa de sinceritate în relaţiile interumane şi mai ales în dragoste.\n" +
        "\tElemente de meditaţie în lirica eminesciană se întâlnesc şi în alte poezii, în afara celor care vizează istoria şi, implicit, timpul, tema favorită a autorului. Timpul necruţător, ireversibil şi cu consecinţe asupra fiinţei umane şi a sentimentelor ei apare aproape în toate poeziile: ,,Trecut-au anii”, ,,La steaua”.\n" +
        "\tŞi la Eminescu, natura şi dragostea sunt teme permanente, aflate în consonanţă, deoarece natura reprezintă o stare de spririt, iar înfăţişarea ei este relaţionată cu sentimentul. Aşa se explică faptul că, acolo, unde dragostea este una fericită, împlinită, cadrul natural este luminos, feeric, de basm (,, Dorinta”, ,, Floare albastră”) iar când dragostea nu se împlineşte şi poetul trăieşte un sentiment de tristeţe şi dezamăgire, natura este sumar schiţată , de obicei în culori întunecate, reci ( ,, Pe lângă plopii fără soţ ”, ,, De ce nu-mi vii ’’ ).\n" +
        "\tÎn evoluţia poeziei eminesciene închinate naturii şi dragostei se disting doua etape. Prima etapă 1870-1880 ilustrează  imaginea optimistă, luminoasă a iubirii unde apare o iubită  veselă, caldă, ispititoare iar cea de-a doua etapa 1880-1883 aduce o profunzime a sentimentului de dragoste , o anumită filozofie, dar spre deosebire de poeziile din prima etapă , tristetea şi dezamăgirea sunt predominante, iubita fiind străină, rece şi distantă.\n" +
        "\tLa Eminescu există patru ipostaze ale iubirii. Există mai întai o iubire paradisiacă ( ,,Dorinţa” , ,, Lacul ”, „ Floare albastră ”, „Sara pe deal ) ” , natura apare ca un paradis terestru în care cuplul alunecă în somn , în vis, reprezentând cuplul adamic. În a doua ipostază , cea a iubirii demonice , cuplul erotic este alcătuit antonimic , ea- înger şi el –demon ( ,,Înger şi demon”   , ,‚Luceafărul ”  , ,‚Scrisoarea V ’’. Natura este şi ea dominată de dezordine , fiind în consonanţă cu revolta demonului care nu-şi poate împlini aspiraţia spre iubire. În cadrul eroticii funerare  sau funebre, cuplul este alcătuit dintr-o fiinşă vie şi una moartă, apărând motivul  strigoiului sau al dublului ( ,, Strigoii ” , „Gemenii”, „Luceafărul ”) unde domină o natură halucinantă fără urmă de naturaleţe şi căldură. În cea de-a patra ipostază, preferinţa poetului se îndreaptă  spre elegii, opuse ideilor din prima perioadă, natura paradisiacă este înlocuită cu una pustie, stingheră, în mijlocul căruia eul liric trăieşte sentimentul trecerii în nefiintă („De câte ori, iubit-o , „Departe sunt de tine”, „Pe lângă plopii fără soţ”).\n" +
        "\tPornind de la ideile filozofilor, poetul mai vorbeşte despre timp şi spaţiu ca forme ale cunoaşterii, viaţa ca vis, dominaţia răului în lume, voinţa de a trăi, nefericirea geniului, prezentul etern. Aşadar mitul genezei, cel al morţii cosmice sunt prezente în poezia filozofică eminesciană. Multe din aceste teme se întrepătrund şi le găsim îngemănate în aceeaşi creaţie, aşa cum se întamplă în „Glossă” şi „Luceafărul”.",
    intrebariEminescu: [
      "Experiența umană",
      "Experiența animală",
      "Experiența vegetală"
    ],
    intrebareEminescu: "După spusele lui Mihai Eminescu, adevărata poezie este izovrâtă din:",
    corectEminescu: 1,
    raspunsEminescu: false,
    raspunsCorectEminescu: false,
    descriereCreanga: "\tLipsit de apreciere pentru mult timp, Ion Creangă devine autor clasic, inclus de Nicolae Manolescu în lista autorilor canonici, după ce numeroși critici interbelici observă complexitatea scrierilor sale. Începând cu cea de-a doua parte a secolului al XIX-lea, Ion Creangă frecventează constant cenaclul „Junimea”  înființat la Iași de către Titu Maiorescu, Petre P. Carp, Theodor Rosseti, Iacob Negruzzi și Vasile Pogor. Creangă își citește operele în cadrul societății fiind apreciat pentru spiritul său oratoric, ironie, autoironie și umor. Autorul debutează în revista „Convorbiri literare”cu basmul nuvelistic „Soacra cu trei nurori”  în anul 1875. De-a lungul vieții își face simțită prezența în principal în domeniul școlar fiind învățător și publicând manuale școlare. Timp de 10 ani publică povești printre acestea numărându-se: „Povestea Porcului”, „Punguța cu doi bani”, „Capra cu trei iezi”, „Moș Ion Roată și Unirea”, „Inul și cânepa”. Titu Maiorescu este alături de Eminescu și Caragiale un susținător al talentului lui Creangă, dar deși îl prezintă în cadrul cenaclului la superlativ nu îi dedică totuși un studiu individual precum o făcuse cu Mihai Eminescu („Eminescu și poeziile lui” ) sau lui Ion Luca Caragiale („Comediile d-lui Caragiale”), afirmând despre Creangă că este totuși un autor „poporal”.\n" +
        "\tOpera „Povestea lui Harap-Alb”  a fost publicată în „Convorbiri literare” în 1877, an în care apare și basmul „Fata babei și fata moșneagului”. \n" +
        "\n" +
        "Teme și motive\n" +
        "\tTema basmului „Povestea lui Harap-Alb” este tipică literaturii populare: lupta dintre bine și rău. În plus, însă Ion Creangă adaugă faptul că binele și răul nu sunt două concepte aflate în antiteză, ci cele două sunt complementare Harap-Alb și Spânul nu se confruntă direct în luptă, cel din urmă fiind pentru erou un pedagog malefic.\n" +
        "\tAlături de motivele populare, Creangă folosește trei motive care îl diferențiază  de alți autori de basm: motivul podului, al fântânii abis și al pădurii labirint. \n" +
        "\tPodul reprezintă trecerea dinspre lumea protectoare a împărăției tatălui eroului, către lumea reală plină de capcane, care însă este singura capabilă să dezvolte experiența de viață a fiului de crai. Eroul trece peste această probă ajutat de Sfânta Duminică și de cal, totodată fiind sfătuit de tată să nu se însoțească cu omul spân și cel Roș (motivul interdicției). \n" +
        "\tMotivul pădurii labirint este cel al identificării lipsei de experiență a eroului reliefată aici prin dezorientarea totală a imaturului într-un spațiu compact.\n" +
        "\tMotivul fântânii abis are o semnificație simbolică constituind spațiul în care eroul capătă un nou nume. Apa poate semnifica un loc al botezului, eroul primind acum numele de Harap-Alb. În acest spațiu închis eroul își va decide destinul optând pentru viața de slugă și refuzând moartea.\n" +
        "\n" +
        "Viziunea despre lume în opere\n" +
        "\tÎn fiecare operă, Ion Creangă are o viziune diferită despre lume. În „Povestea lui Harap-Alb” viziunea despre lume în ciuda aspectului său moralizator (binele învinge răul) este reliefată prin necesitatea depășirii unor probe de către fiul de crai pe drumul inițierii sale. Spânul este un Rău necesar reușind prin probele la care îl va supune, dar și prin șansa pe care i-o dă eroului de a-și redobândi statutul, astfel acesta luându-și rolul de îndrumător malefic pentru Harap-Alb. Astfel opera este un bildungsroman eroul pornind pe drumul inițiatic lipsit de experiență și reușește după depășirea probelor să se maturizeze căpătând calitățile unui viitor împărat.\n" +
        "\tÎn opera „Moș Ion Roată și Unirea” viziunea despre lume este foarte clară: cei cu clasă socială mai scăzută muncesc, iar cei cu o clasă mai ridicată dau ordine. În operă boierul este superior țăranului dând ordine la ridicarea unui bolovan de către țărani dar el nu se implică la ridicarea lui. Moș Ion Roată îi face observație, boierul tace malcom și toți țăranii îi dau dreptate lui Moș Ion Roată.\n" +
        "\tÎn opera „Prostia Omenească”, Creangă subliniază faptul că oricât de departe se merge și oricât se încearcă ferirea, de prostie tot nu se scapă. Un bărbat trăia cu soția și cu soacra. Cele două erau cam proaste așa că el se hotărăște să plece de acasă și să vadă dacă există oamenii mai proști ca ele pe lume. Pe drum vede tot felul de întâmplări cum ar fi: căratul soarelui cu oborul, urcatul nucilor în pod cu țăpoiul și trasul vacii pe șură la fân. Când se întoarce acasa constată că există oameni mult mai proști decât în familia lui.\n" +
        "\tÎn concluzie, Ion Creangă se înscrie în rândul scriitorilor populari, dar care are o viziune realistă asupra existenței umane, poveștile lui fiind bucăți rupte din viața neamului moldovenesc.",
    intrebariCreanga: [
      "Motivul parvenitului",
      "Motivul moștenirii",
      "Motivul fântânii abis"
    ],
    intrebareCreanga: "Care dintre urmatoarele motive au fost adăugate de Ion Creangă in opera \"Povestea lui Harap-Alb\"?",
    corectCreanga: 3,
    raspunsCreanga: false,
    raspunsCorectCreanga: false,
    descriereSlavici: "\tIoan Slavici a fost un scriitor, jurnalist și pedagog român, membru corespondent al Academiei Române, autor realist prin excelență. Autorul este apreciat de către mentorul perioadei, Titu Maiorescu, criticul dedicându-i și un articol individual. Slavici este cel mai mare nuvelist român.\n" +
        "\tOpera literară a lui Ioan Slavici este influențată de viața satului ardelean. Scriitorul a fost considerat de criticul George Călinescu un „instrument de observație excelent” al mediului rural,  oferind în nuvelele sale poporale și în studiile sale o frescă a moravurilor, a comportamentului oamenilor în funcție de statificarea lor socială, în cele mai mici detalii ale ținutei, îmbrăcăminții, vorbirii și gesturilor. \n" +
        "\tL-a cunoscut pe Mihai Eminescu la Viena, iar la îndemnul acestuia a debutat cu comedia ,,Fata de birău”, în anul 1871. Printre cele mai importante scrieri literare ale lui Ioan Slavici se numără romanul ,,Mara”, nuvelele ,,Moara cu noroc” și ,,Pădureanca”, iar memoriile sale publicate în volumul ,,Amintiri”, apărut în anul 1924, au o importanță deosebită pentru istoria literaturii române.\n" +
        "\tRedactor la ,,Timpul” în București și, mai apoi, fondator al ,,Tribunei” din Sibiu, Slavici a fost un jurnalist renumit. În urma articolelor sale a fost închis de cinci ori, atât în Austro-Ungaria, ca presupus naționalist român, cât și în România, ca presupus spion austro-ungar. Această experiență a fost reflectată de Slavici în lucrarea memorialistică intitulată ,,Închisorile mele”,  publicată în 1920. Istoricul Lucian Boia a constatat cu referire la Slavici că „dacă la scriitori precum Rebreanu sau Sadoveanu se constată un ușor deficit de caracter, necazurile lui Slavici se trag, s-ar putea spune, dintr-un surplus de caracter”.\n" +
        "\tRămas fără mijloace materiale se întoarce la Șiria și se înscrie, elev particular, la liceul maghiar din Arad în anul școlar 1867 - 1868. Pentru a se susține financiar, îl meditează pe băiatul grofiței Konigsegg, care a rămas repetent în clasa a IV-a. Astfel ia contact cu viața aristocrației transilvănene. Trece cu bine examenul clasei a VIII-a, dar nu se înscrie în timp la examenul de maturitate. Astfel, se înscrie pentru examen la Satu Mare, cu ajutorul unui prieten de familie. De la Satu Mare se întoarce pe jos, iar timp de șase săptămâni călătorește prin Baia Sprie, Dej, Gherla, Cluj, Turda, Abrud. \n" +
        "\tÎn anul 1869 se înscrie la Facultatea de drept de la Pesta, împotriva voinței părinților, care au dorit să se angajeze scriitor la vreun notar pentru a fi aproape de ei. Aici, întâmpină greutăți de ordin financiar nereușind să găsească un mod de a se întreține, astfel este nevoit să accepte invitația deschisă a colegului său Gheorghe Șerb de a lua masa în casa tatălui acestuia, care era magistrat, iar în casa acestuia a luat contact cu problemele politicii naționale ale românilor.  Studenția la Pesta este, însă, de scurtă durată, perioada de patru luni a    petrecut-o mai mult prin cafenele, deoarece profesorii de la Universitate, de origine germană, care vorbeau prost maghiara nu i-au inspirat încredere. După ce cade bolnav pe stradă și este tratat, în urma intervenției unei spălătorese a spitalului, se întoarce acasă. \n" +
        "\tA debutat în literatura română ca dramaturg cu piesa ,,Fata de birău”, în anul 1871, iar un an mai târziu îi scria lui Iacob Negruzzi: ,,Am o dispoziție deosebită pentru arta dramatică”,  iar încrezător în această dispoziție a scris pe parcursul vieții un număr apreciabil de piese, dintre care cele rămase constituie un întreg volum. Slavici nu a excelat neapărat ca dramaturg, dar prin comedia sa introduce în dramaturgia românească personaje rurale autentice și, deși, intriga și compoziția sunt mai puțin realizate, faptul este compensat prin realismul culorii locale și prin abilitatea redării scenice a idilei. Deși prima operă literară publicată a fost o comedie, dintr-o scrisoare adresată lui Iocob Negruzzi se poate deduce că prima încercare literară al lui Slavici a fost un basm, ,,Zâna Zorilor”. Basm scris la sfârșitul anului 1870. ,,Zâna Zorilor” a fost citită la Junimea în aceași seară cu ,,Ileana Cosânzeana” a lui Miron Pompiliu, iar ambele povești au fost apreciate drept încântătoare.\n" +
        "\tDebutul publicistic a avut loc în 1871 cu articolul ,,Despre creștere și, mai cu seamă, despre creșterea junelor române”, în ,,Speranța”, foaia teologilor din Arad, continuând în același an cu publicarea ,,Studiului asupra maghiarilor”  în ,,Convorbiri literare”. \n" +
        "\n" +
        "Temă și motive ,,Moara cu noroc” \n" +
        "\n" +
        "\tTema textului este tipic romantică și surprinde influența nefastă a dorinței de îmbogățire precum și procesul de dezumanizare al individului ca urmare a acestei obsesii pentru bani. Banul devine un motiv central căpătând prin forța sa o valoare de simbol. Există și teme secundare precum tema familiei și a morții.\n" +
        "\n" +
        "Viziune despre lume ,,Moara cu noroc” \n" +
        "\n" +
        "\tViziunea despre lume derivă din tema nuvelei și are scop moralizator. Conform înțelepciunii populare și a principiilor biblice, fiecare este pedepsit conform gravității faptelor comise. În ,,Moara cu noroc” se observă viziunea clasică, autorul optând pentru sfârșitul tragic al personajelor implicate în conflict care vor fi pedepsite de forța implacabilă a destinului.",
    intrebariSlavici: [
      "Romantică",
      "Realistă",
      "Naturalistă"
    ],
    intrebareSlavici: "Tema operei ,,Moara cu noroc\" este tipic realistă, romantică sau naturalistă?",
    corectSlavici: 2,
    raspunsSlavici: false,
    raspunsCorectSlavici: false,
    descriereMaiorescu: "\tTitu Liviu Maiorescu a fost un academician, avocat, critic literar, eseist, estet, filosof, pedagog, politician și scriitor român mason, prim-ministru al României între 1912 și 1914, ministru de interne, membru fondator al Academiei Române.\n" +
        "\tGraba pe care o manifestă în obținerea diplomelor universitare (după numai un an de studii la Berlin obține la Giessen doctoratul „magna cum laude“, după încă un an, licența în litere și filosofie la Sorbona și, după încă un an de studii universitare la Paris, licența în drept) nu afectează seriozitatea pregătirii sale academice; bazele culturii extrem de solide a lui Maiorescu se instaurează acum.\n" +
        "\tDeși perioada care a urmat Unirii din 1859 a reprezentat o epocă de împlinire a idealurilor pașoptiste, totuși unele accente se schimbaseră, condițiile erau altele decât pe vremea tinereții romantice a lui Heliade Rădulescu, Alecsandri sau Bălcescu. Maiorescu reprezintă noua generație, junimistă, cu o nouă concepție asupra vieții sociale și culturale românești. Este autorul celebrei teorii sociologice a formelor fără fond, baza junimismului politic și „piatra de fundament” pe care s-au construit operele lui Mihai Eminescu, Ion Creangă, Ion Luca Caragiale și Ioan Slavici. Acesta consideră că împrumuturile trebuie făcute doar dacă fondul repectivului stat îi permite adaptarea. Teoria se găseşte în articolul teoretic “În contra direcţiei de astăzi în cultura română”, Titu Maiorescu afirmând că la noi împrumuturile au dus la naşterea unor producţiuni moarte şi concluzionează într-un mod pragmatic, afirmând că “mai bine să nu facem o şcoală deloc decât să facem o şcoală rea, mai bine să nu facem o pinacotecă deloc decât să o facem lipsită de artă frumoasă”, citat din care reiese vizunea despre lume a lui Titu Maiorescu.\n" +
        "\tTotodată, Titu Maiorescu are şi câteva articole individuale, exemplu fiind “Eminescu şi poeziile lui”, articol în care se prezintă viaţa lui Mihai Eminescu, poet sub cărui auspicii va sta întreg secolul XX, şi “Comediile d-lui Caragiale”, articol în care apar operele dramaturgului Constantin Dobrogeanu Gherea, definind moralitatea drept fiind “o ficţiune, care scoate pe omul impresionabil în afară şi mai presus de interesele lumii”.\n" +
        "\tPuţini ştiu despre misoginismul domnului Titu Maiorescu. Acesta consideră faptul că femeile nu pot conduce un stat, aducând în discuţie un studiu ce spunea „Din 1.000 de căpățâni măsurate a rezultat 1.410 grame greutate mijlocie la bărbat și numai 1.250 la femei“. ",
    intrebariMaiorescu: [
      "Mai bun decât Viorica-Vasilica Dăncilă",
      "Mai bun decât Vladimir Putin",
      "Mai bun decât Victor-Viorel Ponta"
    ],
    intrebareMaiorescu: "Titu Maiorescu a fost un prim ministru:",
    corectMaiorescu: 1,
    raspunsMaiorescu: false,
    raspunsCorectMaiorescu: false,
    descriereJunimea: "\tDacă prin referire la perioada pașoptistă, întreaga activitate culturală reprezentativă perioadei echivalează eclectismului, Perioada Marilor Clasici preia accentul și îl mută, atribuindu-i literaturii române o sumă de valori inovative, evidențiate încă din denumirea perioadei.  Termenul  ,,clasic” reunește caracteristici ce vizează o structură riguroasă, un echilibru, valorificând generalul în detrimentul particularului, obiectivitatea în schimbul subiectivităţii, raţiunea și nu sentimentul. Atribuit unei opere, sau unei personalităţi marcante, acesta descrie un model de perfecțiune, a cărui relevanță și importanță vor dăinui în timp. \n" +
        "\tÎn timp ce prin manifestul pașoptist ,,Introducție” la ,,Dacia Literară”, desfășurat sub îndrumarea lui Mihail Kogălniceanu, se impune adoptarea unei limbi literare comune, direcționând literatura națională către scrieri originale care să dezvolte elementul autohton, Perioada Marilor Clasici propune reducerea distanței temporale stabilită între literatura europeană și cea natională, mentorul, Titu Maiorescu, declarat antipașoptist, eliminând necesitatea cantității. \n" +
        "\tMaiorescu, personalitate emblematică a celei de-a doua jumatăți a sec. XIX, alături de Iacob Negruzzi, Petre Carp, Theodor Rosetti, Vasile Pogor pun bazele societății Junimea, spațiu destinat culturii și creării de frumos, la Iași în anul 1863. Cenaclul activează pentru o perioadă de aproape 60 de ani, recrutând în rândul membrilor, oameni de cultură capabili să accepte și să respecte direcțiile impuse de fondatori. Junimiștii se individualizează prin trăsături precum: spiritul critic, spiritul oratoric, spiritul filozofic, gustul pentru clasic și academic, ironia fină.\n" +
        "\tÎncepând cu anul 1867, societatea dispunde de un organ de presă, revista ,,Convorbiri literare”. Revista însumează creații ale reprezentanților perioadei astfel, poeziile lui Eminescu dezvoltă teme precum iubirea, moartea, natura, trecerea timpului, iar proza acestuia teme fantastice; Creangă abordează într-o manieră plină de umor tema copilăriei în amintirile, poveștile și anectodele sale, precum și lupta dintre bine și rău în basmele sale fantastice, nuvelistice; Caragiale, un autor lucid cu un fin spirit al observației insistă pe tema satirizării aspectelor negative din viața aristocratiei, transformând comicul în tragic; Slavici, recunoscut drept cel mai mare nuvelist, prezintă teme complexe precum banul, setea de îmbogățire ce are efecte nefaste asupra indiviudului lacom, familia, iubirea.",
    intrebariJunimea: [
      "Vasile Picior",
      "Vasile Pogor",
      "Valentin Poghior"
    ],
    intrebareJunimea: "Cum se chemă ultimul dintre cei veniți să contribuie la inființarea Societății Junimea?",
    corectJunimea: 2,
    raspunsJunimea: false,
    raspunsCorectJunimea: false
  },
  mutations: {
    changeLogged(state, name) {
      state.logged = !state.logged;
      if(name !== "undefined")
        state.nume = name;
      else 
        state.nume = ""
    },
    raspunsCaragiale(state) {
      state.raspunsCaragiale = true;
    },
    raspunsEminescu(state) {
      state.raspunsEminescu = true;
    },
    raspunsCreanga(state) {
      state.raspunsCreanga = true;
    },
    raspunsSlavici(state) {
      state.raspunsSlavici = true;
    },
    raspunsMaiorescu(state) {
      state.raspunsMaiorescu = true;
    },
    raspunsJunimea(state) {
      state.raspunsJunimea = true;
    },
    raspunsCorectCaragiale(state, booleana) {
      state.raspunsCorectCaragiale = booleana;
    },
    raspunsCorectEminescu(state, booleana) {
      state.raspunsCorectEminescu = booleana;
    },
    raspunsCorectCreanga(state, booleana) {
      state.raspunsCorectCreanga = booleana;
    },
    raspunsCorectSlavici(state, booleana) {
      state.raspunsCorectSlavici = booleana;
    },
    raspunsCorectMaiorescu(state, booleana) {
      state.raspunsCorectMaiorescu = booleana;
    },
    raspunsCorectJunimea(state, booleana) {
      state.raspunsCorectJunimea = booleana;
    }
  }
})
