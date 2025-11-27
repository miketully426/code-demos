import nightmareCharacters from "./nightmareFolks.js";

function greetMeOld(inputName, personToGreet) {
  console.log(`Hello ${inputName}! My name is ${personToGreet}`);
}

const greetMe = (inputName, personToGreet) => {
  console.log(`Hello ${inputName}! My name is ${personToGreet}`);
};

const greetMeShort = inputName => console.log(`Hello ${inputName}!`);
;

const filterCritera = (item) => item.age < 100;

const youngPeople = nightmareCharacters.filter(filterCritera);

console.log(youngPeople);

// greetMeOld("Sally", "Oogie");
// greetMe("Jack", "Santa");
// greetMeShort("Zero");

const mario = rows => {
  for (let row = 0; row < rows; row++) {
    let output = "";
    for (let blank = rows - row - 1; blank > 0; blank--) {
      output += " ";
    }
    for (let block = row + 1; block > 0; block--) {
      output += "#";
    }
    console.log(output + "#");
  }
}

// mario(10)

const nameArray = ['Jack', 'sally', 'Santa', 'Zero', 'jack'];
// const outputArray = array.map(element => element.toLowerCase());
// console.log(outputArray);
const numberArray = [4, 50, 7, 3];
const output = numberArray.reduce((accumlator, item) => {
  return accumlator * item;
});
// console.log(output);
const stringOutput = nameArray.reduce((accumlator, item) => {
  if (!accumlator.includes(item)) {
    accumlator.push(item);
  }
  return accumlator;
}, [])

// console.log(stringOutput);
numberArray.sort((a, b) => a - b);
// console.log(numberArray)
const outputArray = nameArray.map(item => item.toLowerCase())
// console.log(outputArray)

nightmareCharacters.sort((a, b) => {
  if (a.lastName[0] < b.lastName[0]) {
    return -1
  }
  if (a.lastName[0] > b.lastName[0]) {
    return 1
  }
  if (a.lastName[0] === b.lastName[0]) {
    return 0
  }
});

// console.log(nightmareCharacters);