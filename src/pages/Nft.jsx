/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, LinearProgress } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BadgeImage from "assets/badges.png";
import TezosNftRentImage from "assets/tezos_nft_rent.png";
// import Bd1 from "assets/b1.png";
// import Bd2 from "assets/b2.png";
// import Bd3 from "assets/b3.png";
// import Bd4 from "assets/b4.png";
// import Bd5 from "assets/b5.png";
// import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#425A84",
    height: "100vh",
  },
  rr: {
    background: "#2e534b",
  },
  heading: {
    fontWeight: "bold",
  },
});

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function Nft() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={BadgeImage} />
      {/* <Carousel>
          <div>
            <img src={Bd1} height={50} width={50} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={Bd2} height={50} width={50} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={Bd3} height={50} width={50} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={Bd4} height={50} width={50} />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src={Bd5} height={50} width={50} />
            <p className="legend">Legend 5</p>
          </div>
        </Carousel>
       */}
      <Box alignItems="center" justifyContent="center" display="flex">
        <WhiteTextTypography style={{ fontWeight: "bold", fontSize: 24 }}>
          Level 1 User
        </WhiteTextTypography>
      </Box>
      <div>
        <Box mx={5} mt={2}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <WhiteTextTypography style={{ fontWeight: "bold", fontSize: 12 }}>
                Level 1
              </WhiteTextTypography>
            </Grid>
            <Grid item>
              <WhiteTextTypography style={{ fontWeight: "bold", fontSize: 12 }}>
                Level 2
              </WhiteTextTypography>
            </Grid>
          </Grid>
        </Box>
        <Box mx={10} mt={1}>
          <LinearProgress variant="determinate" value={20} color="secondary" />
        </Box>
      </div>
      <div>
        <Box mx={2} py={2}>
          <Accordion style={{ background: "#314365" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <WhiteTextTypography className={classes.heading}>
                What are NFTs?
              </WhiteTextTypography>
            </AccordionSummary>
            <AccordionDetails>
              <WhiteTextTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </WhiteTextTypography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#314365" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <WhiteTextTypography className={classes.heading}>
                How to earn badges?
              </WhiteTextTypography>
            </AccordionSummary>
            <AccordionDetails>
              <WhiteTextTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </WhiteTextTypography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#314365" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <WhiteTextTypography className={classes.heading}>
                What is Tezco's Mission?
              </WhiteTextTypography>
            </AccordionSummary>
            <AccordionDetails>
              <WhiteTextTypography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </WhiteTextTypography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </div>
      {/* <Box ml={2}>
        <WhiteTextTypography style={{ fontWeight: "bold", fontSize: 20 }}>
          NFTs For Exchange
        </WhiteTextTypography>
      </Box> */}

      <div>
        <Box alignItems="center" justifyContent="center" display="flex">
          <img src={TezosNftRentImage} />
        </Box>
      </div>
    </div>
  );
}
