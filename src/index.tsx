import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const GA_ID: string = process.env.GA_ID || "";
ReactGA.initialize(GA_ID);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
