import { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
    // generar un array dinamico de las rutas de la aplicación
    // para que Next.js pueda generar un sitemap

   
        return [
            {
              url: 'https://jgxdev.com',
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
          ]
}