import { translateToMorse } from "./translator.js";

//Testing the translator to Morse Code
describe("Testing translateToMorse to take in letters", () => {
  it("a will translate to .-", () => {
    //arrange
    let string;
    //act
    string = "a";
    let result = translateToMorse(string);
    //assert
    expect(result).toBe(".-");
  });
});

describe("Testing that the strings take any case.", () => {
  it("Keep will be taken in as keep", () => {
    //arrange
    let string;
    //act
    string = "Keep";
    let result = translateToMorse(string);
    //assert
    expect(result).toBe("-.-...--.");
  });
});

describe("Testing that the space in a string will be taken.", () => {
  it("Press space bar will translate into morse code /", () => {
    //arrange
    let spaceBar;
    //act
    spaceBar = " ";
    let result = translateToMorse(spaceBar);
    //assert
    expect(result).toBe(" / ");
  });
});

describe("testing that translateToMorse accepts numbers", () => {
  it("type 1 and it will translate to .----", () => {
    //arrange
    let numbers;
    //act
    numbers = "1";
    let result = translateToMorse(numbers);
    //assert
    expect(result).toBe(".----");
  });
});

describe("testing that translateToMorse accepts symbols", () => {
  it("type ? and it will translate to ..--..", () => {
    //arrange
    let symbols;
    //act
    symbols = "?";
    let result = translateToMorse(symbols);
    //assert
    expect(result).toBe("..--..");
  });
});

//Testing Translate Morse Code to English
describe("testing translateToEnglish to take in Morse code", () => {
  it("type *- and it will translate to a", () => {
    //arrange
    let code;
    //act
    code = "*-";
    let result = translateToEnglish(code);
    //assert
    expect(result).toBe("a");
  });
});

describe("testing that you can translate ..--.. back into ?", () => {
  it("type ..--.. and ? being the output", () => {
    //arrange
    let code;
    //act 
    code = "..--..";
    let result = translateToEnglish(code);
    //assert
    expect(result).toBe("?")
  })
})

describe("Testing that you can translate .---- back into 1", () => {
  it("type .---- and 1 being the output", () => {
    //arrange
    let code;
    //act
    code = ".----"
    let result = translateToEnglish(code);
    //assert
    expect(result).toBe("1");
  })
})

describe("Testing that you can translate / back into a space", () => {
  it("type / and a space will come between strings", () => {
    //arrange
    let code;
    //act
     code = " / ";
     let result = translateToEnglish(code);
    //assert
    expect(result).toBe(" ");
  })
})

describe("testing that if something isn't accepted there should be a response", () => {
  it("type # and an error will come back saying it isnt accepted", () => {
    //arrange
    let input;
    //act
    input = "#";
    let output = translateToMorse(input);
    //accert
    expect(output).toBe("Error This is not accepted.");
  });
});
//test each thing it should do.

//What should translateToMore function actually be able to do?

/* 
-Recieve letter and translate those letters into morse code. - done
-Take into consideration capital letters - these also need to translate to morse code. - done 
-Take into consideration spaces between words and translate these accordingly. - done
-Numbers!! - done
-Symbols?? - done
-It might need to have a way to say that this is accepted 
-There should be an output for what is typed in - done?
-Extention - other languages available (dont need this unless the language uses phonemic orthography) 
//should have a translateToEnglish translator - done
*/
