const fibonacci = function(countArg) {
    let count = parseInt(countArg);
    if(count < 0) return "OOPS";
    if(count === 0) return 0;
    let arr = [1, 1];
    for(let i = 2; i < count; i++){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return arr[count-1];
};

// Do not edit below this line
module.exports = fibonacci;