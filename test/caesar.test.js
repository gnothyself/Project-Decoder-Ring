/*const { expect } = require("chai");
const caesar = require("../src/caesar");*/
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar()", () => {

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () =>{
        const input = "message";
        const shiftValues = [0, -26, 26, null, undefined];
        const actual = shiftValues.every((shift) => {
            return caesar(input, shift);
        });
        expect(actual).to.be.false;
    });

    it("should maintain spaces and non-alphabetic symbols throughout", () => {
        const expected = "cde $#@!";
        const actual = caesar("abc $#@!", 2);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actual1 = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
        const expected1 = "bpqa qa i amkzmb umaaiom!"
        const actual2 = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected2 = "this is a secret message!"
        expect(actual1).to.equal(expected1);
        expect(actual2).to.equal(expected2);
    });

    it("should wrap correctly when shifting past the last letters of the alphabet", () => {
        const actual1 = caesar("zzz", 1);
        const expected1 = "aaa"
        expect(actual1).to.equal(expected1);
        const actual2 = caesar("aaa", -1);;
        const expected2 = "zzz"
        expect(actual2).to.equal(expected2);
    })

});