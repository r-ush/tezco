import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Scaffold from "pages/Scaffold";
import Qr from "pages/qr";
import Confirmation from "pages/Confirmation";
import Success from "pages/Success";
import Ob1 from "components/onboarding/Ob1";
import Ob2 from "components/onboarding/Ob2";
import Ob3 from "components/onboarding/Ob3";
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
  const balance = localStorage.getItem("balance");

  useEffect(() => {
    if (!balance) {
      localStorage.setItem("balance", 100);
    }
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
        <Route exact component={Ob1} path="/ob1" />
        <Route exact component={Ob2} path="/ob2" />
        <Route exact component={Ob3} path="/ob3" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
