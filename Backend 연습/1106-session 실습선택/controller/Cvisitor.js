const { Visitor } = require('../model')

exports.home = (req, res) => {
  res.render('index')
}

// GET /visitors => 기존 방명록 전체 조회 후 render("visitor")
exports.visitor = (req, res) => {
  // select * from visitor;
  Visitor.findAll().then((result) => {
    console.log('findAll result: ', result)
    // console.log("0 index의 username", result[0].username); // dataValues는 생략 해도 됨!
    // 기대 : [{id: , username: , comment: }, {id: , username: , comment: }]
    res.render('visitor', { data: result })
  })

  // Visitor.findAll({
  //     where: { username: "lily"}
  // })
}

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  }
  //   Visitor.create(data)
  //     .then((result) => {
  //       console.log("create result: ", result);
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).send("오류 발생");
  //     });

  const createVistor = await Visitor.create(data)
  res.send(createVistor)
}

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('destroy result: ', result)
    res.send({ result: true })
  })
}

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // select * from visitor where id = ?? limit 1;
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result: ', result)
    res.send(result)
  })
}

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  }
  // update visitor set username='??', comment='???' where id = ?;
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log('update result: ', result)
    res.send({ result: true })
  })
}

exports.getTest = (req, res) => {
  // select username from visitor where id = 2 order by username ASC
  Visitor.findAll({
    attributes: ['username', 'id'],
    // where: {
    //   id: req.params.id,
    // },
    order: [['username', 'ASC']],
  }).then((result) => {
    console.log('findOne result: ', result)
    res.send(result)
  })
}
