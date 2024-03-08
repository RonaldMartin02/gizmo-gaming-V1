const { User, Game, Build } = require('../models/index');
//Build throwing error "SyntaxError: The requested module '../models/index.js' does not provide an export named 'Build'"
const { signToken, AuthenticationError } = require('../utils/auth');
//authenticationError is throwing a error " SyntaxError: The requested module '../utils/auth.js' does not provide an export named 'AuthenticationError' "

const resolvers = {
    Query: {
        // games: async () => {
        //     return Game.find();
        // },
        // game: async (parent, { id }) => {
        //     return Game.findOne({ _id: id })
        // },
        builds: async () => {
            return Build.find();
        },
        build: async (parent, { id }) => {
            return Build.findOne({ _id: id })
        },
        users: async () => {
            return User.find();
        },
        user: async (parent, { id }) => {
            return User.findOne({ _id: id })
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user };
        },
        // addGame: async (parent, args) => {
        //     return Game.create(args);
        // },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addBuild: async (parent, args) => {
            return Build.create(args);
        },
    },
};

module.exports = resolvers;