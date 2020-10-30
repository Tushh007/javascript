// Prototypal Inheritance
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio () {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  };

  set fullName (fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  };

  get fullName() {
      return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
    constructor (firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}


class Student extends Person {
    constructor (firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the course`
    }

    updateGrade(change) {
        this.grade += change
    }
}

const studentOne = new Student('Tushar', 'Langer', 25, 85, ["Sports", "Arts"])
console.log(studentOne.getBio())
studentOne.updateGrade(-60)
console.log(studentOne.getBio())

const me = new Employee("Tushar", "Langer", 25, 'Engineer', ["Sports", "Arts"]);
console.log(me)
// me.setName("Sachin Tendulkar");
console.log(me.getBio());
console.log(me.getYearsLeft())

const you = new Person("Andrew", "Mead", 27);
console.log(you.getBio());
