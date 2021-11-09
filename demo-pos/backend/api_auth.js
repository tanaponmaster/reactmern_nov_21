const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ result: "login" });
});

router.get("/register", (req, res) => {
  res.json({ result: "register" });
});

module.exports = router;
