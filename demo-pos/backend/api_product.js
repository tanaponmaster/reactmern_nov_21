const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const { tokenIntercept1, tokenIntercept2 } = require("./demo_intercept");
const jwt = require("./jwt");

// http://localhost:8081/api/v2/product
router.get("/product", jwt.verify, async (req, res) => {
  const result = await Products.find();
  res.json(result);
});

// http://localhost:8081/api/v2/product
router.get("/product/name/:keyword", jwt.verify, async (req, res) => {
  var query = { name: new RegExp("^.*" + req.params.keyword + ".*$", "i") };

  const result = await Products.find(query);
  res.json(result);
});

// intercept demo
// http://localhost:8081/api/v2/test?token=1234
router.get("/test", tokenIntercept1, tokenIntercept2, (req, res) => {
  res.json({ result: "pass intercept" });
});

module.exports = router;
