const repeatString = function(text, repNum) {
    if(repNum < 0) return "ERROR";
    let finalString = "";
    
    for(let i = 0; i < repNum; i++)
    {
        finalString += text;
    }
     return finalString;
};

// Do not edit below this line
module.exports = repeatString;
