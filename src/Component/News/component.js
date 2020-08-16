import React, { useState, useEffect } from "react";

import Card from "./card";

const News = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const getQuery = () => {
    if (query === "bitcoin")
      return "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-16&sortBy=publishedAt&apiKey=d24f876bdd754d14b65999a45a0081f4";
    else if (query === "business")
      return "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d24f876bdd754d14b65999a45a0081f4";
    else if (query === "apple")
      return "http://newsapi.org/v2/everything?q=apple&from=2020-08-15&to=2020-08-15&sortBy=popularity&apiKey=d24f876bdd754d14b65999a45a0081f4";
    else
      return "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d24f876bdd754d14b65999a45a0081f4";
  };
  const getData = async () => {
    const data = await fetch(getQuery());
    const dataJson = data.json();
    dataJson.then((res) => {
      setArticles(res.articles);
    });
  };

  useEffect(() => {
    getData();
  }, [articles]);
  return (
    <div style={componentStyle}>
      {articles.map((article) => {
        return (
          <Card
            url={article.url}
            urlToImage={article.urlToImage}
            title={article.title}
          />
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

export default News;
