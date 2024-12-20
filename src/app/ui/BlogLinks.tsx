import React from "react";
import { getCategorisedArticles } from "../lib/article";
import ArticleListItems from "./ArticleListItems";

const BlogLinks = () => {
  const articles = getCategorisedArticles();
  return (
    <div>
      {Object.keys(articles).map((article, index) => (
        <>
          <ArticleListItems key={index} articles={articles[article]} />
          <hr />
        </>
      ))}
    </div>
  );
};

export default BlogLinks;
