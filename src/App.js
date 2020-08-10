import React from "react";
import "./App.css";
import "./Component/Weather/component";
import WeatherEngin from "./Component/WeatherEngin";

function App() {
  return (
    <div className="App">
      <WeatherEngin location={"Hai Duong"} />
      <WeatherEngin location={"Busan"} />
    </div>
  );
}

export default App;
