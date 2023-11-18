const { User } = require('../model')
const pwSalt = require("../model/pwSalt");

exports.signUpPage = (req, res) => {
  res.render("signup");
};

// 회원가입 버튼 클릭시(암호화 비교 추가)
exports.postSignUp = (req, res) => {
  // 받아야할 데이터
  const { u_id,  password, salt, email, name } = req.body;

  pwSalt
        .hashPassword(password)
        .then(( { hashedPw, salt }) => {
          User.create({
            u_id: u_id,
            password: hashedPw,
            salt: salt,
            email: email,
            name: name,
          })
            .then((result) => {
              console.log('User create 성공: ', result);
              res.send({result: true});
            })
            .catch((err) => {
              console.log("user 생성 실패:", err);
              res.send({result: false});
            });
        })
        .catch((err) => {
          console.log("암호화 에러..", err);
          res.send({result: false});
        })
};


exports.postSignUpCheck = (req, res) => {
  User.findOne({
    where: { u_id: req.body.u_id },
  }).then((result) => {
    console.log('User findOne:', result)
    if (result) res.send({ result: true, id: result.id })
    else res.send({ result: false })
  })
}

// userRouter.get("/signup", signup.signUpPage);
// userRouter.post("/signup", signup.postSignUp);