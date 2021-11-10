const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");

// http://localhost:8081/api/v2/product
router.get("/product", async (req, res) => {
  const result = await Products.find();
  res.json(result);
});

module.exports = router;
