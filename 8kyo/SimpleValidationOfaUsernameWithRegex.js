// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

"use sctrict";

function validateUsr(username) {
    if (username.length < 4 || username.length > 16) return false;
    return /^[a-z0-9_]+$/.test(username);
}
