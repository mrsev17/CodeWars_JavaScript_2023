// Create a method to see whether
// the string is ALL CAPS.

"use strict";

String.prototype.isUpperCase = function () {
    return this.valueOf().toUpperCase() === this.valueOf();
};
