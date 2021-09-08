import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Prize from "assets/prize.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#287EF7",
    height: "100vh",
  },
  rr: {
    background: "#2e534b",
  },
});

export default function Ob2() {
  const classes = useStyles();
  const history = useHistory();

  const moveNext = () => {
    history.push("/ob3");
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
          <img src={Prize} />
        </Grid>
        <Grid item>
          <Box px={2}>
            <Typography
              variant="h1"
              style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 48 }}
            >
              Win rewards as NFTs
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
              We unite the NFT community in action to bring awareness to best
              practices for reducing the ecological footprint of NFTs along with
              gaining rewards.
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
