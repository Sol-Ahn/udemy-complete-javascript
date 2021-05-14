"use strict";
/* 
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
}); */

// Destructuring Arrays
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// ----------------------------------------------------------

// Destructuring Objects
/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

// ----------------------------------------------------------

// Spread Operator
/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets BUT NOT objects!
const str = "Sol";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Ahn`); => Error

// real-world example
const ingredients = [
  //   prompt("Let's make pasta! Ingredients 1?"),
  //   prompt("Ingredients 2?"),
  //   prompt("Ingredients 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 2018, ...restaurant, founder: "Sol Ahn" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// ----------------------------------------------------------

// Rest Pattern and Parameters
/* // 1) Destructuring
// SPREAD, because on RIGHT side of '='
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms"); */

// ----------------------------------------------------------

// Short Circuiting (&& and ||)
// use ANY data type, return ANY data type => short-circuiting
/* console.log("-------OR-------");
console.log(3 || "Sol");
console.log("" || "Sol");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("-------AND-------");
console.log(0 && "Sol");
console.log(7 && "Sol");

console.log("Hello" && 23 && null && "sol");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
 */

// ----------------------------------------------------------

// The Nullish Coalescing Operator (??)
/* restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish value: null, undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */

// ----------------------------------------------------------

// Coding Challenge #1
/* const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// my solution
const players1 = game.players[0];
const players2 = game.players[1];

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1: team1, x: draw, team2: team2 } = { ...game.odds };
console.log(team1, draw, team2);

// data 1
const scoredPlayers = ["Davies", "Muller", "Lewandowski", "Kimmich"];
const printGoals = function (playerNames) {
  let scoredPlayersNames = "";
  for (let i = 0; i < playerNames; i++) {
    scoredPlayersNames += `${scoredPlayers[i]} `;
  }
  console.log(scoredPlayersNames, scoredPlayers.length);
};
printGoals(2);

// data 2
const printGoals = function (playerNames) {
  let scoredPlayersNames = "";
  for (let i = 0; i < playerNames; i++) {
    scoredPlayersNames += `${game.scored[i]} `;
  }
  console.log(scoredPlayersNames, game.scored.length);
};
printGoals(game.scored.length);

team1 > team2 ? console.log(game.team2) : console.log(game.team1);

// answer
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Levandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win!`);
team1 > team2 && console.log(`${game.team2} is more likely to win!`);
 */

// ----------------------------------------------------------

// Looping Arrays : The For-of Loop
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log(...menu.entries()); */

// ----------------------------------------------------------

// Enhanced Object Literals
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});

// ----------------------------------------------------------

// Optional Chaining (?.)
/* if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // TypeError

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// arrays
// const users = [{ name: "sol", email: "solsol@gmail.com" }];
const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty"); */

// ----------------------------------------------------------

// Looping Objects: Object keys, values and entries
/* const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) openStr += `${day}, `;
console.log(openStr);

// for (const day of Object.keys(openingHours)) console.log(day);

// property values
const values = Object.values(openingHours);
console.log(values);

// property entries
// entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries)
  console.log(`On ${day} we open at ${open} and close at ${close}`);
 */

// ----------------------------------------------------------

// Coding Challenge #2
/* const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// my solution
for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);

let sum = 0;
const oddValues = Object.values(game.odds);
for (const odd of oddValues) {
  sum += odd;
  console.log(sum);
}
const oddAvg = sum / oddValues.length;
console.log(oddAvg);

const oddEntries = Object.entries(game.odds);
console.log(oddEntries);

for (const [key, value] of oddEntries) {
  if (key === "team1") console.log(`Odd of victory ${game.team1}: ${value}`);
  else if (key === "team2")
    console.log(`Odd of victory ${game.team2}: ${value}`);
  else console.log(`Odd of draw: ${value}`);
}

const scorers = {};
const scoredPlayers = game.scored;
for (let i = 0; i < scoredPlayers.length; i++) {
  if (!Object.keys(scorers).includes(scoredPlayers[i]))
    scorers[scoredPlayers[i]] = 1;
  else scorers[scoredPlayers[i]]++;
}
console.log(scorers);

// answer
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
} */

// ----------------------------------------------------------

// Sets
/* const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Sol"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// Set does not have index
// console.log(ordersSet[0]);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set("hellosolahn").size); */

// ----------------------------------------------------------

// Maps: Fundamentals
/* const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScipt"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]); */

// ----------------------------------------------------------

// Coding Challenge #3
/* const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// my solution
let events = [];
for (const [key, value] of gameEvents) {
  events.push(value);
}
const eventsUnique = [...new Set(events)];
console.log(eventsUnique);

gameEvents.delete(64);
console.log(gameEvents);

let average = 0;
for (const [key, value] of gameEvents) average += key;
average /= 90;
console.log(
  `An event happened, on average, every ${Math.floor(average)} minutes`
);

for (const [key, value] of gameEvents) {
  const eventStr = `${key}: ${value}`;
  if (key <= 45) console.log("[FIRST HALF]" + eventStr);
  else console.log("[SECOND HALF]" + eventStr);
}

// answer
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
} */

// ----------------------------------------------------------

// Working With Strings
/* // Part 1
const airline = "Korean Air Korea";
// const plane = "A496";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
console.log("B531"[0]);

console.log(airline.length);
console.log("B531".length);

console.log(airline.indexOf("e"));
console.log(airline.lastIndexOf("e"));
console.log(airline.indexOf("korea"));

console.log(airline.slice(7));
console.log(airline.slice(7, 10));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-5));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😕");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("6C");
checkMiddleSeat("17E");

console.log(new String("sol"));
console.log(typeof new String("sol"));

console.log(typeof new String("sol").slice(1));

// Part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = "sOlAhN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = "solahn@gmail.com";
const loginEmail = " Solahn@gmail.Com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = loginEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97￡";
const priceUS = priceGB.replace("￡", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23! Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// booleans
const plane = "Airbus A258neo";
console.log(plane.includes("A258"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo"))
  console.log("Part of the NEW Airbus family");

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are NOT allowed on board");
  else console.log("Welcome aboard!");
};
checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// Part 3
// split, join
console.log("a+very+nice+string".split("+"));
console.log("Sol Ahn".split(" "));

const [firstName, lastName] = "Sol Ahn".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("sol ahn");

// padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("sol".padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(4607291));
console.log(maskCreditCard(39627504297489));
console.log(maskCreditCard("4302639562936"));

// repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️ ".repeat(n)}`);
};
planesInLine(3);
planesInLine(7); */

// ----------------------------------------------------------

// Coding Challenge #4
/* // my solution
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

function convertToCamelCase(text) {
  const lowerText = text.toLowerCase();
  const lowerTextList = lowerText.split("\n");
  for (let i = 0; i < lowerTextList.length; i++) {
    const camelCaseCharacter = lowerTextList[i][
      lowerTextList[i].indexOf("_") + 1
    ].toUpperCase();
    const camelCaseText =
      lowerTextList[i].slice(0, lowerTextList[i].indexOf("_")) +
      camelCaseCharacter +
      lowerTextList[i].slice(lowerTextList[i].indexOf("_") + 2);
    console.log(camelCaseText.trim().padEnd(20, " ") + "✅".repeat(i + 1));
  }
}

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  convertToCamelCase(text);
});

// answer
// Data Set
// underscore_case
//   first_name
// Some_Variable
//     calculate_AGE
// delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(index + 1)}`);
  }
}); */

// ----------------------------------------------------------

// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// console.log(flights.split("+"));

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);
  console.log(output);
}
