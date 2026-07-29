// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
 
function reverseWords(sentence) {
  // TODO: split into words, reverse the order, and join back together
  let convertArray = sentence.split(" ");
  let revStr = convertArray.reverse().join(" ");
  return revStr
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"
