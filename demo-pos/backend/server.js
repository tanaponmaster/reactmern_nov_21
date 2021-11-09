const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("I am root");
});

// http://localhost:8081/register?username=admin&password=1234
app.get("/register", (req, res) => {
  res.json({ register: "ok", input: req.query });
});

app.listen(8081, () => {
  console.log("Server is running");
});
