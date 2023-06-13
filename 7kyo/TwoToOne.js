// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

"use strict";

const longest = (s1, s2) => {
    const fullString = [...new Set(s1 + s2)];
    return fullString.sort().join("");
};

const testObj = {
    name: "Name",
    surname: "Surname",
    id: 77,
};

const { name, surname, id } = testObj;

console.log(surname);
console.log(name);
console.log(id);
