/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
  // Get the keys of both objects
    let keys1 = Object.keys(c1);
    let keys2 = Object.keys(c2);

    // If they have different numbers of properties, they're not equal
    if (keys1.length !== keys2.length) {
        return false;
    }

    // If any property in city1 is not in city2 or has a different value, they're not equal
    for (let key of keys1) {
        if (c1[key] !== c2[key]) {
            return false;
        }
    }

    // If all properties are the same, the objects are equal
    return true;
}


//uncomment next lines to console log results
// console.log(compareCities({},{}))
// console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
// console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))

//don't change this line
module.exports = compareCities;
