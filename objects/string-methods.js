let name = '     Tushar Langer'

// Length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())


// Challange


let isValidPassword = function (password) {
    return password.length < 8 || password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))