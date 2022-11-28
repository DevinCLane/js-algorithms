/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


/* 
By searching for the value larger than num, we can say that num
would take that index if it were added to the array
*/

function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b)
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
         // once we find the value greater than num, we return it
         return i
      }
   }
   // if we don't find a value greater than num, we return the array length (num will go at the end)
   return arr.length
}


// using indexOf to the find the index of the value directly

function whereIBelong(arr, num) {
   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}


module.exports = whereIBelong