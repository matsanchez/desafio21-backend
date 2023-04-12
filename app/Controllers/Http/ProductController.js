"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async create({ view }) {
    const html = await view.render("products/create");
    return html;
  }

  async get({ view }) {
    const products = await Product.all();
    return view.render("products/view", { products: { ...products.toJSON() } });
  }

  async store({ request, response }) {
    const { name, price, description, thumbnail } = request.body;
    try {
      const product = new Product();
      product.name = name;
      product.price = price;
      product.description = description;
      product.thumbnail = thumbnail;
      await product.save();
    } catch (error) {
      console.log(error);
    }
  }

  async delete({ params }) {
    console.log(params);
  }
}

module.exports = ProductController;
