import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Member from "./components/member";
const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);