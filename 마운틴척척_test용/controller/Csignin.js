const { User } = require('../model/index');
const pwSalt = require("../model/pwSalt");
exports.loginPage = (req, res) => {
  res.render('signin');
};
// 암호화 추가하기
exports.postLogin =  (req, res) => {
  User.findOne({
    where: {
      // 컬럼명 : 사용자가 적은값
      u_id: req.body.u_id,
    },
  }).then((result) => {
    console.log("findONe 있냐? ", result);
    if(result) {
      pwSalt
          .comparePassword(
            req.body.password,
            result.salt,
            result.password,
          )
          .then((pwCorrect) => {
            if(pwCorrect) {
              // u_id 세션에 저장(로그인 했을때).
              req.session.user = result.u_id;
              console.log('postLogin: ', result);
              console.log('session', req.session);
              res.send({result: true, id: result.u_id});
            } else {
              res.send({result: false});
            }
          })
          .catch((error) => {
            console.log('password 에러: ', error);
            res.send({result: false});
          });
    } else {
        res.send({result: false});
    }
  }).catch((error) => {
    console.error('유저가 존재 안합니다.', error);
    res.send({result: false});
  });
};
