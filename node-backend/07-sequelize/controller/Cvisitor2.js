const {Visitor2} = require("../model")

exports.home = (req, res) => {
  res.render("index");
};

// GET : /visitors => 기존 방명록 전체 조회 후 render("visitor.ejs")
exports.visitor = (req, res) => {
    // findALL은 배열로 나타나게됨

    // select * from visitor ;
    Visitor2.findAll()
    .then((result)=>{
        // console.log("findAll result :", result);
        console.log("0 index의 username : ", result[0].dataValues.username); //dataValues 생략해도 됨

        // 나오길 기대했던건 : [{id : ,username:, comment: }] 배열로 나타나길
        res.render("visitor", {data : result})
    })
    
    // Visitor2.findAll({
    //     where : {username : "lily"},
    // }) 
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {

  // insert into values~~
  const data = {
    username : req.body.username,
    comment : req.body.comment 
  }
  // Visitor2.create(req.body)
//   Visitor2.create(data)
//   .then((result)=>{
//     console.log("create result :", result);
//     res.send(result)
//   }).catch((err)=>
//   {console.log(err);
//   res.status(500).send("오류발생")};)

const createVisitor = await Visitor2.create(data)
// .catch((err)=>{})
res.send(createVisitor);
};



// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {

  Visitor2.destroy({
    where : {
        id: req.params.id,
    }
  }).then((result)=>{
    console.log("destroy result : ", result);
    res.send({result : true});
  })
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // select * from visitor where id = ?? limit 1;
  Visitor2.findOne({
    where : {
        id : req.params.id
    }
  }).then((result)=>{
    console.log("findone result : ", result)
      res.send(result);
  })
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username : req.body.username,
    comment : req.body.comment 
  }


  // {앞엔 : 어떻게 업데이트할거냐} {뒤엔 : 어떤 값을 업데이트할거냐에 대한 조건 }
  // update usertable(visitor) set username= '??', comment='??' where id=?
    Visitor2.update(data, 
      {where : {
        id : req.body.id
      }
      }).then((result)=>{
      console.log("update result : ", result);
      res.send({result : true})
  })
};

// http://localhost:8000/visitor/test/3
exports.getTest = (req,res)=>{
  // select * from visitor where id=3 limit 1;
  // Visitor2.findOne({
  //   where : {
  //       id : req.params.id
  //   }
  // }).then((result)=>{
  //   console.log("findone result : ", result)
  //     res.send(result);
  // })

    // select username from visitor where id=3 order by username ASC;
  Visitor2.findAll({
    attributes : ["username", "id"],
    // where : {
    //     id : req.params.id
    // },
    order : [["username", "ASC"]] //order by username ASC

  }).then((result)=>{
    console.log("findone result : ", result)
      res.send(result);
  });

  

}