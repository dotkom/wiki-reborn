import React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import { Layout } from "../components/layout";

const App: React.FC<AppProps> = (appProps: AppProps) => {
    const { Component, pageProps } = appProps;
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
};
export default App;
