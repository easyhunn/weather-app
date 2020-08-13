import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Card = styled.div`
  * {
    font-size: 25px;
  }
`;
const themeStyle = {
  group: {
    transitionDelay: "0ms",
    "transition-timing-function": "ease-in-out",
    transform: "translate(0, 0)",
  },
  number: {
    height: "1em",
  },

  reel: {
    height: "1em",
    display: "flex",

    "align-items": "flex-end",
    "overflow-y": "hidden",
    "overflow-x": "hidden",
    "justify-content": "center",
    /** CUSTOMISE BELOW */
    "font-size": "45px",
    "font-weight": "500",
    color: "white",
    "line-height": "0.95em" /* adjusted for Lato font */,
  },
};

const Temperate = ({ temp }) => {
  return (
    <div>
      <Reel text={temp + "°"} theme={themeStyle} />
    </div>
  );
};

export default Temperate;
