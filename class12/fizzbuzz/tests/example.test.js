const fizzbuzz = require("../example.js");

describe("Fizzbuzz should...", () => {
  test("return the number if not divisible by 3 or 5", () => {
    expect(fizzbuzz.fizzbuzz(7)).toBe(7);
  });

  test("return fizz if divisible by 3", () => {
    expect(fizzbuzz.fizzbuzz(3)).toBe("Fizz");
  });

  test("return fizzbuzz if divisible by 3 and 5", () => {
    expect(fizzbuzz.fizzbuzz(15)).toBe("FizzBuzz");
  });
});
