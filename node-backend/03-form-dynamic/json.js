const data = { name: "lily", gender: "여자" };

const jsonData = JSON.stringify(data);
console.log("json: ", jsonData);

console.log("js object: ", JSON.parse(jsonData));