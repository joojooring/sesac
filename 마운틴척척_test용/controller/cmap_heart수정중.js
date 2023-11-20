const { Gallery, Comment } = require("../model");

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

exports.createComment = (req, res) => {
  console.log(req.body);
  // data
  const data = {
    u_id: "sohee3",
    g_id: 1,
    star: 3,
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

exports.getComment = (req, res) => {
  Comment.findAll({
    attributes: ["u_id", "star", "review"],
    where: {
      g_id: 1,
    },
    order: [["c_id", "DESC"]],
  }).then((result) => {
    // for (let i of result) {
    //   console.log(i.u_id);
    // }
    res.send({ result: result });
  });
};


// exports.heartGallery = (req, res) => {
//   // Heart 모델에서 heart_checked가 true인 데이터를 조회합니다
//   Heart.findAll({
//     where: {
//       u_id : u_id
//       // heart_checked: true
//     }
//   }).then((result) => {
//     res.send({ data : result });
//   });
//   }

// exports.heartList =  (req, res) => {
//   const data = {
//     g_name: g_name,
//     heart_checked: true,
//   }
//   Heart.create(data)
//   .then((result) => {
//     console.log('데이터가 성공적으로 저장되었습니다:', result);
//     res.send({data : result})
//   }).catch((error) => {
//     console.error('데이터 저장 중 오류가 발생했습니다:', error);
//   });
// }

// exports.heartList = (req, res) => {
//   const u_id = req.body.u_id;
//   const g_id = req.body.g_id;
  
//   const data = {
//     u_id: u_id,
//     g_id: g_id,
//   }
//   // 체크된 경우, 데이터베이스에 저장
//   if (req.body.myCheckbox) {
//     Heart.create(data).then((result) => {
//       console.log('데이터가 성공적으로 저장되었습니다:', result);
//         res.send({ data: result });
//     }).catch((error) => {
//       console.error('데이터 저장 중 오류가 발생했습니다:', error);
//       res.status(500).send({ error: '데이터 저장 중 오류가 발생했습니다' });
//     });
//   } else {
//     // 체크가 해제된 경우에 필요한 로직 추가
//     res.send({ message: '체크가 해제되었습니다' });
//   }
// };