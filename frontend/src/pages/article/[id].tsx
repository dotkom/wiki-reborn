import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { GET_ARTICLE_BY_SLUG } from "../../apollo/query";
import { Article } from "../../components/article";
import { Article as ArticleType } from "../../types";

interface IArticleBySlug {
    slug: string;
}

const ArticleBySlug: NextPage<IArticleBySlug> = ({ slug }) => {
    const { loading, error, data } = useQuery(GET_ARTICLE_BY_SLUG, {
        variables: { slug: slug },
    });

    if (loading) return <>Loading...</>;
    if (error) return <>Error... </>;

    if (Object.keys(data.articles).length != 0) {
        return data.articles.map((article: ArticleType) => (
            <>
                <Article key={article.id} data={article} />
            </>
        ));
    }
    return <h2>Artikkel ikke funnet</h2>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    return {
        props: { slug: id },
    };
};

export default ArticleBySlug;
