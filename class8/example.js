const input = require("readline-sync");

try {
  const answer = input.question("What is your name?");
  console.log(answer.charAt(3));
} catch (error) {
  console.log(`Oh no! It broke! Look here: ${error}`);
} finally {
  console.log("Nice to meet you!");
}

console.log("I am outta here!");
