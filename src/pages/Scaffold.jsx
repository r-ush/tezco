/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import Profile from "pages/Profile";
import Transaction from "pages/Transaction";
import Nft from "pages/Transaction";
import Home from "pages/Home";
import BottomNavigationBar from "components/BottomNavigationBar";
import { Typography } from "@material-ui/core";

const Main = () => {
  const [navValue, setNavValue] = useState(0);

  return (
    <React.Fragment>
      {navValue === 0 ? (
        <Home />
      ) : navValue === 1 ? (
        <Typography style={{ padding: "2rem" }} variant="h6">
          Coming Soon...
        </Typography>
      ) : navValue === 2 ? (
        <Transaction />
      ) : navValue === 3 ? (
        <Profile />
      ) : null}
      <BottomNavigationBar navValue={navValue} setNavValue={setNavValue} />
    </React.Fragment>
  );
};

export default Main;
