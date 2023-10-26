const User = require("../model/User")

exports.main = (req, res) => {
    res.render("registerindex");
}

exports.login = (req, res) => {
    const userData = User.getUser();
    let data;
    if (req.body.userid == userData.id && userData.password == userData.pw) {
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
}


