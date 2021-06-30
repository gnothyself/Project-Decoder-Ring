// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    }
   
    let inputArray = input.toLowerCase().split(""); 
    let inputNumbers = inputArray.map((character) => {
      return character.charCodeAt()
    }); 

    let shiftedNumbers = inputNumbers.map((number) => {
      return number >= 97 && number <= 122 ? number + shift : number
    }); 
    
    let fixedNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97 && number > 64) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    }); 

    let finalArray = fixedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return finalArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
