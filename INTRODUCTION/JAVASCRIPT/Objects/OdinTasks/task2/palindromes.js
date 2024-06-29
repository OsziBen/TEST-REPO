const palindromes = function (str) {
    /*
    let lTR = "";
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[a-z0-9]/i)){
            lTR += str[i];
        }
    }
    rTL = lTR.split("").reverse().join("");
    return lTR === rTL;
    */
   let lTR = str.toLowerCase().match(/[a-z0-9]/g).join("");
   let rTL = lTR.split("").reverse().join("");
   return lTR === rTL;
};

// Do not edit below this line
module.exports = palindromes;