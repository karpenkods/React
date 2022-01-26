import React from "react";
import { hydrate } from "react-dom";
import { App } from "../App";

window.addEventListener("load", () => {
  const rootElement = document.getElementById("react__root");

  hydrate(<App />, rootElement);
});
