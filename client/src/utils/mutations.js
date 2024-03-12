import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_BUILD = gql`
mutation AddBuild($title: String!, $game: String!, $body: String!, $username: String!) {
  addBuild(title: $title, game: $game, body: $body, username: $username) {
    _id
    title
    game
    body
    username
  }
}
`;
export const EDIT_BUILD = gql`
mutation EditBuild($id: ID!, $title: String, $game: String, $body: String) {
  editBuild(_id: $id, title: $title, game: $game, body: $body) {
    _id
    title
    username
    game
    body
  }
}
`;
export const REMOVE_BUILD = gql`
mutation RemoveBuild($buildId: ID!) {
  removeBuild(buildId: $buildId) {
    _id
    title
  }
}
`;