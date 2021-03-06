import React from 'react';
import Eveniment from './Eveniment';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container, } from "@material-ui/core";

// Conferinte
const comicCon = "https://itfest.osut.ro/media/events/comic_con.png"
const workshop1 = "https://itfest.osut.ro/media/events/default.JPG";
const hackthezone = "https://itfest.osut.ro/media/events/HackTheZone.jpg";
const atos1 = "https://itfest.osut.ro/media/events/atos2021.png";
const libertate_init = "https://itfest.osut.ro/media/events/libit2021.png";
const cira = "https://itfest.osut.ro/media/events/cira2021.png";
const softVision = "https://itfest.osut.ro/media/events/softvision2021.png";
const wellcode = "https://itfest.osut.ro/media/events/trimbitas2021.png";
const teFacProgramator = "https://itfest.osut.ro/media/events/laurtfp2021.png";
const amber = "https://itfest.osut.ro/media/events/amber2021.png";
const spataru = "https://itfest.osut.ro/media/events/spataru2021.png";
const savu = "https://itfest.osut.ro/media/events/savu2021.png";
const continental = "https://itfest.osut.ro/media/events/conti2021.png";
const msgSystems = "https://itfest.osut.ro/media/events/msg2021.png";
const nokia = "https://itfest.osut.ro/media/events/nokiaconf2021_8nov.png";
const gdsc = "https://itfest.osut.ro/media/events/gdsc2021.png";

// Concursuri
const hackathon = "https://itfest.osut.ro/media/events/hackathon.png";
const algoritmica = "https://itfest.osut.ro/media/events/algo.png";
const ctf = "https://itfest.osut.ro/media/events/ctf_small.png";
const lol_tft = "https://itfest.osut.ro/media/events/LOL_TFT.png";
const minecraft = "https://itfest.osut.ro/media/events/minecraft.jpg";
const lol = "https://itfest.osut.ro/media/events/LOL.jpg";
const board_games = "https://itfest.osut.ro/media/events/boardsgames_small.png";
const csgo = "https://itfest.osut.ro/media/events/CSGO_small.png";

// Comic Con

const anitaRus = "https://itfest.osut.ro/media/events/anitaRus2021.png";
const dreamBuilder = "https://itfest.osut.ro/media/events/dreambuilder2021.png";
const misuIonica = "https://itfest.osut.ro/media/events/misuIonica2021.png";
const tridia = "https://itfest.osut.ro/media/events/tridia2021.png";
const cosplay = "https://itfest.osut.ro/media/events/cosplay2021.png";
const animeQuizz = "https://itfest.osut.ro/media/events/animequiz.png";
const comicQuest = "https://itfest.osut.ro/media/events/comicquest2021.png";

// Castigatori
const lol_1 = "Izi Pizi Lemon Squeezee";
const lol_2 = "Tractori??tii";
const lol_3 = "MobaFire Builder";

const cs_1 = "RedFear eSports";
const cs_2 = "daupttm";
const cs_3 = "RedFear Academy";

const hs_1 = "WeMoloz";
const hs_2 = "Tili";
const hs_3 = "MoiseAlex";

const rl_1 = "Freestyle La Sol";
const rl_2 = "NXTG - Pheonix";
const rl_3 = "Inglourious";

