import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./fonts/DotGothic/dotgothic16-v15-latin-regular.ttf";
import "./fonts/RobotoCondensed/roboto-condensed-v25-latin-regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
