const bcrypt = require("bcrypt");


const salt = 10;

function bcryptPw (pw) {
    return bcrypt.hashSync(pw,salt);
};

console.log("bcrypt비번1234 : ", bcryptPw("1234"));

function comparePw (pw, dbPw) {
    return bcrypt.compareSync(pw, dbPw);
}

const dbPw = bcryptPw("1234")
console.log("bcrypt비번1234 : ", dbPw);
console.log("comparePw1234 : ", comparePw("1234", dbPw));