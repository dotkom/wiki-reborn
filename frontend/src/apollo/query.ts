import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
    query GetAllArticles {
        articles {
            id
            title
            body
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
            published_at
            updatedAt
        }
    }
`;
