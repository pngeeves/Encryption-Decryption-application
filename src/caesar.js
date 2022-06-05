// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input, shift, encode = true) {
  if(shift > 25 || shift < -25 || shift == 0){return false};
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let output = "";
  let inputA = input.toLowerCase();  
 
   
 for (let i = 0; i < inputA.length; i++) {
   let current = inputA[i];
   if(current === " " || (/^[a-zA-Z]+$/.test(current)==false)){
        output += current;
        continue;
      }
   if(encode){
   let curInd = alph.indexOf(current);
   let shiftInd = curInd + shift;
   if(shiftInd > 25) shiftInd = shiftInd - 26;
   if(shiftInd < 0) shiftInd = 26 + shiftInd;
   
   output += alph[shiftInd];
      }else{
   let curInd = alph.indexOf(current);
   let shiftInd = curInd - shift;
   if(shiftInd > 25) shiftInd = shiftInd - 26;
   if(shiftInd < 0) shiftInd = 26 + shiftInd;
   
   output += alph[shiftInd];
        }
     }
     return output;
     }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
