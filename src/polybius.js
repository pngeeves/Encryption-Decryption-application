// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
  //if decode input length total is odd w/out - false
  //put input into an array and use filter to remove the spaces 
  //check if the length of the new array is odd 
  let inputArr = input.split("")
  let noSpaceArr = inputArr.filter(noSpace => noSpace != " ");
  if(!encode && (noSpaceArr.length) % 2 == 1){return false};

  //declare two objects with swiched keys so to reference them for encoding or decoding 
  //encoder object sould both have 42 as the value
  //decoder object should return 'i/j' for key 42
  const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 
    'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42','j': '42','k': '52', 'l': '13', 
    'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44',
    'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
    
  const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', 
    '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', 
    '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', 
    '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };

//declare value to hold either the encoder or decoder objects based on if encode is true or not 
const direction = encode ? encoder :decoder ;
//use match and reg exoressions to 
 let output = input
        .match(/[0-9]{2}|[a-z]|\s/g)
        .map(character => direction[character] || character)
        .join("");
    
  return output;
};

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
