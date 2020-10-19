import React from "react";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

const App: React.FC<AppProps> = (appProps: AppProps) => {
    const { Component, pageProps } = appProps;
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};
export default App;
