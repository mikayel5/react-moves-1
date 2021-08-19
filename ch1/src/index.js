import React, { createElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloWorld from "./Helloworld";
import Time from "./time";
import Time2 from "./Time2";
import Button from "./components/Button/Button";
ReactDOM.render(
  <div>
    <HelloWorld get="http://webapplog.com" />
    {/* <Time /> */}
    <Time2 />
    <Button />
  </div>,
  document.getElementById("root")
);

reportWebVitals();
