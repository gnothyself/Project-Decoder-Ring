const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe ("polybius()", () => {

    it ("should return false if the length of the input string is an odd number when decoding", () => {
        expect(polybius("123", false)).to.be.false;
    });

    it("should maintain spaces throughout", () => {
        const actual = polybius("Hello wor ld"); 
        const expected = "3251131343 254324 1341"
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actual = polybius("HeLLo"); 
        const expected = "3251131343"
        expect(actual).to.equal(expected);
    });

    it("should convert both i and j to the number 42 when encoding, but return both letters when decoding", () =>{
        const actual1 = polybius("ij");
        const expected1 = "4242";
        const actual2 = polybius("42", false);
        const expected2 = "(i/j)";
        expect(actual1).to.equal(expected1);
        expect(actual2).to.equal(expected2);
    });

});