const Evenimente = () => {
    return (
        <div id="evenimente">
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                        component="h1"
                        style={{
                        marginTop: 30
                    }}>
                        Evenimente
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        Workshopuri ??i conferin??e - Online
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                {/* <img src="https://itfest.osut.ro/media/anunt-evenimente.png" style={{width:"50%",maxWidth:"960px", maxHeight:"540px", display:"block"}}/> */}
                <Eveniment
                    titlu="Etapele unui proiect de succes"
                    descriere="Fondatorul WellCode, Petru Tr??mbi??a?? a lucrat at??t la Facebook, c??t ??i la Google. Fiind un expert ??n mentorat ??i programare, el se folose??te o metodologia care nu dec??t c?? ??nva???? cursan??ii abilit????ile practice necesare, dar ??i cum s?? g??ndeasc?? ??n cod, cum s?? aib?? o g??ndire critic?? ??i cum s?? conceap?? strategii de rezolvare a problemelor.
                    "
                    data="Luni, 1 Noiembrie"
                    poza={wellcode}
                    ora="18:00"
                    deadline="Luni, 1 Noiembrie, ora 12:00 "
                    invitat="Raul Tr??mbi??a??"
                    formular="https://form.123formbuilder.com/6020314/form"
                    />
                <Eveniment
                    titlu="A??tept??ri vs realitate : C??l??toria unui programator"
                    descriere="Adrian este informatician, cercet??tor cu experien???? ??n Cloud Computing, ??nv????are automat?? ??i blockchain. Este masterand ??n Inteligen???? Artificial?? ??i Calcul Distribuit. Principalele sale discipline didactice sunt: Programare (C/C++, Python, Java) ??i Structuri de date. Adrian a fost premiat la Conferin??a Blockchain Computing an Applications.
                    "
                    data="Mar??i, 2 Noiembrie"
                    poza={spataru}
                    ora="18:00"
                    deadline="Luni, 1 Noiembrie"
                    invitat="Adrian Sp??taru"
                    formular="https://form.123formbuilder.com/6020317/form"
                    />
                <Eveniment
                    titlu="The Unlimited World of Gaming - Are you in?"
                    descriere="Amber este o agentie global?? de Game Development care acoper??  toate disciplinele necesare dezvolt??rii unui joc: Arta, Design, Engineering, Project Management, Business Intelligence, Production, Quality Assurance. Conceptul companiei a fost inspirat de deceniile de experien???? ??n industrie a conducerii sale.
                    "
                    data="Miercuri, 3 Noiembrie"
                    poza={amber}
                    ora="18:00"
                    deadline="Mar??i, 2 Noiembrie"
                    invitat="cei de la Amber"
                    formular="https://form.123formbuilder.com/6020321/form"
                    />
                <Eveniment
                    titlu="The Power of PHP - LBDash"
                    descriere="Atos este lider global ??n domeniul digital securizat ??i decarbonizat, cu o gam?? de solu??ii digitale de top pe pia????, ??mpreun?? cu servicii de consultan????, oferte de securitate digital?? ??i decarbonizare; o abordare de parteneriat end-to-end.
                    Un pionier net-zero ??n servicii ??i produse de decarbonizare, angajamentul fa???? de viitor se extinde la neutralitatea emisiilor de carbon pentru organiza??ie, precum ??i pentru clien??ii ??i partenerii lor."
                    data="Joi, 4 Noiembrie"
                    poza={atos1}
                    ora="18:00"
                    deadline="Miercuri, 3 Noiembrie"
                    invitat="Dan Alexandru Budai, Lead of Sub Practice DBA-AMS, Robert Drobota, Technical Lead"
                    formular="https://form.123formbuilder.com/6020323/form"
                    />
                <Eveniment
                    titlu="Cum func??ioneaz?? pia??a IT ??n Rom??nia"
                    descriere="Cristian Dasc??lu este freelancer, antreprenor ??i vlogger. A refuzat ofertele a numeroase companii pentru a r??m??ne ??n Rom??nia.
                    Este co-fondatorul Libertate.init(), astfel, ajut??nd sute de programatori ??n a ????i ??ncepe cariera ??n freelancing, a fondat ??i co-fondat mai multe afaceri ??i proiecte majore care vizeaz?? dezvoltarea startup-urilor.
                    "
                    data="Vineri, 5 Noiembrie"
                    poza={libertate_init}
                    ora="16:00"
                    deadline="Joi, 4 Noiembrie"
                    invitat="Cristian Dasc??lu"
                    formular="https://form.123formbuilder.com/6020325/form"
                    />
                <Eveniment
                    titlu="Percep??ie ??n Autonomous Driving: direc??ii ??i provoc??ri"
                    descriere="Continental este o companie cu 150 de ani de experien???? care dezvolt?? tehnologii ??i servicii inovatoare pentru mobilitatea sustenabil?? ??i interconectat?? a oamenilor ??i a bunurilor acestora. Compania cu profil tehnologic ofer?? solu??ii sigure, eficiente, inteligente ??i accesibile pentru autovehicule, ma??ini, trafic ??i transport.
                    "
                    data="Luni, 8 Noiembrie"
                    poza={continental}
                    ora="18:00"
                    deadline="Duminic??, 7 Noiembrie"
                    invitat="cei de la Continental"
                    formular="https://form.123formbuilder.com/6022894/form"
                    />
                <Eveniment
                    titlu="Getting started with the freshly baked .Net 6 minimal API"
                    descriere="Cea mai nou?? versiune de .NET va deveni disponibil?? la nivel global ??n c??teva s??pt??m??ni, oferind o versiune complet renovat?? a suportului API-ului web, numit?? API minimal??. Dac?? sunte??i familiarizat cu express.js, cu siguran???? ve??i vedea o mul??ime de lucruri familiare acolo. Dar merit?? cu adev??rat noul API minim din .NET 6? Al??tura??i-v?? cu mine ??n aceast?? versiune hands on, deoarece vom ??ncepe cu un nou proiect API web, ??ncerc??nd s?? profit??m de noul API minim. F??c??nd acest lucru, probabil c?? vom ??n??elege din start care sunt avantajele ??i dezavantajele API-ului minim ??i, de asemenea, vom ??ncerca s?? abord??m un nou model arhitectural pentru dezvoltarea API-urilor web pe .NET."
                    data="Luni, 8 Noiembrie"
                    poza={gdsc}
                    ora="19:30"
                    deadline="Duminic??, 7 Noiembrie"
                    invitat="Dan P??tra??cu"
                    formular="https://form.123formbuilder.com/6028256/form"
                    />
                <Eveniment
                    titlu="How to catch the bad guys using Azure Sentinel"
                    descriere="Microsoft Azure Sentinel este un SIEM nativ ??n cloud, cu AI avansat ??i analize de securitate care v?? ajut?? s?? detecta??i, s?? preveni??i ??i s?? r??spunde??i la amenin????rile necunoscute ??i comportamentul anormal al utilizatorilor compromi??i, c??t ??i s?? ac??iona??i asupra amenin????rilor din interior."
                    data="Mar??i, 9 Noiembrie"
                    poza={atos1}
                    ora="18:00"
                    deadline="Luni, 8 Noiembrie"
                    invitat="Dorin Barboiu aka Dodo, Cloud Security Architect"
                    formular="https://form.123formbuilder.com/6022875/form"
                    />
                 <Eveniment
                    titlu="Educa??ia ??i cariera ??n era digital?? "
                    descriere="Academie de cursuri de formare ??n programare, cu o experien???? dovedit?? ??n domeniul IT, de la ingineri, masteranzi ??n IT, doctoranzi, cercet??tori ??n diverse ramuri ale Computer Science, to??i profesorii de la Te Fac Programator activeaz?? pe diverse laterale ale industriei. Misiunea lor este educarea popula??iei pentru era digital??.                    "
                    data="Mar??i, 9 Noiembrie"
                    poza={teFacProgramator}
                    ora="19:30"
                    deadline="Luni, 8 Noiembrie"
                    invitat="Laur Neagu"
                    formular="https://form.123formbuilder.com/6022877/form"
                    />
                <Eveniment
                    titlu="Impactul tehnologiei ??n societate ??i economie"
                    descriere="Cristian Cira este lector ??n cadrul Universit????ii de Vest din Timi??oara ??i pred?? Computer Architecture. A fost unul dintre autorii lucr??rii  ,,Identificarea oportunit????ilor de memorie non-volatil?? adresabil?? de octe??i ??n aplica??ii ??tiin??ifice la scar?? extrem????? ??i, totodat??, a dezvoltat o pasiune pentru domeniul ,,blockchain???."
                    data="Miercuri, 10 Noiembrie"
                    poza={cira}
                    ora="19:30"
                    deadline="Mar??i, 9 Noiembrie"
                    invitat="Cristian Cira"
                    formular="https://form.123formbuilder.com/6022869/form"
                    />
                <Eveniment
                    titlu="From Zero to a Full-Stack Hero (at least Robin if not Batman)"
                    descriere="Echipa msg Rom??nia este format?? din oameni cu pasiune pentru tehnologie care, prin activitatea lor, sprijin?? implementarea de solu??ii avansate pentru inovare digital??, dezvoltarea de exper??i tehnici de genera??ii, a c??ror eforturi sunt coordonate spre accelerarea transform??rii digitale ale unor companii angajate ??n crearea unui viitor mai bun.
                    Sunt pionieri digitali ??ntr-o lume definit?? prin informa??ii."
                    data="Joi, 11 Noiembrie"
                    poza={msgSystems}
                    ora="18:00"
                    deadline="Miercuri, 10 Noiembrie"
                    invitat="cei de la Msg Systems"
                    formular="https://form.123formbuilder.com/6027183/form"
                    />
                <Eveniment
                    titlu="The Future X Networks"
                    descriere="Nokia Rom??nia are unul dintre cele mai cuprinz??toare portofolii din industrie ??i o experien???? pe m??sur?? ??n Re??ele Mobile, Re??ele Fixe, Servicii Globale, Software Nokia, Re??ele IP/Optice ??i Solu??ii de V??nz??ri. 
                    Inoveaz?? viitorul tehnologiilor wireless prin contribu??ia lor la 5G. Creeaz?? urm??toarea genera??ie de software pentru definirea re??elelor, func??ii de re??ea virtualizate, analiz?? predictiv?? ??i gestioneaz?? peste 250.000 de elemente de re??ea ??n ??ntreaga lume."
                    data="Joi, 11 Noiembrie"
                    poza={nokia}
                    ora="19:30"
                    deadline="Miercuri, 10 Noiembrie"
                    invitat="cei de la Nokia"
                    formular="https://form.123formbuilder.com/6027306/form"
                    />
                <Eveniment
                    titlu="What about Twelve Factor Apps?"
                    descriere="Cognizant Softvision este lider in domeniul solutiilor software, dezvoltand solutii si produse digitale complete care conecteaza marile branduri ale lumii cu consumatorii finali. Cognizant Softvision colaboreaza cu unele dintre cele mai mari branduri din lume, oferind inovatie sustenabila, agilitate si conexiune care inspira angajament si transformarea business-ului. Cognizant Softvision are o echipa de peste 5.000 de profesionisti in domeniul dezvoltarii de produse software: product, design si engineering, intr-o retea de studiouri globale din noua tari de pe cinci continente."
                    data="Vineri, 12 Noiembrie"
                    poza={softVision}
                    ora="18:00"
                    deadline="Joi, 11 Noiembrie"
                    invitat="Cristina Manitiu, Java Developer"
                    formular="https://form.123formbuilder.com/6022878/form"
                    />
                <Eveniment
                    titlu="Your Mind in the Network. A Journey beyond Imagination"
                    descriere="Savnet este un centru de training care ??i-a luat angajamentul s?? ofere cursan??ilor ??i partenerilor lor cea mai bun?? experien???? educa??ional??. Creeaz?? solu??ii prin care ??n??elegerea tehnologiilor IT&C a devenit pl??cut?? ??i u??or de ??n??eles, iar prin comunicare, aten??ie la detalii ??i analizarea rezultatelor, a c??utat constant s?? fie cel mai bun."
                    data="Vineri, 12 Noiembrie"
                    poza={savu}
                    ora="19:30"
                    deadline="Joi, 11 Noiembrie"
                    invitat="Adrian Savu"
                    formular="https://form.123formbuilder.com/6022893/form"
                    />
            </Grid>

            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        Concursuri - Online
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Eveniment
                    titlu="Hackathon"
                    descriere="Hackathonul organizat de noi este un concurs de programare cu o durat?? de 12 de ore pe o tem?? stabilit?? de echipa ITFest Timi??oara. Participan??ii formeaz?? echipe ??i concureaz??, urm??nd a fi premiat cel mai inovativ produs ??i creatorii ei."
                    data="S??mb??t??, 13 Noiembrie"
                    poza={hackathon}
                    deadline="Vineri, 12 Noiembrie"
                    ora="9:00"
                    formular="https://form.123formbuilder.com/6020310/form"
                    regulament="https://drive.google.com/file/d/1FyRAegjWdzHIsjAHvk5t9hVXqVtCczqL/view"
                    />
                <Eveniment
                    titlu="Concurs de algoritmic??"
                    descriere="Acest concurs este o competi??ie desemnat?? studen??ilor, dar ??i elevilor din liceu, ce ????i propune s?? testeze ??i s?? recompenseze agilitatea ??i inventivitatea de a aplica diferi??i algoritmi ??n probleme de actualitate."
                    data="Duminic??, 14 Noiembrie"
                    poza={algoritmica}
                    deadline="S??mb??t??, 13 Noiembrie, ora 12:00"
                    ora="9:00"
                    formular="https://form.123formbuilder.com/6020308/form"
                    regulament="https://drive.google.com/file/d/1VDqku6t-QEwx3CEuBQMyBbGMyn6Bcwv7/view"
                    />
                <Eveniment
                    titlu="Capture the flag"
                    descriere="Acest concurs const?? ??n exploatarea unui sistem informatic vulnerabil (program, website, re??ea) ??n scopul ob??inerii unui ???flag??? (cod/fi??ier). Concursul va avea echipe de maxim 3 membri."
                    data="Duminic??, 14 Noiembrie"
                    poza={ctf}
                    deadline="S??mb??t??, 13 Noiembrie, ora 12:00"
                    ora="17:00"
                    formular="https://form.123formbuilder.com/6020303/form"
                    regulament="https://drive.google.com/file/d/11BlHJAcx2RzLWo86yeGq-UPkar7RqMC1/view"
                    />

            </Grid>

            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        Game Tournaments
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                     <Eveniment
                    titlu="Minecraft Building Contest"
                    descriere="??n Minecraft, juc??torii exploreaz?? o lume 3D, generat?? procedural, cu teren infinit, pot descoperi ??i extrage materii prime, instrumente ??i obiecte de artizanat, pot construi structuri sau lucr??ri de terasament."
                    data="Vineri, 12 Noiembrie"
                    poza={minecraft}
                    deadline="Joi, 11 Noiembrie"
                    regulament="https://drive.google.com/file/d/1uL36K9YOMX9b_SL2s2zKbEUISN3HomCq/view"
                    formular="https://form.123formbuilder.com/6020304/form"
                    // locul1={hs_1}
                    // locul2={hs_2}
                    // locul3={hs_3}
                    />
                    <Eveniment
                    titlu="League of Legends TFT"
                    descriere="Teamfight Tactics (TFT) este un joc de lupt?? autodezvoltat ??i publicat de Riot Games. Jocul este un spin-off al League of Legends ??i se bazeaz?? pe Dota Auto Chess, ??n care juc??torii concureaz?? online ??mpotriva altor ??apte adversari construind o echip?? care s?? fie ultimul ??n picioare."
                    data="S??mb??t??, 6 Noiembrie"
                    poza={lol_tft}
                    deadline="Miercuri, 3 Noiembrie"
                    regulament="https://drive.google.com/file/d/1CSB40fhQK8MpIj8Jg_-ev5XQeSJRf2Ba/view"
                    formular="https://form.123formbuilder.com/6020636/form"
                    // locul1={rl_1}
                    // locul2={rl_2}
                    // locul3={rl_3}
                    />
                   
                     <Eveniment
                    titlu="CS:GO"
                    descriere="Competi??ia de CS:GO din cadrul proiectului ITFest Timi??oara se organizeaz?? ??n regim online prin intermediul platformei Faceit. Echipa va fi alc??tuit?? din 5 membri, 2 rezerve (op??ional) ??i un antrenor (op??ional), dintre care unul va fi ales c??pitan de echip??."
                    data="S??mb??t??, 6 Noiembrie"
                    poza={csgo}
                    deadline="Mar??i, 2 Noiembrie"
                    regulament="https://drive.google.com/file/d/1OgIpp7lG5y9Ssd9SoR9hvVx21LpoPNmr/view"
                    formular="https://form.123formbuilder.com/6020306/form"
                    // locul1={cs_1}
                    // locul2={cs_2}
                    // locul3={cs_3}
                    />
                    <Eveniment
                    titlu="League of Legends"
                    descriere="Competi??ia de League of Legends se va desf????ura prin intermediul platformei Faceit ??n regim online. Echipe de c??te cinci juc??tori ??i dou?? rezerve (op??ional) ce vor concura pentru c??teva premii fascinante oferite de echipa ITFest Timi??oara!"
                    data="Duminic??, 7 Noiembrie"
                    poza={lol}
                    deadline="Mar??i, 2 Noiembrie"
                    regulament="https://drive.google.com/file/d/1qQmYiOcxVbj2s6qBQLjOrKu2ayS7qHmF/view"
                    formular="https://form.123formbuilder.com/6020307/form"
                    // locul1={lol_1}
                    // locul2={lol_2}
                    // locul3={lol_3}
                    />

                   
                </Grid>

                <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                <Grid item md={12}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        component="h3"
                        style={{
                        marginTop: 30,
                        borderBottom: "1px solid rgba(120, 120, 120, 0.25)",
                        marginBottom: 18,
                        paddingBottom: 6
                    }}>
                        Comic Con
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={10}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="center">
                    <Eveniment
                    titlu="Comic Book Graphic Design"
                    descriere="Anita Rus este creatoarea pove??tii Sci-Fi ,,Sfidator???, poveste ??n care sunt prezentate ??ntr-o perspectiv?? diferit?? dou?? lumi interdimensionale, bazate pe supersti??ii.
                    An, personajul principal al pove??tii, este complex, cu tr??iri ??i conflicte intense care ajunge s?? se cunoasc?? ??i s?? ????i descopere umanitatea."
                    data = "Vineri, 12 Noiembrie"
                    ora = "19:00"
                    poza={anitaRus}
                    invitat = "Anita Rus"
                    deadline="Joi, 11 Noiembrie"
                    formular="https://form.123formbuilder.com/6027329/form"
                    />
                    <Eveniment
                    titlu="Pe urmele lui Han Solo - - Aventura dezvolt??rii unui simulator spa??ial"
                    descriere="Dream Builder Studios este un dezvoltator independent de jocuri creat de veterani ai industriei locale. Studioul este specializat ??n simulatoare spa??iale, dar de??ine o experien???? larg?? ??n toate tipurile de jocuri, at??t pe dispozitive mobile, c??t ??u pe PC-uri ??i console."
                    data = "Vineri, 12 Noiembrie"
                    ora = "20:30"
                    poza={dreamBuilder}
                    invitat="cei de la Dream Builder Studios"
                    deadline="Joi, 11 Noiembrie"
                    formular="https://form.123formbuilder.com/6029725/form"
                    />
                    <Eveniment
                    titlu="Aventurile ne??tiute ale lui Misu si Ionica"
                    descriere="Emy-Mirel Iva??c??, absolvent al Regiei de Film, este creatorul seriei animate M&I ??n cadrul platformei de YouTube.
                    Activitatea sa se axeaz?? pe domeniul filmului, av??nd o pasiune pentru scurtmetraje, ??i, totodat??, este creatorul filmului ,,Sunt extraterestru???."
                    data = "S??mb??t??, 13 Noiembrie"
                    ora = "16:00"
                    poza={misuIonica}
                    invitat="Emy-Mirel Iva??c??"
                    deadline="Vineri, 12 Noiembrie"
                    formular="https://form.123formbuilder.com/6027334/form"
                    />
                    <Eveniment
                    titlu="Concurs cosplay"
                    descriere="ITFest Timi??oara ????i ofer?? posibilitatea s?? dai fr??u imagina??iei tale ??n cadrul unui concurs de cosplay. 
                    Ideea de a te deghiza a devenit din ce ??n ce mai popular?? ??n lume. Astfel, cu c??t te identifici mai bine cu personajul, cu at??t este mai distractiv!"
                    data = "Duminic??, 14 Noiembrie"
                    poza={cosplay}
                    deadline="S??mb??t??, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027337/form"
                    regulament="https://drive.google.com/file/d/117P4-wz45SdcYH7fDHICdVQ6IPBOhr0W/view"
                    />
                    <Eveniment
                    titlu="Introducere ??n grafica 3D"
                    descriere="Alex Mese??an este instructor, consultant, generalist 3D, ??i, totodat??, a devenit Autodesk Certified Partner.
                    Este fondatorul Tridia, unde pred?? cursuri de grafic?? 3D prin intermediul programului Autodesk 3ds Max. Folosind propriul curriculum, ??nva???? cursan??ii cum s?? foloseasc?? software-ul de la zero ??i mai mult dec??t at??t, ??i ??nva???? s?? dob??ndeasc?? o afinitate pentru tot ceea ce presupune termenul de 3D."
                    data = "Duminic??, 14 Noiembrie"
                    ora = "12:00"
                    poza={tridia}
                    invitat="Alex Mese??an"
                    deadline="S??mb??t??, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027338/form"
                    />
                    <Eveniment
                    titlu="Anime Quizz"
                    descriere="Crezi c?? e??ti expert ??n anime? ??ncerca??i testul nostru de anime ??i vede??i dac?? pute??i ob??ine 100%. Joac?? acest test anime trivia ??i provoac??-te prin ??ntreb??ri variate despre ghicirea numelor anime-urilor prin imagini sau despre ghicirea personajelor. Doar fanii adev??ra??i trec acest test uimitor.
                    "
                    data = "Duminic??, 14 Noiembrie"
                    ora="15:00"
                    poza={animeQuizz}
                    deadline="S??mb??t??, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027343/form"
                    regulament="https://drive.google.com/file/d/1mLRef-24_sXTRJWC-vv4Rw18qLgYouFA/view"
                    />
                     <Eveniment
                    titlu="Comic Quest"
                    descriere="Majoritatea personajelor fictive Marvel opereaz?? ??ntr-o singur?? realitate cunoscut?? sub numele de Universul Marvel, majoritatea loca??iilor reflect??nd locuri din via??a real??.
                    DC Comics este un editor american de benzi desenate ??i unitatea emblematic?? a DC Entertainment, fiind una dintre cele mai mari ??i mai vechi companii americane de benzi desenate."
                    data = "Duminic??, 14 Noiembrie"
                    ora = "18:00"
                    poza={comicQuest}
                    deadline="S??mb??t??, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027347/form"
                    regulament="https://drive.google.com/file/d/1YAFNE3JkKXxPIRLrGarWzGUH0mRIbyJV/view"
                    />

                </Grid>
        </div>
    );
}
export default Evenimente;