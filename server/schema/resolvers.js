const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    getCart: async (_, { userId }) => {
      try {
        const cart = await Cart.findOne({ user: userId }).populate("items");
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
    // Mutation to add an item to the cart
    addToCart: async (_, { userId, productId }) => {
      try {
        const product = await Product.findById(productId);
        if (!product) {
          throw new Error("Product not found");
        }

        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
          cart = new Cart({
            user: userId,
            items: [product],
            cost: product.price,
          });
        } else {
          cart.items.push(product);
          cart.cost += product.price;
        }

        await cart.save();
        return cart.populate("items");
      } catch (error) {
        throw new Error("Error adding item to cart");
      }
    },

    // Mutation to remove an item from the cart
    removeFromCart: async (_, { userId, productId }) => {
      try {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
          throw new Error("Cart not found");
        }

        const productIndex = cart.items.findIndex(
          (item) => item._id.toString() === productId
        );

        if (productIndex > -1) {
          const product = cart.items[productIndex];
          cart.items.splice(productIndex, 1);
          cart.cost -= product.price;
          await cart.save();
          return cart.populate("items");
        } else {
          throw new Error("Product not found in cart");
        }
      } catch (error) {
        throw new Error("Error removing item from cart");
      }
    },
  },
};

module.exports = resolvers;
