import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

const App: React.FC<AppProps> = (appProps: AppProps) => {
    const { Component, pageProps } = appProps;
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Navbar />
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
};
export default App;
