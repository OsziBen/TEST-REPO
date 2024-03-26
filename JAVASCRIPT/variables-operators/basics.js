/* -- console log command -- */
console.log("Hello World")

/* -- var ; let ; const -- */

//let message0;
//message0 = "Hello";
let message0 = "Hello";
 /* -- pop-up window notification -- */
//alert(message0);
console.log(message0);

let user = "John";
let age = 25;
let message = "Hello";
message = "Changed message"
console.log(user, age, message);
/* var is old-school */

/* -- copying values -- */
let message1 = "I'm the original!";
let message2 = message1;

console.log(message1, message2);

/* -- naming variables -- */
/* abc, 123, $, _ */
/* camelCase */
/* reserved names: 'let', 'class', 'return', function' */

let $ = 1;
let _ = 2;
console.log($ + _);

/* -- STRICT MODE -- */
//"use strict";
num = 5;
console.log(num);
/* if "use strict" is used, stated code won't run */

/* -- CONSTANTS -- */
const date = "2024.03.26.";
/* consts cannot be reassigned */
/* hard coded values */
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
console.log(color);

/* -- NUMBERS -- */
/* operators 
+ : addition
- : subtraction
* : multiplication
** : exponentiation
/ : division
% : modulus
++ : increment
-- : decrement
*/

/* operand + operator = operand */
let x = 5;
console.log(Math.pow(x,2)); /* pow */

/* numbers: with or without decimals / scientific notation */
/* NUMBER TYPE: 64-bit floating point; ONLY THIS TYPE! */

/* CONCATENATION */
/* '+' symbol */
/* with other symbols, it tries to convert it to number */
/* number vs string */

/* NaN - Not a Number; no possible conversion */
/* using NaN is arithmetics returns NaN too */
/* isNaN() function for checking */

/* Infinity / -Infinity */
/* division with 0 also returns Infinity */

/* hexadecimal / base values */
/* toString(base) 2-36 */

/* do NOT create number objects */

/* -- == vs. === -- */
/* == : equal (value only) */
/* === : equal (value AND datatype) */

/* toFixed(num) - rounding numbers */

/* Number("num") - convert string to number */

/* typeof - type specificity */

