const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router, controller, views, model
// 1. router 분리 
// 2. controller 분리 

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});