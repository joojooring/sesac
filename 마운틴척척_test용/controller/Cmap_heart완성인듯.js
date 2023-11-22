const { Gallery, Comment, Heart } = require("../model");

// 지도 화면 UI
exports.mapUiPage = (req, res) => {
  res.render("map");
};

// 지도 api 이용 페이지
exports.mapPage = (req, res) => {
  Gallery.findAll().then((result) => {
    res.render("map_api_complete", { data: result });
  });
};

exports.getMap = (req, res) => {
  Gallery.findAll().then((result) => {
    res.send(result);
  });
};

// 리뷰 생성
exports.createComment = (req, res) => {
  const data = {
    u_id: "sohee3",
    g_id: req.body.g_id,
    star: req.body.star,
    review: req.body.review,
  };

  Comment.create(data)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send("오류 발생");
    });
};

// 리뷰 조회
exports.getComment = (req, res) => {
  Comment.findAll({
    attributes: ["u_id", "star", "review"],
    where: {
      g_id: req.body.g_id,
    },
    order: [["c_id", "DESC"]],
  }).then((result) => {
    res.send({ result: result });
  });
};

exports.heartGallery = (req, res) => {
  const u_id = req.session.user;
  const g_id = req.query.g_id;

  // Heart 모델에서 heart_checked가 true인 데이터를 조회합니다
  Heart.findAll({
    where: {
      u_id : u_id,
      g_id: g_id,
      heart_checked: true
    }
  }).then((result) => {
    console.log("리저트 : ", result);
    res.send({ data : result });
  });
  }


exports.getHeartList = (req, res) => {
  // const imgurl = req.query.imgurl;
  const g_id = req.query.g_id;
  Gallery.findOne({
    attribute : ["g_name", "imgurl"],
    where : {
      g_id : g_id
    }
  }).then((res)=>{
    // console.log("여기가 알이에스" , res);
  })
};

// 사용자가 찜한 갤러리 정보 불러오기
exports.getHeartUser = (req, res) => {
  Gallery.findAll({
    attribute: ['gallery.*'],
    include: [{
      model: Heart,
      where: {u_id: req.session.user},
      required: true,
    }]
  }).then((result)=>{
    console.log("gallery findall result: ", result)
    res.send(result);
  })
}

exports.heartList =  (req, res) => {
  const data = {
    g_name: req.body.g_name,
    // heart_checked: true,
  }
  Heart.create(data)
  .then((result) => {
    console.log('데이터가 성공적으로 저장되었습니다:', result);
    res.json({data : result})
  }).catch((error) => {
    console.error('데이터 저장 중 오류가 발생했습니다:', error);
  });
}

  // 체크된 경우, 데이터베이스에 저장
  exports.createHeart = (req,res) =>{
    const data = {
       u_id : req.session.user,

      // u_id: req.body.u_id,
      g_id: req.body.g_id
    };

    Heart.create(data)
    .then((result) => {
      console.log('데이터가 성공적으로 저장되었습니다:', result);
        res.send({ data: result });
    }).catch((error) => {
      console.error('데이터 저장 중 오류가 발생했습니다:', error);
      res.status(500).send({ error: '데이터 저장 중 오류가 발생했습니다' });
    });

  }
// };

exports. deleteHeart = (req,res)=>{
  const g_id = req.params.g_id;
  Heart.destroy({
    where : {
      u_id: req.session.user,
      g_id: g_id,
    }
  }).then((result)=>{
    console.log("delete heart : ", result);
    res.send({ result: result });
  }).catch((error) => {
    console.error('데이터 삭제 중 오류가 발생했습니다:', error);
    res.status(500).send({ error: '데이터 삭제 중 오류가 발생했습니다' });
  });
}