const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  let doc = await Users.findOne({ username: req.body.username });
  if (doc) {
    if (bcrypt.compareSync(req.body.password, doc.password)) {
      res.json({
        result: "ok",
        message: "Login successfully",
      });
    } else {
      // error password
      res.json({
        result: "nok",
        message: "Invalid password",
      });
    }
  } else {
    // error username
    res.json({
      result: "nok",
      message: "Invalid username",
    });
  }
});

// db.users.find().pretty()
router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await Users.create(req.body);
    res.json({ result: "ok" });
  } catch (e) {
    res.json({ result: "nok", error: e });
  }
});

module.exports = router;
