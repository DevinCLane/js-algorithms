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

// we can also remove duplicates using reduce

function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return jointArray.reduce((uniqueArray, item) => {
        // does the array include the item?, just return the array (don't add the duplicates)
        if (uniqueArray.includes(item)) {
            return uniqueArray;
            // if the array doesn't include the item, this is the first occurance; thus we add the item to the array
        } else return uniqueArray = [...uniqueArray, item]
    }, [])
}

module.exports = mergeArrays