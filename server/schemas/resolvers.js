const { signToken, AuthenticationError } = require('../utils/auth');

const { User, Game, Build } = require('../models/index');

const resolvers = {
    Query: {
        // games: async () => {
        //     return Game.find();
        // },
        // game: async (parent, { id }) => {
        //     return Game.findOne({ _id: id })
        // },
        builds: async () => {
            return Build.find({});
        },
        build: async (parent, { id }) => {
            return Build.findOne({ _id: id })
        },
        users: async () => {
            return User.find({});
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
            const { username, email, password } = args;
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addBuild: async (parent, args) => {
            return Build.create(args);
        },
    },
};

module.exports = resolvers;