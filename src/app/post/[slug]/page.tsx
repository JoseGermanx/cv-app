import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/app/lib/article";
import NavBar from "@/app/ui/Navbar";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <div>
      <NavBar />
      <Link href="/blog">
        <ArrowLeftIcon className="h-6 w-6" />
        <p>Back home</p>
      </Link>
      <div className="flex">
        <div>
          <h1>{articleData.title}</h1>
        </div>
        <div>
          <p>{articleData.date}</p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </div>
  );
};

export default Article;
