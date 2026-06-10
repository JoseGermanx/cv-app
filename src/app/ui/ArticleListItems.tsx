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
                    className="group flex items-baseline justify-between gap-4 px-1 py-3 border-b border-white/[0.05] last:border-0 transition-colors duration-150 hover:bg-white/[0.03] rounded-lg px-3"
                >
                    <span className="text-slate-300 group-hover:text-white text-[15px] font-medium leading-snug transition-colors">
                        {article.title}
                    </span>
                    <span className="shrink-0 text-xs text-slate-600 tabular-nums">{article.date}</span>
                </Link>
            ))}
        </div>
    );
}

export default ArticleListItems;