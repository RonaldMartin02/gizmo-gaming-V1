import { gql } from "@apollo/client";

export const GET_ALL_BUILDS = gql`
    query Builds {
        builds {
        title
        body
        game
        }
    }
    `;