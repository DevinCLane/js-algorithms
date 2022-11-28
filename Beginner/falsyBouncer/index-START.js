/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    let result = []
    for (item of array) {
        if (item) {
            result.push(item)
        }
    }
    return result;
}

// using filter

function falsyBouncer(array) {
    return array.filter(item => Boolean(item))
}


module.exports = falsyBouncer