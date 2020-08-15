import React from "react";

const Temperate = ({ temp }) => {
  return (
    <div>
      <b style={style}>{temp + "°"}</b>
    </div>
  );
};

const style = {
  fontSize: "30px",
};
export default Temperate;
