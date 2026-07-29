// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array

function getOddNumbers(n) {
    let odds = [];
    // TODO: write your loop here
    if (typeof n === "number" && Number.isInteger(n) && n > 0) {
        for (let i = 0; i <= 10; i++) {
            if (i % 2 !== 0) {
                odds.push(i);
            }
        }
    }
    else {
        return "Enter a valid number";
    }
    return odds;
}

console.log(getOddNumbers(13.4)); // Expected: [1, 3, 5, 7, 9]
