import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/app/lib/article";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <div>
      <Link href="/">
        <ArrowLeftIcon className="h-6 w-6" />
        <p>Back home</p>
      </Link>
      <h1>{articleData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </div>
  );
};

export default Article;
