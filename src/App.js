import React from "react";
import Countries from "./Countries";
import "./App.css";
import axios from "axios";

const App = () => {
  return (
    <div>
      <h1 className="heading">Select Countries By Region : </h1>
      <Countries/>
    </div>
  );
};

export default App;
