import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300&display=swap");
  font-family: "Merriweather", serif;
  #capital {
    font-size: 25px;
  }
`;

const Country = ({ capital, name }) => {
  return (
    <Card>
      <div id="capital">
        <b>{capital}</b>
      </div>
      <div>{name}</div>
    </Card>
  );
};

export default Country;
