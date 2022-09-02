import { translateToMorse } from "./translator.js";

//grabbing the input box
export const input = document.querySelector(".inputBox");
export const display = document.querySelector(".container__display")

//event listener to call on translate function and input value
input.addEventListener("input", () => {
  displayTranslation();
});

//Will use the value of the input box and call on the trsnslate function
export const userInput = () => {
    let inputValue = input.value;
    return translateToMorse(inputValue);
  };
  

  const displayTranslation = () => {
    display.innerHTML = userInput();
}