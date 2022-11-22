/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    // to simply merge multiple arrays we can do
    let jointArray = []
    // on each array that is passed in as an argument, spread it into a new jointArray
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    
    // then if we want to return no duplicates, we create a set

    return [...new Set([...jointArray])]

}


module.exports = mergeArrays