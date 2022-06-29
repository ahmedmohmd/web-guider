//* Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "preline/dist/hs-ui.bundle";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import "./index.css";

//* Create React Root Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
