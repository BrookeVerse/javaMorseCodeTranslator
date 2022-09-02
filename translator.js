import { morseCode } from "./data/morseCode.js";

//This function will solely use the string entered and use each letter as the key
//and then return the values for those keys.
export const translateToMorse = (string) => {
  return string
    .toLowerCase()
    .split("")
    .map((string) => {
      return morseCode[string];
    })
    .join("");
};
