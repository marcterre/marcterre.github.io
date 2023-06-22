import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./fonts/DotGothic/dotgothic16-v15-latin-regular.ttf";
import "./fonts/RobotoCondensed/roboto-condensed-v25-latin-regular.ttf";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
