"use strict";

/* function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // 'var' is not affected by block scope
      // Creating new variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // ReferenceError
    console.log(millenial);
    // console.log(add(2, 3)); // ReferenceError
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Sol";
calcAge(1994);
// console.log(age); // ReferenceError
// printAge(); // ReferenceError
 */

// ----------------------------------------------------

// Hoisting
/* // - variable
console.log(me); // undefined
// console.log(job); // ReferenceError
// console.log(year); // ReferenceError

var me = "Sol";
let job = "Junior front-end developer";
const year = 1994;

// - functions
console.log(addDecl(2, 3)); // works
// console.log(addExpr(2, 3)); // ReferenceError
// console.log(addArrow(2, 3)); // ReferenceError

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; // the function is undefined

// Example
console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(x === window.y); // false
console.log(x === window.z); // false */

// ----------------------------------------------------

// THIS Keyword
/* console.log(this); // Window object

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); // undefined
};
calcAge(1994);

const calcAgeArrow = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this); // Window object
};
calcAgeArrow(1996);

const sol = {
  year: 1994,
  calcAge: function () {
    console.log(this); // sol object
    console.log(2021 - this.year);
  },
};
sol.calcAge();

const ahn = {
  year: 2000,
};

ahn.calcAge = sol.calcAge;
ahn.calcAge();

const f = sol.calcAge;
f(); // TypeError */

// ----------------------------------------------------

// Regular Functions vs. Arrow Functions

// var firstName = "ssol";

/* const sol = {
  firstName: "sol",
  year: 1994,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    // Solution 1
     const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    }; 

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // Do not use arrow function as a method!
  greet: () => {
    console.log(this); // Window object
    console.log(`Hey ${this.firstName}`);
  },
};
sol.greet();
// console.log(this.firstName); // undefined
sol.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments); // ReferenceError
  return a + b;
};
addArrow(2, 5, 8);
 */
// ----------------------------------------------------

// Primitives vs. Objects (Primitive vs. Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "sol",
  age: "27",
};
const friend = me;
friend.age = 30;
console.log("Friend:", friend);
console.log("Me:", me);

// Primitive types
let lastName = "Ahn";
let oldLastName = lastName;
lastName = "Han";
console.log(lastName, oldLastName);

// Reference types
const sol = {
  firstName: "Sol",
  lastName: "Ahn",
  age: 27,
};
const changedSol = sol;
changedSol.lastName = "Han";
console.log("Before change name:", sol);
console.log("After change name:", changedSol);

// changedSol = {};

// Copying objects
const sol2 = {
  firstName: "Sol",
  lastName: "Ahn",
  age: 27,
  family: ["Alice", "Bob"],
};

const solCopy = Object.assign({}, sol2); // shallow copy
solCopy.lastName = "Han";

solCopy.family.push("Mary");
solCopy.family.push("John");

console.log("Before change name:", sol2);
console.log("After change name:", solCopy);
