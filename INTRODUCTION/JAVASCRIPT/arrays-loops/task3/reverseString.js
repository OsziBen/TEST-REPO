const reverseString = function(text) {
    /*
    let reversedText = "";
    for(let i = 0; i < text.length; i++)
    {
        reversedText += text.charAt(text.length-1-i);
    }
    
    return reversedText;
    */
   //split(""): convert to an array with given separator character
   //reverse(): reverse the order of elements in an array
   //join(""): returns a string from an array with given separator characters
   return text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
