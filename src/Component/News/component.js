import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const bitCoin = await fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-15&sortBy=publishedAt&apiKey=d24f876bdd754d14b65999a45a0081f4"
    );
    return bitCoin.json();
  };
  const getNews = () => {
    getData().then((res) => {
      setArticles(res.articles);
    });
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div style={componentStyle}>
      {articles.map((article) => {
        return (
          <div style={cardStyle}>
            <a href={article.url} target="_blank" style={imgLinkStyle}>
              <img src={article.urlToImage} alt="img" style={imgStyle} />
            </a>
            <a href={article.url} style={linkStyle} target="_blank">
              <b>{article.title}</b>
            </a>
          </div>
        );
      })}
    </div>
  );
};
const componentStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "200px",
  overflow: "auto",
  flexWrap: "wrap",
};
const cardStyle = {
  border: "1px solid white",
  height: "150px",
  width: "30%",
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
  width: "300px",
};
const imgStyle = {
  width: "100%",
  height: "100px",
};
export default News;
