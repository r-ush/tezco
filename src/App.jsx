import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Scaffold from "pages/Scaffold";
import TransactionPage from "pages/Transaction";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import DesktopView from "pages/DesktopView";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Sk-Modernist",
  },
});

const App = () => {
  const history = useHistory();
  const firstTime = localStorage.getItem("firstOpen");

  useEffect(() => {
    if (firstTime !== "true") {
      // history.push("/ob1");
      // localStorage.setItem("firstOpen", "true");
    }
  }, [firstTime, history]);

  const width = window.innerWidth;
  if (width > 500) {
    return <DesktopView />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact component={Scaffold} path="/" />
        <Route exact component={TransactionPage} path="/transaction" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
