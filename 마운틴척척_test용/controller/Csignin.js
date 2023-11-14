const {User} = require("../model/index")
exports.loginPage = (req, res) => {
  res.render("signin");
};

exports.postLogin = async(req, res) => {
  User.findOne({
    where: {
      // 컬럼명 : 사용자가 적은값
      u_id: req.body.u_id,
      password: req.body.password,
    },
  }).then((result) => {
    console.log("findOne: ", result);
    // session 적용전
    // if(result) {
    //   res.send({result: true}); 
    // } else {
    //   res.send({result: false});
    // }

    if(result) {
      req.session.user = result.u_id
      res.send({result: true, id: result.u_id});
    } else {
      res.send({result: false});
    }
  })
};
