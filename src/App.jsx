import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Scaffold from "pages/Scaffold";
import Qr from "pages/qr";
import Confirmation from "pages/Confirmation";
import TransactionPage from "pages/Transaction";
import Success from "pages/Success";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import DesktopView from "pages/DesktopView";
import "App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E534B",
    },
    secondary: {
      main: "#287EF7",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
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
        <Route exact component={Qr} path="/qr" />
        <Route exact component={Success} path="/success" />
        <Route exact component={Confirmation} path="/confirmation" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
