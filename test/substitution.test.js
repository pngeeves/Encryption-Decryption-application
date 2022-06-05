const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutions() submission test written by Paula Geeves-Booth", () =>{
//error no alphabet return false
    describe("error submissions test", () => {
        it("should return false if no alphabet is provided ", () => {
            const input = "thinkful";
            const alphabet = " ";
            const encode = true;
            const actual = substitution(input, alphabet, encode);
              expect(actual).to.be.false;
            });
        
//error return false if alphabet != 26 and/or duplicates 
        it("should return false if alphabet is not equal to 26 or has repeating characters", () => {
            const input = "thinkful";
            const alphabet = "abcabcabcabcabcabcabcabcyz";
            const encode = true;
            const actual = substitution(input, alphabet, encode);
                expect(actual).to.be.false;
            });
        });
//encode return encoded message
    describe("encoding submissions test", () => {
        it("should return an encoded message ", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const encode = true;
            const expected = "jrufscpw";
            const actual = substitution(input, alphabet, encode);
                expect(actual).to.equal(expected);
            });
//encode preserve spaces 
        it("should preserve spaces", () => {
            const input = "you are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const encode = true;
            const expected = "elp xhm xf mbymwwmfj dne";
            const actual = substitution(input, alphabet, encode);
                 expect(actual).to.equal(expected);
             }); 
//encode work with special characters             
        it("should work with special characters", () => {
            const input = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const encode = true;
            const expected = "y&ii$r&";
            const actual = substitution(input, alphabet, encode);
                expect(actual).to.equal(expected);
            });   
        });  
//decode return a decoded message
    describe("decoding submissions test", () => {
        it("should return an decoded message ", () => {
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const encode = false;
            const expected = "thinkful";
            const actual = substitution(input, alphabet, encode);
                expect(actual).to.equal(expected);
        });
//decode should preserve space
        it("should return an decoded message ", () => {
            const input = "elp xhm xf mbymwwmfj dne";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const encode = false;
            const expected = "you are an excellent spy";
            const actual = substitution(input, alphabet, encode);
                expect(actual).to.equal(expected);
        });
//decode work with special characters             
        it("should work with special characters", () => {
            const input = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const encode = false;
            const expected = "message";
            const actual = substitution(input, alphabet, encode);
                expect(actual).to.equal(expected);
        });  
    });
});

