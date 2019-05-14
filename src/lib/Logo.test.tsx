import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo animate="none" />, div);
});

it("renders with animate left", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo animate="left" />, div);
});

it("renders with animate right", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo animate="right" />, div);
});
