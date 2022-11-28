// sum the integers between two numbers
// rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9

function rangeSum(arr) {
  let result = 0
  for (let i = arr[0]; i <= arr[1]; i++) {
    result += i
  }
  return result;
}

module.exports = rangeSum;
