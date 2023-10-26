const User = require("../model/User") ;
// User = {getUser :()=>{}}

exports.main = (req,res)=>{
    res.render("user");
}

exports. login =(req,res) =>{
    const userData = User.getUser();
// user Data = {id : "lily", pw : "12345"}
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