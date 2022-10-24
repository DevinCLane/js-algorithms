// how would you add up every number in a continguous array? e.g. [1, 2, 3, 4, 5, 6...100]

const gaussSumm = arr => {
    const lastItem = arr[arr.length - 1];
    return lastItem * (lastItem + 1) / 2
}

console.log(gaussSumm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55)