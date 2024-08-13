const db = require("../config/connection");
const productSeeds = require("./productSeeds.json");
const { Product } = require("../models");

db.once("open", async () => {
  try {
    await Product.create(productSeeds);

    process.exit(0);
  } catch (err) {
    throw err;
  }
});
