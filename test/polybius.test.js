const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// if !encode and input.length without spaces return false
describe("polybius() submission test written by Paula Geeves-Booth", () =>{

    describe("error submissions test", () => {
        it("it should return false if the number of characters in the string is odd ", () => {
              const actual = polybius("443242335212541 34", false);
              const expected = false;
              expect(actual).to.be.false;
            });
        });
//polybius("Hello world"); //> '3251131343 2543241341'
describe("submissions test for encoding", () => {
    it("it should leave spaces alone when returned", () => {
        const input = "hello world";
        const encode = true;
        const actual = polybius(input, encode);;
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
        });
//polybius("thinkful"); //> "4432423352125413"
    it("it should return an encoded message", () => {
        const input = "thinkful";
        const encode = true;
        const actual = polybius(input, encode);;
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
        });
//("ij") => "4242"
it("it should 42 for both i and j", () => {
    const input = "ij";
    const encode = true;
    const actual = polybius(input, encode);;
    const expected = "4242";
    expect(actual).to.equal(expected);
    });
});
//polybius("3251131343 2543241341", false); //> "hello world"
describe("submissions test for decoding", () => {
    it("it should return a decoded message", () => {
        const input = "3251131343 2543241341";
        const encode = false;
        const actual = polybius(input, encode);;
        const expected = "hello world";
        expect(actual).to.equal(expected);
        });
//("4242", false) => "i/ji/j"
    it("it should return i/j for 42", () => {
        const input = "4242";
        const encode = false;
        const actual = polybius(input, encode);;
        const expected = "i/ji/j";
        expect(actual).to.equal(expected);
        });
    });
});

