import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/app/lib/article";
import NavBar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

 // incluir generateStaticParams()
export async function generateStaticParams(params: { slug: string }) {
  return {
    params: {
      slug: params.slug,
    },
  };
}

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <>
    <div>
      <NavBar />
      <div className="flex md:w-64 mb-5 mx-20 mt-9">
        <Link href="/blog">
          <ArrowLeftIcon className="h-6 w-6" />
          <p>back</p>
        </Link>
      </div>
      <br />
      <div className="mx-10 sm:mx-20">
        <div>
          <h1 className="text-4xl font-bold ">{articleData.title}</h1>
        </div>
        <p className="">{articleData.date}</p>
      </div>
      <hr />
      <div className="mt-8 mx-10 p-15 sm:px-25 pb-10">
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
