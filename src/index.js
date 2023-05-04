import React from "react";
import ReactDOM from "react-dom/client";
import './assets/bootstrap/bootstrap.min.css';
import './assets/bootstrap/bootstrap.min.js';
import './assets/css/index.css';

import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
