import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Menu from "../src/Menu";
import Test from "../src/Test";

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
