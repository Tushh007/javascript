// Logical && or || example
let temp = 150

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

// Challange
let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer up some vegan options.')
} else {
    console.log('Offer anything on the menu.')
}

