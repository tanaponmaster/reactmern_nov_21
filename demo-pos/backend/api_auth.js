const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

router.get("/register", (req, res) => {
  res.json({ result: "register" });
});

module.exports = router;
