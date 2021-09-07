import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallMadeIcon from "@material-ui/icons/CallMade";
import NftBanner from "assets/nft_banner.png";

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
          <WhiteTextTypography>Hello User!</WhiteTextTypography>
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
              <WhiteTextTypography variant="h5" component="h2">
                234
              </WhiteTextTypography>
              <WhiteTextTypography
                className={classes.pos}
                color="textSecondary"
              >
                zco left
              </WhiteTextTypography>
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
        <Box>Recent Contact</Box>
      </div>
      <div>
        <Box display="flex" justifyContent="center" px={2} py={1}>
          <img src={NftBanner} height={154} />
        </Box>
      </div>
    </div>
  );
}
