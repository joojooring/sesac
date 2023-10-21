const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/register", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/login", function (req, res) {
  const id = "lily";
  const pw = "12345";
  let data;
  if (req.body.userid == id && req.body.password == pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  // console.log(req.body);
  res.send(data);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});