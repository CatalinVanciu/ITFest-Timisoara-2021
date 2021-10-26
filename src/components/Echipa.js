import React from 'react';
import MembruEchipa from './MembruEchipa';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography, Container} from "@material-ui/core";

const andreea = "https://itfest.osut.ro/media/team/andreea1.jpg";
const adelina = "https://itfest.osut.ro/media/team/adelina.png";
const alexandra = "https://itfest.osut.ro/media/team/alexandra.png";
const oana = "https://itfest.osut.ro/media/team/oana.png";
const catalin = "https://itfest.osut.ro/media/team/catalin.png"
const andrei = "https://itfest.osut.ro/media/team/andrei.png";
const neli = "https://itfest.osut.ro/media/team/neli.png";
const denisa = "https://itfest.osut.ro/media/team/denisa.png";
const mihai = "https://itfest.osut.ro/media/team/mihai.png";
const albert = "https://itfest.osut.ro/media/team/albert.png"

const Echipa = () => {
    return (
        <div id="echipa">
            <Grid
                container
                spacing={12}
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
                        marginTop: 65,
                        marginBottom:30
                    }}>
                        Echipa
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
                <MembruEchipa echipa
                    titlu="Cătălin Vanciu"
                    descriere="Coordonator General"
                    mail="catalin.vanciu00@e-uvt.ro"
                    poza={catalin}
                    //telefon="0787-570-584"
                    />
              
                <MembruEchipa echipa
                    titlu="Alexandra Sacadat"
                    descriere="Responsabil Fundraising"
                    mail="alexandra.sacadat02@e-uvt.ro"
                    poza={alexandra}
                    />
                <MembruEchipa echipa
                    titlu="Denisa Semen"
                    descriere="Responsabil Public Relations"
                    mail="denisa.semen01@e-uvt.ro"
                    poza={denisa}
                    />
                <MembruEchipa echipa
                    titlu="Andrei Dălinesc"
                    descriere="Responsabil Concursuri"
                    mail="andrei.dalinesc01@e-uvt.ro"
                    poza={andrei}
                    />
                <MembruEchipa echipa
                    titlu="Oana Radu"
                    descriere="Responsabil Comic Con"
                    mail="oana.radu02@e-uvt.ro"
                    poza={oana}
                    />
                <MembruEchipa echipa
                    titlu="Mihai Budurean"
                    descriere="Responsabil Imagine"
                    mail="marius.budurean01@e-uvt.ro"
                    poza={mihai}
                    />
                {/* <MembruEchipa echipa
                    titlu="Adela Diana Dînșorean"
                    descriere="Responsabil Task Management"
                    mail="adela.dinsorean00@e-uvt.ro"
                    poza={adela}
                    /> */}
                <MembruEchipa echipa
                    titlu="Adelina Anescu"
                    descriere="Responsabil Conferințe și Workshopuri"
                    mail="adelina.anescu01@e-uvt.ro"
                    poza={adelina}
                    />
                <MembruEchipa echipa
                    titlu="Albert Popescu"
                    descriere="Responsabil Game Tournaments"
                    mail="albert.popescu01@e-uvt.ro"
                    poza={albert}
                    />
                <MembruEchipa echipa
                    titlu="Nelea Angheleanu"
                    descriere="Vicepreședinte Organizare Internă și Proiecte OSUT"
                    mail="nelea@osut.ro"
                    poza={neli}
                    />
                <MembruEchipa echipa
                    titlu="Andreea Argeșeanu"
                    descriere="Președinte OSUT"
                    mail="andreea.argeseanu@osut.ro"
                    poza={andreea}
                   // telefon="0746-036-096"
                    />

            </Grid>
        </div>
    );
}
export default Echipa;