const { Gallery, Heart } = require("../model");
// const { Heart } = require("../model");


// 지도 화면 UI
exports.mapUiPage = (req, res) => {
  res.render("map");
};

// 지도 api 이용 페이지
exports.mapPage = (req, res) => {
  res.render("map_api_최종수정중");
};

exports.getMap = (req, res) => {
  Gallery.findAll().then((result) => {
    res.send(result);
  });
};


exports.heartGallery = (req, res) => {
// Heart 모델에서 heart_checked가 true인 데이터를 조회합니다
Heart.findAll({
  where: {
    heart_checked: true
  }
}).then((hearts) => {
  if (hearts.length > 0) {
    res.send({ result: true });
  } else {
    res.send({ result: false });
  }
}).catch((error) => {
  console.log(error);
  res.send({ result: false });
});
}