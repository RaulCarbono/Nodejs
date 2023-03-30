const express = require("express");
const productServices = require("../services/servicesProducts");
const faker = require("faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = productServices.getAllProducts(req, res);
  res.json(products);
});

router.post("/", (req, res) => {
  productServices.createNewProducts(req, res);
});

router.patch("/:id", (req, res) => {
  const updateProducts = productServices.updateProducts(req, res);
  res.json(updateProducts);
});

router.delete("/:id", (req, res) => {
  const deleteProducts = productServices.updateProducts(req, res);
  res.json(deleteProducts);
});

router.get(":id", (req, res) => {
  productServices.getOneProduct(req, res);
});

module.exports = router;
