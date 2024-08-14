const { User, Product, Cart, CartItem } = require("../models");
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
        const cart = await Cart.findOne({ user: userId }).populate({
          path: "items.product",
        });
        return cart;
      } catch (error) {
        throw new Error("Error retrieving cart");
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user || !(await user.isCorrectPassword(password))) {
        throw new Error("Invalid credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addToCart: async (_, { productId, quantity }, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }

      const product = await Product.findById(productId);
      if (!product) {
        throw new Error("Product not found");
      }

      let cart = await Cart.findOne({ user: user._id });

      if (!cart) {
        cart = await Cart.create({ user: user._id, items: [] });
      }

      const cartItem = cart.items.find(
        (item) => item.product.toString() === productId
      );

      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }

      await cart.save();

      return cart.items
        .find((item) => item.product.toString() === productId)
        .populate("product");
    },
    removeFromCart: async (_, { productId, quantity }, { user }) => {
      if (!user) {
        throw new Error("Not authenticated");
      }

      const cart = await Cart.findOne({ user: user._id });

      if (!cart) {
        throw new Error("Cart not found");
      }

      const cartItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

      if (cartItemIndex === -1) {
        throw new Error("Product not in cart");
      }

      const cartItem = cart.items[cartItemIndex];

      if (quantity >= cartItem.quantity) {
        cart.items.splice(cartItemIndex, 1);
      } else {
        cartItem.quantity -= quantity;
      }

      await cart.save();

      return cartItem.populate("product");
    },
  },
};

module.exports = resolvers;
