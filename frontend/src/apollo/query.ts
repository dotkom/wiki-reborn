import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
    query GetAllArticles {
        articles {
            id
            title
            body
            slug
            excerpt
            published_at
            updatedAt
        }
    }
`;

export const GET_ARTICLE_BY_SLUG = gql`
    query($slug: String!) {
        articles(where: { slug: $slug }) {
            id
            title
            body
            slug
            excerpt
            published_at
            updatedAt
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
