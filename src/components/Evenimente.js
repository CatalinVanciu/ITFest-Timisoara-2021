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

// Concursuri
const hackathon = "https://itfest.osut.ro/media/events/hackathon.png";
const algoritmica = "https://itfest.osut.ro/media/events/algo.png";
const ctf = "https://itfest.osut.ro/media/events/ctf_small.png";
const lol_tft = "https://itfest.osut.ro/media/events/LOL_TFT.png";
const minecraft = "https://itfest.osut.ro/media/events/minecraft.jpg";
const lol = "https://itfest.osut.ro/media/events/LOL.jpg";
const board_games = "https://itfest.osut.ro/media/events/boardsgames_small.png";
const csgo = "https://itfest.osut.ro/media/events/CSGO_small.png";

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
                    deadline="Duminica, 31 Octombie"
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
                    ora="18:00"
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
                    //ora="18:00"
                    deadline="Duminică, 7 Noiembrie"
                    invitat="cei de la Continental"
                    formular="https://form.123formbuilder.com/6022894/form"
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
                    titlu="Impactul tehnologiei in societate si economie"
                    descriere="Cristian Cira este lector în cadrul Universității de Vest din Timișoara și predă Computer Architecture. A fost unul dintre autorii lucrării  ,,Identificarea oportunităților de memorie non-volatilă adresabilă de octeți în aplicații științifice la scară extremă” și, totodată, a dezvoltat o pasiune pentru domeniul ,,blockchain”."
                    data="Miercuri, 10 Noiembrie"
                    poza={cira}
                    ora="18:00"
                    deadline="Marți, 9 Noiembrie"
                    invitat="Cristian Cira"
                    formular="https://form.123formbuilder.com/6022869/form"
                    />
                <Eveniment
                    titlu="What about Twelve Factor Apps?"
                    descriere="SoftVision este o companie de outsourcing în domeniul dezvoltării software din România. Creează produse și soluții digitale de impact end to end care conectează mărcile cu clienții, oferind inovație durabilă, agilitate și o conexiune care inspiră implicare și transformare în afaceri. Compania a lucrat cu unele dintre cele mai mari branduri de top din lume."
                    data="Vineri, 12 Noiembrie"
                    poza={softVision}
                    ora="18:00"
                    deadline="Joi, 11 Noiembrie"
                    invitat="Cristina Manitiu, Java Developer"
                    formular="https://form.123formbuilder.com/6022878/form"
                    />
                <Eveniment
                    titlu="Your Mind in the Network. A Journey beyound Imagination"
                    descriere="Savnet este un centru de training care și-a luat angajamentul să ofere cursanților și partenerilor lor cea mai bună experiență educațională. Creează soluții prin care ințelegerea tehnologiilor IT&C a devenit plăcută și ușor de înțeles, iar prin comunicare, atenție la detalii și analizarea rezultatelor, a căutat constant să fie cel mai bun."
                    data="Vineri, 12 Noiembrie"
                    poza={savu}
                    ora="19:30"
                    deadline="Joi, 11 Noiembrie"
                    invitat="Adrian Savu"
                    formular="https://form.123formbuilder.com/6022893/form"
                    />
                {/* { <Eveniment
                    titlu="Despre educație, vocație și modele în era digitală"
                    descriere="Academia Te Fac Programator este o inițiativă pornită de către câțiva tineri entuziaști în urmă cu un an și jumătate, cu o misiune ambițioasă: să formeze noi profesioniști în domeniul IT din România, cât și să educe societatea pentru provocările epocii digitale. Începută în urmă cu doar un an și jumătate, pragul academiei a fost trecut până în prezent de aproximativ 300 de persoane, iar cei mai buni studenți și-au găsit de lucru în domeniu. Programul de formare al academiei are o durată de un an, și presupune formarea în programare de la zero. "
                    data="Marți, 10 Noiembrie"
                    poza={te_fac_programator}
                    ora="19:00"
                    deadline="Duminică, 8 Noiembrie"
                    invitat="cei de la Te Fac Programator"
                    formular="http://www.123formbuilder.com/form-5687598/form"/>
                <Eveniment
                    titlu="Introducere în Game Development"
                    descriere="Amber este o agenție internațională bazată pe game development. Invitații - angajați în cadrul Amber - vor povesti despre industria de gaming și despre întregul proces de concepere a unui joc prin etape -  Production, Game Design și Arta. Urmează apoi o discuție amplă despre oportunitățile așteptate în domeniul ingineriei IT și zona de QA (Quality Assurance). Un alt aspect interesant pe care îl vor aborda se referă la cum te poți alătura industriei de gaming prin departamentul de Testare."
                    data="Miercuri, 11 Noiembrie"
                    poza={amber}
                    ora="18:00"
                    deadline="Luni, 9 Noiembrie"
                    invitat="cei de la Amber"
                    formular="http://www.123formbuilder.com/form-5687613/form"/>
                <Eveniment
                    titlu="Ethical Hacking"
                    descriere="HackTheZone, unic în Europa, nu doar în România, este rezultatul muncii asidue a întregii echipe HTZ, iar scopul lui este unul imens: de a contribui la crearea unei comunități a celor pasionați de Ethical Hacking. Deci se adresează doar celor din industria IT ce pot face față cu succes simulării unui atac cibernetic, interesați să-și dovedească abilitățile de pen-testing, scripting, crypto și social engineering."
                    data="Joi, 12 Noiembrie"
                    poza={hackthezone}
                    ora="18:00"
                    deadline="Marți, 10 Noiembrie"
                    invitat="cei de la HackTheZone"
                    formular="http://www.123formbuilder.com/form-5678344/form"/> */}
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
                    // data="Sâmbătă, 14 Noiembrie"
                    data = "Se va anunța în curând"
                    poza={hackathon}
                    // deadline="Vineri, 13 Noiembrie"
                    // ora="10:00"
                    //formular="https://form.123formbuilder.com/6020310/form"
                    />
                <Eveniment
                    titlu="Concurs de algoritmică"
                    descriere="Acest concurs este o competiție desemnată studenților, dar și elevilor din liceu, ce își propune să testeze și să recompenseze agilitatea și inventivitatea de a aplica diferiți algoritmi în probleme de actualitate."
                    // data="Vineri, 13 Noiembrie"
                    data = "Se va anunța în curând"
                    poza={algoritmica}
                    // deadline="Joi, 12 Noiembrie"
                    // ora="17:00"
                    //formular="http://www.123formbuilder.com/form-5678360/form"
                    />
                <Eveniment
                    titlu="Capture the flag"
                    descriere="Acest concurs constă în exploatarea unui sistem informatic vulnerabil (program, website, rețea) în scopul obținerii unui „flag” (cod/fișier). Concursul va avea echipe de maxim 3 membri."
                    // data="Duminică, 15 Noiembrie"
                    data = "Se va anunța în curând"
                    poza={ctf}
                    // deadline="Sâmbătă, 14 Noiembrie"
                    // ora="17:00"
                    //formular="http://www.123formbuilder.com/form-5688080/form"
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
                    data="Vineri, 5 Noiembrie"
                    poza={minecraft}
                    deadline="Miercuri, 3 Noiembrie"
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
                    deadline="Vineri, 31 Octombrie"
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
                    deadline="Joi, 31 Octombrie"
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
                    titlu="Comic Con"
                    descriere="Comic Con este o convenție cu un accent pregnant pe cărțile de benzi desenate și cultura acestora, în care fanii se adună pentru a întâlni creatori și experți în domeniu. 

                    Obiectivul Comic Con ITFest Timișoara este reprezentat de un concurs de cosplay pentru pasionații de cărți, seriale, filme, jocuri și alte creații ficționale."
                    // data="Duminică, 15 Noiembrie"
                    data = "Se va anunța în curând"
                    poza={comicCon}
                    // deadline="Marți, 10 Noiembrie"
                    //formular="http://www.123formbuilder.com/form-5678380/form"
                    />
                    {/* <Eveniment
                    titlu="Board Games"
                    descriere="O serie de jocuri de societate care îți oferă oportunitatea de a cunoaște oameni noi și de a te relaxa, distra în regim online. Printre jocurile incluse se enumeră: Among Us, Uno, Mafia Online și altele."
                    // data="Sâmbătă, 7 Noiembrie"
                    poza={board_games}
                    // deadline="Joi, 5 Noiembrie"
                    // formular="http://www.123formbuilder.com/form-5687186/itfest-2020-board-games"
                    />  */}

                </Grid>
        </div>
    );
}
export default Evenimente;