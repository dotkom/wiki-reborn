import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { ARTICLES_QUERY } from "../apollo/query";
import { Article } from "../types";
import Link from "next/link";

const Home: NextPage = () => {
    const { loading, error, data } = useQuery(ARTICLES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Artikler: </h1>
            <div className="article_preview_wrapper">
                {data.articles.map((article: Article, key: string) => (
                    <div className="article_preview">
                        <Link href={`/article/${article.slug}`}>
                            <div key={key}>
                                <h1>{article.title}</h1>
                                <p>{article.excerpt}</p>
                                <span>
                                    <strong>{article.published_at}</strong>
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
