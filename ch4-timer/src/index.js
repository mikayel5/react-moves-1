import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TimerWrapper from "../src/timer/TimerWrapper";

ReactDOM.render(
  <React.StrictMode>
    <TimerWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
