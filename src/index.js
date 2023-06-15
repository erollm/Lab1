import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider  } from './context/AuthContext';
import './assets/bootstrap/bootstrap.min.css';
import './assets/bootstrap/bootstrap.min.js';
import './assets/css/index.css';
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
  </BrowserRouter>
  </StrictMode>
);
