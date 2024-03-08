const typeDefs = `#graphql
    type Auth {
        token: ID!
        user: User
    }
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        builds: [Build]
    } 
     type Game {
        _id: ID
        gameTitle: String
        genre: String
        esrb: String
    }
  
    type Build {
        _id: ID
        postTitle: String
        postBody: String
        buildGenre: String
        postUser: User
        game: Game!
        comments: [Comment]!
    }
    type Comment {
        _id: ID
        commentBody: String
        commentUser: User
        createdAt: String
    }
    type Query {
        # games
        # games: [Game]
        # game(id: ID): Game
        # builds
        builds: [Build]
        build(id: ID): Build
        # users
        users: [User]
        user(id: ID): User
    }
    type Mutation {
        #Sign up(addUser) and login
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!,password: String!): Auth

        addBuild(
            postTitle: String!, 
            postBody: String!, 
            buildGenre: String!, 
            postUser: String!
            ): Build
        addComment(
            buildId: ID!, 
            commentBody: String!
            ): Build

        removeBuild(buildId: ID!): Build
        removeComment(buildId: ID!, commentId: ID!): Build
    }
`;

module.exports = typeDefs;