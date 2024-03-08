const { GraphQLError } = require("graphql");
const { User, Product } = require("../models");
const { signToken } = require("../utils/jwt");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find();
    },
    productsAvailable: async () => {
      return Product.find({ category: "Available" });
    },
    productsArchive: async () => {
      return Product.find({ category: "Archive" });
    },
    product: async (_, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    users: async () => User.find({}),

    oneUser: async (_, { email }) => {
      return User.findOne({ email: email });
    },

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
    addProduct: async (_, args) => {
      const product = await Product.create(args);
      return product;
    },
    removeProduct: async (_, { productId }) => {
      return Product.findOneAndDelete({ _id: productId });
    },
    updateProductCategory: async (_, { id, category }) =>
      Product.findOneAndUpdate({ _id: id }, { category }, { New: true }),
    updateProductName: async (_, { id, name }) =>
      Product.findOneAndUpdate({ _id: id }, { name }, { New: true }),
    updateProductDescription: async (_, { id, description }) =>
      Product.findOneAndUpdate({ _id: id }, { description }, { New: true }),
    updateProductImage: async (_, { id, image }) =>
      Product.findOneAndUpdate({ _id: id }, { image }, { New: true }),
    updateProductSecondImage: async (_, { id, image2 }) =>
      Product.findOneAndUpdate({ _id: id }, { image2 }, { New: true }),
    updateProductThirdImage: async (_, { id, image3 }) =>
      Product.findOneAndUpdate({ _id: id }, { image3 }, { New: true }),
    updateProductPrice: async (_, { id, price }) =>
      Product.findOneAndUpdate({ _id: id }, { price }, { New: true }),
  },

};


module.exports = resolvers;
