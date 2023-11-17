const { Gallery } = require("../model");

// 지도 화면 UI
exports.mapUiPage = (req, res) => {
  res.render("map");
};

// 지도 api 이용 페이지
exports.mapPage = (req, res) => {
  res.render("map_api_complete");
};

exports.getMap = (req, res) => {
  Gallery.findAll().then((result) => {
    res.send(result);
  });
};


// 추가
exports.postInfo = (req, res) => {
  Gallery.findAll().then((result) => {
    res.send(result);
  });
}
