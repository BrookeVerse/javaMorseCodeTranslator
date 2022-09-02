import { userInput } from "./input.js";

describe("Test that when input is entered, it is recognised", () => {
  it("type Hello World print out Hello World", () => {
    //arrange
    let inputValue;
    //act
    inputValue = "Hello World";
    let result = userInput(inputValue);
    //assert
    expect(result).toBe("Hello World");
  });
});
