const { Comment } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

exports.comment = (req, res) => {
  //   const data = Visitor.getVisitors();
  //   res.render("visitor", { data: data });
  // Comment.getComments((rows) => {
  //   res.render("comment", { data: rows });
  // });
  Comment.findAll().then((result) => {
    console.log('findAll result: ', result)
    res.render('comment', { data: result })
  })
};

// POST /visitor => 방명록 insert
exports.postComment = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body);
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  }
  
      Comment.create(data)
      .then((result) => {
        console.log("create result: ", result);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("오류 발생");
      });


  // Comment.create(req.body, (id) => {
  //   console.log("ctrl postComment ", id);
  //   res.send({
  //     ...req.body,
  //     id,
  //   });
  // });

  
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteComment = (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('destroy result: ', result)
    res.send({ result: true })
  })

  // console.log(req.params);
  // Comment.delComment(req.params.id, (result) => {
  //   res.send({ result: result });
  // });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getCommentById = (req, res) => {

  Comment.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result: ', result)
    res.send(result)
  })

  //   Comment.getCommentById(req.params.id, (result) => {
  //   console.log("ctrl getCommentById: ", result);
  //   res.send(result);
  // });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchComment = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  }
  // update visitor set username='??', comment='???' where id = ?;
  Comment.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log('update result: ', result)
    res.send({ result: true })
  })

  // console.log(req.body);

  // Comment.patchComment(req.body, (result) => {
  //   console.log("ctrl getCommentById: patchComment", result);
  //   res.send({ result: true });
  // });
};