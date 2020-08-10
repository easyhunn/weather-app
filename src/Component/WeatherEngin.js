import React, { useState, useEffect } from "react";
import "./Weather/component";
import Component from "./Weather/component";

const WeatherEngin = ({ location }) => {
  const [query, setQuery] = useState(location);
  const [weather, setWeather] = useState({
    country: "VN",
    city: "Ha Noi",
    temp: "",
    condition: "haze",
  });

  const getWeather = async (query) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=11350a089f2935085035c65f58c6d3d5`
    );
    const resJson = apiRes.json();
    resJson.then((resJson) => {
      console.log(resJson.message);
      if (!resJson.message) {
        setWeather({
          country: resJson.sys.country,
          city: resJson.name,
          temp: parseInt((resJson.main.temp - 273.15) * 100) / 100,
          condition: resJson.weather[0].main,
        });
      }
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      <Component
        temp={weather.temp}
        country={{ name: weather.country, city: weather.city }}
        condition={weather.condition}
      />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default WeatherEngin;
