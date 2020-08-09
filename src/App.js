import React from "react";
import "./App.css";
import "./Weatther/component";
import Component from "./Weatther/component";

function App() {
  return (
    <div className="App">
      <Component
        temp={40}
        country={{ name: "VN", capital: "Ha Noi" }}
        condition={"Haze"}
      />
      <Component
        temp={15}
        country={{ name: "Korean", capital: "Busan" }}
        condition={"Clouds"}
      />
      <Component
        temp={30}
        country={{ name: "US", capital: "New York" }}
        condition={"Clear"}
      />
    </div>
  );
}

export default App;
