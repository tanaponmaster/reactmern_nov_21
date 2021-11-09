const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.json({ result: "login" });
});

router.get("/register", (req, res) => {
  res.json({ result: "register" });
});


router.get("/product", (req, res) => {
    res.json({ result: "product" });
  });


router.get("/transaction", (req, res) => {
    res.json({ result: "transaction" });
  });

module.exports = router;
