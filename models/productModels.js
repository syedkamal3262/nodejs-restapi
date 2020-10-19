const products = require("../data/products.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findbyId(Id) {
  return new Promise((resolve, reject) => {
    const product = products.find((a) => a.id === Id);
    resolve(product);
  });
}

module.exports = {
  findAll,
  findbyId,
};
