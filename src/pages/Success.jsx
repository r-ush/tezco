/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import SuccessImage from "assets/success_image.png";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const goBackToHome = () => {
    history.push("/");
  };

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
            onClick={goBackToHome}
            py={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <WhiteTextTypography style={{ fontWeight: "bold", fontSize: 64 }}>
              {localStorage.getItem("balance")}
            </WhiteTextTypography>
            <WhiteTextTypography>Your Current Balance</WhiteTextTypography>
          </Box>
          <Box>
            <Button onClick={goBackToHome} variant="outlined" color="secondary">
              Go Back to Dashboard
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
