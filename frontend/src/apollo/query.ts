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

export const PORTAL_QUERY = gql`
    query getPortal($slug: String!) {
        portals(where: { slug: $slug }) {
            id
            category
            description
            name
        }
    }
`;
