import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApplicationTheme from "./ApplicationTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <MuiThemeProvider theme={ApplicationTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
