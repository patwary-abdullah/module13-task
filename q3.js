// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return "change the number";
    }
    let str = num.toString();
    let total = 1;
    // TODO: loop through each character, convert to number, and multiply
    for (const element of str) {
        total *=Number(element);        
    }
    return total;
}

console.log(productOfDigits(1239));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0
