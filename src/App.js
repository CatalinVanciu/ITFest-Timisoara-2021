import React, { useState, useEffect, useRef } from 'react'
import NET from './vanta/src/vanta.net'
import './App.css';
import Header from './components/Header';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/grid';
import {AppBar, Typography,Container,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Evenimente from './components/Evenimente';
import Echipa from './components/Echipa';
import Footer from './components/Footer';
import Hidden from '@material-ui/core/Hidden';

let theme = createMuiTheme({
  overrides: {
    MuiCardContent: {
      root: {
        marginTop:0,
        "&:first-child": {
          paddingTop: 0,
       },
      },
    },
  },
  palette: {
    primary: {
      main: "#0C2948"
    },
  },
  typography: {
    fontFamily:"Roboto",
    h1:{
      fontFamily: 'Lora',
    },
    h2:{
      fontFamily: 'Lora',
    },
    h3:{
      fontFamily: 'Lora',
    },
    h4:{
      fontFamily: 'Lora',
    },
    h5:{
      fontFamily: 'Lora',
    },
   
    body1:{
      fontSize: "1.07rem",
      lineHeight: 1.60,
    },
   
  }

});
theme = responsiveFontSizes(theme);

 const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null);
  useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    
 
  }, [vantaEffect])



  const Spacer = ()=>(<div style={{margin:"45px auto"}}></div>);
  return (<>
         <ThemeProvider theme={theme} >

  <Paper>
  <Header />
  
  <div ref={myRef} id="wrapper" style={{overflow:"hidden"}}>
   <div class="wrapper">
  <h1 class="glitch">ITFEST</h1>
</div>

  </div>
 
  <div id="continut">
  <Container maxWidth="lg">
    <Grid
    container
    spacing={10}
    direction="row"
    justify="space-between"
    alignItems="flex-start"
    alignContent="center">
      <Grid item xs={12} md={8}>
      <Typography
      color="textPrimary"
      variant="h3"
      component="h1"
      gutterbottom
      style={{marginBottom:15,paddingTop:60}}
      id="despre"
      >
        Despre ITFest Timi??oara
      </Typography>
      <Typography
      color="textSecondary"
      variant="body1"
      component="p">
        ITFest Timi??oara este unul dintre proiectele de succes ale Organiza??iei 
        Studen??ilor din Universitatea de Vest din Timi??oara (OSUT), adres??ndu-se ??n 
        special pasiona??ilor de tehnologii din IT ??i jocuri ??n re??ea. 
        <br /><br />
        {/* <Button color="primary" variant="contained">??nscrie-te <ArrowRightAltIcon /></Button> */}
      </Typography>
      <Typography
      color="textSecondary"
      variant="body1"
      component="p">
        Anul acesta cea de-a XVI-a edi??ie se desf????oar?? ??n regim exclusiv online ??n perioada 1 - 14 noiembrie. 
        Echipa ITFest Timi??oara preg??te??te at??t conferin??e ??i workshopuri pe subiectele de tendin???? ale comunit????ii IT, 
        c??t ??i concursuri ??i Game Tournaments cu premii pe m??sur??. Mai mult dec??t at??t, se organizeaz?? ??i un concurs 
        de cosplay pentru fanii produc??iilor animate. 
        <br /><br />
        {/* <Button color="primary" variant="contained">??nscrie-te <ArrowRightAltIcon /></Button> */}
      </Typography>
      </Grid>
      <Grid item md={4} xs={false}></Grid>
      </Grid>
   <Spacer />
      <Evenimente />
      <Spacer />
      <Echipa />
      <Spacer />
      <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
        <Grid item xs={12}>
          <Typography
              color="textPrimary"
              variant="h3"
              component="h1"
              id="parteneri"
              style={{
              marginTop: 15,
              marginBottom:30,
              paddingTop: 60,
              textAlign:"center"
          }}>
              Parteneri 
          </Typography>
        </Grid>

        <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
          <Grid item xs={12} md={12} className="parteneri" style={{marginBottom: "40px"}}>
              <a href="http://www.cjtimis.ro/" target="_blank">
                <img src="https://itfest.osut.ro/media/Parteneri/Black_CJT.png" style={{height:"90px",margin:"auto",display:"block"}} alt="CJTimi??" />
              </a>
          </Grid>
        </Grid>

        <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://www.uvt.ro/ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/uvt2021.png" style={{height:"80px",margin:"auto",display:"block"}} alt="uvt" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://fitt.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/fitt2021.png" style={{height:"80px",margin:"auto",display:"block"}} alt="fitt" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "80px"}}>
              <a href="https://developers.google.com/community/gdsc" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/gdsc.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://atos.net/ro/romania" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/aatos2021.png" style={{height:"80px", margin:"auto",display:"block"}} alt="atos" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://www.continental.com/ro-ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/conti2021.png" style={{height:"80px",margin:"auto",display:"block"}} alt="unlock games" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://www.nokia.com/about-us/careers/student-and-graduate-opportunities/opportunities-for-students-in-romania/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/nokiapart2021_8nov.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://amber.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/aamber2021.png" style={{height:"80px", margin:"auto",display:"block"}} alt="amber" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://wellcode.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/wellcode2021.png" style={{height:"80px", margin:"auto",display:"block"}} alt="wellcode" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://www.facebook.com/pulsaresportsRO" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/pulsar2021.png" style={{height:"80px", margin:"auto",display:"block"}} alt="libertate in it" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px"}}>
              <a href="https://libertateinit.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/libertateit2021.png" style={{height:"80px", margin:"auto",display:"block"}} alt="libertate in it" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px",marginTop:"35px"}}>
              <a href="https://atos.net/ro/romania" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/misuionica.png" style={{height:"80px",margin:"auto",display:"block"}} alt="atos" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px",marginTop:"35px"}}>
              <a href="" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/lvr.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "40px",marginTop:"35px"}}>
              <a href="https://www.cognizantsoftvision.com/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/csoftvision2021png.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "80px",marginTop:"35px"}}>
              <a href="https://www.msg-systems.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/msg.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "80px",marginTop:"35px"}}>
              <a href="https://savnet.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/savnet.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "80px",marginTop:"35px"}}>
              <a href="https://savnet.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/tfp.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "80px",marginTop:"35px"}}>
              <a href="" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/sigla.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
          <Grid item xs={6} md={4} style={{marginBottom: "80px",marginTop:"35px"}}>
              <a href="" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/tridia.png" style={{height:"80px",margin:"auto",display:"block"}} alt="books express" />
              </a>
          </Grid>
        </Grid>


            {/* <Grid item xs={6} md={2} >
            <a href="https://savnet.ro/" style={{marginBottom: "20px"}} target="_blank">
              <img src="https://itfest.osut.ro/media/events/logo-savnet.png" style={{height:"60px",margin:"auto",display:"block",}} alt="savnet" />
            </a>
            </Grid> */}
            <Grid item xs={6} md={2} style={{marginBottom: "20px"}}>
            {/* <a href="https://loolish.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/loolish-85x85-blue.png" style={{height:"80px",margin:"auto",display:"block"}} alt="loolish" />
            </a> */}
            </Grid>
            {/* <Grid item xs={6} md={2}>
              <a href="https://mypctm.ro/" style={{marginBottom: "20px"}} target="_blank">
                <img src="https://itfest.osut.ro/media/Parteneri/logo-mypctm.png" style={{height:"80px",margin:"auto",display:"block"}} alt="mypctm" />
              </a>
            </Grid>
            <Grid item xs={6} md={2}>
            <a href="https://amberstudio.com/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/amber-logo.png" style={{height:"80px",margin:"auto",display:"block"}} alt="amber" />
            </a>
            </Grid>
            <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
              <a href="https://www.hackthezone.com/" target="_blank">
                <img src="https://itfest.osut.ro/media/Parteneri/logo-htz-NOU-2020.png" style={{height:"80px",margin:"auto",display:"block"}} alt="CJTimi??" />
              </a>
            </Grid>
            <Grid item xs={6} md={2} style={{marginBottom: "20px"}}>
            <a href="https://www.youtube.com/channel/UCpXQ05JUR6pGwc2AmhhF1Eg" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/daniel_cristea_logo.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="Daniel Cristea" />
            </a>
          </Grid> */}
        </Grid>

        
        <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
          {/* <Grid item xs={6} md={2}>
            <a href="https://www.youtube.com/channel/UCanacfH1MPBLqYiAD2WOhyQ" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/drinkit.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="DrinkIT" />
            </a>
          </Grid>
          <Grid item xs={6} md={2} style={{marginBottom: "20px"}}>
            <a href="https://libertateinit.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/libertateinit.png" style={{height:"80px",margin:"auto",display:"block"}} alt="Libertate Init" />
            </a>
          </Grid>
          <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
            <a href="https://insites-consulting.com/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/insites consulting.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="InSites Consulting" />
            </a>
          </Grid>
          <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
            <a href="https://te-fac-programator.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/TFP-logo.jpg" style={{height:"80px",margin:"auto",display:"block"}} alt="Te Fac Programator" />
            </a>
          </Grid>
          <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
            <a href="https://www.youtube.com/c/VlogdeIT/featured" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/vlogit-logo.png" style={{height:"80px",margin:"auto",display:"block"}} alt="Vlogit" />
            </a>
          </Grid>
          <Grid item xs={6} md={2} className="parteneri" style={{marginBottom: "20px"}}>
            <a href="https://ramonnastase.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/ramonastase-logo.jpg" style={{height:"90px",margin:"auto",display:"block"}} alt="Ramon Nastase" />
            </a>
          </Grid> */}

          <Grid item xs={12}>
            <Typography
                color="textPrimary"
                variant="h3"
                component="h1"
                id="parteneri"
                style={{
                marginTop: 15,
                marginBottom:30,
                paddingTop: 60,
                textAlign:"center"
            }}>
                Parteneri media
            </Typography>
          </Grid>
        </Grid>

        <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="center">
          <Grid item xs={12} md={4} className="parteneri" style={{marginBottom: "40px"}}>
              <a href="https://topminds.ro/" target="_blank">
                <img src="https://itfest.osut.ro/media/Parteneri/topminds2021.png" style={{height:"80px",margin:"auto",display:"block"}} alt="liga ac" />
              </a>
          </Grid>
          <Grid item xs={12} md={4} style={{marginBottom: "40px"}}>
              <a href="https://consiliulelevilor.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/logo-cne.png" style={{height:"80px",margin:"auto",display:"block"}} alt="consiliulelevilor" />
              </a>
          </Grid>
          <Grid item xs={12} md={4} style={{marginBottom: "40px"}}>
              <a href="https://www.anosr.ro/" target="_blank">
              <img src="https://itfest.osut.ro/media/Parteneri/anosr2021.png" style={{height:"80px", margin:"auto",display:"block"}} alt="anosr" />
              </a>
          </Grid>
         
        
        </Grid>

          </Container>
          <Footer />
    
  </div>
  </Paper>
  </ThemeProvider>
  </>
  );
}
export default App;