// setTimeout(function(){
// console.log("1")
// },1000);

function printImmediately(print){
    print();
}
printImmediately(()=>console.log("Hello"))

function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=> console.log("async callback"),2000)

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                 (id == "joojooring" && password === "sesac") ||
                 (id == "lily" && password === "codingon")){
                    resolve(id);
                 } else {
                    reject(new Error('not found'));
                 }
            },2000);
        
        })
    }
    getRoles(user){
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                if(user === "joojooring"){
                    resolve({name: "joojooring", role : "admin"});
                }else {
                    reject(new Error ("no access, it's only for admin"));
                }
            },1000)

        });
    }
}

//클래스를 생성해 백엔드랑 통신함
const userStorage = new UserStorage();
const id = prompt("Enter your ID");
const password = prompt("Enter your password");

userStorage.loginUser(id, password)
.then(user=>userStorage.getRoles)
.then(user =>
     alert
     (`Hello ${user.name}, you are ${user.role} `))
.catch(console.log("error"));




// UserStorage.loginUser(
//     id,
//     password, 
//     user => {
//         UserStorage.getRoles(
//             user,
//             userWithRole =>{
//                 alert(`Hello ${userWithRole.name}, you are ${userWithRole.role} `);
//             },
//             error => {
//                 console.log("error");
//             }
//         )
//     },
//     error => {console.log("error")});
