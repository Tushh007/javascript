const sumOfSquares = (arr) => {
    return arr.map((element) => element * element).reduce((prev, current) => prev + current)
}

console.log(sumOfSquares([1,2,3,4,5]))