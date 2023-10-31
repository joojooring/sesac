const mysql = require('mysql')
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234fang^^',
  database: 'sesac_test',
})

exports.post_signup = (data, cb) => {
  // insert할거 작성 필요
  let sql = `INSERT INTO user3(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`
  cnn.query(sql, (err)=>{
    if (err) {
      throw err;
    }

    cb();
  });
};

exports.post_signin = (data, cb) => {
  let sql = `SELECT * FROM user3 WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`
  cnn.query(sql, function (err, rows) {
    if (err) 
    {throw err};
    cb(rows)
  })
}
exports.get_user = (id, cb) => {
  let sql = `SELECT * FROM user3 WHERE id='${id}' limit 1;`
  cnn.query(sql, function (err, rows) {
    if (err) throw err
    cb(rows)
  })
}

exports.update_profile = (data, cb) => {
  let sql = `UPDATE user3 SET name='${data.name}', pw='${data.pw}' , userid = '${data.userid}' WHERE id='${data.id}'`
  cnn.query(sql, (err) => {
    if (err) throw err
    cb()
  })
}
exports.delete_user = (id, cb) => {
  cnn.query(`DELETE FROM user3 WHERE id='${id}'`, (err) => {
    if (err) throw err
    cb()
  })
}
