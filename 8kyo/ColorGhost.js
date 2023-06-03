// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

"use strict";

class Ghost {
    constructor() {
        this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
    }
}

const myTest = new Ghost();
console.log(myTest.color());
