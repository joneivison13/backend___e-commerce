const mongoose = require("mongoose");

module.exports = {
  create(req, res) {
    const product = mongoose.model("Product");
    const { title, price, amount, description, thumbnail } = req.body;
    product.create({
      title,
      price,
      amount,
      description,
      thumbnail
    });

    return res.json(title, price, amount, description, thumbnail);
  },

  async index(req, res) {
    const product = mongoose.model("Product");
    const data = await product.find();
    return res.json(data);
  }
};
