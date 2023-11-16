const { Gallery } = require('../model')

exports.mapPage = (req, res) => {
  res.render("map완료_if_heart_true수정중2");
};

exports.getMap = (req, res) => {
    Gallery.findAll().then((result) => {
      res.send(result)
    })
  }
