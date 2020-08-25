import React from "react";

const Card = ({ url, urlToImage, title }) => {
  return (
    <div style={Style}>
      <a
        href={url}
        target="_blank"
        style={imgLinkStyle}
        rel="noopener noreferrer"
      >
        <img src={urlToImage} alt="img" style={imgStyle} />
      </a>
      <a href={url} style={linkStyle} target="_blank" rel="noopener noreferrer">
        <b>{title}</b>
      </a>
    </div>
  );
};
const Style = {
  border: "1px solid white",
  height: "150px",
  width: "29%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  margin: "15px",
};
const linkStyle = {
  textDecoration: "none",
  width: "100%",
  height: "50px",
  overflow: "auto",
};
const imgLinkStyle = {
  width: "100%",
};
const imgStyle = {
  width: "100%",
  height: "100px",
};
export default Card;
