import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/app/lib/article";
import NavBar from "@/app/ui/Navbar";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <div>
      <NavBar />
      <div className="w-full flex-none md:w-64 mb-5 mx-24">
        <Link href="/blog">
          <ArrowLeftIcon className="h-6 w-6" />
          <p>Back home</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl">{articleData.title}</h1>
        </div>
        <p>{articleData.date}</p>
      </div>
        <hr />
        <div className="w-full mx-20 overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </div>
    </div>
  );
};

export default Article;
