/* #1 */
const string = "The revolution will ot be televised!";
console.log(string);

const badString = string
console.log(badString);

/* #2 */
const single = 'Single Quotes';
const double = "Double Quotes";
const backtick = `Backtick`;

console.log(single, double, backtick);

/* BACKTICK = template literal */
/*  -> embed JS
    -> multiline declaration */

/* #3 */
const name = "Chris";
const greeting = `Greetings, ${name}!`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

/* CONCATENATION: '+' vs. template literal */

/* #4 */
const song = "Hip To Be Square";
const score = 9;
const highestScore = 10;
const output = `I liked the song ${song}. I gave it a score of ${(score / highestScore) * 100 }%.`;
console.log(output);

/* #5 */
const newLine = `Roses ar red,
Violets are blue,
White vine costs less,
Than dinner for two.`;
console.log(newLine);

/* normal string: \n */

/* #6 */
const quote = 'I\'m in danger.';
console.log(quote);

/* #7 */
const text = "654";
const number = 123;
console.log(text + number);
console.log(Number(text) + number);
console.log(text + String(number));

/* Number() ; String() operator */