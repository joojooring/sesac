let color = document.querySelector(".container")

function changeColor(color) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            document.querySelector(".container")
            resolve()
        }, 1000)

    })
};

changeColor("red").then(function () {
    return ("orange")
        .then(function () {
            return ("yellow")
        }).then(function () {
            return ("green")
        }).then(function () {
            return ("blue")
        }).then(function () {
            return ("black")
        }).then(function () {
            return ("pink")
        })
})
// function red() {
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "red"
//             resolve();
//         },1000)
//     })
// }

// function orange() {
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "orange"
//             resolve();
//         },1000)
//     })
// }

// function yellow() {
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "yellow"
//             resolve();
//         },1000)
//     })
// }

// function green() {
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "green"
//             resolve();
//         },1000)
//     })
// }

// function blue() {
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "blue"
//             resolve();
//         },1000)
//     })
// }

// function black() {
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "black"
//             resolve();
//         },1000)
//     })
// }

// red().then(function(){
//     return red()
// }).then(function(){
//     return orange();
// }).then(function(){
//     return yellow();
// }).then(function(){
//     return green();
// }).then(function(){
//     return blue();
// }).then(function(){
//     return black();
// })