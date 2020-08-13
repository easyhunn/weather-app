import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import Country from "./Country";
import Images from "./Images";
import Temperate from "./Temparate";
import Conditional from "./Conditional";
import RotateLoader from "react-spinners/RotateLoader";
import { motion } from "framer-motion";

const Component = ({ location }) => {
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

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const highTemp =
    weather.temp >= 25
      ? ((40 - weather.temp) / 15) * 255
      : (1 - (25 - weather.temp) / 45) * 255;

  const Card = styled.div`
    color: white;
    border: 1px solid;
    display: flex;
    width: 160px;
    height: 220px;
    margin: auto;
    background-image: linear-gradient(
      to top,
      rgb(
        ${weather.temp >= 25 ? 255 : 0},
        ${highTemp},
        ${weather.temp < 25 ? 255 : 0}
      ),
      rgb(
        ${weather.temp >= 25 ? 255 : 0},
        ${Math.abs(highTemp - 150)},
        ${weather.temp < 25 ? 255 : 0}
      )
    );
    flex-direction: column;
    border-radius: 10%;
    justify-content: space-around;
  `;

  return (
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
      <Card>
        <div>
          {!loading && !error.value ? (
            <div>
              <Country
                city={weather.city}
                name={weather.country}
                handleSearch={getWeather}
                location={location}
              />
              <Images condition={weather.condition} />
              <Temperate temp={weather.temp} />
              <Conditional condition={weather.condition} />
            </div>
          ) : loading ? (
            <RotateLoader />
          ) : !loading && error.value ? (
            <div>
              <p style={{ color: "red" }}>{error.message}</p>
              <button onClick={() => setError({ value: false, message: "" })}>
                Reset
              </button>
            </div>
          ) : (
            <div>something went wrong</div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default Component;
