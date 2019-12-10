import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    nume: '',
    descriereCaragiale: "\tCel mai mare dramaturg și scriitor satiric al literaturii noastre, Ion Luca Caragiale, s-a născut la 30 ianuarie 1852 în satul Haimanale din fostul județ Prahova, ca fiu al lui Luca și al Ecaterinei Caragiale. Primele clase le urmeaza la Ploiești, la Școala Domnească, păstrând o pioasă amintire învățătorului Basil Drăgoșescu, de la care a învățat întâia dată tainele gramaticii și respectul pentru limba românească.\n" +
        "\tDupă 1870, timp de câțiva ani, preocupările lui Caragiale se aseamnană cu ale marelui său contemporan și prieten de mai tarziu, M. Eminescu: în 1870 Caragiale este copist la Tribunalul Prahova, iar în 1871 este sufleur si copist al Teatrului National din București.\n" +
        "\tAnul 1873 este important în evoluția lui Caragiale, întrucât acum de prima probă a înclinațiilor sale satirice, debutând la revista umoristică Ghimpele, cu articole si note polemice ascuțite, în care atacă cu frondă juvenilă pe Maiorescu, Macedonski s.a.\n" +
        "\tAnul 1884 trebuie reținut ca dată memorabilă în care apare capodopera dramaturgiei noastre  clasice, comedia O scrisoare pierdută, reprezentată în același an. La cei 32 de ani, Caragiale dăduse literaturii noastre : O noapte furtunoasă, Conu Leonida față cu reacțiunea și O scrisoare pierdută.\n" +
        "\tÎntre 1888-1889, aproape un an, Caragiale funcționează ca director general al teatrelor. Însă relațiile cu Junimea si cu Titu Maiorecu încep să se răcească și Caragiale începe să devină, pentru liberali și conservatori, deopotrivă, un scriitor dificil si incomod.\n" +
        "\tÎn 1901 apare volumul Momente și schițe și în același an are loc cunoscuta acuzație de plagiat adusă de Caion Al. Ionescu, publicist mediocru, necinstit și amator de scandaluri, infierat în fulminanta pledoarie a lui Delavrancea.\n" +
        "\tÎn 1904, beneficiind de o moștenire considerabilă, Caragiale pleacă la Berlin, unde se va stabili până  la moarte. Placarea lui din țară nu trebuie privită cu superficialitate, ca fiind simplu rezultat al unei moșteniri.\n" +
        "\tDar cea mai emoționantă dovadă a legăturii trainice cu țara adevărată, cu poporul năpăstuit pe care l-a slujit cu devotament si ale cărui dureri si năzuințe le-a oglindit cu atâta pătrundere într-o însemnată parte a operei sale, o constituie pamfletul 1907 din primăvară până-n toamnă, cel mai aspru rechizitoriu al vremii, cu privire la marile rascoale țărănești.\n" +
        "\tI.L.Caragiale moare la Berlin, în 1912, 22 iunie, lăsând în urma sa o operă bogată și strălucitoare, o adevarată oglindă a societății românești de la sfârșitul secolului al XIX-lea.\n" +
        "\tI.L.Caragiale este, înainte de toate , marele dramaturg  al literaturii noastre, autor al comediilor O noapte furtunoasă, O scrisoare pierdută, Conu Leonida față cu reacțiunea și D-ale carnavalului, precum și al dramei Năpasta. Ceea ce dă o neobișnuită vigoare creațiilor sale dramatice este în primul rând conținutul lor deosebit de valoros, prin ascuțita lui actualitate în vremea autorului.\n" +
        "\tDar fară îndoială că genul dramatic al lui Caragiale și-a găsit expresia desăvârșită in O scrisoare pierdută. Ceea ce face ca această piesă să treacă înaintea tuturor celorlalte este, înainte de orice, conținutul de idei. Reprezentarea piesei  O scrisoare pierdută pe marile sceni ale lumii (Morcova, Berlin, Varsovia, Paris, Buenos Aires) atestă, indiscutabil, universalitatea ei.\n" +
        "\tDe o factură cu totul deosebită este Năpasta. De data această râsul este convertit in compasiune, satira in meditatie si profunzime psihologică.\n" +
        "\tDupă 1890 repertoriul lui Caragiale se îmbogățește cu proza de analiză și cu povestiri care ilustrează și de asta dată, bogatele resurse ale marelui scriitor. Apar nuvele(O făclie de Paști, Păcat, În vreme de război), povestiri(Kir Inulea, La hanul lui Mînjoală, Calul dracului, Abu Hassan) si schiţe(d-l Goe, Triumful talentului, Vizită, Lanțul slăbiciunilor)",
    intrebariCaragiale: [
        'Caragiale a fost om',
        'Caragiale nu a fost om',
        'Sa ai o zi'
    ],
    corectCaragiale: 3,
    raspunsCaragiale: false,
    descriereEminescu: "\tDeşi poetul, la modul declarativ, se consideră ca apartinând romantismului, el admiră şi valorile clasice, în creaţia sa tinzând spre frumos şi adevăr, militând pentru perfecţiunea artistică, trăsături specifice clasicismului. \n" +
        "\tÎn concepţia lui Eminescu, adevărata poezie este cea izvorâtă din propria experienţă umană, existenţială, pe care creatorul o transfigurează artistic. Tot în concepţia lui, poezia veritabilă se naşte din adevăr transfigurat artistic, iar poezia autentică este aceea care asigură creatorului nemurirea.\n" +
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
        "Pornind de la ideile filozofilor, poetul mai vorbeşte despre timp şi spaţiu ca forme ale cunoaşterii, viaţa ca vis, dominaţia răului în lume, voinţa de a trăi, nefericirea geniului, prezentul etern. Aşadar mitul genezei, cel al morţii cosmice sunt prezente în poezia filozofică eminesciană. Multe din aceste teme se întrepătrund şi le găsim îngemănate în aceeaşi creaţie, aşa cum se întamplă în „Glossă” şi „Luceafărul”.",
    intrebariEminescu: [
      'Caragiale a fost om',
      'Caragiale nu a fost om',
      'Sa ai o zi'
    ],
    corectEminescu: 3,
    raspunsEminescu: false,
    descriereCreanga: "\tLipsit de apreciere pentru mult timp, Ion Creangă devine autor clasic, inclus de Nicolae Manolescu în lista autorilor canonici, după ce numeroși critici interbelici observă complexitatea scrierilor sale. Începând cu cea de-a doua parte a secolului al XIX-lea, Ion Creangă frecventează constant cenaclul „Junimea”  înființat la Iași de către Titu Maiorescu, Petre P. Carp, Theodor Rosseti, Iacob Negruzzi și Vasile Pogor. Creangă își citește operele în cadrul societății fiind apreciat pentru spiritul său oratoric, ironie, autoironie și umor. Autorul debutează în revista „Convorbiri literare”cu basmul nuvelistic „Soacra cu trei nurori”  în anul 1875. De-a lungul vieții își face simțită prezența în principal în domeniul școlar fiind învățător și publicând manuale școlare. Timp de 10 ani publică povești printre acestea numărându-se: „Povestea Porcului”, „Punguța cu doi bani”, „Capra cu trei iezi”, „Moș Ion Roată și Unirea”, „Inul și cânepa”. Titu Maiorescu este alături de Eminescu și Caragiale un susținător al talentului lui Creangă, dar deși îl prezintă în cadrul cenaclului la superlativ nu îi dedică totuși un studiu individual precum o făcuse cu Mihai Eminescu („Eminescu și poeziile lui” ) sau lui Ion Luca Caragiale („Comediile d-lui Caragiale”), afirmând despre Creangă că este totuși un autor „poporal”.\n" +
        "\tOpera „Povestea lui Harap-Alb”  a fost publicată în „Convorbiri literare” în 1877, an în care apare și basmul „Fata babei și fata moșneagului”. \n" +
        "\nTeme și motive\n" +
        "\tTema basmului „Povestea lui Harap-Alb” este tipică literaturii populare: lupta dintre bine și rău. În plus, însă Ion Creangă adaugă faptul că binele și răul nu sunt două concepte aflate în antiteză, ci cele două sunt complementare Harap-Alb și Spânul nu se confruntă direct în luptă, cel din urmă fiind pentru erou un pedagog malefic.\n" +
        "\tAlături de motivele populare, Creangă folosește trei motive care îl diferențiază  de alți autori de basm: motivul podului, al fântânii abis și al pădurii labirint. \n" +
        "\tPodul reprezintă trecerea dinspre lumea protectoare a împărăției tatălui eroului, către lumea reală plină de capcane, care însă este singura capabilă să dezvolte experiența de viață a fiului de crai. Eroul trece peste această probă ajutat de Sfânta Duminică și de cal, totodată fiind sfătuit de tată să nu se însoțească cu omul spân și cel Roș (motivul interdicției). \n" +
        "\tMotivul pădurii labirint este cel al identificării lipsei de experiență a eroului reliefată aici prin dezorientarea totală a imaturului într-un spațiu compact.\n" +
        "\tMotivul fântânii abis are o semnificație simbolică constituind spațiul în care eroul capătă un nou nume. Apa poate semnifica un loc al botezului, eroul primind acum numele de Harap-Alb. În acest spațiu închis eroul își va decide destinul optând pentru viața de slugă și refuzând moartea.\n" +
        "\nViziunea despre lume în opere\n" +
        "\tÎn fiecare operă, Ion Creangă are o viziune diferită despre lume. În „Povestea lui Harap-Alb” viziunea despre lume în ciuda aspectului său moralizator (binele învinge răul) este reliefată prin necesitatea depășirii unor probe de către fiul de crai pe drumul inițierii sale. Spânul este un Rău necesar reușind prin probele la care îl va supune, dar și prin șansa pe care i-o dă eroului de a-și redobândi statutul, astfel acesta luându-și rolul de îndrumător malefic pentru Harap-Alb. Astfel opera este un bildungsroman eroul pornind pe drumul inițiatic lipsit de experiență și reușește după depășirea probelor să se maturizeze căpătând calitățile unui viitor împărat.\n" +
        "\tÎn opera „Moș Ion Roată și Unirea” viziunea despre lume este foarte clară: cei cu clasă socială mai scăzută muncesc, iar cei cu o clasă mai ridicată dau ordine. În operă boierul este superior țăranului dând ordine la ridicarea unui bolovan de către țărani dar el nu se implică la ridicarea lui. Moș Ion Roată îi face observație, boierul tace malcom și toți țăranii îi dau dreptate lui Moș Ion Roată.\n" +
        "\tÎn opera „Prostia Omenească”, Creangă subliniază faptul că oricât de departe se merge și oricât se încearcă ferirea, de prostie tot nu se scapă. Un bărbat trăia cu soția și cu soacra. Cele două erau cam proaste așa că el se hotărăște să plece de acasă și să vadă dacă există oamenii mai proști ca ele pe lume. Pe drum vede tot felul de întâmplări cum ar fi: căratul soarelui cu oborul, urcatul nucilor în pod cu țăpoiul și trasul vacii pe șură la fân. Când se întoarce acasa constată că există oameni mult mai proști decât în familia lui.\n" +
        "\tÎn concluzie, Ion Creangă se înscrie în rândul scriitorilor populari, dar care are o viziune realistă asupra existenței umane, poveștile lui fiind bucăți rupte din viața neamului moldovenesc.",
    intrebariCreanga: [
      'Caragiale a fost om',
      'Caragiale nu a fost om',
      'Sa ai o zi'
    ],
    corectCreanga: 3,
    raspunsCreanga: false,
    descriereSlavici: "",
    intrebariSlavici: [
      '',
      '',
      ''
    ],
    corectSlavici: 3,
    raspunsSlavici: false,
    descriereMaiorescu: "",
    intrebariMaiorescu: [
      '',
      '',
      ''
    ],
    corectMaiorescu: 3,
    raspunsMaiorescu: false,
    descriereJunimea: "",
    intrebariJunimea: [
      '',
      '',
      ''
    ],
    corectJunimea: 3,
    raspunsJunimea: false
  },
  mutations: {
    changeLogged(state) {
      state.logged = !state.logged
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
    raspunsTitulescu(state) {
      state.raspunsTitulescu = true;
    },
    raspunsJunimea(state) {
      state.raspunsJunimea = true;
    }
  }
})
