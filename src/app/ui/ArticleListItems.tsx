import Link from "next/link";
import type { ArticleItem } from "../../../types";

interface Props {
    articles: ArticleItem[];
}

const ArticleListItems = ({ articles }: Props) => {
    return (
        <div className="article-list mt-3">
            {articles.map((article, index) => (
                <div key={index} className=" rounded hover:bg-gray-300 p-2">
                    <Link href={`/post/${article.id}`}>
                        {article.title}
                        <p><small>{article.date}</small></p>
                    </Link>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ArticleListItems;