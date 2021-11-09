const express = require("express");
const app = express();
app.use("/api/v2", require("./api"));
app.use(express.static(__dirname + "/uploaded"));

app.listen(8081, () => {
  console.log("Server is running");
});
