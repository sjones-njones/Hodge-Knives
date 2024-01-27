const { GraphQLError } = require("graphql");
const { User, Product } = require("../models");
const { signToken } = require("../utils/jwt");

const resolvers = {
  Query: {
    // categories: async () => {
    // return await Category.find();
    // },
    // products: async (_, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name,
    //     };
    //   }

    //   return Product.find(params).populate("category");
    // },

    // product: async (_, { _id }) => {
    //   return await Product.findById(_id).populate('category');
    // },
    products: async () => {
      return Product.find();
    },
    product: async (_, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    archiveProducts: async () => {
      return Product.find({"category":"Archive"});
    },
    availableProducts: async () => {
      return Product.find({"category":"Available"});
    },
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
    addProduct: async (_, args) => {
      const product = await Product.create(args);
      return product;
    },
    removeProduct: async (_, { productId }) => {
      return Product.findOneAndDelete({ _id: productId });
    },
    updateProduct: async (_, { productData }, context) => {
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: context.productData._id },
        {
          $set: {
            updateProduct: productData,
          },
        },
        { new: true },
      );
      return updatedProduct;
    }
  },
};


module.exports = resolvers;
