const { User } = require('../model')

exports.index = (req, res) => {
  res.render('user')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
  User.create(req.body).then((result) => {
    console.log('User create:', result)
    res.send({ result: true })
  })
}

exports.signin = (req, res) => {
  res.render('signin')
}
exports.post_signin = (req, res) => {
  User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log('User findOne:', result)
    if (result) {
      req.session.user = result.id
      res.send({ result: true, id: result.id })
    } else res.send({ result: false })
  })
}

exports.profile = (req, res) => {
  if (!req.session.user) {
    res.redirect('/user/signin')
    return false
  }

  User.findOne({
    where: { id: req.session.user },
  }).then((result) => {
    if (result) res.render('profile', { data: result })
    else res.redirect('/user/signin')
  })
}

exports.profile_edit = (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
  }).then((result) => {
    console.log('User update:', result) // [ 1 ] or [ 0 ]

    // 업데이트 여부에 따라 result에 [ 1 ] 혹은 [ 0 ] 이 담김
    // 따라서 if문을 이용하여 result의 0번 인덱스가 1일 경우에 성공, 그렇지 않으면 실패로 응답
    if (result[0]) res.send({ result: true })
    else res.send({ result: false })
  })
}

exports.profile_delete = (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  }).then((result) => {
    console.log('User destroy:', result) // 1 or 0

    // 삭제 여부에 따라 result에 1 혹은 0 이 담김
    // 따라서 if문을 이용하여 result가 1일 경우에 성공, 그렇지 않으면 실패로 응답
    if (result) res.send({ result: true })
    else res.send({ result: false })
  })
}

exports.logout = (req, res) => {
  if (req.session.user)
    req.session.destroy(function (err) {
      res.send({ result: true })
    })
  else res.send({ result: false })
}
