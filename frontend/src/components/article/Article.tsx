import { createElement, FC } from "react";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Link from "next/link";

import styles from "./Article.module.css";
import { Article } from "../../types";
import { Scrollspy } from "../scrollspy";

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
        <div className={styles.main}>
            <Scrollspy data={data.body} />

            <div key={data.id} className={styles.article_wrapper}>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.toolbar}>
                    <small>Publisert: {dateParser(data.published_at)}</small>
                    <small>
                        {!dateEquality(data.updatedAt, data.published_at)
                            ? "Oppdatert: " + dateParser(data.updatedAt)
                            : ""}
                    </small>
                    <small>
                        <Link href={data.slug}>Rediger</Link>
                    </small>
                    <small>
                        <Link href={data.slug}>Endringshistorie</Link>
                    </small>
                </div>
                <div className={styles.container}>
                    <ReactMarkdown
                        plugins={[gfm]}
                        source={data.body}
                        renderers={{
                            heading: (props) => {
                                return <Heading element={props} />;
                            },
                        }}></ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export const Heading = ({ element }: any) => {
    return createElement(`h${element.level}`, { id: element.node.children[0].value }, element.children);
};

export default ArticleComponent;
