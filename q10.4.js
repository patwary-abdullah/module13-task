// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object

function invertObject(obj) {
    let inverted = {};
    // TODO: loop through obj and swap each key/value pair into inverted
console.log(obj);
    for (const i in obj) {
        inverted[obj[i]] = i;   
    }

    return inverted;
}

console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }
