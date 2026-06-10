import React from "react";
import { getCategorisedArticles } from "../lib/article";
import ArticleListItems from "./ArticleListItems";

const BlogLinks = () => {
  const articles = getCategorisedArticles();
  return (
    <div className="flex flex-col gap-10">
      {Object.keys(articles).map((category, index) => (
        <div key={index}>
          <h2 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-600 mb-3 px-1">
            {category}
          </h2>
          <ArticleListItems articles={articles[category]} />
        </div>
      ))}
    </div>
  );
};

export default BlogLinks;
