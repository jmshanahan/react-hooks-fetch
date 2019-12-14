import React from "react";
import { render } from "react-dom";

import Postdata from "./components/Postdata";
const wrapper = document.getElementById("app");
const App = () => {
  return (
    <div>
      <h1>Welcome to parcel template</h1>
      <Postdata />
    </div>
  );
};
render(<App />, wrapper);
