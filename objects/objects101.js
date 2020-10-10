let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// Challange
let person = {
    name: 'Tushar',
    age: 25,
    location: 'Bengaluru'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age += 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)