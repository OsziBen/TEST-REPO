/* #1 : function declaration */
function add7(number) {
    return number + 7;
}

console.log(add7(8));

/* #2 : function expression */
let multiply = function(number1, number2) {
    return number1 * number2;
};

console.log(multiply(3, 4));

/* #3 : multiline arrow function */
let capitalize = (string) => {
    firstLetter = string.charAt(0).toUpperCase();
    restOdLetters = string.slice(1, string.length).toLowerCase();
    return firstLetter + restOdLetters;
};

console.log(capitalize("dashboard"));
console.log(capitalize("ALLCAPSNOBREAK"));
console.log(capitalize("eDgElOrDtHiNgS"));

/* #4 arrow function */
let lastLetter = (text) => text.charAt(text.length - 1);

console.log(lastLetter("itneverends"));