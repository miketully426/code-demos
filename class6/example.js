class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetMe() {
        console.log(`Hi ${this.firstName}`);
    }
}

const person = new Person('Mike', 'Tully');
const person2 = new Person('George', 'Clooney');
// console.log(person);
// console.log(person2);

person.greetMe();