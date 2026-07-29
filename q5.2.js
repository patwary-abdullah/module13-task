// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];
    // TODO: loop through words and compare lengths
    for (const i of words) {
        if(i.length<shortest.length){
            shortest = i;
        }

    }

    return shortest;
}

console.log(findShortestWord("JavaScript is a fun language"));
//Expected: "a"
