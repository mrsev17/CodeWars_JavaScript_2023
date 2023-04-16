// Create a function that gives a personalized
// greeting. This function takes two parameters:
// name and owner.

"use strict";

const greet = (name, owner) => (name === owner ? `Hello boss` : `Hello guest`);
