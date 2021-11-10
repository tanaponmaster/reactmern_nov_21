const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
const Comments = require("./models/comments_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");

// login
router.post("/login", async (req, res) => {
  let doc = await Users.findOne({ username: req.body.username });
  if (doc) {
    // check username
    if (bcrypt.compareSync(req.body.password, doc.password)) {
      // check password

      const payload = {
        id: doc._id,
        level: doc.level,
        username: doc.username,
      };

      const token = jwt.sign(payload, "1000000");

      res.json({
        result: "ok",
        token,
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

// register
router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await Users.create(req.body);
    res.json({ result: "ok" });
  } catch (e) {
    res.json({ result: "nok", error: e });
  }
});

// comment
router.post("/comment", async (req, res) => {
  await Comments.create(req.body);
  res.json({ result: "ok" });
});

module.exports = router;
