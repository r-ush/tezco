import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "#2E534B",
  },
  root: {
    backgroundColor: "#2E534B",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    paddingTop: "200px",
  },
});

const DesktopView = () => {
  const c = useStyles();
  return (
    <div className={c.root}>
      <Typography
        style={{
          marginTop: 150,
          color: "#FFC582",
          fontWeight: "bold",
          fontSize: 24,
        }}
        variant="h6"
      >
        Please open the website in PHONE for better experience
      </Typography>
      <a
        style={{
          fontColor: "white",
          marginTop: "150px",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        variant="h6"
        target="_blank"
        rel="noopener noreferrer"
        href="https://hsrambo07.github.io/tezco-landing/"
      >
        Check us out here
      </a>
    </div>
  );
};

export default DesktopView;
