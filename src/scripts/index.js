import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "../routers/AppRouter";
import "../styles/index.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<AppRouter />, mountNode);
