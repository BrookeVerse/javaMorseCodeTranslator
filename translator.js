import { morseCode } from "./data/morseCode.js";
import { morsetoEng } from "./data/morseToEng.js";

//This function will solely use the string entered and use each letter as the key
//and then return the values for those keys.
export const translateToMorse = (string) => {
  return string
    .toLowerCase()
    .split("")
    .map((string) => {
      return morseCode[string];
    })
    .join(" ");
};

//A function to translate Morse Code to English
export const translateToEnglish = (string) => {
  return string
    .split(" ")
    .map((string) => {
      return morsetoEng[string];
    })
    .join("");
};