// Take an array and remove every second element
// from the array. Always keep the first element
// and start removing with the next element.

const removeEveryOther = (arr) => arr.filter((x, i) => i === 0 || i % 2 === 0);

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7]));
