// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number

function countMultiplesOfThree(numbers) {
    let count = 0;
    // TODO: loop through and count multiples of 3
    for (const i of numbers) {
        if (i % 3 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3
