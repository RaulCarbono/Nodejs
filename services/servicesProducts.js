const faker = require("faker");

const getAllProducts = (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let index = 0; index <= limit; index++) {
    products.push({
      nameP: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  return products;
};

const createNewProducts = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({
    ok: true,
    data: body,
  });
};

const updateProducts = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "success",
    product: body,
    id,
  });
};

const deleteProducts = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "delete",
    id,
  });
};

const getOneProduct = (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: "teclado",
    price: 2000,
    category: "tecnology",
  });
};

module.exports = {
  getAllProducts,
  createNewProducts,
  updateProducts,
  deleteProducts,
  getOneProduct,
};
