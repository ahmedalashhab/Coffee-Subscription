import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import index from "./index.css";
import stylesheet from "./stylesheet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
