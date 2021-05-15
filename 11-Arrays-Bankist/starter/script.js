"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Sol Ahn",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Logic
// Creating DOM Elements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;
  moves.forEach(function (move, i) {
    const type = move > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${move}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((move) => move > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Computing Usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// Implementing Login
// event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

// Implementing Transfers
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Simple Array Methods
/* let arr = ["a", "b", "c", "d", "e"];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log("-------------------------");

// splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

console.log("-------------------------");

// reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

console.log("-------------------------");

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log("-------------------------");

// join
console.log(letters.join(" - ")); */

// -----------------------------------------------------------

// Looping Arrays: forEach
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

console.log("---------------------forEach--------------------");

movements.forEach(function (move, i, arr) {
  if (move > 0) console.log(`Movement ${i + 1}: You deposited ${move}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(move)}`);
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

// forEach can not use break, continue
 */

// -----------------------------------------------------------

// forEach With Maps and Sets
/* // Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
}); */

// -----------------------------------------------------------

// Coding Challenge #1
/* 
// my solution
const checkDogs1 = function (dogsJulia, dogsKate) {
  const correctDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = correctDogsJulia.concat(dogsKate);
  allDogs.forEach(function (age, index) {
    const dogAge = age >= 3 ? "an adult 🐕" : "a poppy 🐶";
    console.log(
      `Dog number ${index + 1} is still ${dogAge}, and is ${age} years old`
    );
  });
};

checkDogs1([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs1([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// answer
const checkDogs2 = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs2([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
 */

// -----------------------------------------------------------

// The map Method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
// const movementsUSD = movements.map(function (move) {
//   return move * eurToUSD;
// });
const movementsUSD = movements.map((move) => move * eurToUSD);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const move of movements) movementsUSDfor.push(move * eurToUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (move, i) =>
    `Movement ${i + 1}: You ${move > 0 ? "deposited" : "withdrew"} ${Math.abs(
      move
    )}`
);
console.log(movementsDescriptions); */

// -----------------------------------------------------------

// The filter Method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (move, i, arr) {
  return move > 0;
});
console.log(movements);
console.log(deposits);

const depositFor = [];
for (const move of movements) if (move > 0) depositFor.push(move);
console.log(depositFor);

const withdrawals = movements.filter((move) => move < 0);
console.log(withdrawals); */

// -----------------------------------------------------------

// The reduce Method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator => Snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const move of movements) balance2 += move;
console.log(balance2);

// maximum value
const max = movements.reduce((acc, move) => {
  if (acc > move) return acc;
  else return move;
}, movements[0]);
console.log(max); */

// -----------------------------------------------------------

// Coding Challenge #2
/* 
// my solution
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => {
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });
  const adultHumanAge = humanAge.filter((age) => age >= 18);
  const averageAdultHumanAge =
    adultHumanAge.reduce((acc, age) => acc + age, 0) / adultHumanAge.length;
  return averageAdultHumanAge;
};
console.log(
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]),
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
);

// answer
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
 */

// -----------------------------------------------------------

// The Magic of Chaining Methods
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

// pipeline
const totalDepositsUSD = movements
  .filter((move) => move > 0)
  .map((move, i, arr) => move * eurToUSD)
  // .map((move) => move * eurToUSD)
  .reduce((acc, move) => acc + move, 0);
console.log(totalDepositsUSD); */

// -----------------------------------------------------------

// Coding Challenge #3
/* const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);*/

// -----------------------------------------------------------

// The find Method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((move) => move < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account); */

// -----------------------------------------------------------

// some and every
/* // some
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// equality
console.log(movements.includes(-130));

// condition
console.log(movements.some((move) => move === -130));

const anyDeposits = movements.some((move) => move > 1500);
console.log(anyDeposits);

// every
console.log(movements.every((move) => move > 0));
console.log(account4.movements.every((move) => move > 0));

// separate callback
const deposit = (move) => move > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

// -----------------------------------------------------------

/* // flat and flatmap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, move) => acc + move, 0);
// console.log(overallBalance);

// flat
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, move) => acc + move, 0);
console.log(overallBalance);

// flatmap
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, move) => acc + move, 0);
console.log(overallBalance2); */

// -----------------------------------------------------------

// Sorting Arrays
/* 
// string
const owners = ["Tom", "Jane", "Matilda", "David"];
console.log(owners.sort());
console.log(owners);

// number
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// return < 0 => a, b (keep order)
// return > 0 => b, a (switch order)
// ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
 */

// -----------------------------------------------------------

// More Ways of Creating and Filling Arrays
/* const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty arrays + fill method
const x = new Array(7);
console.log(x); // [empty x 7]
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
  console.log(movementsUI2);
}); */

// -----------------------------------------------------------

// Array Methods Practice
/* const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((move) => move > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((move) => move >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// prefized ++ operator
let a = 10;
console.log(++a);
console.log(a);

const { deposits, withdrawls } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
      sums[cur > 0 ? "deposits" : "withdrawls"] += cur;
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );
console.log(deposits, withdrawls);

// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE")); */

// -----------------------------------------------------------

// Coding Challenge #4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // my solution
// const recommendedFood = dogs.forEach(function (dog) {
//   dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// sarahDog.curFood > recommendedFood
//   ? console.log("eating too much")
//   : console.log("eating too little");

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recommendedFood)
//   .map((dog) => dog.owners)
//   .flat();
// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recommendedFood)
//   .map((dog) => dog.owners)
//   .flat();
// console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

// const eatProperlyDog = dogs.some((dog) => dog.curFood === dog.recommendedFood);
// console.log(eatProperlyDog);

// const eatOkeyDog = dogs.some(
//   (dog) =>
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
// );
// console.log(eatOkeyDog);

// const eatOkeyDogArr = dogs.filter(
//   (dog) =>
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
// );
// console.log(eatOkeyDogArr);

// const sortedDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);

// // answer
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating ${
//     dogSarah.curFood > dogSarah.recFood ? "too much" : "too little"
//   }`
// );

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooLittle);

// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// const checkEatingOkay = (dog) =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay));

// console.log(dogs.filter(checkEatingOkay));

// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);
