const typeDefs = `#graphql
        type Game {
        _id: ID
        gameTitle: String
        genre: String
        esrb: String
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }
    type Build {
        _id: ID
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
        game(id: ID): Game
        builds: [Build]
        build(id: ID): Build
        users: [User]
        user(id: ID): User
    }
    type Mutation {
        login(email: String!): Auth
        addGame(gameTitle: String!, genre: String!, esrb: String!): Game
        addUser(username: String!, email: String!, password: String!): User
        addBuild(postTitle: String!, postBody: String!, buildGenre: String!, postUser: String!): Build
    }
`;

module.exports = typeDefs;