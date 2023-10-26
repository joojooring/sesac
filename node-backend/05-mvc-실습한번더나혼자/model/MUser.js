//  model에 데이터를 정의해주고 밖에서 사용할거니까 exports
// 데이터 함수명 정의하고 함수를 ()=>{} 형태로 바꿔줌
// 데이터 정의된 함수를 return해줌

exports.getUser =()=>{
    const id = "joojoo";
    const pw = "1234";

    return {id,pw}
}


exports.getData =()=>{
    let users = 
    `spreatics//12341234//코딩온
    codee//4321//코디
    lily//1234//릴리`;
    
    let lines = users.split("\n");
    let arr2= [];
    for(let i=0 ; i<lines.length; i++){
        let line = lines[i];
        let data = line.split("//");
        arr2.push(data);
    }
    
    console.log(arr2);

    let result = [];
    for (let i = 0; i < arr2.length; i++) {
        let [id, pw, name] = arr2[i];
        console.log(id, pw, name);
        result.push([id, pw, name]);
    }

    return result;
}    









