/* 
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:
arrayFilter(arr, func)
*/

function arrayFilter(arr, func) {
    for (let ele of arr) {
        if (func(ele)) {
            return ele
        }
    }
    return undefined
}