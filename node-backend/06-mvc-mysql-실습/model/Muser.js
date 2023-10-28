const mysql = require("mysql");

const conn = mysql.createConnection({
    host : "localhost",
    user: "user",
    password : "1234fang^^",
    database : "sesac_test"
});

exports.getRegister = (callback) => {
    conn.query("Select * From user3", (err, rows) => {
        if(err){
            throw err;
        }
        console.log("register : ", rows);
        callback(rows);
    })
}