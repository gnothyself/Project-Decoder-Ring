// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let square = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z", " "],
  ];
  function polybius(input, encode = true) {
    if (encode) {
        let messageArray = input.split("");
        let fixedMessage = messageArray.map((letter) => {
            let lowerCase = letter.toLowerCase();
            if (lowerCase === "i" || lowerCase === "j") {
                return "(i/j)";
            }
            return lowerCase;
        });

        let xAxis = [];
        let yAxis = fixedMessage.map((letter) => {
            for (let i = 0; i < square.length; i++) {
                const row = square[i];
                if (row.find((character) => character === letter)) {
                    xAxis.push(i + 1);
                    return row.indexOf(letter) + 1;
                }
            }
        });

        result = xAxis.reduce((acc, xValue, index) => {
            let pair = `${yAxis[index]}${xValue}`;
            if (pair === "65") {
              pair = " ";
            }
            acc.push(pair);
            return acc;
        }, []);
    }

    if (!encode) {
        let withSpaces = input.replace(" ", 65);
        if (withSpaces.length % 2 !== 0) return false;
        let coordinates = withSpaces.match(/..?/g);
        result = coordinates.map((yxAxis) => {
            let rowIndex = yxAxis.split("")[1] - 1;
            let columnIndex = yxAxis.split("")[0] - 1;
            return square[rowIndex][columnIndex];
        });
    }
    return result.join("");
  }
    
    

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
