// If we list all the natural numbers below 10 that are multiples of
//  3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples
// of 3 or 5 below the number passed in. Additionally, if the number is
//  negative, return 0 (for languages that do have them).

const solution = (number) => {
    if (number <= 0) return 0;
    let result = 0;
    for (let i = 0; i < number; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) result += i;
    }
    return result;
};

console.log(solution(10));
