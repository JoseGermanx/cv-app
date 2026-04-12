import React from "react";
import { getCategorisedArticles } from "../lib/article";
import ArticleListItems from "./ArticleListItems";

const BlogLinks = () => {
  const articles = getCategorisedArticles();
  return (
    <div className="flex flex-col gap-6">
      {Object.keys(articles).map((category, index) => (
        <div key={index}>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-2 px-4">
            {category}
          </h2>
          <ArticleListItems articles={articles[category]} />
        </div>
      ))}
    </div>
  );
};

export default BlogLinks;
