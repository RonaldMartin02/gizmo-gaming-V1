const typeDefs = `#graphql
        type Game {
        gameTitle: String
        genre: String
        esrb: String
    }
    type User {
        username: String
        email: String
        password: String
    }
    type Build {
        postTitle: String
        postBody: String
        buildGenre: String
        postUser: String
    }
    type Auth {
    token: ID!
    user: User
    }
    type Query {
        games: [Game]
        game(gameTitle: String!): Game
        builds: [Build]
        build(postTitle: String!): Build
        users: [User]
        user(username: String!): User
    }
    type Mutation {
        login(email: String!): Auth
        addGame(gameTitle: String!, genre: String!, esrb: String!): Game
        addUser(username: String!, email: String!): User
        addBuild(postTitle: String!, postBody: String!, buildGenre: String!, postUser: String!): Build
    }
`;

module.exports = typeDefs;