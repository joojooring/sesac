const {User} = require('../model')

exports.index = (req, res) => {
    res.render("index")
}

exports.signup = (req, res) => {
    User.findAll()
    .then((result)=>{
        res.render("signup", {data : result})
    })
}
exports.post_signup = (req, res) => {
    const data = {
        userid : req.body.userid,
        name : req.body.name,
        pw : req.body.pw
    }
  // 모델과 연결하여, user table에 회원가입 정보를 insert 해야됨
    // 정보가 완성되면 불린형태로 보냄 send({result : true})
    User.create(data).then((result)=>{
        res.send({result : data})
    })
}

exports.signin = (req, res) => {

}

exports.post_signin = (req, res) => {
  // 모델과 연결해서 실제로 회원이 존재하는지 검색필요
      // 성공 : {result : true, id: 숫자}
    // 실패 : {result :false }

    // rows.length =0 회원이 조회되지 않는다.
    // rows.length >0 회원이 조회된다.


}

exports.profile = (req, res) => {
      // req.body { id(number)} 
  // id에 해당하는 user를 select 해야됨
  // 그럼 모델이 필요해짐


}

exports.profile_edit = (req, res) => {
      // model에 연결해서 update해야됨

}

exports.profile_delete = (req, res) =>{
    
}
