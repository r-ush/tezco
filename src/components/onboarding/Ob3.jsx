import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Prize from "assets/bulb.png";
import { useHistory } from "react-router-dom";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#252525",
    height: "100vh",
  },
  rr: {
    background: "#2e534b",
  },
});

export default function Ob3() {
  const classes = useStyles();
  const history = useHistory();
  const Tezos = new TezosToolkit("https://granadanet.smartpy.io/");
  const options = { name: "Tezco Dapp" };
  const wallet = new BeaconWallet(options);
  const [counter, setCounter] = React.useState(1);
  const moveNext = () => {
    if (counter === 1) {
      setCounter(2);
      wallet
        .requestPermissions({ network: { type: "granadanet" } })
        .catch((err) => console.log("lmao"))
        .then((_) => wallet.getPKH())
        .catch((err) => console.log("lmao"))
        .then((address) => {
          console.log(`Your address: ${address}`);
          history.push("/");
        })
        .catch((err) => history.push("/"));
      Tezos.setWalletProvider(wallet);
    } else {
      history.push("/");
    }
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
              Use QR code or Tezco ID to transact quickly and keep a check over
              your transactions.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box px={2}>
            <Button
              onClick={moveNext}
              variant="contained"
              color="secondary"
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
