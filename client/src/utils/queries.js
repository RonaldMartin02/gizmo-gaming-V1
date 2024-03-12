import { gql } from "@apollo/client";

export const GET_ALL_BUILDS = gql`
    query Builds {
        builds {
        _id
        title
        body
        game
        username
        # postDate
        }
    }
    `;

export const GET_BUILD = gql`
query Build($buildId: ID!) {
  build(buildId: $buildId) {
    _id
    body
    title
    game
    username
    # postDate
  }
}
`;