const { Schema, model } = require("mongoose");

const yugiSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Yugioh = model("Yugioh", yugiSchema);

module.exports = Yugioh;
