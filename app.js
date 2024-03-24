const express = require("express");
var app = express();


app.use("/assets", express.static(__dirname + "/public"));

app.use("/", function (req, res, next) {
  console.log("Request Url: " + req.url);
  next();
});

app.use("/person", require("./Routes/route"));

app.use("/person/:id", require("./Routes/route"));

app.listen(3000, function () {
  console.log("your function is running");
});
