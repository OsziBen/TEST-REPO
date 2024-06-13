const sumAll = function(lowerThreshold, upperThreshold) {
    if(!Number.isInteger(lowerThreshold) || !Number.isInteger(upperThreshold) || lowerThreshold < 0 || upperThreshold < 0){
        return "ERROR";
        }
        
    if(lowerThreshold > upperThreshold){
        [lowerThreshold, upperThreshold] = [upperThreshold, lowerThreshold];
    }
            
    /*
    let sum = 0;
            
    for(let i = lowerThreshold; i <= upperThreshold; i++){
        sum += i;
    }
    
    return sum;
    */

    return (lowerThreshold + upperThreshold) * (Math.floor((upperThreshold - lowerThreshold + 1) / 2)) + (((upperThreshold - lowerThreshold + 1) % 2) * (Math.floor((upperThreshold - lowerThreshold + 1 )/ 2) + lowerThreshold));
};

// Do not edit below this line
module.exports = sumAll;
