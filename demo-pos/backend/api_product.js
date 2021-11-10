const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const { tokenIntercept1, tokenIntercept2 } = require("./demo_intercept");

// http://localhost:8081/api/v2/product?token1=1234&token2=4321
router.get("/product", async (req, res) => {
  const result = await Products.find();
  res.json(result);
});

// intercept demo
// http://localhost:8081/api/v2/test?token=1234
router.get("/test", tokenIntercept1, tokenIntercept2, (req, res) => {
  res.json({ result: "pass intercept" });
});

module.exports = router;
