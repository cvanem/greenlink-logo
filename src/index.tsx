import React from "react";
import { render } from "react-dom";
import LogoProvider from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <LogoProvider variant='small' animate={true} icon={true} text={true} />
  </div>
);

render(<App />, document.getElementById("root"));
