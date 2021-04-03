import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { PORTAL_QUERY } from "../../apollo/query";
import { Layout } from "../../components/layout";
import { Query } from "../../types";

const Portal: NextPage = () => {
    const router = useRouter();
    const { pid } = router.query;

    const { loading, error, data } = useQuery<Query>(PORTAL_QUERY, {
        variables: { slug: pid },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Layout>
            <div>
                <h1>{data.portal}</h1>
                <h3>Article-ID: {data.id}</h3>
                <p>{data.description}</p>
                <span>
                    <strong>{data.published_at}</strong>
                </span>
            </div>
        </Layout>
    );
};

export default Portal;
