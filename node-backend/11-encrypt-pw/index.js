const crypto = require("crypto");


function createHashedPw(pw) {
    return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("pw 1234 :", createHashedPw("1234"));
console.log("pw 1235 :", createHashedPw("1235"));

const input = "1234";
const dbPw = "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==";


console.log("compare result : ", createHashedPw(input) == dbPw);
function createHashedPwWithSalt(pw) {
    const salt = crypto.randomBytes(16).toString("base64");
    console.log("salt : ", salt)

    const iterations = 100;
    const keylen = 64 ;
    const digest = "sha512"

    return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64")
    // 첫번째 : 암호화할 문자열
    // 두번째 : salt값
    // 세번째 : 반복횟수 (높을수록 보안이 좋음)
    // 네번째 : 키의 길이
    // 다서번째 : 알고리즘
}
function comparePw (pw, salt) {
    const iterations = 100;
    const keylen = 64 ;
    const digest = "sha512"

    return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64")
}

const dbPwSalt = "M0C24ezP74EqdwFOwp4jzLWXWcLXqz7kBjzX1+2Hg9HBL9NJWJTI6P1TF4IOBhqWbUA7c1QHzqBmkCQNkMIivw=="
const dbSalt = "irryRqzZtRd5th3OpDa6FQ==";
console.log("compare result with salt : ", comparePw(input, dbSalt) == dbPwSalt);

// console.log("compare result : ", createHashedPwWithSalt(input) == dbPwSalt);

// console.log("pw 1234 with salt :", createHashedPwWithSalt("1234"))
