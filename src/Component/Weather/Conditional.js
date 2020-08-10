import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  * {
    font-size: 20px;
  }
`;

const Conditional = ({ condition }) => {
  return (
    <Card>
      <b>{condition}</b>
    </Card>
  );
};

export default Conditional;
