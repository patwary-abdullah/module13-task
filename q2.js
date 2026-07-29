// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return "change the number";
    }
    let str = num.toString();
    // TODO: build the reversed string, then convert back to a number
    const revNum = str.split('').reverse().join('');
    //   console.log(typeof revNum);
    return Number(revNum);

}

console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7