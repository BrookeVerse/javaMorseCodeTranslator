import { morseCode } from "../data/morseCode.js";
import { morsetoEng } from "../data/morseToEng.js";

/*This function is using the morseCode Object and making it an array, mapping that
array to use the keys of morseCode to create an new array using the key values*/
export const translateToMorse = (string) => {
  return string
    .toLowerCase()
    .split("")
    .map((string) => {
      return morseCode[string];
    })
    .join(" ");
};

/*This function is using the morseToEng Object and making it an array, mapping that
array to use the keys of morseToEng to create an new array using the key values*/
export const translateToEnglish = (string) => {
  return string
    .split(" ")
    .map((string) => {
      return morsetoEng[string];
    })
    .join("");
};
