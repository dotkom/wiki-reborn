import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { ARTICLES_QUERY } from "../apollo/query";
import { Article } from "../types";

const Home: NextPage = () => {
    const { loading, error, data } = useQuery(ARTICLES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            {data.articles.map((article: Article, key: string) => (
                <div key={key}>
                    <h1>{article.title}</h1>
                    <h3>Article-ID: {article.id}</h3>
                    <p>{article.body}</p>
                    <span>
                        <strong>{article.published_at}</strong>
                    </span>
                </div>
            ))}
        </>
    );
};

export default Home;
