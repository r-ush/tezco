import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import SuccessImage from "assets/success_image.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2E534B",
    height: "100vh",
  },
  rr: {
    background: "#2e534b",
  },
});

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function Success() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box px={5} py={10}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <img src={SuccessImage} />
          </Box>
          <Box
            py={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <WhiteTextTypography style={{ fontWeight: "bold", fontSize: 64 }}>
              123
            </WhiteTextTypography>
            <WhiteTextTypography>Your Current Balance</WhiteTextTypography>
          </Box>
          <Box>
            <Button variant="outlined" color="secondary">
              Go Back to Dashboard
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
