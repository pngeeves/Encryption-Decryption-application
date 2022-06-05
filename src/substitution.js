// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

function substitution(input, alphabet, encode = true) {
  //declare a normal alphabet to reference later   
 let normAlph = "abcdefghijklmnopqrstuvwxyz";
 //check if the length of inputed alphabet is === 26 w/o duplicates or if an alphabet was inputed
 if((new Set(alphabet).size) != 26 || alphabet == " "){return false};
 let inputA = input.toLowerCase();

 let result = "";
//loop through the lower case message and declare a variable that will hold each letter/value
//if the value is a space - push it into the empty string result 
for(let i = 0; i < inputA.length; i++) {
  let current = inputA[i];
  if(current === " "){result += current};
//match the idex of each letter of input to the equivilent in either the normal alphabet or mixed alphabet 
//push into result 
if(encode){  
  let ind = normAlph.indexOf(inputA.charAt(i));
    result += alphabet.charAt(ind);
} else{
  let ind = alphabet.indexOf(inputA.charAt(i));
    result += normAlph.charAt(ind);
 
}
}
return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
