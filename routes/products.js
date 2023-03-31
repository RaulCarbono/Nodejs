const express = require("express");
const productServices = require("../services/servicesProducts");
const faker = require("faker");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await productServices.getAllProducts(req, res);
  res.json(products);
});

router.post("/", async (req, res) => {
  await productServices.createNewProducts(req, res);
});

router.patch("/:id", async (req, res) => {
  const updateProducts = await productServices.updateProducts(req, res);
  res.json(updateProducts);
});

router.delete("/:id", async (req, res) => {
  const deleteProducts = await productServices.updateProducts(req, res);
  res.json(deleteProducts);
});

router.get(":id", async (req, res) => {
 await productServices.getOneProduct(req, res);
});

module.exports = router;
