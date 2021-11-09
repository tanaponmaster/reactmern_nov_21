const express = require("express");
const app = express();

app.use(express.static(__dirname + "/uploaded"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/v2", require("./api"));

app.listen(8081, () => {
  console.log("Server is running");
});
