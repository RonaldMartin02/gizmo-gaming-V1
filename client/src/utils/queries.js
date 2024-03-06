import { gql } from "@apollo/client";

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
    export const QUERY_POSTS = gql`
    query posts {
        posts {
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
    export const QUERY_POST = gql`
    query post($id: ID!) {
        post(_id: $id) {
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
    