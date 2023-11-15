const { Gallery } = require('../model')

exports.mapPage = (req, res) => {
  res.render("map완료_if_heart_true수정중2");
};

exports.getMap = (req, res) => {
    // select * from visitor;
    Gallery.findAll().then((result) => {
      // console.log('findAll result: ', result)
      // console.log("0 index의 username", result[0].username); // dataValues는 생략 해도 됨!
      // 기대 : [{id: , username: , comment: }, {id: , username: , comment: }]
      res.send(result)
    })
  
    // Visitor.findAll({
    //     where: { username: "lily"}
    // })
  }
// userRouter.post("/map", map.postMap);





// exports.postSignUp = (req, res) => {
//   User.create(req.body).then((result) => {
//     console.log('User create:', result)
//     res.send({ result: true })
//   }).catch((err)=>{
//     console.log("User create err : ", err)
//     res.send({result : false})
//   })
// }

// exports.postSignUpCheck = (req, res) => {
//   User.findOne({
//     where: { u_id: req.body.u_id, password: req.body.password },
//   }).then((result) => {
//     console.log('User findOne:', result)
//     if (result) res.send({ result: true, id: result.id })
//     else res.send({ result: false })
//   })
// }

// userRouter.get("/signup", signup.signUpPage);
// userRouter.post("/signup", signup.postSignUp);


// userRouter.get("/map", map.mapPage);
// userRouter.post("/map", map.postMap);