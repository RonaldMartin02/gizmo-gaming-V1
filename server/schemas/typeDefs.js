const typeDefs = `#graphql
type Auth {
    token: ID!
    user: User
}
type User {
    _id: ID!
    username: String
    email: String
    builds: [Build]
}
type Build {
    _id: ID
    title: String
    game: String
    body: String
    buildGenre: String
    username: String
    # buildStats: [BuildStats]
    # comments: [Comment]
}
# type BuildStats {
#     _id: ID
#     statName: String
#     statValue: String
# }
# type Comment {
#     commentBody: String
#     username: User
# }
type Query {
    builds: [Build]
    build(buildId: ID!): Build
    users: [User]
    user(_id: ID!): User
}
type Mutation {
    #Sign up(addUser) and login 
    # Complete
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth


    addBuild( title: String!
        game: String!
        body: String!
        # buildGenre: String!
        username: String!
        # buildStats: [BuildStatsInput]
    ): Build
    editBuild(
        _id: ID!
        title: String
        game: String
        body: String
        # buildGenre: String
        # username: String
    ): Build
    removeBuild(buildId: ID!): Build
    # addComment(buildId: ID!, commentBody: String!, username: String!): Build
    removeComment(buildId: ID!, commentId: ID!): Build
}
`;

 module.exports = typeDefs;
//type Auth {
//         token: ID!
//         user: User
//     }
//     type User {
//         _id: ID!
//         username: String
//         email: String
//         password: String
//         builds: [Build]
//     } 
  
//     type Build {
//         _id: ID
//         postTitle: String
//         postBody: String
//         buildGenre: String
//         username: User
//         game: String
//         comments: [Comment]
//     }
//     type Comment {
//         _id: ID
//         commentBody: String
//         username: User
//         createdAt: String
//     }
//     type Query {
//         # builds
//         builds: [Build]
//         build(id: ID): Build
//         # users
//         users: [User]
//         user(id: ID): User
//     }
//     type Mutation {
//         #Sign up(addUser) and login
//         addUser(username: String!, email: String!, password: String!): Auth
//         login(email: String!,password: String!): Auth

//         addBuild(
//             postTitle: String!, 
//             postBody: String!, 
//             buildGenre: String!, 
//             username: String!
//             game: String!
//             ): Build
//         addComment(
//             buildId: ID!, 
//             commentBody: String!
//             username: String!
//             ): Build

//         removeBuild(buildId: ID!): Build
//         removeComment(buildId: ID!, commentId: ID!): Build
//     }