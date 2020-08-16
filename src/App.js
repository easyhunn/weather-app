import React, { useState } from "react";

import "./App.css";
import "./Component/Weather/component";
import Component from "./Component/Weather/component";
import Clock from "./Component/Clock/clock";
import News from "./Component/News/component";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App" style={style}>
      <div style={leftContent}>
        <Clock />
      </div>
      <div style={centerContent}>
        <div style={topCenterContent}>
          <form>
            <select
              name="news"
              id=""
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
              }}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            >
              <option value="headline">headlines</option>
              <option value="bitcoin">Bit Coin</option>
              <option value="business">Business</option>
              <option value="apple">Apple</option>
            </select>
          </form>
          <b style={{ color: "white", marginLeft: "30%" }}>LATEST NEWS</b>
        </div>
        <News query={query} />
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
  width: "15%",
  border: "5px solid",
};
const centerContent = {
  float: "left",
  width: "70%",
  borderTop: "5px solid",
  borderBottom: "5px solid",
  height: "250px",
};
const rightContent = {
  width: "15%",
  height: "100%",
  border: "5px solid",
};
const topCenterContent = {
  borderBottom: "1px solid",
  display: "flex",
  flexDirect: "row",
  padding: "5px",
};

export default App;
