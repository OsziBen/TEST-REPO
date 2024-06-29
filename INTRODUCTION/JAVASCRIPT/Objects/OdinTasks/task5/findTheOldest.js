const findTheOldest = function(arr) {
    let ages = arr.map((person) => {
        if(person.hasOwnProperty("yearOfDeath")){
            return person["yearOfDeath"] - person["yearOfBirth"];
        } else {
            return (new Date().getFullYear()) - person["yearOfBirth"];
        }
    });
    let oldestAge = ages.reduce((total, actual) => { if(actual > total){
        total = actual;
        }
        return total;
    });
    let pos = ages.indexOf(oldestAge);


    return arr[pos];
};

// Do not edit below this line
module.exports = findTheOldest;