import { morseCode } from "./data/morseCode.js";
//grabbing the input box
//const input = document.querySelector(".inputBox");
//
//input.addEventListener("input", translateToMorse);

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
