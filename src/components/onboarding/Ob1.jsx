import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Sprout from "assets/sprout.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFC582",
    height: "100vh",
  },
  rr: {
    background: "#2e534b",
  },
});

export default function Ob1() {
  const classes = useStyles();
  const history = useHistory();

  const moveNext = () => {
    history.push("/ob2");
  };

  return (
    <div className={classes.root}>
      <Grid
        style={{ height: "100vh" }}
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <img src={Sprout} />
        </Grid>
        <Grid item>
          <Box px={2}>
            <Typography
              variant="h1"
              style={{ color: "#2E534B", fontWeight: 800, fontSize: 48 }}
            >
              Carbon Currency
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display="flex"
            justifyItems="center"
            alignItems="center"
            px={2}
            md={4}
          >
            <Typography variant="h6" style={{ color: "#FFFFFF", fontSize: 16 }}>
              Introducing all new green currency, ZCO tokens. Hence replacing
              the traditional money system as they serve as decentralized
              currency.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box px={2}>
            <Button
              onClick={moveNext}
              variant="contained"
              color="primary"
              style={{
                width: 250,
                padding: "14px 103px",
                borderRadius: "10px",
              }}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
