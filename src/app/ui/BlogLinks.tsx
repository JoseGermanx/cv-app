import React from 'react'
import { getCategorisedArticles } from '../lib/article'
import ArticleListItems from './ArticleListItems';

const BlogLinks = () => {
    const articles = getCategorisedArticles();
  return (
    <div className='h-screen'>
        {
            Object.keys(articles).map((article, index) => (
                <ArticleListItems
                    key={index}
                    articles={articles[article]}
                />
            ))
        }
    </div>
  )
}

export default BlogLinks