const { User, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    products: async () => {
      return await Product.find({});
    },
    getCart: async (_, { userId }) => {
      try {
        const cart = await Cart.findOne({ user: userId }).populate("items");
        return cart;
      } catch (error) {
        throw new Error("Error retrieving cart");
      }
    },
    // products: async () => {
    //   return await Product.find({});
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email }) => {
      const user = await User.findOne({ email });
      const token = signToken(user);
      return { token, user };
    },
    // Mutation to add an item to the cart
   
  },
};

module.exports = resolvers;
