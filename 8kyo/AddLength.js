// What if we need the length of the words
// separated by a space to be added at the
// end of that same word and have it returned
// as an array?

"use strict";

const addLength = (str) => str.split(" ").map((x) => `${x} ${x.length}`);
