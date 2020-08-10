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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    value: false,
    message: "",
  });

  const getWeather = async (query) => {
    setLoading(true);
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=11350a089f2935085035c65f58c6d3d5`
    );
    const resJson = apiRes.json();
    resJson.then((resJson) => {
      console.log(resJson.message);
      try {
        setWeather({
          country: resJson.sys.country,
          city: resJson.name,
          temp: parseInt((resJson.main.temp - 273.15) * 100) / 100,
          condition: resJson.weather[0].main,
        });
      } catch (e) {
        setError({
          value: true,
          message: e.message,
        });
      }
    });
    setLoading(false);
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
      {!loading && !error.value ? (
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
      ) : loading ? (
        <div style={{ color: "black" }}>On loading</div>
      ) : !loading && error.value ? (
        <div>
          <p style={{ color: "red" }}>{error.message}</p>
          <button onClick={() => setError({ value: false, message: "" })}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngin;
