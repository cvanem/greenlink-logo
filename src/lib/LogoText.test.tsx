import React from "react";
import ReactDOM from "react-dom";
import LogoText from "./LogoText";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoText animate="none" />, div);
});

it("renders with animate left", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoText animate="left" />, div);
});

it("renders with animate right", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoText animate="right" />, div);
});
