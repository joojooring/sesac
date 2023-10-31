const User = require('../model/User')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
  // 모델과 연결하여, user table에 회원가입 정보를 insert 해야됨
  User.post_signup(req.body, function () {
    // 정보가 완성되면 불린형태로 보냄 send({result : true})
    res.send({ result: true })
  })
}

exports.signin = (req, res) => {
  res.render('signin')
}
exports.post_signin = (req, res) => {
  // 모델과 연결해서 실제로 회원이 존재하는지 검색필요
  User.post_signin(req.body, function (rows) {
    console.log(rows[0])

    // 성공 : {result : true, id: 숫자}
    // 실패 : {result :false }

    // rows.length =0 회원이 조회되지 않는다.
    // rows.length >0 회원이 조회된다.

    if (rows.length > 0) {res.send({ result: true, id: rows[0].id })}
    else {res.send({ result: false })}
  })
}

exports.profile = (req, res) => {

  // req.body { id(number)} 
  // id에 해당하는 user를 select 해야됨
  // 그럼 모델이 필요해짐

  User.get_user(req.body.id, function (result) {
    console.log('profile', result)
    if (result.length > 0) res.render('profile', { data: result[0] })
    else res.redirect('/user/signin')
  })
}

exports.profile_edit = (req, res) => {
  // model에 연결해서 update해야됨
  
  const data = {
    ...req.body,
    id: req.params.id,
  }
  User.update_profile(data, function () {
    res.send({ result: true })
  })
}

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true })
  })
}
