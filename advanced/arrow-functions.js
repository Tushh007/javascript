const square = (num) => num * num

console.log(square(20))

const people = [{
    name: 'Tushar',
    age: 25
},
{
    name: 'Adam',
    age: 27
},
{
    name: 'Patrick',
    age: 52
}]

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const age22 = people.filter((person) => person.age == 25)

console.log(age22)