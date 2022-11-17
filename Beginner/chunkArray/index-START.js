/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    const result = []
    for (const value of array) {
        // We will think of all our subarrays as the last subarray
        const lastArray = result[result.length - 1]
        // is there a last subarray? if not, create one
        // is the last sub array the size we're looking for? if it is, create a new sub array
        if (!lastArray || lastArray.length === size) {
            result.push([value])
            // if there is a last sub array, push to that value
            // if the last sub array hasn't hit our desired length yet, push to the sub array
        } else lastArray.push(value)
    }
    return result;
}


module.exports = chunkArray