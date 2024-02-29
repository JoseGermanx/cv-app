import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import moment from 'moment';
import { remark } from 'remark';
import html from 'remark-html';

import { ArticleItem } from '../../../types';

const articlesDirectory = path.join(process.cwd(), 'src/app/articles');

const getSortedrArticles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory);

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        };
    })

    return allArticlesData.sort((a, b) => {
        if (moment(a.date).isBefore(b.date)) {
            return 1;
        } else if (moment(a.date).isAfter(b.date)) {
            return -1;
        } else {
            return 0;
        }
    });

}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedrArticles();
    const categorisedArticles: Record<string, ArticleItem[]> = {};

    sortedArticles.forEach((article) => {
        if (categorisedArticles[article.date]) {
            categorisedArticles[article.date].push(article);
        } else {
            categorisedArticles[article.date] = [article];
        }
    });
    return categorisedArticles;
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        date: matterResult.data.date,
    };
}
    