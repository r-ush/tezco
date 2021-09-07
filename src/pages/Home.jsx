import React from "react";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallMadeIcon from "@material-ui/icons/CallMade";
import NftBanner from "assets/nft_banner.png";
import TezosLogo from "assets/tezos_logo.png";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    borderRadius: 8,
    backgroundColor: "#287EF7",
    boxShadow: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttonColor: {
    padding: "16px",
    borderRadius: 8,
    textTransform: "none",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Box px={2} py={2} style={{ background: "#2E534B" }}>
          <WhiteTextTypography style={{ fontWeight: "bold" }} variant="h6">
            Hello User!
          </WhiteTextTypography>
        </Box>
      </div>
      <div>
        <Box px={2} py={2}>
          <Card className={classes.root}>
            <CardContent>
              <WhiteTextTypography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Wallet Balance
              </WhiteTextTypography>

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <WhiteTextTypography
                    style={{ fontWeight: "bold" }}
                    variant="h5"
                    component="h2"
                  >
                    234
                  </WhiteTextTypography>
                  <WhiteTextTypography
                    className={classes.pos}
                    color="textSecondary"
                  >
                    zco left
                  </WhiteTextTypography>
                </Grid>
                <Grid item>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignContent="flex-end"
                  >
                    <WhiteTextTypography
                      style={{ fontWeight: "bold" }}
                      variant="h5"
                      component="h2"
                    >
                      12
                    </WhiteTextTypography>
                  </Box>
                  <WhiteTextTypography
                    className={classes.pos}
                    color="textSecondary"
                  >
                    Days to next recharge
                  </WhiteTextTypography>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item xs>
                    <WhiteTextTypography style={{ fontSize: 12 }}>
                      Exclusive token on first five transactions
                    </WhiteTextTypography>
                  </Grid>
                  <Grid item>
                    <img src={TezosLogo} />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div>
        <Box display="flex" justifyContent="center" px={2} py={1}>
          <Button
            className={classes.buttonColor}
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
            endIcon={<CallMadeIcon />}
          >
            Pay with ZCO
          </Button>
        </Box>
      </div>
      <div>
        <Box display="flex" justifyContent="center" px={2} py={1}>
          <img src={NftBanner} height={154} />
        </Box>
      </div>
      <div>
        <Box px={2} py={1}>
          <Typography variant="h6" component="h5">
            Trending Commodities
          </Typography>
        </Box>
      </div>
    </div>
  );
}
