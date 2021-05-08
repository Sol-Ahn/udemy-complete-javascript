"use strict";

// Default Parameters
/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000); */

// ------------------------------------------------------

// How Passing Arguments Works: Value vs. Reference
/* const flight = "LH456";
const sol = {
  name: "Sol Ahn",
  passport: 2536475849,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Ms. " + passenger.name;

  if (passenger.passport === 2536475849) alert("Checked in");
  else alert("Wrong passport!");
};

// checkIn(flight, sol);
// console.log(flight);
// console.log(sol);

// Is the same as doing...
// const flightNum = flight;
const passenger = sol;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// newPassport(sol);
// checkIn(flight, sol); */

// ------------------------------------------------------

// Functions Accepting Callback Functions
/* const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);
["Sol", "Soul", "Seoul"].forEach(high5);
 */

// ------------------------------------------------------

// Functions Returning Functions
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Sol");
greeterHey("Ahn");

greet("Hello")("Sol");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("Sol"); */

// ------------------------------------------------------

// The call and apply Methods
const lufthansa = {
  airline: "Lufthanse",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book(147, "Sol Ahn");
lufthansa.book(638, "Sol Han");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(70, "Los Ahn"); // Dose not work

// call method
book.call(eurowings, 97, "Los Ahn");
console.log(eurowings);

book.call(lufthansa, 572, "Los Han");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 148, "Los Ahn");
console.log(swiss);

// apply method
const flightData = [750, "Sol Yang"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method
// book.call(eurowings, 97, "Los Ahn");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(824, "Los Nha");
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Sol Ahn");
bookEW23("Sol Han");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = (value) => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// Callenge
// My solution
const addTax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const addVAT = addTax(0.23);
addTax(0.23)(100);
addTax(0.23)(23);
addVAT(100);
addVAT(23);

// Answer
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// ------------------------------------------------------

// Coding Challenge #1
// My solution
/* const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answerNum = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
      )
    );
    if (answerNum < 4) {
      this.answers[answerNum]++;
    }
  },
  displayResults(type) {
    if (typeof type === "array") console.log(type);
    else if (typeof type === "string") {
      const typeStr = type.split(",");
      console.log(
        `Poll results are ${typeStr[0]},${typeStr[1]},${typeStr[2]},${typeStr[3]}`
      );
    }
  },
};

document
.querySelector(".poll")
.addEventListener("click", poll.registerNewAnswer.bind(poll)); */

// Answer
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") console.log(this.answers);
    else if (type === "string")
      console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS Data Test
// data1 = [5, 2, 3];
// data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// ------------------------------------------------------

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23; // Data Encapsulation
})();

// console.log(isPrivate); // ReferenceError

(() => console.log("This will also never run again"))();

// Scope
{
  const isPrivate = 23;
  var notPrivate = 40;
}

// console.log(isPrivate); // ReferenceError
console.log(notPrivate);

// ------------------------------------------------------

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Closures Examples

// #1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Reassigning f function
h();
f();
console.dir(f);

// #2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // priority

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// ------------------------------------------------------

// Coding Challenge #2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
