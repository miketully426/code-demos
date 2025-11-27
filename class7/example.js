class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    greetMe() {
        console.log(`Hi ${this.firstName}`);
    }
}

class Nurse extends Person {
    constructor(firstName, lastName, certification) {
        super(firstName, lastName);
        this.certification = certification;
    }
}

class LPN extends Nurse {
    constructor(firstName, lastName, numberOfPatients) {
        super(firstName, lastName, 'all of them')
        this.numberOfPatients = numberOfPatients;
    }
}

class Firefighter extends Person {
    constructor(firstName, lastName, fireHouse) {
        super(firstName, lastName);
        this.fireHouse = fireHouse;
    }
}

class Pet {
    #firstName
    constructor(firstName) {
        this.#firstName = firstName;
    }

    getFirstName() {
        return this.#firstName;
    }
}


const person = new Person('Mike', 'Tully');
const person2 = new Person('George', 'Clooney');
// console.log(person);
// console.log(person2);

const aNurse = new Nurse('Merideth', 'Grey', 'cpr');
// console.log(aNurse.firstName);
// aNurse.greetMe();
const fireman = new Firefighter('Tommy', 'Gavin', 'Harlem');
// console.log(fireman);
// fireman.greetMe();
// person.greetMe();

const lpn = new LPN('Henry', 'Ford', 35);

const pet = new Pet('Spot');

const people = [person, person2, aNurse, fireman, lpn, pet]

// for (item of people) {
//     console.log(item.firstName);
// }

pet.setFirstName('Cooper');
console.log(pet.getFirstName())