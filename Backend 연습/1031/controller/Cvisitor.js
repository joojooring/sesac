const { VIRTUAL } = require("sequelize");
const {Visitor} = require("../model");

// const model = require("../model");
// const Visitor = model.Visitor
// => const {Vistor} = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors => 기존 방명록 전체 조회 후 render("visitor")
exports.visitor = (req, res) => {
  // findAll 의 결과값은 배열로 나타남
  // SELECT * FROM visitor ;
  Visitor.findAll()
.then((result)=>{
  console.log("findAll : ", result);
  console.log("0 index의 username : ", result[0].dataValues.username);
  res.render("visitor", {data : result})
})
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  
  const data ={
    username : req.body.username,
    comment : req.body.comment
  }
  const createVisitor  = await Visitor.create(data)
  res.send(createVisitor);
  // Visitor.create(data).then((result)=>{
  //   console.log("create result : ", result);
  //   res.send(result)
  // }).catch((err)=>{
  //   console.log(err);
  //   res.status(500).send("오류발생");
  // })
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
 
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
 
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
 
};
