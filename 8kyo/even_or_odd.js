"use strict";

// Create a function that takes an integer
// as an argument and returns "Even" for even
// numbers or "Odd" for odd numbers.

const evenOrOdd = (number) => {
    if (number < 0) return (number * -1) % 2 === 1 ? "Odd" : "Even";
    return number % 2 === 1 ? "Odd" : "Even";
};
console.log(evenOrOdd(2));
