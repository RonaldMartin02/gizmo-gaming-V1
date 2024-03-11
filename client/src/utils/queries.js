import { gql } from "@apollo/client";

// Query for the user
export const QUERY_USER = gql`
    query user($username: String) {
        user(username: $username) {
        _id
        username
        email
        postCount
        posts {
            _id
            postText
            createdAt
            commentCount
        }
        }
    }
    `;

// Query for all posts
    export const QUERY_BUILDS = gql`
    query builds {
        builds {
        _id
        postText
        createdAt
        username
        commentCount
        comments {
            _id
        }
        }
    }
    `;

// Query for a single post
    export const QUERY_BUILD = gql`
    query build($id: ID!) {
        build(_id: $id) {
        _id
        postText
        createdAt
        username
        commentCount
        comments {
            _id
            commentText
            createdAt
            username
        }
        }
    }
    `;
    