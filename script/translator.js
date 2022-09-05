import { morseCode } from "../data/morseCode.js";
import { morsetoEng } from "../data/morseToEng.js";

/*This function is using the string parameter and making it an array with no space
,mapping that array to use a function so that the keys of morseCode to create an new array using the keys values*/
export const translateToMorse = (string) => {
  return string
    .toLowerCase()
    .split("")
    .map((string) => {
      return morseCode[string];
    })
    .join(" ");
};

/*This function is using string and making it an array, mapping that
array to use a function so that the keys of morseToEng to create an new array using the key values*/
export const translateToEnglish = (string) => {
  return string
    .split(" ")
    .map((string) => {
      return morsetoEng[string];
    })
    .join("");
};
