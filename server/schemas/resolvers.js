const { GraphQLError } = require("graphql");
const { User } = require("../models");
const { signToken } = require("../utils/jwt");

const resolvers = {
  Query: {
    users: async () => User.find({}),
  },
  Mutation: {
    login: async (_, args) => {
      try {
        const user = await User.findOne({
          email: args.email,
        });

        const passwordIsValid = await user.isCorrectPassword(args.password);

        if (passwordIsValid) {
          const token = signToken({
            _id: user._id,
            email: user.email,
            name: user.name,
          });
          console.log(token);
          return { token };
        }
      } catch (error) {
        return new GraphQLError("Invalid Sign Up", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
    signup: async (_, args) => {
      try {
        const user = await User.create(args);
        const token = signToken({
          _id: user._id,
          email: user.email,
          name: user.name,
        });

        return { token };
      } catch (error) {
        return new GraphQLError("Invalid Sign Up", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
  },
};


module.exports = resolvers;
