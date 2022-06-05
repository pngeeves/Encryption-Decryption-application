const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("cesar() submission test written by Paula Geeves-Booth", () =>{
// error return false for input above 25 
describe("error submissions test", () => {
    it("should return false if input is above 25", () => {
        const actual = caesar("thinkful", 40);
        const expected = false;
          expect(actual).to.be.false;
        });
// error return false for input under -25 
    it("should return false if input is below -25", () => {
        const actual = caesar("thinkful", -40);
        const expected = false;
          expect(actual).to.be.false;
        });

//error return false if input = 0 
    it("should return false if input equals 0", () => {
        const actual = caesar("thinkful", 0);
        const expected = false;
          expect(actual).to.be.false;
        });
    });

//encode return message shift right w/ positive
describe("submissions test for encoding", () => {
    it("should return an encoded message that was shifted right", () => {
        const message = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(message, shift);
            expect(actual).to.equal(expected);
        });
//encode return message shift left w/ negative 
it("should return an encoded message that was shifted left", () => {
        const message = "thinkful";
        const shift = -3;
        const expected = "qefkhcri";
        const actual = caesar(message, shift);
            expect(actual).to.equal(expected);
});
//encode preserve spaces and special characters
    it("should preserve spaces and special characters", () => {
        const message = "this is a secret message!";
        const shift = 8;
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(message, shift);
            expect(actual).to.equal(expected);
        });
    });

//decode return decoded message shifted righ w/ positive
describe("submissions test for decoding", () => {
    it("should return an decoded message that was shifted right", () => {
        const encode = false;
        const message = "BPQA qa I amkzmb umaaiom!";
        const shift = 8;
        const expected = "this is a secret message!";
        const actual = caesar(message, shift, encode);
            expect(actual).to.equal(expected);
        });

//decode return decoded message shift left w/ negative 
    it("it should return an decoded message that was shifted left", () => {
        const encode = false;
        const message = "qefkhcri";
        const shift = -3;
        const expected = "thinkful";
        const actual = caesar(message, shift, encode);
            expect(actual).to.equal(expected);
        });
//decode should preserve spaces and special characters  
    it("should preserve spaces and special characters", () => {
        const encode = false;
        const message = "bpqa qa i amkzmb umaaiom!"
        const shift = 8;
        const expected = "this is a secret message!";
        const actual = caesar(message, shift, encode);
            expect(actual).to.equal(expected);
        })
    });
 });
