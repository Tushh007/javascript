let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Is accound locked.')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome!')
}

// Challange
let temp = 4
if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 100) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice.')
}