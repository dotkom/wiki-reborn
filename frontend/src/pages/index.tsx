import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { ARTICLES_QUERY } from "../apollo/query";
//import { Layout } from "../components/layout";
import {LandingPage} from "../containers/landingpage/index";
import { Query } from "../types";

const Home: NextPage = () => {
    const { loading, error, data } = useQuery<Query>(ARTICLES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <LandingPage></LandingPage>
    );
};

export default Home;
