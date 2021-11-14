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
const lol_2 = "Tractoriștii";
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
                        Workshopuri și conferințe - Online
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
                    descriere="Fondatorul WellCode, Petru Trîmbițaș a lucrat atât la Facebook, cât și la Google. Fiind un expert în mentorat și programare, el se folosește o metodologia care nu decât că învață cursanții abilitățile practice necesare, dar și cum să gândească în cod, cum să aibă o gândire critică și cum să conceapă strategii de rezolvare a problemelor.
                    "
                    data="Luni, 1 Noiembrie"
                    poza={wellcode}
                    ora="18:00"
                    deadline="Luni, 1 Noiembrie, ora 12:00 "
                    invitat="Raul Trîmbițaș"
                    formular="https://form.123formbuilder.com/6020314/form"
                    />
                <Eveniment
                    titlu="Așteptări vs realitate : Călătoria unui programator"
                    descriere="Adrian este informatician, cercetător cu experiență în Cloud Computing, învățare automată și blockchain. Este masterand în Inteligență Artificială și Calcul Distribuit. Principalele sale discipline didactice sunt: Programare (C/C++, Python, Java) și Structuri de date. Adrian a fost premiat la Conferința Blockchain Computing an Applications.
                    "
                    data="Marți, 2 Noiembrie"
                    poza={spataru}
                    ora="18:00"
                    deadline="Luni, 1 Noiembrie"
                    invitat="Adrian Spătaru"
                    formular="https://form.123formbuilder.com/6020317/form"
                    />
                <Eveniment
                    titlu="The Unlimited World of Gaming - Are you in?"
                    descriere="Amber este o agentie globală de Game Development care acoperă  toate disciplinele necesare dezvoltării unui joc: Arta, Design, Engineering, Project Management, Business Intelligence, Production, Quality Assurance. Conceptul companiei a fost inspirat de deceniile de experiență în industrie a conducerii sale.
                    "
                    data="Miercuri, 3 Noiembrie"
                    poza={amber}
                    ora="18:00"
                    deadline="Marți, 2 Noiembrie"
                    invitat="cei de la Amber"
                    formular="https://form.123formbuilder.com/6020321/form"
                    />
                <Eveniment
                    titlu="The Power of PHP - LBDash"
                    descriere="Atos este lider global în domeniul digital securizat și decarbonizat, cu o gamă de soluții digitale de top pe piață, împreună cu servicii de consultanță, oferte de securitate digitală și decarbonizare; o abordare de parteneriat end-to-end.
                    Un pionier net-zero în servicii și produse de decarbonizare, angajamentul față de viitor se extinde la neutralitatea emisiilor de carbon pentru organizație, precum și pentru clienții și partenerii lor."
                    data="Joi, 4 Noiembrie"
                    poza={atos1}
                    ora="18:00"
                    deadline="Miercuri, 3 Noiembrie"
                    invitat="Dan Alexandru Budai, Lead of Sub Practice DBA-AMS, Robert Drobota, Technical Lead"
                    formular="https://form.123formbuilder.com/6020323/form"
                    />
                <Eveniment
                    titlu="Cum funcționează piața IT în România"
                    descriere="Cristian Dascălu este freelancer, antreprenor și vlogger. A refuzat ofertele a numeroase companii pentru a rămâne în România.
                    Este co-fondatorul Libertate.init(), astfel, ajutând sute de programatori în a își începe cariera în freelancing, a fondat și co-fondat mai multe afaceri și proiecte majore care vizează dezvoltarea startup-urilor.
                    "
                    data="Vineri, 5 Noiembrie"
                    poza={libertate_init}
                    ora="16:00"
                    deadline="Joi, 4 Noiembrie"
                    invitat="Cristian Dascălu"
                    formular="https://form.123formbuilder.com/6020325/form"
                    />
                <Eveniment
                    titlu="Percepție în Autonomous Driving: direcții și provocări"
                    descriere="Continental este o companie cu 150 de ani de experiență care dezvoltă tehnologii și servicii inovatoare pentru mobilitatea sustenabilă și interconectată a oamenilor şi a bunurilor acestora. Compania cu profil tehnologic oferă soluții sigure, eficiente, inteligente și accesibile pentru autovehicule, mașini, trafic și transport.
                    "
                    data="Luni, 8 Noiembrie"
                    poza={continental}
                    ora="18:00"
                    deadline="Duminică, 7 Noiembrie"
                    invitat="cei de la Continental"
                    formular="https://form.123formbuilder.com/6022894/form"
                    />
                <Eveniment
                    titlu="Getting started with the freshly baked .Net 6 minimal API"
                    descriere="Cea mai nouă versiune de .NET va deveni disponibilă la nivel global în câteva săptămâni, oferind o versiune complet renovată a suportului API-ului web, numită API minimală. Dacă sunteți familiarizat cu express.js, cu siguranță veți vedea o mulțime de lucruri familiare acolo. Dar merită cu adevărat noul API minim din .NET 6? Alăturați-vă cu mine în această versiune hands on, deoarece vom începe cu un nou proiect API web, încercând să profităm de noul API minim. Făcând acest lucru, probabil că vom înțelege din start care sunt avantajele și dezavantajele API-ului minim și, de asemenea, vom încerca să abordăm un nou model arhitectural pentru dezvoltarea API-urilor web pe .NET."
                    data="Luni, 8 Noiembrie"
                    poza={gdsc}
                    ora="19:30"
                    deadline="Duminică, 7 Noiembrie"
                    invitat="Dan Pătrașcu"
                    formular="https://form.123formbuilder.com/6028256/form"
                    />
                <Eveniment
                    titlu="How to catch the bad guys using Azure Sentinel"
                    descriere="Microsoft Azure Sentinel este un SIEM nativ în cloud, cu AI avansat și analize de securitate care vă ajută să detectați, să preveniți și să răspundeți la amenințările necunoscute și comportamentul anormal al utilizatorilor compromiși, cât și să acționați asupra amenințărilor din interior."
                    data="Marți, 9 Noiembrie"
                    poza={atos1}
                    ora="18:00"
                    deadline="Luni, 8 Noiembrie"
                    invitat="Dorin Barboiu aka Dodo, Cloud Security Architect"
                    formular="https://form.123formbuilder.com/6022875/form"
                    />
                 <Eveniment
                    titlu="Educația și cariera în era digitală "
                    descriere="Academie de cursuri de formare în programare, cu o experiență dovedită în domeniul IT, de la ingineri, masteranzi în IT, doctoranzi, cercetători în diverse ramuri ale Computer Science, toți profesorii de la Te Fac Programator activează pe diverse laterale ale industriei. Misiunea lor este educarea populației pentru era digitală.                    "
                    data="Marți, 9 Noiembrie"
                    poza={teFacProgramator}
                    ora="19:30"
                    deadline="Luni, 8 Noiembrie"
                    invitat="Laur Neagu"
                    formular="https://form.123formbuilder.com/6022877/form"
                    />
                <Eveniment
                    titlu="Impactul tehnologiei în societate și economie"
                    descriere="Cristian Cira este lector în cadrul Universității de Vest din Timișoara și predă Computer Architecture. A fost unul dintre autorii lucrării  ,,Identificarea oportunităților de memorie non-volatilă adresabilă de octeți în aplicații științifice la scară extremă” și, totodată, a dezvoltat o pasiune pentru domeniul ,,blockchain”."
                    data="Miercuri, 10 Noiembrie"
                    poza={cira}
                    ora="19:30"
                    deadline="Marți, 9 Noiembrie"
                    invitat="Cristian Cira"
                    formular="https://form.123formbuilder.com/6022869/form"
                    />
                <Eveniment
                    titlu="From Zero to a Full-Stack Hero (at least Robin if not Batman)"
                    descriere="Echipa msg România este formată din oameni cu pasiune pentru tehnologie care, prin activitatea lor, sprijină implementarea de soluții avansate pentru inovare digitală, dezvoltarea de experți tehnici de generații, a căror eforturi sunt coordonate spre accelerarea transformării digitale ale unor companii angajate în crearea unui viitor mai bun.
                    Sunt pionieri digitali într-o lume definită prin informații."
                    data="Joi, 11 Noiembrie"
                    poza={msgSystems}
                    ora="18:00"
                    deadline="Miercuri, 10 Noiembrie"
                    invitat="cei de la Msg Systems"
                    formular="https://form.123formbuilder.com/6027183/form"
                    />
                <Eveniment
                    titlu="The Future X Networks"
                    descriere="Nokia România are unul dintre cele mai cuprinzătoare portofolii din industrie și o experiență pe măsură în Rețele Mobile, Rețele Fixe, Servicii Globale, Software Nokia, Rețele IP/Optice și Soluții de Vânzări. 
                    Inovează viitorul tehnologiilor wireless prin contribuția lor la 5G. Creează următoarea generație de software pentru definirea rețelelor, funcții de rețea virtualizate, analiză predictivă și gestionează peste 250.000 de elemente de rețea în întreaga lume."
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
                    descriere="Savnet este un centru de training care și-a luat angajamentul să ofere cursanților și partenerilor lor cea mai bună experiență educațională. Creează soluții prin care înțelegerea tehnologiilor IT&C a devenit plăcută și ușor de înțeles, iar prin comunicare, atenție la detalii și analizarea rezultatelor, a căutat constant să fie cel mai bun."
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
                    descriere="Hackathonul organizat de noi este un concurs de programare cu o durată de 12 de ore pe o temă stabilită de echipa ITFest Timișoara. Participanții formează echipe și concurează, urmând a fi premiat cel mai inovativ produs și creatorii ei."
                    data="Sâmbătă, 13 Noiembrie"
                    poza={hackathon}
                    deadline="Vineri, 12 Noiembrie"
                    ora="9:00"
                    formular="https://form.123formbuilder.com/6020310/form"
                    regulament="https://drive.google.com/file/d/1FyRAegjWdzHIsjAHvk5t9hVXqVtCczqL/view"
                    />
                <Eveniment
                    titlu="Concurs de algoritmică"
                    descriere="Acest concurs este o competiție desemnată studenților, dar și elevilor din liceu, ce își propune să testeze și să recompenseze agilitatea și inventivitatea de a aplica diferiți algoritmi în probleme de actualitate."
                    data="Duminică, 14 Noiembrie"
                    poza={algoritmica}
                    deadline="Sâmbătă, 13 Noiembrie, ora 12:00"
                    ora="9:00"
                    formular="https://form.123formbuilder.com/6020308/form"
                    regulament="https://drive.google.com/file/d/1VDqku6t-QEwx3CEuBQMyBbGMyn6Bcwv7/view"
                    />
                <Eveniment
                    titlu="Capture the flag"
                    descriere="Acest concurs constă în exploatarea unui sistem informatic vulnerabil (program, website, rețea) în scopul obținerii unui „flag” (cod/fișier). Concursul va avea echipe de maxim 3 membri."
                    data="Duminică, 14 Noiembrie"
                    poza={ctf}
                    deadline="Sâmbătă, 13 Noiembrie, ora 12:00"
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
                    descriere="În Minecraft, jucătorii explorează o lume 3D, generată procedural, cu teren infinit, pot descoperi și extrage materii prime, instrumente și obiecte de artizanat, pot construi structuri sau lucrări de terasament."
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
                    descriere="Teamfight Tactics (TFT) este un joc de luptă autodezvoltat și publicat de Riot Games. Jocul este un spin-off al League of Legends și se bazează pe Dota Auto Chess, în care jucătorii concurează online împotriva altor șapte adversari construind o echipă care să fie ultimul în picioare."
                    data="Sâmbătă, 6 Noiembrie"
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
                    descriere="Competiția de CS:GO din cadrul proiectului ITFest Timișoara se organizează în regim online prin intermediul platformei Faceit. Echipa va fi alcătuită din 5 membri, 2 rezerve (opţional) și un antrenor (opțional), dintre care unul va fi ales căpitan de echipă."
                    data="Sâmbătă, 6 Noiembrie"
                    poza={csgo}
                    deadline="Marți, 2 Noiembrie"
                    regulament="https://drive.google.com/file/d/1OgIpp7lG5y9Ssd9SoR9hvVx21LpoPNmr/view"
                    formular="https://form.123formbuilder.com/6020306/form"
                    // locul1={cs_1}
                    // locul2={cs_2}
                    // locul3={cs_3}
                    />
                    <Eveniment
                    titlu="League of Legends"
                    descriere="Competiția de League of Legends se va desfăşura prin intermediul platformei Faceit în regim online. Echipe de câte cinci jucători și două rezerve (opțional) ce vor concura pentru câteva premii fascinante oferite de echipa ITFest Timișoara!"
                    data="Duminică, 7 Noiembrie"
                    poza={lol}
                    deadline="Marți, 2 Noiembrie"
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
                    descriere="Anita Rus este creatoarea poveștii Sci-Fi ,,Sfidator”, poveste în care sunt prezentate într-o perspectivă diferită două lumi interdimensionale, bazate pe superstiții.
                    An, personajul principal al poveștii, este complex, cu trăiri și conflicte intense care ajunge să se cunoască și să își descopere umanitatea."
                    data = "Vineri, 12 Noiembrie"
                    ora = "19:00"
                    poza={anitaRus}
                    invitat = "Anita Rus"
                    deadline="Joi, 11 Noiembrie"
                    formular="https://form.123formbuilder.com/6027329/form"
                    />
                    <Eveniment
                    titlu="Pe urmele lui Han Solo - - Aventura dezvoltării unui simulator spațial"
                    descriere="Dream Builder Studios este un dezvoltator independent de jocuri creat de veterani ai industriei locale. Studioul este specializat în simulatoare spațiale, dar deține o experiență largă în toate tipurile de jocuri, atât pe dispozitive mobile, cât șu pe PC-uri și console."
                    data = "Vineri, 12 Noiembrie"
                    ora = "20:30"
                    poza={dreamBuilder}
                    invitat="cei de la Dream Builder Studios"
                    deadline="Joi, 11 Noiembrie"
                    formular="https://form.123formbuilder.com/6029725/form"
                    />
                    <Eveniment
                    titlu="Aventurile neștiute ale lui Misu si Ionica"
                    descriere="Emy-Mirel Ivașcă, absolvent al Regiei de Film, este creatorul seriei animate M&I în cadrul platformei de YouTube.
                    Activitatea sa se axează pe domeniul filmului, având o pasiune pentru scurtmetraje, și, totodată, este creatorul filmului ,,Sunt extraterestru”."
                    data = "Sâmbătă, 13 Noiembrie"
                    ora = "16:00"
                    poza={misuIonica}
                    invitat="Emy-Mirel Ivașcă"
                    deadline="Vineri, 12 Noiembrie"
                    formular="https://form.123formbuilder.com/6027334/form"
                    />
                    <Eveniment
                    titlu="Concurs cosplay"
                    descriere="ITFest Timișoara îți oferă posibilitatea să dai frâu imaginației tale în cadrul unui concurs de cosplay. 
                    Ideea de a te deghiza a devenit din ce în ce mai populară în lume. Astfel, cu cât te identifici mai bine cu personajul, cu atât este mai distractiv!"
                    data = "Duminică, 14 Noiembrie"
                    poza={cosplay}
                    deadline="Sâmbătă, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027337/form"
                    regulament="https://drive.google.com/file/d/117P4-wz45SdcYH7fDHICdVQ6IPBOhr0W/view"
                    />
                    <Eveniment
                    titlu="Introducere în grafica 3D"
                    descriere="Alex Meseșan este instructor, consultant, generalist 3D, și, totodată, a devenit Autodesk Certified Partner.
                    Este fondatorul Tridia, unde predă cursuri de grafică 3D prin intermediul programului Autodesk 3ds Max. Folosind propriul curriculum, învață cursanții cum să folosească software-ul de la zero și mai mult decât atât, îi învață să dobândească o afinitate pentru tot ceea ce presupune termenul de 3D."
                    data = "Duminică, 14 Noiembrie"
                    ora = "12:00"
                    poza={tridia}
                    invitat="Alex Meseșan"
                    deadline="Sâmbătă, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027338/form"
                    />
                    <Eveniment
                    titlu="Anime Quizz"
                    descriere="Crezi că ești expert în anime? Încercați testul nostru de anime și vedeți dacă puteți obține 100%. Joacă acest test anime trivia și provoacă-te prin întrebări variate despre ghicirea numelor anime-urilor prin imagini sau despre ghicirea personajelor. Doar fanii adevărați trec acest test uimitor.
                    "
                    data = "Duminică, 14 Noiembrie"
                    ora="15:00"
                    poza={animeQuizz}
                    deadline="Sâmbătă, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027343/form"
                    regulament="https://drive.google.com/file/d/1mLRef-24_sXTRJWC-vv4Rw18qLgYouFA/view"
                    />
                     <Eveniment
                    titlu="Comic Quest"
                    descriere="Majoritatea personajelor fictive Marvel operează într-o singură realitate cunoscută sub numele de Universul Marvel, majoritatea locațiilor reflectând locuri din viața reală.
                    DC Comics este un editor american de benzi desenate și unitatea emblematică a DC Entertainment, fiind una dintre cele mai mari și mai vechi companii americane de benzi desenate."
                    data = "Duminică, 14 Noiembrie"
                    ora = "18:00"
                    poza={comicQuest}
                    deadline="Sâmbătă, 13 Noiembrie"
                    formular="https://form.123formbuilder.com/6027347/form"
                    regulament="https://drive.google.com/file/d/1YAFNE3JkKXxPIRLrGarWzGUH0mRIbyJV/view"
                    />

                </Grid>
        </div>
    );
}
export default Evenimente;