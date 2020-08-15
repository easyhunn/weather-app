import React from "react";

import "./App.css";
import "./Component/Weather/component";
import Component from "./Component/Weather/component";
import Clock from "./Component/Clock/clock";
import News from "./Component/News/component";

function App() {
  return (
    <div className="App" style={style}>
      <div style={leftContent}>
        <Clock />
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
const style = {
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundPosition: "center center",
  backgroundImage: "URL(back-ground.jpg)",
  backgroundSize: "cover",
};

const leftContent = {
  float: "left",
  width: "85%",
  display: "flex",
  flexDirection: "column",
};

const rightContent = {
  width: "15%",
  height: "100%",
};
export default App;
