// You are going to be given a word. Your job is to
// return the middle character of the word. If the
// word's length is odd, return the middle character
// If the word's length is even, return the middle 2 characters.

const getMiddle = (s) => {
    if (s.length % 2 === 0) {
        let lengthDiv = s.length / 2;
        return s.slice(lengthDiv - 1, lengthDiv + 1);
    } else if (s.length % 2 === 1) {
        let lengthDiv = (s.length + 1) / 2;
        return s.slice(lengthDiv - 1, lengthDiv);
    }
};

console.log(getMiddle("middlee"));
