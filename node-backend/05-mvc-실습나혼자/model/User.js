// 모델에 있는 데이터는 밖에서 쓰고 싶으니까 exports 되어야 됨

exports.getUser = ()=>{
    const id = "lily";
    const pw = "12345";
    return {id,pw} ;

}

