// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

// function findSecondSmallest(numbers) {
//     // let smallest = Infinity;
//     // let secondSmallest = Infinity;
//     // TODO: loop through and update smallest/secondSmallest correctly
//     let sortedList = numbers.sort((a, b) => a - b);

//     return sortedList[1];
// }

// console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8


function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // 8
