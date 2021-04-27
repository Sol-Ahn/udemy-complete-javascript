/*

// Linking a JavaScript File
let js = "amazing";
console.log(20 + 46 - 3);

// ---------------------------------------------

// Values and Variables
console.log("SolAhn");
console.log(23);

let firstName = "Sol"; // camelCase

console.log(firstName);
console.log(firstName);
console.log(firstName);

// proper varaible name
let sol_ahn = "SA";
let $new = 27;
let person = "solahn";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

// improper variable name
// let 3years = 3;
// let sol&ahn = "SA";
// let new = 27;
// let name = "sol";
// let Person = "solahn";
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 20);
console.log(typeof "sol");

// dynamic typing
javascriptIsFun = "YES!"; // changing the data type
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);

console.log(typeof null); // object => JavaScript Bug

// ---------------------------------------------

// Let, Const, Var
let age = 20;
age = 30; // reasigning the value

const birthYear = 1994;
// birthYear = 2004; // TypeError

// const job; // SyntaxError

var job = "programmer";
job = "teacher";

lastName = "Ahn"; // Bad
console.log(lastName);

*/

// ---------------------------------------------

// Basic Operators
/* 
const now = 2021;
const ageSol = now - 1994;
const ageAhn = now - 2010;
console.log(ageSol, ageAhn);

console.log(ageSol * 2, ageAhn / 10, 2 ** 3);

const firstName = "Sol";
const lastName = "Ahn";
console.log(firstName + " " + lastName);

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
x--;
x--;
console.log(x);

// Comparison Operators
// < > <= >=
console.log(ageSol > ageAhn); // true
console.log(ageAhn >= 12); // false

const isFullAge = ageAhn >= 12;

console.log(now - 1994 > now - 2010); //true 
*/

// Operator Precedence
// console.log(25 - 10 - 5); // left to right
const now = 2021;
const ageSol = now - 1994;
const ageAhn = now - 2010;
console.log(ageSol, ageAhn);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageSol + ageAhn) / 2;
console.log(ageSol, ageAhn, averageAge);

// ---------------------------------------------

// Coding Challenge #1
// Data 1
/* 
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;
*/

// Data 2
/* const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); // false */

// ---------------------------------------------
// Strings and Template Literals
/* const firstName = "Sol";
const job = "programmer";
const birthYear = 1994;
const year = 2021;

const sol =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(sol);

const solNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(solNew);

console.log(`Just a regular string...`);

console.log("String with \n\
mutiple \n\
lines");

console.log(`String
mutiple
lines`);
 */
// ---------------------------------------------

// Taking Decisions: if/else Statement
/* const age = 15;

if (age >= 18) {
  console.log("Sol can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sol is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2021;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); */

// ---------------------------------------------

// Coding Challenge #2
const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

// ---------------------------------------------

// Type Conversion and Coercion
// type conversion
const inputYear = "1994";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 15);

console.log(Number("Sol")); // NaN
console.log(typeof NaN); // number

console.log(String(27), 27);

// type coercion
console.log("I am " + 27 + " years old.");
console.log("I am " + String(27) + " years old.");
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // 231003
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
console.log("23" > "18"); // true

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

// ---------------------------------------------

// Truthy and Falsy Values
// 5 falsy values: 0 '' undefined null NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Sol")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 1000;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YaY! Height is defined");
} else {
  console.log("Height is ^undefined^");
}

// ---------------------------------------------

// Equality Operators: == VS ===
/* const age = 18;
if (age === 18) console.log("You just became an adult!(strict)");
if (age == "18") console.log("You just became an adult!(loose)"); // type coercion

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 27) {
  console.log("Cool! 27 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else if (favorite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 27 or 7 or 9");
}

if (favorite !== 27) console.log("Why not 27?");
 */
// ---------------------------------------------

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

/* if (shouldDrive) {
  console.log("Sol is able to drive!");
} else {
  console.log("Somenone else should drive..");
} */

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sol is able to drive!");
} else {
  console.log("Somenone else should drive..");
}

// ---------------------------------------------

// Coding Challenge #3
/* 
const dolphinAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinAverage > koalasAverage) {
  console.log("Dolphins is the winner!");
} else if (dolphinAverage === koalasAverage) {
  console.log("Both is the winner!.");
} else {
  console.log("Koalas is the winner!");
}
 */

// BONUS 1
/* 
const dolphinAverage = (97 + 112 + 101) / 3;
console.log(dolphinAverage);
const koalasAverage = (109 + 95 + 123) / 3;
console.log(koalasAverage);

if (dolphinAverage >= 100 && dolphinAverage > koalasAverage) {
  console.log("Dolphins is the winner!");
} else if (koalasAverage >= 100 && koalasAverage > dolphinAverage) {
  console.log("Koalas is the winner!");
} else if (dolphinAverage === koalasAverage) {
  console.log("Both is the winner!.");
} 
*/
// BONUS 2
const dolphinAverage = (97 + 112 + 101) / 3;
console.log(dolphinAverage);
const koalasAverage = (109 + 95 + 106) / 3;
console.log(koalasAverage);

if (dolphinAverage >= 100 && dolphinAverage > koalasAverage) {
  console.log("Dolphins is the winner!");
} else if (koalasAverage >= 100 && koalasAverage > dolphinAverage) {
  console.log("Koalas is the winner!");
} else if (
  dolphinAverage === koalasAverage &&
  dolphinAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Both is the winner!");
} else {
  console.log("No one is the winner..");
}

// ---------------------------------------------

// Swith Statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("Weekly Meeting");
    console.log("Go to grocery store");
    break;
  case "tuesday":
    console.log("Workout");
    break;
  case "wednesday":
  case "thursday":
    console.log("Coding");
    break;
  case "friday":
    console.log("Recycling Day");
  case "saturday":
  case "sunday":
    console.log("Happy Weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Weekly Meeting");
  console.log("Go to grocery store");
} else if (day === "tuesday") {
  console.log("Workout");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Coding");
} else if (day === "friday") {
  console.log("Recycling Day");
} else if (day === "saturday" || day === "sunday") {
  console.log("Happy Weekend");
} else {
  console.log("Not a valid day!");
}

// ---------------------------------------------

// Statements and Expressions

// expressions
3 + 4;
1994;
true && false && !false;

// statements
if (23 > 10) {
  const str = "23 is bigger than 10";
}

const me = "sol";
console.log(`I'm ${2021 - 1994} years old, ${me}`);

// ---------------------------------------------

// The Conditional(Ternary) Operator
const age = 25;
age >= 18
  ? console.log("I llke to drink wine 🍷")
  : console.log("I llke to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// ---------------------------------------------

// Coding Challenge #4

/* 
const bill = 275;
let tip;
bill >= 50 && bill <= 300 ? (tip = 0.15) : (tip = 0.2);
const total = bill + bill * tip;
console.log(
  `The bill was ${bill}, the tip was ${
    bill * tip
  }, and the total value was ${total}`
);
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
