const AudioBook = require("../classes/AudioBook");

describe("An AudioBook should...", () => {
  const book = new AudioBook(
    "Stone Soup",
    "Yum",
    "Ann McGovern",
    500,
    34,
    "Action"
  );
  test("have a title", () => {
    expect(book.title).toBe("Stone Soup");
  });

  test("has a duration and number of chapters", () => {
    expect(book.duration).toBe(500);
    expect(book.numChapters).toBe(34);
  });
});
