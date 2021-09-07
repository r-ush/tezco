import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BadgeImage from "assets/badges.png";
import TezosNftRentImage from "assets/tezos_nft_rent.png";

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
      <div>
        <img src={BadgeImage} />
      </div>
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
