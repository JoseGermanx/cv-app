import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData, getSortedrArticles } from "@/app/lib/article";
import NavBar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export async function generateMetadata( { params}: { params: { slug: string } }) {
  const articleData = await getArticleData(params.slug);
  return {
    title: articleData.title,
    alternates: {
      canonical: `/post/${params.slug}`,
    }
  };
}

export function generateStaticParams() {
  const slug = getSortedrArticles();
  return slug.map((slug) => ({
    slug: slug.id,
  }));
}

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <>
      <div>
        <NavBar />
        <div className="mx-auto max-w-2xl px-6 pt-20 pb-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors mb-10"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Volver al blog
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-100 leading-snug mb-3">
              {articleData.title}
            </h1>
            <p className="text-sm text-slate-500">{articleData.date}</p>
            <hr className="mt-8 border-white/[0.07]" />
          </header>

          <div
            className="article"
            dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
