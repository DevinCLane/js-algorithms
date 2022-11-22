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

// we can do the same thing with filter

function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })

    // if the index of the current element === the current index, that's the first occurance;
    // if we see that element again, it will no longer pass this condition and be ignored. This removes duplicates
    return jointArray.filter((ele, index) => jointArray.indexOf(ele) === index)
}


module.exports = mergeArrays