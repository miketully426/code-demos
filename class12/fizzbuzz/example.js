const fizzbuzz = (num) => {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  }
  return num;
};

module.exports = {
  fizzbuzz,
};
