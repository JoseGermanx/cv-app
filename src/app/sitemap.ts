
import { getSortedrArticles } from './lib/article'


export default async function sitemap() {

    const baseUrl = 'https://jgxdev.com'
    
    const posts = await getSortedrArticles();

    const postUrls = posts.map((post) => {
        return {
            url: `${baseUrl}/post/${post.id}`,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly',
        }
    }) ?? [];

        return [
            {
              url:  baseUrl,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 1,
            },
            {
              url: 'https://jgxdev.com/blog',
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.5,
            },
            ...postUrls
          ]
}