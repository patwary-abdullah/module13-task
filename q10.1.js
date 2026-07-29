// Input: a number
// Output: true or false
// Returns: a boolean
 
function isPerfectSquare(num) {
  // TODO: write your logic here
  if(Number.isInteger(Math.sqrt(num))){
    return true;
  }
  
  return false;
 
}
 
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false
