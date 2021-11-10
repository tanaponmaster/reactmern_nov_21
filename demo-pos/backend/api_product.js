const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");



// http://localhost:8081/api/v2/product
router.get("/product", tokenIntercept, async (req, res) => {
  const result = await Products.find();
  res.json(result);
});

// intercept demo
// http://localhost:8081/api/v2/test?token=1234
router.get("/test", tokenIntercept, (req, res) => {
  res.json({ result: "pass intercept" });
});

module.exports = router;
