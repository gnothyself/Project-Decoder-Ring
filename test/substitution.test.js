const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution()", () => {

    it("should maintain spaces throughout", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actual = substitution("You ArE an excElleNt sPy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });

    it("should return false is the alphabet is not exactly 26 characters", () => {
        expect(substitution("excellent spy", "xoyqmcgrukswafnthdjpzibev")).to.be.false;
    });

    it("should check for duplicates in the alphabet", () => {
        expect(substitution("excellent spy", "xoyqmcggukswaflnthdjpzibev")).to.be.false;
    });
});