import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { GET_ARTICLE_BY_SLUG } from "../../apollo/query";
import { Article } from "../../components/article";
import Skeleton from "react-loading-skeleton";

interface IArticleBySlug {
    slug: string;
}

const ArticleBySlug: NextPage<IArticleBySlug> = ({ slug }) => {
    const { loading, error, data } = useQuery(GET_ARTICLE_BY_SLUG, {
        variables: { slug: slug },
    });

    if (loading)
        return (
            <>
                <div>
                    <h1>
                        <Skeleton />
                    </h1>
                    <Skeleton count={10} />
                </div>
            </>
        );
    if (error) return <>Error... {error}</>;

    if (Object.keys(data.articles).length != 0) {
        return <Article key={data.articles[0].id} data={data.articles[0]} />;
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
