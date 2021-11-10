const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

// db.users.find().pretty()
router.post("/register", async (req, res) => {
  await Users.create(req.body);
  res.json({ result: "registered" });
});

module.exports = router;
