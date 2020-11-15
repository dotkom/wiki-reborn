import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
    query GetAllArticles {
        articles {
            id
            title
            body
            published_at
        }
    }
`;
