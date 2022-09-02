import { translateToEnglish, translateToMorse } from "./translator.js";

//grabbing the input box
const input = document.querySelector(".inputBox");
const enginput = document.querySelector(".engBox");
const display = document.querySelector(".container__display");

//event listener to call on translate function and input value
input.addEventListener("input", () => {
  displayTranslation();
});

//Will use the value of the input box and call on the translate function
export const userInput = () => {
  let morseValue = input.value;
  let engValue = enginput.value;
  if (morseValue === "") {
      return translateToEnglish(engValue);
} else if (typeof engValue == "string") {
    console.log("Hello");
    return translateToMorse(morseValue);
  }
};

const displayTranslation = () => {
  display.innerHTML = userInput();
};
//event listern to call for the translation of morse code
enginput.addEventListener("input", () => {
  displayTranslation();
});
