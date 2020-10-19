const Product = require("../models/productModels");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.lor(error);
  }
}
async function getProduct(req, res, id) {
  try {
    const product = await Product.findbyId(id);
    if (!product) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

async function createProduct(req, res) {
  try {
  } catch (error) {
    console.lor(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
