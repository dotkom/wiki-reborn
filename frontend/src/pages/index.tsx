import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { ARTICLES_QUERY } from "../apollo/query";
import { Layout } from "../components/layout";
import { Query } from "../types";

const Home: NextPage = () => {
    const { loading, error, data } = useQuery<Query>(ARTICLES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Layout>
            {data.articles.map((article, key) => (
                <div key={key}>
                    <h1>{article.title}</h1>
                    <h3>Article-ID: {article.id}</h3>
                    <p>{article.body}</p>
                    <span>
                        <strong>{article.published_at}</strong>
                    </span>
                </div>
            ))}
        </Layout>
    );
};

export default Home;
