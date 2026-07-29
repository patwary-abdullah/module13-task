// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  const strLowercase = str.toLowerCase();
  // TODO: loop through the string and count vowels
  for (const i of strLowercase) {
    if(vowels.includes(i)){
        count++;
    }
  }
 
  return count;
}
 
console.log(countVowels("javascFFript")); // Expected: 3
