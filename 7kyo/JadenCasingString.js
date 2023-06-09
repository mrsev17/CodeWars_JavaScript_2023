// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

"use strict";

String.prototype.toJadenCase = function () {
    return this.split(" ")
        .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
        .join(" ");
};
