import React, { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const getCurrentTime = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };
  const style = {
    color: "red",
    border: "1px solid red",
    backgroundImage:
      "linear-gradient(to top, rgb(219, 138, 180), rgb(76, 76, 77))",
    float: "left",
    width: "150px",
    height: "40px",
    fontSize: "20px",
    paddingTop: "15px",
    paddingBottom: "10px",
  };
  getCurrentTime();
  return (
    <div>
      <h3 style={style}>{time.toLocaleTimeString()}</h3>
    </div>
  );
};
export default Clock;
