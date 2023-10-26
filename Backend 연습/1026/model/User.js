exports.getUser = () =>{
    const id = "lily";
    const pw = "12345";
    return { id, pw } ;
    // 이 함수에서 return을 안해주면 exports해도 밖에서
    // 쓸 수 가 없음
};
