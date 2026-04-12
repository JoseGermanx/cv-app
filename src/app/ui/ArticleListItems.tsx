'use client';

import Link from "next/link";
import type { ArticleItem } from "../../../types";

interface Props {
    articles: ArticleItem[];
}

const ArticleListItems = ({ articles }: Props) => {
    return (
        <div className="article-list mt-2 flex flex-col gap-1">
            {articles.map((article, index) => (
                <Link
                    key={index}
                    href={`/post/${article.id}`}
                    className="group flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-all duration-200"
                    style={{ border: "1px solid transparent" }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    }}
                >
                    <span className="text-slate-200 group-hover:text-white text-sm font-medium transition-colors">
                        {article.title}
                    </span>
                    <span className="text-xs text-slate-600">{article.date}</span>
                </Link>
            ))}
        </div>
    );
}

export default ArticleListItems;