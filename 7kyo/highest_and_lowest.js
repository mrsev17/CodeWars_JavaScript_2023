// In this little assignment you are given a string of space
// separated numbers, and have to return the highest and lowest number.

const highAndLow = (numbers) => {
    let data = numbers.split(" ").map((x) => +x);
    let highest = Math.max(...data);
    let lowest = Math.min(...data);
    return `${highest} ${lowest}`;
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
