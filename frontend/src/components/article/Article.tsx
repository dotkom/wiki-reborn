import { FC } from "react";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Link from "next/link";

import styles from "./Article.module.css";
import { Article } from "../../types";

interface IArticleComponent {
    data: Article;
}

const ArticleComponent: FC<IArticleComponent> = ({ data }) => {
    const dateEquality = (first: string, second: string) => {
        if (first.substr(0, 16) == second.substr(0, 16)) return true;
        return false;
    };

    const dateParser = (date: string) => {
        const timestamp = new Date(date);
        return timestamp.toLocaleDateString() + " - " + timestamp.toLocaleTimeString().substr(0, 5);
    };

    return (
        <div key={data.id} className={styles.article_wrapper}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.toolbar}>
                <small>Published: {dateParser(data.published_at)}</small>
                <small>
                    {!dateEquality(data.updatedAt, data.published_at) ? "Updated: " + dateParser(data.updatedAt) : ""}
                </small>
                <small>
                    <Link href={data.slug}>Edit</Link>
                </small>
                <small>
                    <Link href={data.slug}>Edit history</Link>
                </small>
            </div>
            <div className={styles.container}>
                <ReactMarkdown plugins={[gfm]} source={data.body}></ReactMarkdown>
            </div>
        </div>
    );
};

export default ArticleComponent;
