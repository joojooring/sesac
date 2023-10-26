// controller는 function부분이니까 해당 함수부분을 먼저 가져오고
// 함수를 ()=>{} 요 형태로 바꿔주고 함수명 각각 정의해주고
// 함수 안에서 쓸 데이터는 Model에 있으니까 model로 가서 데이터 다시 정의하고 돌아와
// controller에서 정의한 함수는 밖에서 쓸거니까 exports해주고
// id와 pw가 있는 곳을 체이닝으로 알려줘야됨
const {getUser,getData} = require("../model/MUser");
// const {getData} = require("../model/MUser");
// const MUser = require("../model/MUser");


exports.main = (req, res)=> {
    res.render("user");
  };


exports.login = (req, res)=> {
    const userData = getUser();

    let data;
    if (req.body.userid == userData.id && req.body.password == userData.pw) {
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
    res.send(data);
}

exports.mvclogin = (req, res) => {
  const userData = getData();

  let data;
  let found = false;
  for (let i = 0; i < userData.length; i++) {
    const [id, pw, name] = userData[i];
    if (req.body.userid === id && req.body.password === pw && req.body.name === name) {
      found = true;
      data = {
        isSuccess: true,
        msg: `${name}님 환영합니다.`,
      };
      break;
    }
  }

  if (!found) {
    data = {
      isSuccess: false,
      msg: `아이디 또는 비밀번호를 잘못 입력했습니다.`,
    };
  }

  res.send(data);
};

