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
const in_sites_consulting = "https://itfest.osut.ro/media/events/InSites_consulting.jpg";
const vlogit = "https://itfest.osut.ro/media/events/vlogit.jpg";
const te_fac_programator = "https://itfest.osut.ro/media/events/te_fac_programator.jpg";
const wellcode = "https://itfest.osut.ro/media/events/trimbitas2021.png";
const daniel_cristea = "https://itfest.osut.ro/media/events/daniel_cristea.png";
const amber = "https://itfest.osut.ro/media/events/amber2021.png";
const spataru = "https://itfest.osut.ro/media/events/spataru2021.png";

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
                    titlu="Parcurs de informatician"
                    descriere="Adrian este informatician, cercetător cu experiență în Cloud Computing, învățare automată și blockchain. Este masterand în Inteligență Artificială și Calcul Distribuit. Principalele sale discipline didactice sunt: Programare (C/C++, Python, Java) și Structuri de date. Adrian a fost premiat la Conferința Blockchain Computing an Applications
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
                    titlu="BDS (Big Data and Security)"
                    descriere="La webinar te așteaptă doi programatori cu experiență de ani buni în IT, doi oameni trecuți prin câteva companii ce vor vorbi despre posibilitățile de carieră: Database, Embedded, Security ș.a.m.d. Vor povesti inclusiv despre experiența de creare de conținut pe canalul lor de Youtube. Cei doi speakeri au învățat totul de la zero de unii singuri și sunt gata să împărtășească, la o halbă, tot ce au învățat aceștia."
                    data="Joi, 4 Noiembrie"
                    poza={atos1}
                    ora="18:00"
                    deadline="Miercuri, 3 Noiembrie"
                    invitat="cei de la Atos"
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
                {/* <Eveniment
                    titlu="Roadmap for your tech trip"
                    descriere="Insites Consulting este o agenție de marketing internațională care vine în ajutorul brandurilor pentru a le promova la nivel local. Echipa agenției este formată din marketeri pasionați, cercetători inovativi și entuziaști în ale marketingului. Pentru a-și îndeplini misiunea, ei folosesc cele mai recente tehnologii din domeniul IT și reușesc să-și facă treaba pe măsură."
                    data="Luni, 9 Noiembrie"
                    poza={in_sites_consulting}
                    ora="18:00"
                    deadline="Sâmbătă, 7 Noiembrie"
                    invitat="cei de la Insites Consulting"
                    formular="http://www.123formbuilder.com/form-5687601/form"
                    />
                <Eveniment
                    titlu="Cum să începi o carieră în Web Design"
                    descriere="Daniel Cristea este UI Designer cu o experiență de 8 ani în domeniu, în tot acest timp adunând suficiente cunoștințe pentru a le da mai departe la rândul său. El a luat parte la multiple proiecte pentru companii de renume mondial, printre care se numără și MrPuffs, C2 Marketing, Synetik și altele. În cadrul workshopului, Daniel va împărtăși noile tendințe în materie de web design și va prezenta în pași cât mai simpli procesul de creare a unui site web."
                    data="Luni, 9 Noiembrie"
                    poza={daniel_cristea}
                    ora="19:30"
                    deadline="Sâmbătă, 7 Noiembrie"
                    invitat="Daniel Cristea"
                    formular="http://www.123formbuilder.com/form-5678341/form"
                    /> */}
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
                    titlu="League of Legends TFT"
                    descriere="Teamfight Tactics (TFT) este un joc de luptă autodezvoltat și publicat de Riot Games. Jocul este un spin-off al League of Legends și se bazează pe Dota Auto Chess, în care jucătorii concurează online împotriva altor șapte adversari construind o echipă care să fie ultimul în picioare."
                    // data="Vineri, 6 Noiembrie"
                    poza={lol_tft}
                    // deadline="Miercuri, 4 Noiembrie"
                    regulament="https://docs.google.com/document/d/1ihK6awCTKrapLbymu-FDmFPnMlIBfPMb/edit?usp=sharing&ouid=115523182243841837864&rtpof=true&sd=true"
                    formular="https://form.123formbuilder.com/6020636/form"
                    // locul1={rl_1}
                    // locul2={rl_2}
                    // locul3={rl_3}
                    />
                    <Eveniment
                    titlu="Minecraft Building Contest"
                    descriere="În Minecraft, jucătorii explorează o lume 3D, generată procedural, cu teren infinit, pot descoperi și extrage materii prime, instrumente și obiecte de artizanat, pot construi structuri sau lucrări de terasament."
                    // data="Vineri, 6 Noiembrie"
                    poza={minecraft}
                    // deadline="Miercuri, 4 Noiembrie"
                    regulament="https://docs.google.com/document/d/1Ru21cLO0BE4oemczmVA9Ks5Tdd8w5i3U/edit?usp=sharing&ouid=115523182243841837864&rtpof=true&sd=true"
                    formular="https://form.123formbuilder.com/6020304/form"
                    // locul1={hs_1}
                    // locul2={hs_2}
                    // locul3={hs_3}
                    />
                    <Eveniment
                    titlu="League of Legends"
                    descriere="Competiția de League of Legends se va desfăşura prin intermediul platformei Faceit în regim online. Echipe de câte cinci jucători și două rezerve (opțional) ce vor concura pentru câteva premii fascinante oferite de echipa ITFest Timișoara!"
                    // data="Sâmbătă, 7 Noiembrie"
                    poza={lol}
                    // deadline="Joi, 5 Noiembrie"
                    regulament="https://docs.google.com/document/d/1NZytf3i4EWg41Yc2TMvzK1tZ3vkJUWA6/edit?usp=sharing&ouid=115523182243841837864&rtpof=true&sd=true"
                    formular="https://form.123formbuilder.com/6020307/form"
                    // locul1={lol_1}
                    // locul2={lol_2}
                    // locul3={lol_3}
                    />

                    <Eveniment
                    titlu="CS:GO"
                    descriere="Competiția de CS:GO din cadrul proiectului ITFest Timișoara se organizează în regim online prin intermediul platformei Faceit. Echipa va fi alcătuită din 5 membri, 2 rezerve (opţional) și un antrenor (opțional), dintre care unul va fi ales căpitan de echipă."
                    // data="Duminică, 8 Noiembrie"
                    poza={csgo}
                    // deadline="Vineri, 6 Noiembrie"
                    regulament="https://docs.google.com/document/d/1J6DbAsYLtkkqMkvFlbtOOrxc5d-2mZLQ/edit?usp=sharing&ouid=115523182243841837864&rtpof=true&sd=true"
                    formular="https://form.123formbuilder.com/6020306/form"
                    // locul1={cs_1}
                    // locul2={cs_2}
                    // locul3={cs_3}
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