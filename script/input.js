import { translateToEnglish, translateToMorse } from "./translator.js";

//Grabbing DOM HTML
const morseInput = document.querySelector(".container__morseInput");
const engInput = document.querySelector(".container__engInput");
const display = document.querySelector(".displayContainer__display");
const message = document.querySelector(".messageSender__message");

//listening for when ever anything is input in input and calling displayTranslation
morseInput.addEventListener("input", () => {
  displayTranslation();
});

//listening for when anything is input in enginput and calling displayTranslation
engInput.addEventListener("input", () => {
  displayTranslation();
});

//Function that is changing DOM HTML calling userInput
const displayTranslation = () => {
  display.innerHTML = userInput();
  message.innerHTML = userInput();
};

/*Function that is taking the value entered in the inputs and uses that 
  translation functions to return the translation and so it can be displayed*/
export const userInput = () => {
  let morseValue = morseInput.value;
  let engValue = engInput.value;
  if (morseValue === "") {
    return translateToEnglish(engValue);
  } else if (typeof engValue == "string") {
    return translateToMorse(morseValue);
  }
};
