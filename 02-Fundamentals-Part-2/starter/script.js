// Activating Strict Mode
"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// error
// const interface = "Audio";
// const private = 123;
// const if = 11; */

// --------------------------------------------------

// Functions
/* function logger() {
  console.log("My name is Sol");
}

// calling|running|invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num); */

// --------------------------------------------------

// Function Declarations VS Expressions

/* // Function declaration
// generic function
const age1 = calcAge1(1994);

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

console.log(age1);

// Function expression
// anonymous function
const age2 = calcAge2(1994); // ReferenceError

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

console.log(age1, age2); */

// --------------------------------------------------

// Arrow Functions
/* const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1994, "Sol"));
console.log(yearsUntilRetirement(1996, "Ahn")); */

// --------------------------------------------------

// Functions Calling Other Functions

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); */

// --------------------------------------------------

// Reviewing Functions

/* const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1994, "Sol"));
console.log(yearsUntilRetirement(1954, "Ahn")); */

// --------------------------------------------------

// Code Challenge #1
/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins..");
  }
}

checkWinner(avgDolphins, avgKoalas);

// Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas); */

// --------------------------------------------------

/* // Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Literal Syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yearArr = new Array(1990, 1994, 2000, 2021);
console.log(yearArr);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"]; // TypeError

const firstName = "sol";
const sol = [
  firstName,
  "Sol",
  "Ahn",
  2021 - 1994,
  "junior frontend developer",
  friends,
];
console.log(sol);

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1991, 1946, 2000, 2008, 2019];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1);
console.log(age2);
console.log(age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); */

// --------------------------------------------------

// Basic Array Operations(Methods)
/* const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

// Search elements
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) console.log("You have a friend called Steven"); */

// --------------------------------------------------

// Coding Challenge #2
/* // const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     const tip = 0.15;
//     return tip;
//   } else {
//     const tip = 0.2;
//     return tip;
//   }
// };

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); */

// --------------------------------------------------

// Introduction to Objects
// Literal Syntax
/* const sol = {
  firstName: "Sol", // propertiy
  lastName: "Ahn",
  age: 2021 - 1994,
  job: "junior frontend developer",
  friends: ["Michael", "Steven", "Peter"],
}; */

// --------------------------------------------------

//  Dot vs Bracket Notation
/* const sol = {
  firstName: "Sol", // propertiy
  lastName: "Ahn",
  age: 2021 - 1994,
  job: "junior frontend developer",
  friends: ["Michael", "Steven", "Peter"],
};
console.log(sol);

// dot notation
console.log(sol.lastName);
console.log(sol["lastName"]);

// bracket notation; able to put an expression
const nameKey = "Name";
console.log(sol["first" + nameKey]);
console.log(sol["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Sol? Choose between firstName, lastName, age, job, and friends"
);

if (sol[interestedIn]) console.log(sol[interestedIn]);
else
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );

sol.location = "Seoul";
sol["hobby"] = "reading a book";
console.log(sol);

//  Challenge
console.log(
  `${sol.firstName} has ${sol.friends.length} friends, and her best friend is called ${sol.friends[0]}.`
); */

// --------------------------------------------------

// Object Methods
/* const sol = {
  firstName: "Sol",
  lastName: "Ahn",
  birthYear: 1994,
  job: "junior frontend developer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2021 - birthYear;
  }, 

  calcAge: function () {
    return 2021 - this.birthYear;
  }, 

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      sol.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(sol.calcAge());

console.log(sol.age);
console.log(sol.age);
console.log(sol.age);

// console.log(sol["calcAge"](sol.birthYear));

// Challenge
if (sol.hasDriversLicense == true) {
  console.log(
    `${sol.firstName} is a ${sol.age}-year old ${sol.job}, and she has a driver's license.`
  );
} else {
  console.log(
    `${sol.firstName} is a ${sol.age}-year old ${sol.job}, and she has no driver's license.`
  );
} 

console.log(sol.getSummary());
 */
// --------------------------------------------------

//  Coding Challenge #3
/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
  );
} */

// --------------------------------------------------

// Iteration: The For Loop
/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
} */

// --------------------------------------------------

// Looping Arrays, Breaking and Continuing
/* const sol = [
  "Sol",
  "Ahn",
  2021 - 1994,
  "junior frontend developer",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < sol.length; i++) {
  // Reading an Array
  console.log(sol[i], typeof sol[i]);
  // Filling an Array
  // types[i] = typeof sol[i];
  types.push(typeof sol[i]);
}

console.log(types);

const years = [2010, 1994, 1999, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

//  continue and break
for (let i = 0; i < sol.length; i++) {
  if (typeof sol[i] !== "string") continue;
  console.log(sol[i], typeof sol[i]);
}

for (let i = 0; i < sol.length; i++) {
  if (typeof sol[i] === "number") break;
  console.log(sol[i], typeof sol[i]);
} */

// --------------------------------------------------

// Looping Backwards and Loops in Loops
/* const sol = [
  "Sol",
  "Ahn",
  2021 - 1994,
  "junior frontend developer",
  ["Michael", "Peter", "Steven"],
];

for (let i = sol.length - 1; i >= 0; i--) {
  console.log(i, sol[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
} */

// --------------------------------------------------

// The While Loop
/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
} */

// --------------------------------------------------

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
