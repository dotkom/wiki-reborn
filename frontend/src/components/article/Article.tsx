import { createElement, FC } from "react";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Link from "next/link";

import styles from "./Article.module.css";
import { Article } from "../../types";
import { Scrollspy } from "../scrollspy";
import ReactTooltip from "react-tooltip";
import { GET_ARTICLE_BY_SLUG } from "../../apollo/query";
import { useQuery } from "@apollo/client";

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
                        <Link href={data.slug}>
                            <a>Rediger</a>
                        </Link>
                    </small>
                    <small>
                        <Link href={data.slug}>
                            <a>Endringshistorie</a>
                        </Link>
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
                            link: (props) => {
                                return <Links element={props} />;
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

export const Links = ({ element }: any) => {
    const isLocalPath = String(element.href).includes("/article/");
    const slug = String(element.href).split("/")[2];

    const { data } = useQuery(GET_ARTICLE_BY_SLUG, {
        variables: { slug: slug },
    });

    console.log(data);
    return isLocalPath ? (
        <>
            <ReactTooltip place="right" className={styles.hover_class} effect="solid" id={`${slug}-preview`}>
                {data
                    ? data.articles.length != 0
                        ? data.articles.map((article: Article) => (
                              <>
                                  <h3>{article.title}</h3>
                                  <p>{article.excerpt}</p>
                              </>
                          ))
                        : "Kunne ikke forhåndsvise artikkelen"
                    : null}

                <Link href={element.href}>
                    <a className={styles.read_more}>Les mer</a>
                </Link>
            </ReactTooltip>
            <Link href={element.href}>
                <a data-tip data-for={`${slug}-preview`}>
                    {element.children}
                </a>
            </Link>
        </>
    ) : (
        <>
            <Link href={element.href}>
                <a>{element.children}</a>
            </Link>
        </>
    );
};

export default ArticleComponent;
