const { signToken, AuthenticationError } = require('../utils/auth');

const { User, Game, Build } = require('../models/index');

const resolvers = {
    Query: {
        builds: async () => {
            try {
                const builds = await Build.find({}).exec();
                console.log(builds);
                return builds;
            } catch (error) {
                console.error("Error fetching builds:", error);
                throw error; // Re-throw the error to propagate it to the GraphQL client
            }
        },
        build: async (parent, { buildId }) => {
            console.log(buildId);
            return Build.findOne({ _id: buildId });
        }
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