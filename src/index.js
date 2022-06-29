//* Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "preline/dist/hs-ui.bundle";
import { BrowserRouter } from "react-router-dom";
//* Create React Root Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
