import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  * {
    font-size: 25px;
  }
`;

const Temperate = ({ temp }) => {
  return (
    <Card>
      <b>{temp}°</b>
    </Card>
  );
};

export default Temperate;
