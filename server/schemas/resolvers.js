import {User, Game, Build} from '../models/index.js';
//Build thoughing error "SyntaxError: The requested module '../models/index.js' does not provide an export named 'Build'"
import {signToken, AuthenticationError} from '../utils/auth.js';
//authenticationError is thoughing a error " SyntaxError: The requested module '../utils/auth.js' does not provide an export named 'AuthenticationError' "

const resolvers = {
    Query: {
        games: async () => {
            return Game.find();
        },
        game: async (parent, { gameTitle }) => {},
        builds: async () => {
            return Build.find();
        },
        build: async (parent, { postTitle }) => {},
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {},
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
        addGame: async (parent, args) => {
            return Game.create(args);
        },
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

export default resolvers;