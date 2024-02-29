import Link from "next/link";
import type { ArticleItem } from "../../../types";

interface Props {
    articles: ArticleItem[];
}

const ArticleListItems = ({ articles }: Props) => {
    return (
        <div className="article-list mt-3">
            {articles.map((article, index) => (
                <div key={index}>
                    <Link href={`/post/${article.id}`}>
                        {article.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ArticleListItems;