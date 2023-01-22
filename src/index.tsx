import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

import { HashRouter } from "react-router-dom";
import theme from "./theme";

const GA_ID: string = process.env.REACT_APP_GA_ID || "";
ReactGA.initialize(GA_ID);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
