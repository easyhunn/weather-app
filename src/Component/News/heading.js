import React from "react";

const Heading = ({ setQuery }) => {
  return (
    <div style={container}>
      <form>
        <select
          name="news"
          id=""
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        >
          <option value="headline">Headlines</option>
          <option value="bitcoin">Bit Coin</option>
          <option value="business">Business</option>
          <option value="apple">Apple</option>
        </select>
      </form>
      <b style={{ color: "white", marginLeft: "40%" }}>LATEST NEWS</b>
    </div>
  );
};

const container = {
  borderBottom: "1px solid  rgb(207, 124, 29)",
  display: "flex",
  flexDirect: "row",
  padding: "5px",
};
export default Heading;
