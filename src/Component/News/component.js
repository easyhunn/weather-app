import React, { useState, useEffect } from "react";

import Card from "./card";
import Heading from "./heading";
import ClipLoader from "react-spinners/ClipLoader";

const getDate = () => {
  let d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 1}`;
};

const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getLink = () => {
    if (query === "bitcoin")
      return `http://newsapi.org/v2/everything?q=bitcoin&from=${getDate()}&sortBy=publishedAt&apiKey=d24f876bdd754d14b65999a45a0081f4`;
    else if (query === "business")
      return "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d24f876bdd754d14b65999a45a0081f4";
    else if (query === "apple")
      return `http://newsapi.org/v2/everything?q=apple&from=${getDate()}&to=2020-08-15&sortBy=popularity&apiKey=d24f876bdd754d14b65999a45a0081f4`;
    else
      return "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d24f876bdd754d14b65999a45a0081f4";
  };
  const getData = async () => {
    setLoading(true);
    const data = await fetch(getLink());
    const dataJson = data.json();
    dataJson.then((res) => {
      setArticles(res.articles);
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  if (loading) {
    return (
      <div style={container}>
        <Heading setQuery={setQuery} />
        <div style={main}>
          <ClipLoader />
        </div>
      </div>
    );
  }
  return (
    <div style={container}>
      <Heading setQuery={setQuery} />
      <div style={main}>
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
    </div>
  );
};
const main = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "200px",
  overflow: "auto",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const container = {};
export default News;
