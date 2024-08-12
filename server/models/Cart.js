const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  items: {
    type: String,
    required: true,
  },
});

const Cart = model("Cart", cartSchema);
module.exports = Cart;
