let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()

let square = function (side) {
    let result = side * side
    return result
}

let value = square(3)
console.log(value)

// Challange
let convertFahrenheitToCelsious = function (temp) {
    return (temp - 32) * (5 / 9)
}

console.log(convertFahrenheitToCelsious(32))
console.log(convertFahrenheitToCelsious(68))

// Challange
let getTip = function (total, tipPercent = 0.2) {
    // return total * tipPercent
    return `A ${ tipPercent * 100 }% tip on $${ total } would be $${ total * tipPercent}`
}

console.log(getTip(40, 0.3))