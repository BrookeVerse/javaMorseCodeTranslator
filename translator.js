import { morseCode } from "./data/morseCode.js";
//grabbing the input box
const input = document.querySelector(".inputBox");
//
input.addEventListener("input", () => {
  let inputValue = input.value;
  console.log(inputValue);
});
//Need the input value to be what goes through the translator
export const translateToMorse = (string) => {
  return string
    .toLowerCase()
    .split("")
    .map((string) => {
      return morseCode[string];
    })
    .join("");
};

export default translateToMorse;
