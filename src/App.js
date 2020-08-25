import React from "react";

import "./App.css";
import "./Component/Weather/component";
import Component from "./Component/Weather/component";
import Clock from "./Component/Clock/clock";
import News from "./Component/News/component";

function App() {
  return (
    <div className="App" style={container}>
      <div style={leftContent}>
        <Clock />
      </div>
      <div style={centerContent}>
        <News />
      </div>
      <div style={rightContent}>
        <Component location={"Hai duong"} />
        <Component location={"Busan"} />
        <Component location={"new york"} />
      </div>
    </div>
  );
}

const container = {
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundPosition: "center center",
  backgroundImage: "URL(back-ground.jpg)",
  backgroundSize: "cover",
};
const leftContent = {
  float: "left",
  width: "15%",
  border: "5px solid rgb(207, 124, 29)",
  display: "flex",
  justifyContent: "center",
};
const centerContent = {
  float: "left",
  width: "70%",
  borderTop: "5px solid",
  border: "5px solid rgb(207, 124, 29)",
};
const rightContent = {
  width: "15%",
  border: "5px solid rgb(207, 124, 29)",
};

export default App;
