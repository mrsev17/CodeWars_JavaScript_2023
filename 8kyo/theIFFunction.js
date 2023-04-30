// Create a function called _if which takes
// 3 arguments: a value bool and 2 functions
// (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be
// called, otherwise call the func2.

"use strict";

const func1 = () => console.log("True");
const func2 = () => console.log("False");
const _if = (bool, func1, func2) => (bool ? func1() : func2());
