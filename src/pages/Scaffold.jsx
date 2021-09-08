/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import Profile from "pages/Profile";
import Transaction from "pages/Transaction";
import Nft from "pages/Nft";
import Home from "pages/Home";
import BottomNavigationBar from "components/BottomNavigationBar";

const Main = () => {
  const [navValue, setNavValue] = useState(0);

  return (
    <React.Fragment>
      {navValue === 0 ? (
        <Home />
      ) : navValue === 1 ? (
        <Nft />
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
