// In this kata you will create a function that takes a list of
// non-negative integers and strings and returns a new list with
// the strings filtered out.

const filter_list = (l) => l.filter((item) => typeof item === "number");

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
