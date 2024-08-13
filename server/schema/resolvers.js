const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    products: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);

      return { token, user };
    },
    addToCart: async (parent, args) => {
      await Cart.create(args);
    },
  },
};

module.exports = resolvers;
