
const mysql = require ("mysql");

// createConnection : mysql 연결 정보를 받아서 mysql과 연결
//Database(db)연결하는건 host(ip라고 생각하면 됨), user, password, database이름(sql에서 사용한 db이름)


// localhost 는 내가 사용하는 컴에 있는 ip
// 클라우드서버의 ip
const conn = mysql.createConnection({
    host : "localhost",
    user: "user",
    password:"1234fang^^",
    database : "sesac_test"
});

// exports.getVisitors = () => {

//     return [
//         {id : 1, username : "홍길동", comment:"내가 왔다."},
//         {id : 2, username : "이찬혁", comment:"으라차차"}
//     ]
// };

exports.getVisitors = (callback) => {
    conn.query("SELECT * FROM visitor", (err, rows) => {
        // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
        if(err) {
            throw err;
        }

        console.log("visitor : ", rows);
        
        callback(rows);

    })
}


exports.insertVisitor = (data, callback) => {
    // insert into visitor (username, comment) values ('????', '?????')
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;
  
    conn.query(sql, (err, result) => {
      // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
      if (err) {
        throw err;
      }
        console.log("visitor insert", result);

      callback(result.insertId);
    });
  };

exports. delVisitor = (id, callback) => {
    const sql = `delete from visitor where id = ${id}`

    conn.query(sql, (err, result) => {
        if(err){
            throw err ;
        }
        
        let flag = false;
        if(result.affectedRows) {
            flag = true;
        }

        console.log("delete : ", result);
        callback(flag)
    })

}



//   exports.modifyVisitor = (data, callback) => {
//     const sql2 = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;

//     conn.query(sql2, (err, result)=>{
//         if (err) {
//             throw err;
//           }
      
//           console.log("modify visitor : ", result);
//           callback(result.comment);
     
//     })
//   }