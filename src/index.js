/**
 * This is the entry file of the application
 */
// Dependencies
import React from "react";
import ReactDOM from "react-dom";
// Containers & Components
import App from "./container/App";
// Styles
import "./styles/main.scss";

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

console.log('The app has rendered correctly!');
