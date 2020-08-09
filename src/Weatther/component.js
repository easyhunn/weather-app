import React from "react";

import styled from "@emotion/styled";
import Country from "./Country";
import Images from "./Images";
import Temperate from "./Temparate";
import Conditional from "./Conditional";

const Component = ({ temp, country, condition }) => {
  let highTemp =
    temp >= 25 ? ((40 - temp) / 15) * 255 : (1 - (25 - temp) / 45) * 255;

  const Card = styled.div`
    color: white;
    border: 1px solid;
    display: flex;
    width: 160px;
    height: 220px;
    margin: auto;
    background-image: linear-gradient(
      to top,
      rgb(${temp >= 25 ? 255 : 0}, ${highTemp}, ${temp < 25 ? 255 : 0}),
      rgb(${temp >= 25 ? 255 : 0}, ${highTemp - 150}, ${temp < 25 ? 255 : 0})
    );
    flex-direction: column;
    border-radius: 10%;
    justify-content: space-around;
  `;
  return (
    <Card>
      <Country name={country.name} capital={country.capital} />
      <Images condition={condition} />
      <Temperate temp={temp} />
      <Conditional condition={condition} />
    </Card>
  );
};

export default Component;
