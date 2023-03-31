const faker = require("faker");

const getAllProducts = async (req, res) => {
  try {
    const products =  [];
  const { size } = await req.query;
  const limit = size || 5;
  for (let index = 0; index <= limit; index++) {
    products.push({
      nameP: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  return products
  
  } catch (error) {
    console.log(error)
  }
  
};

const createNewProducts = (req, res) => {
  const body = req.body;
  try {
    res.json({
      ok: true,
      data: body,
    });
  } catch (error) {
    console.log(error)
  }
};

const updateProducts = (req, res) => {
  try {
    const { id } = req.params;
  const body = req.body;
  res.json({
    message: "success",
    product: body,
    id,
  });
  } catch (error) {
    console.log(error)
  }
};

const deleteProducts = (req, res) => {
 try {
  const { id } = req.params;
  res.json({
    message: "delete",
    id,
  });
 } catch (error) {
  console.log(error)
 }
};

const getOneProduct = (req, res) => {
 try {
  const { id } = req.params;
  res.json({
    id: id,
    name: "teclado",
    price: 2000,
    category: "tecnology",
  });
 } catch (error) {
  console.log(error)
 } 
};

module.exports = {
  getAllProducts,
  createNewProducts,
  updateProducts,
  deleteProducts,
  getOneProduct,
};
